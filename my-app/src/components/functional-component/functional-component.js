import { useEffect, useState } from 'react'
import styles from './functional-component.module.css'

export const FunctionalComponents = ({ message }) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	useEffect(() => {
		console.log(message)

		const updateScreenWidth = () => setScreenWidth(window.innerWidth)

		window.addEventListener('resize', updateScreenWidth)

		return () => window.removeEventListener('resize', updateScreenWidth)
	}, [])

	return (
		<div>
			<h2 className={styles.h2}>FunctionalComponents</h2>
			{message}: {screenWidth}
		</div>
	)
}
