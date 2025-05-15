const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const inspectorRoutes = require('./routes/inspectors');
const reportRoutes = require('./routes/reports');
const certificateRoutes = require('./routes/certificates');

const app = express();

// Security headers
app.use(helmet());

// CORS
app.use(cors());

// Logger
app.use(morgan('dev'));

// Rate limiting (basic)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per IP in 15 minutes
  message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use(limiter);

// Body parser
app.use(express.json());

// Static folder for uploads
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/inspectors', inspectorRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/certificates', certificateRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error',
  });
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB Connected');
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.log(err));
