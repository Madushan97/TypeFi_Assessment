package com.madushan.TypeFiMiniApp.controller;

import com.madushan.TypeFiMiniApp.model.User;
import com.madushan.TypeFiMiniApp.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
@CrossOrigin("http://localhost:3000 ")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/list")
    public Iterable<User> list() {
        return userService.list();
    }

}