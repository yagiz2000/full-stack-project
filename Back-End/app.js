var express = require('express');
var apiRouter = require("./routes/api");
var app = express();
const cors = require("cors");
app.use(cors({origin: true}));
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use('/api', apiRouter);
app.get("/",(req,res)=>{
  res.send("<h1>Hello world</h1>")
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
let PORT = 8080;


app.listen(PORT,()=>console.log("server is running on "+PORT))
module.exports = app;
