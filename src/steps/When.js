const {When, } = require('cucumber');
const {REST}  = require('../utils/rest')
const {addStudentEndpoint, fetchStudentEndpoint, updateStudentEndpoint, deleteStudentEndpoint} = require('../config')

restHandle = new REST()

When('I send POST call to add student', async function () {
    // Send POST request and save response in context
    this.context['response'] = await restHandle.post(addStudentEndpoint, this.context['studentdata']);
})

When('I send GET call to fetch student using id', async function(){
    // GET call to fetch student data using id
    this.context['response'] = await restHandle.get(`${fetchStudentEndpoint}?id=${this.context['id']}`)
})

When('I send PUT call to update {}', async function(studentinfo){
    // GET call to fetch student data using id
    this.context['response'] = await restHandle.put(`${updateStudentEndpoint}`, JSON.parse(studentinfo))
})

When('I sent DELETE call to delete student with id {}', async function(id){
    console.log(id)
    this.context['response'] = await restHandle.delete(`${deleteStudentEndpoint}`, JSON.parse(id))
})