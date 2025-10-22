import Guide from '@/pages/Guide/Guide';
import Home from '@/pages/Home/Home';
import Pet from '@/pages/Pet/Pet';
import AppShell from '@c/app/AppShell/AppShell';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div id='app'>
      {' '}
      <AppShell>
        <Routes>
          <Route element={<Outlet />}>
            <Route index element={<Navigate to='home' replace />} />

            <Route path='home' element={<Home />} />
            <Route path='guide' element={<Guide />} />
            <Route path='pet' element={<Pet />} />
          </Route>
        </Routes>
      </AppShell>
    </div>
  );
}

export default App;
