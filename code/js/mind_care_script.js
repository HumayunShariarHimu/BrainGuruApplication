const medications = {
    Depression: [
        { name: "ফ্লুওক্সেটিন (Fluoxetine)", brand: "Prozac, Sarafem", type: "SSRI", use: "মেজাজ উন্নত করে, উদ্বেগ কমায়" },
        { name: "অ্যামিট্রিপটাইলিন (Amitriptyline)", brand: "Elavil, Endep", type: "TCA", use: "বিষণ্নতা, দীর্ঘস্থায়ী ব্যথা চিকিৎসায় ব্যবহৃত" }
    ],
    Anxiety: [
        { name: "ডায়াজেপাম (Diazepam)", brand: "Valium, Diastat", type: "Benzodiazepine", use: "উদ্বেগ কমাতে, মাংসপেশী শিথিল করতে সহায়ক" },
        { name: "অলপ্রাজোলাম (Alprazolam)", brand: "Xanax, Xanax XR", type: "Benzodiazepine", use: "প্যানিক ডিসঅর্ডার, উদ্বেগ চিকিৎসায় ব্যবহৃত" }
    ],
    Schizophrenia: [
        { name: "ওলাঞ্জাপিন (Olanzapine)", brand: "Zyprexa", type: "Atypical Antipsychotic", use: "স্কিজোফ্রেনিয়া এবং বাইপোলার ডিসঅর্ডার চিকিৎসায় ব্যবহৃত" },
        { name: "রিস্পেরিডন (Risperidone)", brand: "Risperdal", type: "Atypical Antipsychotic", use: "স্কিজোফ্রেনিয়া এবং উত্তেজনা কমাতে সহায়ক" }
    ],
    Bipolar: [
        { name: "লিথিয়াম (Lithium)", brand: "Lithobid, Eskalith", type: "Mood Stabilizer", use: "বাইপোলার ডিসঅর্ডার মেজাজ নিয়ন্ত্রণে সহায়ক" },
        { name: "ভালপ্রোয়েট (Valproate)", brand: "Depakote", type: "Anticonvulsant", use: "বাইপোলার ডিসঅর্ডার এবং সিজারের জন্য ব্যবহৃত" }
    ],
    ADHD: [
        { name: "মেথাইলফেনিডেট (Methylphenidate)", brand: "Ritalin, Concerta", type: "CNS Stimulant", use: "মনোযোগ এবং হাইপারঅ্যাকটিভিটি কমাতে সহায়ক" },
        { name: "অ্যামফিটামিন (Amphetamine)", brand: "Adderall, Adderall XR", type: "CNS Stimulant", use: "ADHD এর জন্য মনোযোগ এবং হাইপারঅ্যাকটিভিটি কমাতে সহায়ক" }
    ]
};

document.getElementById('symptomForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const symptom = document.getElementById('symptom').value;
    const medicationList = medications[symptom];
    const medicationDiv = document.getElementById('medicationList');
    
    medicationDiv.innerHTML = '';
    
    if (medicationList) {
        medicationList.forEach(med => {
            medicationDiv.innerHTML += `
                <p><strong>নাম:</strong> ${med.name} <br><strong>ব্র্যান্ড:</strong> ${med.brand} <br><strong>প্রকার:</strong> ${med.type} <br><strong>ব্যবহার:</strong> ${med.use}</p>
                <hr>
            `;
        });
    } else {
        medicationDiv.innerHTML = "<p>এটি একটি অজানা সমস্যা।</p>";
    }
});