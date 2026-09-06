const courses = [
    { subject: 'CSE', code: '110', credits: 3, completed: true },
    { subject: 'CSE', code: '111', credits: 2, completed: true },
    { subject: 'WDD', code: '130', credits: 2, completed: true },
    { subject: 'WDD', code: '131', credits: 2, completed: true },
    { subject: 'WDD', code: '231', credits: 2, completed: false },
    { subject: 'CSE', code: '210', credits: 3, completed: true },
];

const coursesContainer = document.getElementById('courses');
const creditCount = document.getElementById('total-credit');
const btnAll = document.getElementById('all');
const btnCse = document.getElementById('cse');
const btnWdd = document.getElementById('wdd');

function displayCourses(filteredCourses) {
    coursesContainer.innerHTML = "";

    filteredCourses.forEach(course => {
        const card = document.createElement('li');
        card.classList.add('course-card');
        
        if (course.completed) {
            card.classList.add('completed');
        }
        
        card.textContent = `${course.subject} ${course.code}`;
        coursesContainer.appendChild(card);
    });

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    creditCount.textContent = `The total credits for the courses listed above is: ${totalCredits}`;
}

function setActiveButton(activeButton) {
    [btnAll, btnCse, btnWdd].forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
}

btnAll.addEventListener('click', () => {
    displayCourses(courses);
    setActiveButton(btnAll);
});

btnCse.addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);
    setActiveButton(btnCse);
});

btnWdd.addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
    setActiveButton(btnWdd);
});

displayCourses(courses);
setActiveButton(btnAll);