$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Calender.feature");
formatter.feature({
  "line": 1,
  "name": "Various Webelement Testing",
  "description": "",
  "id": "various-webelement-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Webelement Testing",
  "description": "",
  "id": "various-webelement-testing;webelement-testing",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Select the Calender",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Home page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "uncheck the Call",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select today\u0027s date",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Put a title \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Select the category \"\u003ccategoryName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Is appropiate person \"\u003cpersonName\u003e\" visible in Assigned To",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click the Save button",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "various-webelement-testing;webelement-testing;",
  "rows": [
    {
      "cells": [
        "title",
        "categoryName",
        "personName"
      ],
      "line": 24,
      "id": "various-webelement-testing;webelement-testing;;1"
    },
    {
      "cells": [
        "Home Event",
        "Private",
        "cts routh"
      ],
      "line": 25,
      "id": "various-webelement-testing;webelement-testing;;2"
    },
    {
      "cells": [
        "Outside Event",
        "Optional",
        "cts routj"
      ],
      "line": 26,
      "id": "various-webelement-testing;webelement-testing;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9981791693,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Before() and After() from StepDefinitions will run BEFORE Scenario and AFTER Scenario",
  "description": "          Like Browser Open\r\n          login in application\r\n          Log Write\r\n          logout from application\r\n          Browser Closing",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 25,
  "name": "Webelement Testing",
  "description": "",
  "id": "various-webelement-testing;webelement-testing;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Select the Calender",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Home page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "uncheck the Call",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select today\u0027s date",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Put a title \"Home Event\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Select the category \"Private\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Is appropiate person \"cts routh\" visible in Assigned To",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click the Save button",
  "keyword": "Then "
});
formatter.match({
  "location": "CalenderDefinitionStep.select_the_Calender()"
});
formatter.result({
  "duration": 170697048,
  "status": "passed"
});
formatter.match({
  "location": "CalenderDefinitionStep.home_page()"
});
formatter.result({
  "duration": 35923,
  "status": "passed"
});
formatter.match({
  "location": "CalenderDefinitionStep.uncheck_the_Call()"
});
formatter.result({
  "duration": 51318,
  "status": "passed"
});
formatter.match({
  "location": "CalenderDefinitionStep.select_today_s_date()"
});
formatter.result({
  "duration": 34383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home Event",
      "offset": 13
    }
  ],
  "location": "CalenderDefinitionStep.put_a_title(String)"
});
formatter.result({
  "duration": 4270210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Private",
      "offset": 21
    }
  ],
  "location": "CalenderDefinitionStep.select_the_category(String)"
});
formatter.result({
  "duration": 216564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cts routh",
      "offset": 22
    }
  ],
  "location": "CalenderDefinitionStep.is_appropiate_person_visible_in_Assigned_To(String)"
});
formatter.result({
  "duration": 136507,
  "status": "passed"
});
formatter.match({
  "location": "CalenderDefinitionStep.click_the_Save_button()"
});
formatter.result({
  "duration": 41055,
  "status": "passed"
});
formatter.after({
  "duration": 675841726,
  "status": "passed"
});
formatter.before({
  "duration": 7689784442,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Before() and After() from StepDefinitions will run BEFORE Scenario and AFTER Scenario",
  "description": "          Like Browser Open\r\n          login in application\r\n          Log Write\r\n          logout from application\r\n          Browser Closing",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 26,
  "name": "Webelement Testing",
  "description": "",
  "id": "various-webelement-testing;webelement-testing;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Select the Calender",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Home page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "uncheck the Call",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select today\u0027s date",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Put a title \"Outside Event\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Select the category \"Optional\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Is appropiate person \"cts routj\" visible in Assigned To",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Click the Save button",
  "keyword": "Then "
});
formatter.match({
  "location": "CalenderDefinitionStep.select_the_Calender()"
});
formatter.result({
  "duration": 33870,
  "status": "passed"
});
formatter.match({
  "location": "CalenderDefinitionStep.home_page()"
});
formatter.result({
  "duration": 31817,
  "status": "passed"
});
formatter.match({
  "location": "CalenderDefinitionStep.uncheck_the_Call()"
});
formatter.result({
  "duration": 34384,
  "status": "passed"
});
formatter.match({
  "location": "CalenderDefinitionStep.select_today_s_date()"
});
formatter.result({
  "duration": 32844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Outside Event",
      "offset": 13
    }
  ],
  "location": "CalenderDefinitionStep.put_a_title(String)"
});
formatter.result({
  "duration": 121625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Optional",
      "offset": 21
    }
  ],
  "location": "CalenderDefinitionStep.select_the_category(String)"
});
formatter.result({
  "duration": 89808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cts routj",
      "offset": 22
    }
  ],
  "location": "CalenderDefinitionStep.is_appropiate_person_visible_in_Assigned_To(String)"
});
formatter.result({
  "duration": 105203,
  "status": "passed"
});
formatter.match({
  "location": "CalenderDefinitionStep.click_the_Save_button()"
});
formatter.result({
  "duration": 40028,
  "status": "passed"
});
formatter.after({
  "duration": 661012226,
  "status": "passed"
});
});