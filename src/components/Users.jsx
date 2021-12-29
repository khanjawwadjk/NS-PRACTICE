import React, { Component } from 'react';
import {Table} from "react-bootstrap";

export class Users extends Component {
    constructor(props){
        super(props);
        this.state={userData:[]};
        console.log("state data==>",this.state.userData);
    }
    componentDidMount(){
        const url ="https://jsonplaceholder.typicode.com/users";
        fetch(url)
        .then(res=> res.json())
        .then(userResp=>{
            console.log("response data===>",userResp);
            this.setState({userData : userResp})
        })
    }

    render() {
        return (
            <div>
                <h2>Users Component</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userData.map((vals, index)=>{
                            return(
                            <tr key={vals.id}>
                                <th>{index+1}</th>
                                <th>{vals.name}</th>
                                <th>{vals.username}</th>
                                <th>{vals.email}</th>
                                <th>{vals.website}</th>
                            </tr>
                            )
                        })}

                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Users
