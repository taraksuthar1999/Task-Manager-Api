const {MongoClient} = require('mongodb')
console.log(MongoClient.ObjectId)
const url = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

MongoClient.connect(url,{useNewUrlParser: true},(error, client)=>{
    if(error){
        return console.log('Unable to connect to database')
    }
    const db = client.db(database);
    // db.collection('users').insertOne({
    //     name:'kruti',
    //     age:21
    // },(error,result)=>{
    //     if(error){
    //         return console.log('error inserting')
    //     }
    //     console.log(result.ops)
    // })
    db.collection('users').insertMany([
        {
            name:'kruti',
            age:21
        },{
            name:'hemang',
            age: 21
        }
    ],(error, result)=>{
        if(error){
            return console.log('tata')
        }
        console.log(result)
    })
})