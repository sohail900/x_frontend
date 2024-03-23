import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_URL
const API_END_POINT = import.meta.env.VITE_API_URL_END_POINT
export const useAuthQuery = () => {
    return useQuery({
        queryKey: ['user-data'],
        queryFn: async () => {
            return await axios.get(`${API_BASE_URL + API_END_POINT}/home`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
        },
    })
}
