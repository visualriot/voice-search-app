import type { AppLang } from "@/types";

// Unified language registry
export const languages: Record<
  AppLang,
  {
    label: string; // Shown in select
    country: string; // Key from countries.ts
    speechLocale: string; // Used by SpeechRecognition
    translations: {
      headingParts: [
        {
          text: string;
          color:
            | "violet"
            | "peach"
            | "red"
            | "yellow"
            | "blue"
            | "cyan"
            | "green"
            | "pink"
            | "gray"
            | "foreground";
        },
        {
          text: string;
          color:
            | "violet"
            | "peach"
            | "red"
            | "yellow"
            | "blue"
            | "cyan"
            | "green"
            | "pink"
            | "gray"
            | "foreground";
        },
        {
          text: string;
          color:
            | "violet"
            | "peach"
            | "red"
            | "yellow"
            | "blue"
            | "cyan"
            | "green"
            | "pink"
            | "gray"
            | "foreground";
        },
        {
          text: string;
          color:
            | "violet"
            | "peach"
            | "red"
            | "yellow"
            | "blue"
            | "cyan"
            | "green"
            | "pink"
            | "gray"
            | "foreground";
        },
      ];
      heading: string;
      subheading: string;
      manualOne: string;
      manualTwo: string;
      manualThree: string;
      btnStart: string;
      btnListen: string;
      btnStop: string;
      btnErrOne: string;
      btnErrTwo: string;
      btnErrThree?: string;
    };
  }
> = {
  zh: {
    label: "Chinese",
    country: "cn",
    speechLocale: "zh-CN",
    translations: {
      headingParts: [
        { text: "点击 ", color: "gray" },
        { text: "按钮 ", color: "red" },
        { text: "然后 ", color: "gray" },
        { text: "说话", color: "red" },
      ],
      heading: "点击按钮然后说话",
      subheading:
        "你的话语会直接进入 <span class='text-default-600'>Google 搜索。</span>",
      manualOne:
        "请在 <span class='text-default-800'>桌面版 Google Chrome</span> 中打开此应用。",
      manualTwo:
        "首次使用时请 <span class='text-default-800'>允许麦克风权限</span>，如语言检测不正确，请 <span class='text-default-800'>手动调整</span>。",
      manualThree:
        "之后设置会自动保存，下次只需 <span class='text-default-800'>点击并说话</span>。",
      btnStart: "开始说话",
      btnListen: "正在聆听...",
      btnStop: "再次点击停止",
      btnErrOne: "我有点听不清…",
      btnErrTwo: "我没听懂。",
      btnErrThree: "请检查语言或再试一次。",
    },
  },
  en: {
    label: "English",
    country: "gb",
    speechLocale: "en-GB",
    translations: {
      headingParts: [
        { text: "Press the ", color: "gray" },
        { text: "button ", color: "red" },
        { text: "& ", color: "gray" },
        { text: "talk", color: "red" },
      ],
      heading: "Press the button & talk",
      subheading:
        "Your words go straight into <span class='text-default-600'>Google Search.</span>",
      manualOne:
        "Please open this app in <span class='text-default-800'>desktop Google Chrome</span>.",
      manualTwo:
        "<span class='text-default-800'>Allow mic access</span> the first time, and <span class='text-default-800'>switch the language</span> if it’s not correct.",
      manualThree:
        "After that, your settings stay saved, so you can just <span class='text-default-800'>tap and talk</span>.",
      btnStart: "Start Dictation",
      btnListen: "I'm listening carefully...",
      btnStop: "Click again to stop",
      btnErrOne: "I'm having trouble picking that up…",
      btnErrTwo: "I didn’t quite catch that.",
      btnErrThree: "Please check your language or try again.",
    },
  },

  fr: {
    label: "French",
    country: "fr",
    speechLocale: "fr-FR",
    translations: {
      headingParts: [
        { text: "Appuie sur le ", color: "gray" },
        { text: "bouton ", color: "red" },
        { text: "et ", color: "gray" },
        { text: "parle", color: "red" },
      ],
      heading: "Appuie sur le bouton et parle",
      subheading:
        "Tes mots iront directement dans <span class='text-default-600'>la recherche Google.</span>",
      manualOne:
        "Ouvre cette application dans <span class='text-default-800'>Google Chrome sur ton ordinateur</span>.",
      manualTwo:
        "Lors du premier usage, <span class='text-default-800'>autorise l’accès au micro</span> et <span class='text-default-800'>change la langue</span> si elle est incorrecte.",
      manualThree:
        "Ensuite, tes réglages seront enregistrés — tu n’auras plus qu’à <span class='text-default-800'>taper et parler</span>.",
      btnStart: "Commencer à parler",
      btnListen: "Écoute...",
      btnStop: "Appuie encore pour arrêter",
      btnErrOne: "J’ai du mal à t’entendre…",
      btnErrTwo: "Je n’ai pas bien compris.",
      btnErrThree: "Vérifie la langue ou réessaie.",
    },
  },
  de: {
    label: "German",
    country: "de",
    speechLocale: "de-DE",
    translations: {
      headingParts: [
        { text: "Drücke den ", color: "gray" },
        { text: "Button ", color: "red" },
        { text: "und ", color: "gray" },
        { text: "sprich", color: "red" },
      ],
      heading: "Drücke den Button und sprich",
      subheading:
        "Deine Worte gehen direkt in <span class='text-default-600'>die Google-Suche.</span>",
      manualOne:
        "Bitte öffne diese App in <span class='text-default-800'>Google Chrome auf deinem Desktop</span>.",
      manualTwo:
        "Erlaube beim ersten Start <span class='text-default-800'>den Mikrofonzugriff</span> und <span class='text-default-800'>ändere die Sprache</span>, falls sie falsch erkannt wurde.",
      manualThree:
        "Danach werden deine Einstellungen gespeichert – beim nächsten Mal einfach <span class='text-default-800'>tippen und sprechen</span>.",
      btnStart: "Spracheingabe starten",
      btnListen: "Höre zu...",
      btnStop: "Erneut drücken zum Stoppen",
      btnErrOne: "Ich habe Schwierigkeiten, dich zu verstehen…",
      btnErrTwo: "Ich habe das nicht ganz verstanden.",
      btnErrThree: "Bitte überprüfe die Sprache oder versuche es erneut.",
    },
  },
  hi: {
    label: "Hindi",
    country: "in",
    speechLocale: "hi-IN",
    translations: {
      headingParts: [
        { text: "बटन ", color: "red" },
        { text: "दबाएँ ", color: "gray" },
        { text: "और ", color: "gray" },
        { text: "बोलें", color: "red" },
      ],
      heading: "बटन दबाएँ और बोलें",
      subheading:
        "आपके शब्द सीधे <span class='text-default-600'>Google सर्च</span> में जाएंगे।",
      manualOne:
        "कृपया इस ऐप को <span class='text-default-800'>डेस्कटॉप Google Chrome</span> में खोलें।",
      manualTwo:
        "पहली बार उपयोग करते समय <span class='text-default-800'>माइक की अनुमति दें</span> और यदि भाषा गलत हो तो <span class='text-default-800'>उसे बदलें</span>।",
      manualThree:
        "इसके बाद आपकी सेटिंग्स सेव हो जाएँगी — अगली बार बस <span class='text-default-800'>टैप करें और बोलें</span>।",
      btnStart: "बोलना शुरू करें",
      btnListen: "ध्यान से सुन रहा/रही हूँ...",
      btnStop: "रोकने के लिए फिर दबाएँ",
      btnErrOne: "मुझे ठीक से सुनाई नहीं दे रहा…",
      btnErrTwo: "मैं यह समझ नहीं पाया/पाई।",
      btnErrThree: "भाषा जाँचें या फिर से कोशिश करें",
    },
  },
  it: {
    label: "Italian",
    country: "it",
    speechLocale: "it-IT",
    translations: {
      headingParts: [
        { text: "Premi il ", color: "gray" },
        { text: "pulsante ", color: "red" },
        { text: "e ", color: "gray" },
        { text: "parla", color: "red" },
      ],
      heading: "Premi il pulsante e parla",
      subheading:
        "Le tue parole andranno direttamente nella <span class='text-default-600'>ricerca Google.</span>",
      manualOne:
        "Apri questa app in <span class='text-default-800'>Google Chrome sul tuo computer</span>.",
      manualTwo:
        "Al primo utilizzo, <span class='text-default-800'>consenti l’accesso al microfono</span> e <span class='text-default-800'>cambia la lingua</span> se non è corretta.",
      manualThree:
        "Dopo la prima volta, le impostazioni resteranno salvate — semplicemente <span class='text-default-800'>tocca e parla</span>.",
      btnStart: "Inizia a dettare",
      btnListen: "Sto ascoltando...",
      btnStop: "Clicca di nuovo per fermare",
      btnErrOne: "Faccio fatica a sentirti…",
      btnErrTwo: "Non ho capito bene.",
      btnErrThree: "Controlla la lingua o riprova.",
    },
  },
  pl: {
    label: "Polish",
    country: "pl",
    speechLocale: "pl-PL",
    translations: {
      headingParts: [
        { text: "Naciśnij ", color: "gray" },
        { text: "przycisk ", color: "red" },
        { text: "i ", color: "gray" },
        { text: "mów", color: "red" },
      ],
      heading: "Naciśnij przycisk i mów",
      subheading: "Twoje słowa trafią prosto do wyszukiwarki Google.",
      manualOne:
        "Otwórz tę aplikację w <span class='text-default-800'>Google Chrome na Twoim komputerze</span>.",
      manualTwo:
        "Przy pierwszym użyciu, <span class='text-default-800'>zezwól na dostęp do mikrofonu</span> i <span class='text-default-800'>zmień język</span>, jeśli jest niepoprawny.",
      manualThree:
        "Twoje ustawienia zostaną zapisane, więc jak wrócisz, możesz po prostu <span class='text-default-800'>kliknąć i mówić</span>.",
      btnStart: "Rozpocznij dyktowanie",
      btnListen: "Słucham uważnie...",
      btnStop: "Naciśnij ponownie, aby zatrzymać",
      btnErrOne: "Nie za bardzo rozumiem...",
      btnErrTwo: "Coś poszło nie tak",
      btnErrThree: "Sprawdź język albo spróbuj ponownie.",
    },
  },

  es: {
    label: "Spanish",
    country: "es",
    speechLocale: "es-ES",
    translations: {
      headingParts: [
        { text: "Pulsa el ", color: "gray" },
        { text: "botón ", color: "red" },
        { text: "y ", color: "gray" },
        { text: "habla", color: "red" },
      ],
      heading: "Pulsa el botón y habla",
      subheading:
        "Tus palabras irán directamente a <span class='text-default-600'>la búsqueda de Google.</span>",
      manualOne:
        "Abre esta aplicación en <span class='text-default-800'>Google Chrome en tu ordenador</span>.",
      manualTwo:
        "La primera vez, <span class='text-default-800'>permite el acceso al micrófono</span> y <span class='text-default-800'>cambia el idioma</span> si no se detectó bien.",
      manualThree:
        "Después, tus ajustes quedarán guardados — solo <span class='text-default-800'>toca y habla</span>.",
      btnStart: "Empezar a hablar",
      btnListen: "Escuchando...",
      btnStop: "Pulsa de nuevo para parar",
      btnErrOne: "Me cuesta entenderte…",
      btnErrTwo: "No lo entendí del todo.",
      btnErrThree: "Revisa el idioma o inténtalo de nuevo.",
    },
  },

  uk: {
    label: "Ukrainian",
    country: "ua",
    speechLocale: "uk-UA",
    translations: {
      headingParts: [
        { text: "Натисніть ", color: "gray" },
        { text: "кнопку ", color: "red" },
        { text: "і ", color: "gray" },
        { text: "говоріть", color: "red" },
      ],
      heading: "Натисніть кнопку і говоріть",
      subheading:
        "Ваші слова підуть прямо в <span class='text-default-600'>пошук Google.</span>",
      manualOne:
        "Відкрийте цей застосунок у <span class='text-default-800'>Google Chrome на комп’ютері</span>.",
      manualTwo:
        "Під час першого запуску <span class='text-default-800'>дозвольте доступ до мікрофона</span> і <span class='text-default-800'>змініть мову</span>, якщо вона визначена неправильно.",
      manualThree:
        "Після цього налаштування збережуться — наступного разу просто <span class='text-default-800'>натискайте і говоріть</span>.",
      btnStart: "Почати говорити",
      btnListen: "Слухаю...",
      btnStop: "Натисніть ще раз, щоб зупинити",
      btnErrOne: "Мені важко це розчути…",
      btnErrTwo: "Я цього не зрозумів(ла).",
      btnErrThree: "Перевірте мову або спробуйте ще раз.",
    },
  },
};
