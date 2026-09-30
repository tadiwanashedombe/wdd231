const filePath =  "data/students.json";

export async function getStudents(){
    const response = await fetch(filePath);
    const data = await response.json();
    // console.log(data);
    return data;
}

function displayStudents(students){
    async function getSubjcts() {
        const allSubjects = await getStudents();

        const subjects = allSubjects.subjects
    }
    students.forEach(student => {
        
    });
}

export async function allStudents(){
    const allStudents = await getStudents();

    const students = allStudents.students;

    displayStudents(students);
}