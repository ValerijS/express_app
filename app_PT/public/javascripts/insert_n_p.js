module.exports =function (req, res, next) { 
    const pug = require('pug');
    var table = 'Groups';    
    const Groups = require(process.cwd()+'/'+'public/javascripts/bd').Posts;
    console.log('c4', req.body.U_post.length);
    if (req.body.U_name && req.body.U_post && req.body.U_post.length < 201) {   
        Groups.findOrCreate(
             {where: {text: req.body.U_post,
                     name: req.body.U_name
                     }
             }
         )          
         .then(()=>{
             Groups.findAll(
              {where: {
                          name: req.body.U_name
                      }
              })
              .then((result) => {
                  variables = {
                      columns: Object.keys(result[0].dataValues),
                      schools: result.map(function(group) {
                          return group.dataValues;
                      })
                  }
                  res.variables = variables;
                  next()
              })   
        })
    }else{
        res.end('You must enter your name and your post, the post must be smaller than 200 symbols')
    }
}
