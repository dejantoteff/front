import { getInstructions } from "./getInstructions";
import { CHOOSE_WORD } from "../constants";

test('', () => {
  expect(typeof getInstructions('')).toBe('string')  
})

test('', () => {
  expect(getInstructions(CHOOSE_WORD).length).toBeGreaterThan(0)  
})