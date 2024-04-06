// be able to click on a doctor and open the scheduling modal
// render all doctors from the JS file
// for each doctor, render a doctor card

import { useState } from "react"

import { doctorData } from "../data";

// import modal component:
import AddModal from "./Modal";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Doctors = ({ addAppointment }) => {
    // selected doctor
    const [selectedDoctor, setSelectedDoctor] = useState("")
    // show modal
    const [showModal, setShowModal] = useState(false)
    // functions to handle modal:
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)

    const handleClick = (name) => {
        // set our selected doctor
        setSelectedDoctor(name)
        // show our modal
        handleShow()
    }

    return (
        <Container className="p-2">
            <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
                Our Doctors
            </h3>
            <Row className="justify-content-center">
                {doctorData.map((dr) => (
                    <Col key={dr.id} xs={6} sm={4} md={3} type="button">
                        <img
                            src={dr.img}
                            alt={dr.id}
                            className="img-thumbnail doctor-img"
                            onClick={()=> handleClick(dr.name)}
                        />
                        <div>
                            <h5>{dr.name}</h5>
                            <h6>{dr.dep}</h6>
                        </div>
                    </Col>
                ))}
            </Row>
            <AddModal 
                show={showModal}
                doctorName={selectedDoctor}
                handleClose={handleClose}
                addAppointment={addAppointment}
            />
        </Container>
    )
}

export default Doctors