import { allPass, either,anyPass, both, complement } from 'rambda'

const fn1 = (x) => typeof x === 'number'
const fn2 = x => x > 10
const fn3 = x => x +2
const rules = []

const a = complement<number>(fn3)(11)
const b = complement<number>(fn3)(11)
