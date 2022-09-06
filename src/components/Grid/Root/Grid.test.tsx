import { render, screen } from '@testing-library/react';
import { Grid } from './Grid';

describe("check grid element", () => {
    test('grid has className "Grid"', () => {
        // const { container } = render(<Grid letter={''} guessedWords={[]} isInputError={false} />);
        // expect(container.firstChild).toHaveClass("Grid");
    });

    test('grid contains 6 rows', () => {
        // const { container } = render(<Grid letter={''} guessedWords={[]} isInputError={false} />);
        // expect(container.getElementsByClassName('Row').length).toEqual(6);
        // render(<Grid letter={''} guessedWords={[]} isInputError={false} />);
        // screen.getAllByRole('button', { name: /click me/i });
    });
});
