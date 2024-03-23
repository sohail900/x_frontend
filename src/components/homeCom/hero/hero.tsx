import { FC, ReactElement, memo } from 'react'
import NewPost from './newPost'
import './style.scss'
import AllPosts from './alltweets/allPosts'
import NavbarLayout from '../../../layout/layouts'
const Hero: FC = memo((): ReactElement => {
    return (
        <section className='main_section' autoFocus>
            <NavbarLayout item='Home' />
            <div className='tweet'>
                <NewPost />
            </div>
            <div className='allTweets'>
                <AllPosts />
            </div>
        </section>
    )
})
export default Hero
