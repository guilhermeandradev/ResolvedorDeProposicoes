function receiveData(){
    let string = document.getElementById("proposicao").value;
    validateString(string);
}
function parearSimbolosIndo(simbolo,string,index){
    let isValid = true;
    for(let i = index+1;i<=string.length;i++){
        if( (simbolo=='(' && string[i] == ')') || (simbolo=='<' && string[i]=='>')){
        break
        }else if( simbolo == string[i]){
            isValid = parearSimbolosIndo(simbolo,string,i);
            if(!isValid){
                break
            }
        }else if(string[i] == undefined){
            alert("Formatação incorreta");
            isValid = false;
        }   
    }
    return isValid;
}
function parearSimbolosVolt(simbolo,string,index){
    let isValid = true;
    for(let i = index-1;i>=-1;i--){
        if( (simbolo==')' && string[i] == '(')){
            break
        }else if( simbolo == string[i]){
            isValid = parearSimbolosVolt(simbolo,string,i);
            if(!isValid){
                break
            }
        }else if(string[i] == undefined){
            alert("Formatação incorreta");
            isValid = false;
        }
    }
    return isValid
}
function validateString(string){
    let values = "^v<>()~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let isValid = true;
    for(let i =0;i<string.length;i++){
        if( !values.includes(string[i])){
            alert("Formatação incorreta");
            break;
        }else if(string[i]=='(' || string[i] == '<'){
            console.log('indo')
            isValid = parearSimbolosIndo(string[i],string,i);
            if(!isValid) break;
           
        }else if(string[i]==')' || string[i] == '>'){
            console.log('volt')
            isValid = parearSimbolosVolt(string[i],string,i);
            if(!isValid) break;
        }
    }
    solveString(string);
}
function solveString(string){

    //Código de resolução do tableaux

}