package com.irushinie.configconsumer.configconsumer;

import com.irushinie.configconsumer.configconsumer.model.MemberProfileConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController
//public class ProfileController {
//
//    @Autowired
//    MemberProfileConfiguration memberProfileConfiguration;
//
//
//    @RequestMapping("/profile")
//    public MemberProfileConfiguration getConfig(){
//        return  memberProfileConfiguration;
//    }
//}

//If you need to fetch this to UI

@Controller
public class ProfileController {

    @Autowired
    MemberProfileConfiguration memberProfileConfiguration;

    @RequestMapping("/profile")
    public String getConfig(Model model){

        model.addAttribute("model",memberProfileConfiguration.getDefaultModel());
        model.addAttribute("min",memberProfileConfiguration.getMinRentPeriod());

        return "mprofile";
    }

}
