package com.pragra.demo.springsecurityjwtauth.controller;


import com.pragra.demo.springsecurityjwtauth.bean.AuthenticationBean;
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
