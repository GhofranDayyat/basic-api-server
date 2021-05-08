


'use strict';

const server = require('../src/server.js');

const superTest = require('supertest');
const mockServer = superTest(server.app);
// two object to test them
const testObj1 = {"meal": "salad", "type": "vegetarian"};
const testObj2 = {"meal": "tona", "type": "fish"};

describe('Check REST status and Returned data', () =>{
    it('Create a recored using POST', async () => {
        let resPostFood = await mockServer.post('/food').send(testObj1);
        resPostFood = await mockServer.post('/food').send(testObj2);

        let resPostClothes = await mockServer.post('/clothes').send(testObj1);
        resPostClothes = await mockServer.post('/clothes').send(testObj2);
        // test POST /food route
        expect(resPostFood.body.recored).toEqual(testObj2)
        expect(resPostFood.status).toEqual(201)
        // test POST /clothes route
        expect(resPostClothes.body.recored).toEqual(testObj2)
        expect(resPostClothes.status).toEqual(201)
        
    })

    it('Read a list of recoreds using GET', async () => {
        let resGetAllFood = await mockServer.get('/food')
        let resGetAllClothes = await mockServer.get('/clothes')
        // test GET  /food route
        expect(resGetAllFood.body[0].recored).toEqual(testObj1)
        expect(resGetAllFood.body[1].recored).toEqual(testObj2)
        expect(resGetAllFood.status).toEqual(200)
        // test GET /clothes route
        expect(resGetAllClothes.body[0].recored).toEqual(testObj1)
        expect(resGetAllClothes.body[1].recored).toEqual(testObj2)
        expect(resGetAllClothes.status).toEqual(200)
        console.log('from get clothes', resGetAllClothes.body );
    })

    it('Read a recored using GET', async () => {
        let resGetOneFood = await mockServer.get('/food/2')
        let resGetOneClothes = await mockServer.get('/clothes/2')
        // test GET one /food route
        expect(resGetOneFood.body.recored).toEqual(testObj2)
        expect(resGetOneFood.status).toEqual(200)
        // test GET one /clothes route
        expect(resGetOneClothes.body.recored).toEqual(testObj2)
        expect(resGetOneClothes.status).toEqual(200)
    })

    it('Update a recored using PUT', async () => {
        const updatedObj = {"meal": "chicken", "type": "Meat"}

        let resUpdateFood = await mockServer.put('/food/1').send(updatedObj)
        let resUpdateClothes = await mockServer.put('/clothes/1').send(updatedObj)

        // test PUT  /food route
        expect(resUpdateFood.body.recored).toEqual(updatedObj)
        // test PUT one /clothes route
        expect(resUpdateClothes.body.recored).toEqual(updatedObj)
    })

    it('Delete a recored using DELETE', async () => {
        // test DELETE /food route
        // test if route is exist
        let resDeleteFood = await mockServer.delete('/food/2')
        expect(resDeleteFood.body.checkDelete.checkDelete).toEqual(true)
        expect(resDeleteFood.status).toEqual(202)
        // test if route does not exist
        resDeleteFood = await mockServer.delete('/food/22')
        expect(resDeleteFood.body.checkDelete).toEqual(false)
        expect(resDeleteFood.status).toEqual(204)

        // test DELETE /clothes route
        // test if route is exist
        let resDeleteClothes = await mockServer.delete('/clothes/1')
        // console.log('from delete clothes', resDeleteClothes.body);
        expect(resDeleteClothes.body.checkDelete).toEqual(true)
        expect(resDeleteClothes.status).toEqual(202)
        // test if route does not exist
        resDeleteClothes = await mockServer.delete('/clothes/44')
        console.log('from delete clothes', resDeleteClothes.body);
        expect(resDeleteClothes.body.checkDelete).toEqual(false)
        expect(resDeleteClothes.status).toEqual(204)
    })
})