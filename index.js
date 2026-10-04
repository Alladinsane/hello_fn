functions.http('hello', (req, res) => {
    if (req.query.fail) {
      console.log(JSON.stringify({ severity: "ERROR", message: "Forced failure" }));
      return res.status(500).json({ error: "forced failure" });
    }
    res.json({ message: `Hello, ${req.query.name || 'world'}`, revision: process.env.K_REVISION });
  });