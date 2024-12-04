const knex = require("knex")(require("./knexfile.js")["development"]);

// CREATE

async function addItem(table, params){
    const x = knex(`${table}`)
    .insert([params])
    .returning(['id', 'name'])
    return x;
}

// READ 
async function getItem(id) {
    const x = await knex(`${id.table}`).select("*");
    return x;
}

// UPDATE
async function updateItem(table, id, params){
    const x = knex(`${table}`).where('id', id).update(params)
    .returning(['id','name'])
    return (x)
}

// DELETE
async function deleteItem(table, id){
    const x = knex(`${table}`)
    .where("id", id).del()
    return (x)
}

// CHECK

async function checker(name, email, password){
    const x = knex(`artists`)
        .where({
            name: name,
            email: email,
            password: password
        })
        .select('name');
    return (x)
}
module.exports = { 
    getItem,
    deleteItem,
    updateItem,
    addItem,
    checker
};