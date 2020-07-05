import React from 'react';
import Navbar from './components/Navbar.js';
import FormWrapper from './components/FormWrapper.js';
import { ContextProvider } from './context/MyContext.js';

import './App.css';

function App() {
  return (
    <ContextProvider>
      <div className="App">
          <Navbar />
          <FormWrapper />
      </div>
    </ContextProvider>
  );
}

export default App;
