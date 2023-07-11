import { checkstatus } from './WordStatus';

describe("check word status of solution word: 'ADMIN'", () => {
    test('check status of GURKE', () => {
        const status = checkstatus("GURKE", "ADMIN");
        expect(status.length).toEqual(5);
        expect(status).toContain("wrong");
        expect(status).toEqual(["wrong", "wrong", "wrong", "wrong", "wrong"]);
    });

    test('check status of MATHE', () => {
        const status = checkstatus("MATHE", "ADMIN");
        expect(status.length).toEqual(5);
        expect(status).toContain("semi" && "wrong");
        expect(status).toEqual(["semi", "semi", "wrong", "wrong", "wrong"]);
    });

    test('check status of ADLER', () => {
        const status = checkstatus("ADLER", "ADMIN");
        expect(status.length).toEqual(5);
        expect(status).toContain("correct" && "wrong");
        expect(status).toEqual(["correct", "correct", "wrong", "wrong", "wrong"]);
    });

    test('check status of ADMIN', () => {
        const status = checkstatus("ADMIN", "ADMIN");
        expect(status.length).toEqual(5);
        expect(status).toContain("correct");
        expect(status).toEqual(["correct", "correct", "correct", "correct", "correct"]);
    });

    
    test('check status of random word DDMMI', () => {
        const status = checkstatus("DDMMI", "ADMIN");
        expect(status.length).toEqual(5);
        expect(status).toContain("wrong" && "correct" && "semi");
        expect(status).toEqual(["wrong", "correct", "correct", "wrong", "semi"]);
    });

    test('check status of random word NNMEE', () => {
        const status = checkstatus("NNMEE", "ADMIN");
        expect(status.length).toEqual(5);
        expect(status).toContain("wrong" && "correct" && "semi");
        expect(status).toEqual(["semi", "wrong", "correct", "wrong", "wrong"]);
    });
})


describe("check word status of solution word: 'ALLEE'", () => {
    test('check status of REGAL', () => {
        const status = checkstatus("REGAL", "ALLEE");
        expect(status.length).toEqual(5);
        expect(status).toContain("wrong" && "semi");
        expect(status).toEqual(["wrong", "semi", "wrong", "semi", "semi"]);
    });

    test('check status of ETAGE', () => {
        const status = checkstatus("ETAGE", "ALLEE");
        expect(status.length).toEqual(5);
        expect(status).toContain("semi" && "wrong" && "correct");
        expect(status).toEqual(["semi", "wrong", "semi", "wrong", "correct"]);
    });

    test('check status of ALTAR', () => {
        const status = checkstatus("ALTAR", "ALLEE");
        expect(status.length).toEqual(5);
        expect(status).toContain("correct" && "wrong");
        expect(status).toEqual(["correct", "correct", "wrong", "wrong", "wrong"]);
    });

    test('check status of ENTEN', () => {
        const status = checkstatus("ENTEN", "ALLEE");
        expect(status.length).toEqual(5);
        expect(status).toContain("correct" && "semi" && "wrong");
        expect(status).toEqual(["semi", "wrong", "wrong", "correct", "wrong"]);
    });

    
    test('check status of random word ELMOO', () => {
        const status = checkstatus("ELMLL", "ALLEE");
        expect(status.length).toEqual(5);
        expect(status).toContain("wrong" && "correct" && "semi");
        expect(status).toEqual(["semi", "correct", "wrong", "semi", "semi"]);
    });
})