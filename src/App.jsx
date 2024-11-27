import { Outlet } from 'react-router-dom';
import { MagicItemsProvider } from './contexts/MagicItemsContext';

export default function App() {

  return (
    <>
      <MagicItemsProvider>
        <Outlet />
      </MagicItemsProvider>
    </>
  );
}