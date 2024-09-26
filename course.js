const courses = [];
const classes = [];


function addCourse(event) {
    event.preventDefault(); 

    const courseName = document.getElementById('courseName').value;
    const courseCode = document.getElementById('courseCode').value;
    const courseDuration = document.getElementById('courseDuration').value;
    const courseInstructor = document.getElementById('courseInstructor').value;

    const course = {
        name: courseName,
        code: courseCode,
        duration: courseDuration,
        instructor: courseInstructor
    };

    courses.push(course);
    updateCoursesTable();
    updateClassesDropdown();
    document.getElementById('course-form').reset(); 
}


function updateCoursesTable() {
    const tableBody = document.querySelector('#coursesTable tbody');
    tableBody.innerHTML = ''; 

    courses.forEach((course, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.name}</td>
            <td>${course.code}</td>
            <td>${course.duration}</td>
            <td>${course.instructor}</td>
            <td>
                <button class="edit-button" onclick="editCourse(${index})">Edit</button>
                <button class="delete-button" onclick="deleteCourse(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}
function editCourse(index) {
    alert('Edit functionality is not implemented yet.');
}
function deleteCourse(index) {
    courses.splice(index, 1);
    updateCoursesTable();
    updateClassesDropdown();
}

function addClass(event) {
    event.preventDefault();

    const classCourse = document.getElementById('classCourse').value;
    const classDate = document.getElementById('classDate').value;
    const classTime = document.getElementById('classTime').value;

    const classEntry = {
        course: classCourse,
        date: classDate,
        time: classTime
    };

    classes.push(classEntry);
    updateClassesTable();
    document.getElementById('class-form').reset();
}
function updateClassesTable() {
    const tableBody = document.querySelector('#classesTable tbody');
    tableBody.innerHTML = ''; 

    classes.forEach((classEntry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${classEntry.course}</td>
            <td>${classEntry.date}</td>
            <td>${classEntry.time}</td>
            <td>
                <button class="edit-button" onclick="editClass(${index})">Edit</button>
                <button class="delete-button" onclick="deleteClass(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}
function editClass(index) {
    alert('Edit functionality is not implemented yet.');
}
function deleteClass(index) {
    classes.splice(index, 1);
    updateClassesTable();
}
function updateClassesDropdown() {
    const classCourseSelect = document.getElementById('classCourse');
    classCourseSelect.innerHTML = '<option value="" disabled selected>Select Course</option>'; 

    courses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.code;
        option.textContent = course.name;
        classCourseSelect.appendChild(option);
    });
}
