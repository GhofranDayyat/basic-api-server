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
        let res = await mockServer.get('/food').send({
            'Food':'Mansf',
            'Coutry':'Jordan'
        })
        expect(res.status).toEqual(201)
        expect(res.body.recored.Food).toEqual('Mansf')
        expect(res.body.recored.Coutry).toEqual('Jordan')
        })
})