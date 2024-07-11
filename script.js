 //VAIABLES

 //string

const name="katana";
console.log(name);
  
//boolean

let isStudent=true;
console.log(isStudent);


//number

let age=20;
console.log(age);


//array
let students=["katana","Anne","Angie","Becky","Tsofa"];
console.log(students);


//object
const student = {
    FirstName: "katana", 
    Course: "web",
    Period: 6, 
  };
  console.log(student);
  


  //CALL  FUNCTIONS 

 // add
 function add(a,b){
    return a+b;
    }
    console.log(add(60,30));
    


  //subtract
  function subtract(a,b){
    return a-b;
    }
    console.log(subtract(60,30));
    



  //divide
  function divide(a,b){
    return a/b;
    }
    console.log(divide(60,30));
    


  //multiply.
  function multiply(a,b){
    return a*b;
    }
    console.log(multiply(60,30));
    


    //print output and debug code.




    //DOM Manipulation

    document.getElementsById ("btnUpdate").addEventListener("click", function() {
      let userinput= documentgetElementById("userinput").value;
      document.getElementById("text").textContent = userInput;
    });

    document.getElementById("btnShow").addEventListener("click", function() {
  document.getElementById("toggleText").style.display ="block"});


  document.getElementById("btnHide").addEventListener("click",function () {
    document.getElementById("toggleText").style.display ="none" ;});
  



    //Interactive Charts and Graphs


const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Type of chart
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // Labels
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3], // Data
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


