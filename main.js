const button = document.querySelector("button");
const container = document.getElementById("container");
const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  //اضافة مهمة جديدة
  const task = `<div class="task">
  <span class="icon-star icon"></span>
  <p lang = "ar" class="pr"> ${input.value} </p>
  <div>
    <span class="icon-trash icon"></span>
    <span class="icon-angry2 icon"></span>
  </div>
  <!--<span class="icon-heart"></span>-->
</div>`;

  container.innerHTML += task;
  input.value = ""; // لجعل حقل الادخال فارغ بعد الكتابة
});
container.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    //مسح مهمة
    case "icon-trash icon":
      eo.target.parentElement.parentElement.remove();
      break;

    //اضافة مفضلة delete angry icon & show heart icon
    case "icon-angry2 icon":
      eo.target.classList.add("dn");
      // شطب المهمة المكتملة واضافة ايقونة القلب text-decoration-line
      eo.target.classList.add("dn");
      // شطب المهمة المكتملة واضافة ايقونة القلب text-decoration-line
      const addheart = `<span class="icon-heart"></span>`;
      eo.target.parentElement.parentElement
        .getElementsByClassName("pr")[0]
        .classList.add("done");
      //اضافة ايقونة القلب
      eo.target.parentElement.innerHTML += addheart;
      break;

    //حذف خط شطب امهمة المكتملة
    case "icon-heart":
      const heart = `<span class="icon-heart"></span>`;
      eo.target.parentElement.parentElement
        .getElementsByClassName("pr")[0]
        .classList.remove("done");
      eo.target.classList.add("dn"); // حذف ايقوة القلب بطريقة اضافة كلاس display none
      const angry = `<span class="icon-angry2 icon"></span>`;
      eo.target.parentElement.innerHTML += angry;
      break;

    ///زر المفضلة
    case "icon-star icon":
      eo.target.classList.add("orange");
      container.prepend(eo.target.parentElement);
      break;

    //جعل المهمة غير مفضلة
    case "icon-star icon orange":
      eo.target.classList.remove("orange");
      container.append(eo.target.parentElement);
      break;

    default:
      break;
  }
});
