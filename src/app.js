const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);

// console.log(static_path);
app.use(express.static(static_path));

app.get("/", (req, res) => {
    res.render('weather')
})


app.listen(port, () => {
    console.log(`listening to the port no at ${port}`);
})