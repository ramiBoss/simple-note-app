import React, { Component } from 'react';
import logo from './logo.svg';
import {setEnvVars} from './utils';
import {getEnvVars} from './config/envConfig';
import {createAxiosInstance} from './apis/httpService';
import './App.css';
import {TextField, Button} from '@material-ui/core';
setEnvVars(getEnvVars());
createAxiosInstance();

function App(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TextField
          value = "I am a TextField"
        />
      </div>
    );
}

export default App;
