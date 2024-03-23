import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { HiOutlineMail, HiOutlineCalendar } from 'react-icons/hi'
import { MdLink } from 'react-icons/md'
import NavbarLayout from '../layout/layouts'
import { Loading } from '../loading/loading'
import { useSlugQuery } from '../hooks/useSlug'
import { capitalizedName } from '../util/capName'
import './style.scss'
const API_URL = import.meta.env.VITE_API_URL
const ProfileSlug = () => {
    const params = useParams()
    const authUser = useSelector(
        (state: UserStateType) => state?.currentUser.user
    )
    //custom hook.
    const { data, isLoading } = useSlugQuery(params.id as string)
    ///if loading is true.
    if (isLoading) {
        return <Loading />
    }
    const profile = data?.data.user
    //Capitalized name(charAt(1)) (your name) ---> (Your Name)
    const { firstName, lastName } = capitalizedName(profile.name)
    /// format date
    const date = moment(profile.createdAt)
    const formatDate = date.calendar()
    return (
        <>
            <section className='profile-section'>
                <NavbarLayout item='Profile' />
                <div className='profile-bannner'></div>
                <div className='user-profile'>
                    <div className='user-profile-image'>
                        <img
                            src={`${API_URL}/${profile.imagePath}`}
                            alt='user-profile-image'
                        />
                    </div>
                    <div className='user-profile-content'>
                        <h1>{firstName + ' ' + lastName}</h1>
                        <p>@{profile.username}</p>
                    </div>
                    <div className='user-date'>
                        <p className='email'>
                            <span>
                                <HiOutlineMail />
                            </span>
                            {profile.email}
                        </p>
                        <p className='date'>
                            <span>
                                <HiOutlineCalendar />
                            </span>
                            Joined {formatDate}
                        </p>
                        <p className='userLinks'>
                            <span>
                                <MdLink />
                            </span>
                            <a
                                href='https://linkedin.com/in/sohailwebdev'
                                target='_blank'
                                className='link'
                            >
                                linkedin.com/in/sohailwebdev
                            </a>
                        </p>
                    </div>
                    {authUser._id === profile._id && (
                        <button className='profile-edit-button'>
                            Edit Profile
                        </button>
                    )}
                    <p className='twitter-hashtags'>
                        <span>#twitter</span>
                        <span>#X</span>
                        <span>#football</span>
                        <span>#new</span>
                        <span>#world</span>
                        <span>#elonmusk</span>
                    </p>
                </div>
            </section>
        </>
    )
}
export default ProfileSlug
