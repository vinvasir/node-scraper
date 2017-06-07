const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/scrape', (req, res) => {
	console.log(req.query)
	res.render('scrape', {queryString: req.query.url})
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));