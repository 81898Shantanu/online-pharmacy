package com.onlinepharmacy.service.repositories;

import com.onlinepharmacy.service.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
//@Repository: Indicates that this interface is a Spring Data repository.(optional)
public interface RoleRepo extends JpaRepository<Role, Long> {


}
