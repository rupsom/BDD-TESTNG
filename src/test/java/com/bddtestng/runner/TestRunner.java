package com.bddtestng.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="D:\\Projects_Selenium\\BDD-TESTNG\\src\\main\\java\\com\\bddtestng\\feature",
		glue= {"com\\bddtestng\\stepdefinitions"},
		plugin= {"pretty", "html:test-output"},
		dryRun=false,
		monochrome=true,
		strict=true,
		tags= {})

public class TestRunner {

}
