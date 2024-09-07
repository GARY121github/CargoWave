import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider , createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { Home, About, Services, RoadTransport, Team, Contact, Blog } from './pages/index.js';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/road-transport",
                element: <RoadTransport />
            },
            {
                path: "/team",
                element: <Team />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/blog",
                element: <Blog />
            }
        ]
    },
]);

export default router;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
