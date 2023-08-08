import styles from './pattern-render-props.module.css'

export const HelloMessage = ({ user }) => {
	return <span>Привет, {user}</span>
}

export const GoodByeMessage = ({ user }) => {
	return <span>До свидания, {user}</span>
}

export const UserWidget = ({ Message, messageProps }) => {
	const user = 'Василий'

	return (
		<div>
			<div>Текущий пользователь: {user}</div>
			<div>Сообщение:</div>
			<Message user={user} {...messageProps} />
			{/* {render(user)} */}
			{/* {children(user)} */}
			{/* <HelloMessage user={user} /> */}
			{/* <GoodByeMessage user={user} /> */}
		</div>
	)
}

export const PatternRenderProps = () => {
	return (
		<div>
			<h2 className={styles.h2}>PatternRenderProps</h2>
			<div className={styles.flex}>
				{/* <UserWidget> {(user) => <HelloMessage user={user} />} </UserWidget> */}
				{/* <UserWidget render={(user) => <HelloMessage user={user} />} /> */}
				{/* <UserWidget render={(user) => <GoodByeMessage user={user} />} /> */}
				<UserWidget Message={HelloMessage} />
				<p></p>
				<UserWidget Message={GoodByeMessage} messageProps={{ prop: 'prop' }} />
			</div>
		</div>
	)
}
