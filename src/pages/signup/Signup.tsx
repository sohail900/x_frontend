import React, { /* useReducer, */ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Formik } from 'formik'
/* import { useMutation } from '@tanstack/react-query' */
import { GrFormPreviousLink, GrClose } from 'react-icons/gr'
import Stage1 from './stages/Stage1'
import Stage2 from './stages/Stage2'
import Stage3 from './stages/Stage3'
import { RegisterSchema } from '../../schemas/inputFieldSchema'
import { useRegisterHook } from '../../hooks/useRegisterHook'
import { CgClose } from 'react-icons/cg'
import './style.scss'
//TODO: initialValues
const initialValues: FormikInitialValues = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    files: null,
}

export default function Signup(): React.ReactNode {
    const [steps, setSteps] = useState<number>(1)
    const [cardMsg, setCardMsg] = useState('')
    const [showCard, setShowCard] = useState(true)
    const location = useNavigate()
    const { mutate, isError, isPending } = useRegisterHook()
    return (
        <>
            <main className='signupSection'>
                <section className='model'>
                    <div className='modelLogo'>
                        <img src='d.png' alt='profile' />
                    </div>
                    <div className='inputField'>
                        <h2>Steps {steps > 3 ? 3 : steps} of 3</h2>
                        <p className='create-account-text'>
                            Create your account
                        </p>
                        <Formik
                            initialValues={initialValues}
                            onSubmit={(values) => {
                                mutate(values, {
                                    onError: (error) => {
                                        setCardMsg(error.response.data.message)
                                    },
                                    onSuccess: () => {
                                        alert('Successful Register')
                                        location('../login')
                                    },
                                })
                            }}
                            validationSchema={RegisterSchema}
                        >
                            {(props) => (
                                <>
                                    <form
                                        method='POST'
                                        onSubmit={props.handleSubmit}
                                    >
                                        {steps === 1 ? (
                                            <Stage1
                                                onChange={props.handleChange}
                                                values={props.values}
                                                error={props.errors}
                                                steps={steps}
                                                setSteps={setSteps}
                                            />
                                        ) : null}

                                        {steps === 2 ? (
                                            <Stage2
                                                onChange={props.handleChange}
                                                values={props.values}
                                                error={props.errors}
                                                steps={steps}
                                                setSteps={setSteps}
                                            />
                                        ) : null}

                                        {steps > 2 && (
                                            <>
                                                <Stage3
                                                    setFieldValue={
                                                        props.setFieldValue
                                                    }
                                                    values={props.values}
                                                    error={props.errors}
                                                    steps={steps}
                                                    setSteps={setSteps}
                                                />
                                                <button
                                                    type='submit'
                                                    disabled={!!isPending}
                                                >
                                                    {isPending
                                                        ? 'Loading...'
                                                        : 'Register'}
                                                </button>
                                            </>
                                        )}
                                    </form>
                                </>
                            )}
                        </Formik>
                        <div className='alreadyHave'>
                            <p>
                                Already have an account?
                                <Link to='../login' className='link'>
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div>
                        <Link to='../' className='iconButtons exit'>
                            <CgClose className='icons ' />
                        </Link>
                        {steps > 1 && (
                            <button
                                className='iconButtons previous'
                                onClick={() => setSteps((pre) => pre - 1)}
                            >
                                <GrFormPreviousLink className='icons ' />
                            </button>
                        )}
                    </div>
                </section>
            </main>
            {/* SET MESSAGES */}
            {isError && showCard && (
                <div className='popupCard'>
                    <p>{cardMsg}</p>
                    <button onClick={() => setShowCard(false)}>
                        <GrClose />
                    </button>
                </div>
            )}
        </>
    )
}
