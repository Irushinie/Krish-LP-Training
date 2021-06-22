package com.Irushinie.MicroSProject;


import com.Irushinie.MicroSProject.model.Student;
import com.Irushinie.MicroSProject.servicer.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {


    @Autowired
    StudentService studentService;
    private Student student;

    @RequestMapping(value = "/notice", method = RequestMethod.GET)
    public String Notice(){

        return "This is a warning notice for all students of this school to " +
                "kindly keep your phones silent in class rooms.";
    }

    @RequestMapping(value = "/notice", method = RequestMethod.POST)
    public String Notice2(){

        return "Anybody who breaks the rule will be punished!";
    }

    @RequestMapping(value = "/student", method = RequestMethod.POST)
    public Student save(@RequestBody Student student){

        return studentService.save(student);

    }

    @RequestMapping(value = "/student", method = RequestMethod.GET)
    public ResponseEntity<Student> fetchStudent(@RequestParam int id){

        Student student=studentService.fetch_StudentById(id);
        if(student==null){
            return ResponseEntity.notFound().build();
        }else{
            return ResponseEntity.ok().body(student);
        }
    }
}
