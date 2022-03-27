import express from 'express';
import cors from 'cors';
import angle from './routers/angle';
import position from './routers/position';
import cartesian from './routers/cartesian';

const PORT = process.env.PORT || 4000

const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Bem-vindo - Arm Mk2 Pluss')
});

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use('/api', angle);
app.use('/api', cartesian);
app.use('/api', position);

app.use((req, res) => {
    res.status(404).send();
});

app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`)
});


