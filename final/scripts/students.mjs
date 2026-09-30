const filePath =  "data/students.json";
const studentContainer = document.querySelector(".candidates");
const topstudentContainer = document.querySelector("#top-candidates");

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
        const candidate = document.createElement("div");
        candidate.setAttribute("class","candidate");

        const candidateH3 = document.createElement("h3");
        candidateH3.textContent = `${student.name}`;

        const details = document.createElement("div");
        details.setAttribute("class","details");

        const studentClass = document.createElement('p');
        studentClass.innerHTML = `<strong>Class :</strong> ${student.class}`;

        const registeredSession = document.createElement('p');
        registeredSession.innerHTML = `<strong>Session :</strong> ${student.session}`;

        const practicalSubject = document.createElement('p');
        practicalSubject.innerHTML = `<strong>Practical Subject :</strong> ${student.practical_subject}`;

        const moreDetails = document.createElement("button");
        moreDetails.setAttribute("class","more-details");
        moreDetails.textContent = "View Registered Subjects";

        details.appendChild(studentClass);
        details.appendChild(registeredSession);
        details.appendChild(practicalSubject);


        candidate.appendChild(candidateH3);
        candidate.appendChild(details);
        candidate.appendChild(moreDetails);

        studentContainer.appendChild(candidate)
    });
}

export async function allStudents(){
    const allStudents = await getStudents();

    const students = allStudents.students;

    displayStudents(students);
}