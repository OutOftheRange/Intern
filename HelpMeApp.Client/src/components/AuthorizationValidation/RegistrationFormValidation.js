import * as yupRegistration from "yup";

import "yup-phone";
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

/*
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/; */
export const RegValidationschema = yupRegistration.object().shape({
  name: yupRegistration
    .string("Name must be string")
    .required("Please provide your name"),
  surname: yupRegistration
    .string("Surname must be string")
    .required("Please provide your surname"),
  phoneNumber: yupRegistration
    .string()
    .phone("", true, "Provide correct phone number")
    .typeError("Provide UA phone number")
    .required("Provide your phone number please"),
  info: yupRegistration.string().notRequired(),

  photo: yupRegistration.mixed().nullable().notRequired()
  /*
    .test(
      "format",
      "upload file",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ) */
});
