package com.bddtestng.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.bddtestng.util.Utilities;

public class TestBase {

	public static WebDriver driver = null;
	public static Properties propcon = null;
	public static Properties propor = null;
	
	public TestBase() {
		// TODO Auto-generated constructor stub
		propcon = new Properties();
		propor = new Properties();
		try {
			FileInputStream fisforconfig = new FileInputStream(System.getProperty("user.dir")+
					"\\src\\main\\java\\com\\bddtestng\\config\\config.properties");
			FileInputStream fisforor = new FileInputStream(System.getProperty("user.dir")+
					"\\src\\main\\java\\com\\bddtestng\\config\\or.properties");
			try {
				propcon.load(fisforconfig);
				propor.load(fisforor);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}		
	}
	
	public void initialization() {
		String browser = propcon.getProperty("browser");
		if(browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"\\Executables\\chromedriver.exe");
			driver = new ChromeDriver();
		}
		
		else {
			System.out.println("BROWSER NOT FOUND");
		}
		
		driver.manage().window().maximize();
		driver.get(propcon.getProperty("url"));
		driver.manage().timeouts().pageLoadTimeout(Utilities.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
	}
}
