import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";

import RadioButton from "./RadioButton";

describe("RadioButton", () => {
    test('checks if component is visible', () => {
        render(<RadioButton radioButtonName="Visible RadioButton" firstQuestion="yes" secondQuestion="no" bgColor="green" hoverColor="darkgreen" />);

        const radioButtonElement = screen.getByTestId('radio-button');
        expect(radioButtonElement).toBeVisible();
    });

    test('Checks if background color changes when the component is in the disabled state', () => {
        render(<RadioButton radioButtonName="Disabled RadioButton" firstQuestion="yes" secondQuestion="no" bgColor="green" hoverColor="darkgreen" disabled={true} />);
      
        const radioButtonElement = screen.getByTestId('radio-button');
      
        const style = getComputedStyle(radioButtonElement);
        
        expect(style.backgroundColor).toBe('gray');
      });
});
