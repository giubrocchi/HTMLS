function calcular(){
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var media = Math.sqrt(nota1*nota2);
  var media = (Math.round(media*100))/100;
  if(media>=5)
    document.getElementById("resultado").value = ("Media " + media + " - Aprovado!");
  else
    document.getElementById("resultado").value = ("Media " + media + " - Reprovado!");
}
