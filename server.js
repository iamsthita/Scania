const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const app = express();
const port = 4000; // The port local agent will listen on

app.use(bodyParser.json());

app.post('/run-docker', (req, res) => {
  const { imageName } = req.body;

  // Basic validation to prevent obvious security issues
  if (!imageName || typeof imageName !== 'string' || imageName.length === 0) {
    return res.status(400).send('Invalid image name.');
  }

  // Constructing the Docker run command
  const command = `docker run --rm ${imageName}`;

  // Execute the Docker command
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send(`Error executing Docker command: ${error.message}`);
    }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    res.send(`Docker image ${imageName} is running.`);
  });
});

app.listen(port, () => {
  console.log(`Local agent listening at http://localhost:${port}`);
});
