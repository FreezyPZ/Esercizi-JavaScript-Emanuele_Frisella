
    
      let uname = document.querySelector("#fname");
      let lname = document.querySelector('#lname');
      let scelta = document.querySelector('#scelta')
      let submit =  document.querySelector('#btn')

      function send() {
        console.log(uname.value);
        console.log(lname.value);
        console.log(scelta.value);
      }

      submit.addEventListener("click",send)