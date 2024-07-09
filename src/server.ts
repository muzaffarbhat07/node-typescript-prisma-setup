import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import prisma from './prismadb';

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.send(`Hi there! We have ${users.length} users in the database.`);
});

app.get('*', (req: Request, res: Response) => {
  res.send('404 - Not Found');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});