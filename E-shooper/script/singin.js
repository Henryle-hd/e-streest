// singIn
// get DOM 
const userNameInput = document.getElementById("userNameInput");
const userEmailInput = document.getElementById("userEmailInput");
const userPasswordInput = document.getElementById("userPasswordInput");
const dpImage = document = document.getElementById("dpImage");
const dpShow = document.querySelector('.dp__form')
const userName = document.getElementById("userName");


//get, show and store username
userName.innerHTML = '@' + localStorage.getItem('userName');
userNameInput.addEventListener('keyup', getInputname);

function getInputname() {
    userName.innerHTML = '@' + userNameInput.value;
    localStorage.setItem('userName', userNameInput.value);
    localStorage.getItem('userName');
    userName.innerHTML = '@' + localStorage.getItem('userName');
}

//get and store email
localStorage.getItem('userEmail');
userEmailInput.addEventListener('keyup', getInputemail);

function getInputemail() {
    localStorage.setItem('userEmail', userEmailInput.value.toLowerCase());
    localStorage.getItem('userEmail');
}

//get and store password
localStorage.getItem('userPassword');
userPasswordInput.addEventListener('keyup', getInputpassword);

function getInputpassword() {
    localStorage.setItem('userPassword', userPasswordInput.value);
    localStorage.getItem('userPassword');
}

//get, show and store dp
var uploadedImage = "";
dpShow.style.backgroundImage = `url("${localStorage.getItem('uploadedImageStore')}")`;
dpImage.addEventListener('change', getDPshow)

function getDPshow() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploadedImage = reader.result;
        localStorage.setItem('uploadedImageStore', uploadedImage);
        dpShow.style.backgroundImage = `url("${localStorage.getItem('uploadedImageStore')}")`;
    });
    reader.readAsDataURL(this.files[0]);
};

const userInfor = {
    userName: '@' + localStorage.getItem('userName'),
    userEmail: localStorage.getItem('userEmail'),
    userPassword: localStorage.getItem('userPassword'),
    userDP: localStorage.getItem('uploadedImageStore')
};
console.log(userInfor);