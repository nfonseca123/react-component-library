import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import Card from "./Card";

describe("DropDown", () => {
    test('checks if component is visible', () => {
        render(<Card cardTitle="Visible Card" cardText="Data 1" cardFooter="Data 2" bgColor="green" hoverColor="darkgreen" />);

        const cardElement = screen.getByText(/Visible Card/i);

        expect(cardElement).toBeVisible();
    });

    test('Checks if background color changes when the component is in the disabled state', () => {
        render(<Card cardTitle="Disabled Card" cardText="Data 1" cardFooter="Data 2" bgColor="green" hoverColor="darkgreen" disabled={true} />);
      
        const cardElement = screen.getByTestId('Card');
      
        const style = getComputedStyle(cardElement);
        
        expect(style.backgroundColor).toBe('gray');
      });
});
