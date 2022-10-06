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
    getProjects();
  }, []);

  const getProjects = ()  => {
    axios.get(`${SERVER_URL}/projects`)
      .then((response) => {
        console.log('CLIENT GOT: ', response.data)
        setProjects(response.data);
      })
      .catch((error) => (console.log('getProjects error: ', error)));
  };

  const viewProject = (projId) => {
    console.log('')
    console.log('<VIEW>');
    console.log('VIEW HANDLER: ', projId);
    projId ?
      setCurrentProject(projects[projId]) :
      setCurrentProject({});
  };

  const updateProject = (data) => {
    axios.post(`${SERVER_URL}/project`, data)
      .then((response) => {
        console.log('update project', response.data)
        getProjects();
      })
      .catch((error) => (console.log(error)));
  };

  const createProject = () => {
    const data = {'name': `project-${projects.length}`};
    console.log('Creating new project!', data, projects.length, projects);
    axios.post(`${SERVER_URL}/create`, data)
      .then((response) => {
        console.log('create project', response.data);
        getProjects();
      })
      .catch((error) => ('Create Error', console.log(error)));
  };

  return (
    <>
      <Navbar createHandler={createProject} />
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
    </>
  );
};

export default App;
