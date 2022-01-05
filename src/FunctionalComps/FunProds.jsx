import React,{useState, useEffect} from 'react';
import {Card, Button} from "react-bootstrap";


import {getAPI, deleteProducts} from "./FunServices/API2.js";

const FunProds = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        getData();
    },[])

    const getData = async() =>{
        let resp = await getAPI();
        setData(resp.data);
        console.warn("state data=--===>",resp.data);
    }

    //
    const deleteProd = async(id) =>{
        // alert(id);
        await deleteProducts(id);
        getData();
    }
    
    return (
        <div>
            {data.map((vals)=>{
                return(
            <Card style={{ width: '18rem', margin:"20px", display:"inline-block" }} key={vals.id}>
                <Card.Img variant="top" src={vals.img1} height="200"/>
                <Card.Body>
                    <Card.Title>{vals.title}</Card.Title>
                    <Card.Text>
                   {vals.desc}
                    </Card.Text>
                    <hr />
                    <Button variant="primary" style={{margin:"10px"}}>Add To Cart</Button>
                    <Button variant="danger" onClick={()=> deleteProd(vals.id)}>Delete</Button>
                </Card.Body>
            </Card>
                )
            })}
            
        </div>
    );
};

export default FunProds;