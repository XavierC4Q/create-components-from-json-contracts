import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/allRoutes.js';

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/forms", routes.FormRouter);

app.get('/', (req, res) => res.send("Welcome Xavier"));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));