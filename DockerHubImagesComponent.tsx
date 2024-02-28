/* src/components/DockerHubImagesComponent.tsx */
import React, { useEffect, useState } from 'react';
import { useApi } from '@backstage/core-plugin-api';
import { Table, TableColumn } from '@backstage/core-components';
const DockerHubImagesComponent = () => {
const [images, setImages] = useState([]);
const backendApi = useApi(/* API ref here */);
useEffect(() => {
const fetchImages = async () => {
const response = await backendApi.get('/dockerhub/images?repository=library/node'
setImages(response);
};
fetchImages();
}, [backendApi]);
const columns: TableColumn[] = [
{ title: 'Tag', field: 'name' },
{ title: 'Last Updated', field: 'last_updated', type: 'datetime' },
// Add more fields as needed
];
return (
<Table
title="Docker Hub Images"
options={{ search: false, paging: true, pageSize: 10 }}
columns={columns}
data={images}
/>
);
};
export default DockerHubImagesComponent;
