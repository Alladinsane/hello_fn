const functions = require('@google-cloud/functions-framework');

functions.http('hello', (req, res) => {
  res.json({
    message: `Hello, ${req.query.name || 'world'}, I was deployed by Github Action!`,
    revision: process.env.K_REVISION,  // set by Cloud Run
  });
});