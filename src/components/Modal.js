import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"

import { useState, useEffect } from "react"

const AddModal = ({ show, doctorName, handleClose, addAppointment }) => {
// EXAMPLE APPOINTMENT OBJECT:
    //  {
    //     id: 1,
    //     patient: "Barry Vermont",
    //     day: new Date(),
    //     consulted: false,
    //     doctor: "Dr. Hazel Valery",
    //   }

    // state for my inputs:
    const [patientName, setPatientName] = useState("")
    const [datetime, setDatetime] = useState("")

    // handleSubmit function:
    const handleSubmit = (e)=>{
        console.log("submitted")
        e.preventDefault()

        // create a new appointment object, and pass to addAppointment function
        if(!patientName || !datetime){
            alert("Please fill out all fields")
            return;
        }

        const newAppointment = {
            id: Math.floor(Math.random() * 10000) + 1,
            patient: patientName,
            day: datetime,
            consulted: false,
            doctor: doctorName
        }

        // pass this new appointment to our addAppointment function
        addAppointment(newAppointment)
        // close the modal
        handleClose()
    }

    return (
        <Modal onHide={handleClose} show={show}>
            <Modal.Header closeButton>
                <Modal.Title className="diplay-6 text-danger">
                    Reservation for {doctorName}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="patientName">
                        <Form.Label>Patient Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Your Name"
                            required
                            value = {patientName}
                            onChange={(e)=> setPatientName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="datetime">
                        <Form.Label>Day&Time</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            // min attribute: the earliest date and time that can be selected
                            // This has to be formatted as a string: "YYYY-MM-DDTHH:MM"
                            min={new Date().toISOString().slice(0, 16)}
                            required
                            value = {datetime}
                            onChange={(e)=> setDatetime(e.target.value)}
                        />
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="primary" type="submit" className="me-2">
                            Submit
                        </Button>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    )

}

export default AddModal