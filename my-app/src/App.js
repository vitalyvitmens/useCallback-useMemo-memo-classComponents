import {
	FunctionalComponents,
	ClassComponents,
	UseCallbackUseMemoMemo,
	PatternRenderProps,
	PatternHOC,
} from './components'
import styles from './app.module.css'

export const App = () => {
	return (
		<>
			<div className={styles.app}>
				<UseCallbackUseMemoMemo />
				<FunctionalComponents message="Функциональный компонент" />
				<ClassComponents message="Классовый компонент" />
				<PatternRenderProps />
				<PatternHOC />
			</div>
		</>
	)
}
