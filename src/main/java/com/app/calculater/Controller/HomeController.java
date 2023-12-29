package com.app.calculater.Controller;

import java.io.File;
import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
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
   
    @PostMapping("/uploadFile")
    public String uploadFile(@RequestParam("name") String name,@RequestParam("age") String age,
    						@RequestParam("gender") String gender,@RequestParam("file") MultipartFile file,
    						Model model, HttpServletRequest request) {
    	System.out.println("name"+ name);
    	System.out.println("age"+ age);
    	System.out.println("gender"+ gender);
    	if (file.isEmpty()) {
            model.addAttribute("message", "Please select a file to upload");
            return "uploadResult"; // Points to the uploadResult.jsp file
        }

        try {
            ServletContext servletContext = request.getServletContext();
            String uploadsDir = "/uploads/"; // Directory to save uploaded files
            String realPath = servletContext.getRealPath(uploadsDir);

            if (!new File(realPath).exists()) {
                new File(realPath).mkdir();
            }

            String originalFileName = file.getOriginalFilename();
            String filePath = realPath + originalFileName;
            File dest = new File(filePath);
            file.transferTo(dest);

            model.addAttribute("message", "File uploaded successfully");
        } catch (IOException e) {
            model.addAttribute("message", "File upload failed: " + e.getMessage());
        }
        return "uploadResult"; // Points to the uploadResult.jsp file
    }
    
}
