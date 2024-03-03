import { Button, Grid, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email Required"),
    password: Yup.string().required("Password Required"),
});

const currentYear = new Date().getFullYear();
const years=Array.from({length:100},(_,i)=>currentYear-i)

const SignUpForm = () => {
    const formik = useFormik({
        initialValues: {
            fullname:"",
            email: "",
            password: "",
            dateOfBirth:{
                date:"",
                month:"",
                year:""
            }
        },
        validationSchema,
        onSubmit: (values) => {
            const {day,month,year}=values.dateOfBirth
            const dateOfBirth=`${year}-${month}-${day}`
            values.dateOfBirth=dateOfBirth;
            console.log("form values", values)
        }
    });

    const handleDateChange=(name)=>(event)=>{
        formik.setFieldValue("dateofBirth",{
            ...formik.values.dateOfBirth,
            [name]:event.target.value,
        })
    }
  return (
    <form>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="FullName"
                        name='fullname'
                        variant='outlined'
                        size='large'
                        value={formik.values.fullname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                        helperText={formik.touched.fullname && formik.errors.fullname}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        name='email'
                        variant='outlined'
                        size='large'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Password"
                        name='password'
                        variant='outlined'
                        size='large'
                        type='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Grid>
                
                <Grid className='mt-20' item xs={12}>
                    <Button sx={{borderRadius:"29px", py:"15px",bgcolor:"blue[500]"}} fullWidth variant='contained'
                    size='large'
                    type='submit'>
                        SignIn
                    </Button>
                </Grid>
            </Grid>
        </form>
  )
}

export default SignUpForm