const { sum } = require('./math');

describe("Math Test", () => {
    it("Sum Tes: Returns addition of two number.", () => {
        let result = sum(1,2);
        expect(result).toBe(3)
    })
})