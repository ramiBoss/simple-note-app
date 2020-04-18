import {apiEndpoints} from '../config/apiConfig';

let ENV_VAR;

function setEnvVars(env){
  ENV_VAR = env;
}
function getEnvVars(){
  return ENV_VAR;
}

function getApiEndpoints(){
 const ENV = getEnvVars()["ENV"];
 const apis = apiEndpoints[ENV];
 return apis;
}

export{
  setEnvVars,
  getEnvVars,
  getApiEndpoints,
}
