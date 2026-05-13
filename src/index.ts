import express from 'express';
import helloRouter from './routes/hello';

const app = express();

app.use('/hello', helloRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
