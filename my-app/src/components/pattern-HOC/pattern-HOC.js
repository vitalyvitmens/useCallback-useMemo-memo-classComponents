import styles from './pattern-HOC.module.css'

const withLogging = (Component) => {
	const NewComponent = (props) => {
		console.log(props.user)

		return <Component {...props} />
	}

	return NewComponent
}

const withLoggingAndColor = (Component, color) => {
	const NewComponent = (props) => {
		console.log(props.user)

		return (
			<span style={{ color }}>
				<Component {...props} />
			</span>
		)
	}

	return NewComponent
}

export const HelloMessage2 = ({ user }) => {
	return <span>Привет, {user}</span>
}

export const GoodByeMessage2 = ({ user }) => {
	return <span>До свидания, {user}</span>
}

const HelloMessageWithLogging = withLogging(HelloMessage2)
const RedHelloMessageWithLoggingAndColor = withLoggingAndColor(
	HelloMessage2,
	'red'
)

export const UserWidget2 = ({ Message, messageProps }) => {
	const user = 'Василий'

	return (
		<div>
			<div>Текущий пользователь: {user}</div>
			<div>Сообщение:</div>
			<HelloMessageWithLogging user={user} />
      <br/>
			<RedHelloMessageWithLoggingAndColor user={user} />
		</div>
	)
}

export const PatternHOC = () => {
	return (
		<div>
			<h2 className={styles.h2}>PatternHOC</h2>
			<div className={styles.flex}>
				<UserWidget2 />
			</div>
		</div>
	)
}
