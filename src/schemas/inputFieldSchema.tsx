import * as Yup from 'yup'

const getCharacterValidationError = (error: string) => {
    return `Password must contain at least 1 ${error}.`
}

//@  REGISTER SCHEMAS
const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too short')
        .max(50, 'Too long')
        .required('Required'),
    username: Yup.string()
        .matches(/^\S*$/, 'Username cannot contain whitespaces')
        .trim()
        .min(5, 'Too short')
        .max(20, 'Too long')
        .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
        .required('Required')
        .min(8, 'Your password must be longer than 5 characters.')
        .matches(/[a-z]/, getCharacterValidationError('lowercase'))
        .matches(/[A-Z]/, getCharacterValidationError('uppercase'))
        .matches(/[0-9]/, getCharacterValidationError('number')),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),
    files: Yup.string().required('Required'),
})
//@ LOGIN SCHEMA.
const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
})
export { RegisterSchema, LoginSchema }
