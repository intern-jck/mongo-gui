import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Form from './components/Form/Form.jsx';
// import './App.css';

const SERVER_URL = 'http://127.0.0.1:3000';

const App = () => {
  const [documents, setDocuments] = useState();
  const [currentDocument, setCurrentDocument] = useState();

  useEffect(() => {
    getDocuments();
  }, []);

  // CREATE
  const createDocument = () => {
    axios.post(`${SERVER_URL}/document`, {})
      .then((response) => {
        console.log('created doc: ', response.data);
        getDocuments();
      })
      .catch((error) => (console.log('createDocument Error:', error)));
  };

  // READ
  const getDocuments = ()  => {
    axios.get(`${SERVER_URL}/documents`)
      .then((response) => {
        console.log('all docs: ', response.data)
        if (response.data.length > 0) {
          setDocuments(response.data);
        }
      })
      .catch((error) => (console.log('getDocuments error: ', error)));
  };

  // UPDATE
  const updateDocument = (data) => {
    axios.put(`${SERVER_URL}/document`, data)
      .then((response) => {
        console.log('updated doc', response.data)
        getDocuments();
      })
      .catch((error) => (console.log('updateDocument Error:', error)));
  };

  // DELETE
  const deleteDocument = (id) => {
    axios.delete(`${SERVER_URL}/document?id=${id}`)
    .then((response) => {
      console.log('deleted doc', response.data)
      getDocuments();
      setCurrentDocument();
    })
    .catch((error) => (console.log('deleteDocument Error:', error)));
  };

  // Render the selected document data
  const viewDocument = (id) => {
    id ?
      setCurrentDocument(documents[id]) :
      setCurrentDocument({});
  };

  return (
    <>
      <Navbar createHandler={createDocument} deleteHandler={deleteDocument}/>
      {
        documents ?
        <Dashboard documents={documents} viewHandler={viewDocument} /> :
        null
      }
      {/* {
        currentDocument ?
        <Form
          document={currentDocument}
          submitHandler={updateDocument}
          deleteHandler={deleteDocument}
        /> :
        null
      } */}
    </>
  );
};

export default App;
