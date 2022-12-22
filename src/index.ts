import { PrismaClient } from '@prisma/client'
import express, { Request, Response } from 'express';

const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('tiny'));

const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.json({ status: (200), result: "Connect to Backend" })
});

app.listen(8000, () => {
    console.log(`Listening on port 8000`);
});