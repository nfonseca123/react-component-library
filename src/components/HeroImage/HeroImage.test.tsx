import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";

import HeroImage from "./HeroImage";

describe("HeroImage", () => {
    test('checks if component is visible', () => {
        render(<HeroImage label="Visible heroImage" backgroundImage="https://images.unsplash.com/photo-1739981062052-d47d99db0d34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" borderColor="green" bgColor="green" hoverColor="darkgreen" />);

        const heroImageElement = screen.getByText(/Visible HeroImage/i);
        expect(heroImageElement).toBeVisible();
    });

    test('Checks if background color changes when the component is in the disabled state', () => {
        render(<HeroImage label="Disabled HeroImage" backgroundImage="https://images.unsplash.com/photo-1739981062052-d47d99db0d34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" bgColor="green" hoverColor="darkgreen" disabled={true} />);
      
        const heroImageElement = screen.getByTestId("HeroImage");
      
        const style = getComputedStyle(heroImageElement);
        
        expect(style.backgroundColor).toBe('gray');
      });
});
