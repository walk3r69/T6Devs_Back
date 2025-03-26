package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Software;
import com.example.repository.SoftwareRepository;

@RestController
@RequestMapping("/api/softwares")
public class SoftwareController {

    @Autowired
    private SoftwareRepository softwareRepository;

    @GetMapping
    public List<Software> listarSoftwares() {
        return softwareRepository.findAll();
    }

    @PostMapping
    public Software cadastrarSoftware(@RequestBody Software software) {
        return softwareRepository.save(software);
    }
}