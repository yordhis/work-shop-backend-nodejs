const request = require('supertest')
const app = require('../../app.js')

describe('Post Rols', ()=>{
    // Creamos el objeto nuevo usuario
    const rols = [
        { name: "admin" },
        { name: "supervisor" },
        { name: "seller" }
    ]
    
    rols.forEach(rol => {

    it('Debe devolver un mensaje: El Rol se creó correctamente', (done)=>{
     
            request(app)
            .post('/rols/create-test')
            .send(rol) // Aqui enviamos los datos a la ruta
            .expect(201)
            .end(done)
            
        })
    });
})