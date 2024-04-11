import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { contactMe } from "../services/contact";

const Contact: React.FC<{}> = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const success = await contactMe(name, email, message);
    console.log("Success: ", success);
  };

  return (
    <section className="Contact" id="contact">
      <h2 className="section-header">
        <Trans i18nKey={"contact.title"} />
      </h2>

      <div className="flex flex-col">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <div className="flex flex-row items-center">
              <div className="flex-initial w-1/6">
                <label htmlFor="name">
                  <Trans i18nKey={"contact.name"} />
                  {": "}
                </label>
              </div>
              <div className="flex-initial w-5/6">
                <input
                  type="text"
                  id="name"
                  name="sender-name"
                  placeholder={t("contact.namePlaceholder")}
                  className="input-field"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-control">
            <div className="flex flex-row items-center">
              <div className="flex-initial w-1/6">
                <label htmlFor="email">
                  <Trans i18nKey={"contact.email"} />
                  {": "}
                </label>
              </div>
              <div className="flex-initial w-5/6">
                <input
                  type="email"
                  id="email"
                  name="sender-email"
                  placeholder={t("contact.emailPlaceholder")}
                  className="input-field"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-control">
            <div className="flex flex-col">
              <div className="flex-initial">
                <label htmlFor="message">
                  <Trans i18nKey={"contact.message"} />
                  {": "}
                </label>
              </div>
              <div className="flex-initial">
                <textarea
                  id="message"
                  cols={60}
                  rows={10}
                  placeholder={t("contact.messagePlaceholder")}
                  name="message"
                  className="input-field"
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex-initial submit-button-container">
              <input
                type="submit"
                value={t("contact.submit")}
                className="submit-button"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
