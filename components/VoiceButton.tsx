// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Button } from "@heroui/button";
// import type { AppLang } from "@/types/index";
// import { speechLocales } from "@/lib/i18n";
// import { translations } from "@/lib/i18n";

// declare global {
//   interface Window {
//     SpeechRecognition: any;
//     webkitSpeechRecognition: any;
//   }

//   interface SpeechRecognition {
//     lang: string;
//     interimResults: boolean;
//     onresult: ((event: any) => void) | null;
//     onerror: ((event: any) => void) | null;
//     onend: ((event: any) => void) | null;
//     start(): void;
//     stop(): void;
//   }
// }

// export default function VoiceButton({ lang }: { lang: AppLang }) {
//   const t = translations[lang];
//   const [isListening, setIsListening] = useState(false);
//   const recognitionRef = useRef<SpeechRecognition | null>(null);

//   useEffect(() => {
//     const SpeechRecognition =
//       (window as any).SpeechRecognition ||
//       (window as any).webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       alert("Your browser does not support voice recognition.");
//       return;
//     }

//     // Create only once
//     const recognition = new SpeechRecognition();
//     recognition.interimResults = false;
//     recognition.continuous = false;
//     recognition.maxAlternatives = 1;

//     recognition.onresult = (event: any) => {
//       const text = event.results[0][0].transcript;
//       window.open(
//         "https://www.google.com/search?q=" + encodeURIComponent(text),
//         "_blank"
//       );
//     };

//     recognition.onerror = () => {
//       setIsListening(false);
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };

//     recognitionRef.current = recognition;

//     // Cleanup
//     return () => {
//       recognition.abort();
//     };
//   }, []);

//   // Update language without recreating recognition
//   useEffect(() => {
//     if (recognitionRef.current) {
//       recognitionRef.current.lang = speechLocales[lang];
//     }
//   }, [lang]);

//   const toggleListening = () => {
//     if (recognitionRef.current) {
//       if (isListening) {
//         recognitionRef.current.stop();
//         setIsListening(false);
//       } else {
//         setIsListening(true);
//         recognitionRef.current.start();
//       }
//     }
//   };

//   return (
//     <Button
//       onClick={toggleListening}
//       className="bg-gradient-to-b from-[#FF0040] to-[#FF6B35] text-white font-semibold shadow-lg w-[90vw] lg:w-[60vw] max-w-[80rem] h-[35vh] text-4xl hover:scale-103 transition-all ease-in-out flex flex-col items-center justify-center"
//     >
//       <span className={isListening ? "animate-pulse" : ""}>
//         {isListening ? t.btnListen : t.btnStart}
//       </span>
//       {isListening && (
//         <span className="text-sm mt-2 font-normal text-orange-300 animate-pulse">
//           {t.btnStop}
//         </span>
//       )}
//     </Button>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/button";
import type { AppLang } from "@/types/index";
import { speechLocales } from "@/lib/i18n";
import { translations } from "@/lib/i18n";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }

  interface SpeechRecognition {
    lang: string;
    interimResults: boolean;
    onresult: ((event: any) => void) | null;
    onerror: ((event: any) => void) | null;
    onend: ((event: any) => void) | null;
    start(): void;
    stop(): void;
  }
}

export default function VoiceButton({ lang }: { lang: AppLang }) {
  const t = translations[lang];
  const [isListening, setIsListening] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const secondTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isStartingRef = useRef(false);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support voice recognition.");
      return;
    }

    // Create only once
    const recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      // Clear the timeout since we got a result
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (secondTimeoutRef.current) clearTimeout(secondTimeoutRef.current);

      // Reset listening state and message
      setIsListening(false);
      setFeedbackMessage(null);

      const text = event.results[0][0].transcript;
      window.open(
        "https://www.google.com/search?q=" + encodeURIComponent(text),
        "_blank"
      );
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      if (!isStartingRef.current) {
        setIsListening(false);
      }
      isStartingRef.current = false;
    };

    recognitionRef.current = recognition;

    // Cleanup
    return () => {
      recognition.abort();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (secondTimeoutRef.current) clearTimeout(secondTimeoutRef.current);
    };
  }, []);

  // Update language without recreating recognition
  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = speechLocales[lang];
    }

    // If listening or showing a message when language changes, stop and reset
    if (isListening || feedbackMessage) {
      recognitionRef.current?.stop();
      setIsListening(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (secondTimeoutRef.current) clearTimeout(secondTimeoutRef.current);
      setFeedbackMessage(null);
    }
  }, [lang]);

  const toggleListening = () => {
    if (recognitionRef.current) {
      if (isListening) {
        recognitionRef.current.stop();
        setIsListening(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (secondTimeoutRef.current) clearTimeout(secondTimeoutRef.current);
        setFeedbackMessage(null);
      } else {
        isStartingRef.current = true;
        setIsListening(true);
        setFeedbackMessage(null);
        recognitionRef.current.start();

        // First timeout: after 10 seconds, show "I struggle to hear you"
        timeoutRef.current = setTimeout(() => {
          setFeedbackMessage("struggling");

          // Second timeout: after another 5 seconds, show final error and stop
          secondTimeoutRef.current = setTimeout(() => {
            recognitionRef.current?.stop();
            setIsListening(false);
            setFeedbackMessage("failed");

            // Reset after 3 seconds
            setTimeout(() => {
              setFeedbackMessage(null);
            }, 5000);
          }, 5000);
        }, 8000);
      }
    }
  };

  return (
    <Button
      onClick={toggleListening}
      aria-label={
        feedbackMessage === "struggling"
          ? t.btnErrOne
          : feedbackMessage === "failed"
            ? t.btnErrTwo
            : isListening
              ? t.btnListen
              : t.btnStart
      }
      className={` ${isListening || (feedbackMessage && feedbackMessage !== "failed") ? "animate-pulse" : ""} text-orange-100 bg-gradient-to-b from-[#FF0040] to-[#FF6B35] font-semibold shadow-lg w-[90vw] lg:w-[60vw] max-w-[80rem] h-[35vh] text-4xl hover:scale-103 transition-all ease-in-out flex flex-col items-center justify-center`}
    >
      <p
        className={
          isListening || feedbackMessage === "struggling"
            ? "opacity-80 italic text-3xl"
            : feedbackMessage === "failed"
              ? "animate-pulse"
              : ""
        }
      >
        {feedbackMessage === "struggling"
          ? t.btnErrOne
          : feedbackMessage === "failed"
            ? t.btnErrTwo
            : isListening
              ? t.btnListen
              : t.btnStart}
      </p>
      {isListening || feedbackMessage === "struggling" ? (
        <span className="text-sm mt-2 font-normal text-orange-300">
          {t.btnStop}
        </span>
      ) : feedbackMessage === "failed" ? (
        <span className="text-sm mt-2 font-normal text-orange-300 animate-pulse">
          {t.btnErrThree}
        </span>
      ) : null}
    </Button>
  );
}
