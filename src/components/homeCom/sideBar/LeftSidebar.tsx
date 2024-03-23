import { ReactElement, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { GoSidebarCollapse } from 'react-icons/go'
import { MdCancel } from 'react-icons/md'
import { FiLogOut, FiHelpCircle } from 'react-icons/fi'
import { capitalizedName } from '../../../util/capName'
import { items } from '../../../constants/items'
import { d } from '../../../assets/index'
import './style.scss'

const API_BASE_URL = import.meta.env.VITE_API_URL

const LeftSidebar = ({ toggleSidebar }: SideBarProps): ReactElement => {
    const [toggle, setToggle] = useState<boolean>(true)
    const navigate = useNavigate()
    const userData = useSelector(
        (state: UserStateType) => state.currentUser.user
    )
    /// convert user name into capital
    const { firstName, lastName } = capitalizedName(userData.name)
    ///   Logout..
    const logoutProcess = () => {
        localStorage.removeItem('token')
        navigate('../login')
    }

    return (
        <>
            <section className='leftSideBar'>
                <div className='topSection'>
                    <Link to='/home'>
                        <img src={d} alt='xLogo' className='xLogo' />
                    </Link>
                    <ul>
                        {items?.map((elem, index) => {
                            const { name, path, FaIcon } = elem
                            return (
                                <>
                                    <NavLink
                                        to={
                                            path === null
                                                ? `./profile/${userData._id}`
                                                : path
                                        }
                                        className='sideBarLinks'
                                        key={index + 1}
                                    >
                                        <p className='icon'>{FaIcon}</p>
                                        <p className='sidebarContent'>{name}</p>
                                    </NavLink>
                                </>
                            )
                        })}
                        <button
                            className='toggleRightSidebar'
                            onClick={toggleSidebar}
                        >
                            <GoSidebarCollapse className='collapseIcon' />
                        </button>
                        <button className='sideBarButton'>Tweet</button>
                    </ul>
                </div>
                <button
                    className='profileSection'
                    onClick={() => setToggle((pre) => !pre)}
                >
                    <div className='profileImg'>
                        <img
                            src={`${API_BASE_URL}/${userData.imagePath}`}
                            alt='user-profile-image'
                            className='img'
                        />
                    </div>
                    <div className='profileInfo'>
                        <h3 className='profileName'>{`${firstName} ${lastName}`}</h3>
                        <p className='profileUsername'>@{userData.username}</p>
                    </div>
                </button>
                {/* TOGGLE LOGOUT BUTTON */}
                <div
                    className={` ${
                        toggle ? 'logout-button hBtn' : 'logout-button'
                    }`}
                >
                    <button onClick={logoutProcess} className='button'>
                        <span className='btn-icon'>
                            <FiLogOut />
                        </span>
                        Logout
                    </button>
                    <Link to='/help' className='button'>
                        <span className='btn-icon'>
                            <FiHelpCircle />
                        </span>
                        Help center
                    </Link>
                    <button
                        onClick={() => setToggle((pre) => !pre)}
                        className='button'
                    >
                        <span className='btn-icon'>
                            <MdCancel />
                        </span>
                        Cancel
                    </button>
                </div>
            </section>
        </>
    )
}

export default LeftSidebar
