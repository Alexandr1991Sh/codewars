// // Организовать вызов метода getServer() по алгоритму Round Robin по отношению 3-х серверов
// const server1 = 'server1'
// const server2 = 'server2'
// const server3 = 'server3'
// function getServer(){ // no usages
//     return server1
// }
// // Tests
// console.log(getServer(), getServer(), getServer(), getServer(), getServer(), getServer(), getServer())
// // server1 server2 server3 server1 server2 server3 server1


const servers = ['server1', 'server2', 'server3']
let count = 0

function getServer() { // no usages
    return servers[count++ % servers.length]
}

// Tests
console.log(getServer(), getServer(), getServer(), getServer(), getServer(), getServer(), getServer())
// server1 server2 server3 server1 server2 server3 server1