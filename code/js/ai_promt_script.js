  function copyText() {
    const textElement = document.getElementById("copyText");
    const range = document.createRange();
    range.selectNode(textElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    try {
      const success = document.execCommand('copy');
      if (success) {
        const msg = document.getElementById("copiedMessage");
        msg.style.display = "block";
        setTimeout(() => {
          msg.style.display = "none";
        }, 2000);
      }
    } catch (err) {
      console.error("কপি করতে ব্যর্থ:", err);
    }
    window.getSelection().removeAllRanges();
  }