
//Getting the UI elements
const form=document.querySelector("form");
const studentlist=document.querySelector("table")


//Student Class
class Students {
  constructor(name,id,email,contact) {
    this.name=name;
    this.id=id;
    this.email=email;
    this.contact=contact;
  }
}





    
// **********Add Student details********************

 function addStudentDetails(students){
  if (students.name=="" || students.id=="" || students.email=="" || students.contact=="") {
    alert("please fill in all details");
  }
  else{
    const newRow=document.createElement("tr");
    newRow.innerHTML=`<td colspan="2.5">${students.name}</td>
    <td colspan="2.5">${students.id}</td>
    <td colspan="2.5">${students.email}</td>
    <td colspan="2.5">${students.contact}</td>
    <td colspan="1"><button class="actions edit" onClick="funcEdit(this)">Edit</button></td>
    <td colspan="1"><button class="actions delete" onClick="funcDel(this)">Delete</button></td>`;
    studentlist.appendChild(newRow);

    clearFilds();
  }   
}


//*********clear fields */
function clearFilds(){
  
  document.querySelector("#studentName").value="";
  document.getElementById("studentId").value="";
  document.getElementById("studentEmail").value="";
  document.getElementById("studentContactNo").value="";
  
}

//*********Add student record on form submit  */
document.querySelector("#student-form").addEventListener('submit',
addData);

function addData(e) {
 //   // prevent the form from submitting
 e.preventDefault();  
 let name1= document.querySelector("#studentName").value;
 let id= document.getElementById("studentId").value;
 let email= document.getElementById("studentEmail").value;
 let contact= document.getElementById("studentContactNo").value;
 
 let student=new Students(name1,id,email,contact);
 
 addStudentDetails(student);
  
}

 //*************Remove Students*******************
function funcDel(e)  
{  
  var tbl = e.parentNode.parentNode.parentNode;
  var row = e.parentNode.parentNode.rowIndex;

  tbl.deleteRow(row);
}  


  //************Edit Students***************

  document.querySelector(".edit").addEventListener("click",(e)=>funcEdit)
function funcEdit(e){

    const row=e.parentNode.parentNode;
    let nameCell = row.cells[0];
    let idCell = row.cells[1];
    let emailCell = row.cells[2];
    let contactCell = row.cells[3];
 
    const currentName = nameCell.textContent; // Get current value
    const newName = prompt('Enter new value:', currentName); // Get new name from user
    const currentId = idCell.textContent; // Get current value
    const newId = prompt('Enter new value:', currentId); // Get new id from user
    const currentEmail = emailCell.textContent; // Get current value
    const newEmail = prompt('Enter new value:', currentEmail); // Get new email from user
    const currentContact = contactCell.textContent; // Get current value
    const newContact = prompt('Enter new value:', currentContact); // Get new contact from user
  

    //validating student update details for null values 
    if (newName==""|| newId=="" || newEmail=="" || newContact=="") {
      alert("Please fill in all details");
      alert("Data not updated");
    }else if(!isNaN(newName) || isNaN(newId) || !isNaN(newEmail) || isNaN(newContact)){
      alert("Please fill in correct credentials");
      alert("Data not updated");
    }else{

      nameCell.textContent=newName;
      idCell.textContent=newId;
      emailCell.textContent=newEmail;
      contactCell.textContent=newContact;
    }
 
  }
  