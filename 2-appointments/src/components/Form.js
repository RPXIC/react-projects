import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

const Form = ({ createAppointment }) => {
	const [appointment, setAppointment] = useState({
		pet: '',
		owner: '',
		date: '',
		time: '',
		symptoms: '',
	})
	const [error, setError] = useState(false)

	const handleChange = (e) => {
		setAppointment({
			...appointment,
			[e.target.name]: e.target.value,
		})
	}

	const { pet, owner, date, time, symptoms } = appointment

	const submitAppointment = (e) => {
		e.preventDefault()

		if (
			pet.trim() === '' ||
			owner.trim() === '' ||
			date.trim() === '' ||
			time.trim() === '' ||
			symptoms.trim() === ''
		) {
			return setError(true)
		}
		setError(false)

		appointment.id = uuidv4()

		createAppointment(appointment)

		setAppointment({
			pet: '',
			owner: '',
			date: '',
			time: '',
			symptoms: '',
		})
	}

	return (
		<>
			<h2 data-testid='title'>Create Appointment</h2>
			{error ? (
				<p data-testid='alert' className='alert-error'>
					All fields are required
				</p>
			) : null}
			<form onSubmit={submitAppointment}>
				<label>Pet Name</label>
				<input
					data-testid='pet'
					type='text'
					name='pet'
					className='u-full-width'
					placeholder='Pet Name'
					onChange={handleChange}
					value={pet}
				/>
				<label>Owner Name</label>
				<input
					data-testid='owner'
					type='text'
					name='owner'
					className='u-full-width'
					placeholder='Owner Name'
					onChange={handleChange}
					value={owner}
				/>
				<label>Entry date</label>
				<input
					data-testid='date'
					type='date'
					name='date'
					className='u-full-width'
					onChange={handleChange}
					value={date}
				/>
				<label>Entry Time</label>
				<input
					data-testid='time'
					type='time'
					name='time'
					className='u-full-width'
					onChange={handleChange}
					value={time}
				/>
				<label>Symptoms</label>
				<textarea
					data-testid='symptoms'
					className='u-full-width'
					name='symptoms'
					onChange={handleChange}
					value={symptoms}></textarea>
				<button
					data-testid='btn-submit'
					type='submit'
					className='u-full-width button-primary'>
					Add Appointment
				</button>
			</form>
		</>
	)
}

Form.propTypes = {
	createAppointment: PropTypes.func.isRequired,
}

export default Form
