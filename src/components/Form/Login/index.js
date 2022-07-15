import { Form, Formik } from 'formik';
import React from 'react';
import FieldInput from '../FieldInput';
import { SCHEMA_LOG_IN } from './../../../utils/schemaValidation';
import styles from './../Login/Login.module.scss';

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
          <Form className={styles.form}>
            <h1>LOGIN TO YOUR ACCOUNT</h1>
            <FieldInput
              spellCheck='false'
              name='email'
              type='email'
              placeholder='Email address' />
            <FieldInput
              name='password'
              type='password'
              placeholder='Password'
            />
            <input
              className={styles.confirmBtn}
              type='submit'
              value='Login' />
          </Form>
        )
      }}
    </Formik>
      

  );
}

export default Login;
