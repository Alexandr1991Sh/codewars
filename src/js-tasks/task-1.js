// Организовать вызов метода getServer() по алгоритму Round Robin по отношения 3 -х серверов

const server1 = 'server1'
const server2 = 'server2'
const server3 = 'server3'

let coutn = 0
let servers = [server1, server2, server3]

function getServer() {
    return servers[(coutn++) % servers.length]
}

// Test
console.log(getServer(), getServer(), getServer(), getServer(), getServer(), getServer(), getServer())
// server1 server2 server3 server1 server2 server3 server1