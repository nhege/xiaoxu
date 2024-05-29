
function change(){
	alert("test");
	var i=prompt("","输入修改的课程");
	document.getElementById("oo").innerHTML=i;
}
function nt(){
	document.getElementById("noon").innerHTML="10:45 <br />/  <br>11:15";
}
function ny(){
	document.getElementById("noon").innerHTML="10:45 <br />/  <br>11:35";
}
document.addEventListener("DOMContentLoaded", function(event) {fonz();});

function determineWeek() {
    var date = new Date();
    var weekNumber = Math.ceil((date.getDate() - (date.getDay() + 6) % 7) / 7);
    
    if (weekNumber % 2 === 0) {
        document.addEventListener("DOMContentLoaded", function(event) {nt();});
    } else {
        document.addEventListener("DOMContentLoaded", function(event) {ny();});
    }
}
determineWeek()

//https://tuapi.eees.cc/api.php?category=dongman&type=302&px=pc   图片api
/*
function yu(){
	fetch('https://v1.hitokoto.cn')
	  .then(response => response.json())
	  .then(data => {
	    const hitokoto = document.querySelector('#hitokoto')
	    hitokoto.href = `https://hitokoto.cn/?uuid=${data.uuid}`
	    hitokoto.innerText = data.hitokoto
	  })
	  .catch(console.error);
}
yu();
*/



function fetchDataAndUpdateContent() {
    fetch('https://v1.hitokoto.cn/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            document.getElementById('sx').textContent = data.hitokoto;
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}

// 当页面加载完成时，调用函数
window.onload = () => {
    fetchDataAndUpdateContent();
};

