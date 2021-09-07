import React, { Component } from 'react'
import {Card, Button, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Datacomponent extends Component {

    render() {
        console.log('AllDataAPI',this.props.Chocolates);
        return (
            <Row>
            {
                this.props.Chocolates.map((item,idx) =>{
                    return <Card style={{ width: '18rem' }} key={idx}>
                    <Card.Img variant="top" src={item.imageUrl} />
                    <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Button variant="primary" onClick={(()=>this.props.addToFavorite(item))}>Add to Favorite</Button>
                    </Card.Body>
                 </Card>   
                })
            }                  
            </Row>
        )
    }
}

export default Datacomponent
