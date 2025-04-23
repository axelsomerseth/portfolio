import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/16/solid";
import { Trans, useTranslation } from "react-i18next";
import { contactMe } from "../../services/contact";
// import { Field, Label, Switch } from "@headlessui/react";

const FormSection: React.FC = () => {
  // const [agreed, setAgreed] = useState(false);
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    contactMe(name, email, message)
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="isolate bg-white dark:bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div className="relative">
        <div className="static">
          <div className="static">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
                <Trans t={t} i18nKey={"contact.title"} />
              </h2>
              {/* <p className="mt-2 text-lg/8 text-gray-600">
                Aute magna irure deserunt veniam aliqua magna enim voluptate.
              </p> */}
            </div>
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm/6 font-semibold text-gray-600 dark:text-gray-400"
                  >
                    <Trans t={t} i18nKey={"contact.name"} />
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-600 dark:text-gray-400 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </div>
                </div>
                {/* <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm/6 font-semibold text-gray-600 dark:text-gray-400"
                  >
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-600 dark:text-gray-400 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                    />
                  </div>
                </div> */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-gray-600 dark:text-gray-400"
                  >
                    <Trans t={t} i18nKey={"contact.email"} />
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-600 dark:text-gray-400 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                </div>
                {/* <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm/6 font-semibold text-gray-600 dark:text-gray-400"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-primary">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                          id="country"
                          name="country"
                          autoComplete="country"
                          aria-label="Country"
                          className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
                        >
                          <option>US</option>
                          <option>CA</option>
                          <option>EU</option>
                        </select>
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                        />
                      </div>
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="text"
                        placeholder="123-456-7890"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-600 dark:text-gray-400 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div> */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-gray-600 dark:text-gray-400"
                  >
                    <Trans t={t} i18nKey={"contact.message"} />
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-600 dark:text-gray-400 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    />
                  </div>
                </div>
                {/* <Field className="flex gap-x-4 sm:col-span-2">
                  <div className="flex h-6 items-center">
                    <Switch
                      checked={agreed}
                      onChange={setAgreed}
                      className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary data-[checked]:bg-primary"
                    >
                      <span className="sr-only">Agree to policies</span>
                      <span
                        aria-hidden="true"
                        className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                      />
                    </Switch>
                  </div>
                  <Label className="text-sm/6 text-gray-600">
                    By selecting this, you agree to our{" "}
                    <a href="#" className="font-semibold text-primary">
                      privacy&nbsp;policy
                    </a>
                    .
                  </Label>
                </Field> */}
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/80"
                >
                  <div className="flex w-full h-full justify-center items-center gap-3">
                    <Trans t={t} i18nKey={"contact.submit"} />
                    <PaperAirplaneIcon className="size-6" />
                  </div>
                </button>
              </div>
            </form>
          </div>
          <div className="absolute left-0 top-0 -z-20 w-full">
            <div className="relative transform-gpu overflow-hidden blur-3xl ">
              <div
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
                className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffdd80] to-[#df6969] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
