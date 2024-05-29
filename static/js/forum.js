const signInBtn =document.getElementById("signin");
const signUpBtn =document.getElementById("signup");
const firstForm =document.getElementById("form1");
const secondForm =document.getElementById("form2");
const container =document.querySelector(".container");

signInBtn.addEventListener("click",() =>{
    container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click",() =>{
    container.classList.add("right-panel-active");
});
    function toggleLike(button) {
        var img = button.querySelector('img');
        if (img.src.includes('like_before')) {
            img.src = '../img/forum/like_after.png'; // 替换为点赞后的图片路径
        } else {
            img.src = '../img/forum/like_before.png'; // 替换为点赞前的图片路径
        }
    }