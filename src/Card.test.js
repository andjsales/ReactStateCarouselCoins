import React from 'react';
import { render } from "@testing-library/react";
import Card from './Card';

// Smoke Test
test('renders Card without crashing', () => {
    render(<Card src="test.jpg" caption="Test Caption" />);
});

// Snapshot Test
test('matches snapshot', () => {
    const { asFragment } = render(<Card src="test.jpg" caption="Test Caption" />);
    expect(asFragment()).toMatchSnapshot();
});
