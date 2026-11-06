/* ==========================================================
   BIRTHDAY SPECIAL EDITION 06/11 - FAIRY STORY & ROMANTIC LETTER JS
   ========================================================== */

/**
 * CẤU HÌNH THÔNG TIN SINH NHẬT DỄ DÀNG TUỲ BIẾN
 */
const CONFIG = {
  // Tên người nhận (ví dụ: "Em", "Misaa", "Bé Yêu", "Công Chúa Nhỏ", ...)
  recipientName: "Misa",

  // Đường dẫn ảnh kỷ niệm trong thư mục assets
  photoPath: "assets/a62152f6-465a-42f5-a1d0-0ec2eaac4a73.jpg",

  // Tiêu đề bức thư ở màn hình cuối
  letterTitle: "Gửi Misa yêu dấu — cô gái tháng 11 tuyệt vời nhất của anh,",

  // Nội dung bức thư tình sinh nhật nắn nót gõ từng dòng
  letterBlocks: [
    {
      text: "Chúc mừng sinh nhật em bé yêu Misa của anh. Hôm nay là ngày 06/11 — ngày mà một thiên thần xinh đẹp cất tiếng khóc chào đời.",
      pauseAfter: 1600,
    },
    {
      text: "Cảm ơn em vì đã đến bên anh, mang theo nụ cười rạng rỡ và sự dịu dàng làm bừng sáng cả thế giới của anh. Có em ở bên, mỗi ngày trôi qua với anh đều trở nên đặc biệt, ấm áp và ngọt ngào hơn bao giờ hết.",
      pauseAfter: 1700,
    },
    {
      text: "Bước sang tuổi mới, anh chúc công chúa nhỏ của anh luôn xinh đẹp, rạng ngời, luôn mạnh khỏe, bình an và luôn giữ được nét hồn nhiên, đáng yêu vốn có của mình nhé.",
      pauseAfter: 1750,
    },
    {
      text: "Dù cuộc sống ngoài kia có đôi khi làm em mệt mỏi hay âu lo, em hãy luôn nhớ rằng phía sau em luôn có anh sẵn sàng chở che, lắng nghe mọi tâm sự và cùng em đi qua mọi thăng trầm.",
      pauseAfter: 1800,
    },
    {
      text: "Anh hứa sẽ luôn yêu thương, nuông chiều và trân trọng em nhiều hơn mỗi ngày. Mong rằng mọi ước nguyện trong ngày sinh nhật hôm nay của em đều sẽ sớm trở thành hiện thực.",
      pauseAfter: 1750,
    },
    {
      text: "Cảm ơn em vì đã là người yêu của anh, là món quà tuyệt vời nhất mà cuộc đời đã ban tặng cho anh.",
      pauseAfter: 1700,
    },
    {
      text: "Chúc em một tuổi mới ngập tràn niềm vui, tiếng cười và tình yêu thương trọn vẹn nhất. Happy Birthday My Love. 🎂💖",
      pauseAfter: 2000,
    },
    {
      text: "Yêu em nhiều hơn tất cả ✨",
      isSignature: true,
      pauseAfter: 1200,
    }
  ]
};

/* ==========================================================
   KỊCH BẢN NÀNG TIÊN NỤ KỂ CHUYỆN SINH NHẬT (STORYLINE)
   ========================================================== */
const STORY_STEPS = [
  {
    say: `Này <em>Misa</em> ơi!`,
    mood: 'wave',
    mode: 'hero',
    bars: 3.0
  },
  {
    say: `Tớ là <em>Nụ</em> — hôm nay tớ đội vương miện đi dự tiệc nè ✨`,
    mood: 'talk',
    bars: 3.8
  },
  {
    say: `Hôm nay tớ được giao một nhiệm vụ siêu to khổng lồ...`,
    mood: 'shy',
    bars: 3.6
  },
  {
    say: `Vì hôm nay chính là...`,
    mood: 'talk',
    bars: 2.5
  },
  {
    scene: 'date',
    say: `<em>06/11</em> — Sinh nhật của cậu rồi nè! 🎂🎉`,
    mood: 'happy',
    mode: 'side',
    bars: 4.0
  },
  {
    say: `Ngày mà một thiên thần siêu đáng yêu đã đến với thế giới này!`,
    mood: 'talk',
    bars: 3.8
  },
  {
    scene: 'cake',
    say: `Tớ mang bánh kem dâu tây đến rồi nè! Cậu hãy <em>nhắm mắt ước một điều</em> rồi chạm nhẹ để <em>thổi nến</em> nhé! ✨`,
    mood: 'happy',
    mode: 'side',
    wait: true, // Chờ user chạm thổi nến
    bars: 5.0
  },
  {
    say: `Woa điều ước đã bay lên trời sao rồi! Tuổi mới tớ gửi tặng cậu <em>4 điều ước ngọt ngào nhất</em>:`,
    mood: 'wave',
    bars: 4.2
  },
  {
    scene: 'health',
    say: `Chúc cậu thật nhiều <em>sức khỏe</em> — luôn tươi tắn, xinh đẹp và ngập tràn năng lượng tích cực!`,
    mood: 'talk',
    bars: 4.5
  },
  {
    scene: 'peace',
    say: `Chúc cậu luôn <em>bình yên</em> — tuổi mới mọi điều may mắn và thuận lợi nhất sẽ mỉm cười với cậu.`,
    mood: 'talk',
    bars: 4.2
  },
  {
    scene: 'free',
    say: `Chúc cậu luôn <em>tự do</em> và tự tin tỏa sáng rực rỡ như những cánh bướm trong nắng mai!`,
    mood: 'talk',
    bars: 4.5
  },
  {
    scene: 'love',
    say: `Và quan trọng nhất: Chúc cậu luôn được <em>yêu thương chiều chuộng</em> như một nàng công chúa! 💕`,
    mood: 'happy',
    bars: 4.5
  },
  {
    scene: 'none',
    mode: 'hero',
    say: `Cậu biết không...`,
    mood: 'talk',
    bars: 2.8
  },
  {
    say: `Trong mắt anh ấy, cậu là điều kỳ diệu và xinh đẹp nhất trần đời đó.`,
    mood: 'shy',
    bars: 4.2
  },
  {
    scene: 'gift',
    mode: 'side',
    say: `Tớ tặng cậu bó hoa sinh nhật kỳ diệu này nha 💐`,
    mood: 'happy',
    bars: 3.6
  },
  {
    say: `Một bó hoa không bao giờ tàn — vì mỗi cánh hoa là một lời yêu thương đong đầy gửi đến cậu!`,
    mood: 'talk',
    bars: 4.5
  },
  {
    scene: 'question',
    mode: 'hero',
    say: `Hôm nay sinh nhật nè, cho tớ hỏi nhỏ một câu nha:<br>Công chúa có thấy mình là cô gái <em>hạnh phúc nhất</em> hông? 🥰`,
    mood: 'wink',
    wait: true
  },
  // Sau câu hỏi sẽ dẫn vào màn hình thư kết thúc
  {
    scene: 'final',
    mode: 'final',
    say: ``,
    mood: 'happy',
    final: true
  }
];

/* ==========================================================
   STATE & DOM ELEMENTS
   ========================================================== */
const state = {
  stepIndex: -1,
  timer: null,
  isStarted: false,
  isWaiting: false,
  activeScene: null,
  isMusicPlaying: false,
  letterTypewriterRunning: false,
  isCakeBlown: false
};

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

const nuEl = $('#nu');
const lineEl = $('#line');
const bubbleEl = $('#bubble');
const tapHintEl = $('#tap-hint');
const progBarEl = $('#prog-bar');
const bgm = $('#bgm');

/* ==========================================================
   AUDIO CONTROLLER (TỪNG NGÀY YÊU EM)
   ========================================================== */
function playMusic() {
  if (!bgm) return;
  bgm.volume = 0.75;
  const playPromise = bgm.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        state.isMusicPlaying = true;
        updateSoundUI(true);
      })
      .catch(() => {
        state.isMusicPlaying = false;
        updateSoundUI(false);
      });
  }
}

function pauseMusic() {
  if (!bgm) return;
  bgm.pause();
  state.isMusicPlaying = false;
  updateSoundUI(false);
}

function toggleMusic() {
  if (state.isMusicPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function updateSoundUI(isPlaying) {
  const btn = $('#btn-sound');
  if (btn) {
    btn.classList.toggle('is-muted', !isPlaying);
  }
}

/* ==========================================================
   CONFETTI FIREWORKS
   ========================================================== */
function fireConfetti(ratio = 1) {
  if (typeof confetti !== 'function') return;
  confetti({
    particleCount: Math.floor(90 * ratio),
    spread: 75,
    origin: { y: 0.65 },
    colors: ['#ff7ab8', '#ff4d8d', '#ffd98a', '#a99bff', '#ffffff', '#7dffd0'],
    disableForReducedMotion: true
  });
}

function fireHeartConfetti() {
  if (typeof confetti !== 'function') return;
  const end = Date.now() + 1500;
  const colors = ['#ff7ab8', '#ff4d8d', '#ffd3e8', '#ffd98a', '#ffffff'];

  (function frame() {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 6,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

/* ==========================================================
   CANVAS PARTICLES (FALLING PETALS, BIRTHDAY BALLOONS & HEARTS)
   ========================================================== */
class StoryParticleEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.hearts = [];
    this.isRunning = false;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.colors = ['#ff99b3', '#ff6699', '#ffb3c6', '#ffffff', '#ffd98a', '#a99bff'];
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Touch / Cursor trailing hearts
    window.addEventListener('pointermove', (e) => this.addHeart(e.clientX, e.clientY));

    this.createParticles();
    this.isRunning = true;
    this.render();
  }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  createParticles() {
    const count = window.innerWidth < 768 ? 28 : 55;
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push(this.newParticle(true));
    }
  }

  newParticle(randomY = false) {
    const rand = Math.random();
    let type = 'petal';
    if (rand < 0.55) type = 'petal';
    else if (rand < 0.78) type = 'sparkle';
    else if (rand < 0.90) type = 'star';
    else type = 'balloon';

    const isRising = type === 'balloon';

    return {
      type,
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : (isRising ? this.height + 40 : -30),
      size: type === 'balloon' ? Math.random() * 8 + 12 : (type === 'petal' ? Math.random() * 8 + 7 : Math.random() * 3 + 1.2),
      vx: (Math.random() - 0.45) * 0.7,
      vy: isRising ? -(Math.random() * 0.7 + 0.4) : (type === 'petal' ? Math.random() * 0.9 + 0.6 : Math.random() * 0.4 + 0.2),
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.6,
      sway: Math.random() * 3,
      swaySpeed: Math.random() * 0.02 + 0.01,
      swayCounter: Math.random() * Math.PI * 2,
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
      opacity: Math.random() * 0.55 + 0.35
    };
  }

  addHeart(x, y) {
    if (this.hearts.length > 25) return;
    this.hearts.push({
      x,
      y,
      size: Math.random() * 10 + 10,
      vy: -(Math.random() * 1.5 + 1),
      vx: (Math.random() - 0.5) * 1.2,
      opacity: 0.95,
      decay: 0.026,
      rotation: (Math.random() - 0.5) * 30
    });
  }

  drawPetal(p) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.scale(Math.sin(p.swayCounter), 1);

    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.opacity;

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size, p.size / 3, 0, p.size);
    ctx.bezierCurveTo(p.size, p.size / 3, p.size / 2, -p.size / 2, 0, 0);
    ctx.fill();

    ctx.restore();
  }

  drawBalloon(b) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(b.x, b.y);
    ctx.globalAlpha = b.opacity * 0.75;
    ctx.fillStyle = b.color;

    // Quả bóng hình ellipse
    ctx.beginPath();
    ctx.ellipse(0, 0, b.size * 0.8, b.size, 0, 0, Math.PI * 2);
    ctx.fill();

    // Điểm sáng phản chiếu bóng
    ctx.fillStyle = 'rgba(255,255,255,0.45)';
    ctx.beginPath();
    ctx.ellipse(-b.size * 0.28, -b.size * 0.35, b.size * 0.2, b.size * 0.32, -0.3, 0, Math.PI * 2);
    ctx.fill();

    // Dây bóng uốn nhẹ
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, b.size);
    ctx.quadraticCurveTo(Math.sin(b.swayCounter) * 6, b.size + 10, 0, b.size + 20);
    ctx.stroke();

    ctx.restore();
  }

  drawStar(p) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = p.opacity;

    const r = p.size;
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      ctx.lineTo(Math.cos(((18 + i * 72) * Math.PI) / 180) * r, -Math.sin(((18 + i * 72) * Math.PI) / 180) * r);
      ctx.lineTo(Math.cos(((54 + i * 72) * Math.PI) / 180) * (r * 0.45), -Math.sin(((54 + i * 72) * Math.PI) / 180) * (r * 0.45));
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  drawSparkle(p) {
    const ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.globalAlpha = p.opacity * Math.abs(Math.sin(p.swayCounter));
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawHeart(h) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(h.x, h.y);
    ctx.rotate((h.rotation * Math.PI) / 180);
    ctx.globalAlpha = h.opacity;
    ctx.fillStyle = '#ff7ab8';

    const s = h.size * 0.08;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-s * 5, -s * 5, -s * 10, s * 2, 0, s * 10);
    ctx.bezierCurveTo(s * 10, s * 2, s * 5, -s * 5, 0, 0);
    ctx.fill();

    ctx.restore();
  }

  render = () => {
    if (!this.isRunning) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.swayCounter += p.swaySpeed;
      p.x += p.vx + Math.sin(p.swayCounter) * 0.6;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;

      // Reset when off screen
      if (p.type === 'balloon') {
        if (p.y < -50 || p.x < -40 || p.x > this.width + 40) {
          this.particles[i] = this.newParticle(false);
        }
      } else {
        if (p.y > this.height + 40 || p.x < -40 || p.x > this.width + 40) {
          this.particles[i] = this.newParticle(false);
        }
      }

      if (p.type === 'petal') {
        this.drawPetal(p);
      } else if (p.type === 'balloon') {
        this.drawBalloon(p);
      } else if (p.type === 'star') {
        this.drawStar(p);
      } else {
        this.drawSparkle(p);
      }
    }

    for (let i = this.hearts.length - 1; i >= 0; i--) {
      const h = this.hearts[i];
      h.x += h.vx;
      h.y += h.vy;
      h.opacity -= h.decay;

      if (h.opacity <= 0) {
        this.hearts.splice(i, 1);
      } else {
        this.drawHeart(h);
      }
    }

    requestAnimationFrame(this.render);
  };
}

const particleEngine = new StoryParticleEngine($('#fx-canvas'));

/* ==========================================================
   MASCOT & SPEECH ENGINE
   ========================================================== */
function setMood(m) {
  if (!nuEl) return;
  nuEl.className = m || 'wave';
}

let talkTimer = null;
function triggerTalk(on = true, customDurationMs = null) {
  clearTimeout(talkTimer);
  if (!nuEl) return;
  nuEl.classList.toggle('talk', on);
  if (on) {
    const duration = customDurationMs || 1800;
    talkTimer = setTimeout(() => nuEl.classList.remove('talk'), duration);
  }
}

function showSpeech(html) {
  if (!bubbleEl || !lineEl) return 0;
  bubbleEl.classList.toggle('empty', !html);
  lineEl.innerHTML = html || '';

  let wordIdx = 0;
  (function processNodes(node) {
    [...node.childNodes].forEach((child) => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (!part.trim()) {
            frag.append(part);
            return;
          }
          const span = document.createElement('span');
          span.className = 'w';
          span.textContent = part;
          span.style.animationDelay = `${wordIdx++ * 115}ms`;
          frag.append(span);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1 && child.tagName !== 'BR') {
        processNodes(child);
      }
    });
  })(lineEl);

  return wordIdx;
}

function showScene(sceneName) {
  if (!sceneName) return;
  const nextScene = sceneName === 'none' ? null : $(`#sc-${sceneName}`);
  if (nextScene === state.activeScene) return;

  if (state.activeScene) {
    state.activeScene.classList.remove('is-active');
  }

  state.activeScene = nextScene;
  if (nextScene) {
    setTimeout(() => nextScene.classList.add('is-active'), 120);
  }
}

/* ==========================================================
   STORY PROGRESSION CONTROLLER
   ========================================================== */
function goToStep(index) {
  clearTimeout(state.timer);
  if (index >= STORY_STEPS.length) return;

  state.stepIndex = index;
  const step = STORY_STEPS[index];

  // Set Body Layout Mode
  if (step.mode === 'side') {
    document.body.className = 'theme-neon mode-side';
  } else if (step.mode === 'final') {
    document.body.className = 'theme-neon mode-final';
  } else {
    document.body.className = 'theme-neon';
  }

  // Mascot Mood
  if (step.mood) setMood(step.mood);

  // Switch Scene
  showScene(step.scene);

  // Say Dialogue với tốc độ chữ chạy thư thả, nhẹ nhàng
  const wordCount = showSpeech(step.say);
  const textRevealMs = wordCount * 115;
  triggerTalk(Boolean(step.say), Math.max(1800, textRevealMs + 300));

  // Progress Bar
  if (progBarEl) {
    progBarEl.style.width = `${((index + 1) / STORY_STEPS.length) * 100}%`;
  }

  // Hint to tap
  if (tapHintEl) {
    tapHintEl.classList.toggle('is-shown', index >= 1 && index <= 6 && !step.wait);
  }

  state.isWaiting = Boolean(step.wait);

  // If this is the final scene, trigger letter typewriter
  if (step.final) {
    setupFinalExperience();
    return;
  }

  // Auto advance after duration if not waiting for user input
  // Đảm bảo dừng đủ lâu sau khi toàn bộ chữ đã hiện ra
  if (!step.wait) {
    const configDuration = (step.bars || 3.5) * 1000;
    const duration = Math.max(configDuration, textRevealMs + 1800);
    state.timer = setTimeout(() => {
      goToStep(index + 1);
    }, duration);
  }
}

function nextStep() {
  if (!state.isStarted || state.isWaiting) return;
  if (state.stepIndex < STORY_STEPS.length - 1) {
    goToStep(state.stepIndex + 1);
  }
}

/* ==========================================================
   INTERACTIVE BIRTHDAY CAKE & CANDLE HANDLER
   ========================================================== */
function setupCakeHandler() {
  const cakeBox = $('#cake-interactive-box');
  if (!cakeBox) return;

  cakeBox.addEventListener('click', (e) => {
    e.stopPropagation();
    if (state.isCakeBlown) return;

    state.isCakeBlown = true;
    cakeBox.classList.add('is-blown');

    // Cập nhật nhãn thông điệp sau khi thổi nến
    const tapText = cakeBox.querySelector('.cake-tap-text');
    const tapIcon = cakeBox.querySelector('.cake-tap-icon');
    if (tapText) {
      tapText.textContent = 'Ước nguyện tuổi mới đã thành hiện thực! ✨';
    }
    if (tapIcon) {
      tapIcon.textContent = '💖';
    }

    // Nổ pháo hoa trái tim rực rỡ chúc mừng
    fireHeartConfetti();
    fireConfetti(1.2);

    setMood('happy');
    const wCount = showSpeech(`Yayyy! Cậu thổi nến rồi nè! 🎂 Chúc cho mọi ước nguyện tuổi mới của cậu đều sớm thành hiện thực nhé! 🥰✨`);
    triggerTalk(true, Math.max(2200, wCount * 115 + 400));

    // Hết chờ, tự động chuyển tiếp sau khi Misa đọc xong
    state.isWaiting = false;
    clearTimeout(state.timer);
    state.timer = setTimeout(() => {
      goToStep(state.stepIndex + 1);
    }, Math.max(4200, wCount * 115 + 1800));
  });
}

/* ==========================================================
   INTERACTIVE QUESTION HANDLER
   ========================================================== */
function setupQuestionHandlers() {
  const qBox = $('#q-buttons');
  if (!qBox) return;

  qBox.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn || !state.isWaiting) return;

    state.isWaiting = false;
    setMood('happy');
    fireHeartConfetti();

    const wCount = showSpeech(`Hihi vui quá! Giờ thì đến món quà bất ngờ mà anh ấy đã nắn nót chuẩn bị riêng cho cậu nè... 💌✨`);
    triggerTalk(true, Math.max(2200, wCount * 115 + 400));

    clearTimeout(state.timer);
    state.timer = setTimeout(() => {
      goToStep(state.stepIndex + 1);
    }, Math.max(4200, wCount * 115 + 1800));
  });
}

/* ==========================================================
   FINAL SCENE: TYPEWRITER & PHOTO CARD SETUP
   ========================================================== */
class LetterTypewriterEngine {
  constructor(containerEl) {
    this.containerEl = containerEl;
    this.cancelled = false;
  }

  cancel() {
    this.cancelled = true;
  }

  reset() {
    this.cancelled = false;
    this.containerEl.innerHTML = '';
  }

  async typeParagraph(block) {
    const p = document.createElement('p');
    if (block.isSignature) {
      p.className = 'signature';
    }

    const textSpan = document.createElement('span');
    const caret = document.createElement('span');
    caret.className = 'caret';
    caret.setAttribute('aria-hidden', 'true');

    p.appendChild(textSpan);
    p.appendChild(caret);
    this.containerEl.appendChild(p);

    const fullText = block.text;
    for (let i = 0; i < fullText.length; i++) {
      if (this.cancelled) return false;

      const char = fullText[i];
      textSpan.textContent += char;

      let delay = Math.random() * 25 + 35;
      if (char === '.' || char === '!' || char === '?') delay = 360;
      else if (char === ',' || char === ';') delay = 190;
      else if (char === '—') delay = 240;

      await sleep(delay);
    }

    caret.remove();
    return true;
  }

  async run(blocks) {
    this.reset();
    await sleep(400);

    for (const block of blocks) {
      if (this.cancelled) return;
      const ok = await this.typeParagraph(block);
      if (!ok) return;
      await sleep(block.pauseAfter || 1200);
    }

    fireHeartConfetti();
  }
}

let typewriter = null;

function setupFinalExperience() {
  if (state.letterTypewriterRunning) return;
  state.letterTypewriterRunning = true;

  const letterBody = $('#final-letter-body');
  if (letterBody) {
    typewriter = new LetterTypewriterEngine(letterBody);
    typewriter.run(CONFIG.letterBlocks);
  }

  fireHeartConfetti();
}

/* ==========================================================
   PHOTO INITIALIZATION FROM ASSETS
   ========================================================== */
function setupPhotoLoader() {
  const img = $('#final-photo-img');
  if (img && CONFIG.photoPath) {
    img.src = CONFIG.photoPath;
  }
}

/* ==========================================================
   APP INITIALIZATION & USER EVENTS
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
  particleEngine.init();
  setupCakeHandler();
  setupQuestionHandlers();
  setupPhotoLoader();

  // Start Screen Button (Opens story and plays "Từng Ngày Yêu Em")
  const startScreen = $('#start-screen');
  if (startScreen) {
    startScreen.addEventListener('click', () => {
      startScreen.classList.add('is-hidden');
      state.isStarted = true;
      playMusic();
      fireConfetti(0.8);
      goToStep(0);
    });
  }

  // Tap anywhere to advance dialogue
  document.addEventListener('click', (e) => {
    if (!state.isStarted) return;
    if (e.target.closest('button, input, label, a, .final-container, #q-buttons, #cake-interactive-box')) return;
    nextStep();
  });

  // Sound toggle button
  const soundBtn = $('#btn-sound');
  if (soundBtn) {
    soundBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMusic();
    });
  }

  // Jump to Letter button
  const jumpBtn = $('#btn-jump-letter');
  if (jumpBtn) {
    jumpBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      clearTimeout(state.timer);
      goToStep(STORY_STEPS.length - 1);
    });
  }

  // Fire hearts button in photo card
  const fireHeartsBtn = $('#btn-fire-hearts');
  if (fireHeartsBtn) {
    fireHeartsBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      fireHeartConfetti();
    });
  }

  // Blow candles / wish button in photo card
  const wishBtn = $('#btn-bday-wish');
  if (wishBtn) {
    wishBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      fireHeartConfetti();
      fireConfetti(1.2);
    });
  }

  // Replay story button
  const replayBtn = $('#btn-replay-story');
  if (replayBtn) {
    replayBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.letterTypewriterRunning = false;
      state.isCakeBlown = false;

      const cakeBox = $('#cake-interactive-box');
      if (cakeBox) {
        cakeBox.classList.remove('is-blown');
        const tapText = cakeBox.querySelector('.cake-tap-text');
        const tapIcon = cakeBox.querySelector('.cake-tap-icon');
        if (tapText) tapText.textContent = 'Sau khi ước xong hãy chạm vào đây nhé ✨';
        if (tapIcon) tapIcon.textContent = '🎂';
      }

      if (typewriter) typewriter.cancel();
      goToStep(0);
    });
  }
});
