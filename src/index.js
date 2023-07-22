import React from "react";
import * as ReactDOMClient from 'react-dom/client';


const Landing = () => {

  return (
    <h1>Test</h1>
  )}

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(<Landing/>)