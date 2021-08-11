const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

car = {
    name:'abc',
    year:12,
    color:'red'
}
cars = ['ccc']
cars['a'] = 'abc'
cars[1] = 12
car
console.log(typeof(JSON.stringify(car)),cars);