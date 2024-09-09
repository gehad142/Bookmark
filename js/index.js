var bookMarkNameInput = document.getElementById("bookmarkName");
 var bookMarkUrlInput = document.getElementById("bookmarkURL");
 var bookMarkerContainer = [];


 if (localStorage.getItem("bookMarker") != null) {
   ///  false not found data in local -- and don't do any thing
      bookMarkerContainer = JSON.parse(localStorage.getItem("bookMarker"));
      displayData();
   }
   

 function addbookMarker(){
 var bookMarker = {
         name:bookMarkNameInput.value,
         url: bookMarkUrlInput.value

 }
 bookMarkerContainer.push(bookMarker);
 localStorage.setItem("bookMarker", JSON.stringify(bookMarkerContainer));
 displayData();
 clearForm();
 }


 function clearForm() {
    bookMarkNameInput.value = "";
    bookMarkUrlInput.value = "";
 }


 



 function displayData() {
    var cartona = "";
    for (var i = 0; i <bookMarkerContainer.length; i++) {
       cartona += `
         <tr>
         <td>  ${i}  </td>
         <td> ${bookMarkerContainer[i].name} </td>
         <td>
         <button class="btn btn-visit" onclick="visitUrl()">
                    <i class="fa-solid fa-eye pe-2"></i>Visit
                  </button>
      </td>

         <td>
         <button class="btn btn-delete pe-2" onclick="deletebookMarker(${i})" >
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                  </button>
                    </td>
      </tr>
          `;
    }
 
    document.getElementById("tableContent").innerHTML = cartona;
 }

 function deletebookMarker(elementNumber) {
bookMarkerContainer.splice(elementNumber, 1); 
   localStorage.setItem("bookMarker", JSON.stringify(bookMarkerContainer));

   displayData();
}


function visitUrl(){
   window.open(bookMarkUrlInput.value) 
}





