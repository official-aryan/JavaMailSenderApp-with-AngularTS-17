package com.JavaMailSender.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class email_Service {


    @Autowired
    private JavaMailSender javaMailSender;

    public email_Service(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void JMS( String to,String subject,String text)
    {
        SimpleMailMessage smm=new SimpleMailMessage();
        smm.setTo(to);
        smm.setSubject(subject);
        smm.setText(text);
        javaMailSender.send(smm);

    }
}
