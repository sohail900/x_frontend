import { FC, ReactElement, lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Loading } from './loading/loading'
const Home = lazy(() => import('./pages/home/home'))
const AuthLayout = lazy(() => import('./pages/authLayout/AuthLayout'))
const Login = lazy(() => import('./pages/login/Login'))
const Signup = lazy(() => import('./pages/signup/Signup'))
const NotFound = lazy(() => import('./pages/not-found/not-found'))
const ProfileSlug = lazy(() => import('./slug/profileSlug'))
import './index.scss'
const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home />,
        children: [{ path: 'profile/:id', element: <ProfileSlug /> }],
    },
    {
        path: '*',
        element: <NotFound />,
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Signup /> },
        ],
    },
])
const App: FC = (): ReactElement => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <RouterProvider router={router} />
            </Suspense>
        </>
    )
}

export default App
