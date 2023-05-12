package com.madushan.TypeFiMiniApp.repository;

import com.madushan.TypeFiMiniApp.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
