import { Provider } from './components/ui/provider.tsx'

import { Dashboard } from "./pages/Dashboard"
import { SugeryScreen } from './pages/SurgeryScreen.tsx'

function App() {

  return (
    <Provider>
      {/* <Dashboard /> */}
      <SugeryScreen/>
    </Provider>
  )
}

export { App } 
