package com.example.chat;

import java.io.Console;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GreetingController {

    @MessageMapping("/message")
    @SendTo("/chatroom/public")
    public Greetings greeting(HelloMessage message) throws Exception {
        // print the message to the console
        System.out.println(message.getName());
        return new Greetings(HtmlUtils.htmlEscape(message.getName()));
    }

}
