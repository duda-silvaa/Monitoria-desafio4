import authService from "../services/authService.js";

export async function signUp(req, res) {
    /*
    {
        name: "João",
        email: "joao@teste.com.br",
        password: "teste",
        confirmPassword: "teste"
    }  
    */
    const user = req.body;

    // Cria o usuario
    await authService.createUser(user);

    // Envia o código HTTP 201
    res.sendStatus(201);
}

export async function signIn(req, res) {
    const user = req.body;
    const resposta = await authService.login(user);
    res.send(resposta)
}