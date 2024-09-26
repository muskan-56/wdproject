document.addEventListener('DOMContentLoaded', loadAttendanceRecords);

function markAttendance(event) {
    event.preventDefault();

    const studentId = document.getElementById('studentId').value;
    const course = document.getElementById('course').value;
    const attendanceDate = document.getElementById('attendanceDate').value;
    const status = document.getElementById('status').value;

    const attendanceRecord = {
        studentId,
        course,
        attendanceDate,
        status
    };

    const existingRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];

    existingRecords.push(attendanceRecord);

    localStorage.setItem('attendanceRecords', JSON.stringify(existingRecords));

    document.getElementById('attendance-form').reset();

    loadAttendanceRecords();
}

function loadAttendanceRecords() {
    const attendanceTable = document.getElementById('attendanceTable').getElementsByTagName('tbody')[0];
    attendanceTable.innerHTML = '';

    const existingRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];

    existingRecords.forEach((record, index) => {
        const newRow = attendanceTable.insertRow();
        newRow.insertCell(0).textContent = record.studentId;
        newRow.insertCell(1).textContent = record.course;
        newRow.insertCell(2).textContent = record.attendanceDate;
        newRow.insertCell(3).textContent = record.status;

        const actionsCell = newRow.insertCell(4);
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() { deleteAttendanceRecord(index); };

        actionsCell.appendChild(deleteButton);
    });
}

function deleteAttendanceRecord(index) {
    const existingRecords = JSON.parse(localStorage.getItem('attendanceRecords')) || [];
    existingRecords.splice(index, 1);
    localStorage.setItem('attendanceRecords', JSON.stringify(existingRecords));
    loadAttendanceRecords();
}
