// var nome = "Osvaldinei Oliveira";
// var n1 = 5;
// var n2 = 3;
// var frase = "Japão é o melhor time do mundo";

// console.log(n1*n2);

// console.log(frase.replace("Japão", "Brasil"));
// // alert(idade+idade2);
// // alert("Hello " + nome + "Você tem " + idade +" anos");
// //alert("Hello World JS")

// var lista = ["maçã", "pêra", "uva"];
// lista.push("laranja");
// console.log(lista[1]);
// console.log(lista);
// console.log(lista.toString);
// var fruta = [{nome:"maçã", cor:"vermelha"}, {nome:"uva",cor:"roxa"}];
// alert(fruta[1].nome);
// var fruta = {nome:"maçã", cor:"vermelha"};
// alert(fruta.nome);

// var idade = prompt("Qual a sua idade");


// if (idade >= 18){
//       alert("maior de idade");
// }else{
//       alert("menor de idade");
// }

// var count;

// while (count < 5){
//       console.log(count);
//       count++;
// }

// for(count=0; count < 5; count ++){
//       alert(count);
// }

// var d = new Date();

// alert(d.getMinutes());

// function soma(n1, n2){
//       return n1 + n2;
// }

// function validaIdade(idade){
//       var validar;
//       if(idade >= 18){
//            validar = true; 
//       }else{
//             validar = false;
//       }
//       return validar;
// }

// var idade = prompt('Qual a sua idade?');
// console.log(validaIdade(idade));


// alert(soma(5, 10));
// alert(setReplace("Vai Japão", "Japão", "Brasil"));

function clicou(){
      document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
      
      // alert("Obrigado por clicar");
}

function redirecionar(){
     window.open("https://globallabs.academy/") ;

}

function trocar(elemento){
      elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
      elemento.innerHTML = "Passe o mouse aqui";
}