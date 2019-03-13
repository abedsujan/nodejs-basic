const express = require('express');
const bodyParser = require('body-parser');
var Students = require('./students');
const app = express();
const port = 8001;
const hyf_students = new Students();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

var logger = function(req, res, next) {
    console.info(`GOT REQUEST! ${req.method} ${req.originalUrl}`)
    next(); // Passing the request to the next handler in the stack.
}

app.use(logger);
app.get('/', (req, res) => res.send('Hello World!!!!'));

const router = express.Router();
router.route('/students')
    .get((req, res) => {

        let result;

        if (req.query.name) {
            result = hyf_students.getStudentDetailByName(req.query.name);
        } else if (req.query.classId) {
            result = hyf_students.getListByClassID(req.query.classId);
        } else {
            result = hyf_students.getList();
        }

        if (result.length !== 0) {
            res.send(result);
        } else {
            res.statusCode = 404;
            res.send('No result found');
        }
    })
    .post((req, res) => {
        hyf_students.addNewStudent(req.body, (succcessCallack, errorCallback) => {

            if (succcessCallack) {
                res.statusCode = 201;
                res.send('Successful');
            } else if (errorCallback) {
                res.statusCode = 401;
                res.send(errorCallback);
            } else {
                res.statusCode = 400;
                res.send('Invalid request');
            }
        });
    });

app.use('/api', router);
app.listen(port, () => console.log(`HYF app listening on port ${port}!`));



// var server = http.createServer(function (req, res) {

//     var url = req.url;

//     const hyf_students = new StudentBook();

//     var result;
//     if (url === '/getList') {
//         res.end(JSON.stringify(hyf_students.getList()) );
//     }
//     else if (url ===  '/getListByClass'){
//         res.end(JSON.stringify(hyf_students.getListByClass()) );
//     }
//     else{
//         res.end('Not found');
//     }

//     res.end('Not found');
//     console.log('we need to send res to client');

//     //write code here

// });

// server.listen(8001, function () {
//     console.log('Your server is running at port: 8001...');
// });