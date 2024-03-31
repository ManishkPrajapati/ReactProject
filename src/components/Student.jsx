import React, { Component } from 'react';
import styles from './Student.module.css';
import { RiDeleteBin6Fill } from "react-icons/ri";

class Student extends Component {
 constructor(props) {
    super(props);
    this.state = {
      students: [
        { name: 'Manish', marks: 90 },
        { name: 'Raj', marks: 88 },
        {name:'Rohit', marks:75},
        {name:'Rohan', marks:79}
      ],
    };
 }

 deleteStudent = (index) => {
    const students = this.state.students.filter((_, i) => i !== index);
    this.setState({ students });
 };

 render() {
    return (
      <div className="container text-center">
        <table className={styles.table_student}>
          <thead className={styles.head}>
            <tr className={styles.studentn}>
              <th>Name</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className={styles.body}>
            {this.state.students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.marks}</td>
                <td>
                 <button onClick={() => this.deleteStudent(index)} style={{backgroundColor: 'burlywood', color: 'white', border: 'none', cursor: 'pointer'}}>
                 <RiDeleteBin6Fill />
                 </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
 }
}

export default Student;