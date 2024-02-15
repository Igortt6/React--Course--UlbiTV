import classes from './MainSelect.module.scss'
// NOTE: Сюди має приходити об'єкт options {value, name}

const MainSelect = ({ options, defaultValue, value, onChange }) => {
	return (
		<select
			className={classes.select}
			value={value}
			onChange={event => onChange(event.target.value)}
		>
			{/* базова опція - заголовок */}
			<option disabled value=''>
				{defaultValue}
			</option>

			{/* Масив опцій, переданий зверху */}
			{options.map(option => (
				<option value={option.value} key={option.value}>
					{option.name}
				</option>
			))}
		</select>
	)
}
export default MainSelect
