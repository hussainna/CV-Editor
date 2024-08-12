import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setFormData,updateSoft} from '../../settings/store';

function SoftCreate() {

   const formData = useSelector((state) => state.form.soft);
   const dispatch = useDispatch();

 
   // Define the validation schema using Yup
   const validationSchema = Yup.object().shape({
     name: Yup.string().required('Name is required'),

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
  dispatch(updateSkills({ ...values, name: e.target.value }));
}}
onBlur={handleBlur}
value={values.name}
/>
<ErrorMessage name="name" component="div" className="error" />


</div>



</FormikForm>

)}


</Formik>
))}
</div>
  )
}

export default SoftCreate