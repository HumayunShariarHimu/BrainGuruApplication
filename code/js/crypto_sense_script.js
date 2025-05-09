var enForm = document.querySelector("#encryptForm")

enForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  let formData = new FormData(enForm);
 let key = formData.get("key")
 let message = formData.get("message")
  let msg = encryptMe(message,key);
  document.querySelector("#en-message").value = msg;
 
}) 

 var deForm = document.querySelector("#decryptForm")

deForm.addEventListener("submit",(e)=>{
  e.preventDefault();
 let formData = new FormData(deForm);
 let key = formData.get("key")
 let encrypted = formData.get("encrypted")
  let msg = decryptMe(encrypted,key);
  document.querySelector("#de-message").value = msg; 
}) 
 
function encryptMe(mes,key) {
            return CryptoJS.AES.encrypt(mes,key);
        };

function decryptMe(mes,key) {
            var bytes = CryptoJS.AES.decrypt(mes, key);
            return bytes.toString(CryptoJS.enc.Utf8);
        };