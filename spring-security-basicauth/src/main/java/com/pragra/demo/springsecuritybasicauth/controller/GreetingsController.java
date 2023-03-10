package com.pragra.demo.springsecuritybasicauth.controller;

import com.pragra.demo.springsecuritybasicauth.bean.Greetings;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class GreetingsController {

    @GetMapping("/english")
    @ResponseBody
    public Greetings getEnglishGreeting(){
        return new Greetings("Good Morning!");
    }

    @GetMapping("/french")
    @ResponseBody
    public Greetings getFrenchGreeting(){
        return new Greetings("Bonjour!");
    }
}
