import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configure } from '@testing-library/dom';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux/userSlice';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer : {
    users : userReducer
  }
})
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      
       <App />
    </Provider>
  </React.StrictMode>
);
/* Il diffuse le contexte globale de l'app */


