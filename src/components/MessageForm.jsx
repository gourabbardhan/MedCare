import React from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup';

const MessageForm = () => {

  const validationSchema = Yup.object({
          fname:Yup
                .string()
                .required("First Name is Required")
                .matches(/^[A-Za-z]{3,12}$/,"FirstName cant allow numbers or Spaces min 3 to max 12 chars long"),
          lname:Yup
                .string()
                .required("Last Name is Required")
                .matches(/^[A-Za-z]{3,12}$/,"LastName cant allow numbers or space min 3 to max 12 chars long"),
          phone:Yup
                .string()
                .required("Phone number is Required")
                .matches(/^[6-9]\d{9}$/,"Invalid Mobile number , has to be digited and should starts between 6-9 as first digit"),
          email:Yup
                  .string()
                  .required("Email is Required")
                  .email("Invalid email address !!"),
          message: Yup
                  .string()
                  .required("Message is Required")
                  .min(10, "Message must be at least 10 characters")
                  .max(500, "Message cannot exceed 500 characters"),        

    });
  const formik=   useFormik({
            initialValues:{
                fname:'',
                lname:'',
                phone:'',
                email:'',
                message:'',
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
               First Name <input type="text" name='fname' className="form-control"onChange={formik.handleChange} value={formik.values.fname} placeholder='First' required />
               {formik.errors?.fname && (<div className='text-danger'>{formik.errors?.fname}</div>)}
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='col-form-wrap'>
              Last Name <input type="text" name='lname' className="form-control" onChange={formik.handleChange} value={formik.values.lname} placeholder='Last' required />
              {formik.errors?.lname && (<div className='text-danger'>{formik.errors?.lname}</div>)}
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='col-form-wrap'>
              Email <input type="email" name='email' className="form-control" onChange={formik.handleChange} value={formik.values.email} placeholder='Email' required />
              {formik.errors?.email && (<div className='text-danger'>{formik.errors?.email}</div>)}
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div className='col-form-wrap'>
              Phone <input type="tel" name='phone' className="form-control" onChange={formik.handleChange} value={formik.values.phone} placeholder='Phone' required />
              {formik.errors?.phone && (<div className='text-danger'>{formik.errors?.phone}</div>)}
            </div>
          </div>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='col-form-wrap'>
              Message <textarea name='message' className="form-control" onChange={formik.handleChange} value={formik.values.message} placeholder='Message...' required />
              {formik.errors?.message && (<div className='text-danger'>{formik.errors?.message}</div>)}
            </div>
          </div>
         </div>

         <div className='form-button'>
            <button type="submit" className="btn-x">Submit</button>
            <button type="reset" className="btn-y">Reset</button>
         </div>

        </form>
    </div>
  )
}

export default MessageForm
