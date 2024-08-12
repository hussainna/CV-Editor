import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setFormData,addNewForm ,removeLastForm,updateExperience} from '../../settings/store';

function ExperienceCreate() {


    const formData = useSelector((state) => state.form.experiences);
    const dispatch = useDispatch();
    const [forms, setForms] = useState(formData);

  
    // Define the validation schema using Yup
    const validationSchema = Yup.object().shape({
      companyTitle: Yup.string().required('Name is required'),
      companyJob: Yup.string().required('Job is required'),
      companyDescription: Yup.string().required('Job is required'),
      companyList: Yup.string().required('Job is required'),
      companyDateFrom: Yup.string().required('Job is required'),
      companyDateTo: Yup.string().required('Job is required'),

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
         name="companyTitle"
         placeholder=""
         onChange={(e) => {
           handleChange(e);
           dispatch(updateExperience({ ...values, companyTitle: e.target.value }));
         }}
         onBlur={handleBlur}
         value={values.companyTitle}
       />
       <ErrorMessage name="companyTitle" component="div" className="error" />

       
     </div>
     <div className="form-control">
       <Field
         name="companyJob"
         placeholder=""
         onChange={(e) => {
           handleChange(e);
           dispatch(updateExperience({ ...values, companyJob: e.target.value }));
         }}
         onBlur={handleBlur}
         value={values.companyJob}
       />
       <ErrorMessage name="companyJob" component="div" className="error" />

       
     </div>

     <div className="form-control">
       <Field
         name="companyDescription"
         as="textarea"
         placeholder=""
         onChange={(e) => {
           handleChange(e);
           dispatch(updateExperience({ ...values, companyDescription: e.target.value }));
         }}
         onBlur={handleBlur}
         value={values.companyDescription}
       />
       <ErrorMessage name="companyDescription" component="div" className="error" />

       
     </div>

     <div className="form-control">
       <Field
         name="companyList"
         placeholder=""
         as="textarea"
         onChange={(e) => {
           handleChange(e);
           dispatch(updateExperience({ ...values, companyList: e.target.value }));
         }}
         onBlur={handleBlur}
         value={values.companyList}
       />
       <ErrorMessage name="companyList" component="div" className="error" />

       
     </div>


     <div className="form-control">
     <Field
         name="companyDateFrom"
         placeholder=""
         type="date"

         onChange={(e) => {
           handleChange(e);
           dispatch(updateExperience({ ...values, companyDateFrom: e.target.value }));
         }}
         onBlur={handleBlur}
         value={values.companyDateFrom}
       />
       <ErrorMessage name="companyDateFrom" component="div" className="error" />

       

       <Field
         name="companyDateTo"
         type="date"
         placeholder=""
         onChange={(e) => {
           handleChange(e);
           dispatch(updateExperience({ ...values, companyDateTo: e.target.value }));
         }}
         onBlur={handleBlur}
         value={values.companyDateTo}
       />
       <ErrorMessage name="companyDateTo" component="div" className="error" />

       
     </div>


   </FormikForm>

 )}


</Formik>
        ))}
       
        {/* <form action="">
            <div className="form-control">
                <input type="text" name="" id="" />
            </div>
            <div className="form-control">
                <input type="text" name="" id="" />
            </div>
            <div className="form-control">
                <textarea type="text" name="" id="" />
            </div>
            <div className="form-control">
                <textarea type="text" name="" id="" />
            </div>
            <div className="form-control">
                <input type="date" name="" id="" />
                <input type="date" name="" id="" />

            </div>



            <div className="form-control">
                <input type="text" name="" id="" />
            </div>
            <div className="form-control">
                <input type="text" name="" id="" />
            </div>
            <div className="form-control">
                <textarea type="text" name="" id="" />
            </div>
            <div className="form-control">
                <textarea type="text" name="" id="" />
            </div>
            <div className="form-control">
                <input type="date" name="" id="" />
                <input type="date" name="" id="" />

            </div>



            <div className="form-control">
                <input type="text" name="" id="" />
            </div>
            <div className="form-control">
                <input type="text" name="" id="" />
            </div>
            <div className="form-control">
                <textarea type="text" name="" id="" />
            </div>
            <div className="form-control">
                <textarea type="text" name="" id="" />
            </div>
            <div className="form-control">
                <input type="date" name="" id="" />
                <input type="date" name="" id="" />

            </div>



        </form> */}
    </div>
  )
}

export default ExperienceCreate