package com.JavaMailSender.Controller;

import com.JavaMailSender.Entity.Email;
import com.JavaMailSender.Service.email_Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@CrossOrigin
public class email_Controller {


    @Autowired
    private email_Service emailService;


    @PostMapping("/send")
    // http://localhost:8080/send
    public ResponseEntity<?> senddata(@RequestBody Email email)

    {
        emailService.JMS(email.getTo(), email.getSubject(), email.getText());

        return new ResponseEntity<>("email sent", HttpStatus.CREATED);
    }

}
