package com.rafael.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.rafael.crudspring.model.Course;
import com.rafael.crudspring.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}
  @Bean
  CommandLineRunner initDataBase(CourseRepository repository){

    return args -> {

      repository.deleteAll();

      Course c = new Course();
      c.setName("Angular com Spring");
      c.setCategory("Front-End");

      repository.save(c);
    };

  }
}
