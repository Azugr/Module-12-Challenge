import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.css';
import AboutMe from './pages/AboutMe.jsx';
import Contact from './pages/Contact.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
import App from './App.jsx';
import Error from "./pages/Error.jsx";

// Define the routes and components
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />, // App includes NavBar and Footer
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <AboutMe />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/portfolio',
          element: <Portfolio />,
        },
        {
          path: '/resume',
          element: <Resume />,
        },
      ],
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
