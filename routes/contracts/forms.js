import express from 'express';
import LoginFormContract from '../../contracts/forms/LoginFormContract.json';

const Router = express.Router();

Router.get('/login', (req, res) => res.json(LoginFormContract));

export default Router;