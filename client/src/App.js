import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import NoteCreate from './components/NoteCreate';
import NoteList from './components/NoteList';
import UserCreate from './components/UserCreate';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Route path="/" exact component={NoteList} />
        <Route path="/create" component={NoteCreate} />
        <Route path="/edit/:id" component={NoteCreate} />
        <Route path="/user" component={UserCreate} />
      </div>
    </Router>
  );
}

export default App;
