import { checkstatus } from './wordStatus';

describe("check word status of solution word: 'ADMIN'", () => {
    test('check status of GURKE', () => {
        const status = checkstatus("GURKE", "ADMIN");
        expect(status.length).toEqual(5)
        expect(status).toContain("wrong");
        expect(status).toEqual(["wrong", "wrong", "wrong", "wrong", "wrong"]);
    });

    test('check status of MATHE', () => {
        const status = checkstatus("MATHE", "ADMIN");
        expect(status.length).toEqual(5)
        expect(status).toContain("semi" && "wrong");
        expect(status).toEqual(["semi", "semi", "wrong", "wrong", "wrong"]);
    });

    test('check status of ADLER', () => {
        const status = checkstatus("ADLER", "ADMIN");
        expect(status.length).toEqual(5)
        expect(status).toContain("correct" && "wrong");
        expect(status).toEqual(["correct", "correct", "wrong", "wrong", "wrong"]);
    });

    test('check status of ADMIN', () => {
        const status = checkstatus("ADMIN", "ADMIN");
        expect(status.length).toEqual(5)
        expect(status).toContain("correct");
        expect(status).toEqual(["correct", "correct", "correct", "correct", "correct"]);
    });
})
