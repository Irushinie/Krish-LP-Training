package com.Irushinie.MicroSProject.servicer;

import com.Irushinie.MicroSProject.model.Student;
import com.Irushinie.MicroSProject.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    StudentRepository studentRepository;

    public Student save(Student student) {
        return studentRepository.save(student);
    }

    public Student  fetch_StudentById (int id) {

        Optional<Student> student = studentRepository.findById(id);
        if (student.isPresent()) {
            return student.get();
        }
        return null;
    }
}
