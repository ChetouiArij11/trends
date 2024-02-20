import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.js';
import "bootstrap/dist/css/bootstrap.min.css"
import ModalComponent from './ModemComponent';
import AlertExercise from './AlertExercise.jsx';
import AlertExerciseDanger from './AlertExerciseDanger.jsx';
import ArticleListPage from './ArticleListPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalComponent titre="hello" contenu="arij"/>
    <AlertExercise variant="success" title="sabrine" message="3 eme dsi"/>
    <AlertExercise variant="danger" title="arij" message="2 eme master "/>
   <ArticleListPage />
      </React.StrictMode>
);
