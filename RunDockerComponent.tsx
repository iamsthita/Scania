import React from 'react';
import { Button } from '@material-ui/core';
import { useApi } from '@backstage/core-plugin-api';

const RunDockerButton = () => {
  const backendApi = useApi(/*API ref here */);

  const handleRunDockerClick = async () => {
    try {
      // Example API call to your plugin's backend, which then communicates with the local 
      const response = await backendApi.get('/run-docker');
      console.log(response);
      alert('Docker image is running!');
    } catch (error) {
      console.error('Error running Docker image:', error);
      alert('Failed to run Docker image. Check console for details.');
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleRunDockerClick}>
      Run Docker Image
    </Button>
  );
};

export default RunDockerButton;
