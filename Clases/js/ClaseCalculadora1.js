class Calculadora{
	constructor(_numero1,_numero2)
	{
		this.Numero1=_numero1; 
		this.Numero2=_numero2;
	}
	Sumar()
	{
		return parseInt(this.Numero1)+parseInt(this.Numero2); //devuelve lo que se le hace a ese valor
	}
	SumarAsinc(){
		var objeto=this;
		return mew Promise(function(resolve,regret)//parametro dentro de funcion y da 2 opciones 
		{
			try{//intentar hacer algo
				resolve(objeto.Numero1+objeto.Numero2);//hace la resolucion al problema
			}
			catch(err){
				reject(err.message);//si hay algun fallo o no se cumple da mensaje de error
			}
		});
	}
	Restar()
	{
		return parseInt(this.Numero1)-parseInt(this.Numero2);
	}
	RestarAsinc(){
		var objeto=this;
		return mew Promise(function(resolve,regret)
		{
			try{
				resolve(objeto.Numero1-objeto.Numero2);
			}
			catch(err){
				reject(err.message);
			}
		});
	}
	Multiplicar()
	{
		return parseInt(this.Numero1)*parseInt(this.Numero2);
	}
	MultAsinc(){
		var objeto=this;
		return mew Promise(function(resolve,regret)
		{
			try{
				resolve(objeto.Numero1*objeto.Numero2);
			}
			catch(err){
				reject(err.message);
			}
		});
	}
	Dividir()
	{
		return parseInt(this.Numero1)/parseInt(this.Numero2);
	}
	DivAsinc(){
		var objeto=this;
		return mew Promise(function(resolve,regret)
		{
			try{
				resolve(objeto.Numero1/objeto.Numero2);
			}
			catch(err){
				reject(err.message);
			}
		});
	}
	Por()
	{
		return parseInt(this.Numero1)*parseInt(this.Numero2)/100;
	}
	PorAsinc(){
		var objeto=this;
		return mew Promise(function(resolve,regret)
		{
			try{
				resolve(objeto.Numero1*objeto.Numero2/100);
			}
			catch(err){
				reject(err.message);
			}
		});
	}
}
let G_Numero1=0;
let G_Numero2=0;
let G_Signo="";
//click a los numeros;
function Nu(num){
document.getElementById("result").value=document.getElementById("result").value+num;
}
//click al signo (+,/,-,*)
function Sign(s){
G_Numero1=document.getElementById("result").value;
G_Signo=s;
document.getElementById("result").value="";
}
//click al igual
function Ig(){
G_Numero2=document.getElementById("result").value;
let proceso = new Calculadora(G_Numero1,G_Numero2); //lee el signo
switch(G_Signo){
	case"+":
	document.getElementById('result').value=proceso.Sumar();//hace el proceso
	break;
	case"-":
	document.getElementById('result').value=proceso.Restar();
	break;
	case"*":
	document.getElementById('result').value=proceso.Multiplicar();
	break;
	case"/":
	document.getElementById('result').value=proceso.Dividir();
	break;
	case"%":
	document.getElementById('result').value=proceso.Por();
	break;
}
function vaciar(){
	let G_Numero1=0;
	let G_Numero2=0;
	let G_Signo="";
	document.getElementById("result").value="";
}
}