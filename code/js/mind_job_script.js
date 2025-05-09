const guideText = [
  "আপনার চোখ বন্ধ করুন এবং একটি শান্ত সৈকতের কল্পনা করুন। পায়ের তলায় বালির অনুভূতি এবং কানে ঢেউয়ের আওয়াজ শুনুন।",
  "এখন, কল্পনা করুন যে গরম রোদ আপনার ত্বকে মৃদুভাবে লাগছে। গভীরভাবে শ্বাস নিন এবং ধীরে ধীরে শ্বাস ছেড়ে দিন।",
  "এখন নিজেকে সৈকতের উপর হেঁটে চলতে কল্পনা করুন, বালিতে পায়ের ছাপ রেখে।",
  "আপনার চারপাশের প্রকৃতির সঙ্গে সম্পূর্ণ শান্তি এবং সংযোগ অনুভব করুন।"
];

let currentStep = 0;

document.getElementById("next-guide").addEventListener("click", function() {
  currentStep = (currentStep + 1) % guideText.length;
  document.getElementById("guide-text").textContent = guideText[currentStep];
});

// শ্বাস-প্রশ্বাস ব্যায়াম
document.getElementById("start-breathing").addEventListener("click", function() {
  alert("গভীর শ্বাস নিন, ৪ সেকেন্ড ধরে শ্বাস রাখুন, এবং ধীরে ধীরে ৬ সেকেন্ডে শ্বাস ছেড়ে দিন। এটি ৫ বার করুন।");
});