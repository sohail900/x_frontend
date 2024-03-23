/// <reference types="vite/client" />

interface RightSideBarType<T, I> {
    name: T
    FaIcon?: I
    path: T | null
}
interface TweetType<T> {
    myTweet: T
}
interface staticTweets {
    name: string
    username: string
    tweet: string
    profileImage: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>>
}

///@FORMIK TYPES
interface FormikProps<T> {
    values: {
        name: T
        username: T
        email: T
        password: T
        confirmPassword: T
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        files: any
    }
    steps: number
    setSteps: Dispatch<>
}
interface FormikPropsStage1<T> extends FormikProps<T> {
    onChange: (e: ChangeEvent<HTMLInputElement>) => unknown
    error: FormikErrors<InitialValuesTypes>
}
interface FormikPropsStage2<T> extends FormikProps<T> {
    setFieldValue?: (
        field: string,
        value: unknown,
        shouldValidate?: boolean
    ) => unknown
    error: FormikErrors<InitialValuesTypes>
}
//formik initial values types
interface FormikInitialValues {
    name: string
    username: string
    email: string
    password: string
    confirmPassword: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    files: any
}
interface RegisterSchemaType {
    name: string
    username: string
    email: string
    password: string
    confirmPassword: string
}
//sideBAR props
interface SideBarProps {
    isSidebarOpen?: boolean | MouseEventHandler<HTMLButtonElement> | undefined
    toggleSidebar?: Dispatch<>
}
//REDUCER TYPES.
interface ReducerType<T> {
    loading: T
    message: string
    error: T
}
///RESPONSE ERROR TYPES.
interface AddError extends Error {
    response: {
        data: {
            message: string
        }
    }
}
///REDUX INITIAL VALUES TYPE.
type UserStateType = {
    currentUser: {
        user: {
            _id: string
            name: string
            username: string
            email: string
            imagePath: string
        }
    }
}
type InitalStateType = {
    user: {
        _id: string
        name: string
        username: string
        email: string
        imagePath: string
    }
}
///ADD NEW POST TYPES.
type AddPostProps = {
    id: string
    post: string
}
///POST TYPES.
interface PostTypes {
    _id: string
    userId: string
    postId: string
    index?: number
    fullname: string
    username: string
    email: string
    imageUrl: string
    post: string
    likes: string[]
    createdAt?: Date
}
///LIKED TYPES.
type LikeTypeProps = {
    postId: string
    userId?: string
    likes?: string[]
}
interface TQueryKey extends QueryKey {
    queryKey: string[]
}
///VALUES TYPES
type TValues = {
    _id: string
    name: string
    username: string
    imagePath: string
}
