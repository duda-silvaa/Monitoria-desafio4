<h3 align="center">
    Monitoria de API REST
  </h3>
    <br />
  
  <div align="center">

  ![Node.js ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge)
  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge)
  
  ![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
  ![Postgres](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

  </div>
  
</div>

## 🚀 Rotas

  - `200` - Successful GET request
  - `201` - Successful POST request
  - `401` - Auth errors
  - `404` - Resource not found 
  - `409` - Resource conflict on POST requests
  - `422` - Body validation error on POST requests
  
# Como instalar
Primeiro clone o repositório clickando no botão verde onde está escrito ``code`` e baixe ou dê ``gitclone``.
Agora é só executar esse comandozinho no terminal e ele vai baixar todas as dependências.
``` yml
  npm install
```
# Como iniciar a API
Agora para iniciar a API você só precisa executar esse script que eu já deixei pronto! 
```yml
  npm run dev
```
Show, agora faça as requisições seguindo o formato abaixo e se divirta.

## Autenticação

```yml
POST /signup
    - Rota para registrar um novo usuario
    - body:{
        "email": "jon@doe.com",
        "name": "DonJoe27"
      }
    - response: CREATED
```

```yml
POST /signin
    - Rota para acessar um usuário existente
    - body:{
        "email": "jon@doe.com",
    }
    - Response: OK
```
