module.exports =function (req, res, next) { 
    const pug = require('pug');
    var table = 'Groups';    
    const Groups = require(process.cwd()+'/'+'public/javascripts/bd').Posts;
    console.log('c4', req.query, req.query.U_post.length);
    if (req.query.U_name && req.query.U_post && req.query.U_post.length < 201) {   
        Groups.findOrCreate(
             {where: {text: req.query.U_post,
                     name: req.query.U_name
                     }
             }
         )          
         .then(()=>{
             Groups.findAll(
              {where: {
                          name: req.query.U_name
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
