import { screen, render } from '@testing-library/react';
import { Row } from './Row';

describe("check row element", () => {
    test('row has className "Row"', () => {
        const { container } = render(<Row letter={''} isInputError={false} />);
        expect(container.firstChild).toHaveClass("Row");
    });

    test('each row contains 5 tiles', () => {
        const { container } = render(<Row letter={''} isInputError={false} />);
        expect(container.getElementsByClassName('Tile').length).toEqual(5);
    });

    // test('each row contains 5 tiles', () => {
    //     // const word = ["A", "D", "M", "I", "N"];
    //     const word = "ADMIN".split("");
    //     const { container } = render(<Row letter={'ADMIN'} />);
        
    //     // const characterList = Array.from(container.getElementsByClassName('Tile'));
    //     // expect(characterList).toEqual(word);
    //     // .toHaveTextContent(/ADMIN/);

    //     // expect(screen.getByRole("Tile")).toHaveTextContent(/ADMIN/);
    //     // expect(container.getElementsByClassName('Tile').length).toEqual(5);
    // });
});
