import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Stage1: React.FC<FormikPropsStage1<string>> = ({
    onChange,
    values,
    error,
    setSteps,
}): React.ReactNode => {
    const { name, username, email } = values

    return (
        <>
            <input
                type='text'
                name='name'
                placeholder='Name'
                onChange={onChange}
                required
                value={name}
                className={error.name && 'showError'}
            />
            {/*  RENDER IF ERROR IS NOT NULL */}
            {error.name && <p className='error'>{error.name}</p>}
            <input
                type='text'
                name='username'
                placeholder='Username'
                required
                onChange={onChange}
                value={username}
                className={error.username && 'showError'}
            />
            {/*  RENDER IF ERROR IS NOT NULL */}
            {error.username && <p className='error'>{error.username}</p>}
            <input
                type='email'
                name='email'
                placeholder='Email'
                required
                onChange={onChange}
                value={email}
                className={error.email && 'showError'}
            />
            {/*  RENDER IF ERROR IS NOT NULL */}
            {error.email && <p className='error'>{error.email}</p>}
            <button
                onClick={() => setSteps((pre: number) => pre + 1)}
                type='button'
                disabled={
                    !!error.name ||
                    !!error.email ||
                    !!error.username ||
                    !values.name ||
                    !values.email
                }
            >
                <span className='btn-text'>Next</span>
                <span className='btn-icon'>
                    <FaArrowRightLong />
                </span>
            </button>
        </>
    )
}

export default Stage1
