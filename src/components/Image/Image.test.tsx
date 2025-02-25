import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";

import Image from "./Image";

describe("Image", () => {
    test('checks if component is visible', () => {
        render(<Image src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Cat" bgColor="green" hoverColor="darkgreen" />);

        const ImageElement = screen.getByTestId('image');
        expect(ImageElement).toBeVisible();
    });

    test('Checks if background color changes when the component is in the disabled state', () => {
        render(<Image src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="Cat" bgColor="green" hoverColor="darkgreen" disabled="true"/>);
      
        const ImageElement = screen.getByTestId('image');
      
        const style = getComputedStyle(ImageElement);
        
        expect(style.backgroundColor).toBe('gray');
      });
});
