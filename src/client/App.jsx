import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form/Form.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
// import {WindowProvider} from './hooks/WindowContext/WindowContext.js';
export default function App() {
  const [projects, setProjects] = useState([]);

  return (
    <div className='App'>
      <Navbar projects={projects} />
      {/* <Form /> */}
    </div>
  );
};
