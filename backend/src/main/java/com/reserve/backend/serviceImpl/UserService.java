package com.reserve.backend.serviceImpl;

import com.reserve.backend.dto.UserDTO;
import com.reserve.backend.model.User;
import com.reserve.backend.repository.UserRepository;
import com.reserve.backend.service.UserServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserServiceInterface {


    @Autowired
    private UserRepository userRepo;

    @Override
    public Boolean addUser(UserDTO data) {
        User u = new User(data.getId(), data.getFirstName(), data.getLastName(), data.getGender(), data.getContactNo(), data.getPassword());
        userRepo.save(u);
        return false;
    }
}
