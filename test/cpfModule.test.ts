import { validate } from "../src/cpfModule"

test("Should be able to validate a valid vat number", () => {
    const isValid = validate("886.634.854-68");
    expect(isValid).toBe(true);
})

test("Should be able to validate a invalid vat number", () => {
    const isValid = validate("111.111.111-11");
    expect(isValid).toBe(false);
})

test("Should be able to validate a vat number finalized with zero", () => {
    const isValid = validate("473.087.668-70");
    expect(isValid).toBe(true);
})

test("Should be able to validate a vat number with smallest invalid size", () => {
    const isValid = validate("47308770");
    expect(isValid).toBe(false);
})

test("Should be able to validate a vat number with biggest invalid size", () => {
    const isValid = validate("473.087.668-70111");
    expect(isValid).toBe(false);
})