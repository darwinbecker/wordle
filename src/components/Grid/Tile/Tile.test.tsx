import { render } from '@testing-library/react';
import { Tile } from './Tile';

describe("check tile element", () => {
    test('tile has className "Tile"', () => {
        const { container } = render(<Tile letter={''} isInputError={false} />);
        expect(container.firstChild).toHaveClass("Tile");
    });

    test('tile contains letter "A" after input', () => {
        const { container } = render(<Tile letter={'A'} isInputError={false} />);
        expect(container.firstChild).toHaveTextContent("A");
    });
});
