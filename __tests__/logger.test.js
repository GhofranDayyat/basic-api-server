'use strict'

const server = require('../src/server.js');
//mock server
const superTest = require('supertest');
const mockServer = superTest(server.app);

describe(`validat method and rout `,()=>{
    
    
   
   it('404 on a bad route',async ()=>{
       let res =await mockServer.get('/bad-rout');
       expect(res.status).toEqual(404)
   })

   it('404 on a bad method', async () => {
       let res = await mockServer.post('/food/:id');
       expect(res.status).toEqual(404);
    //    console.log(res.res.req.method)
    //    expect(res.res.req.method).toEqual('GET')

    })
})