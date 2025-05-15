const mongoose = require('mongoose');
const Inspector = require('./models/Inspector');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await Inspector.deleteMany({});

  await Inspector.insertMany([
    { name: 'John Doe', expertise: 'Structural', contact: 'john@example.com' },
    { name: 'Jane Smith', expertise: 'Electrical', contact: 'jane@example.com' },
    { name: 'Emily Johnson', expertise: 'Plumbing', contact: 'emily@example.com' },
  ]);

  console.log('Inspectors seeded');
  mongoose.disconnect();
});
