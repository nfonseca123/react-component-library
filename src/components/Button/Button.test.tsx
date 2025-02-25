import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
    test('checks if component is visible', () => {
        render(<Button label="Visible Button" bgColor="green" hoverColor="darkgreen" />);

        const buttonElement = screen.getByText(/Visible Button/i);
        expect(buttonElement).toBeVisible();
    });

    test('Checks if background color changes when the component is in the disabled state', () => {
        render(<Button label="Disabled Button" bgColor="green" hoverColor="darkgreen" disabled={true} />);
      
        const buttonElement = screen.getByText(/Disabled Button/i);
      
        const style = getComputedStyle(buttonElement);
        
        expect(style.backgroundColor).toBe('gray');
      });
});
