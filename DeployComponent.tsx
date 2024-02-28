import React from 'react';
import { Button } from '@material-ui/core';
import { useApi } from '@backstage/core-plugin-api';
import { githubActionsApiRef } from '../api';

export const TriggerActionComponent = () => {
  const githubActionsApi = useApi(githubActionsApiRef);

  const handleTriggerClick = async () => {
    try {
      await githubActionsApi.triggerWorkflow({
        owner: 'iamsthita',
        repo: 'scania',
        workflow_id: 'main.yml',
        ref: 'main',
      });
      alert('Workflow triggered successfully!');
    } catch (error) {
      console.error('Error triggering workflow:', error);
      alert('Failed to trigger workflow. Check console for details.');
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleTriggerClick}>
      Trigger GitHub Action
    </Button>
  );
};
