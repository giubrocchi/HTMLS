function iniciar(){
  for(i=1; i<=100; i++)
  {
    if(i%3==0 && i%5==0)
      document.getElementById("resultado").value = document.getElementById("resultado").value + "\n" + "FooBar";
    else if(i%3==0 && i%5!=0)
      document.getElementById("resultado").value = document.getElementById("resultado").value + "\n" + "Foo";
    else if(i%3!=0 && i%5==0)
      document.getElementById("resultado").value = document.getElementById("resultado").value + "\n" + "Bar";
    else
      document.getElementById("resultado").value = document.getElementById("resultado").value + "\n" + i;
  }
}
