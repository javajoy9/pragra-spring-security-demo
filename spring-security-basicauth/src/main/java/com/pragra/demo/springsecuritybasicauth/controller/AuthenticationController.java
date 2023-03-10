package com.pragra.demo.springsecuritybasicauth.controller;

import com.pragra.demo.springsecuritybasicauth.bean.AuthenticationBean;
import com.pragra.demo.springsecuritybasicauth.bean.Greetings;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class AuthenticationController {

    @GetMapping("/basicauth")
    @ResponseBody
    public AuthenticationBean getEnglishGreeting(){
        return new AuthenticationBean("You are authenticated");
    }

}
