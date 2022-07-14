export default class Comparator {
    compare: any
    constructor(compareFunction?: () => any) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }

    static defaultCompareFunction(a: any, b: any): number {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    }

    equal(a: any, b: any): boolean {
        return this.compare(a, b) === 0;
    }

    lessThan(a: any, b: any): boolean {
        return this.compare(a, b) < 0;
    }

    greaterThan(a: any, b: any): boolean {
        return this.compare(a, b) > 0;
    }

    lessThanOrEqual(a: any, b: any): boolean {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    greaterThanOrEqual(a: any, b: any): boolean {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    reverse(): void {
        const compareOriginal = this.compare;
        this.compare = (a: any, b: any) => compareOriginal(b, a);
    }

}