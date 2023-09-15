<template>
  <div class="work-list">
    <div class="work-card" v-for="work in works" :key="work.id" @click="openPopup(work)">
      <div class="work-img-card">
        <img load="lazy" :src="getImgUrl()" alt="работа в германии" class="work-img">
      </div>
      <div class="work-card-body">
        <div class="job-info-top">
          <div class="job-info-name"><span class="work-text">{{ work.vacancy_name }}</span></div>
          <div class="job-info-price"><span class="work-text">{{ work.vacancy_sallary }} euro</span></div>
        </div>
        <div class="add-info" v-for="info in additionalInfo(work)" :key="info">
          <span class="work-text">{{ info }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQueryJobs } from '@/firebase/jobportal.js';
import { ref, watch } from 'vue';

const job = useQueryJobs();
watch(job, (val) => {
  works.value = JSON.parse(JSON.stringify(val));
});

const selectedWork = ref(null);
const works = ref([]);
const getImg = 'src/assets';

const openPopup = (work) => {
  selectedWork.value = work;
};

const getImgUrl = () => `${getImg}/worker.jpg`;

const additionalInfo = (work) => {
  const { vacancy_location, vacancy_brutto, work_hours, vacancy_male } = work;
  return [vacancy_location, vacancy_brutto, work_hours, vacancy_male, 'За повною інформацією звертайтесь до менеджера'];
};

// const closePopup = () => {
//   selectedWork.value = null;
// };
</script>
<style scoped>
.work-list {
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  background: linear-gradient(to bottom left, #f8f9fa, #ced1ea);
  width: 70%;
  margin: 30px auto;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.work-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 33%;
  margin: 10px;
  background-color: #fff;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
}

.work-card:hover {
  box-shadow: 5px 5px 10px rgba(29, 163, 207, 0.5);
}

.work-img-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.work-img {
  width: 100%;
  max-height: 100%;
  border-radius: 10px;
}

.work-card-body {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
  gap: 10px;
}

.job-info-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.job-info-name,
.job-info-price {
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
  font-weight: 500;
}

.job-info-price {
  color: #e74c3c;
}

.work-text {
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  font-weight: 300;
}

.add-info {
  font-size: 12px;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  overflow: auto;
}

.work-photo {
  max-width: 100%;
  height: auto;
  padding: 15px;
}

.close-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #e74c3c;
  color: white;
  font-family: 'Rubik', sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.close-button:hover {
  background-color: #c0392b;
}
</style>