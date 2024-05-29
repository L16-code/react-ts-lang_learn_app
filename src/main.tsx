import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline, createTheme } from '@mui/material'
import { Provider } from 'react-redux'
// import store  from './redux/store.ts'
// import  store  from './redux/store.ts'
import {persistor,store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
// import './index.css'
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
  },
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

        <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'; // Adjust the import path as needed
// import { ThemeProvider } from '@emotion/react';
// import { CssBaseline, createTheme } from '@mui/material';
// import { Provider } from 'react-redux';
// import store from './redux/store'; // Adjust the import path as needed

// // Create your theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#556cd6',
//     },
//     secondary: {
//       main: '#19857b',
//     },
//   },
// });

// // Render the app
// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// import React from 'react';
// import ReactDOM from 'react-dom'; // Correct import
// import App from './App'; // Adjust the import path as needed
// import { ThemeProvider } from '@emotion/react';
// import { CssBaseline, createTheme } from '@mui/material';
// import { Provider } from 'react-redux';
// import store, { persistor } from './redux/store'; // Adjust the import path as needed
// import { PersistGate } from 'redux-persist/integration/react';

// // Create your theme
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#556cd6',
//     },
//     secondary: {
//       main: '#19857b',
//     },
//   },
// });

// // Render the app
// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <App />
//         </PersistGate>
//       </Provider>
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
