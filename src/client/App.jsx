import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Form from './components/Form/Form.jsx';

import axios from 'axios';

const SERVER_URL = `http://127.0.0.1:8080`;

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState();

  const getProjects = () => {
    axios.get(`data/json/projectList.json`)
      .then((response) => {
        // console.log(response.data);
        setProjects(response.data);
      })
      .catch((error) => (console.log('getProjects error: ', error)));
  };

  useEffect(() => {
    getProjects();
  }, []);

  const viewProject = (projId) => {
    console.log(projId)
    setCurrentProject(projects[projId]);
  };

  const updateProject = (data) => {
    console.log(data)
  };

  return (
    <>
      <Navbar />
      <div className='App'>
        {
          projects ?
          <Dashboard projects={projects} viewHandler={viewProject} /> :
          null
        }
        {
          currentProject ?
          <Form project={currentProject} submitHandler={updateProject}/> :
          null
        }
      </div>
    </>
  );
};

export default App;
