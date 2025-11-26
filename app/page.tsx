// import { Link } from "@heroui/link";
// import { button as buttonStyles } from "@heroui/theme";
// import { siteConfig } from "@/config/site";
import { Code } from "@heroui/code";
import { title, subtitle } from "@/components/primitives";

import VoiceButton from "@/components/VoiceButton";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center space-y-20 min-h-full">
      <div className="inline-block text-center">
        <span className={title({ color: "gray" })}>Press the&nbsp;</span>
        <span className={title({ color: "red" })}>button</span>
        <span className={title({ color: "gray" })}>&nbsp;&&nbsp;</span>
        <span className={title({ color: "red" })}>talk</span>

        <div className={subtitle({ class: "mt-6" })}>
          Start voice dictation instantly.
        </div>
      </div>

      {/* <---- YOUR COMPONENT ----> */}
      <VoiceButton />
      <div className="inline-block text-center space-y-4 opacity-85">
        <p className="font-mono text-default-500">
          Please,&nbsp;
          <span className="text-default-800">
            use Google Chrome browser{" "}
          </span>{" "}
          for this app.
        </p>
        <p className="font-mono text-default-500">
          On your first use, please{" "}
          <span className="text-default-800">allow microphone access</span>.
        </p>
        <p className="font-mono text-default-500">
          After that, just tap and talk.
        </p>
      </div>
    </section>
  );
}
