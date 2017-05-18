console.log('start...');

getSomethingFromRemote(true)

.then(res => {
	console.log(`promise res is ${res}`)
})

.catch(res => {
	console.log(`promise rejected with: ${res}`)
});

function getSomethingFromRemote(withErr) {
	if (withErr) {
		return new Promise((resolve, reject) => {

			setTimeout( ()=> {
				let output = 'here we are';
				console.log('working...');
				reject(output);
			},4000)

		});
	}
}











// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });