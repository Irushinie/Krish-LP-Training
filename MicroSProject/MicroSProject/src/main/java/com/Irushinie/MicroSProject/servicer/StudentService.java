package com.Irushinie.MicroSProject.servicer;

import com.Irushinie.MicroSProject.model.Student;

public interface StudentService {

    Student save(Student student);


    Student fetch_StudentById(int id);
}
