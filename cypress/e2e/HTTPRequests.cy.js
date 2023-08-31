
describe("HTTP request",()=>
{
    it("Get Call",()=>
    {
        cy.request('Get','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('eq',200);
    })
    it("POST Call",()=>
    {
        cy.request('Post','https://jsonplaceholder.typicode.com/posts',{title:'Post request',userid:123})
        .its('status')
        .should('eq',201);
    })
    it("PUT Call",()=>
    {
        cy.request({
          method: 'Put',
          url: 'https://jsonplaceholder.typicode.com/posts/1',
          body:{
             "title": 'Put Request',
             body:'This is post call',
             userid: 234
          }
        })
        .its('status')
        .should('eq',200);
    
  })
})