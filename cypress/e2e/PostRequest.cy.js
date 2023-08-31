
describe("Api Testing",()=>
{
    it("Post Requests",()=>
    {
    const info=
    {
        "tourist_name":"Shashwat",
        "tourist_email":Math.random().toString(5).substring(2)+"@gmail.com",
        "tourist_location":"India"  
    }
cy.request({
    method:"POST",
    url:"http://restapi.adequateshop.com/api/tourist",
    body: info
}).then((response)=>
{
cy.log(response.body)
/*expect(response.body.tourist_name).to.eq("Shashwat");
expect(response.status).to.eq(201);
expect(response.body).to.have.property('tourist_location',info.tourist_location);*/
})
    })
})