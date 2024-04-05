import React from "react";
import { Trans, useTranslation } from "react-i18next";

const Contact: React.FC<{}> = () => {
  const { t } = useTranslation();

  // TODO: implement controlled inputs in this component

  return (
    <section className="Contact">
      <h2 className="section-header">
        <Trans i18nKey={"contact.title"} />
      </h2>

      <div className="flex flex-col">
        <form action="https://eov9tq5whnye23b.m.pipedream.net" method="POST">
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
