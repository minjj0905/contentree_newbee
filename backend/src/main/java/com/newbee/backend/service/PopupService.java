package com.newbee.backend.service;

import com.newbee.backend.dto.PopupStoreDto;

import java.util.List;

public interface PopupService {
    List<PopupStoreDto> getPopupStores();

    List<PopupStoreDto> searchPopupStores(String keyword);
}
