function addFees(event) {
    event.preventDefault(); 
    const studentId = document.getElementById('studentId').value;
    const course = document.getElementById('course').value;
    const amount = document.getElementById('amount').value;
    const dueDate = document.getElementById('dueDate').value;
    const feesTable = document.getElementById('feesTable').getElementsByTagName('tbody')[0];
    const newRow = feesTable.insertRow();
    newRow.insertCell(0).textContent = studentId;
    newRow.insertCell(1).textContent = course;
    newRow.insertCell(2).textContent = amount;
    newRow.insertCell(3).textContent = dueDate;
function addFees(event) {
    event.preventDefault(); 
    const studentId = document.getElementById('studentId').value;
    const course = document.getElementById('course').value;
    const amount = document.getElementById('amount').value;
    const dueDate = document.getElementById('dueDate').value;

  
    const feeRecord = {
        studentId,
        course,
        amount,
        dueDate
    };
    const existingRecords = JSON.parse(localStorage.getItem('feesRecords')) || [];
    existingRecords.push(feeRecord);
    localStorage.setItem('feesRecords', JSON.stringify(existingRecords));
    document.getElementById('fees-form').reset();
    loadFeesRecords();
}

function loadFeesRecords() {
    const feesTable = document.getElementById('feesTable').getElementsByTagName('tbody')[0];
    feesTable.innerHTML = ''; 

    const existingRecords = JSON.parse(localStorage.getItem('feesRecords')) || [];

    existingRecords.forEach((record, index) => {
        const newRow = feesTable.insertRow();
        newRow.insertCell(0).textContent = record.studentId;
        newRow.insertCell(1).textContent = record.course;
        newRow.insertCell(2).textContent = record.amount;
        newRow.insertCell(3).textContent = record.dueDate;
        const actionsCell = newRow.insertCell(4);        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() { deleteFeesRecord(index); };
        actionsCell.appendChild(deleteButton);
    });
}

function deleteFeesRecord(index) {
    const existingRecords = JSON.parse(localStorage.getItem('feesRecords')) || [];
    existingRecords.splice(index, 1);
    localStorage.setItem('feesRecords', JSON.stringify(existingRecords));
    loadFeesRecords();
}

    const actionsCell = newRow.insertCell(4);
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-button';
    editButton.onclick = function() { editFees(newRow); };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() { deleteFees(newRow); };

    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);
    document.getElementById('fees-form').reset();
}

function editFees(row) {
    alert('Edit functionality not implemented yet!');
}

function deleteFees(row) {
    const feesTable = document.getElementById('feesTable').getElementsByTagName('tbody')[0];
    feesTable.deleteRow(row.rowIndex - 1); 
}
