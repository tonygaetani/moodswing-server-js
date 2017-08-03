'use strict';
const express = require('express');
const app = express();
const returnCodes = (process.env.RETURN_CODES || '200 502 422').split(' ').map(Number);
const port = parseInt(process.env.PORT) || 11235;

function getRandomInt(max) {
	max = Math.floor(max);
	return Math.floor(Math.random() * max);
}

app.get('/', (req, res) => {
	const idx = getRandomInt(returnCodes.length);
	const status = returnCodes[idx];
	res.sendStatus(status);
});

app.listen(port, () => {
	console.log(`
                       _            _             
                      | |          (_)            
 ____   ___   ___   __| | ___ _ _ _ _ ____   ____ 
|    \\ / _ \\ / _ \\ / _  |/___) | | | |  _ \\ / _  |
| | | | |_| | |_| ( (_| |___ | | | | | | | ( (_| |
|_|_|_|\\___/ \\___/ \\____(___/ \\___/|_|_| |_|\\___ |
                                           (_____|
listening on port ${port}`);
});
