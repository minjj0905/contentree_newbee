package com.newbee.backend.controller;

import com.newbee.backend.dto.PopupStoreDto;
import com.newbee.backend.service.PopupService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/popup")
@Slf4j
public class PopupController {
    private final PopupService popupService;

    @Autowired
    public PopupController(PopupService popupService) {
        this.popupService = popupService;
    }

    @GetMapping("")
    public ResponseEntity<?> getPopupStores() {
        Map<String, Object> resultMap = new HashMap<>();
        try {
            resultMap.put("object", popupService.getPopupStores());
            resultMap.put("msg", "get popup stores");
            return ResponseEntity.status(HttpStatus.OK).body(resultMap);

        } catch (Exception e) {
            resultMap.put("msg", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(resultMap);
        }
    }

    @GetMapping("{name}")
    public ResponseEntity<?> getPopupStore(@PathVariable("name") String name) {
        Map<String, Object> resultMap = new HashMap<>();
        try {
            PopupStoreDto popupStoreDto = popupService.getPopupStore(name);
            resultMap.put("msg", "get popup store");
            resultMap.put("object", popupStoreDto);
            return ResponseEntity.status(HttpStatus.OK).body(resultMap);
        } catch (Exception e) {
            resultMap.put("msg", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(resultMap);
        }
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchPopupStores(@RequestParam(value = "keyword") String keyword) {
        Map<String, Object> resultMap = new HashMap<>();
        try {
            resultMap.put("object", popupService.searchPopupStores(keyword));
            resultMap.put("msg", "search popup stores");
            return ResponseEntity.status(HttpStatus.OK).body(resultMap);
        } catch (Exception e) {
            resultMap.put("msg", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(resultMap);
        }
    }
}

