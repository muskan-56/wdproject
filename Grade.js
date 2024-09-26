function addGrade(event) {
    event.preventDefault(); 
    const studentId = document.getElementById('studentId').value;
    const course = document.getElementById('course').value;
    const examDate = document.getElementById('examDate').value;
    const grade = document.getElementById('grade').value;

    const gradeTable = document.getElementById('gradeTable').getElementsByTagName('tbody')[0];
    const newRow = gradeTable.insertRow();

    newRow.insertCell(0).textContent = studentId;
    newRow.insertCell(1).textContent = course;
    newRow.insertCell(2).textContent = examDate;
    newRow.insertCell(3).textContent = grade;

    const actionsCell = newRow.insertCell(4);
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.onclick = function() { editGrade(newRow); };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() { deleteGrade(newRow); };

    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    document.getElementById('grade-form').reset();
}

function editGrade(row) {
    alert('Edit functionality not implemented yet!');
}

function deleteGrade(row)
 {

    const gradeTable = document.getElementById('gradeTable').getElementsByTagName('tbody')[0];
    gradeTable.deleteRow(row.rowIndex - 1); 
}
