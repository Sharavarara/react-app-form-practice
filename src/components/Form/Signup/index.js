import { Form, Formik } from 'formik';
import React from 'react';
import FieldInput from '../FieldInput';
import { SCHEMA_SIGN_UP } from './../../../utils/schemaValidation';
import styles from './../Signup/Signup.module.scss';

const initialValues = { email: '', password: '', fname: '',lname: '',dname: '', passwordConf: '', };

const Signup = () => {
  const onSubmit = (value, formikBag) => {
    formikBag.resetForm();
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SCHEMA_SIGN_UP}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        return (
          <Form className={styles.form}>
            <h1>CREATE AN ACCOUNT</h1>
            <p>We always keep your name and email address private.</p>
            <FieldInput
              spellCheck='false'
              name='fname'
              type='text'
              placeholder='First name' />
            <FieldInput
              spellCheck='false'
              name='lname'
              type='text'
              placeholder='Last name' />
            <FieldInput
              spellCheck='false'
              name='dname'
              type='text'
              placeholder='Display name' />
            <FieldInput
              spellCheck='false'
              name='email'
              type='text'
              placeholder='Email address' />
            <FieldInput
              name='password'
              type='password'
              placeholder='Password'/>
            <FieldInput
              name='passwordConf'
              type='password'
              placeholder='Password confirmation' />
            <div className={styles.radioInputsContainer}>
              <div className={styles.radioInputBlocks}>
                <input type='radio' name='radio' />
                <div>
                  <h2>Join As a Buyer</h2>
                  <p>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                </div>
              </div>
              <div className={styles.radioInputBlocks}>
                <input type='radio' name='radio'/>
                <div>
                  <h2>Join As a Buyer</h2>
                  <p>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                </div>
              </div>
            </div>
            <input
              className={styles.confirmBtn}
              type='submit'
              value='Create account'
              name='submit'  
            />
          </Form>
        )
      }}
    </Formik>
  );
}

export default Signup;
