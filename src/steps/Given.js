const {Given} = require('cucumber');
const {REST}  = require('../utils/rest')

restHandle = new REST()

Given('I have student {}', async function(request){
    // Store student data in context
    this.context['studentdata'] = JSON.parse(request);
});

Given('I fetch using {}', async function(id){
    // Store id in context
    this.context['id'] = id;
})