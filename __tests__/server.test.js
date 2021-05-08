
'use strict'


const server = require('../src/server.js');
//mock server
const superTest = require('supertest');
const mockServer = superTest(server.app);
let obj1 = {'Food':'Mansf','Coutry':'Jordan'}
let obj2 = {'Food':'kabsa','Coutry':'KSA'}
describe('Tisting server Api',()=>{
   it('Create a record using POST',async ()=>{
    let res = await mockServer.post('/food').send(obj1);
    res=await mockServer.post('/food').send(obj2)
    expect(res.body.recored).toEqual(obj2)
    expect(res.status).toEqual(201)
    let res2 = await mockServer.post('/clothes').send(obj1);
    res2=await mockServer.post('/clothes').send(obj2)
    expect(res2.body.recored).toEqual(obj2)
    expect(res2.status).toEqual(201)
    })

    it('Read a list of records using GET',async ()=>{
        let res = await mockServer.get('/food')
        expect(res.body[1].recored).toEqual(obj2)
        expect(res.status).toEqual(200)
        let res2 = await mockServer.get('/clothes')
        expect(res2.body[1].recored).toEqual(obj2)
        expect(res2.status).toEqual(200)
        })
        it('Read a record using GET',async ()=>{
            let res = await mockServer.get('/food/2')
           console.log(res.body.recored);
            expect(res.body.recored).toEqual(obj2)
            expect(res.status).toEqual(200)
            let res2 = await mockServer.get('/clothes/2')
            expect(res2.body.recored).toEqual(obj2)
            expect(res2.status).toEqual(200)
            })
            obj2 = {'Food':'kabsa2','Coutry':'KSA & jordan'}
            it('Update a record using PUT',async ()=>{
                let res = await mockServer.put('/food/2').send(obj2);
               console.log(res.body.recored);
                expect(res.body.recored).toEqual(obj2)
                expect(res.status).toEqual(200)
                let res2 = await mockServer.put('/clothes/2').send(obj2);
                expect(res2.body.recored).toEqual(obj2)
                expect(res2.status).toEqual(200)
                })

                it('Destroy a record using DELETE',async ()=>{
                    let res = await mockServer.delete('/food/2');
                    expect(res.body.checkDelete).toEqual(true)
                    expect(res.status).toEqual(202)
                    res = await mockServer.delete('/food/22');
                    expect(res.body.checkDelete).toEqual(undefined)
                    expect(res.status).toEqual(204)
                    let res2 = await mockServer.delete('/clothes/1')
                    console.log(res2.body.checkDelete,'helllooo');
                    expect(res2.body.checkDelete).toEqual(true)
                    expect(res2.status).toEqual(202)
                    res2 = await mockServer.delete('/clothes/22')
                    expect(res2.body.checkDelete).toEqual(undefined)
                    expect(res2.status).toEqual(204)
                    })
})