const request = require('supertest')
const app = require('../../app.js')

describe('Post Permission', ()=>{
    // Creamos el objeto nuevo usuario
    const permissions = [
        { name: "create" },
        { name: "update" },
        { name: "delete" },
        { name: "view" }
    ]
 
    permissions.forEach(permission => {
    
        it('Debe devolver un Estatus: 201', (done)=>{
                 
            request(app)
            .post('/permissions/create')
            .send(permission) // Aqui enviamos los datos a la ruta
            .expect(201)
            .end(done)

        })
    });
})