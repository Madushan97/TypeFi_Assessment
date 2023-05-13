package com.madushan.TypeFiMiniApp.repository;

import com.madushan.TypeFiMiniApp.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
