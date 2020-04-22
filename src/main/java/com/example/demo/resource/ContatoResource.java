package com.example.demo.resource;

import com.example.demo.model.entity.Contato;
import com.example.demo.model.repository.ContatoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/contatos")
@RequiredArgsConstructor
public class ContatoResource {

    private final ContatoRepository repository;

    @GetMapping
    public List<Contato> getContatos(){
        return repository.findAll();
    }
}
