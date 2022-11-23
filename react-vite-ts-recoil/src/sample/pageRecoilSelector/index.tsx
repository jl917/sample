import { useEffect, useState } from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";
import mock from './mock.json';

// selector 사용방법.
const { results } = mock;

// family로 일괄 생성 및 처리 가능.
const mansAtom = atom<any[]>({
  key: 'mansAtom',
  default: [],
});

const womansAtom = atom<any[]>({
  key: 'womansAtom',
  default: [],
});

const userSelector = selector({
  key: 'userSelector',
  get: () => results,
  set: ({ set }, values: any) => {
    const manList: any = [];
    const womanList: any = [];

    for (const user of values) {
      user.gender === 'male' ? manList.push(user) : womanList.push(user);
    }

    set(mansAtom, manList);
    set(womansAtom, womanList);
  }
})

const PageRecoilSelector = () => {
  const setUser = useSetRecoilState(userSelector);
  const [mans, womans] = [useRecoilValue(mansAtom), useRecoilValue(womansAtom)];

  console.log(mans);
  console.log(womans);

  const onSet = () => {
    setUser(results);
  }
  return (
    <>
      <button onClick={onSet}>사용자 셋팅</button>
    </>
  )
}

export default PageRecoilSelector;