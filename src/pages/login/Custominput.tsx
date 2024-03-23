/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { LoginSchema } from '../../schemas/inputFieldSchema'
import { useLoginHook } from '../../hooks/useLoginHook'
//components
export const CustomInput = () => {
    const [msg, setMsg] = useState<string>('')
    const navigate = useNavigate()
    const { mutate, data, isError, isPending } = useLoginHook()
    if (data?.status === 200) {
        localStorage.setItem('token', data?.data.token)
        navigate('../home')
    }
    return (
        <>
            <h2>Login to X</h2>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, action) => {
                    mutate(values, {
                        onError: (error: AddError) => {
                            setMsg(error.response.data.message)
                        },
                        onSuccess: () => {
                            alert('successful Login')
                        },
                    })
                    action.resetForm()
                }}
                validationSchema={LoginSchema}
            >
                {(props) => (
                    <>
                        <form method='POST' onSubmit={props.handleSubmit}>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                onChange={props.handleChange}
                                value={props.values.email}
                                className={
                                    props.errors.email ? 'showError' : ''
                                }
                            />
                            {/*////  RENDER IF ERROR IS NOT NULL */}
                            {props.errors.email && (
                                <p className='error'>{props.errors.email}</p>
                            )}
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                onChange={props.handleChange}
                                value={props.values.password}
                                className={
                                    props.errors.password ? 'showError' : ''
                                }
                            />
                            {/*  RENDER IF ERROR IS NOT NULL */}
                            {props.errors.password && (
                                <p className='error'>{props.errors.password}</p>
                            )}
                            {/* SHOW SERVER'S ERROR */}
                            {!props.values.email && isError ? (
                                <p className='error'>{msg.toUpperCase()}</p>
                            ) : null}
                            <button
                                type='submit'
                                disabled={!!props.errors.password || isPending}
                            >
                                {isPending ? 'Loading...' : 'Login'}
                            </button>
                        </form>
                    </>
                )}
            </Formik>
        </>
    )
}
