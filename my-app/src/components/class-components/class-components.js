import { Component } from 'react'
import styles from './class-components.module.css'

export class ClassComponents extends Component {
	// state = window.innerWidth   как вариант, можно объявить состояние здесь
	constructor(props) {
		super(props)

		// console.log(props.message)   // аналог useLayoutEffect()

		this.state = {
			screenWidth: window.innerWidth,
		} // но обычно объявляют в конструкторе

		// this.updateScreenWidth = this.updateScreenWidth.bind(this)
	}

	updateScreenWidth = () => {
		this.setState({ screenWidth: window.innerWidth })
	}

	componentDidMount() {
		console.log(this.props.message)

		window.addEventListener('resize', this.updateScreenWidth)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateScreenWidth)
	}

	render() {
		return (
			<div>
				<h2 className={styles.h2}>ClassComponents</h2>
				{this.props.message}: {this.state.screenWidth}
			</div>
		)
	}
}
