const express = require('express');
const userRoutes = require('./routes/users');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'PostgreSQL API is running' });
});

app.use('/users', userRoutes);


app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is active and running at http://localhost:${PORT}`);
});
