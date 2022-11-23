import { useEffect, useState } from "react";
import { atomFamily, useRecoilState, useRecoilValue } from "recoil";
import mock from './mock.json';

const { results } = mock;
const ids = results.map(e => e.id.value);

// family로 일괄 생성 및 처리 가능.
const itemAtom = atomFamily({
  key: 'itemAtom',
  default: null,
})

const Item = ({ id, children, userInfo }: any) => {
  const [item, setItem] = useRecoilState(itemAtom(id));
  useEffect(() => {
    setItem(userInfo);
  }, [id])
  return item ? <li>{`${userInfo.name.title} ${userInfo.name.first} ${userInfo.name.last}`}</li> : null;
}

const OtherComponentChild = ({ id }: any) => {
  const item = useRecoilValue<any>(itemAtom(id));
  
  return id ? <div>{`${item.name.title} ${item.name.first} ${item.name.last}`}</div> : <div>no user</div>
}

const OtherComponent = () => {
  const [id, setId] = useState<any>(null);

  const onReffresh = () => {
    let index = Math.floor((Math.random() * ids.length));
    setId(ids[index]);
  }
  return (
    <>
      <button onClick={onReffresh}>아무 정보 가져오기</button>
      <OtherComponentChild id={id} />
    </>
  )
}

const PageRecoilFamily = () => {
  const [count, setCount] = useState(0);
  const onReffresh = () => {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={onReffresh}>새로고침</button>
      <ul>
        {results.map(e => <Item key={e.id.value} id={e.id.value} userInfo={e} />)}
      </ul>
      <OtherComponent />
    </>
  )
}

export default PageRecoilFamily;