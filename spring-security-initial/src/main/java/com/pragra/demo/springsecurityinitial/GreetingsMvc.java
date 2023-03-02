package com.pragra.demo.springsecurityinitial;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class GreetingsMvc implements WebMvcConfigurer {


    public void addViewControllers(ViewControllerRegistry registry){
        registry.addViewController("/home").setViewName("home");
        registry.addViewController("/").setViewName("home");
        registry.addViewController("/ca-en").setViewName("english");
        registry.addViewController("/ca-fr").setViewName("french");
    }
}
