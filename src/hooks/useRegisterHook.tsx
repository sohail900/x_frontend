import { useMutation, UseMutationResult } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_URL
const API_END_POINT = import.meta.env.VITE_API_URL_END_POINT
const serverResponse = async (values: FormikInitialValues) => {
    const formData = new FormData()
    formData.append('name', values.name)
    formData.append('username', values.username)
    formData.append('email', values.email)
    formData.append('password', values.password)
    formData.append('image', values?.files)
    return await axios.post(
        `${API_BASE_URL + API_END_POINT}/register`,
        formData
    )
}

export const useRegisterHook = (): UseMutationResult<
    AxiosResponse,
    AddError,
    FormikInitialValues,
    unknown
> => {
    return useMutation({
        mutationFn: (values: FormikInitialValues) => serverResponse(values),
    })
}
