module.exports =  {
	BASE_URL: '',
	mongoose: {
		url: 'mongodb://localhost/inkwash',
	//url: 'mongodb://localhost/zhang',
		options: {
			auth: { authSource: "admin" },
			user: 'xxx',
			pass: 'xxx'
		}
	}
}
