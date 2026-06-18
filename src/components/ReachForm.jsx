import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const ReachForm = () => {

    const validationSchema = Yup.object({
              name:Yup
                    .string()
                    .required("Name is Required")
                    .matches(/^[A-Za-z]{3,12}$/,"Name cant allow numbers or Spaces min 3 to max 12 chars long"),
              email:Yup
                      .string()
                      .required("Email is Required")
                      .email("Invalid email address !!"),
              question:Yup
                      .string()
                      .required("Question is Required")
                      .min(10, "Question must be at least 10 characters")
                      .max(500, "Question cannot exceed 500 characters"),        
    
        });
      const formik=   useFormik({
                initialValues:{
                    name:'',
                    email:'',
                    question:'',
                },
               validationSchema,
               onSubmit: (values) => {
               console.log(values);
               },
            })

  return (
    <div>
      
      <form noValidate onSubmit={formik.handleSubmit} onReset={formik.handleReset}>

         <div className='row form-wrap'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='col-form-wrap'>
               Your Name <input type="text" name='name' className="form-control"onChange={formik.handleChange} value={formik.values.name} placeholder='Name' required />
               {formik.errors?.name && (<div className='text-danger'>{formik.errors?.name}</div>)}
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='col-form-wrap'>
              Email <input type="email" name='email' className="form-control" onChange={formik.handleChange} value={formik.values.email} placeholder='Email' required />
              {formik.errors?.email && (<div className='text-danger'>{formik.errors?.email}</div>)}
            </div>
          </div>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='col-form-wrap'>
              Question <textarea name='question' className="form-control" onChange={formik.handleChange} value={formik.values.question} placeholder='Your Question...' required />
              {formik.errors?.question && (<div className='text-danger'>{formik.errors?.question}</div>)}
            </div>
          </div>
         </div>

         <div className='form-button'>
            <button type="submit" className="btn-x">get answered</button>
            <button type="reset" className="btn-y">Reset</button>
         </div>

        </form>

    </div>
  )
}

export default ReachForm
