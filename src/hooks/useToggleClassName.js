import { useState } from 'react';

export const useToggleClassName = (options, initialValue = 0) => {
	const [value, setValue] = useState(options[initialValue])

	const toggle = () => {
		setValue(value => value === options[0] ? options[1] : options[0])
	}

	return [
		value,
		toggle
	]
}