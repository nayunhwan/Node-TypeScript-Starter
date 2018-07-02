import Express from "express";
var app = Express();

app.get("/", function(req: Express.Request, res: Express.Response) {
  res.send("Hello World!");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
