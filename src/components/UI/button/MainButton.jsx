//імпортуемо класи із css
import classes from './MainButton.module.css'


const MainButton = ({ children, ...props }) => {

    return (
        // додаему клас, як ВЛАСТИВІСТЬ обєекту
        <button {...props} className={classes.btn}>
            {children}

        </button>
    )
}
export default MainButton;