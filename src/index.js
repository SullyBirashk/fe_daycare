import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Header } from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Route, Link} from "react-router-dom";
import { About } from './About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Header/>),
  },
  {
    path: "about",
    element: (<About/>),
  }
]);

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />)