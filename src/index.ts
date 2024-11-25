import express, { Request, Response } from 'express';
import connectDB from './db';
import { BookRoutes } from './app/modules/book/book.route';

const app = express();
const port = 3000;


// Connect to MongoDB Atlas
// connectDB();


// Middleware to parse JSON
app.use(express.json());



// application routes
app.use('/api/products', BookRoutes);

// Basic route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

// Start the server
app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
    
// Connect to MongoDB Atlas
connectDB();
});
