import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('/todos').then((res: any) => setList(res.data));
  }, [])

  useEffect(() => {
    axios.get('/');
  }, [])
  return (
    <ul>
      {list.map(e => <li key={e}>{e}</li>)}
    </ul>
  )
}

export default App;
