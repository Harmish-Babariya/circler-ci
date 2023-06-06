const { sum, prod } = require('./math');

describe("Math Test", () => {
    it("Sum Tes: Returns addition of two number.", () => {
        let result = sum(1,2);
        expect(result).toBe(3)
    });

    it("Product Tes: Returns multiplicaion of two number.", () => {
        let result = prod(1,2);
        expect(result).toBe(2)
    });
})