

function creatStateOptions(){
  let states = document.getElementById('state');
  let stateOptions = ['AC', 'AL','AP', 'AM', 'BA','CE', 'DF','ES', 'GO', 'MA','MT','MS','MG','PA','PB',
            'PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO']

  for(let index= 0; index< stateOptions.length; index +=1){
    let createOptions= document.createElement('option');
    states.appendChild(createOptions).innerText= stateOptions[index];
    states.appendChild(createOptions).value = stateOptions[index];
  }
}





