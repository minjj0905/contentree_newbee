package com.newbee.backend.service;

import com.newbee.backend.dto.PopupStoreDto;
import com.newbee.backend.repository.PopupMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PopupServiceImpl implements PopupService {

    private final PopupMapper popupMapper;

    @Autowired
    public PopupServiceImpl(PopupMapper popupMapper) {
        this.popupMapper = popupMapper;
    }

    @Override
    public List<PopupStoreDto> getPopupStores() {
        return popupMapper.getPopupStores();
    }

    @Override
    public List<PopupStoreDto> searchPopupStores(String keyword) {
        return popupMapper.searchPopupStores(keyword);
    }

    @Override
    public PopupStoreDto getPopupStore(String name) {
        return popupMapper.getPopupStore(name);
    }
}
