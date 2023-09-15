import { db } from "./firebase";
import { collection , setDoc , doc, getDoc, getDocs, query , onSnapshot } from "firebase/firestore";
import { ref, onUnmounted } from 'vue'
export const jobsData = async()=>{
  const jobsRef = collection(db, "FirstCollection")
  await Promise.all([
    setDoc(doc(jobsRef, "FirstJob"),{}),
    setDoc(doc(jobsRef, "SecondJob"),{})
  ])
}

export const fetchAlljobs = async()=>{
  const jobsRef =collection(db, "FirstCollection")
  const result = await getDocs(jobsRef)
 logResult(result)
}
export const QueryJobs = async()=>{
  const jobsRef =collection(db, "FirstCollection")
  const q = query(jobsRef)
  const result = await getDocs(q)
  logResult(result)
}

const logResult = (result)=> result.forEach(
  doc=> console.log({
    ...doc.data()
  })
)
export const exportJob =async ()=>{
  const jobFetch = doc(db,"FirstCollection","FirstJob")
  const jobDoc = await getDoc(jobFetch)
  if(jobDoc.exists()){
    console.log({
      ...jobDoc.data()
    })
  } else{
    console.log("bad")
  }

  return jobDoc
}
export const watchDocument =async ()=>{
  onSnapshot(
    doc(db, "FirstCollection"),
    (doc)=>console.log(doc.data())
  )
}

export const useQueryJobs = ()=>{
  const jobs = ref([])
  const q = query(
    collection(db,"FirstCollection")
  )
  const unsub = onSnapshot(q, (snapshot)=>{
    jobs.value = snapshot.docs.map(
      doc=>({
        ...doc.data()
      })
    )
  })
  onUnmounted(unsub)
  return jobs
}