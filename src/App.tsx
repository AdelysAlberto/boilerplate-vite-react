import StateQuery from './infra/stateQuery';
import RouteApp from './routes/index';
import './styles/globals.scss';

function App() {

  return (
    <StateQuery>
      <RouteApp />
    </StateQuery>
  )
}

export default App
