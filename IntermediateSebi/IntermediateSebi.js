    for (var i = 0; i < json.length; i++) {
        document.getElementsByClassName('LOOP')[0].innerHTML+="<tr>";
        document.getElementsByClassName('LOOP')[0].innerHTML+="<table border='4' width=100 >";
        document.getElementsByClassName('LOOP')[0].innerHTML+="<tr><td><b>UnigueId</b></td><td width=50>" + json[i].UniqueID + "</td></tr>";
        document.getElementsByClassName('LOOP')[0].innerHTML+="<tr><td><b>Firstname</b></td><td width=50>" + json[i].Firstname + "</td></tr>";
        document.getElementsByClassName('LOOP')[0].innerHTML+="<tr><td><b>Lastname</b></td><td width=50>" + json[i].Lastname + "</td></tr>";
        document.getElementsByClassName('LOOP')[0].innerHTML+="<tr><td><b>Emailaddress</b></td><td width=50>" + json[i].emaiaddress + "</td></tr>";
        document.getElementsByClassName('LOOP')[0].innerHTML+="<tr><td><b>Jobtitle</b></td><td width=50>" + json[i].Jobtitle + "</td></tr>";
        document.getElementsByClassName('LOOP')[0].innerHTML+="<tr><td><b>Salary</b></td><td width=50>" + json[i].Salary + "</td></tr>";
        document.getElementsByClassName('LOOP')[0].innerHTML+="</table>";
        document.getElementsByClassName('LOOP')[0].innerHTML+="</tr>";
    }
   
