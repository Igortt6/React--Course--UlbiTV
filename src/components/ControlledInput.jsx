// Керований input.
// Навчальний компонент

import React, { useState } from 'react'

const ControlledInput = () => {
	const [value, setValue] = useState('Введіть текст')

	return (
		<>
			<h2>Керований Input: </h2>
			<h2>{value}</h2>
			<input
				className='input'
				placeholder={value}
				type='text'
				onChange={event => setValue(event.target.value)}
			/>
		</>
	)
}
export default ControlledInput
