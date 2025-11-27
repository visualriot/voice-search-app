"use client";

import { Select, SelectItem } from "@heroui/select";
import { Avatar } from "@heroui/avatar";
import { LangIcon } from "./icons";

import { useLanguage } from "./LanguageProvider";
import { supportedLangs, langLabels, langCountries } from "@/lib/i18n";
import { countries } from "@/data/countries";

export default function CountrySelect() {
  const { lang, setLang, hydrated } = useLanguage();

  const languageOptions = supportedLangs.map((code) => {
    const country = countries.find((c) => c.key === langCountries[code]);
    return {
      value: code,
      label: langLabels[code],
      flag: country?.flag ?? "",
    };
  });

  if (!hydrated) return null;

  return (
    <Select
      //   label="Select your language"
      radius="sm"
      className="max-w-[160px]"
      selectedKeys={[lang]}
      onSelectionChange={(keys) => {
        const value = Array.from(keys)[0];
        setLang(value as any);
      }}
      startContent={<LangIcon />}
    >
      {languageOptions.map((option) => (
        <SelectItem
          key={option.value}
          startContent={
            <Avatar alt={option.label} className="w-5 h-5" src={option.flag} />
          }
        >
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
