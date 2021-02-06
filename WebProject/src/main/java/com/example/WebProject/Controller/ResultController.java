package com.example.WebProject.Controller;

import lombok.RequiredArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController
@RequestMapping("/Result")
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
        else{
            level = "장인";
        }
        model.addAttribute("LEVEL", level);
        return "Result/{points}/level";
    }
*/
    @GetMapping("/level")
    public String getRequest(){
        return"success to send data";
    }
}
