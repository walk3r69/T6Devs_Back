package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Software;

public interface SoftwareRepository extends JpaRepository<Software, Long> {
}