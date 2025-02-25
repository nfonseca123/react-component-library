import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";

import Label from "./Label";

describe("Label", () => {
    test('checks if component is visible', () => {
        render(<Label label="Visible Label" bgColor="green" hoverColor="darkgreen" />);

        const LabelElement = screen.getByText(/Visible Label/i);
        expect(LabelElement).toBeVisible();
    });

    test('Checks if background color changes when the component is in the disabled state', () => {
        render(<Label label="Disabled Label" bgColor="green" hoverColor="darkgreen" disabled={true} />);
      
        const LabelElement = screen.getByText(/Disabled Label/i);
      
        const style = getComputedStyle(LabelElement);
        
        expect(style.backgroundColor).toBe('gray');
      });
});
