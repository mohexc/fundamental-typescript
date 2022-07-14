import Comparator from "../Comparator";

describe('Comparator', () => {
    it('should compare with default comparator function', () => {
        const comparator = new Comparator();
        expect(comparator.compare(1, 2)).toBe(-1);
        expect(comparator.compare(2, 1)).toBe(1);
        expect(comparator.compare(1, 1)).toBe(0);

        expect(comparator.lessThan(1, 2)).toBe(true);
    })
})