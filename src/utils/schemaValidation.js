import * as Yup from 'yup';

const SCHEMA_NAME = Yup.string().matches(/^[A-Z][a-z]{1,20}$/,'Field must match from 1 to 20 letters ').required("Field can't be empty");

const SCHEMA_EMAIL = Yup.string().email('Email must be example@example.com').matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/).required("Field can't be empty");

const SCHEMA_PASSWORD = Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,'Must match min 8 symbols,letters and nubmers').required("Field can't be empty");

export const SCHEMA_LOG_IN = Yup.object({
  email:SCHEMA_EMAIL,
  password:SCHEMA_PASSWORD,
})

export const SCHEMA_SIGN_UP = Yup.object({
  fname:SCHEMA_NAME,
  lname:SCHEMA_NAME,
  dname:SCHEMA_NAME,
  email:SCHEMA_EMAIL,
  password:SCHEMA_PASSWORD,
  passwordConf:Yup.string().oneOf([Yup.ref('password')],'Passwords must match'),
})