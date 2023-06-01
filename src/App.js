import React, { useState, useEffect, useContext  } from "react";
import axios from "axios";
import CardComponent from "./components/CardComponent";
import './App.css'
import PageComponent from "./components/PageComponent";
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    axios.get(`https://api.github.com/users/john-smilga/followers?per_page=5&page=${currentPage}`)
    .then((response) => {
      setData(response.data);
    });
}, [currentPage]);


const changePage = () => {
  setCurrentPage(currentPage + 1)
};

  return(
    <div className="container">
      <h1>Pagination</h1>
      <PageComponent data={data} changePage={changePage}/>
      <CardComponent data={data}/>
    </div>
    
  )
}


export default App;
