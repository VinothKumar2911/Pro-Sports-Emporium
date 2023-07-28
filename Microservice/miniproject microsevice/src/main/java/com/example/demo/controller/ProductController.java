package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;


@RestController
public class ProductController {
	@Autowired
	ProductService service;
	
	@PostMapping("/product")
	public String add(@RequestBody Product pro) {
		return service.addproduct(pro);
	}
	@GetMapping("/product")
public List<Product>get(){
		return service.getproduct();
	}

	@PutMapping("/product")
	public String update(@RequestBody Product pro) {
		return service.updateproduct(pro);
	}
	
	@DeleteMapping("/product/{id}")
	public String delete(@PathVariable int id) {
		return service.deleteproductById(id);
	}

}
