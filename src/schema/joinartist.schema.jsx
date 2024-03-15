import * as Yup from "yup";

export const joinartistInitialValues = {
  name: "",
  email: "",
  city: "",
  instagram: "",
  location: "",
};

export let schemaValidator = (t) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("common:joinartistPage.Name is required")),
    email: Yup.string()
      .email("Invalid email")
      .required(t("common:joinartistPage.Email is required")),
    location: Yup.string().required(
      t("common:joinartistPage.Country field is required")
    ),

    city: Yup.string()
      .required(
        t("common:joinartistPage.location must be at least 2 characters")
      )
      .min(2, t("common:joinartistPage.Too Short")),

    instagram: Yup.string()
      .required(
        t("common:joinartistPage.instagram must be at least 2 characters")
      )
      .min(2, t("common:joinartistPage.Too Short")),
  });

  return validationSchema;
};
