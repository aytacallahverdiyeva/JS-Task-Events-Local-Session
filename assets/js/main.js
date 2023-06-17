// const incrementBtn = document.querySelector('#increment');
// const decrementBtn = document.querySelector('#decrement');
// const removeBtn = document.querySelector('#clear');

// let counter = 0;

// let counterLocal = localStorage.getItem('counter');

// if (counterLocal) {
//   document.querySelector('#count').innerText = counterLocal;
// }

// const ???????????????

// const increment = () => {
//   counter++;
//   localStorage.setItem('counter', counter);
//   sessionStorage.setItem('count', 1);
// };

// const decrement = () => {
//   counter--;
//   localStorage.setItem('counter', counter);
// };

// incrementBtn.addEventListener('click', () => {
//   increment();
//   let counterLocal = localStorage.getItem('counter');
//   document.querySelector('#count').innerText = counterLocal;
// });

// decrementBtn.addEventListener('click', () => {
//   if (counter > 0) {
//     decrement();
//   } else {
//     alert('Mehsul elave edin');
//   }
//   let counterLocal = localStorage.getItem('counter');
//   document.querySelector('#count').innerText = counterLocal;
// });

// removeBtn.addEventListener('click', () => {
//   localStorage.removeItem('counter');
//   location.reload();
// });








//*button 
const registerBtn = document.querySelector('#register-button')

const data = []
//*constructor here
class Person {
  constructor(name, surname, password){
    this.name = name,
    this.surname = surname,
    this.password = password
  }
}

registerBtn.addEventListener('click', ()=>{
  if(document.querySelector(".user-name").value.trim() !="" && 
    document.querySelector(".user-surname").value.trim() !="" && 
    document.querySelector(".user-password").value.trim() !=""){

    const userName = document.querySelector(".user-name").value.trim()
    const userSurname = document.querySelector(".user-surname").value.trim()
    const userPassword = document.querySelector(".user-password").value.trim()
            
            let ktoto = new Person(userName,userSurname,userPassword)
            data.push(ktoto)
            console.log(data)
            document.querySelector(".user-name").value = ""
            document.querySelector(".user-surname").value = ""
            document.querySelector(".user-password").value = ""
            
            localStorage.setItem("userData",JSON.stringify(data))
        }else{
            alert("Xanalari bos saxlamayin!")
        }
} )