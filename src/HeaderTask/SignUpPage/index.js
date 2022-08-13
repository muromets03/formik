import { Form, Formik } from 'formik';
import React from 'react';
import InputInLabel from '../../InputInLabel';
import {  SCHEMA_SIGN_UP } from '../../utils/validateSchemas';
import styles from "../HeaderTask.module.scss";
import { PropTypes } from 'prop-types';


const initialValues = {
    first_name: "",
    last_name:"",
    password: "",

  };

const SignUpPage = () => {
    return (
        <div>
                <h1> CREATE AN ACCOUNT</h1>
                <h4>We always keep your name and emal address <br></br>private.</h4>
                <Formik
      initialValues={initialValues}
  
      validationSchema={SCHEMA_SIGN_UP} 
    >
      {(formikProps) => {
        console.log(formikProps);

        return (
          <Form className={styles.form} >
            <InputInLabel  name="fname" type="text" placeholder="First name" />
            <InputInLabel name="lname" type="text" placeholder="Last Name" />
            <InputInLabel name="dname" type="text" placeholder="Display Name" />
            <InputInLabel name="email" type="text" placeholder="Email address" />
           
            <InputInLabel name="password" type="password" placeholder="password"/>
            <InputInLabel name="passwordconfirm" type="password" placeholder="password confirm"/>

            <input type="submit" value="Create account" className={styles.btn_create} />
          </Form>
        );
      }}
    </Formik>
        
        </div>
    );
}

SignUpPage.propTypes = {
    onSubmit: PropTypes.func,
}


export default SignUpPage;
