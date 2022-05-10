<script>
           function email(){
           var Name = document.getElementById("Name").value;
           var EA = document.getElementById("Email").value;
           var Department = document.getElementById("Department").value;
           var Phone = document.getElementById("phone").value;
           var issue = document.getElementById("issue").value;
         
            document.location = "mailto:"+Department+"?subject=New appointment1&body="+Name+" "+EA+" "+Phone+" "+issue;
          }
          sendEmail.addEventListener('click',email);
      
          
        </script>
