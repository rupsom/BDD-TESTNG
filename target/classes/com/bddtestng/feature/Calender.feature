Feature: Various Webelement Testing

Background: Before() and After() from StepDefinitions will run BEFORE Scenario and AFTER Scenario
            Like Browser Open
            login in application
            Log Write
            logout from application
            Browser Closing
         
@SmokeTest
Scenario Outline: Webelement Testing

Given Select the Calender
When Home page
Then uncheck the Call
Then Select today's date
Then Put a title "<title>"
Then Select the category "<categoryName>"
Then Is appropiate person "<personName>" visible in Assigned To
Then Click the Save button

Examples:

| title | categoryName | personName |
| Home Event | Private | cts routh |
| Outside Event | Optional | cts routj |