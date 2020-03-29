const connection = require('../../src/database/connection');
const request = require('supertest');
const app = require('../../src/app')


describe('ONG', ()=>{

    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })

    afterAll(async ()=>{
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "ABCD",
                email: "contato@apae.com",
                whatsapp: "38944228888",
                city: "Montes Claros",
                uf: "MG" 
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});