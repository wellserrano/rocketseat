const { hash, compare }  = require("bcryptjs")
const AppError = require("../utils/AppError");
const sqliteConnection = require("../database/sqlite")

class UserController {

    async create(req, res) {
        const { name, email, password, admin } = req.body;

        if (!name || !email || !password || admin === undefined) {
            throw new AppError(`Incomplete JSON`, 406);
        };

        const db = await sqliteConnection();
        
        const checkUserExists = await db.get(`
            SELECT * 
            FROM users 
            WHERE email = ?
        `, [email]);

        if (checkUserExists) {
            throw new AppError(`User/email already exists`, 406);
        };

        const hashedPassword = await hash(password, 8)

        await db.run(`
            INSERT INTO users (name, email, password)
            VALUES (?, ?, ?)
        `, [name, email, hashedPassword])

        return res.status(201).json()

    };

    async update(req, res) {
        const { name, email, old_password, new_password, avatar } = req.body;
        const user_id = req.user.id
        
        const db = await sqliteConnection();
        const user = await db.get(`
            SELECT
                name, 
                email,
                password,
                avatar 
            FROM users
            WHERE id = ?
        `, [user_id]);

        const userWithUpdatedEmail = await db.get(`
            SELECT *
            FROM users
            WHERE email = ?
        `, [email]);

        if (!user) {
            throw new AppError(`User not found`, 404);
        };

        if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError(`E-mail already in use`, 400);
        };

        if (new_password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);

            if (!checkOldPassword) {
                throw new AppError("Current password is incorrect")
            };

        };

        const hashedPassword = await hash(new_password, 8)

        await db.run(`
            UPDATE users SET 
            name = ?,
            email = ?,
            avatar = ?,
            password = ?,
            updated_at = DATETIME('now')
            WHERE id = ?
        `, [
            name ?? user.name, 
            email ?? user.email, 
            avatar ?? user.avatar, 
            hashedPassword, 
            user_id
           ]
        );

        return res.status(200).json() 

    };
};

module.exports = UserController;

