Feature: Add new student
    As a QA
    I verify ADD functionality works fine

    
    Scenario Outline: Attempt to create student with invalid
      Given I have student <data>
      When I send POST call to add student
      Then I should not get OK response
      Examples:
        | data                                                                                                |
        | {"id": 6, "lastName": "brown", "nationality": "american", "studentClass": "12" } | 

    @createstudent
    Scenario Outline: Create valid student
      Given I have student <data>
      When I send POST call to add student
      Then I should get OK response
      Examples:
        | data                                                                                                |
        | {"firstName": "dan", "id": 6, "lastName": "brown", "nationality": "american", "studentClass": "12" } | 
  
    Scenario Outline: Fetch Student
      Given I fetch using <id>
      When I send GET call to fetch student using id
      Then I should have received <studentdata> correctly in response
      Examples:
        | id  | studentdata |
        | 6 | [{"id": 6, "firstName": "dan", "lastName": "brown", "studentClass": "12", "nationality": "american"}] |

    Scenario Outline: Update Student
      When I send PUT call to update <studentinfo>
      Then I should have received <studentdata> correctly in response
      Examples:
        | id | studentinfo | studentdata |
        | 6 | {"id": 6, "firstName": "dan"} | {"id": 6, "firstName": "dan", "lastName": "brown", "studentClass": "12", "nationality": "american"} |

    Scenario Outline: Delete Student
      Given I sent DELETE call to delete student with id <id>
      Then I should get 200 response code
      Examples:
        | id |
        | {"id": 6} |