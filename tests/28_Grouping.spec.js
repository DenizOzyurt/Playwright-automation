const {test,expect} = require('@playwright/test');

// test.describe('',()=>{}) let us create a group
// test.describe.only('',()=>{}) let us create a group
// test.describe.skip('',()=>{}) let us create a group

test.beforeAll(async ()=>{
    console.log('This is from the ..................BeforeAllHook')
})

test.afterAll(async ()=>{
    console.log('This from the AfterAllHook......................')
})

test.beforeEach(async ()=>{
    console.log('This from the ......BeforeEach......')
})

test.afterEach(async ()=>{
    console.log('This from the ------AfterEach-------')
})
// test.describe('',()=>{}) let us create a group
test.describe('Group1',()=>{

test('Test1',async ({page})=>{
    console.log('This is Test1');
})

test('Test2',async ({page})=>{
    console.log('This is Test2');
})
})

test.describe('Group2',()=>{

test('Test3',async ({page})=>{
    console.log('This is Test3');
})

test('Test4',async ({page})=>{
    console.log('This is Test4');
})

test('Test5',async ({page})=>{
    console.log('This is Test5');
})
})


