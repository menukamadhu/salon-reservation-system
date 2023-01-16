package com.reserve.backend.controller;

import com.reserve.backend.dto.UserDTO;
import com.reserve.backend.model.User;
import com.reserve.backend.service.UserServiceInterface;
import jakarta.persistence.EntityManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserServiceInterface userService;

    @GetMapping
    private String hello(){
        return "Hello";
    }

    @PostMapping("/add")
    private Boolean addUser(@RequestBody UserDTO data){
        try{
            userService.addUser(data);
            return true;
        }catch(Exception e){
            System.out.println(e);
            return false;

        }
    }


}

