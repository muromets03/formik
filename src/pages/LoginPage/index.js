import React from 'react';

import { SCHEMA_LOGIN } from "../../utils/validateSchemas";
import styles from "../../HeaderTask/HeaderTask.module.scss";
import InputInLabel from "../../components/InputInLabel/";
import { PropTypes } from 'prop-types';
import { Form, Formik } from 'formik';

const initialValues = {
    login: "",
    password: "",
  };
  

const LoginPage = () => {
    return (
        <>
            <h1>LOGIN TO YOUR ACCOUNT</h1>
            <Formik
      initialValues={initialValues}

      validationSchema={SCHEMA_LOGIN}
    >
      {(formikProps) => {
        console.log(formikProps);

        return (
          <Form className={styles.container}>
            <InputInLabel name="login" type="text" placeholder="Email address" />
            <InputInLabel name="password" type="password" placeholder="Password"/>
           

            <input type="submit" value="LOGIN" className={styles.btn_login} />
        
          </Form>
        );
      }}
    </Formik>
        </>
    );
}

LoginPage.propTypes = {
    onSubmit: PropTypes.func,
}

export default LoginPage;
