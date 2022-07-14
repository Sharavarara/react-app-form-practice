import React from 'react';
import { Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import styles from './../FieldInput/FieldInput.module.scss';

const FieldInput = (props) => {
  const { name, ...rest} = props;
  return (
    <label>
      <Field name={name}>
        {({ field, meta }) => {
          const inputStyles = cx(styles.input, {
            [styles.valid]: !meta.error,
            [styles.invalid]:meta.error,
          })
          return <input {...field} {...rest} className={inputStyles}/>
        }}
      </Field>
      <ErrorMessage name={name} component='div'/>
    </label>
  );
}

export default FieldInput;
