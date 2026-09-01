// ==========================================
// KERALA CHRISTIAN WEDDING APPLICATION LOGIC
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  renderHeaderAndHero();
  renderCouple();
  renderEvents();
  renderTraditions();
  renderGallery();
  renderGuestbook();
  setupCountdown();
  setupAudioPlayer();
  setupThemeToggle();
  setupFormHandlers();
  setupEnvelopeModal();
}

// 1. Render Header & Hero Section
function renderHeaderAndHero() {
  const coupleTitle = `${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName}`;
  const brandInitials = `${WEDDING_CONFIG.groom.shortName.charAt(0)} & ${WEDDING_CONFIG.bride.shortName.charAt(0)}`;

  document.title = `${coupleTitle} - Kerala Christian Wedding Invitation`;
  
  // Set absolute URL for social image previews (WhatsApp requires full https:// URL)
  const fullImgUrl = `${window.location.origin}/${WEDDING_CONFIG.groom.image || 'assets/wedding_couple.png'}`;
  const ogImgEl = document.getElementById("og-image-meta");
  if (ogImgEl) ogImgEl.setAttribute("content", fullImgUrl);
  const twImgEl = document.getElementById("twitter-image-meta");
  if (twImgEl) twImgEl.setAttribute("content", fullImgUrl);

  // Set navbar brand & footer names
  const navBrandEl = document.querySelector(".nav-brand");
  if (navBrandEl) navBrandEl.textContent = brandInitials;

  const footerNamesEl = document.querySelector(".footer-names");
  if (footerNamesEl) footerNamesEl.textContent = coupleTitle;

  // Set couple names
  const coupleNamesEl = document.getElementById("hero-couple-names");
  if (coupleNamesEl) coupleNamesEl.textContent = coupleTitle;

  const dateEl = document.getElementById("hero-display-date");
  if (dateEl) dateEl.textContent = WEDDING_CONFIG.displayDate;

  const quoteEl = document.getElementById("bible-quote-text");
  if (quoteEl) quoteEl.textContent = `"${WEDDING_CONFIG.bibleVerse.text}"`;

  const citationEl = document.getElementById("bible-quote-citation");
  if (citationEl) citationEl.textContent = WEDDING_CONFIG.bibleVerse.citation;

  // Envelope details
  const envelopeNames = document.getElementById("envelope-names");
  if (envelopeNames) envelopeNames.textContent = coupleTitle;
}

// 2. Render Groom & Bride Profiles
function renderCouple() {
  const groomCard = document.getElementById("groom-card");
  if (groomCard) {
    groomCard.innerHTML = `
      <div class="person-img-wrapper">
        <img src="${WEDDING_CONFIG.groom.image}" alt="${WEDDING_CONFIG.groom.name}" class="person-img">
      </div>
      <h3 class="person-name">${WEDDING_CONFIG.groom.name}</h3>
      <p class="person-parents">${WEDDING_CONFIG.groom.parents}</p>
      <p class="person-parish">${WEDDING_CONFIG.groom.parish}</p>
      <p class="person-parents" style="margin-top: 5px;">📍 ${WEDDING_CONFIG.groom.hometown}</p>
    `;
  }

  const brideCard = document.getElementById("bride-card");
  if (brideCard) {
    brideCard.innerHTML = `
      <div class="person-img-wrapper">
        <img src="${WEDDING_CONFIG.bride.image}" alt="${WEDDING_CONFIG.bride.name}" class="person-img">
      </div>
      <h3 class="person-name">${WEDDING_CONFIG.bride.name}</h3>
      <p class="person-parents">${WEDDING_CONFIG.bride.parents}</p>
      <p class="person-parish">${WEDDING_CONFIG.bride.parish}</p>
      <p class="person-parents" style="margin-top: 5px;">📍 ${WEDDING_CONFIG.bride.hometown}</p>
    `;
  }
}

// 3. Render Events Schedule & Add Calendar buttons
function renderEvents() {
  const container = document.getElementById("events-grid");
  if (!container) return;

  container.innerHTML = WEDDING_CONFIG.events.map(ev => `
    <div class="event-card">
      ${ev.image ? `<img src="${ev.image}" alt="${ev.title}" class="event-banner">` : ''}
      <div class="event-body">
        <span class="event-badge">${ev.badge}</span>
        <h3 class="event-title">${ev.title}</h3>
        <p class="event-subtitle">${ev.subtitle}</p>
        
        <div class="event-detail-item">
          <i>📅</i>
          <span><strong>Date:</strong> ${ev.date}</span>
        </div>
        <div class="event-detail-item">
          <i>⏰</i>
          <span><strong>Time:</strong> ${ev.time}</span>
        </div>
        <div class="event-detail-item">
          <i>⛪</i>
          <span><strong>Venue:</strong> ${ev.venue}</span>
        </div>
        <div class="event-detail-item">
          <i>📍</i>
          <span>${ev.address}</span>
        </div>
        <p style="margin-top: 10px; font-size: 0.9rem; color: var(--text-muted);">${ev.description}</p>

        <div class="event-actions">
          <a href="${ev.googleMapsUrl}" target="_blank" rel="noopener" class="btn-secondary" style="font-size: 0.85rem;">
            🗺️ Directions
          </a>
          <button onclick="downloadIcsFile('${ev.id}')" class="btn-secondary" style="font-size: 0.85rem;">
            📅 Add Calendar
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// 4. Render Traditions Visual Guide
function renderTraditions() {
  const container = document.getElementById("traditions-grid");
  if (!container) return;

  container.innerHTML = WEDDING_CONFIG.traditions.map(t => `
    <div class="tradition-card">
      <div class="tradition-icon">${t.icon}</div>
      <h4 class="tradition-title">${t.title}</h4>
      <p class="tradition-desc">${t.description}</p>
    </div>
  `).join('');
}

// 5. Render Photo Gallery
function renderGallery() {
  const container = document.getElementById("gallery-grid");
  if (!container) return;

  container.innerHTML = WEDDING_CONFIG.gallery.map((g, idx) => `
    <div class="gallery-item" onclick="openLightbox(${idx})">
      <img src="${g.src}" alt="${g.caption}" class="gallery-img">
      <div class="gallery-overlay">
        <div class="gallery-caption">${g.caption}</div>
      </div>
    </div>
  `).join('');
}

// 6. Countdown Timer Logic
function setupCountdown() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl) return;

  const targetDate = new Date(WEDDING_CONFIG.weddingDateISO).getTime();

  function update() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    daysEl.textContent = String(d).padStart(2, '0');
    hoursEl.textContent = String(h).padStart(2, '0');
    minutesEl.textContent = String(m).padStart(2, '0');
    secondsEl.textContent = String(s).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

// 7. Envelope Seal Animation
function setupEnvelopeModal() {
  const modal = document.getElementById("envelope-modal");
  const sealBtn = document.getElementById("wax-seal-btn");

  if (!sealBtn) return;

  sealBtn.addEventListener("click", () => {
    modal.classList.add("opened");
    triggerConfetti();
    playAudio();
  });
}

// 8. Background Audio Synth & Player
let audioContext = null;
let isPlayingAudio = false;

function setupAudioPlayer() {
  const audioBtn = document.getElementById("audio-toggle-btn");
  if (!audioBtn) return;

  audioBtn.addEventListener("click", () => {
    if (isPlayingAudio) {
      stopAudio();
    } else {
      playAudio();
    }
  });
}

function playAudio() {
  const audioBtn = document.getElementById("audio-toggle-btn");
  isPlayingAudio = true;
  if (audioBtn) audioBtn.innerHTML = "🎵";

  // Web Audio Synth ambient wedding chime generator if no external audio file
  try {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    playGentleChimePattern();
  } catch (e) {
    console.log("Web Audio API initialized");
  }
}

function stopAudio() {
  const audioBtn = document.getElementById("audio-toggle-btn");
  isPlayingAudio = false;
  if (audioBtn) audioBtn.innerHTML = "🔇";
}

function playGentleChimePattern() {
  if (!isPlayingAudio || !audioContext) return;
  
  const notes = [261.63, 329.63, 392.00, 523.25]; // C E G C
  const note = notes[Math.floor(Math.random() * notes.length)];
  
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  
  osc.type = "sine";
  osc.frequency.value = note;
  
  gain.gain.setValueAtTime(0.05, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 2.5);
  
  osc.connect(gain);
  gain.connect(audioContext.destination);
  
  osc.start();
  osc.stop(audioContext.currentTime + 2.5);

  setTimeout(() => {
    if (isPlayingAudio) playGentleChimePattern();
  }, 1200);
}

// 9. Theme Switcher (Light / Dark Mode)
function setupThemeToggle() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (!themeBtn) return;

  const currentTheme = localStorage.getItem("wedding_theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  themeBtn.textContent = currentTheme === "dark" ? "☀️" : "🌙";

  themeBtn.addEventListener("click", () => {
    const active = document.documentElement.getAttribute("data-theme");
    const next = active === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("wedding_theme", next);
    themeBtn.textContent = next === "dark" ? "☀️" : "🌙";
  });
}

// 10. Form Handlers & LocalStorage persistence
function setupFormHandlers() {
  const wishForm = document.getElementById("wish-form");
  if (wishForm) {
    wishForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const author = document.getElementById("wish-author").value;
      const wishText = document.getElementById("wish-text").value;

      if (!author || !wishText) return;

      const wishes = JSON.parse(localStorage.getItem("wedding_wishes") || "[]");
      wishes.unshift({ author, text: wishText, time: "Just now" });
      localStorage.setItem("wedding_wishes", JSON.stringify(wishes));

      renderGuestbook();
      wishForm.reset();
      createFloatingHeart();
    });
  }
}

// Render Guestbook
function renderGuestbook() {
  const container = document.getElementById("wishes-wall");
  if (!container) return;

  const defaultWishes = [
    { author: "Uncle Joseph & Family", text: "May God bless your union with endless love, peace, and togetherness!", time: "Yesterday" },
    { author: "Anish & Priya", text: "Wishing you both a joyful married life ahead! Can't wait for the celebrations!", time: "2 days ago" }
  ];

  const saved = JSON.parse(localStorage.getItem("wedding_wishes") || "[]");
  const allWishes = [...saved, ...defaultWishes];

  container.innerHTML = allWishes.map(w => `
    <div class="wish-card">
      <p class="wish-quote">"${w.text}"</p>
      <p class="wish-author">— ${w.author}</p>
    </div>
  `).join('');
}

// Download .ics Calendar File generator
function downloadIcsFile(eventId) {
  const ev = WEDDING_CONFIG.events.find(e => e.id === eventId);
  if (!ev) return;

  const icsData = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Kerala Christian Wedding//EN
BEGIN:VEVENT
SUMMARY:${ev.title} - ${WEDDING_CONFIG.groom.shortName} & ${WEDDING_CONFIG.bride.shortName}
DESCRIPTION:${ev.subtitle}. ${ev.description}
LOCATION:${ev.venue}, ${ev.address}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${ev.id}-wedding-event.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Visual Floating Heart / Confetti Effect
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.textContent = "💖";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 80 + 10 + "vw";
  heart.style.bottom = "10px";
  heart.style.fontSize = "2rem";
  heart.style.zIndex = "10000";
  heart.style.transition = "transform 3s ease-out, opacity 3s ease-out";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.transform = "translateY(-80vh) scale(1.5)";
    heart.style.opacity = "0";
  }, 50);

  setTimeout(() => {
    heart.remove();
  }, 3100);
}

function triggerConfetti() {
  for (let i = 0; i < 20; i++) {
    setTimeout(createFloatingHeart, i * 150);
  }
}
