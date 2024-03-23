import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL
const API_URL_END_POINT = import.meta.env.VITE_API_URL_END_POINT
export const useSlugQuery = (id: string) => {
    return useQuery({
        queryKey: ['slug-key'],
        queryFn: async () =>
            await axios.get(`${API_URL + API_URL_END_POINT}/profile/${id}`),
    })
}
