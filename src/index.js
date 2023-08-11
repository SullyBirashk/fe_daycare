import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Header } from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

const Landing = () => {

  return (
    <Header/>
  )}

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<Landing/>)