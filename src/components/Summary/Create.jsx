import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setFormData } from '../../settings/store';
function SummaryCreate() {


  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();

  // Define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    summary: Yup.string().required('summary is required'),
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
                name="summary"
                placeholder=""
                as="textarea"
                onChange={(e) => {
                  handleChange(e);
                  dispatch(setFormData({ ...values, summary: e.target.value }));
                }}
                onBlur={handleBlur}
                value={values.summary}
              />
              <ErrorMessage name="summary" component="div" className="error" />

            </div>
           
          </FormikForm>
        )}
      </Formik>
    </div>
  )
}

export default SummaryCreate