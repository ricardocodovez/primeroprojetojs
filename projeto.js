function validar(e) {
    e.preventDefault();
    let nome = document.querySelector("#nome");
    let email= document.querySelector("#email"); 
    let emailRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email);
    let message = document.querySelector("#message");
   
    if(!nome.value) {
         alert("Prencha o campo nome");
         return false;
     }
    
    if(!email.value && !emailRegex) {
         alert("Ingrese un email valido");
         return false;
     }
    
    if(!message.value) {
         alert("Prencha o campo message");
        return false;
     }
  
    console.table({
      nome: nome.value, 
      email: email.value,
      message: message.value
    });
    
    return true;
  }
  