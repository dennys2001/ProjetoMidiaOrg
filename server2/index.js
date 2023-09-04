const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROTAS//

//CRIAR FUNCIONÁRIO
app.post("/create", async (req, res) => {
    try {
        const { level, nome, leaderId, cargo, idEstrutura, marcas } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO midia.ORGCHART (level, nome, lider_id, cargo, id_sub_estrutura, marcas) VALUES($1,$2,$3,$4,$5,$6) RETURNING *", 
            [level, nome, leaderId, cargo, idEstrutura, marcas]
        );

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//BUSCAR TODOS OS FUNCIONÁRIOS

app.get("/allemployees", async (req, res) => {
    try {
        
        const allEmployees = await pool.query(
            "SELECT * FROM midia.ORGCHART", 
            
        );

        res.json(allEmployees.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//APAGAR FUNCIONÁRIO

app.delete("/create/:id", async (req, res) => {
    try {
        
        const { id } = req.params;
        const delTodo = await pool.query(
            "delete from midia.ORGCHART where id = ($1)", 
            [id]
        );
            
        res.json("Employee was deleted");
    } catch (err) {
        console.error(err.message);
    }
});

//ATUALIZAR CARGO E LEVEL FUNCIONÁRIO

app.put("/create/:id", async (req, res) => {
    try {
        
        const { cargo, level } = req.body;
        const { id } = req.params;
        const updtTodos = await pool.query(
            "UPDATE midia.ORGCHART SET cargo = ($1), level = ($2) where id = ($3)", 
            [cargo, level, id]
        );
                //console.log(updtTodos);
        res.json("Cargo was Updated");
    } catch (err) {
        console.error(err.message);
    }
});

//BUSCAR ESTRUTURA completa

app.get("/allemployees/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const allEstrutura = await pool.query(
            "SELECT * FROM midia.ORGCHART where id_sub_estrutura = ($1) order by level", 
            [id]
        );

        res.json(allEstrutura.rows);
    } catch (err) {
        console.error(err.message);
    }
});


// BUSCAR ID DE TODAS AS ESTRUTURAS

app.get("/callemployees/callestruturas", async (req, res) => {
    try {
        const allEstrutura = await pool.query(
            "SELECT DISTINCT(id_sub_estrutura) FROM midia.ORGCHART order by id_sub_estrutura", 
        );

        res.json(allEstrutura.rows);
    } catch (err) {
        console.error(err.message);
    }
    console.log("chamou");
});


//BUSCA DIRETORES

app.get("/allemployees/diretores/todos", async (req, res) => {
    try {
        const allDirectors= await pool.query(
            "SELECT * FROM midia.ORGCHART where level in (1, 2) order by level", 
        );
    
        res.json(allDirectors.rows);
    } catch (err) {
        console.error(err.message);
    }
  
});




app.get("/allemployees/subestrutura/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const allEstrutura = await pool.query(
            "select * from midia.ORGCHART where lider_id in (SELECT id FROM midia.ORGCHART where lider_id = ($1) or id = ($1)) or ID in (SELECT id FROM midia.ORGCHART where lider_id = ($1) or id = ($1)) order by level", 
            [id]
        );

        res.json(allEstrutura.rows);
    } catch (err) {
        console.error(err.message);
    }
});


//BUSCA OS NOMES DE TODOS

app.get("/allemployees/nomes/todos", async (req, res) => {
    try {
        const allDirectors= await pool.query(
            "SELECT id, nome FROM midia.ORGCHART order by level", 
        );
    
        res.json(allDirectors.rows);
    } catch (err) {
        console.error(err.message);
    }
  
});








app.listen(5000, () => {
    console.log("server has started on port 5000")
});