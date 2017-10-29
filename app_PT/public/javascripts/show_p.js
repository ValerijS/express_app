module.exports = function (req, res,next) {   
    const Posts = require(process.cwd()+'/'+'public/javascripts/bd').Posts;    
    const pug = require('pug');   
    Posts.findAll({       
        attributes: {
            exclude: ['createdAt', 'updatedAt']
         }
    }).then((result) => {        
         result1 = [];
         for (x in result) {
             result1[x] = result[x].dataValues;
         }
         variables = {  
             columns: Object.keys(result[0].dataValues),
             schools: result.map(function(school) {
                 return school.dataValues;
             })     
         }
         res.variables = variables;
         next()
     })
}