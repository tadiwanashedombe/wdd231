const filePath = "data/students.json";
const studentContainer = document.querySelector("#candidates");
const topstudentContainer = document.querySelector(".track");
const classMatesContainer = document.querySelector(".class-mates");
const greeting = document.querySelector("#hello-name");

const name = sessionStorage.getItem("name");
const studentClass = sessionStorage.getItem("class");

greeting.innerHTML = `Hello, ${name}`;

export async function getStudents() {
    const response = await fetch(filePath);
    const data = await response.json();
    // console.log(data);
    return data;
}

function displayStudents(students, container, showTopSubject = false) {
    async function getSubjcts() {
        const allSubjects = await getStudents();

        const subjects = allSubjects.subjects
    }
    students.forEach(student => {
        const candidate = document.createElement("div");
        candidate.setAttribute("class", "candidate");

        const candidateH3 = document.createElement("h3");
        candidateH3.textContent = `${student.name}`;

        const details = document.createElement("div");
        details.setAttribute("class", "details");

        const studentClass = document.createElement('p');
        studentClass.innerHTML = `<strong>Class :</strong> ${student.class}`;

        const registeredSession = document.createElement('p');
        registeredSession.innerHTML = `<strong>Session :</strong> ${student.session}`;

        const practicalSubject = document.createElement('p');
        practicalSubject.innerHTML = `<strong>Practical Subject :</strong> ${student.practical_subject}`;
        
        details.appendChild(studentClass);
        details.appendChild(registeredSession);
        details.appendChild(practicalSubject);

        
        candidate.appendChild(candidateH3);
        candidate.appendChild(details);
        
        if (showTopSubject && student.top_student) {
            const topSubject = document.createElement("p");

            topSubject.setAttribute("class", "top-subject");

            topSubject.innerHTML = student.top_student;

            details.replaceWith(topSubject)
        }

        container.appendChild(candidate)
    });
}

export async function allStudents() {
    const allStudents = await getStudents();

    const students = allStudents.students;
    if(!studentContainer) return;
    displayStudents(students, studentContainer,);
}

export async function topStudents() {
    const allStudents = await getStudents();

    const students = allStudents.students;

    const topStudents = students.filter(student => student.top_student != false);

    if(!topstudentContainer) return;

    displayStudents(topStudents, topstudentContainer, true);
}

export async function classMates() {
    const allStudents = await getStudents();

    const students = allStudents.students;

    const classMates = students.filter(student => student.class === studentClass);
    if(!classMatesContainer) return;
    displayStudents(classMates, classMatesContainer);
}