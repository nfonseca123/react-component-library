import React from 'react';
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";

import Table from "./Table";

describe("Table", () => {
    test('checks if component is visible', () => {
        render(<Table headerName="Visible Table" tableData="Data Cell 1" footerName="Footer" bgColor="green" hoverColor="darkgreen" />);

        const tableElement = screen.getByRole('table');
        expect(tableElement).toBeVisible();
    });

    test('Checks if background color changes when the component is in the disabled state', () => {
        render(<Table headerName="Disabled Table" tableData="Data Cell 1" footerName="footer" bgColor="green" hoverColor="darkgreen" disabled={true} />);
      
        const tableElement = screen.getByRole('table');
      
        const style = getComputedStyle(tableElement);
        
        expect(style.backgroundColor).toBe('gray');
      });
});
