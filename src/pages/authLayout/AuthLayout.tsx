import { ReactNode, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './style.scss'
export default function AuthLayout(): ReactNode {
    const navigate = useNavigate()
    const tokens = localStorage.getItem('token')
    useEffect(() => {
        if (tokens) {
            navigate('/home')
        }
    }, [])

    return (
        <>
            <main className='container'>
                <section className='backgroundSection'>
                    <img src='d.png' alt='doge-image' />
                </section>
                <section className='containerSection'>
                    <div className='typoGraphy'>
                        <h1>Happening now</h1>
                        <h3>Join Today.</h3>
                    </div>
                    <div className='action'>
                        <button
                            className='btn createBtn'
                            onClick={() => navigate('./register')}
                        >
                            Create Account
                        </button>
                        <span>or</span>
                        <div className='alreadyHave'>
                            <p>Already have an account?</p>
                            <button
                                className='btn loginBtn'
                                onClick={() => navigate('./login')}
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </section>
                {/*Render Child Route Elements */}
                <Outlet />
            </main>
        </>
    )
}
