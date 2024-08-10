package com.onlinepharmacy.service.services;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.onlinepharmacy.service.entities.Product;
import com.onlinepharmacy.service.payloads.ProductDTO;
import com.onlinepharmacy.service.payloads.ProductResponse;

public interface ProductService {

	ProductDTO addProduct(Long categoryId, Product product);

	ProductResponse getAllProducts(Integer pageNumber, Integer pageSize, String sortBy, String sortOrder);

	ProductResponse searchByCategory(Long categoryId, Integer pageNumber, Integer pageSize, String sortBy,
			String sortOrder);

	ProductDTO updateProduct(Long productId, Product product);

	ProductDTO updateProductImage(Long productId, MultipartFile image) throws IOException;

	ProductResponse searchProductByKeyword(String keyword, Integer pageNumber, Integer pageSize, String sortBy,
			String sortOrder);

	String deleteProduct(Long productId);

}
