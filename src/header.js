import React from 'react'


export class HeaderComponent extends React.Component {
	constructor(props) {
		// Los props son los parametros pasados cuando se instancia el componente
		// por ejem <HeaderComponent inicial={1} /> el inicial sería un prop
		super(props)
		// Generalmente los componentes de React funcionan con estados,
		// un componente se "actualiza" o re-renderiza si el estado "state" cambia,
		// o los props cambian
		this.state = {
			inicial: props.inicial || 0
		}
	}
	// Hay Muchos métodos del ciclo de vida de un componente, bastante utiles
	// https://reactjs.org/docs/react-component.html
	componentDidMount() {
		alert("me renderizo: HeaderComponent")
	}
	// Este es un método propio que yo cree
	onClick() {
		this.setState({inicial: this.state.inicial+1})
	}
	render() {
		const {inicial} = this.state
		return <div className="header">
			<h3>Soy un HeaderComponent</h3>
			<h5>Numero de clicks: {inicial}</h5>
			<button onClick={(e) => this.onClick()}>Clickeame</button>
		</div>
	}
}