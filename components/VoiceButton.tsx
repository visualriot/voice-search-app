// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Button } from "@heroui/button";

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

// export default function VoiceButton() {
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

//     const recognition = new SpeechRecognition();
//     recognition.lang = "pl-PL"; // or "en-GB"
//     recognition.interimResults = false;

//     recognition.onresult = (event: any) => {
//       const text = event.results[0][0].transcript;
//       const searchUrl =
//         "https://www.google.com/search?q=" + encodeURIComponent(text);
//       window.open(searchUrl, "_blank");
//     };

//     recognition.onerror = () => {
//       setIsListening(false);
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };

//     recognitionRef.current = recognition;
//   }, []);

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
//       className="bg-gradient-to-b from-[#FF0040] to-[#FF6B35] text-white font-semibold shadow-lg px-16 py-24 md:px-[20vw] md:py-[20vh] text-4xl hover:scale-103 transition-transform flex flex-col items-center justify-center"
//     >
//       <span className={`${isListening ? "animate-pulse" : ""}`}>
//         {isListening ? "Listening carefully..." : "Start Speaking"}
//       </span>
//       {isListening && (
//         <span
//           className={`text-sm mt-2 font-normal text-orange-300 ${isListening ? "animate-pulse" : ""}`}
//         >
//           Press again to stop
//         </span>
//       )}
//     </Button>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@heroui/button";

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

export default function VoiceButton() {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Your browser does not support voice recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "pl-PL"; // or "en-GB"
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      const searchUrl =
        "https://www.google.com/search?q=" + encodeURIComponent(text);
      window.open(searchUrl, "_blank");
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const toggleListening = () => {
    if (recognitionRef.current) {
      if (isListening) {
        recognitionRef.current.stop();
        setIsListening(false);
      } else {
        setIsListening(true);
        recognitionRef.current.start();
      }
    }
  };

  return (
    <Button
      onClick={toggleListening}
      className="bg-gradient-to-b from-[#FF0040] to-[#FF6B35] text-white font-semibold shadow-lg px-16 py-24 md:px-[20vw] md:py-[20vh] text-4xl hover:scale-103 transition-transform flex flex-col items-center justify-center"
    >
      <span className={`${isListening ? "animate-pulse" : ""}`}>
        {isListening ? "Listening carefully..." : "Start Speaking"}
      </span>
      {isListening && (
        <span
          className={`text-sm mt-2 font-normal text-orange-300 ${isListening ? "animate-pulse" : ""}`}
        >
          Press again to stop
        </span>
      )}
    </Button>
  );
}
