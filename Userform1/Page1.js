const ui = [];
function myfunction()
{
    class user
    {
        constructor(FirstName,LastName,Education_Filed,Email,Password)
        {
            this.FirstName = FirstName;
            this.LastName = LastName;
            this.EducationFiled = Education_Filed;
            this.Email = Email;
            this.Password = Password;
        }
    }
 
    class user1 extends user
    {
        constructor(FirstName,LastName,Education_Filed,Gender,Email,Password)
        {
            super(FirstName,LastName,Education_Filed,Gender,Email,Password)
            this.Gender = Gender; 
        }

        Usershow()
        {
            ui.push(person);
            var Text = "<thread>";
            var UI = ui.length;
            var i;

            for(i=0; i<UI; i++){
                Text +=  "<tr> <td>" + ui[i].FirstName + "</td> <td>" + ui[i].LastName + "</td> <td> " + ui[i].Education_Filed + "</td> <td> " + ui[i].Gender + " </td> <td>" + ui[i].Email + "</td> <td> " + ui[i].Password + " </td></tr>";
            }
            Text += "</thread>";
            document.getElementById('UIO').innerHTML = Text;
        }
    }


    var FirstName,LastName,Education_Filed,Gender,Email,Password;
    var person = {};

    person["FirstName"] = document.getElementById('exampleInputFname1').value;
    FirstName =  person["FirstName"];

    person["LastName"] = document.getElementById('exampleInputlname1').value;
    LastName =  person["LastName"];
    
    person["Education_Filed"] = document.getElementById('exampleInputlfiled').value;
    Education_Filed = person["Education_Filed"];
    
    
    if(document.getElementById('inlineRadio1').checked){
        person["Gender"] = document.getElementById('inlineRadio1').value;
        Gender = person["Gender"];
    } else if(document.getElementById('inlineRadio2').checked){
        person["Gender"] = document.getElementById('inlineRadio2').value;
        Gender = person["Gender"];
    }else if(document.getElementById('inlineRadio3').checked){
        person["Gender"] = document.getElementById('inlineRadio3').value;
        Gender = person["Gender"];
    }
  
    person["Email"] = document.getElementById('exampleInputEmail1').value;
    Email = person["Email"];
    
    person["Password"] = document.getElementById('exampleInputPassword1').value;
    Password = person["Password"];

    if(FirstName === '' || LastName === '' || Education_Filed === '' || Gender === '' || Email === '' || Password === '') {
        alert("Some Property are Undefined!");
    }else{
        var User_recode = new Array();
        User_recode =JSON.parse(localStorage.getItem("User"))?JSON.parse(localStorage.getItem("User")):[]


        if(User_recode.some((v) => {return v.Email == Email})){
            alert("Email id is a Already Existed!")
        }else{
    
            User_recode.push({
                FirstName : FirstName,
                LastName : LastName,
                Education_Filed : Education_Filed,
                Gender : Gender,
                Email : Email,
                Password : Password
                })
                localStorage.setItem("User",JSON.stringify(User_recode));

            const myUser = new user1(FirstName,LastName,Education_Filed,Gender,Email,Password);
            myUser.Usershow();
            


    document.getElementById('exampleInputFname1').value = "";
    document.getElementById('exampleInputlname1').value = "";
    document.getElementById('exampleInputEmail1').value = "";
    document.getElementById('exampleInputPassword1').value = "";
         
    }
}

