import * as userRepository from '../repositories/userRepository.js';
import {
    conflictError,
    unauthorizedError
} from '../utils/errorUtils.js';


async function createUser(user) {
    console.log(user);
    /* Checa no banco se o usuário existe */
    const existingUser = await userRepository.findUserByEmail(user.email);
    if (existingUser) {
        throw conflictError();
    }

    await userRepository.insertUser({ ...user });
}

async function login(login) {
    const user = await getUserOrFail(login);
    return user;
}

async function getUserOrFail(login) {
    const user = await userRepository.findUserByEmail(login.email);
    if (!user) throw unauthorizedError('Invalid credentials');

    return user;
}

const authService = {
    createUser,
    login,
};

export default authService;