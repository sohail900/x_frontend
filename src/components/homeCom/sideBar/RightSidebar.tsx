import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { useGetAllUser } from '../../../hooks/useUserData'
import { Link } from 'react-router-dom'
const RightSidebar: React.FC<SideBarProps> = ({
    isSidebarOpen,
}): React.ReactElement => {
    const { data, isLoading } = useGetAllUser()
    const API_BASE_URL = import.meta.env.VITE_API_URL
    return (
        <>
            <section
                className={
                    isSidebarOpen ? 'rightSidebar' : 'rightSidebar close'
                }
            >
                <div className='searchBarSection'>
                    <FaSearch className='icons' />
                    <input type='text' placeholder='Search' />
                </div>
                <div className='premiumSection'>
                    <h3>Subscribe to Premium</h3>
                    <p>
                        Subscribe to unlock new features and if eligible,
                        receive a share of ads revenue.
                    </p>
                    <button>Coming Soon</button>
                </div>
                <div className='followSection'>
                    <h2>Who to follow</h2>
                    {isLoading ? (
                        <p style={{ textAlign: 'center' }}>Please Wait</p>
                    ) : (
                        data?.data?.registeredUsers.map(
                            (values: TValues, index: number) => {
                                const { _id, name, username, imagePath } =
                                    values
                                return (
                                    <>
                                        <div
                                            className='followOthers'
                                            key={index}
                                        >
                                            <div className='flex'>
                                                <div className='profileImage'>
                                                    <img
                                                        src={`${API_BASE_URL}/${imagePath}`}
                                                        alt=''
                                                    />
                                                </div>
                                                <div className='userContents'>
                                                    <h3>
                                                        <Link
                                                            to={`./profile/${_id}`}
                                                            style={{
                                                                all: 'unset',
                                                            }}
                                                        >
                                                            {name}
                                                        </Link>
                                                    </h3>
                                                    <p>@{username}</p>
                                                </div>
                                            </div>
                                            <button>Follow</button>
                                        </div>
                                    </>
                                )
                            }
                        )
                    )}
                </div>
            </section>
        </>
    )
}

export default RightSidebar
