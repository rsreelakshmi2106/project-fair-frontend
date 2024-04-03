import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button onClick={handleShow} className='btn btn-light text-dark m-5'>Add</button>


      <Modal
      size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className='row'>
            <div className="col-lg-6 mt-4 p-5">

            <label>
              <input type="file" style={{ display: 'none' }} />
              <img src="https://institute.careerguide.com/wp-content/uploads/2020/10/e426702edf874b181aced1e2fa5c6cde.gif" alt="" width={'300px'} />
            </label>

            </div>
            
            <div className="col-lg-6 text-center">
              <input type="text" placeholder='Project Title' className='form-control mb-3' />
              <input type="text" placeholder='Language Used' className='form-control mb-3' />
              <input type="text" placeholder='Git Hub Link' className='form-control mb-3' />
              <input type="text" placeholder='Live Link' className='form-control mb-3' />
              <input type="text" placeholder='Overview' className='form-control mb-3' />
              
            </div>

          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light">
            Add
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default AddProject