import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setFormData } from '../../settings/store';

function PersonalInformationCreate() {
  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();

  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    job: Yup.string().required('Job is required'),
    phone: Yup.string().required('Phone number is required').matches(/^[0-9]+$/, "Must be only digits"),
    email: Yup.string().email('Invalid email').required('Email is required'),
    location: Yup.string().required('Location is required'),
  });


  return (
    <div>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          dispatch(setFormData(values));
        }}
        enableReinitialize
        validateOnChange={false} // Turn off default validation on change
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <FormikForm>
            <div className="form-control">
              <Field
                name="name"
                placeholder=""
                onChange={(e) => {
                  handleChange(e);
                  dispatch(setFormData({ ...values, name: e.target.value }));
                }}
                onBlur={handleBlur}
                value={values.name}
              />
              <ErrorMessage name="name" component="div" className="error" />

              <Field
                name="job"
                placeholder=""
                onChange={(e) => {
                  handleChange(e);
                  dispatch(setFormData({ ...values, job: e.target.value }));
                }}
                onBlur={handleBlur}
                value={values.job}
              />
              <ErrorMessage name="job" component="div" className="error" />
            </div>
            <div className="form-control">
              <Field
                name="phone"
                placeholder=""
                onChange={(e) => {
                  handleChange(e);
                  dispatch(setFormData({ ...values, phone: e.target.value }));
                }}
                onBlur={handleBlur}
                value={values.phone}
              />
              <ErrorMessage name="phone" component="div" className="error" />

              <Field
                name="email"
                placeholder=""
                onChange={(e) => {
                  handleChange(e);
                  dispatch(setFormData({ ...values, email: e.target.value }));
                }}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-control">
              <Field
                name="location"
                placeholder=""
                onChange={(e) => {
                  handleChange(e);
                  dispatch(setFormData({ ...values, location: e.target.value }));
                }}
                onBlur={handleBlur}
                value={values.location}
              />
              <ErrorMessage name="location" component="div" className="error" />

              <Field
                type="file"
                name="image"
                placeholder=""
                onChange={(e) => {
                  // Handle file input separately
                }}
              />
              <ErrorMessage name="image" component="div" className="error" />
            </div>
          </FormikForm>
        )}
      </Formik>
    </div>
  );
}

export default PersonalInformationCreate;
