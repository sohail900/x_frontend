import { useMutation, UseMutationResult } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_URL
const API_END_POINT = import.meta.env.VITE_API_URL_END_POINT
const useLikedPost = (): UseMutationResult<
    AxiosResponse,
    AddError,
    LikeTypeProps,
    unknown
> => {
    return useMutation({
        mutationKey: ['like-post'],
        mutationFn: async (values) => {
            return await axios.put(
                `${API_BASE_URL + API_END_POINT}/like/add`,
                values
            )
        },
    })
}
export { useLikedPost }
