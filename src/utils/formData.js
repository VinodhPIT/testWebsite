import { countryList } from "@/constants/coutry";

export const contactFormFields = (t) => {
  return [
        {
          type: "radio",
          name: "tattooType",
          label: t("common:contactUsPage.Tattoo lover"),
          value: "Tatoo"
        },
        {
          type: "radio",
          name: "tattooType",
          label: t("common:contactUsPage.Artist"),
          value: "Artists"
        },
        {
          type: "radio",
          name: "tattooType",
          label: t("common:contactUsPage.Studio"),
          value: "Studio"
        },
        {
          type: "radio",
          name: "tattooType",
          label: t("common:contactUsPage.Other"),
          value: "Other"
        },
        {
          type: "email",
          name: "email",
          placeholder: t("common:contactUsPage.Enter-Email")
        },
        {
          type: "textarea",
          name: "message",
          placeholder: t("common:contactUsPage.How we can help you")
        }
      ];
      
};




export const joinArtistFields =(t)=>{
  return [
    {
    type: "name",
    name: "name",
    placeholder: "",
    label: t("common:joinartistPage.FirstName"),
    htmlFor: "name",
    required: true
  },
  {
    type: "email",
    name: "email",
    placeholder: "",
    label: t("common:joinartistPage.Your e-mail"),
    htmlFor: "your e-mail",
    required: true
  },
  {
    type: "select",
    name: "location",
    label: t("common:joinartistPage.Country"),
    options: [
      { value: "", text: t("common:joinartistPage.Country") },
      ...countryList.map(option => ({ value: option.country, text: option.title }))
    ],
    className: "form_control_select",
    required: true
  },
  {
    type: "city",
    name: "city",
    placeholder: "",
    label: t("common:joinartistPage.City"),
    htmlFor: "City",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          d="M12.7568 2.12671C8.88684 2.12671 5.75684 5.25671 5.75684 9.12671C5.75684 14.3767 12.7568 22.1267 12.7568 22.1267C12.7568 22.1267 19.7568 14.3767 19.7568 9.12671C19.7568 5.25671 16.6268 2.12671 12.7568 2.12671ZM12.7568 11.6267C11.3768 11.6267 10.2568 10.5067 10.2568 9.12671C10.2568 7.74671 11.3768 6.62671 12.7568 6.62671C14.1368 6.62671 15.2568 7.74671 15.2568 9.12671C15.2568 10.5067 14.1368 11.6267 12.7568 11.6267Z"
          fill="#707070"
        ></path>
      </svg>
    ),
    required: true
  },
  {
    type: "instagram",
    name: "instagram",
    placeholder: "",
    label: t("common:joinartistPage.Your instagram"),
    htmlFor: "Your instagram",
    required: true
  }
]
}





export const loginFields = (t)=>{
  return [
  {
    type: "username",
    id: "username",
    name: "username",
    placeholder: t("common:AnalyticLogin.EnterUser")
  },
  {
    type: "password",
    id: "password",
    name: "password",
    placeholder: t("common:AnalyticLogin.EnterPassword")
  }
]}