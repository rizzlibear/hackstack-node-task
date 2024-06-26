import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let task_array = [];

app.get("/", (req, res) => {
    task_array = [];
    res.render("index", { tasks: task_array });
});
app.get("*", (req, res) => {
    
    res.render("error", {});
});


app.post("/submit", (req, res) => {
    const input = req.body.task;
    task_array.push(input);
    res.render("index", { tasks: task_array });
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}!`);
});

