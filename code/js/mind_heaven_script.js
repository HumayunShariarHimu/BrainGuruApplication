let bgAudio;

function playHeavenlySounds() {
  const base64Audio = "https://github.com/HumayunShariarHimu/BrainGuruApplication/raw/refs/heads/main/media/audio/meditation_sound.mp3"; // এখানে পুরো base64 string দিন

  bgAudio = new Audio(base64Audio);
  bgAudio.loop = true;
  bgAudio.volume = 0.5;
  bgAudio.play();
}

function stopHeavenlySounds() {
  if (bgAudio) {
    bgAudio.pause();
    bgAudio.currentTime = 0;
  }
}

function showGuidedMessage() {
  const messages = [
    "প্রতিটি নিঃশ্বাসে আমি শান্তির এক অনন্ত আলোয় ভরে যাচ্ছি, যেন আমি স্বর্গে আছি।",
    "আমার মন ধীরে ধীরে এক ঐশ্বরিক সৌন্দর্যে ডুবে যাচ্ছে, যেখানে কেবল শান্তি, ভালোবাসা ও আলো আছে।",
    "আমি অনুভব করছি যেন এক স্বর্গীয় বাগানে হেঁটে যাচ্ছি, প্রতিটি পা ফেলে আমি আরও শান্ত হয়ে উঠছি।",
    "আমার চারপাশে এক কোমল সোনালী আলো ঘিরে রেখেছে, আমি নির্ভার, মুক্ত এবং স্বর্গের মতো হালকা।",
    "প্রতিটি শব্দ, প্রতিটি নিঃশ্বাস আমাকে এক অপার্থিব আনন্দে পূর্ণ করে তুলছে।",
    "আমি এমন এক স্থানে আছি যেখানে কোনো দুঃখ নেই, কেবল শান্তি, আনন্দ আর ভালোবাসা আছে।",
    "আমার অন্তর এখন আলোকিত, হৃদয়ের মাঝে স্বর্গের অনুভব প্রবাহিত হচ্ছে।",
    "আমি এখন নিজের আত্মার সঙ্গে একাত্ম - যেখানে সবকিছু সুন্দর, কোমল ও স্বর্গীয়।",
    "সমস্ত চিন্তা দূরে সরে যাচ্ছে, কেবল শান্ত, শান্ত ও আরও শান্ত এক স্বর্গীয় ঘোর আমাকে ঘিরে ধরছে।",
    "আমি গভীর প্রশান্তিতে আছি, যেন আমি আলোর রাজ্যে অবস্থান করছি - এটাই আমার স্বর্গ।"
  ];
  let index = 0;

  const messageDiv = document.getElementById("message");
  const interval = setInterval(() => {
    messageDiv.textContent = messages[index];
    index = (index + 1) % messages.length;
  }, 5000);

  return interval;
}

document.getElementById("start-btn").addEventListener("click", () => {
  playHeavenlySounds();
  const interval = showGuidedMessage();

  document.getElementById("start-btn").style.display = "none";
  document.getElementById("stop-btn").style.display = "inline-block";

  document.getElementById("stop-btn").addEventListener("click", () => {
    stopHeavenlySounds();
    clearInterval(interval);

    document.getElementById("start-btn").style.display = "inline-block";
    document.getElementById("stop-btn").style.display = "none";

    document.getElementById("message").textContent = "আপনার উপলব্ধিতে 'সুখী আপনি' কে আবিষ্কার করুন....";
  });
});