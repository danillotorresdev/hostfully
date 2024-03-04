import { Itinerary } from './Itinerary';
import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@/utils/settings/tests/utilities';

describe('Itinerary component', () => {
  const mockBooking = {
    id: '123',
    origin: 'New York',
    destination: 'Los Angeles',
    startDate: '2024-03-01',
    endDate: '2024-03-05',
    passengers: {
      adults: 2,
      children: 1,
    },
  };

  it('renders booking details correctly', () => {
  const {asFragment} =  render(<Itinerary booking={mockBooking} deleteBooking={() => {}} />);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getAllByText('Los Angeles')[0]).toBeDefined();
    expect(screen.getByText('Booking for 2 Adults and 1 Child | Feb 29, 2024 to Mar 4, 2024')).toBeDefined();
    expect(screen.getAllByText('2 Adults and 1 Child')[0]).toBeDefined();
  });

  it('displays edit modal when edit button is clicked', () => {
    render(<Itinerary booking={mockBooking} deleteBooking={() => {}} />);

    fireEvent.click(screen.getByTitle('Edit booking'));

    expect(screen.getByText('Edit Booking')).toBeDefined();
  });

  it('calls deleteBooking function when delete button is clicked', () => {
    const deleteBookingMock = vi.fn();
    render(<Itinerary booking={mockBooking} deleteBooking={deleteBookingMock} />);

    fireEvent.click(screen.getByTitle('Delete booking'));

    expect(deleteBookingMock).toHaveBeenCalledWith('123');
  });
});
