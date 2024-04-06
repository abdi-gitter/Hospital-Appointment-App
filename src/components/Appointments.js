import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FaTimesCircle } from "react-icons/fa"


const Appointments = ({ appointments, deleteAppointment, toggleConsulted }) => {

    // Display a list of appointments

    return (
        <Container className="p-2">
            <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>Appointment List:</h3>
            {/* container which will conditionally render either an image or our list of appointments
            depending on whether or not we have any appointments */}
            <div type="button" className="d-flex flex-column align-items-center">
                {
                    // show image if no appointments
                    appointments.length === 0 && (
                        // we can't import images outside of the source folder,
                        // so we need to use the public folder
                        // Otherwise, we could move the images folder into the src folder and import them then
                        <img src='./img/appointment.jpg' width={"80%"} />
                    )
                }

                {
                    // show appointments
                    // loop through appointments and render a card for each appointment
                    appointments.map((appointment) => {
                        // build a card for each appointment

                        // EXAMPLE APPOINTMENT OBJECT:
                        
                        //  {
                        //     id: 1,
                        //     patient: "Barry Vermont",
                        //     day: new Date(),
                        //     consulted: false,
                        //     doctor: "Dr. Hazel Valery",
                        //   }

                        const { id, patient, day, consulted, doctor } = appointment

                        const date = new Date(day).toLocaleDateString()
                        // This is how to remove the seconds from the time:
                        const time = new Date(day).toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'})

                        return (
                            // classnames are: "appointments consulted" or "appointments"
                            // ternary: condition ? true : false
                            <div 
                                key={id} 
                                className={consulted? "appointments consulted" : "appointments"}
                                onDoubleClick={()=>toggleConsulted(id)}
                            >
                                <Row className="justify-content-center align-items-center g-3">
                                    {/* Patient and doctor */}
                                    <Col xs={12} sm={12} md={6}>
                                        <h4 className="text-danger">{patient}</h4>
                                        <h5>{doctor}</h5>
                                    </Col>

                                    {/* Date and time */}
                                    <Col xs={10} sm={8} md={5}>
                                        <h5>{date}</h5>
                                        <h6>{time}</h6>
                                    </Col>

                                    {/* X button (delete) */}
                                    <Col xs={2} sm={4} md={1}>
                                        {/* When we click on this element, we need to delete the appointment: */}
                                        <FaTimesCircle 
                                            className="text-danger fs-1" 
                                            type="button"
                                            onClick={()=> deleteAppointment(id)}
                                        />
                                    </Col>
                                </Row>
                            </div>    
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default Appointments