package com.app.calculater.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
    @RequestMapping("/")
      public String getuploadForm(){
        return "redirect:/upload";
    }
    @RequestMapping("/upload")
    public ModelAndView uploadForm(){
        ModelAndView mv = new ModelAndView("upload");

        return mv;
    }
}
