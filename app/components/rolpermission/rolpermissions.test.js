const request = require('supertest')
const app = require('../../app.js')

describe('Post Rol-Permission', ()=>{
    const rolpermissions = [
        { rol: "admin", permission: "create" },
        { rol: "admin", permission: "update" },
        { rol: "admin", permission: "delete" },
        { rol: "admin", permission: "view" },
        { rol: "supervisor", permission: "create" },
        { rol: "supervisor", permission: "update" },
        { rol: "supervisor", permission: "delete" },
        { rol: "supervisor", permission: "view" },
        { rol: "seller", permission: "create" },
        { rol: "seller", permission: "view" }
    ]
 
    rolpermissions.forEach(rolpermission => {
    it('Debe devolver un Estatus: 201', (done)=>{
     
            request(app)
            .post('/rolpermissions/create')
            .send(rolpermission) // Aqui enviamos los datos a la ruta
            .expect(201)
            .end(done)
             
        })
    });
})