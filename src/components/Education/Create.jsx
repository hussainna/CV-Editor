import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setFormData,updateEducation} from '../../settings/store';

function EducationCreateCreate() {

    const formData = useSelector((state) => state.form.education);
    const dispatch = useDispatch();

  
    // Define the validation schema using Yup
    const validationSchema = Yup.object().shape({
      name: Yup.string().required('Name is required'),
      degry: Yup.string().required('degry is required'),
      location: Yup.string().required('location is required'),
      from: Yup.string().required('from is required'),
      to: Yup.string().required('to is required'),

    });

  return (
    <div>
    {formData?.map((form,index)=>(
<Formik
initialValues={form}
key={index}
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
       dispatch(updateEducation({ ...values, name: e.target.value }));
     }}
     onBlur={handleBlur}
     value={values.name}
   />
   <ErrorMessage name="name" component="div" className="error" />

   
 </div>
 <div className="form-control">
   <Field
     name="degry"
     placeholder=""
     onChange={(e) => {
       handleChange(e);
       dispatch(updateEducation({ ...values, degry: e.target.value }));
     }}
     onBlur={handleBlur}
     value={values.degry}
   />
   <ErrorMessage name="degry" component="div" className="error" />

   
 </div>

 <div className="form-control">
   <Field
     name="location"
     placeholder=""
     onChange={(e) => {
       handleChange(e);
       dispatch(updateEducation({ ...values, location: e.target.value }));
     }}
     onBlur={handleBlur}
     value={values.location}
   />
   <ErrorMessage name="location" component="div" className="error" />

   
 </div>


 <div className="form-control">
 <Field
     name="from"
     placeholder=""
     type="date"

     onChange={(e) => {
       handleChange(e);
       dispatch(updateEducation({ ...values, from: e.target.value }));
     }}
     onBlur={handleBlur}
     value={values.from}
   />
   <ErrorMessage name="from" component="div" className="error" />

   

   <Field
     name="to"
     type="date"
     placeholder=""
     onChange={(e) => {
       handleChange(e);
       dispatch(updateEducation({ ...values, to: e.target.value }));
     }}
     onBlur={handleBlur}
     value={values.to}
   />
   <ErrorMessage name="to" component="div" className="error" />

   
 </div>


</FormikForm>

)}


</Formik>
    ))}
    </div>
  )
}

export default EducationCreateCreate