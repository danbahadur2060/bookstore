import { app } from "./app.js";
import  {Db_connection}  from "./db/connection.js";
import { route } from "./routes/user.routes.js";
const port  = process.env.PORT || 4000;


app.use('/api/user',route)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    Db_connection()
})
