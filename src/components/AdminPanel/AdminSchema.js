import * as Yup from "yup"

export const adminSchema = Yup.object().shape({
  login: Yup.string()
  .required("Please, enter login")
  .test("correct-login", "Correct Login is required", function(value){
    return value === import.meta.env.VITE_ADMIN_LOGIN
  }),
  password: Yup.string()
  .required("Please, enter password")
  .test("correct-password", "Correct password is required", function(value){
    return value === import.meta.env.VITE_ADMIN_PASSWORD
  })
})