import React from 'react'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> {this.props.dataselected.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card.Img variant="top" src={this.props.dataselected.image_url} />
                        {this.props.dataselected.description}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                       
                    </Modal.Footer>
                </Modal>
            </>
        )

    }
}
export default SelectedBeast;