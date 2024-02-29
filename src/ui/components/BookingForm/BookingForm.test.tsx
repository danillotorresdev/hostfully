import { render } from "@testing-library/react";
import { test } from 'vitest'

import {BookingForm} from './BookingForm';

test('Form submission', () => {
    render(<BookingForm />);
});