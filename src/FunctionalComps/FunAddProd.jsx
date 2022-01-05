import React,{useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import { postAPI } from './FunServices/API2';
import {useNavigate}  from 'react-router-dom';

const initialState = {
    title:"",
    img1:"",
    desc:""
}
const FunAddProd = () => {
    const [state, setState] = useState(initialState);
    const {title,img1, desc} = state;

    //
    let navigate = useNavigate();

    const handleChange = (e)=>{
        console.warn("Targeted value",e.target.value);
        setState({...state, [e.target.name]:e.target.value});

    }

    const addDetails = async(e)=> {
        e.preventDefault();
        await postAPI(state);
        navigate("/products");
    }

    return (
        <div>
            <Form>
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title" name="title" value={title} onChange={(e)=>handleChange(e)}/>
                    <br />
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Description" name="desc" value={desc} onChange={(e)=>handleChange(e)}/>
                    <br />
                    <Form.Label>Image Path:</Form.Label>
                    <Form.Control type="text" placeholder="Image Path" name="img1" value={img1} onChange={(e)=>handleChange(e)}/>
                    <br />
                    <Button variant="primary" type="submit" onClick={(e)=> addDetails(e)}>Submit</Button>
            </Form>
        </div>
    );
};

export default FunAddProd;