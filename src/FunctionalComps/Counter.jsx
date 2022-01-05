import React, {useState} from 'react';
import { Button, Card } from 'react-bootstrap';

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleDec = () =>{
        setCount(count-1);

    }
    const handleInc = () =>{
        setCount(count+1);
    }
    return (
        <div>
            <Card style={{height:"400",border:"2px solid black", margin:"20px auto", padding:"20px"}}>
            <Button onClick={()=> handleDec()} >-</Button>
            <h1>{count}</h1>
            <Button onClick={()=> handleInc()}>+</Button>
            </Card>
        </div>
    );
};

export default Counter;