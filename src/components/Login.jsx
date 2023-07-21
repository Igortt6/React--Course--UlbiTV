import { useContext } from "react";
import MainButton from "./UI/button/MainButton";
import MainInput from "./UI/input/MainInput";
import { AuthorContext } from "../context";

const Login = () => {
    const { isAuthor, setIsAuthor } = useContext(AuthorContext)
    const login = e => {
        e.preventDefault();
        setIsAuthor(true);
        localStorage.setItem('author', 'true')
    }

    return (
        <div>

            <h1>Сторінка для логіна</h1>
            <form onSubmit={login}>
                <MainInput type="text" placeholder="Введіьт логін" />
                <MainInput type="text" placeholder="Введіть пароль" />
                <MainButton>Увійти</MainButton>
            </form>

        </div>
    )
}
export default Login;   