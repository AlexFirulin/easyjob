<template>
  <div class="main-page">
    <div class="main-wrapper">
      <div class="agency-name">
        <div class="name-text">
          <span class="name-comp">EasyJob</span>
        </div>
        <div class=""><span class="name"></span></div>
        <div class="name-contacts">
          <a href="tel:+4915111032160" class="tel-num"><span>+4915111032160</span></a>
          <a href="https://www.facebook.com/groups/2216498172073103" class="faceb"><span class="faceb-name">Facebook</span></a>
        </div>
      </div>
      <div class="header">
        <div><span class="header-text">Робота за кордоном - це не складно</span></div>
      </div>

 <nav class="navigation">
        <ul class="nav-list">
          <li class="nav-item" @click="showVac"><a class="nav-link"><span class="nav-text">Вакансіі</span></a></li>
          <li class="nav-item"><a href="" class="nav-link"><span class="nav-text">Послуги</span></a></li>
          <li class="nav-item"><a href="" class="nav-link"><span class="nav-text">Про компанію</span></a></li>
          <li class="nav-item"><router-link to="/news"><span class="nav-text">Новини</span></router-link></li>
          <li class="nav-item" @click.prevent="showContacts"><a href="/" class="nav-link"><span class="nav-text">Контакти</span></a></li>
        </ul>
      </nav>
      <div class="separator"></div>
    </div>
    <suspense>
    <work-list v-if="showJob"></work-list>
    <div class="main-page-content" v-else>
      <span class="main-info-title">
        Ласкаво просимо до "EASYJOB" – вашого надійного партнера у пошуку роботи та кар'єрного зростання в Німеччині!<br>
        <p>
  Наша місія - допомогти співвітчизникам з України знайти якісні та перспективні робочі місця на німецькому ринку праці. Ми розуміємо, наскільки важливо мати стабільну та задовільну роботу за кордоном, тому надаємо вам широкий спектр послуг та ресурсів для досягнення цієї мети.
</p>

</span>
<span>
  <p class="main-info-resp">Наші переваги:</p>
  <ul>
    <li class="nain-info-item">Персональний підхід: Ми віримо, що кожен кандидат унікальний, тому надаємо індивідуальну консультацію та підбір вакансій відповідно до ваших здібностей та бажань.</li>
    <li class="nain-info-item">Широка мережа партнерів: Ми співпрацюємо з найкращими роботодавцями в різних галузях, що дозволяє нам забезпечити доступ до різноманітних робочих вакансій.</li>
    <li class="nain-info-item">Підтримка на всіх етапах: Ми допомагаємо не лише з пошуком роботи, а й надаємо підтримку з оформлення документів, підготовки до співбесід, адаптації до нового середовища та багато іншого.</li>
    <li class="nain-info-item">Навчання та розвиток: Ми пропонуємо можливості для професійного зростання через навчання та підвищення кваліфікації, щоб ви могли досягти нових вершин у вашій кар'єрі.</li>
    <li class="nain-info-item">Культурна спільнота: Ми розуміємо, як важливо мати підтримку у новій країні. Наша спільнота українців в Німеччині допоможе вам швидше адаптуватися та знайти нових друзів.</li>
    <li class="nain-info-item">Нехай ваша робоча мрія стане реальністю з "EASYJOB"! З нами ви не лише знайдете роботу, а й зможете побудувати успішну кар'єру в Німеччині. Запрошуємо вас приєднатися до нашої спільноти та розпочати новий етап у вашому житті вже сьогодні.</li>
  </ul>
      </span>
      <div class="action-btn">
      <button class="call-to-action" @click="showVac"><span class="btn-text">Переглянути вакансіі</span></button>
      <button class="call-to-action" @click="showContacts"><span class="btn-text">Дзвоніть одразу</span></button>
    </div>

  </div>
</suspense>
  <div class="popup" v-if="showContact">
    <div class="popup-content">
      <div class="popup-content-text">+4915111032160</div>
      <div class="popup-content-text"> або звертайтесь в нашу групу в</div>
      <a class="popup-content-text" href="https://www.facebook.com/groups/2216498172073103"><span class="fb-small">Facebook</span></a>
        </div>
        <button class="call-to-call" @click="showContacts"> <span>X</span></button>
  </div>
</div>
</template>

<script setup>
import WorkList from '@/views/WorkList.vue';
import { ref } from 'vue';

const showJob = ref(false);
const showContact = ref(false);

const showVac = () => {
  showJob.value = !showJob.value;
};

const showContacts = () => {
  showContact.value = !showContact.value;
};
</script>

<style scoped>
.main-page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f7f7f7;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #f5f9fc;
  gap: 40px;
}

.agency-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  border: 1px solid #0072c6;
  background: #ffffff;
  box-shadow: 0px 5px 25px 0px rgba(239, 232, 232, 0.2);
}
.name-comp{
  font-family: 'Rubik', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #3498db; /* Ваш колір */
  text-transform: uppercase;
  letter-spacing: 1px;
}
.faceb{
  text-decoration: none;
}
.faceb-name{
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #3498db;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.tel-num{
  text-decoration: none;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 325;
  line-height: 95%;
  letter-spacing: 2.32px;
  color: #333333;
}
.name {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 325;
  line-height: 95%;
  letter-spacing: 2.32px;
  color: #333333;
}
.name-contacts{
  display: flex;
  flex-direction: column;

}

.header-text {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 325;
  line-height: 95%;
  letter-spacing: 1rem;
  color: #333333;
}

.header {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 20px;
}

.navigation {
  display: flex;
  justify-content: center;
  margin: 10px auto;
  border-radius: 15px;
  background-color: #0072c6; /* Темно-синий цвет */
  box-shadow: 0px 5px 25px 0px rgba(239, 232, 232, 0.2);
}

.nav-list {
  display: flex;
  align-items: center;
  padding: 10px;
}

.nav-item {
  list-style: none;
  padding: 15px 20px 15px 18px;
}

.nav-item:hover {
  background: #004e8a;
}

.nav-link {
  text-decoration: none;
  cursor: pointer;
}

.nav-text {
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 325;
  line-height: 95%;
  letter-spacing: 1px;
  color: #ffffff;
}

.main-page-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;
  width: 70%;
}

.main-info-title,
.nain-info-item {
  text-align: left;
  font-family: 'Instrument Sans';
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -.52px;
  line-height: 120%;
  margin: 30px 0;
  color: #222222;
}

.action-btn {
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  justify-content: space-around;
}

.call-to-action {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 20px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(to right, #4caf50, #2196f3); /* Зеленый и синий оттенки */
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  transition: .5s;
  cursor: pointer;
}
.main-info-resp{
  font-family: 'Instrument Sans';
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -.52px;
  line-height: 120%;
  margin: 30px 0;
  color: #222222;

}
.separator {
  width: 100%;
  height: 1px;
  background-color: #0072c6;;
  margin: 20px 0;
}
.popup{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 30%;
  background: #3c3838;
  color: #dedede;
  padding: 15px;
  border-radius: 15px;
}
.popup-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: inherit;
}
.popup-content-text{
  font-family: 'Instrument Sans';
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -.52px;
  line-height: 120%;
  text-decoration: none;
  color: #dedede;
}
.call-to-call{
  margin: 10px auto;
  padding: 10px 10px ;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
.fb-small{
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  font-weight:400;
  color: #3498db;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
}
</style>