const http = require('http');
const Courses = require('./courses');
const Mentors = require('./mentors');
const hyf_courses = new Courses();
const hyf_mentors = new Mentors();

const bodyParser = require('body-parser')

const express = require('express')
const app = express();
const router = express.Router();

const port = 8001;

app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Welcome to HYF Course app using express! class09'))

router.route('/courses')
  .get((req, res, next) => {

    console.log("reqqqqqq",req.query)
    if (req.query.title) {
      res.send(hyf_courses.getCourseByTitle(req.query.title));
    } else {
      res.send(hyf_courses.getList());
    }

  })
  .post((req, res) => {
    if (hyf_courses.addCourse(req.body)) {
      res.status(201);
      res.send('course added');
    } else {
      res.status(400);
      res.send('failed to add');
    }
  });

app.delete('/courses/:title', (req, res) => {
  res.send(`course deleted ${req.params.title}`);
})

router.route('/mentors')
  .get((req, res) => res.send(hyf_mentors.getMentorList()));


app.get('/mentors', (req, res) => res.send(hyf_mentors.getMentorList()))
app.get('/mentor/:name', (req, res) => {

  const name = req.params.name;
  const mentor = hyf_mentors.getMentorByName(name);
  if (!mentor) {
    res.send(`The mentor with the name '${name.toUpperCase()}' - was not found!`);
  } else {
    res.send(mentor);
  }
})

app.use('/api', router);


app.listen(port, () => console.log(`HYF course app listening on port ${port}!`))


// const server = http.createServer((req, res) => {
//   const url = req.url;
// // console.dir(req, {
// //   'depth': 0
// // });
// // console.log(url);

//   if (url == '/') {
//     res.end('Welcome to HYF Course app !!!!')
//   } else if (url == '/getList' && req.method == 'GET') {
//     const result = hyf_courses.getList();


//     res.statusCode = 200;
//     res.end(JSON.stringify(result));
//   } else if (url == '/getList' && req.param('title') && req.method == 'GET') {
//     const result = hyf_courses.getList();
//     res.statusCode = 200;
//     res.end("Course");
//   } 

//   // else {
//   //   res.statusCode = 404;
//   //   res.end('Not Found')
//   // }
// });

// server.listen(port, () => {
//   console.log('HYF app is running (8001)...');
// })