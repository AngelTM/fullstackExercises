package com.example.demo.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//DAO
@Repository
public interface UserRepository extends JpaRepository<User,Long>{
    
}
