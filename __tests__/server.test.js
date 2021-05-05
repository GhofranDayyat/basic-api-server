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
    })

    it('Read a list of records using GET',async ()=>{
        let res = await mockServer.get('/food')

        // console.log(res.body[0].recored)
        // console.log(res.body[1].recored)
        // console.log(res.body[2].recored)

        expect(res.body[0].recored).toEqual(obj1)
        expect(res.body[1].recored).toEqual(obj2)
        expect(res.status).toEqual(200)
        })


    //     it('Read a list of records using GET',async ()=>{
    //         let res = await mockServer.get('/food/1')
    //         expect(res.body.recored).toEqual(obj1)
    //         expect(res.status).toEqual(200)
    //         })


    //     obj1={'Food':'Mansf2','Coutry':'Jordan2'}
    //     it('Update a record using PUT',async ()=>{
    //             let res =await mockServer.put('/food/1').send(obj1)
    //             console.log(res.body.recored)
    //             expect(res.body.recored).toEqual(obj1)
    //             expect(res.status).toEqual(200)
    //         })


    //         it('Destroy a record using DELETE',async ()=>{
    //             let res =await mockServer.delete('/food/1')
    //             console.log(res.body.checkDelete,res.status)
    //             expect(res.body.checkDelete).toEqual(true)
    //             expect(res.status).toEqual(202)
    //              res =await mockServer.delete('/food/111')
    //             console.log(res.body.checkDelete,res.status)
    //             expect(res.body.checkDelete).toEqual(undefined)
    //             expect(res.status).toEqual(204)
    //         })
        

            let clothes1 = {'Food':'Coat','color':'red'}
            let clothes2 = {'Food':'dress','color':'blue'}
            //Testing clothes endpoint
            it('Create a record using POST',async ()=>{
                let res = await mockServer.post('/clothes').send(clothes1);
                res=await mockServer.post('/clothes').send(clothes2)
                expect(res.body.recored).toEqual(clothes2)
                expect(res.status).toEqual(201)
           
                })
            
                it('Read a list of records using GET',async ()=>{
                    let res = await mockServer.get('/clothes')
                    expect(res.body[2].recored).toEqual(clothes1)
                    expect(res.body[3].recored).toEqual(clothes2)
                    expect(res.status).toEqual(200)
                    console.log(res.body[0].recored)
                    console.log(res.body[1].recored)
                    console.log(res.body[2].recored)
                    console.log(res.body[3].recored)

                    })
            
            
                    it('Read a list of records using GET',async ()=>{
                        let res = await mockServer.get('/clothes/3')
                        expect(res.body.recored).toEqual(clothes1)
                        expect(res.status).toEqual(200)
                        })
            
            
                        clothes2={'clothes':'dress','color':'yellow'}
                    it('Update a record using PUT',async ()=>{
                            let res =await mockServer.put('/clothes/3').send(clothes1)
                            console.log(res.body.recored)
                            expect(res.body.recored).toEqual(clothes1)
                            expect(res.status).toEqual(200)
                        })
            
            
                        it('Destroy a record using DELETE',async ()=>{
                            let res =await mockServer.delete('/clothes/3')
                            console.log(res.body.checkDelete,res.status)
                            expect(res.body.checkDelete).toEqual(true)
                            expect(res.status).toEqual(202)
                             res =await mockServer.delete('/clothes/111')
                            console.log(res.body.checkDelete,res.status)
                            expect(res.body.checkDelete).toEqual(undefined)
                            expect(res.status).toEqual(204)
                        })
                    
})
