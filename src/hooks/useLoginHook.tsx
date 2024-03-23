import { UseMutationResult, useMutation } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_URL
const API_END_POINT = import.meta.env.VITE_API_URL_END_POINT
const response = async (values: Partial<FormikInitialValues>) => {
    const formData = new FormData()
    formData.append('email', values.email as string)
    formData.append('password', values.password as string)
    return await axios.post(`${API_BASE_URL + API_END_POINT}/login`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

export const useLoginHook = (): UseMutationResult<
    AxiosResponse,
    AddError,
    Partial<FormikInitialValues>,
    unknown
> => {
    return useMutation({
        mutationFn: (values: Partial<FormikInitialValues>) => response(values),
    })
}
