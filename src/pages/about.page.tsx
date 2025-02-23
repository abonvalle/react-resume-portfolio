import { Trans, useTranslation } from "react-i18next";
import { Bookshelf, Carousel } from "../components";
function AboutPage() {
  const { t } = useTranslation(["about_page_translation", "translation"]);
  return (
    <div className="">
      <h1>{t("about", { ns: "translation" })}</h1>
      <h2>🖖 {t("intro.welcome")}</h2>
      <img
        src="/images/pp.webp"
        className="rounded-full"
        alt="Photo"
        width={128}
        height={128}
      />
      <p>
        <Trans
          t={t}
          i18nKey="intro.introduction"
          tOptions={{ number: new Date().getFullYear() - 2019 }}
        />
      </p>
      <h3>{t("intro.subsection")}</h3>
      <ul className="list-disc pl-8">
        <li>
          <Trans t={t} i18nKey="intro.software_architecture" />
        </li>
        <li>
          <Trans t={t} i18nKey="intro.frontend_development" />
        </li>
        <li>
          <Trans t={t} i18nKey="intro.api_and_system_design" />
        </li>
        <li>
          <Trans t={t} i18nKey="intro.ai_&_machine_learning" />
        </li>
      </ul>
      <hr />
      <h2>{t("experiences_title")} 💼</h2>
      <h3>{t("experiences.job")} - Docorga 🩺🏥</h3>
      <p>
        <Trans t={t} i18nKey={"experiences.docorga_stack"} />
      </p>
      <p>
        <Trans t={t} i18nKey={"experiences.docorga_domain"} />
      </p>
      <h4>{t("experiences.tasks_performed")}</h4>
      <ul className="list-disc pl-8">
        <li>
          <Trans t={t} i18nKey={"experiences.docorga_task_1"} />
        </li>
        <li>
          <Trans t={t} i18nKey={"experiences.docorga_task_2"} />
        </li>
        <li>
          <Trans t={t} i18nKey={"experiences.docorga_task_3"} />
        </li>
        <li>
          <Trans t={t} i18nKey={"experiences.docorga_task_4"} />
        </li>
      </ul>
      <h3>{t("experiences.job")} - Expateo 💼🌍</h3>
      <p>
        <Trans t={t} i18nKey={"experiences.expateo_stack"} />
      </p>
      <p>
        <Trans t={t} i18nKey={"experiences.expateo_domain"} />
      </p>
      <h4>{t("experiences.tasks_performed")}</h4>
      <ul className="list-disc pl-8">
        <li>
          <Trans t={t} i18nKey={"experiences.expateo_task_1"} />
        </li>
        <li>
          <Trans t={t} i18nKey={"experiences.expateo_task_2"} />
        </li>
        <li>
          <Trans t={t} i18nKey={"experiences.expateo_task_3"} />
        </li>
        <li>
          <Trans t={t} i18nKey={"experiences.expateo_task_4"} />
        </li>
      </ul>
      <h3> {t("experiences.job")} - Wanao 📃✒️</h3>
      <p>
        <Trans t={t} i18nKey={"experiences.wanao_stack"} />
      </p>
      <p>
        <Trans t={t} i18nKey={"experiences.wanao_domain"} />
      </p>
      <h4>{t("experiences.tasks_performed")}</h4>
      <ul className="list-disc pl-8">
        <li>
          <Trans t={t} i18nKey={"experiences.wanao_task_1"} />
        </li>
        <li>
          <Trans t={t} i18nKey={"experiences.wanao_task_2"} />
        </li>
        <li>
          <Trans t={t} i18nKey={"experiences.wanao_task_3"} />
        </li>
      </ul>
      <hr />
      <h2>{t("side_projects_title")} 🗃️</h2>
      <Carousel
        images={[
          {
            url: "/images/DevflixP.webp",
            alt: "Devflix portfolio",
          },
          {
            url: "/images/Name Guessr.webp",
            alt: "Charactdle sideproject",
          },
          {
            url: "/images/RadioFIVE.webp",
            alt: "Radio5 sideproject",
          },
        ]}
      />
      <hr />
      <h2>{t("formation_title")} 🎓</h2>
      <h3>{t("formation.cnam_degree")}</h3>
      <p>
        <Trans t={t} i18nKey={"formation.cnam_infos"} />
      </p>
      <a href="https://www.cnam-nouvelle-aquitaine.fr/diplome,diplome-d-ingenieur-architecture-et-ingenierie-des-systemes-et-des-logiciels-aisl-,CYC9101A">
        {t("formation.cnam_hyperlink_text")}
      </a>
      <p> {t("formation.cnam_details")}</p>
      <h3> {t("formation.bts_degree")}</h3>
      <p>
        <Trans t={t} i18nKey={"formation.bts_infos"} />
      </p>
      <ul className="list-disc pl-8">
        <li>{t("formation.bts_task_1")}</li>
        <li>{t("formation.bts_task_2")}</li>
        <li>{t("formation.bts_task_3")}</li>
        <li>{t("formation.bts_task_4")}</li>
        <li>{t("formation.bts_task_5")}</li>
        <li>{t("formation.bts_task_6")}</li>
        <li>{t("formation.bts_task_7")}</li>
        <li>{t("formation.bts_task_8")}</li>
      </ul>
      <h3> {t("formation.bac_degree")} </h3>
      <p>
        <Trans t={t} i18nKey={"formation.bac_infos"} />
      </p>
      <p>
        <Trans t={t} i18nKey={"formation.bac_details"} />
      </p>
      <hr />
      <h2>{t("bookshelf_title")} 📚</h2>
      <Bookshelf
        images={[
          {
            url: "/images/clean_architecture.webp",
            alt: `${t("book_clean_architecture_title")} book cover`,
            title: t("book_clean_architecture_title"),
            author: "Robert C. Martin",
            txt: t("book_clean_architecture_txt"),
          },
          {
            url: "/images/ia_mm.webp",
            title: t("book_artificial_intelligence_title"),
            author: "Melanie Mitchell",
            txt: t("book_artificial_intelligence_txt"),
            alt: `${t("book_artificial_intelligence_title")} book cover`,
          },
          {
            url: "/images/ddd.webp",
            title: t("book_ddd_title"),
            author: "Eric Evans",
            txt: t("book_ddd_text"),
            alt: `${t("book_ddd_title")} book cover`,
          },
        ]}
      />
      <hr />
      <h2>{t("links_title")} 🔗</h2>
      <ul>
        <li>
          {t("links_devflix")} - <a href="https://devflix.abvdev.fr">Devflix</a>
        </li>
        <li>
          GitHub - <a href="https://github.com/abonvalle">@abonvalle</a>
        </li>
        <li>
          LinkedIn -{" "}
          <a href="https://www.linkedin.com/in/abonvalle">@abonvalle</a>
        </li>
        <li>
          Email - <a href="mailto:contact@abvdev.fr">contact@abvdev.fr</a>
        </li>
      </ul>
    </div>
  );
}

export default AboutPage;
