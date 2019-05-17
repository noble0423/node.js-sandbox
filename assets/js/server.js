// Activity to create a basic server, and then refactored to create two servers.
//===================================================================

// const http = require("http");

// const PORTONE = 8080;
// const PORTTWO = 7000;

// const handleRequestOne = function (req, res) {
//     res.end(`It works! Path hit ${req.url}.\n
//             You are doing a great job!`);
// }

// const handleRequestTwo = function (req, res) {
//     res.end(`It works! Path hit: ${req.url}.\n
//             There's nothing bad to say!`)
// }

// const serverOne = http.createServer(handleRequestOne);
// const serverTwo = http.createServer(handleRequestTwo);

// serverOne.listen(PORTONE, function() {
//     console.log(`Server listening on: http://localhost: ${PORTONE}.`);
// });

// serverTwo.listen(PORTTWO, function() {
//     console.log(`Server listening on: http://localhots: ${PORTTWO}.`);
// });



// Activity to create a server parsing urls
//===================================================================

// const http = require("http");

// const PORT = 8080;

// const server = http.createServer(handleRequest);

// server.listen(PORT, function() {
//     console.log(`Server listening on: http://localhost: ${PORT}.`);
// });

// function handleRequest(req, res) {

//     var urlPath = req.url;

//     switch(urlPath) {

//         case "/":
//             return displayRoot(urlPath, req, res);

//         case "/portfolio":
//             return displayPortfolio(urlPath, req, res);

//         default:
//             return display404(urlPath, req, res);
//     }
// }

// function displayRoot(url, req, res) {
//     let myHTML =    `<html>
//                     <body>
//                     <h1 id="home-page-header" style="color:purple" >Ryan's Home Page</h1>
//                     <a href="/portfolio">Portfolio</a>
//                     </body>
//                     </html>`;
    
//     res.writeHead(200, { "Content-type" : "text/html" });

//     res.end(myHTML);
// }

// function displayPortfolio(url, req, res) {
//     let portfolioHTML =     `<html>
//                             <body>
//                             <h2 style="color: blue">Here's my portfolio page</h2>
//                             <a href="/">Go Home</a>
//                             </body>
//                             </html>`;
                
//     res.writeHead(200, { "Content-type" : "text/html" });

//     res.end(portfolioHTML);
// }

// function display404(url, req, res) {
//     let pageNotFoundHTML =  `<html>
//                             <body>
//                             <h2 style="color: red">Sorry, the page you are looking for cannot be found!</h2>
//                             </body>
//                             </html>`;
                            
//     res.writeHead(404, { "Content-type" : "text/html" });

//     res.end(pageNotFoundHTML);
// }

// Activity that uses fs.readfile to display an html pg 
//===================================================================

// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const PORT = 8080;

// const server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//     fs.readFile(path.resolve(__dirname + "../../../index.html"), function(err, data) {
//         res.writeHead(200, { "Content-type": "text/html" });
//         res.end(data);
//     });
// }

// server.listen(PORT, function() {
//     console.log(`Server is listening on http://localhost: ${PORT}.`);
// });

// Activity 
//===================================================================
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT= 8080;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {

    let urlPath = req.url;

    switch(urlPath) {
        case "/":
            return displayRoot(urlPath, req, res);

        case "/favfoods":
            return displayFavFoods(urlPath, req, res);

        case "/favmovies":
            return displayFavMovies(urlPath, req, res);

        case "/css":
            return displayCSSFrameworks(urlPath, req, res);

        default:
            return display404(urlPath, req, res);
    }
}

function displayRoot(urlPath, req, res) {
    fs.readFile(path.resolve(__dirname + "../../../index.html"), function(err, data) {
        res.writeHead(200, { "Content-type" : "text/html" });
        res.end(data);
    });
}

function displayFavFoods(urlPath, req, res) {
    fs.readFile(path.resolve(__dirname + "../../../favFoods.html"), function(err, data) {
        res.writeHead(200, { "Content-type" : "text/html" });
        res.end(data);
    });
}

function displayFavMovies(urlPath, req, res) {
    fs.readFile(path.resolve(__dirname + "../../../favMovies.html"), function(err, data) {
        res.writeHead(200, { "Content-type" : "text/html" });
        res.end(data);
    });
}

function displayCSSFrameworks(urlPath, req, res) {
    fs.readFile(path.resolve(__dirname + "../../../favCSSFrameworks.html"), function(err, data) {
        res.writeHead(200, { "Content-type" : "text/html" });
        res.end(data);
    });
}

function display404(urlPath, req, res) {
    fs.readFile(path.resolve(__dirname + "../../../404.html"), function(err, data) {
        res.writeHead(200, { "Content-type" : "text/html" });
        res.end(data);
    });
}

server.listen(PORT, function() {
    console.log(`Server listening on http://localhost: ${PORT}.`)
});