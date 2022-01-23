const http = require("http");

const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const homePage = fs.readFileSync("./index.html");
const aboutPage = fs.readFileSync("./about.html");
const contactPage = fs.readFileSync("./contact.html");
const loginPage = fs.readFileSync("./login.html");

const server = http.createServer((req, res) => {
    // console.log(req.url)
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  
    if (req.url == "/")
    {
        res.end(homePage);
    }
    if (req.url == "/contact")
    {
        res.end(contactPage);
    }
    if (req.url == "/login")
    {
        res.end(loginPage);
    }
    if (req.url == "/about") {
        res.end(aboutPage);
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
