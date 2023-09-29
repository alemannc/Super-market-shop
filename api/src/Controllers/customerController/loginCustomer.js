const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const findByEmail = require("./byEmailCustoemer");


const loginCustomer = async (email, password) => {
    const customer = await findByEmail(email)
    if (customer.length === 0) {
        return ({ error: 'User not found' })
    }
    if (customer[0].password === password) {
        const token = jwt.sign({
            id: customer[0].id,
            name: customer[0].name,
            email: customer[0].email,
            phone: customer[0].phone,
            address: customer[0].address,
            provider: customer[0].provider,
        }, process.env.API_SECRET, { algorithm: 'HS256' })
        return {
            id: customer[0].id,
            name: customer[0].name,
            email: customer[0].email,
            phone: customer[0].phone,
            address: customer[0].address,
            role: customer[0].role,
            provider: customer[0].provider,
            token: token
        }
    } else {
        return ({ error: 'Incorrect password' })
    }
}

module.exports = loginCustomer