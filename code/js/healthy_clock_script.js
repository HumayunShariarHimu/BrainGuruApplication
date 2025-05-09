const routine = [
  { time: "06:00", activity: "জাগরণ: পানি পান করুন, শরীর টানুন, এবং মননশীল সময় উপভোগ করুন।" },
  { time: "06:30", activity: "সুস্থ প্রাতঃরাশ: একটি সুষম খাবার গ্রহণ করুন।" },
  { time: "07:00", activity: "শারীরিক ব্যায়াম: এন্ডরফিন বাড়াতে ব্যায়াম করুন।" },
  { time: "08:00", activity: "গোসল ও পোশাক: নিজেকে দিনটির জন্য প্রস্তুত করুন।" },
  { time: "08:30", activity: "কেন্দ্রভিত্তিক কাজ: চ্যালেঞ্জিং কাজ শুরু করুন।" },
  { time: "10:30", activity: "ছোট বিরতি: বাইরে যান বা হালকা নাস্তা করুন।" },
  { time: "11:00", activity: "কাজ/পড়াশোনা: মাঝারি স্তরের কাজে মনোযোগ দিন।" },
  { time: "12:00", activity: "দুপুরের খাবার: পুষ্টিকর এবং সুষম খাবার গ্রহণ করুন।" },
  { time: "12:30", activity: "বিশ্রাম: একটু ঘুমিয়ে নিন বা বই পড়ুন।" },
  { time: "13:00", activity: "সমষ্টিগত কাজ: দলীয় কাজ বা মিটিংয়ে মনোযোগ দিন।" },
  { time: "15:00", activity: "চলাফেরা বিরতি: শরীর টানুন বা হালকা হাঁটুন।" },
  { time: "15:30", activity: "কাজ/পড়াশোনা: হালকা কাজ শেষ করুন বা মনোযোগ দিন।" },
  { time: "17:00", activity: "পরিকল্পনা: আগামী দিনের প্রস্তুতি নিন।" },
  { time: "18:00", activity: "সন্ধ্যার ব্যায়াম: হালকা শরীরচর্চা করুন।" },
  { time: "19:00", activity: "রাতের খাবার: হালকা এবং পুষ্টিকর খাবার গ্রহণ করুন।" },
  { time: "20:00", activity: "আরাম সময়: শখ বা বই পড়ায় সময় কাটান।" },
  { time: "21:00", activity: "পরিবার/সামাজিকতা: প্রিয়জনদের সঙ্গে সময় কাটান।" },
  { time: "21:30", activity: "রাত্রিকালীন রুটিন: শান্তিময় অভ্যাসে নিয়োজিত হোন।" },
  { time: "22:00", activity: "ঘুম: ৭-৯ ঘণ্টা ঘুম নিশ্চিত করুন।" },
];

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const currentTime = 
    String(hours).padStart(2, "0") + ":" + 
    String(minutes).padStart(2, "0") + ":" + 
    String(seconds).padStart(2, "0") + " " + ampm;

  document.getElementById("time").innerText = currentTime;

  const currentTimeInMinutes = now.getHours() * 60 + minutes;
  const activity = routine.find((item, index) => {
    const activityTime = item.time.split(":");
    const activityTimeInMinutes = parseInt(activityTime[0]) * 60 + parseInt(activityTime[1]);

    const nextActivityTime = routine[index + 1] 
      ? routine[index + 1].time.split(":") 
      : ["24", "00"];
    const nextActivityTimeInMinutes = parseInt(nextActivityTime[0]) * 60 + parseInt(nextActivityTime[1]);

    return currentTimeInMinutes >= activityTimeInMinutes && currentTimeInMinutes < nextActivityTimeInMinutes;
  });

  document.getElementById("activity").innerText = activity ? activity.activity : "ঘুম: আগামী দিনের জন্য শক্তি সঞ্চয় করুন।";
}

setInterval(updateClock, 1000);
updateClock();