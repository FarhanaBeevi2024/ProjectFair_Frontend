import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
   <FontAwesomeIcon icon={faPenToSquare} className='text-info' onClick={handleShow}/>

   <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-success'>Edit projects Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
            <label htmlFor="projImg">
              <input id="projImg" type='file' style={{display:'none'}} />
              <img src="https://m.media-amazon.com/images/I/71sKzRQtXtL.png" alt="no image" width={'100%'} />
            </label>
            </Col>
            
            <Col sm={12} md={6}>
          <form className='p-3'>

            <div className='mb-3'>
            <input type="text" placeholder='Title' className='form-control' />
            </div>
            <div className='mb-3'>
            <input type="text" placeholder='Language' className='form-control' />
            </div>
            <div className='mb-3'>
            <input type="text" placeholder='Github' className='form-control' />
            </div>
            <div className='mb-3'>
            <input type="text" placeholder='Website' className='form-control' />
            </div>
            <div className='mb-3'>
              <textarea placeholder='OverView' className='form-control' rows={'4'}></textarea>
            </div>
            </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default EditProject
