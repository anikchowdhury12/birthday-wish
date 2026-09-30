

    const CORRECT_CODE = "1234"; // আপনার গোপন পাসওয়ার্ডটি এখানে দিন

    function checkPass() {
      const inputVal = document.getElementById("passInput").value;
      const errorDiv = document.getElementById("error");

      if (inputVal === CORRECT_CODE) {
        document.getElementById("login").style.opacity = "0";
        setTimeout(() => {
          document.getElementById("login").style.display = "none";
          startCountdown();
        }, 500);
      } else {
        errorDiv.textContent = "❌ Incorrect Code!";
      }
    }

    // 3-Second Countdown Procedure
    function startCountdown() {
      const countScreen = document.getElementById("countdownScreen");
      const countNum = document.getElementById("countdownNumber");
      countScreen.style.display = "block";

      let count = 3;
      countNum.textContent = count;

      const timer = setInterval(() => {
        count--;
        if (count > 0) {
          countNum.textContent = count;
        } else {
          clearInterval(timer);
          countScreen.style.display = "none";
          trigger6SecWish();
        }
      }, 1000);
    }

    // Main 6-Second Animation Trigger
    function trigger6SecWish() {
      const bdayContainer = document.getElementById("birthday");
      bdayContainer.style.display = "block";

      // Floating light particles তৈরি করা
      createParticles();

      // ৬ সেকেণ্ডের জন্য Fireworks burst করা
      const duration = 6 * 1000;
      const animationEnd = Date.now() + duration;

      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        // দুই পাশ থেকে ফায়ারওয়ার্কস ব্লাস্ট
        confetti({
          particleCount: 7,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#ff007f', '#ffd700', '#00f0ff']
        });
        confetti({
          particleCount: 7,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#ff007f', '#ffd700', '#00f0ff']
        });
      }, 150);
    }

    // Floating Light Particles Component
    function createParticles() {
      for (let i = 0; i < 40; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        
        const size = Math.random() * 5 + 2;
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = Math.random() * 3 + 3 + "s";
        particle.style.animationDelay = Math.random() * 2 + "s";
        particle.style.boxShadow = `0 0 10px #fff`;

        document.body.appendChild(particle);
      }
    }
