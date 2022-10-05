import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Form from './components/Form/Form.jsx';
// import './App.css';

const SERVER_URL = 'http://127.0.0.1:3000';

const App = () => {
  const [projects, setProjects] = useState();
  const [currentProject, setCurrentProject] = useState();

  useEffect(() => {
    // uncomment for testing
    // axios.get(`data/json/projectList.json`)
    axios.get(`${SERVER_URL}/projects`)
      .then((response) => {
        console.log('CLIENT GOT: ', response.data)
        setProjects(response.data);
        setCurrentProject(response.data[0]);
      })
      .catch((error) => (console.log('getProjects error: ', error)));
  }, []);

  const viewProject = (projId) => {
    setCurrentProject(projects[projId]);
  };

  const updateProject = (data) => {
    axios.post(`${SERVER_URL}/project`, data)
      .then((response) => (console.log('update project', response.data)))
      .catch((error) => (console.log(error)));
  };

  const createProject = (data) => {
    axios.post(`${SERVER_URL}/create`, data)
      .then((response) => (console.log('create project', response.data)))
      .catch((error) => (console.log(error)));
  };

  return (
    <>
      <Navbar />
      {
        projects ?
        <Dashboard projects={projects} viewHandler={viewProject} /> :
        null
      }
      {
        currentProject ?
        <Form project={currentProject} submitHandler={updateProject} /> :
        null
      }
      {/* <div className='App'>
      </div> */}
    </>
  );
};

export default App;
