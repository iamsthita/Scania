# Scania Test

## 1. Containerize an Application Using Docker:
The application has been written in Python with Flask framework. The Dockerfile is written as a multi-stage build to reduce the image size and enhance security.

![Dockerfile](https://github.com/iamsthita/scania/assets/132139960/7eb748c4-10a1-4d80-ab3b-c52e2bce5ad1)

## 2. Set Up Backstage:
   
![Backstage Setup](https://github.com/iamsthita/scania/assets/132139960/ab71d724-4ded-4f7b-9c3a-70ffe9a8bb5f)

## 3. Integrate Docker with Backstage:

- Created backend API to trigger GitHub actions (in Node.js)
  ```
  yarn add @octokit/rest
  -triggerWorkflow.js
  ```
- Creating a Deploy Component: This component will include a form where users can specify the necessary details for triggering a GitHub Actions workflow (e.g., repository name, workflow ID).
  - `DeployComponent.ts`

- Created a Custom API Ref: Defined a custom API in the Scania plugin to abstract the communication with the backend.
  - `api.ts`

- Added an API in the backend to list the deployed images:
  - `router.ts`

- The component in Backstage: 
  - `DockerHubImagesComponent.tsx`

- Component to run the image locally:
  - `RunDockerComponent.tsx`

- Backend part:
  - `server.js`

## 4. Create a “CI/CD Pipeline”:
   Used GitHub Actions to build and push it to Docker Hub.
  
## Deploy the Container: 
Used Azure DevOps pipeline to build and push it to Azure Container Registry and deploy it to Kubernetes cluster.
Manifest files and Azure DevOps pipeline script are added.
- `DeploytoAzureK8s.yml`
- `deployment.yml`
- `service.yml`

![Azure DevOps Pipeline](https://github.com/iamsthita/scania/assets/132139960/7b5cf3bc-b48b-4884-ba5a-6100905627e7)
