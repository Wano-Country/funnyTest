package com.example.WebProject.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController
@RequestMapping("/Result/{points}") // url mapping
public class ResultController {

/*
    @GetMapping("/level")
    public String getLevel(@PathVariable int data, Model model){
        String level = "";
        if(data < 2){
                level = "수습생";
    }
        else if(2 <= data && data < 4){
        level = "수련공";
    }
        else
    level = "장인";
}
        model.addAttribute("LEVEL", level);
                return level;
                }
                */

    @GetMapping("/level") // url 추가.
    public String getRequest(@PathVariable int points){
        String level = "";
        if(points < 2){
        level = "수습생";
        }
        else if(2 <= points && points < 4){
            level = "수련공";
        }
        else{
            level = "장인";
        }
        return level; // return 값을 반환함.
    }
}
