//Cau 1 => let students = JSON.parse(localStorage.getItem('list-student')) || [];

//Cau 2
function onSave() {
    validateInput();
    let errorElement = document.querySelectorAll('.error-message');

    let arrErrorElement = [];
    for (let i = 0; i < errorElement.length; i++) {
        arrErrorElement.push(errorElement[i].innerText);
    }

    let checkErrorElement = arrErrorElement.every(value => value == "");

    if (checkErrorElement) {
        let students = JSON.parse(localStorage.getItem('list-student')) || [];

        let genderCheck = document.getElementsByName('gender');
        let gender = "";
        for (let i = 0; i < genderCheck.length; i++) {
            if(genderCheck[i].checked){
                gender = genderCheck[i].value;
            }
        }

        let student = {
            fullName: document.getElementById('fullname').value , 
            email: document.getElementById('email').value , 
            phone: document.getElementById('phone').value , 
            country: document.getElementById('country').value , 
            gender: gender
        }

        students.push(student);
        localStorage.setItem('list-student' , JSON.stringify(students));
        renderStudent();
    } 
}

function renderStudent() {
    let students = JSON.parse(localStorage.getItem('list-student')) || [];
    let studentHTML = "";
    students.map((value , index) => {
        studentHTML += 
        `
            <tr>
                <td>${index + 1}</td>
                <td>${value.fullName}</td>
                <td>${value.email}</td>
                <td>${value.phone}</td>
                <td>${value.country}</td>
                <td>${value.gender}</td>
                <td>
                    <button onclick="editStudent(${index})" class="btn-edit" >Edit</button>
                    <button onclick="deleteStudent(${index})" class="btn-delete" >Delete</button>
                </td>
            </tr>
        `
    });
    document.querySelector('.list-body').innerHTML = studentHTML;
}

//Cau 3
function deleteStudent(index) {
    let students = JSON.parse(localStorage.getItem('list-student')) || [];
    students.splice(index , 1);
    localStorage.setItem('list-student' , JSON.stringify(students));
    renderStudent();
}

//Cau 4
function editStudent(index){
    let students = JSON.parse(localStorage.getItem('list-student')) || [];

    document.getElementById('fullname').value = students[index].fullName;
    document.getElementById('email').value = students[index].email;
    document.getElementById('phone').value = students[index].phone;
    document.getElementById('country').value = students[index].country;

    console.log(document.getElementsByClassName('gender'));
    console.log(students[0].gender);

    document.getElementById('index').value = index;

    document.getElementById('save').style.display = "none";
    document.getElementById('update').style.display = "inline-block";
}

function updateStudent() {
    let students = JSON.parse(localStorage.getItem('list-student')) || [];
    let index = document.getElementById('index').value;
    
    students[index] = {
        fullName: document.getElementById('fullname').value , 
        email: document.getElementById('email').value ,
        phone: document.getElementById('phone').value ,
        country: document.getElementById('country').value ,
    };

    localStorage.setItem('list-student' , JSON.stringify(students));
    renderStudent();
    
    document.getElementById('save').style.display = "inline-block";
    document.getElementById('update').style.display = "none";

    document.getElementById('fullname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('country').value = "";

}

//Cau 5 
//Cau 6 
function searchStudent() {
    let searchStudent = document.getElementById("search").value;
    renderStudentSearch(searchStudent);
}

function renderStudentSearch(searchStudent) {
    let students = JSON.parse(localStorage.getItem('list-student')) || [];

    let studentHTML = "";
    for (let index = 0; index < students.length; index++) {
        if (searchStudent == students[index].fullName) {
            studentHTML += 
            `
                <tr>
                    <td>${index + 1}</td>
                    <td>${students[index].fullName}</td>
                    <td>${students[index].email}</td>
                    <td>${students[index].phone}</td>
                    <td>${students[index].country}</td>
                    <td>${students[index].gender}</td>
                    <td>
                        <button onclick="editStudent(${index})" class="btn-edit" >Edit</button>
                        <button onclick="deleteStudent(${index})" class="btn-delete" >Delete</button>
                    </td>
                </tr>
            `
        };
    }
    document.querySelector('.list-body').innerHTML = studentHTML;
}
    

//Cau 7
function validateInput() {
    let inputElement = document.querySelectorAll('.form-input');

    for (let i = 0; i < inputElement.length; i++) {
        if (inputElement[i].value == "") { 
            inputElement[i].parentElement.querySelector('.error-message').innerText = `Cannot be left blank ${inputElement[i].id}`;
            // document.getElementsByClassName('error-message')[i].innerHTML = "Loi";
        }
        else{
            inputElement[i].parentElement.querySelector('.error-message').innerText = ``;
            // document.getElementsByClassName('error-message')[i].innerHTML = "";
        }
    }    
    
} 