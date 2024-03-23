import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Stage2: React.FC<FormikPropsStage1<string>> = ({
    onChange,
    values,
    error,
    setSteps,
}) => {
    const { password, confirmPassword } = values
    return (
        <>
            <input
                type='password'
                name='password'
                placeholder='Password'
                required
                onChange={onChange}
                value={password}
                className={error.password && 'showError'}
            />
            {/*  RENDER IF ERROR IS NOT NULL */}
            {error.password && <p className='error'>{error.password}</p>}
            <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                required
                onChange={onChange}
                value={confirmPassword}
                className={error.confirmPassword && 'showError'}
            />
            {/*  RENDER IF ERROR IS NOT NULL */}
            {error.confirmPassword && (
                <p className='error'>{error.confirmPassword}</p>
            )}
            <button
                onClick={() => setSteps((pre: number) => pre + 1)}
                type='button'
                disabled={!!error.password || !!error.confirmPassword}
            >
                <span className='btn-text'>Next</span>
                <span className='btn-icon'>
                    <FaArrowRightLong />
                </span>
            </button>
        </>
    )
}

export default Stage2
