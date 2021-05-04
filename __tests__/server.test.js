'use strict'


const server = require('../src/server.js');
//mock server
const superTest = require('supertest');
const mockServer = superTest(server.app);

describe(`Tisting server Api `,()=>{
   it('Create a record using POST',async ()=>{
    let res = await mockServer.post('/food').send({
        'Food':'Mansf',
        'Coutry':'Jordan'
    })
    expect(res.status).toEqual(201)
    expect(res.body.recored.Food).toEqual('Mansf')
    expect(res.body.recored.Coutry).toEqual('Jordan')
    })

    it('Read a list of records using GET',async ()=>{
        let res = await mockServer.get('/food')
        expect(res.body[0].recored).toEqual({ 'Food': 'Mansf', 'Coutry': 'Jordan' })
        expect(res.status).toEqual(200)
        })

        it('Read a record using GET',async ()=>{

                let res =await mockServer.put('/food/:id').send({ 'Food': 'Mansf2', 'Coutry': 'Jordan' })
                            console.log(res.body)

                expect(res.status).toEqual(200)
            })


            // 
            // console.log(res.body)
            // expect(res.res.request).toEqual({ 'Food': 'Mansf2', 'Coutry': 'Jordan' })
            // expect(res.res.request).toEqual({ 'Food': 'Mansf', 'Coutry': 'Jordan' })
            // expect(res.status).toEqual(201)

            // expect(res.status).toEqual(201)
            // })
})
