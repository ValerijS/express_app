const Sequelize = require('sequelize'); 
const sequelize = require(process.cwd()+'/public/javascripts/connectbd').sequelize;
const Posts = require(process.cwd()+'/public/javascripts/modelPosts')(sequelize, Sequelize);
module.exports = {
    Posts: Posts,
    sequelize: sequelize
}
