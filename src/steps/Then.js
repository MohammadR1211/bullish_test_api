const {Then} = require('cucumber');
const {REST}  = require('../utils/rest')
const expect = require('chai').expect;

restHandle = new REST()

Then('I should get OK response', async function(){
    // Verify response status code was 200.
    expect(this.context['response'].status).to.equal(200)
})

Then('I should have received {} correctly in response', async function(studentdata) {
    expect(this.context['response'].data).to.deep.equal(JSON.parse(studentdata))
})

Then('I should get 200 response code', async function(){
    expect(this.context['response'].status).to.equal(200)
})

Then('I should not get OK response', async function(){
    expect(this.context['response'].status).to.not.equal(200)
})

      