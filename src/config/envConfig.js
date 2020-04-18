const { hostname } = window.location;

function getEnvVars(){
  if(hostname === "localhost"){
    return buildLocalEnvVars();
  }
}

function buildLocalEnvVars(){
  return{
    ENV: 'local'
  };
}

export {
  getEnvVars,
}
