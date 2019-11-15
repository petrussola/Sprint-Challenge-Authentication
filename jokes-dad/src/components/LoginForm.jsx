import React from 'react'
import { Formik, Form, Field } from 'formik';

const initialValues = {
  username: "",
  password: ""
};

export default function LoginForm({ onLoginHandler }) {
  return (
    <div>
      Logim form
      <Formik
        initialValues={initialValues}
        onSubmit={onLoginHandler}
        component={LogForm}
      />
    </div>
  );
}

function LogForm() {
  return (
    <Form>
      <Field name="username" type="text" placeholder="username" />
      <Field name="password" type="password" placeholder="password" />
      <button type="submit">Log in</button>
    </Form>
  );
}
