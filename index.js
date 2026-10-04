const functions = require('@google-cloud/functions-framework');

functions.http('hello', (req, res) => {
  res.json({
    message: `Hello, ${req.query.name?.charAt(0).toUpperCase() + req.query.name?.slice(1) || 'world'}, I was deployed by Github Action!`,
    revision: process.env.K_REVISION,  // set by Cloud Run
  });
});