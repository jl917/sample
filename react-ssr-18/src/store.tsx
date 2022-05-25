import { atom } from "recoil";

export const atomCount = atom({
  key: 'count',
  default: 3,
})