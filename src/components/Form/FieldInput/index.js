import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './../FieldInput/FieldInput.module.scss';

const FieldInput = (props) => {
  const { name, ...rest} = props;
  return (
    <label>
      <Field name={name}>
        {({ field }) => {
          return <input {...field} {...rest} className={styles.input}/>
        }}
      </Field>
      <ErrorMessage name={name} component='span'/>
    </label>
  );
}

export default FieldInput;
