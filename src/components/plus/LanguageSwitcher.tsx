import { useEffect, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/16/solid";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

const languages = [
  {
    id: 1,
    name: "English",
    flag: "🇺🇸",
    code: "en",
  },
  {
    id: 2,
    name: "Español",
    flag: "🇭🇳",
    code: "es",
  },
  {
    id: 3,
    name: "Português",
    flag: "🇧🇷",
    code: "pt",
  },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState(languages[0]);

  useEffect(() => {
    i18n.changeLanguage(selected.code);
  }, [i18n, selected]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative min-w-40">
        <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md py-1.5 pl-3 pr-2 text-left theme outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
            <span className="size-5 shrink-0 rounded-full">
              {selected.flag}
            </span>
            <span className="block truncate">{selected.name}</span>
          </span>
          <ChevronUpDownIcon
            aria-hidden="true"
            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md theme py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {languages.map((lang) => (
            <ListboxOption
              key={lang.id}
              value={lang}
              className="group relative cursor-default select-none py-2 pl-3 pr-9 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
            >
              <div className="flex items-center">
                <span className="size-5 shrink-0 rounded-full">
                  {lang.flag}
                </span>
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  {lang.name}
                </span>
              </div>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                <CheckIcon aria-hidden="true" className="size-7" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
