package com.Irushinie.MicroSProject;

import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.boot.actuate.endpoint.annotation.Selector;
import org.springframework.boot.actuate.endpoint.annotation.WriteOperation;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
@Endpoint(id = "stage") //id is the one we use after the actuator
public class StageEndPoint {

    Map<String, Stage> stages = new ConcurrentHashMap<>();

    //return all the stages what we have
    @ReadOperation //@ReadOperation- http get call will come and map here
    public Map<String, Stage> getAllStages() {
        return stages;
    }


    //takes the stage and returns the stage value(stage object)
    @ReadOperation
    public Stage getStage(@Selector String name){
        return stages.get(name);

    }

    //set the stage value
    @WriteOperation
    public void setValue(@Selector String name, int stage){
        stages.put(name, new Stage(stage));
    }

    static class Stage{
        int value;

        public  Stage(int value){
            this.value = value;

        }

        public int getValue() {
            return value;
        }

        public void setValue(int value) {
            this.value = value;
        }
    }
}
