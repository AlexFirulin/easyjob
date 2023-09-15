<template>
  <div class="news-list">
    <div class="news-header">Новини</div>
    <div class="news-article">
      <div class="article-header">Параграф 24 у Німеччині для українців.</div>
      <div class="article-subheader">Що це та які є нюанси.</div>
      <div class="article-content">
        Параграф 24 – це закон, який регламентує перебування іноземців на території держави,
        а також подальшу процедуру інтеграції. Сюди належить і працевлаштування.
        Керівна вказівка вищого суспільства Європи про масову інтеграцію українців визначить їхню
        подальшу категорію. Якщо фізична особа потрапляє під категорію параграфа 24, вона отримає
        ВНЖ біля Німеччини. Також видається безліч дуже важливих прав для отримання всебічної
        допомоги та надається категорія «тимчасовий захист».
      </div>
      <div class="article-footer">
        <div class="article-section">Зміст:</div>
        <div class="article-section-number">1.</div>
        <div class="article-section-title">Що таке «Тимчасовий захист»?</div>
        <div class="article-section-number">2.</div>
        <div class="article-section-title">Кому належить ВНЖ Німеччини</div>
        <div class="article-section-number">3.</div>
        <div class="article-section-title">Як отримати ВНЖ за 24 параграфом</div>
      </div>
      <button class="call-to" @click="showNews()"><span class="btn-text">Читати далі</span></button>
    </div>
    <div class="news-article" v-if="showFirst">
      <div class="article-header">Що представляє собою «Тимчасовий захист»?</div>
      <div class="article-content">
        3 березня 2022 року країни Європейського Союзу прийняли рішення про надання переселенцям з території України
        статусу «тимчасового захисту» за параграфом 24. Такі умови застосовуються до всіх громадян України, які залишили
        свою країну після 24 лютого 2022 року. (Важливо зазначити, що деякі землі Німеччини закривають очі навіть на тих,
        хто виїхав до початку війни, але це вже на особистий розсуд співробітника міграційної служби, який буде вести вашу
        справу). Для отримання необхідного статусу з усіма пільгами і допомогами потрібно надати абсолютно будь-який
        документ, який засвідчує особу. Варто пам'ятати, що категорія «тимчасовий захист» - це не біженці. Тобто процес
        оформлення набагато швидший та простіший.

        <div class="article-header">Кому положено ВНЖ Німеччини</div>
        <div class="article-content">
          Параграф 24 дозволяє проживати на території країни і також претендувати на отримання ВНЖ. Розглянемо, хто
          відноситься до людей, які можуть отримати дозвіл на проживання: Українці, які мають громадянство і перебували
          вдома 24 лютого 2022 року. Сюди також відносяться мешканці, які тимчасово не знаходилися на території своєї
          країни. Люди без громадянства, а також іноземці, які проживали на території України 24 лютого 2022 року. Важливе
          правило - іноземці повинні перебувати на території ФРН за законом.

          <div class="article-header">Як отримати ВНЖ за 24 параграфом</div>
          <div class="article-content">
            Європейський Союз надає можливість отримання тимчасового виду на проживання за максимально спрощеною
            процедурою, за якою є два варіанти:
            <br>
            Найшвидший спосіб - це попросити друзів, родичів або третю особу прописати вас на території Німеччини (так,
            вам знадобиться допомога власника житла). Протягом перших двох тижнів після реєстрації ви отримаєте листа з
            міграційної служби за вказаною адресою (він автоматично генерується, як тільки вас пропишуть за конкретною
            адресою). У цьому листі буде проста анкета, яку потрібно буде заповнити, а також буде вказана дата та час
            вашої зустрічі. В середньому між реєстрацією та зустріччю проходить 3-4 тижні. Протягом цього періоду вам
            заборонено працювати або отримувати будь-які виплати від держави.
            <br>
            Якщо раніше у вас не було жодних реєстрацій в Німеччині, зустріч має виключно формальний характер. Вам
            візьмуть вашу анкету, зроблять відбитки пальців, зроблять фото та внесуть ваші дані до бази. Процедура займає
            до 15 хвилин, і по закінченні ви отримаєте документ, в якому буде зазначено, що вам присвоєно 24 параграф. В
            деяких землях вам зроблять вклейку в закордонний паспорт, а в інших - видадуть пластикову карту. Виглядають
            по-різному, але сутність одна.

            <div class="article-header">Другий спосіб більш тривалий і може зайняти до 3-4 місяців.</div>
            Якщо у вас немає в Німеччині близьких або посередника, який зможе вам допомогти з реєстрацією, вам потрібно
            звернутися до центру першої прийомки або відомства з іноземних справ. Тут необхідно буде пройти реєстрацію, а
            потім отримати допомогу. У цьому випадку вас можуть перерозподіляти по кільком таборам. За великої кількості
            проживаючих в цих таборах, параграф може затримуватися, тому намагайтеся знайти того, хто зможе вам допомогти
            особисто.
          </div>
          ...
        </div>
      </div>
    </div>
    <button><span class="btn-text">Повернутися на головну</span></button>
  </div>
</template>

<script>
export default {
  name: 'NewsList',
  data(){
    return{
      showFirst:false
    }
  },
  methods:{
    showNews(){
      this.showFirst = !this.showFirst
    }
  }
}
</script>

<style scoped>

.news-header {
  display: flex;
  align-items: center;
  padding: 20px;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: #333333;
  border-bottom: 2px solid #333333;
  margin-bottom: 20px;
}

.news-article {

  background-color: #f4f4f4;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

.article-header {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
}

.article-subheader {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 18px;
  color: #666666;
  margin-bottom: 20px;
}

.article-content {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 16px;
  color: #333333;
  line-height: 1.6;
  margin-bottom: 20px;
}

.article-footer {
  display: flex;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 16px;
  color: #666666;
}

.article-section {
  margin-right: 5px;
}

.article-section-number {
  font-weight: bold;
  margin-right: 5px;
}

.article-section-title {
  font-weight: bold;
}

.news-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.news-header {
  display: flex;
  align-items: center;
  padding: 20px;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: #333333;
  border-bottom: 2px solid #333333;
  margin-bottom: 20px;
}

.news-article {
  max-width: 80%;
  background-color: #f4f4f4;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

.article-header {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 10px;
}

.article-subheader {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 18px;
  color: #666666;
  margin-bottom: 20px;
}

.article-content {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 16px;
  color: #333333;
  line-height: 1.6;
  margin-bottom: 20px;
}

.article-footer {
  display: flex;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 16px;
  color: #666666;
}

.article-section {
  margin-right: 5px;
}

.article-section-number {
  font-weight: bold;
  margin-right: 5px;
}

.article-section-title {
  font-weight: bold;
}
.call-to{
  padding: 10px;
  margin: 15px;
}
</style>
