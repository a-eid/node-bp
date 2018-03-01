import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
const app = express()
import routes from "./routes/index"

app.use(cors())
app.use(bodyParser.json())

app.use("/", routes)

export default app
