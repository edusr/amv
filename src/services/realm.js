import Realm from 'realm'

import ClienteSchema from '../schemas/ClienteSchema'

export default function getRealm() {
    return Realm.open({
        schema: [ClienteSchema],
    })
}