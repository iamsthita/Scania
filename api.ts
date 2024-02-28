/* src/api.ts */

import { createApiRef } from '@backstage/core-plugin-api';

export const githubActionsApiRef = createApiRef<GitHubActionsApi>({
  id: 'plugin.githubactions.service',
});

export interface GitHubActionsApi {
  triggerWorkflow(options: { owner: 'iamsthita', repo: 'scania', workflow_id: 'main.yml', ref: 'main' }): Promise<void>;
}
