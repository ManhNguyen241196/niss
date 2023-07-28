let dataDu41_task = data["DU42-task"];
let dataDu41_member = data["DU42-member"];

const taskBtn = document.querySelector("#task");
const content = document.querySelector("#task_content");
const responsiveTable = document.querySelector(".responsive-table");
const member = document.querySelector("#member");

let newArr = dataDu41_task.map((item) => {
  return `
  <li class="table-row">
      <div class="col col-1" data-label="Job Id">${item.STT}</div>
       <div class="col col-2" data-label="Customer Name">${item.Task}</div>
        <div class="col col-3" data-label="Amount"><a href=${item.Number}>${item.Number} </a></div>
  </li>
  
  `;
});

const dataTask = `
<li class="table-header">
<div class="col col-1">STT</div>
<div class="col col-2">Tên công việc</div>
<div class="col col-3">Link tham khảo</div>
</li>
${newArr.join(" ")}`;

responsiveTable.innerHTML = dataTask;

// member---------------
let newArr_mem = dataDu41_member.map((item) => {
  return `
    <div class="container">
    <div class="svg-background"></div>
    <div class="svg-background2"></div>
    <div class="circle"></div>

    <img class="profile-img"
       src = ${item.Avata} >
    <div class="text-container">
        <p class="title-text">${item["Họ và tên"]}</p>
        <p class="info-text">${item["Chức vụ"]}</p>
        <div class="row">
            <div class="column_left">
                <p>Nhiệm vụ</p>
            </div>
            <div class=" column_right">
                <p>${item["Nhiệm vụ"]}</p>
            </div>
        </div>
        <div class="row">
            <div class="column_left">
                <p>Trình độ tiếng Nhật</p>
            </div>
            <div class="column_right">
                <p>${item["Trình độ tiếng nhật"]}</p>
            </div>
        </div>
        <div class="row">
            <div class="column_left">
                <p>Outlook</p>
            </div>
            <div class="column_right">
                <a>${item.Outlook}</a>
            </div>
        </div>

    </div>
</div>
  
  `;
});

taskBtn.addEventListener("click", () => {
  member.classList.remove("active");
  taskBtn.classList.add("active");
  responsiveTable.innerHTML = dataTask;
});

member.addEventListener("click", () => {
  taskBtn.classList.remove("active");
  member.classList.add("active");
  responsiveTable.innerHTML = newArr_mem.join(" ");
});
