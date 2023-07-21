import { Link } from 'react-router-dom';
import cl from './Navbar.module.scss'
import MainButton from '../button/MainButton';
import { useContext } from 'react';
import { AuthorContext } from '../../../context';


const Navbar = () => {
    const { isAuthor, setIsAuthor } = useContext(AuthorContext);

    const logout = () => {
        setIsAuthor(false);
        localStorage.removeItem('author')
    }
    return (
        <div className={cl.navbar}>
            <div className={cl.navbar__links}>
                <MainButton onClick={logout} >
                    Вийти
                </MainButton>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>

            </div>
        </div>
    )
}
export default Navbar;