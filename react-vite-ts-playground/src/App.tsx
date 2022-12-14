interface Name {
  first: string;
  last: string;
}
interface Age {
  age: number
}

type Person =
  | { type: 'name', name: Name }
  | { type: 'age', age: Age }

const p1: Person = { type: 'name', name: { first: 'dao', last: 'lang' } }
const p2: Person = { type: 'age', age: { age: 12 } }

type Data =
  | { type: 'text'; content: string }
  | { type: 'img'; src: string };

const d1: Data = { type: 'text', content: '213' }
const d2: Data = { type: 'img', src: '123' }




const App = () => <div>App</div>;

export default App;
