const express = require('express');
const bodyParser = require('body-parser');
const env = require('./env');

const auth = require('./routes/auth');
const loginRoute = require('./routes/login');        
const forgot_passwordRoute = require('./routes/forgot_password');
const update_passwordRoute = require('./routes/update_password');
const registerRoute = require('./routes/register');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/register', registerRoute);
app.post('/login', loginRoute );
app.post('/forgot_password', forgot_passwordRoute );
app.post('/update_password', update_passwordRoute);

app.listen(env.PORT, () => {
    console.log('Server running');
});
