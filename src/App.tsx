import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'
import { ModuleRegistry, } from 'ag-grid-community';
import { AllCommunityModule } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}

export default App
