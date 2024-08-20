const server=require('json-server')
const empServer=server.create()
const middleware=server.defaults()
const router=server.router("db.json")
const PORT=4000 || process.env.PORT
empServer.use(middleware)
empServer.use(router)
empServer.listen(PORT,()=>{
    console.log(`server running successfully at port number:${PORT}`);
    
})