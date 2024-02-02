import express from 'express';
import { router } from './routes/routes.js';


const app = express();

app.use(express.json());

app.use(router);

app.use("./*", (req, res) => {
    res.status(404).json({
        message: "Route not found",
    });
});

app.listen(9000, () => console.log('Server on port 9000'));