//login
//get DOM 
const displayPicture = document.querySelector('.dp__form');
const userName = document.querySelector('.username__form');
const emailIn = document.getElementById('email');
const password = document.getElementById('password');
const invalidPasswordInfor = document.getElementById('invladPasswordInfor');
//if email match
const userInfor = {
    userName: '@' + localStorage.getItem('userName').replaceAll(' ', '_'),
    userEmail: localStorage.getItem('userEmail'),
    userPassword: localStorage.getItem('userPassword'),
    userDP: localStorage.getItem('uploadedImageStore')
};

emailIn.addEventListener('input', function() {
    if (emailIn.value === userInfor.userEmail) {
        userName.innerHTML = userInfor.userName;
        displayPicture.style.backgroundImage = `url("${userInfor.userDP}")`;

    } else if (emailIn.value == '') {
        userName.innerHTML = "Your Name!";
        displayPicture.style.backgroundImage = `url("${'../icon/R\ \(3\).png'}")`;
    } else {
        userName.innerHTML = "email does't match";
        displayPicture.style.backgroundImage = `url("${'../icon/R\ \(3\).png'}")`;
    }
});

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (password.value === userInfor.userPassword) {
        invalidPasswordInfor.style.display = 'none';

    } else {
        invalidPasswordInfor.style.display = 'block';
    }
})