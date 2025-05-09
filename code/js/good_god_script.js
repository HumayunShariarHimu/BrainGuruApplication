// Getting elements from the DOM
const beliefSelector = document.getElementById('belief-selector');
const startSessionBtn = document.getElementById('start-session-btn');
const meditationSection = document.getElementById('meditation-section');
const meditationText = document.getElementById('meditation-text');
const startMeditationBtn = document.getElementById('start-meditation-btn');

// Handle the start session button click
startSessionBtn.addEventListener('click', () => {
    const selectedBelief = beliefSelector.value;
    let meditationMessage = '';

    // Set message based on belief system
    switch (selectedBelief) {
        case 'believer':
            meditationMessage = 'আপনি ঈশ্বরের সান্নিধ্যে আছেন এবং আপনার মানসিক শান্তি অনুভবে সচেষ্ট হউন!';
            break;
        case 'non-believer':
            meditationMessage = 'আপনার মনের লজিক্যাল অবস্থান থেকে আপনার মানসিক অবস্থার বিশ্লেষণে স্থিতিস্থাপকতা অর্জনের চেষ্টা করুন!';
            break;
        case 'agnostic':
            meditationMessage = 'আপনি পরম বিষয়ের অনুসন্ধানে আপনার মনের মুক্তি সাধনায় নিয়োজিত হউন!';
            break;
        case 'skeptic':
            meditationMessage = 'আপনার সংশয়ী মানসিকতায় যেমন প্রশ্নসূচক অবস্থিতি উহার অনুসন্ধিৎসায় আত্মনিয়োগ করুন!';
            break;
        default:
            meditationMessage = 'আপনার সাইকোলজিক্যাল সেশন শুরু করুন।';
    }

    // Show meditation section with appropriate message
    meditationText.textContent = meditationMessage;
    meditationSection.classList.remove('hidden');
});

// Handle meditation button click
startMeditationBtn.addEventListener('click', () => {
    alert('আপনার মেডিটেশন সেশন শুরু করুন এবং যথাসম্ভব প্রশান্ত মানসিকতায় মনোযোগী হউন;Brain Pantheism আপনাকে আপনার স্বীয় মানসিকতায় ঈশ্বরের প্রতি আপন অবস্থানে মেডিটেটিভ হওয়ার প্রয়াসে ভিজ্যুয়ালি এবং অডিটোরিয়ালি সাইকোলজিক্যাল অপ্টিমাইজেশান যোগাতে সহায়ক ভূমিকা পালন করবে');
    window.location.href = './brain_pantheism.html'; // Brian Pantheism
});