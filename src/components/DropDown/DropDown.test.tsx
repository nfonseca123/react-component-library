import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import DropDown from "./DropDown";

describe("DropDown", () => {
    test('checks if component is visible', () => {
        render(<DropDown dropDownName="Visible DropDown" optionOneText="Data 1" optionTwoText="Data 2" optionThreeText="Data 3" bgColor="green" hoverColor="darkgreen" />);

        const dropDownElement = screen.getByText('Visible DropDown');

        expect(dropDownElement).toBeVisible();
    });

    test('Checks if background color changes when the component is in the disabled state', () => {
        render(<DropDown dropDownName="Disabled Table" optionOneText="Data 1" optionTwoText="Data 2" optionThreeText="Data 3" bgColor="green" hoverColor="darkgreen" disabled={true} />);
      
        const dropDownElement = screen.getByText('Disabled Table');
      
        const style = getComputedStyle(dropDownElement);
        
        expect(style.backgroundColor).toBe('gray');
      });
});
