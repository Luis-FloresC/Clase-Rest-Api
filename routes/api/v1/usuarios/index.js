const express = require('express');
const router = express.Router();
const User = require('../../../../libs/usuarios');
const UserDao = require('../../../../dao/models/UserDao');
const useDao = new UserDao();
const user = new User(useDao);
user.init();

router.get('/', async (req, res) => {
    // extraer y validar datos del request
    try {
        // devolver la ejecución el controlador de esta ruta
        const versionData = await user.getUsersVersion();
        return res.status(200).json(versionData);
    } catch (ex) {
        // manejar el error que pueda tirar el controlador
        console.error('Error User', ex);
        return res.status(502).json({ 'error': 'Error Interno de Server' });
    }
});

router.get('/allUsers', async (req, res) => {
    // extraer y validar datos del request
    try {
        // devolver la ejecución el controlador de esta ruta
        const AllUsers = await user.getUsers();
        return res.status(200).json(AllUsers);
    } catch (ex) {
        // manejar el error que pueda tirar el controlador
        console.error('Error User', ex);
        return res.status(502).json({ 'error': 'Error Interno de Server' });
    }
});

router.get('/userById/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!(/^\d+$/.test(id))) {
            return res.status(400).json({
                error: 'Se espera un código numérico'
            });
        }
        const UsuarioExistente = await user.getUserById({ id: parseInt(id) });
        return res.status(200).json(UsuarioExistente);
    } catch (ex) {
        console.error(ex);
        return res.status(501).json({ error: 'Error al procesar solicitud.' });
    }
});

router.post('/new', async (req, res) => {
    try {
        const { avatar, password, email, nombre, estado } = req.body;
       
        if (/^\s*$/.test(avatar)) {
            return res.status(400).json({
                error: 'Se espera el valor de avatar'
            });
        }
        if (/^\s*$/.test(email)) {
            return res.status(400).json({
                error: 'Se espera el valor de correo electrónico'
            });
        }

        if (/^\s*$/.test(password)) {
            return res.status(400).json({
                error: 'Se espera el valor de una contraseña'
            });
        }

        if (/^\s*$/.test(nombre)) {
            return res.status(400).json({
                error: 'Se espera el valor de nombre'
            });
        }
        if (!(/^(ACT)|(INA)$/.test(estado))) {
            return res.status(400).json({
                error: 'Se espera el valor de estado en ACT o INA'
            });
        }
        const newUser = await user.addUser({ avatar, password, email, nombre, estado });
        return res.status(200).json(newUser);
    } catch (ex) {
        console.error(ex);
        return res.status(502).json({ error: 'Error al procesar solicitud' });
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!(/^\d+$/.test(id))) {
            return res.status(400).json({ error: 'El código debe ser un dígito válido.' });
        }
        const { avatar, password, email, nombre, estado } = req.body;
        if (/^\s*$/.test(avatar)) {
            return res.status(400).json({
                error: 'Se espera el valor de avatar'
            });
        }
        if (/^\s*$/.test(email)) {
            return res.status(400).json({
                error: 'Se espera el valor de correo electrónico'
            });
        }

        if (/^\s*$/.test(password)) {
            return res.status(400).json({
                error: 'Se espera el valor de una contraseña'
            });
        }

        if (/^\s*$/.test(nombre)) {
            return res.status(400).json({
                error: 'Se espera el valor de nombre'
            });
        }
        if (!(/^(ACT)|(INA)$/.test(estado))) {
            return res.status(400).json({
                error: 'Se espera el valor de estado en ACT o INA'
            });
        }

        const updateResult = await user.updateUser({ avatar, password, email, nombre, estado, id: parseInt(id) })

        if (!updateResult) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }
        return res.status(200).json({ updatedUser: updateResult });

    } catch (ex) {
        console.error(ex);
        res.status(500).json({ error: 'Error al procesar solicitud.' });
    }
});


router.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!(/^\d+$/.test(id))) {
            return res.status(400).json({ error: 'El código debe ser un dígito válido.' });
        }

        const deletedUser = await user.deleteUser({ id: parseInt(id) });

        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }
        return res.status(200).json({ deletedUser });

    } catch (ex) {
        console.error(ex);
        res.status(500).json({ error: 'Error al procesar solicitud.' });
    }
});
module.exports = router;