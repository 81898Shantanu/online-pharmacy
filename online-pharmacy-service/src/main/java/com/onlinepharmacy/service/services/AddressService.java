package com.onlinepharmacy.service.services;

import com.onlinepharmacy.service.entities.Address;
import com.onlinepharmacy.service.payloads.AddressDTO;

import java.util.List;

public interface AddressService {

    AddressDTO createAddress(AddressDTO addressDTO);

    List<AddressDTO> getAddresses();

    AddressDTO getAddress(Long addressId);

    AddressDTO updateAddress(Long addressId, Address address);

    String deleteAddress(Long addressId);

}
