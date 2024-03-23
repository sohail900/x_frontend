import { FC, ReactElement } from 'react'
import { useGetAllPost } from '../../../../hooks/useUserData'
import { Loading } from '../../../../loading/loading'
import Posts from './posts'
const AllPosts: FC = (): ReactElement => {
    const { data, isSuccess, isError, isLoading } = useGetAllPost()
    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <h1 style={{ textAlign: 'center' }}>No Post Found</h1>
    }
    return (
        <>
            {isSuccess &&
                data?.data.allPosts?.map(
                    (values: Partial<PostTypes>, index: number) => {
                        const {
                            _id,
                            userId,
                            fullname,
                            username,
                            imageUrl,
                            post,
                            likes,
                            createdAt,
                        } = values
                        return (
                            <>
                                <Posts
                                    index={index + 1}
                                    fullname={fullname}
                                    username={username}
                                    imageUrl={imageUrl}
                                    post={post}
                                    postId={_id}
                                    userId={userId}
                                    likes={likes}
                                    createdAt={createdAt}
                                />
                            </>
                        )
                    }
                )}
        </>
    )
}

export default AllPosts
