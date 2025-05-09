function calculateMatch() {
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');
    let q6 = document.querySelector('input[name="q6"]:checked');
    let q7 = document.querySelector('input[name="q7"]:checked');
    let q8 = document.querySelector('input[name="q8"]:checked');
    let q9 = document.querySelector('input[name="q9"]:checked');
    let q10 = document.querySelector('input[name="q10"]:checked');

    if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 || !q9 || !q10) {
        alert("সব প্রশ্নের উত্তর দিন!");
        return;
    }

    let personalityType = q1.value + "-" + q2.value + "-" + q3.value + "-" + q4.value + "-" + q5.value + "-" + q6.value + "-" + q7.value + "-" + q8.value + "-" + q9.value + "-" + q10.value;
    let resultText = "";

    if (personalityType === "introvert-logic-words-assertive-quick-calm-routine-calm-positive-open") {
        resultText = "আপনি একজন আত্মবিশ্বাসী এবং পরিকল্পিত ব্যক্তি, শান্ত পরিবেশে শান্তিপূর্ণভাবে সিদ্ধান্ত নেন।";
    } else if (personalityType === "extrovert-emotion-touch-aggressive-thoughtful-exciting-adventure-reactive-self-doubt-reserved") {
        resultText = "আপনি একজন আবেগপ্রবণ ব্যক্তি যিনি উত্তেজনাপূর্ণ পরিবেশে দ্রুত প্রতিক্রিয়া জানান, তবে কিছুটা সন্দেহজনক।";
    } else {
        resultText = "আপনার ব্যক্তিত্ব ভারসাম্যপূর্ণ এবং আপনি বিভিন্ন পরিস্থিতিতে মানিয়ে চলতে পারেন।";
    }

    document.getElementById("result").innerHTML = "<strong>বিশ্লেষণ:</strong> " + resultText;
}