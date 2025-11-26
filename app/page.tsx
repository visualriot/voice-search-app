// import { Link } from "@heroui/link";
// import { button as buttonStyles } from "@heroui/theme";
// import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

import VoiceButton from "@/components/VoiceButton";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-16">
      <div className="inline-block max-w-xl text-center">
        <span className={title({ color: "gray" })}>Press the&nbsp;</span>
        <span className={title({ color: "red" })}>button</span>
        <span className={title({ color: "gray" })}>&nbsp;&&nbsp;</span>
        <span className={title({ color: "red" })}>talk</span>

        <div className={subtitle({ class: "mt-4" })}>
          Start voice dictation instantly.
        </div>
      </div>

      {/* <---- YOUR COMPONENT ----> */}
      <VoiceButton />
    </section>
  );
}
