import { getStudents } from "./students.mjs";
const bios = {
    mrsChipetu:"Mrs. Chipetu is a passionate educator who inspires students to express their creativity, imagination, and critical thinking through the arts. With an engaging hands-on teaching style, she guides learners in exploring visual arts, design, and self-expression, fostering a vibrant studio environment where every student’s voice can shine.",
    mrsSloane:"Mrs. Sloane brings practical knowledge and dynamic energy to the commercial department, teaching subjects like business studies, accounting, and economics. She focuses on helping students build strong analytical skills, financial literacy, and an understanding of modern commerce to prepare them for successful academic and professional futures.",
    mrEnstein:"Mr. Einstein brings curiosity and discovery into the classroom through interactive science lessons and hands-on experiments. Dedicated to making complex scientific principles clear and accessible, he encourages students to ask big questions, solve problems logically, and appreciate the impact of science in the modern world."
}

const modal = document.createElement("dialog");
modal.className = "stats-modals";
modal.innerHTML = `
<div class="modal-header">
        <h2 class="modal-title"></h2>
        <button class="modal-close" aria-label="Close">&times;</button>
    </div>
    <div class="modal-body">
        <p class="modal-content"></p>
        <p class="modal-subjects"></p>

    </div>
`;

document.body.appendChild(modal);

const modalTitle = modal.querySelector(".modal-title");
const modalContent = modal.querySelector(".modal-content");
const modalSubjects = modal.querySelector(".modal-subjects");
const closeBtn = modal.querySelector(".modal-close");

export function displayModal() {
    document.querySelectorAll(".teacher-stats").forEach((btn) => {
        btn.addEventListener("click", async () => {
            const teacher = btn.dataset.teacher;
            const teacherClass = btn.dataset.class;

            const responseData = await getStudents();
            
            modalTitle.textContent = `${teacher}`;
            const allSubjects = responseData.subjects[0];
            
            modalSubjects.innerHTML = `<strong>Teaching subjects: </strong>${(allSubjects[teacherClass]).join(", ")}`;


            if(teacherClass === "4A"){
                modalContent.textContent = `${bios.mrsChipetu}`;

                
            }else if(teacherClass === "4B"){
                modalContent.textContent = `${bios.mrsSloane}`;
            }else{
                modalContent.textContent = `${bios.mrEnstein}`;
            }

            
            
            modal.showModal();
        });
    });

    closeBtn.addEventListener("click", () => modal.close());

    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.close();
    });
}
