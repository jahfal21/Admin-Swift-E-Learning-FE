import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './pages/App';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact'
import Login from './pages/Login';
import SignUp from './pages/RegisterExample';
import Register from './pages/Register';
import RiwayatMateri from './pages/RiwayatMateri';
import RiwayatSoal from './pages/RiwayatSoal';
import Tugas from './pages/Tugas';
import Materi from './pages/Materi';


// Menaruh daftar routing disini
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/registertest",
    element: <SignUp />,
    errorElement: <ErrorPage />
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "/riwayat/materi",
    element: <RiwayatMateri />,
    errorElement: <ErrorPage />
  },
  {
    path: "/riwayat/soal",
    element: <RiwayatSoal />,
    errorElement: <ErrorPage />
  },
  {
    path: "/tugas",
    element: <Tugas />,
    errorElement: <ErrorPage />
  },
  {
  path: "/materi",
    element: <Materi />,
    errorElement: <ErrorPage />
  }
]);

// Memanggil object routing disini
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
