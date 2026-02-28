import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';

// Styles
import './styles/global.css';
import "./styles/home.css";
import "./styles/design.css";
import "./styles/result.css";
import "./styles/about.css";
import "./styles/loader.css";
import "./styles/navbar.css";

// Pages
import { Home } from './pages/Home';
import { DesignInput } from './pages/DesignInput';
import { Result } from './pages/Result';
import { About } from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "design", element: <DesignInput /> },
      { path: "result/:id", element: <Result /> },
      { path: "about", element: <About /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
