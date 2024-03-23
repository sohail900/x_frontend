import { FC, ReactElement, useState, SyntheticEvent, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useQueryClient } from '@tanstack/react-query'
import TextAreaAutoSize from 'react-textarea-autosize'
import { usePost } from '../../../hooks/useUserData'
const NewPost: FC = (): ReactElement => {
    const [tweet, setTweet] = useState<TweetType<string>>({ myTweet: '' })
    const [showHide, setShowHide] = useState(true)
    const queryClient = useQueryClient()
    const userData = useSelector(
        (state: UserStateType) => state?.currentUser.user
    )
    const { mutate, isPending, isSuccess } = usePost()
    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        setShowHide(true)
        setTweet({ myTweet: '' })
        mutate(
            { id: userData._id, post: tweet.myTweet },
            {
                onSuccess: () => {
                    queryClient.invalidateQueries({ queryKey: ['allPosts'] })
                },
            }
        )
    }
    useEffect(() => {
        const time = setTimeout(() => {
            setShowHide(() => (isSuccess ? false : true))
        }, 1500)
        return () => clearTimeout(time)
    }, [isSuccess])

    return (
        <>
            <div className='user'>
                <img
                    src={`${userData.imagePath}`}
                    alt='profile'
                    className='img'
                />
            </div>
            <form
                method='post'
                className='inputField'
                onSubmit={(e) => submitHandler(e)}
            >
                <TextAreaAutoSize
                    placeholder='What is Happening?!'
                    value={tweet.myTweet}
                    onChange={(e) => {
                        setTweet({ ...tweet, myTweet: e.target.value })
                    }}
                    className='textarea'
                    name='post'
                />
                <button disabled={!tweet.myTweet || isPending} type='submit'>
                    {isPending ? 'Loading...' : 'Post'}
                </button>
            </form>
            {/* ADD POP UP CONTENT */}
            <div
                className='popUp'
                style={{ top: `${showHide && isSuccess ? '13%' : '-50%'}` }}
            >
                <p>Successful</p>
            </div>
        </>
    )
}

export default NewPost
