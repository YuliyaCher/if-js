const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
      admissionYear: 2019,
      courseName: 'Java',
    },
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      admissionYear: 2018,
      courseName: 'JavaScript',
    },
    {
      firstName: 'Александр',
      lastName: 'Федоров',
      admissionYear: 2017,
      courseName: 'Python',
    },
    {
      firstName: 'Николай',
      lastName: 'Петров',
      admissionYear: 2019,
  courseName: 'Android',
}
  ];
class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
      }
  }
  class Student extends User {
      constructor(firstName, lastName, admissionYear, courseName) {
          super(firstName, lastName);
      this.admissionYear = admissionYear;
      this.courseName = courseName;
  }
  get course() {
    let numberCourse = new Date().getFullYear() - this.admissionYear;
      return numberCourse;
}
}
class Students {
    constructor(students) {
      this.students = students;
    }
    getInfo() {
      return this.students.sort((student1, student2) => new Student(student1).course - new Student(student2).course).map(student => `${new User(student).fullName} - ${new Student(student).courseName} - ${new Student(student).course}`);
      }
};

const students = new Students(studentsData);
console.log(students.getInfo());
