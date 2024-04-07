
function  updateCourseTable()  {
     //  获取课程表表格  body  元素
     const  courseTableBody  =  document.getElementById("courseTable");

     //  模拟课程表数据
     const  courseData  =  [
         {  time:  "8:00-8:40",  day:  "周一",  subject:  "前端"  },
         {  time:  "8:50-9:30",  day:  "周一",  subject:  "语文"  },
         //  ...  更多课程数据
     ];

     //  动态生成课程表表格内容
     courseData.forEach(item  =>  {
         const  tr  =  document.createElement("tr");

         const  tdTime  =  document.createElement("td");
          tdTime.textContent  =  item.time;
          tr.appendChild(tdTime);

         const  tdDay  =  document.createElement("td");
          tdDay.textContent  =  item.day;
          tr.appendChild(tdDay);

         const  tdSubject  =  document.createElement("td");
          tdSubject.textContent  =  item.subject;
          tr.appendChild(tdSubject);

         courseTableBody.appendChild(tr);
     });
}

//  初始化课程表数据
updateCourseTable();
