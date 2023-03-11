package com.pragra.demo.springsecurityjwtauth.bean;

public class Greetings {
    String message;

    public Greetings(String s) {
        this.message = s;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
