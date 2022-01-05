import React, { Component } from 'react';
import {delProducts, getProducts} from "../services/API.js";
import {Card, Button, Row} from "react-bootstrap";

export class Prods extends Component {
    constructor(props){
        super(props);
        this.state = {prodData: []};
    }

    componentDidMount(){
        const getAPI = async() => {
        let resp = await getProducts();
        console.log("resp data==>",resp.data);
        this.setState({prodData: resp.data});
        }
        getAPI();
       
    }

    delProd(id){
        // alert("Delete ?");
        // delProducts(id)
    }

    

    render() {
        return (
            <div>
                <h2>Products components</h2>
                <Row>
                {this.state.prodData.map((vals,index)=>{
                    return(
                        <Card style={{ width: '18rem', margin:"30px", border:"2px solid black" }} key={vals.id}>
                            <Card.Img variant="top" src={vals.pImg}/>
                            <Card.Body>
                                <Card.Title>{vals.name} </Card.Title>
                                <Card.Text>{vals.price} &#8360;/-</Card.Text>
                                <Card.Text>Quantity: {vals.quant}</Card.Text>
                                <hr />
                                <Button variant="success">Add</Button>&nbsp;&nbsp;&nbsp;
                                <Button variant="danger" onClick={()=> this.delProd(vals.id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                    )
                })}
                </Row>
            </div>
        )
    }
}

export default Prods
