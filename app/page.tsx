"use client";
import { title, subtitle } from "@/components/primitives";

import VoiceButton from "@/components/VoiceButton";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/i18n";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="flex flex-col items-center justify-center space-y-20 md:min-h-full">
      <div className="inline-block text-center">
        {/* <span className={title({ color: "gray" })}>Press the&nbsp;</span>
        <span className={title({ color: "red" })}>button</span>
        <span className={title({ color: "gray" })}>&nbsp;&&nbsp;</span>
        <span className={title({ color: "red" })}>talk</span> */}
        {t.headingParts.map((part, i) => (
          <span key={i} className={title({ color: part.color })}>
            {part.text}
          </span>
        ))}

        <div
          className={subtitle({ class: "mt-6" })}
          dangerouslySetInnerHTML={{ __html: t.subheading }}
        >
          {/* Your words go straight into Google Search. */}
        </div>
      </div>

      <VoiceButton lang={lang} />
      <div className="inline-block text-center space-y-4 opacity-85">
        <p
          className="text-center text-default-500 space-y-4 opacity-85 font-mono"
          dangerouslySetInnerHTML={{ __html: t.manualOne }}
        ></p>
        <p
          className="text-center text-default-500 space-y-4 opacity-85 font-mono"
          dangerouslySetInnerHTML={{ __html: t.manualTwo }}
        ></p>
        <p
          className="text-center text-default-500 space-y-4 opacity-85 font-mono"
          dangerouslySetInnerHTML={{ __html: t.manualThree }}
        ></p>
      </div>
    </section>
  );
}
