import { useQueryClient } from '@tanstack/react-query'
import { GoHeart, GoHeartFill } from 'react-icons/go'
import { useSelector } from 'react-redux'
import { useLikedPost } from '../../../../../hooks/postReaction/useLikedPost'

export const LikeButton = ({ likes, postId }: LikeTypeProps) => {
    const queryClient = useQueryClient()

    const userData = useSelector(
        (state: UserStateType) => state.currentUser.user
    )

    const { mutate, isSuccess } = useLikedPost() // custom hook
    /* 
      TODO:if isSuccess is true then invalidate the query to get all posts
    */
    isSuccess &&
        queryClient.invalidateQueries({
            queryKey: ['allPosts'],
        })
    //values
    const values = {
        userId: userData._id,
        postId: postId,
    }
    //@ used filter to check if the user has liked the post or not
    const checkId = likes?.filter((elem) => elem === userData._id)
    return (
        <>
            <div className='recButton likes'>
                {checkId!.length > 0 && (
                    <button className='icon-container'>
                        <GoHeartFill className='icon likesIcon' />
                    </button>
                )}
                {!checkId?.length && (
                    <button
                        className='icon-container outlineIcon'
                        onClick={() => {
                            mutate(values)
                        }}
                    >
                        <GoHeart className='icon ' />
                    </button>
                )}
                <span
                    className={
                        likes!.length > 0 ? 'likesCount addCol' : 'likesCount'
                    }
                >
                    {likes?.length}
                </span>
            </div>
        </>
    )
}
