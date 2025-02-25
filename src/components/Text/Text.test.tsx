import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";

import Text from "./Text";

describe("Text", () => {
    test('checks if component is visible', () => {
        render(<Text label="Visible Text" bgColor="green" hoverColor="darkgreen" />);

        const textElement = screen.getByText(/Visible Text/i);
        expect(textElement).toBeVisible();
    });

    test('Checks if background color changes when the component is in the disabled state', () => {
        render(<Text label="Disabled Text" bgColor="green" hoverColor="darkgreen" disabled={true} />);
      
        const TextElement = screen.getByText(/Disabled Text/i);
      
        const style = getComputedStyle(TextElement);
        
        expect(style.backgroundColor).toBe('gray');
      });
});
