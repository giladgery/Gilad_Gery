const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const path = require('path');
const sql = require('mssql');
const dbConfig = require('./db.config');

app.get('/static/Days.css', (req, res) => {
  res.set({ 'Content-Type': 'text/css' });
  res.sendFile(__dirname + '/static/Days.css');
});

app.use(express.static(path.join(__dirname, '/pictures')));

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/HomePage.html');
});

app.get('/routes', (req, res) => {
  res.sendFile(__dirname + '/views/Routes.html');
});

app.get('/Day1.html', (req, res) => {
  res.sendFile(__dirname + '/views/Routes.html');
});

app.get('/pictures', (req, res) => {
  res.sendFile(__dirname + '/views/Pictures.html');
});

app.get('/allroutes', (req, res) => {
  res.sendFile(__dirname + '/views/AllRoutes.html');
});

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/views/Signup.html');
});

app.use(express.static(path.join(__dirname, 'views')));
app.get('/static/HomePage.js', (req, res) => {
  res.set('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/static/HomePage.js');
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form action="/submit-form" method="post">
      <input type="file" name="area" placeholder="HOFCARMEL">
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit-form', (req, res) => {
  const areaSel = req.body.area;
  const len = req.body.len;
  var query;

  sql.connect(dbConfig, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Form submitted. area: ${areaSel}  Length: ${len}`);  
    const request = new sql.Request();
    request.input('areaSel', sql.VarChar, areaSel);
    request.input('len', sql.Int, len);

    if (!areaSel) {
      query = `SELECT * FROM routes WHERE max_len >= @len AND min_len <= @len`;
    }
    else {
      query = `SELECT * FROM routes WHERE area = @areaSel AND max_len >= @len AND min_len <= @len`;
    }
    request.query(query, function (err, result) {
      if (err) {
          console.error('Error occurred while executing the query: ', err);
      } else {
          console.log(result.recordset);
      }

      if (typeof result.recordset === "undefined") {
        res.send('No matching route');
      } else {
        var names = "";
        result.recordset.forEach((row) => {
          console.log(row.name);
          const link = `<a href=Day${row.num}.html style=text-decoration: none;>${row.name}</a>`;
          names += `<div> ${link} </div>`;
        });
        res.send(`<a class="active" href="/">דף הבית</a>
                <center><h2> :מסלולים מוצעים </h2>
                <div> ${names} </div></center>`);
      }
    });
  });
});


app.post('/signup-submit', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const area = req.body.options;
  const birthdate = req.body.birthdate;

  sql.connect(dbConfig, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Signup Form submitted. username: ${username}  email: ${email} area: ${area} birthdate: ${birthdate}`);  
    
    const request = new sql.Request();
    request.input('username', sql.VarChar, username);
    request.input('pass', sql.VarChar, password);
    request.input('email', sql.VarChar, email);
    request.input('area', sql.VarChar, area);
    request.input('birthdate', sql.DateTime, birthdate);
  

    request.query(`INSERT INTO users VALUES (@username, @pass, @email, @area, @birthdate);`, function (err, result) {
      if (err) {
          console.error('Error occurred while executing the query: ', err);
      } else {
          console.log(result.recordset);

          res.send(`<a class="active" href="/">דף הבית</a>
                  <center><h2> נרשם בהצלחה ${username} משתמש</h2>`);
      }
    });
  });
});


sql.connect(dbConfig, function(err) {
  if (err) {
      console.log(err);
      return;
  }

  const request = new sql.Request();

  fs.readFile('./web.sql', 'utf8', function (err, data) {
      if (err) {
          console.log(err);
      } else {
          // Execute the commands in the .sql file
          request.query(data, function(err, result) {
              if (err) {
                  console.log(err);
              } else {
                  console.log(result);
              }
              sql.close();
          });
      }
  });
});
