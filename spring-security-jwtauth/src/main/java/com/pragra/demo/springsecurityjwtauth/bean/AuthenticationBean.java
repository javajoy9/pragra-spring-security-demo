package com.pragra.demo.springsecurityjwtauth.bean;

public class AuthenticationBean {
    String message;

    public AuthenticationBean(String str) {
        this.message = str;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
