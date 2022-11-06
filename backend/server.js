const path = require('path');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tickets', ticketRoutes);

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  // Set public folder as static
  app.use(express.static(path.join(__dirname, '../frontend/public')));

  app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../frontend/public/index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the Support Desk API' });
  });
}

// Error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
