package com.newbee.backend.dto;

import lombok.Data;

@Data
public class PopupStoreDto {

    private int id;
    private String name;
    private String lng;
    private String lat;
    private String address;
    private String locale;
    private String category;
    private String startDate;
    private String endDate;
    private String openTime;
    private String closeTime;
    private String description;
}
