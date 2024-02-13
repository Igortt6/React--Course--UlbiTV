//імпортуємо класи із css
import classes from './MainButton.module.scss'

const MainButton = ({ children, ...props }) => {
	return (
		// додаємо клас, як ВЛАСТИВІСТЬ об'єкту
		<button {...props} className={classes.btn}>
			{children}
		</button>
	)
}
export default MainButton
