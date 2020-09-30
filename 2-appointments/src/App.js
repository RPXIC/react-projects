import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Appointment from './components/Appointment'

const App = () => {
  let InitialAppointments = JSON.parse(localStorage.getItem('appointments'))
  if (!InitialAppointments) InitialAppointments = []

  const [appointments, setAppointments] = useState(InitialAppointments)

  useEffect(() => {
    if (InitialAppointments) localStorage.setItem('appointments', JSON.stringify(appointments))
    else localStorage.setItem('appointments', JSON.stringify([]))
  }, [appointments, InitialAppointments])

  const createAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ])
  }

  const deleteAppointment = id => {
    const newAppointments = appointments.filter(appointment => appointment.id !== id)
    setAppointments(newAppointments)
  }

  const title = appointments.length ? 'Manage your appointments' : 'No appointments'

  return (
    <>
      <h1>Appointments manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createAppointment={createAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
