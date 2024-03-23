import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import './style.scss'
const NotFound = () => {
    return (
        <>
            <section className='not-found-page'>
                <h1>SORRY, UNDER-DEVELOPMENT 🙏</h1>
                <Link to='../' className='back'>
                    <MdArrowBack className='back-arrow' />
                    Back To Home
                </Link>
            </section>
        </>
    )
}
export default NotFound
