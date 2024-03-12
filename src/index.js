import app from "./App.js";
import { dbconnect } from "./config.js";

dbconnect();
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})