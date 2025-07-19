import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'
import { ModuleRegistry, } from 'ag-grid-community';
import { AllCommunityModule } from 'ag-grid-community';
import { UserPage } from './pages/user';

ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/user/:id" element={<UserPage />} />
    </Routes>
  )
}

export default App
