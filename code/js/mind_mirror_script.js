let currentQuestion = 0;
let yesAnswers = 0;
let noAnswers = 0;

const questions = [
  "এই মুহূর্তে আপনার মনে কি কোনো আনন্দ, সুখ বা উৎসবমুখর অনুভূতি রয়েছে?",
  "আপনি কি নিজেকে একজন সুখী মানুষ বলে মনে করেন?",
  "আপনার কি এখনকার পরিস্থিতিতে স্বাভাবিকভাবে হাসতে পারছেন?",
  "আপনার কি মনে হয় আপনি পুরোপুরি নিরাপদ ও সুরক্ষিত অবস্থায় আছেন?",
  "আপনার কি মনে হয় আপনি একজন আশাবাদী মানুষ?",
  "আপনি কি আপনার বর্তমান মানসিক অবস্থাকে আরামদায়ক বা সহনীয় মনে করছেন?",
  "আপনি কি মনে করেন, আপনি বিষণ্নতা (ডিপ্রেশন) থেকে মুক্ত?",
  "আপনি কি আপনার লক্ষ্য অর্জনের ব্যাপারে শতভাগ প্রতিশ্রুতিবদ্ধ ও দৃঢ়প্রতিজ্ঞ?"
];

function answerQuestion(isYes) {
  // হ্যাঁ অথবা না উত্তর গুনে রাখা
  if (isYes) {
    yesAnswers++;
  } else {
    noAnswers++;
  }

  currentQuestion++;

  // পরবর্তী প্রশ্ন দেখানো
  if (currentQuestion < questions.length) {
    document.getElementById("question").innerText = questions[currentQuestion];
  } else {
    // সব প্রশ্ন শেষ হলে ফলাফল দেখানো
    showResults();
  }
}

function showResults() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";

  // শতাংশ হিসাব করা
  const totalQuestions = questions.length;
  const positivePercentage = (yesAnswers / totalQuestions) * 100;
  const negativePercentage = (noAnswers / totalQuestions) * 100;

  // মানসিক অবস্থা বিশ্লেষণ করা
  let mentalCondition = "";

  if (positivePercentage <= 10) {
    mentalCondition = "আপনার মানসিক অবস্থা বর্তমানে অত্যন্ত খারাপ। আপনি সম্ভবত গভীর বিষণ্নতায় ভুগছেন। অনুগ্রহ করে যত দ্রুত সম্ভব আপনার মানসিক স্বাস্থ্যের যত্ন নিন। এমন মানসিকতা নিজে ও সমাজের জন্য ক্ষতিকর হতে পারে।";
  } else if (positivePercentage <= 30) {
    mentalCondition = "আপনি এখন দুঃখ ও মানসিক চাপে আছেন। এটি আপনার জীবনযাত্রার মানকে হ্রাস করতে পারে। নিজেকে সময় দিন, আত্ম-উন্নয়নমূলক কাজ করুন এবং প্রিয়জনের সান্নিধ্য নিন।";
  } else if (positivePercentage <= 50) {
    mentalCondition = "আপনার মন আপাতদৃষ্টিতে অস্বাস্থ্যকর। এমন মন নিয়ে জীবনে সফলতা বা আনন্দ পাওয়া কঠিন হতে পারে। দৈনন্দিন জীবনে কিছু ইতিবাচকতা এবং আনন্দের মুহূর্ত যোগ করুন।";
  } else if (positivePercentage <= 70) {
    mentalCondition = "আপনার মানসিক অবস্থা গড়পড়তা বা স্বাভাবিকের কাছাকাছি। এটি ভালো লক্ষণ, তবে আরও আনন্দদায়ক অভিজ্ঞতা ও সচেতন অনুশীলনের মাধ্যমে আপনি নিজের মানসিক প্রশান্তি বাড়াতে পারেন।";
  } else if (positivePercentage <= 90) {
    mentalCondition = "আপনার মানসিক অবস্থা বর্তমানে সন্তোষজনক এবং ইতিবাচক। আপনি জীবনের সৌন্দর্য উপভোগ করছেন, এটি ধরে রাখার চেষ্টা করুন।";
  } else {
    mentalCondition = "আপনার মন অত্যন্ত আনন্দময় এবং প্রশান্তিতে ভরা। এটি একটি চমৎকার মানসিক অবস্থা। বাস্তবতার সঙ্গে যুক্ত থেকে এই আনন্দ ও ভালোবাসা ছড়িয়ে দিন চারপাশে। আপনার আনন্দময় জীবনের জন্য রইল শুভকামনা।";
  }

  // ফলাফল প্রদর্শন
  const resultText = 
    `আপনার ইতিবাচক মানসিক অবস্থা: ${positivePercentage.toFixed(2)}%\n` +
    `আপনার নেতিবাচক মানসিক অবস্থা: ${negativePercentage.toFixed(2)}%\n\n` +
    `মানসিক বিশ্লেষণ:\n${mentalCondition}`;

  document.getElementById("result").innerText = resultText;
}