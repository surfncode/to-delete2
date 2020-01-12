
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link,Redirect } from "react-router-dom";

class UpdateCreate  extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onClickSave = this.onClickSave.bind(this);
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangePrice = this.onChangePrice.bind(this);
		this.onChangeHot = this.onChangeHot.bind(this);
	}

	render() {
		console.log("jndb render View");
		if(this.state.saved) {
			return (<Redirect to="/" /> );
		}
		const dish = this.state.dish;
		const content =  dish ? this.renderDish(dish) : this.renderLoading();
		return (
			<Container>
				<Row>
					<Col md={2}></Col>
					<Col md={8}>
						{content}
					</Col>
					<Col md={2}></Col>
				</Row>
			</Container>
		);
	}

	renderSaved() {
		return ;
	}

	renderDish(dish) {
		return (

			<div>
				<Form>
				  <Form.Group controlId="name">
				    <Form.Label>Name</Form.Label>
				    <Form.Control type="text" value={dish.name} 
				    	placeholder="Enter name" onChange={this.onChangeName}/>
				  </Form.Group>
				  <Form.Group controlId="description">
				    <Form.Label>Description</Form.Label>
				    <Form.Control as="textarea" value={dish.description} 
				    	rows="3"
				    	placeholder="Enter description" onChange={this.onChangeDescription}/>
				  </Form.Group>
				  <Form.Group controlId="price">
				    <Form.Label>Price</Form.Label>
				    <Form.Control type="text" value={dish.price} 
				    	placeholder="Enter price" onChange={this.onChangePrice}/>
				  </Form.Group>
				  <Form.Group controlId="hot">
				    <Form.Check type="checkbox" label="Hot" checked={dish.hot}
				    	onChange={this.onChangeHot}/>
				  </Form.Group>
				</Form>
				<Button variant="primary" onClick={this.onClickSave}>Save</Button>
				<Link to={"/"}>
					<Button variant="secondary">Cancel</Button>
				</Link>
			</div>
		);
	}

	renderLoading() {
		return (<Spinner animation="border" />);
	}

	onClickSave(event) {
		this.setState({saved: true});
	}

	componentDidMount() {
		this.setState({dish: getDish()});
	}

	onChangeName(event) {
		const name = event.currentTarget.value;
		console.log("jndb onChangeName",name);
		this.setState({dish: Object.assign({},this.state.dish,{name: name})});
	}

	onChangeDescription(event) {
		const description = event.currentTarget.value;
		this.setState({dish: Object.assign({},this.state.dish,{description: description})});
	}

	onChangePrice(event) {
		const price = event.currentTarget.value;
		this.setState({dish: Object.assign({},this.state.dish,{price: price})});
	}

	onChangeHot(event) {
		const hot = event.currentTarget.checked;
		this.setState({dish: Object.assign({},this.state.dish,{hot: hot})});
	}

}

// jndb
function getDish() {
	return {
		id: 1,
		name: "Carottes rôties, sauce Grecque aux herbes et graines de courge",
		price: 20,
		hot: true,
		description: "Prenez des carottes taillées finement et rôties au four, accompagnez les d'une sauce crémeuse au yaourt grec avec plein de bonnes herbes fraîches et parsemez de graines de courges pour le croquant. Frais et délicieux ! ",
		ingredients: [
		"Carotte",
		"Huile d'olive",
		"Miel",
		"Vinaigre balsamique blanc",
		"Sel",
		"Poivre",
		]
	};
}

export default UpdateCreate;