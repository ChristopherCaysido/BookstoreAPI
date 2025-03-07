const express = require("express")
const app = express()
const bookRouter = require("./routes/bookRouter")
const authorRouter = require("./routes/authorRouter")
const indexRouter = require("./routes/indexRouter")

app.use("/",indexRouter)
app.use("/books",bookRouter)
app.use("/authors",authorRouter)

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
