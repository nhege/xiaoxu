function huoqu(){
	

fetch('../yulu.json')
.then(response=>{
	if(!response.ok){
		throw new Error("失败");
	}
	return response.json();
})
.then(data=>{
	const w=document.getElementById("wen");
	const h=document.getElementById("hui");
	if(data >0){
		const randm = Math.floor(Math.random()*data.length);
		const content = data[randm];
		w.innerHTML=content.ask;
		h.innerHTML=content.answer;
	}
	
})
.catch(error =>{
	console.error("获取失败```",error);
});


}
