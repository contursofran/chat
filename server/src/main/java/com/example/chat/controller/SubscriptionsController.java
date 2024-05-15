package com.example.chat.controller;

import com.example.chat.model.RoomSubscribers;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class SubscriptionsController {
     
    private final SimpMessagingTemplate simpMessagingTemplate;
    
    private RoomSubscribers firstRoom = new RoomSubscribers("1", 0);
    private RoomSubscribers secondRoom = new RoomSubscribers("2", 0);
    private RoomSubscribers thirdRoom = new RoomSubscribers("3", 0);

    public SubscriptionsController(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @MessageMapping("/subscribe/{room}")
    public void subscribeToRoom(@DestinationVariable String room) {
        switch (room) {
            case "1":
                firstRoom.addSubscriber();
                break;
            case "2":
                secondRoom.addSubscriber();
                break;
            case "3":
                thirdRoom.addSubscriber();
                break;
        }
        
        simpMessagingTemplate.convertAndSend("/channel/subscriptions", List.of(firstRoom, secondRoom, thirdRoom));
        
    }
    
    @MessageMapping("/unsubscribe/{room}")
    public void unsubscribeToRoom(String room) {
        switch (room) {
            case "1":
                firstRoom.removeSubscriber();
                break;
            case "2":
                secondRoom.removeSubscriber();
                break;
            case "3":
                thirdRoom.removeSubscriber();
                break;
        }
        
        simpMessagingTemplate.convertAndSend("/subscriptions", List.of(firstRoom, secondRoom, thirdRoom));
    }
}
