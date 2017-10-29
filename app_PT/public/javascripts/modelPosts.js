module.exports = function (sequelize, Sequelize) {    
    var Posts = sequelize.define('posts', {
        name: {
            type: Sequelize.STRING,
            isAlphanumeric: true,
            allowNull: false
        },
        text: {
            type: Sequelize.TEXT('tiny')            
        }
    });
    return Posts;
};
