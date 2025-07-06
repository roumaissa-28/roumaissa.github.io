const emojis = ["💫", "💀", "👩🏻‍💻", "🌐", "✨", "🔥"]; // الرموز لي تحبيهم

function createEmoji() {
  const emoji = document.createElement("div");
  emoji.className = "emoji";

  // اختر رمز عشوائي من القائمة
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // موضع عشوائي داخل الصفحة
  emoji.style.top = Math.random() * window.innerHeight + "px";
  emoji.style.left = Math.random() * window.innerWidth + "px";

  document.body.appendChild(emoji);

  // احذف الإيموجي بعد مدة
  setTimeout(() => {
    emoji.remove();
  }, 8000);
}

// أضف إيموجي جديد كل نصف ثانية
setInterval(createEmoji, 500);
