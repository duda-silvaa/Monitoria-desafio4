
/* fram Express junto com middleware para verificar o token JWT (JSON Web Token) e
 consultar os dados do usuário associados a esse token*/

 /*o que vai acontecer: (Middleware authenticateToken:) o middleware verifica se o token JWT 
 está presente no header Authorization. Se não estiver presente ou for inválido, ele responde com
status 401 (Unauthorized). Se o token for válido, ele decodifica o token para obter o usuário e o adiciona ao
objeto req. Se houver erro na verificação do token, responde com status 403 (Forbidden)

Rota GET ("/"): Esta rota é protegida pelo middleware authenticateToken. Após a autenticação bem-sucedida, ela busca o usuário no array
simulado users com base no id do usuário extraído do token. Se o usuário não existir, responde com status 404 (Not Found). Caso contrário, retorna os dados do usuário com status 200 (OK).
*/

import express from "express";
import jwt from "jsonwebtoken"; //É a biblioteca usada para gerar e verificar tokens JWT

const app = express(); // inicializando o aplicativo Express criando uma instância de express(). app agora contém todos os métodos e funcionalidades do Express.
app.use(express.json()); //Express reconheça e analise o corpo das requisições como JSON. 

// Simulando um bd
const users = [
    { id: 1, name: "Eduarda", nickname: "duda", password: "1234" },
    { id: 2, name: "José", nickname: "jo", password: "1266" }
];

// Middleware para verificar o token JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']; //extrai o header autho da requis HTTP
    const token = authHeader && authHeader.split(' ')[1]; //O token JWT é esperado no formato "Bearer TOKEN", então temos o split(' ') para dividir o header e pegar apenas o token.

    if (!token) { //se n houver o token responde com 401
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, 'secret_key', (err, user) => { //tem q ser a chave secreta que está sendo usada para assinar os tokens JWT
        if (err) {
            return res.sendStatus(403); // Forbidden
        }
        req.user = user; 
        next();
    });
};

// Rota GET protegida por autenticação JWT
app.get("/", authenticateToken, (req, res) => {
    const user = users.find(u => u.id === req.user.id);

    if (!user) {
        return res.sendStatus(404); // Not Found
    }

    res.status(200).json(user);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
