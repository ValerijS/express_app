var express = require('express');
var app = express();
const pug = require('pug');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var show_p = require(process.cwd()+'/public/javascripts/show_p');
var render = require(process.cwd()+'/public/javascripts/render');
var insert_n_p = require(process.cwd()+'/public/javascripts/insert_n_p');
app.get('/', show_p, render(process.cwd()+'/views/posts_t_b.pug'));
app.get('/write', function (req,res){res.send(pug.renderFile('views/posts_post.pug'))});
app.post('/write_g', insert_n_p, render(process.cwd()+'/views/posts_t_b.pug'));
var server = app.listen(3001, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
}) 

