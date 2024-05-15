package com.example.chat.model;

public class RoomSubscribers {
    private String room;
    private Integer subscribers;

    public RoomSubscribers(String room, Integer suscribers) {
        this.room = room;
        this.subscribers = suscribers;
    }

    public String getRoom() {
        return room;
    }

    public void setRoom(String room) {
        this.room = room;
    }

    public Integer getSubscribers() {
        return subscribers;
    }
    
    public void addSubscriber() {
        this.subscribers++;
    }
    
    public void removeSubscriber() {
        this.subscribers--;
    }
}

