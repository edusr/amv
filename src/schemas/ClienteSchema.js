export default class ClienteSchema {
    static schema = {
        name: 'Cliente',
        primaryKey: 'codigoCliente',
        properties: {
            codigoCliente: {type: 'int', indexed: true},
            nomeCliente: 'string',
            cpfCnpj: 'string'
        }
    }
}