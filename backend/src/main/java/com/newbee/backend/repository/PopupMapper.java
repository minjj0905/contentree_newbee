package com.newbee.backend.repository;

import com.newbee.backend.dto.PopupStoreDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PopupMapper {
    List<PopupStoreDto> getPopupStores();
}
