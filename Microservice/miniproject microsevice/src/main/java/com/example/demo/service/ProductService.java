package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository repo;
	public String addproduct(Product pro) {
		repo.save(pro);
		return "true";
	}
	public List<Product> getproduct() {
		
		return repo.findAll();
	}
	public String updateproduct(Product pro) {
		repo.save(pro);
		return "true";
	}
	public String deleteproductById(int id) {
		repo.deleteById(id);
		return "deleted";
	}

}
