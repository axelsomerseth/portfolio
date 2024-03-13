import React from "react";
import { Trans, useTranslation } from "react-i18next";

const Contact: React.FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <h2>
        <Trans i18nKey={"contact.title"} />
      </h2>
      <div className="contact-form-container">
        <div className="contact-form">
          <form action="https://eov9tq5whnye23b.m.pipedream.net" method="POST">
            <div className="form-control">
              <label htmlFor="name">
                <Trans i18nKey={"contact.name"} />
              </label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder={t("contact.namePlaceholder")}
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">
                <Trans i18nKey={"contact.email"} />
              </label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder={t("contact.emailPlaceholder")}
                className="input-field"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="message">
                <Trans i18nKey={"contact.message"} />
              </label>
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
            <input
              type="submit"
              value={t("contact.submit")}
              id="submit-btn"
              className="submit-btn"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
