import React from "react";
import { Formik, Form, Field } from "formik";

const initialValues = {
  username: "",
  password: ""
};

export default function RegistrationForm({ onRegisterHandler }) {
  return (
    <div>
      Registration form
      <Formik
        initialValues={initialValues}
        onSubmit={onRegisterHandler}
        component={RegForm}
      />
    </div>
  );
}

function RegForm() {
  return (
    <Form>
      <Field name="username" type="text" placeholder="username" />
      <Field name="password" type="password" placeholder="password" />
      <button type="submit">Register</button>
    </Form>
  );
}
