package com.bddtestng.util;

import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.bddtestng.base.TestBase;

public class Utilities extends TestBase{

	public static long PAGE_LOAD_TIMEOUT = 15;
	public static long THREADSLEEP = 15;
	
	public static Boolean isElementAvailable(String locator) {
		return driver.findElement(By.xpath(locator)).isDisplayed();
	}
	
	public static Boolean isElementEnabled(String locator) {
		return driver.findElement(By.xpath(locator)).isEnabled();
	}
	
	public static Boolean isElementSelected(String locator) {
		return driver.findElement(By.xpath(locator)).isSelected();
	}
	
	public static void typing(String locator, String value) {
		driver.findElement(By.xpath(locator)).sendKeys(value);
	}
	
	public static void typing(String locator, Keys key) {
		driver.findElement(By.xpath(locator)).sendKeys(key);
	}
	
	public static void selectFromDropdown(String locator, String value) {
		Select select = new Select(driver.findElement(By.xpath(locator)));
		select.selectByValue(value);
	}
	
	public static void selectFromDropdown(String locator, int value) {
		Select select = new Select(driver.findElement(By.xpath(locator)));
		select.selectByIndex(value);
	}
	
	public static void deselectFromDropdown(String locator, String value) {
		Select select = new Select(driver.findElement(By.xpath(locator)));
		select.deselectByValue(value);
	}
	
	public static void deselectFromDropdown(String locator, int value) {
		Select select = new Select(driver.findElement(By.xpath(locator)));
		select.deselectByIndex(value);
	}
	
	public static void selectFromDropdownFirst(String locator) {
		Select select = new Select(driver.findElement(By.xpath(locator)));
		select.getFirstSelectedOption();
	}
	
	public static List<String> getAllValueFromDropdown(String locator) {
		Select select = new Select(driver.findElement(By.xpath(locator)));
		List<WebElement> listDropdownValues = select.getOptions();
		List<String> valuesFromDropdown = new ArrayList<String>();
		
		for(WebElement e: listDropdownValues)
			valuesFromDropdown.add(e.getText());
		
		return valuesFromDropdown;
	}
	
	public static void click(String locator) {
		driver.findElement(By.xpath(locator)).click();
	}
}
