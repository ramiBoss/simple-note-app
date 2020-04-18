import React, { Component } from 'react';
import logo from './logo.svg';
import {setEnvVars} from './utils';
import {getEnvVars} from './config/envConfig';
import {createAxiosInstance} from './apis/httpService';
import './App.css';
import {TextField, Button} from '@material-ui/core';
import NotesApp from './components';


setEnvVars(getEnvVars());
createAxiosInstance();

function App(){
    return (
      <div className="App">
        <NotesApp/>
      </div>
    );
}

export default App;
