package com.reserve.backend.dto;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class UserDTO {

    private int id;
    private String firstName;
    private String lastName;
    private String gender;
    private String contactNo;
    private String password;

}
