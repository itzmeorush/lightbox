let fullImg = document.getElementById('full-img');
let fullImgBox = document.getElementById('full-imgBox');


function openImg(pic){
        fullImgBox.style.display = 'flex';
        fullImg.src = pic;
}

function closeImg(){
    fullImgBox.style.display = 'none';
}

setTimeout(()=>{
    alert('Developed by Mr_deepanshu');
},2000)

