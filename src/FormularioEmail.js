import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormularioEmail = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Endereço de e-mail inválido')
        .required('O campo e-mail é obrigatório'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <h1>Formulário de E-mail</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioEmail;
