import Button from 'remote_app/Button';

const App = () => {
  return (
    <React.Suspense fallback="Loading App...">
      <Button />
    </React.Suspense>
  )
}

export default App;