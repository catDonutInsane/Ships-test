import React, { useEffect } from 'react';
import './App.css';
import {useQuery} from '@apollo/client'
import { GET_ALL } from './query/getAll';
import { useAppDispatch } from './hooks/hooks';
import { getData } from './slice/reducer';
import { dataT } from './types/types';
import { RoutesList } from './routes/Routes';
import { Header } from './components/Header/Header';


function App() {
  const dispatch = useAppDispatch()
  const {data, loading, error} = useQuery<dataT>(GET_ALL)
  useEffect(()=>{
    dispatch(getData(data?.vehicles)) 
  },[data])
  return (
    <div className="App">
      
      {loading?"Loading Data...": <div>
      <Header/>
      <RoutesList/>
        </div>}
     
    
    </div>
  );
}

export default App;
