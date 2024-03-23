import { FC, ReactElement } from 'react'
import { useNavigate, Outlet, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addData } from '../../features/userSlice'
import { Loading } from '../../loading/loading'
import { useAuthQuery } from '../../hooks/useAuthQuery'
import LeftSidebar from '../../components/homeCom/sideBar/LeftSidebar'
import RightSidebar from '../../components/homeCom/sideBar/RightSidebar'
import Hero from '../../components/homeCom/hero/hero'
import { useSidebarToggle } from '../../hooks/customHooks'
import './style.scss'
const Home: FC = (): ReactElement => {
    const [isSidebarOpen, toggleSidebar] = useSidebarToggle()
    const params = useParams()
    //use dispatch to add data..
    const dispatch = useDispatch()
    const { data, isLoading } = useAuthQuery()
    const navigate = useNavigate()
    if (isLoading) {
        return <Loading />
    }
    //check if status code is 200 if not navigate to login page
    if (data?.status !== 200) {
        navigate('../login')
    }
    dispatch(addData(data?.data.user))
    return (
        <>
            <section className='homeSection'>
                <LeftSidebar toggleSidebar={toggleSidebar} />
                {params.id ? <Outlet /> : <Hero />}
                <RightSidebar isSidebarOpen={isSidebarOpen} />
            </section>
        </>
    )
}

export default Home
