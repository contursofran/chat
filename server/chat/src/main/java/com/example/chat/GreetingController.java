package com.example.chat;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GreetingController {

    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greetings greeting(HelloMessage message) throws Exception {
        Thread.sleep(1000);
        return new Greetings("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
    }

}
