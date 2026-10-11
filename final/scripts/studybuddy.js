import { allStudents,topStudents,classMates } from "./students.mjs";
import { checkLogin } from "./auth-check.mjs";
import { displayModal } from "./modal.mjs";
import { footer } from "./footer.mjs";

allStudents();
topStudents();
classMates();
checkLogin();
displayModal();