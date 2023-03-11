package com.pragra.demo.springsecurityjwtauth.controller;

import com.pragra.demo.springsecurityjwtauth.service.JwtTokenService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class JwtAuthenticationController {
    private JwtTokenService jwtTokenService;
    private AuthenticationManager authenticationManager;

    public JwtAuthenticationController( JwtTokenService jwtTokenService, AuthenticationManager authenticationManager){
        this.jwtTokenService = jwtTokenService;
        this.authenticationManager = authenticationManager;
    }
    @PostMapping("/authenticate")
    public ResponseEntity<JwtResponse> generateToken(@RequestBody JwtTokenRequest jwtTokenRequest){

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                jwtTokenRequest.username(), jwtTokenRequest.password());

        Authentication authentication = authenticationManager.authenticate(authenticationToken);
        String token = jwtTokenService.generateToken(authentication);

        return ResponseEntity.ok(new JwtResponse(token));
    }

}

