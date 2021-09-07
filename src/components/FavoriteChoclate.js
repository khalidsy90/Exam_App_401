import React, { Component } from 'react'
import {Card, Button, Row} from 'react-bootstrap'

export class FavoriteChoclate extends Component {
    render() {
        console.log(this.props.favChocolate);
        return (
            <Row>
            {
                this.props.favChocolate.map((item,idx) =>{
                    return <Card style={{ width: '18rem' }} key={idx}>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Button variant="primary" onClick={()=>{this.props.deleteChocolate(item)}}>delete</Button>
                    <Button variant="primary">update</Button>
                    </Card.Body>
                 </Card>   
                })
            }                  
            </Row>
        )
    }
}

export default FavoriteChoclate
