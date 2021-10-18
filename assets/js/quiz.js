const questionDB = [
  {
    question: "Где вам необходимо усилить связь?",
    a: ` <div class="item">
                      <img src="assets/img/ofic-1.png" alt="">
                      <p>Офис</p>
            </div>`,
    b: `
      <div class="item">
                      <img src="assets/img/offic-2.png" alt="">
                      <p>Загородный дом</p>
                    </div>
      `,
    c: `
      <div class="item">
                      <img src="assets/img/ofic-3.png" alt="">
                      <p>Дача</p>
                    </div>
      `,
    d: `<div class="item">
                      <img src="assets/img/ofic-4.png" alt="">
                      <p>Квартира</p>
          </div>`,
    e: `                  <div class="item">
                      <img src="assets/img/ofic-5.png" alt="">
                      <p>Склад</p>
                    </div>`,
    f: ` <div class="item">
                      <img src="assets/img/ofic-6.png" alt="">
                      <p>Другое</p>
                    </div>`,
    ans: "b",
  },
  {
    question: "Какую площадь необходимо усилить?",
    a: `до 50м2`,
    b: `от 50м2 до 200м2`,
    c: `от 200м2 до 500м2`,
    d: `от 500 и выше`,
    e: `я не знаю`,
    f: ``,
    ans: "b",
  },
  {
    question: "Какой предполагаемый бюджет на усиление сигнала?",
    a: `до 15. 000`,
    b: `от 15. 000 до 30. 000`,
    c: `от 30. 000 до 50. 000`,
    d: `от 50. 000 до 100. 000`,
    e: `я не знаю`,
    f: ``,
    ans: "b",
  },
  {
    question: "Как срочно вам необходимо усилить сигнал?",
    a: `Нужно было вчера`,
    b: `Чем раньше тем лучше`,
    c: `В течении 2-ух недель`,
    d: `Без разницы`,
    e: `я не знаю`,
    f: ``,
    ans: "b",
  },
  {
    question: "Какие виды услуг вам понадобятся дополнительно?",
    a: `Видеонаблюдение`,
    b: `Домофония`,
    c: `Интернет`,
    d: `СКУД (контроль доступа)`,
    e: `Никакие услуги не нужны`,
    f: ``,
    ans: "b",
  },
];

const questionEl = document.querySelector(".qestion");
const labelA = document.querySelector(".ansa");
const labelB = document.querySelector(".ansb");
const labelC = document.querySelector(".ansc");
const labelD = document.querySelector(".ansd");
const labelE = document.querySelector(".anse");
const labelF = document.querySelector(".ansf");
const ansList = document.querySelectorAll(".ansList");
const submit = document.querySelector("#submit");
const showscore = document.querySelector("#showscore");
const questionBar = document.querySelector(".question-bar");

let countQuest = 0;
let score = 0;
// console.log(questionDB[countQuest]);
loadQuestion();
function loadQuestion() {
  const Qdb = questionDB[countQuest];
  questionEl.innerHTML = Qdb.question;
  labelA.innerHTML = Qdb.a;
  labelB.innerHTML = Qdb.b;
  labelC.innerHTML = Qdb.c;
  labelD.innerHTML = Qdb.d;
  labelF.innerHTML = Qdb.f;
  labelE.innerHTML = Qdb.e;
}
const getCheckAnswer = () => {
  let answer;
  ansList.forEach((currentAns) => {
    if (currentAns.checked) {
      answer = currentAns.id;
    }
  });
  return answer;
};
const deselectAll = () => {
  ansList.forEach((currentAns) => (currentAns.checked = false));
};
let schot = 0;
let schot2 = 20;
submit.addEventListener("click", function (e) {
  schot = schot + 20;
  if (schot == 100) {
    document.getElementById("submit").style.display = "none";
    document.querySelector(".price__footer").style.justifyContent = "center";
  }
  document.querySelector(".load").style.width = `${schot}%`;

  document.querySelector("#schot").innerHTML = `${schot}%`;
  document.querySelectorAll(".quize ul li").forEach((item) => {
    item.classList.add("custom");
  });
  document.querySelector(".quize ul").style.justifyContent = "flex-start";
  document.querySelectorAll(".quize ul li")[5].style.display = "none";
  const checkedAnswer = getCheckAnswer();
  if (checkedAnswer === questionDB[countQuest].ans) {
    score++;
  }
  countQuest++;
  deselectAll();
  if (countQuest < questionDB.length) {
    loadQuestion();
  } else {
    let wrongAwnswer = questionDB.length - score;
    showscore.innerHTML = `<form id="order" class="ebcf_modal-content">
                <h1 style="font-size:20px; color:#000;">Напишите номер телефона и зафиксируйте скидку!</h1>
                <p class="cen"></p>
                <div class="map__form boxx">
                <input type="text" name="" placeholder="Ваш телефон" required="">
                <input type="submit" name="" class="polezn__btn" value="Заказать звонок">
                </div>
                <div  style="display:flex; align-items:center"><input type="checkbox" style="width: 10px; "/> <p>С политикой конфиденциальности ознакомлен</p> </div>
              </form>`;
    showscore.classList.remove("scoreArea");
    questionBar.classList.add("hidden");
    document.body.classList.add("score-color--white");
  }
});
document.querySelectorAll(".flex_my .item").forEach((item) => {
  item.onclick = function () {
    this.classList.toggle("active");
  };
});
