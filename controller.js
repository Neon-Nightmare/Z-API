const knex = require("knex")(require("./knexfile.js")["development"]);

async function getItem(id) {
    const x = await knex(`${id.table}`).select("*");
    return x;
}


//POST

async function addItem(table, params){
    const x = knex(`${table}`)
    .insert([params])
    .returning(['id', 'name'])
    return x;
}

//DELETE
async function deleteItem(table, id){
    const x = knex(`${table}`)
    .where("id", id).del()
    return (x)
}

//UPDATE
async function updateItem(table, id, params){
    const x = knex(`${table}`).where('id', id).update(params)
    .returning(['id','name'])
    return (x)
}


module.exports = { 
    getItem,
    deleteItem,
    updateItem,
    addItem
};