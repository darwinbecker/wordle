import { render } from '@testing-library/react';
import { Grid } from './Grid';

describe("check grid element", () => {
    test('grid has className "Grid"', () => {
        const { container } = render(<Grid letter={''} guessedWords={[]} />);
        expect(container.firstChild).toHaveClass("Grid");
    });

    test('grid contains 6 rows', () => {
        const { container } = render(<Grid letter={''} guessedWords={[]} />);
        expect(container.getElementsByClassName('Row').length).toEqual(6);
    });
});
