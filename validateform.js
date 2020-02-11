function validate() {
			var email = document.getElementById("email").value;
			//alert(email);
			console.log(document);
			var pwd =document.getElementById("pwd").value;
			var confpwd =document.getElementById("pwd1").value;
			var fname =document.getElementById("fname").value;
			var lname =document.getElementById("lname").value;
			var code =document.getElementById("zcode").value;

			var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test("90210");
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(!email.match(mailformat))
			{
			
			alert("You have entered an invalid email address!");
			document.form1.email.focus();
			//return false;
			}
			else if(pwd.length == ""){  
			  alert("Password can't be blank.");
			  document.form1.pwd.focus();  
			  
			 }
			 else if(pwd != confpwd)
			 {
			 	alert("password doesn't match");

			 }
			else if (fname==""){  
			  alert("first Name can't be blank");  
			    document.form1.fname.focus();
			}
			else if (lname==null || lname==""){  
			  alert("last Name can't be blank");  
			   document.form1.lname.focus();
			}
			else if (!code.match(isValidZip)) {
				alert("write valid zip code");
			}
}


function add()
{
	var fnum = parseInt(document.getElementById("fnum").value);
	var snum = parseInt(document.getElementById("snum").value);
	addition = fnum+snum;
	document.getElementById("output").innerHTML = addition;

}

function sub()
{
	var fnum = parseInt(document.getElementById("fnum").value);
	var snum = parseInt(document.getElementById("snum").value);
	sub = fnum-snum;
	document.getElementById("output").innerHTML = sub;

}
function mul()
{
	var fnum = parseInt(document.getElementById("fnum").value);
	var snum = parseInt(document.getElementById("snum").value);
	mul = fnum*snum;
	document.getElementById("output").innerHTML = mul;

}
function divide()
{
	var fnum = parseInt(document.getElementById("fnum").value);
	var snum = parseInt(document.getElementById("snum").value);
	div = fnum/snum;
	document.getElementById("output").innerHTML = div;

}
