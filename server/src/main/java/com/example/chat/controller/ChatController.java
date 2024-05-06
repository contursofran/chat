package com.example.chat.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.example.chat.model.Message;

@Controller
public class ChatController {

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    public Message ChatController(@Payload Message message) {
        return message;
    }

}
