function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }




  const prevBtns = document.querySelectorAll(".btn-prev");
  const nextBtns = document.querySelectorAll(".btn-next");
  const progress = document.getElementById("progress");
  const formSteps = document.querySelectorAll(".form-step");
  const progressSteps = document.querySelectorAll(".progress-step");
  
  let formStepsNum = 0;
  
  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
    });
  });
  
  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      formStepsNum--;
      updateFormSteps();
      updateProgressbar();
    });
  });
  
  function updateFormSteps() {
    formSteps.forEach((formStep) => {
      formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });
  
    formSteps[formStepsNum].classList.add("form-step-active");
  }
  
  function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
      if (idx < formStepsNum + 1) {
        progressStep.classList.add("progress-step-active");
      } else {
        progressStep.classList.remove("progress-step-active");
      }
    });
  
    const progressActive = document.querySelectorAll(".progress-step-active");
  
    progress.style.width =
      ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  }


  function maskCPF(){
    var cpf = document.getElementById('cpf');
    
    if(cpf.value.length == 3 || cpf.value.length == 7) {
      cpf.value += "."
      
      
    } else if(cpf.value.length == 11){
      cpf.value += "-"
      

    } else if (cpf.value.length != null){
      cpf.classList.add("errorInput")
    }
  
    if(cpf.value.length < 14){
      cpf.classList.add("errorInput")
      
    } else{
      cpf.classList.add("confirmInput")
    }

    
    if(cpf.value == "a" || cpf.value == "b"  || cpf.value == "c" || cpf.value == "d" || cpf.value == "e" || cpf.value == "f" || cpf.value == "g" || cpf.value == "h" || cpf.value == "i" || cpf.value == "j" || cpf.value == "k" || cpf.value == "l" || cpf.value == "m" || cpf.value == "n" || cpf.value == "o" || cpf.value == "p"|| cpf.value == "q" || cpf.value == "r" || cpf.value == "s"|| cpf.value == "t" || cpf.value == "u" || cpf.value == "v" || cpf.value == "x" || cpf.value == "w"|| cpf.value == "y" || cpf.value == "z") {
      alert('[Erro] a entrada de Letras não são permitidas!!')
    }

  }

  



  function validar_Nome(){
    if(document.getElementById("nome").value.length <= 3){
      nome.classList.add("errorInput")

    }else{
      nome.classList.add("confirmInput")
    }
  }
  

  


  function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}




function validar_Email(){
  if(document.getElementById("email").value <= 3){
    email.classList.add("errorInput")

  }else{
    email.classList.add("confirmInput")
  }
}