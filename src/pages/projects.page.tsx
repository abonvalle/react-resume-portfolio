import { useTranslation } from "react-i18next";
function ProjectsPage() {
  const { t } = useTranslation(["project_page_translation", "translation"]);
  return (
    <div className="">
      <h1>{t("projects", { ns: "translation" })}</h1>
      <h2>{t("intro")}</h2>
      <img
        src="/images/ngxmaterialthemer.png"
        alt="Photo"
        width={1125}
        height={750}
        loading="lazy"
      />
      <p>
        <i>{t("side_project")}</i>
        <br />
        <a href="https://ngxmaterialthemer.abvdev.fr">
          ngxMaterialThemer ↗
        </a> : {t("ngx_material_themer")}
        <br />
        Stack : Angular 17 ★ TypeScript 5.2 ★ Angular Material ★ Tailwind CSS ★
        RxJS ★ GitHub actions ★ GitHub pages
      </p>
      <br />
      <img
        src="/images/nameguessr.png"
        alt="Photo"
        width={1125}
        height={750}
        loading="lazy"
      />
      <p>
        <i>{t("side_project")}</i>
        <br />
        <a href="https://charadle.abvdev.fr">Charadle ↗</a> :{" "}
        {t("charadle_infos")}
        <br />
        Stack : Angular 17 ★ TypeScript 5.2 ★ RxJS ★ Tailwind CSS ★ Jasmine ★
        Angular Material ★ GitHub actions ★ GitHub pages
      </p>
      <br />
      <img
        src="/images/devflix.png"
        alt="Photo"
        width={1125}
        height={750}
        loading="lazy"
      />
      <p>
        <i>{t("side_project")}</i>
        <br />
        <a href="https://devflix.abvdev.fr">Devflix ↗</a> : {t("devflix_infos")}
        <br />
        Stack : Angular 17 ★ TypeScript 5.2 ★ Angular Material ★ Tailwind CSS ★
        RxJS ★ Axios ★ GitHub actions ★ GitHub pages
      </p>
      <br />
      <img
        src="/images/expateo.png"
        alt="Photo"
        width={1125}
        height={750}
        loading="lazy"
      />
      <p>
        <i>{t("experience")}</i>
        <br />
        {t("expateo_infos")}
        <br />
        Stack : Angular 15 ★ TypeScript 5.1 ★ RxJS ★ Angular Material ★ GitHub
        actions
      </p>
      <br />
      <img
        src="/images/wanao.png"
        alt="Photo"
        width={1125}
        height={750}
        loading="lazy"
      />
      <p>
        <i>{t("experience")}</i>
        <br />
        {t("wanao_infos")}
        <br />
        Stack : HTML ★ JS ★ jQuery ★ D3.js ★ Bootstrap
      </p>
      <br />
      <img
        src="/images/radio5.png"
        alt="Photo"
        width={1125}
        height={750}
        loading="lazy"
      />
      <p>
        <i>{t("side_project")}</i>
        <br />
        {t("radio5_infos")}
        <br />
        Stack : React ★ Node.js ★ Express ★ Firebase Realtime Database
        <br />
      </p>
      <img
        src="/images/emmalarragueta.png"
        alt="Photo"
        width={1125}
        height={750}
        loading="lazy"
      />
      <p>
        <i>{t("side_project")}</i>
        <br />
        <a href="https://emmalarragueta.fr">emmalarragueta.fr ↗</a> :{" "}
        {t("emma_infos")}
        <br />
        Stack : Wordpress ★ HTML ★ JS ★ CSS
      </p>
      <br />
      <img
        src="/images/oliviertaylor.png"
        alt="Photo"
        width={1125}
        height={750}
        loading="lazy"
      />
      <p>
        <i>{t("side_project")}</i>
        <br />
        <a href="https://oliviertaylor.fr">oliviertaylor.fr ↗</a> :{" "}
        {t("olivier_infos")}
        <br />
        Stack : Angular ★ TypeScript ★ Angular Material ★ Tailwind CSS
      </p>
      <br />
      <img
        src="/images/sitesvitrines.png"
        alt="Photo"
        width={1125}
        height={750}
        loading="lazy"
      />
      <p>
        <i>{t("side_project")}</i>
        <br />
        {t("others_infos")}
        <br />
        Stack : Angular ★ Analog.js ★ Wordpress ★ HTML ★ JS ★ CSS
      </p>
    </div>
  );
}
export default ProjectsPage;
