// @ts-nocheck
const FIRST_DIGIT_FACTOR = 10;
const SECOND_DIGIT_FACTOR = 11;

export function validate (cpf) {
	if (!cpf) return false
    const parseCpf = removeNonDigits(cpf);
    if (!isValidLength(parseCpf)) return false;
    if (allDigitsTheSame(parseCpf)) return false
    const firstDigit = calculateDigit(parseCpf, FIRST_DIGIT_FACTOR);
    const secondDigit = calculateDigit(parseCpf, SECOND_DIGIT_FACTOR)
    let checkDigit = extractCheckDigit(parseCpf);  
    const calculateCheckDigit = `${firstDigit}${secondDigit}`;  
    return checkDigit == calculateCheckDigit;
}
function removeNonDigits(cpf: string) {
    return cpf.replace(/\D+/g,'');
}

function isValidLength (cpf: string) {
    return cpf.length === 11
}

function allDigitsTheSame(cpf: string) {
    const [firstDigit] = cpf;
    return [...cpf].every(digit => digit === firstDigit);
}

function calculateDigit (cpf, factor) {
    let total = 0;
    for (const digit of cpf) {
        if (factor > 1) total += digit * factor--;
    }
    const rest = total % 11;
    return (rest < 2) ? 0 : 11 - rest;
}

function extractCheckDigit(cpf: string) {
    return cpf.slice(9);
}

