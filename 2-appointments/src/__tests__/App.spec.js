import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

it('<App /> - Render', () => {
	render(<App />)

	expect(screen.getByText('Appointments manager')).toBeInTheDocument()
	expect(screen.getByTestId('app-name').textContent).toBe(
		'Appointments manager'
	)
	expect(screen.getByTestId('app-name').tagName).toBe('H1')

	expect(screen.getByText('Create Appointment')).toBeInTheDocument()
	expect(screen.getByText('No Appointments')).toBeInTheDocument()
})

it('<App /> - Creating appointment and dynamic title', () => {
	render(<App />)

	//1st appointment
	userEvent.type(screen.getByTestId('pet'), 'my pet')
	userEvent.type(screen.getByTestId('owner'), 'rpxic')
	userEvent.type(screen.getByTestId('date'), '2019-01-10')
	userEvent.type(screen.getByTestId('time'), '12:00')
	userEvent.type(screen.getByTestId('symptoms'), 'No drink')

	//click button
	const button = screen.getByTestId('btn-submit')
	userEvent.click(button)

	//2nd appointment
	// userEvent.type(screen.getByTestId('pet'), 'my pet2')
	// userEvent.type(screen.getByTestId('owner'), 'rpxic')
	// userEvent.type(screen.getByTestId('date'), '2019-01-10')
	// userEvent.type(screen.getByTestId('time'), '12:00')
	// userEvent.type(screen.getByTestId('symptoms'), 'No drink')

	// userEvent.click(button)

	//the alert should not appear
	const alert = screen.queryByTestId('alert')
	expect(alert).not.toBeInTheDocument()

	//dynamic title
	expect(screen.getByTestId('dynamic-title').textContent).toBe(
		'Manage Your Appointments'
	)
	expect(screen.getByTestId('dynamic-title').textContent).not.toBe(
		'No Appointments'
	)
})

it('<App /> - Appointments', async () => {
	render(<App />)

	const appointments = await screen.findAllByTestId('appointment')

	expect(appointments).toMatchSnapshot()

	expect(screen.getByTestId('delete-btn')).toBeInTheDocument()
	expect(screen.getByTestId('delete-btn').tagName).toBe('BUTTON')

	expect(screen.getByText('my pet')).toBeInTheDocument()
})

it('<App /> - Delete appointment', async () => {
	render(<App />)

	const deleteBtn = screen.getByTestId('delete-btn')
	expect(deleteBtn).toBeInTheDocument()
	expect(deleteBtn.tagName).toBe('BUTTON')

	userEvent.click(deleteBtn)
	expect(deleteBtn).not.toBeInTheDocument()
	expect(screen.queryByText('my pet')).not.toBeInTheDocument()
	expect(screen.queryByTestId('appointment')).not.toBeInTheDocument()
})
