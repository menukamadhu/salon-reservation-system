package com.reserve.backend.service;

import com.reserve.backend.dto.UserDTO;
import org.springframework.stereotype.Service;

@Service
public interface UserServiceInterface {
    Boolean addUser(UserDTO data);
}
