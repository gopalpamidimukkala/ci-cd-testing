import express from 'express';
import { prismaclient } from '@repo/db/client';
const app = express();

app.use(express.json());

app.get('/me', (req, res) => {
   res.send("API is alive");
})

app.post('/create', async (req, res) => {
    try {
        const { username, password } = req.body;
        const response = await prismaclient.user.create({
            data : {
                username,
                password
            }
        })
        res.status(200).json({ message : `User Created Successfully with id ${response.id}`})
    } catch (error) {
        res.status(500).json({ message : "There is some Error"})
    }
})

app.listen(3001, () => {
    console.log('server is running on port 3001')
})