import express from "express";
const app = express();

const responseTimeLogger = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} - ${duration}ms`);
  });

  next();
};

app.use(responseTimeLogger);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000);
