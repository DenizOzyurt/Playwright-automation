const{test, expect} = require('@playwright/test');


/*
for TAGS :
npx playwright test --grep '@reg'  -> execute all @reg
npx playwright test --grep '@reg' --grep-invert '@sanity' -> execute @reg but not @sanity if both in the sam tag 

for ANNOTATIONS : 
skip, only, slow, fixme, fail
*/

/*
test('test1 ',{tag: '@sanity',},  async({page})=>{
    console.log('this my test1.......')
})

test('test2',{tag: '@sanity',}, async({page})=>{
    console.log('this my test2.......')
})

test('test3',{tag: '@reg'}, async({page})=>{
    console.log('this my ttest3.......')
})

test('test4 @reg', async({page})=>{
    console.log('this my test4.......')
})

test('test5 @reg @sanity', async({page})=>{
    console.log('this my test5.......')
})


test('test6', async({page, browserName})=>{
    if (browserName ==='chromium') {
           test.fail(); 
    }
    expect(1).toBe(2)
    console.log('this my test6.......')
})

test('test7', async({page})=>{
    test.fail(); //exp
    expect(1).toBe(2) //act // expect fail, wait fail so pass
    console.log('this my test7.......')
})

*/

//slow() ->triple the the timeout (defalt : 30000 30 seconds);
test('test7', async({page})=>{
    page.goto('https://demoblaze.com/index.html')
    expect(1).toBe(1) 
    console.log('this my test7.......')
})
