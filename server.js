const express = require('express');
const app = express();
const rateLimit = require('express-rate-limit');

const { getUsers, getUser } = require('./models/users');

const apiRequestLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, /* 1 minute */
    max: 2 /* Limit of requests per IP per minute. */
})
app.use(apiRequestLimiter);

app.get('/users', (req, res) => {
    return getUsers()
        .then(data => res.send(data))
        .catch(exception => res.status(500).send({ error: 'Bad request.', code: exception.code }));
});

app.get('/users/:uuid', (req, res) => {
    return getUser(req.params.uuid)
        .then(data => res.send(data))
        .catch(exception => res.status(500).send({ error: 'Bad request.', code: exception.code }));
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});