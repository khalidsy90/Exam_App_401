import React, { Component } from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

export class ModalCom extends Component {
    render() {
      console.log(this.props.oneChocolate);
        return (
            <Modal show={this.props.show} onHide={this.props.hideModal}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={this.props.updateChoclate}>
            <Form.Group className="mb-3" controlId="formBasicTitle" name='title'>
                 <Form.Label>Title :</Form.Label>
                 <Form.Control type="text" defaultValue={this.props.oneChocolate.title} name='title' />
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicimageUrl">
                 <Form.Label>imageUrl :</Form.Label>
                 <Form.Control type="text" defaultValue={this.props.oneChocolate.imageUrl} name='imageUrl' />
             </Form.Group>
             <Button variant="primary" type='submit'>
                Update
              </Button>
            </Form>
            </Modal.Body>
          </Modal>          
        )
    }
}

export default ModalCom
