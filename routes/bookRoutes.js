const {Router} = require("express")

bookRouter = Router()

bookRouter.get("/",(req,res)=>{res.send("All books")})

bookRouter.get("/:bookId",(req,res)=>{
    const {bookId} = req.params
    res.send(`Book ID: ${bookId}`)
})

bookRouter.get("/:bookId/reserve", (req,res)=>{
    res.send("Book Reservation Has or Has Note Been Reserved")
})

bookRouter.post("/:bookId/reserve", (req,res)=>{
    res.send("Book has been reserved")
})