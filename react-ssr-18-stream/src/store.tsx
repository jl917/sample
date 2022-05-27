import { atom } from "recoil";
export const COUNT_DEFAULT_VALUE = 5;
export const atomCount = atom({
  key: 'count',
  default: COUNT_DEFAULT_VALUE,
})