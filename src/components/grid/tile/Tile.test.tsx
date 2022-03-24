import { render } from '@testing-library/react';
import { Tile } from './Tile';

describe("check row element", () => {
    test('row has className "Row"', () => {
        const { container } = render(<Tile letter={''} />);
        expect(container.firstChild).toHaveClass("Tile");
    });

    test('each row contains 5 tiles', () => {
        const { container } = render(<Tile letter={'A'} />);
        expect(container.firstChild).toHaveTextContent("A");
    });
});
