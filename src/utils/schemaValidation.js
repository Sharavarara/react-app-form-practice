import * as Yup from 'yup';

const SCHEMA_NAME = Yup.string().matches(/^[A-Z][a-z]{1,20}$/)

const SCHEMA_EMAIL = Yup.string().email().matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/).required();

const SCHEMA_PASSWORD = Yup.string().required();

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
  passwordConf:SCHEMA_PASSWORD,
})