package com.onlinepharmacy.service;

import com.onlinepharmacy.service.config.AppConstants;
import com.onlinepharmacy.service.entities.Role;
import com.onlinepharmacy.service.repositories.RoleRepo;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
@SecurityScheme(
        name = "E-Commerce Application",
        scheme = "bearer",
        type = SecuritySchemeType.HTTP,
        in = SecuritySchemeIn.HEADER)
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class OnlinePharmacyServiceApplication implements CommandLineRunner {

    private final RoleRepo roleRepo;

    public static void main(String[] args) {
        SpringApplication.run(OnlinePharmacyServiceApplication.class, args);
    }

    @Override
    public void run(String... args) {
        Role adminRole = new Role(AppConstants.ADMIN_ID, "ADMIN");
        Role userRole = new Role(AppConstants.USER_ID, "USER");
        List<Role> roles = List.of(adminRole, userRole);
        List<Role> savedRoles = roleRepo.saveAll(roles);
        savedRoles.forEach(System.out::println);
    }
}
