import server from './server.config';

server.listen(server.get('port'), () => {
    console.log(`🚀 Escuchando el puerto: ${server.get('port')}`)
})