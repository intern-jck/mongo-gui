import React, {useState, useEffect} from 'react';
// import './DashFolderViewer.css';

import { CgFolder } from 'react-icons/cg';

const DashFolderViewer = ({list, viewHandler}) => {
  // console.log(list)
  const [selectedProject, setSelectedProject] = useState({});

  useEffect(() => {
  }, []);

  return (
    <div className='DashFolderViewer'>
      {
        list.map((name, i) => {
          return (
            <div key={i} className='dash-project-folder' onClick={viewHandler}>
              <CgFolder size={80} data-proj-id={i}/>
              {name}
            </div>
            );
        })
      }
    </div>
  );
};

export default DashFolderViewer;
