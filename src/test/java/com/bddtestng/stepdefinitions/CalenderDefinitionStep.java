package com.bddtestng.stepdefinitions;

import com.bddtestng.base.TestBase;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CalenderDefinitionStep extends TestBase{
	
	public CalenderDefinitionStep() {
		// TODO Auto-generated constructor stub
		super();
	}

	@Before()
	public void setUp() {
		initialization();
	}
	
	@Given("^Select the Calender$")
	public void select_the_Calender() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@When("^Home page$")
	public void home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^uncheck the Call$")
	public void uncheck_the_Call() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^Select today's date$")
	public void select_today_s_date() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^Put a title \"([^\"]*)\"$")
	public void put_a_title(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^Select the category \"([^\"]*)\"$")
	public void select_the_category(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^Is appropiate person \"([^\"]*)\" visible in Assigned To$")
	public void is_appropiate_person_visible_in_Assigned_To(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^Click the Save button$")
	public void click_the_Save_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}
	
	@After()
	public void closing() {
		driver.quit();
	}
}
