import React, {useState, useEffect} from 'react';
import DashFolderViewer from './comps/DashFolderViewer.jsx';
import { CgFolder } from 'react-icons/cg';
import './Dashboard.css';

const Dashboard = ({projects, viewHandler}) => {
  // console.log(projects)
  const [projectsList, setProjectsList] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});

  useEffect(() => {
    const projectNames = [];
    projects.map((project, i) => {
      projectNames.push(project.name);
    });
    setProjectsList(projectNames);
  }, [projects]);

  const selectProject = (event) => {
    const projId = event.target.getAttribute('data-proj-id');

    if (projId) {
      console.log(projId)
      setSelectedProject(projects[projId]);
      viewHandler(projId);
    }
  };

  return (
    <div className='Dashboard'>
      <div className='dash-header'>
          Project Menu Options: NEW DELETE
      </div>
      <div className='dash-content'>
        {
          projectsList.map((name, i) => {
            return (
              <div key={i} className='dash-project-folder' onClick={selectProject}>
                <CgFolder className='onclick' size={80} data-proj-id={i}/>
                {name}
              </div>
              );
          })
        }
      </div>
    </div>
  );
};

export default Dashboard;
