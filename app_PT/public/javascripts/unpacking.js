var faker = require('faker');
const {sequelize, Posts} = require(process.cwd()+'/public/javascripts/bd');
sequelize.sync({force:true})
.then(() => {
    const promises = [];
    for (let i = 0; i<10; i++) {
        promises.push(
            Posts.create({
                name: faker.fake(" {{name.firstName}}"),
                text: faker.fake(" {{name.firstName}}")
            })            
        )
    }
    return Promise.all(promises)
})