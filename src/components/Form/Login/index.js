import { Form, Formik } from 'formik';
import React from 'react';
import FieldInput from '../FieldInput';
import {SCHEMA_LOG_IN} from './../../../utils/schemaValidation';

const initialValues = { email: '', password: '' };

const Login = (props) => {
  const onSubmit = (value, formikBag) => {
    formikBag.resetForm();
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SCHEMA_LOG_IN}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        return (
          <Form>
            <h1>LOGIN TO YOUR ACCOUNT</h1>
            <FieldInput
              name='email'
              type='email'
              placeholder='Email address' />
            <FieldInput
              name='password'
              type='password'
              placeholder='Password'
            />
            <input type='submit' value='Login'/>
          </Form>
        )
      }}
    </Formik>
      

  );
}

export default Login;
