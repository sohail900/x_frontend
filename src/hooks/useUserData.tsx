import { useMutation, UseMutationResult, useQuery } from '@tanstack/react-query'
import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_URL
const API_END_POINT = import.meta.env.VITE_API_URL_END_POINT
const TOKEN = localStorage.getItem('token')
async function addNewPost(newTweet: AddPostProps) {
    return await fetch(`${API_BASE_URL + API_END_POINT}/post`, {
        method: 'POST',
        body: JSON.stringify({
            userId: newTweet.id,
            post: newTweet.post,
        }),
        headers: {
            'content-type': 'application/json',
        },
    })
}
const usePost = (): UseMutationResult<
    Response,
    AddError,
    AddPostProps,
    unknown
> => {
    return useMutation({
        mutationFn: (newTweet: AddPostProps) => addNewPost(newTweet),
    })
}
///GET ALL POST
const useGetAllPost = () => {
    return useQuery({
        queryKey: ['allPosts'],
        queryFn: async () => {
            return await axios.get(`${API_BASE_URL + API_END_POINT}/get_post`)
        },
    })
}
// GET ALL Registered users.
const useGetAllUser = () => {
    return useQuery({
        queryKey: ['registered-user'],
        queryFn: async () => {
            return await axios.get(
                `${API_BASE_URL + API_END_POINT}/registered/user`,
                {
                    headers: {
                        Authorization: `Bearer ${TOKEN}`,
                    },
                }
            )
        },
    })
}
export { usePost, useGetAllPost, useGetAllUser }
