import React from 'react'
import { render, screen } from '@testing-library/react'
import Form from '../components/Form'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

const createAppointment = jest.fn()

it('<Form/> - Content', () => {
	render(<Form createAppointment={createAppointment} />)

	//title
	const title = screen.getByTestId('title')
	expect(title.tagName).toBe('H2')
	expect(title.textContent).toBe('Create Appointment')

	//button
	const button = screen.getByTestId('btn-submit')
	expect(button.tagName).toBe('BUTTON')
	expect(button.textContent).toBe('Add Appointment')
})

it('<Form /> - Validation', () => {
	render(<Form createAppointment={createAppointment} />)

	//click button
	const button = screen.getByTestId('btn-submit')
	userEvent.click(button)

	//alert
	const alert = screen.getByTestId('alert')
	expect(alert).toBeInTheDocument()
	expect(alert.tagName).toBe('P')
	expect(alert.textContent).toBe('All fields are required')
})

it('<Form /> - Validation', async () => {
	render(<Form createAppointment={createAppointment} />)

	userEvent.type(screen.getByTestId('pet'), 'hook')
	userEvent.type(screen.getByTestId('owner'), 'rpxic')
	userEvent.type(screen.getByTestId('date'), '2019-01-10')
	userEvent.type(screen.getByTestId('time'), '12:00')
	userEvent.type(screen.getByTestId('symptoms'), 'No drink')

	//click button
	const button = screen.getByTestId('btn-submit')
	userEvent.click(button)

	//the alert should not appear
	const alert = screen.queryByTestId('alert')
	expect(alert).not.toBeInTheDocument()

	//appointement created
	expect(createAppointment).toHaveBeenCalledTimes(1)
})
