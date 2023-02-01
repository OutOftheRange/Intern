import * as yupLogin from "yup";

export const LoginValidationschema = yupLogin.object().shape({
  email: yupLogin
    .string()
    .required("Please provide your email")
    .email("That's don't look like an email"),
  password: yupLogin
    .string()
    .required("Please provide your password")
    .min(8, "Password is too short - should be 8 chars minimum.")
});
