function saludar(callback) {
	let mensaje = 'Hello world'
	callback(mensaje)
}

saludar(function(str) {
	console.log('Callback invocado!')
	console.log(str)
})
