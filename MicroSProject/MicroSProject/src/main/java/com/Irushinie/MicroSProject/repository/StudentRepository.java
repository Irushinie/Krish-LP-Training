package com.Irushinie.MicroSProject.repository;

import com.Irushinie.MicroSProject.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface StudentRepository extends JpaRepository<Student, Integer> {


}
