const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repudiandae quia beatae voluptatum pariatur nihil hic in tempora sequi labore ullam dolorem quidem iusto quaerat, qui aliquid obcaecati. Culpa, alias, veritatis harum omnis consectetur placeat, porro praesentium assumenda inventore architecto maxime exercitationem sit a fugiat repellendus necessitatibus distinctio labore temporibus nihil earum similique cum minus? Qui est omnis nihil rem. Asperiores ea, laudantium quo ex totam repellendus, dolor, provident dolorum perspiciatis fugiat illum enim amet!";
const courses = [
    { subject: 'CSE', code: '110', credits: 3, title: 'Introduction to Programming', technology: ["Python"], completed: true },
    { subject: 'CSE', code: '111', credits: 2, title: 'Programning with Functions', technology: ["C#"], completed: true },
    { subject: 'WDD', code: '130', credits: 2, title: 'Web Fundamentals', technology: ["HTML", "CSS"], completed: true },
    { subject: 'WDD', code: '131', credits: 2, title: 'Dynamic Web Fundamentals', technology: ["HTML", "CSS"], completed: true },
    { subject: 'WDD', code: '231', credits: 2, title: 'Web Development Frontend I', technology: ["HTML", "Javascript", "CSS"], completed: false },
    { subject: 'CSE', code: '210', credits: 3, title: 'Programming with Classes', technology: ["HTML", "Javascript", "CSS"], completed: true },
];

const coursesContainer = document.getElementById('courses');
const creditCount = document.getElementById('total-credit');
const btnAll = document.getElementById('all');
const btnCse = document.getElementById('cse');
const btnWdd = document.getElementById('wdd');
const courseDetails = document.querySelector("#course-details");


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

        card.addEventListener('click', () => {
            displayCourseDetails(course);
        });
    });

    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    creditCount.textContent = `The total credits for the courses listed above is: ${totalCredits}`;
}

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: WEbbbbbbbbbbbbb</p>
    <p>${description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
    courseDetails.showModal();

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
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