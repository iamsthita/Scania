import express from 'express';
import { Octokit } from "@octokit/rest";

export const router = express.Router();
const octokit = new Octokit({ auth: process.env.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 });

router.post('/trigger-workflow', async (req, res) => {
    const { owner, repo, workflow_id, ref } = req.body;
    try {
        const response = await octokit.actions.createWorkflowDispatch({
            owner: 'iamsthita1',
            repo: 'scania',
            workflow_id: 'main',
            ref: 'main',
        });
        res.json({ status: 'Workflow triggered successfully', data: response.data });
    } catch (error) {
        console.error('Failed to trigger workflow:', error);
        res.status(500).json({ message: 'Failed to trigger workflow', error: error.message });
    }
});
