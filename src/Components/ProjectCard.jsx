import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaGithub, FaLink } from "react-icons/fa";

function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card onClick={handleShow} style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://jooinn.com/images/coding-and-programming-computer-science-and-it.jpg" height={'200px'} />
        <Card.Body className='text-center'>
          <Card.Title >Project Title</Card.Title>
          <Card.Text>

          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>

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
          <div className="row">
            <div className="col-6">
              <img width={'100%'} src="https://jooinn.com/images/coding-and-programming-computer-science-and-it.jpg" alt="" />
            </div>
            <div className="col-6">
              <h2>Project Title</h2>
              <p style={{ textAlign: 'justify' }}>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt odit delectus sunt debitis assumenda iure inventore dicta quaerat iste tenetur nesciunt, asperiores atque eum libero quis quisquam. Reprehenderit, cumque.</p>
              <p>Technology used : <b>REACT,Node</b></p>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='d-flex justify-content-between'>
            <Button className='me-3'><a href=""><FaGithub /></a></Button>
            <Button className='me-3'><a href=""><FaLink /></a></Button>
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard