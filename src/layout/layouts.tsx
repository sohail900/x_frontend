import './style.scss'
const NavbarLayout = ({ item }: { item: string }) => {
    return (
        <>
            <div className='navbar'>
                <h2>{item}</h2>
            </div>
        </>
    )
}
export default NavbarLayout
