package com.JavaMailSender.Repository;

import com.JavaMailSender.Entity.Email;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.mail.javamail.JavaMailSender;

public interface email_Repository extends JpaRepository<Email,Integer> {


}
