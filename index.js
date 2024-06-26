//1)import json server -library
const jsonServer = require('json-server')

//2) create path for db.json file using router function - for storing data
const router = jsonServer.router("db.json")

//3)create middleware to convert json to js - defaults()
const middleware = jsonServer.defaults()

//4) create(is a method) json server
const mediaplayerServer = jsonServer.create()

//5)server should use middleware and router -position is important first understand data (middleware) then store(router)
mediaplayerServer.use(middleware)
mediaplayerServer.use(router)

//6)set port for server - by default port no. is 3000 - for 2 apps different port number is used
const PORT = 3000 || process.env.PORT //for avoiding clashes

//7)run server
mediaplayerServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
})

