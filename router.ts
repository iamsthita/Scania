import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();
router.get('/dockerhub/images', async (req, res) => {
const repository = req.query.repository; // e.g., "library/node"
const url = `https://hub.docker.com/v2/repositories/${repository}/tags`;
try {
const response = await fetch(url, {
headers: {
Authorization: `Bearer YOUR_DOCKERHUB_TOKEN`,
},
});
const data = await response.json();
res.json(data.results);
} catch (error) {
console.error('Failed to fetch Docker Hub images:', error);
res.status(500).json({ message: 'Failed to fetch Docker Hub images', error: error.message }
});