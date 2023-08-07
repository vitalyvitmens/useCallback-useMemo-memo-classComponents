import { memo, useMemo, useCallback, useState } from 'react'
import styles from './app.module.css'

export const Field = memo(({ name, label, value, onChange }) => {
	console.log(name)

	return (
		<label>
			<span>{label}: </span>
			<input
				type="number"
				name={name}
				value={value}
				onChange={onChange}
			></input>
		</label>
	)
})

export const App = () => {
	console.log('-------------- App -----------------')
	const [num, setNum] = useState(0)
	const [degree, setDegree] = useState(0)

	const onNumChange = useCallback(({ target }) => {
		setNum(Number(target.value))
	}, [])

	const onDegreeChange = useCallback(({ target }) => {
		setDegree(Number(target.value))
	}, [])

	const hardCalculatedNum = useMemo(
		() => new Array(30000000).fill(0).reduce((res, el) => res + el, num),
		[num]
	)

	const result = Math.pow(hardCalculatedNum, degree)

	return (
		<div className={styles.app}>
			<div>
				{num} в степени {degree} = {result}
			</div>
			<Field name="num" label="Число" value={num} onChange={onNumChange} />
			<Field
				name="degree"
				label=" Степень"
				value={degree}
				onChange={onDegreeChange}
			/>
		</div>
	)
}
