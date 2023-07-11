import classes from "./mainSelect.module.scss"

const MainSelect = ({ defaultValue, options, value, onChange }) => {

    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
            className={classes.select}
        >
            <option
                disabled
                className={classes.select__title}
                value="value1"
            >
                {defaultValue}
            </option>
            {options.map(option =>
                <option key={option.value} value={option.value} >
                    {option.name}
                </option>
            )}

        </select>
    )
}
export default MainSelect;