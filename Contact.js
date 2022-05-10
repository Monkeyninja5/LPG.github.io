<script>
           function email(){
           var Name = document.getElementById('Name');
           var EA = document.getElementById('Email');
           var Department = document.getElementById('Department');
           var Phone = document.getElementById('phone');
           var issue = document.getElementById('issue');
         
            document.location = "mailto:"+Department+"?subject=New appointment1&body="+Name+" "+EA+" "+Phone+" "+issue;
          }
          sendEmail.addEventListener('click',email);
      
          
        </script>
