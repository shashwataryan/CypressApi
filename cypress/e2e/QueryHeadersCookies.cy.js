
describe("QueryHeadersCookies",()=>{
    let authtoken=null;
    /*it("QueryParameters",()=>
    {
        cy.request({
        method:'Get',
        url: 'https://reqres.in/api/users',
        qs: {page:2}

    })
    .then((response)=>
    {
       expect(response.body.data[0].first_name).to.eq("Michael");
     expect(response.body.total).to.eq(12);
    })
})*/
before("Post Request for token",()=>
    {
        cy.request({
        method:'Post',
        url: 'https://simple-books-api.glitch.me/api-clients',
        body:
        {
            "clientName":"Test",
            "clientEmail":Math.random().toString(5).substring(2)+"@gmail.com"
        }

    })
    .then((response)=>
    {
    
       authtoken=response.body.accessToken;
    })
})
before("Creating new order",()=>
    {
        cy.request({
        method:'Post',
        url: 'https://simple-books-api.glitch.me/orders',
        headers:
        {
        //'Content-Type': 'application/json',
        'Authorization': "Bearer "+authtoken
        },
        body:
        {
            "bookId":1,
            "customerName":'Ram'
        }

    })
    .then((response)=>
    {
       authtoken=response.body.accessToken;
    })
    })
    it("dfsdf",()=>
    {
        cy.log(authtoken);
    })
})
