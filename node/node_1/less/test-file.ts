run();
async function run() {
	console.log('before promise');
	await testFunction();
	console.log('after promise');
}

async function testFunction() {
	return new Promise((resolve, reject) => {

		setTimeout( ()=> {
			let output = 'here we are';
			console.log('working...');
			reject(output);
		},4000)

	});
}