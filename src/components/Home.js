import { useState, useEffect } from 'react'
import Doctors from './Doctors'
import Appointments from './Appointments'

const Home = () => {

    const [appointments, setAppointments] = useState(
        JSON.parse(localStorage.getItem('appointments')) || []
    )

    // Add Appointment Function
    const addAppointment = (newAppointment) => {
        setAppointments([...appointments, newAppointment])
        // let a = []
        // a = [...a,"hello"]
        // otherwise: a = ["hello"] I would be completely overwriting the state
    }

    // Toggle Consulted Function:
    const toggleConsulted = (id) => {
        console.log("toggle consulted" + id)
        setAppointments(
            appointments.map((appointment) => appointment.id === id ? { ...appointment, consulted: !appointment.consulted } : appointment))
    }

    // Delete Appointment Function:
    const deleteAppointment = (appointmentId) => {
        setAppointments(currentAppointments =>
            currentAppointments.filter(appt => appt.id !== appointmentId)
        );
    };


    useEffect(() => {
        localStorage.setItem('appointments', JSON.stringify(appointments))
        console.log(appointments)
    }, [appointments])


    return (
        <main className="text-center mt-2 vh-100">
            <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
            <Doctors addAppointment={addAppointment} />

            <Appointments
                appointments={appointments}
                deleteAppointment={deleteAppointment}
                toggleConsulted={toggleConsulted}
            />
        </main>
    )
}

export default Home