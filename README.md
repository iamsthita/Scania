# Scania Test

## 1. Containerize an Application Using Docker:
The application has been written in Python with Flask framework. The Dockerfile is written as a multi-stage build to reduce the image size and enhance security.

<img width="703" alt="image" src="https://github.com/iamsthita/scania/assets/132139960/c12d23f4-9999-4715-9c06-09e5cf8b0674">


## 2. Set Up Backstage:
   
<img width="797" alt="image" src="https://github.com/iamsthita/scania/assets/132139960/1be39b2b-497e-448c-ad0d-b5e872b87f45">


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

<img width="582" alt="image" src="https://github.com/iamsthita/scania/assets/132139960/93a362bc-e0c7-43a3-860d-5ac617870b03">
