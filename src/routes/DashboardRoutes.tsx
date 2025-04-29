import { Routes, Route } from "react-router-dom";
import { Provider } from "@/components/ui/provider.tsx";

import { Dashboard } from "@/pages/Dashboard";
import { SurgeryScreen } from "@/pages/SurgeryScreen.tsx";

export function DashboardRoutes(){
  return(
    <Provider>
      <Routes>
        <Route path="/" index element={<Dashboard />} />
        <Route path="/surgery-report" element={<SurgeryScreen />} />
      </Routes>
    </Provider>
  )
}
