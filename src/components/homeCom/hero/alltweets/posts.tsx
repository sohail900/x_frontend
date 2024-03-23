import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { LikeButton } from './buttons/likeButton'
import { DeleteButton } from './buttons/deleteButton'
import { UpdateButton } from './buttons/updateButton'
import { capitalizedName } from '../../../../util/capName'
const API_BASE_URL = import.meta.env.VITE_API_URL
const Posts = ({
    index,
    fullname,
    imageUrl,
    username,
    post,
    postId,
    userId,
    likes,
    createdAt,
}: Partial<PostTypes>) => {
    const [postTime, setPostTime] = useState<string | null>(null)
    function calculateTimeAgo() {
        const currentTime = moment() //GET CURRENT TIME
        const previousTime = moment(createdAt) //GET PREVIOUS TIME
        const duration = moment.duration(currentTime.diff(previousTime))
        ///SET LOGIC
        if (duration.asSeconds() < 60) {
            setPostTime('Just now')
        } else if (duration.asMinutes() < 60) {
            setPostTime(
                `${Math.floor(duration.asMinutes())} min${
                    Math.floor(duration.asMinutes()) === 1 ? '' : 's'
                } ago`
            )
        } else if (duration.asHours() < 24) {
            setPostTime(
                `${Math.floor(duration.asHours())} hour${
                    Math.floor(duration.asHours()) === 1 ? ' ' : 's'
                } ago`
            )
        } else if (duration.asDays() < 7) {
            setPostTime(
                `${Math.floor(duration.asDays())} day${
                    Math.floor(duration.asDays()) === 1 ? '' : 's'
                } ago`
            )
        } else if (duration.asWeeks() < 30) {
            setPostTime(
                `${Math.floor(duration.asWeeks())} week${
                    Math.floor(duration.asWeeks()) === 1 ? '' : 's'
                } ago`
            )
        } else {
            setPostTime(
                `${Math.floor(duration.asMonths())} month${
                    Math.floor(duration.asMonths()) === 1 ? '' : 's'
                } ago`
            )
        }
    }
    useEffect(() => {
        calculateTimeAgo()
        const interval = setInterval(calculateTimeAgo, 60000)
        return () => {
            clearInterval(interval)
        }
    }, [createdAt])
    /// capitalized
    const { firstName, lastName } = capitalizedName(fullname as string)
    return (
        <section className='tweets' key={index}>
            <div className='userProfile'>
                <img
                    src={`${API_BASE_URL}/${imageUrl}`}
                    alt='profile-img'
                    className='img'
                    loading='lazy'
                />
            </div>
            <div className='userContents'>
                <div className='userInfo'>
                    <h3>
                        <Link
                            to={`./profile/${userId}`}
                            style={{ all: 'unset' }}
                            className='link'
                        >
                            {`${firstName} ${lastName}`}
                        </Link>
                    </h3>
                    <p className='username'>
                        @{username} <span>{postTime}</span>
                    </p>
                </div>
                <p className='userTweets'>{post}</p>
                <div className='reactions'>
                    <LikeButton postId={postId!} likes={likes!} />
                    <UpdateButton />
                    <DeleteButton />
                </div>
            </div>
        </section>
    )
}
export default Posts
