import { Formik } from "formik";
import React from "react";

import HeaderTask from "../src/HeaderTask";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/HeaderTask/HomePage";
import LoginPage from "../src/HeaderTask/LoginPage";
import SignUpPage from "../src/HeaderTask/SignUpPage";





 const App=() =>{
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();}

return (

  <BrowserRouter>
    <HeaderTask />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage onSubmit={onSubmit}/>} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  </BrowserRouter>
);
};

export default App;
