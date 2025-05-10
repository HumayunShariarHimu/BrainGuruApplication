
const analyzeButton = document.getElementById("analyze-btn");
const userQuoteInput = document.getElementById("user-quote");
const generatedQuestions = document.getElementById("generated-questions");
const questionsList = document.getElementById("questions-list");
const realizationText = document.getElementById("realization-text");

analyzeButton.addEventListener("click", () => {
  const quote = userQuoteInput.value.trim();

  if (quote === "") {
    alert("আপনার মনের কথাটি যথাসম্ভব সংক্ষেপে মূলভাব তুলে ধরুন...");
    return;
  }

  // প্রশ্ন তৈরি করা
  const questions = generateQuestions(quote);
  questionsList.innerHTML = "";
  questions.forEach((question) => {
    const listItem = document.createElement("li");
    listItem.textContent = question;
    questionsList.appendChild(listItem);
  });
  generatedQuestions.style.display = "block";

  // রিয়েলাইজেশন বার্তা দেখানো
  const realizationMessage = `এখন "${quote}" বিষয়টির সত্যতা যাচাইকরণে আপনার নিকট "${quote}" এর ঘটনাটি স্বচ্ছ ও স্পষ্ট - যেখানে "${quote}" বিষয়টি আপনার জীবনে কীরূপ প্রভাব বিস্তার করেছে সেটাও আপনি উপলব্ধি করতে পারেন; তদুপরি "${quote}" বিষয়ের কারণ ও প্রভাব নিশ্চিতে এই মুহূর্তে আপনি উহার সমাধান প্রকল্পে পরিপূর্ণ একাগ্রতার সহিত নিজেকে পরমভাবে নিয়োজিত করুন!`;
  realizationText.textContent = realizationMessage;
  realizationText.style.display = "block";
});

function generateQuestions(quote) {
  return [
    `আপনার উদ্ধৃতিতে উল্লেখিত "${quote}" বিষয়টি কেন ঘটেছে বলে আপনি মনে করেন?`,
    `"${quote}" কি সত্যিই সঠিক? আপনি কীভাবে এটি যাচাই করবেন?`,
    `"${quote}" বিষয়টি কীভাবে প্রভাব ফেলছে বলে আপনি মনে করেন?`,
    `এই পরিস্থিতিতে "${quote}" ঘটার সম্ভাব্য কারণ কী হতে পারে?`,
    `"${quote}" এর সমাধান কী হতে পারে বলে আপনি মনে করেন?`,
    `"${quote}" এর পেছনে কোনো বিশেষ প্রভাব বা পরিস্থিতি ছিল কি?`
  ];
}