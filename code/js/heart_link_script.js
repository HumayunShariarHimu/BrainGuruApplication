document.getElementById('relationshipForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // ইনপুট সংগ্রহ
  const love = parseInt(document.getElementById('love').value);
  const trust = parseInt(document.getElementById('trust').value);
  const dependence = parseInt(document.getElementById('dependence').value);
  const interest = parseInt(document.getElementById('interest').value);
  const communication = parseInt(document.getElementById('communication').value);

  // বিশ্লেষণ লজিক
  const averageScore = (love + trust + dependence + interest + communication) / 5;

  let resultMessage;
  if (averageScore > 8) {
    resultMessage = "আপনার সম্পর্ক দৃঢ় এবং স্বাস্থ্যকর!";
  } else if (averageScore > 5) {
    resultMessage = "আপনার সম্পর্ক ভালো, তবে আরও উন্নতির প্রয়োজন আছে।";
  } else {
    resultMessage = "আপনার সম্পর্কের বড় ধরনের উন্নতি প্রয়োজন। বিশ্বাস, যোগাযোগ এবং ভালোবাসার উপর মনোযোগ দিন।";
  }

  // ফলাফল প্রদর্শন
  const analysisDiv = document.getElementById('analysis');
  analysisDiv.innerHTML = `
    <p><strong>গড় স্কোর:</strong> ${averageScore.toFixed(2)}</p>
    <p>${resultMessage}</p>
  `;
  document.getElementById('result').style.display = 'block';
});