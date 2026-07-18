import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Register from '../../pages/Register';
import api from '../../services/api';

jest.mock('../../services/api');

describe('Register Component', () => {
    test('renders without crashing', () => {
        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );
        expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
    });

    test('shows error when passwords do not match', async () => {
        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'pass1' } });
        fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: 'pass2' } });
        fireEvent.click(screen.getByRole('button', { name: /Register as/i }));
        await waitFor(() => {
            expect(screen.getByText(/Passwords don't match/i)).toBeInTheDocument();
        });
    });

    test('submits form successfully', async () => {
        api.post.mockResolvedValue({ status: 201, data: { message: 'Registered' } });
        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );
        fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'Test User' } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/Phone/i), { target: { value: '1234567890' } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'pass123' } });
        fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: 'pass123' } });
        // Assuming donor type by default
        fireEvent.change(screen.getByLabelText(/Aadhar Number/i), { target: { value: '111122223333' } });
        fireEvent.click(screen.getByRole('button', { name: /Register as/i }));
        await waitFor(() => {
            expect(screen.getByText(/Registered/i)).toBeInTheDocument();
        });
    });
});
