/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'
import { CustomInput } from './Custominput'
import './style.scss'

export default function Login(): React.ReactNode {
    return (
        <>
            <section className='loginSection'>
                <div className='model'>
                    <div className='modelLogo'>
                        <img src='d.png' alt='profile' />
                    </div>
                    <div className='inputField'>
                        <CustomInput />
                        <div className='newAccount'>
                            <p>
                                Don't have an account?{' '}
                                <Link to='../register' className='link'>
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                    <Link to='../' className='exit'>
                        <CgClose className='exitButton' />
                    </Link>
                </div>
            </section>
        </>
    )
}
