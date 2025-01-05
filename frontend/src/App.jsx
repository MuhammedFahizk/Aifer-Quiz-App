import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';  // Import PersistGate
import './App.css';
import { routes } from './routes/routes';
import { store, persistor } from './Redux/store'; 

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={routes} />
      </PersistGate>
    </Provider>
  );
}

export default App;
