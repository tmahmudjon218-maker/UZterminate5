/**
 * app.js — Main application logic for Taomlar Retsepti PWA
 * Handles: tabs, search/filter, modal, timer, like/save, localization, dark mode, toasts
 */

// ╔══════════════════════════════════════════════════════════════╗
// ║  TRANSLATIONS                                               ║
// ╚══════════════════════════════════════════════════════════════╝
const TRANSLATIONS = {
  uz: {
    searchTitle:    "Qaysi taomni qidirmoqchisiz?",
    searchPlaceholder: "Taom nomi yoki mahsulotlar (vergul bilan)...",
    noResults:      "Retsept topilmadi",
    savedTitle:     "Saqlangan retseptlar",
    savedEmpty:     "Hech qanday saqlangan retsept yo'q",
    savedHint:      "Retsept sahifasida 🔖 tugmasini bosing",
    profileTitle:   "Mening profilim",
    guestUser:      "Mehmon foydalanuvchi",
    statViewed:     "Ko'rilgan retseptlar",
    statSaved:      "Saqlangan retseptlar",
    statLiked:      "Yoqtirgan retseptlar",
    clearData:      "Barcha ma'lumotlarni tozalash",
    clearConfirm:   "Barcha ma'lumotlar o'chiriladi. Davom etasizmi?",
    appDesc:        "O'zbek taomlari va dunyo oshxonasi retseptlari",
    navHome:        "Asosiy",
    navSaved:       "Saqlanganlar",
    navProfile:     "Profil",
    ingredients:    "Ingredientlar",
    steps:          "Tayyorlash bosqichlari",
    timer:          "Taymer",
    timerStart:     "▶ Boshlash",
    timerStop:      "⏹ To'xtatish",
    save:           "Saqlash",
    unsave:         "Olib tashlash",
    share:          "Ulashish",
    noImage:        "Taom rasmi yo'q",
    toastSaved:     "🔖 Saqlandi!",
    toastUnsaved:   "Saqlangandan olib tashlandi",
    toastLiked:     "❤️ Like qo'shildi!",
    toastUnliked:   "Like olib tashlandi",
    toastShared:    "📤 Havola nusxalandi!",
    toastTimerDone: "⏰ Tayyor! Taom pishdi 😋",
    toastCleared:   "✅ Ma'lumotlar tozalandi",
    timerRunning:   "Taymer ishlayapti...",
    resultsFound:   "ta retsept topildi",
    daqiqa:        "daqiqa",
    catAll:         "Barcha kategoriyalar",
    cuisineAll:     "Barcha oshxonalar",
  },
  ru: {
    searchTitle:    "Какое блюдо вы ищете?",
    searchPlaceholder: "Название блюда или ингредиенты (через запятую)...",
    noResults:      "Рецепты не найдены",
    savedTitle:     "Сохранённые рецепты",
    savedEmpty:     "Нет сохранённых рецептов",
    savedHint:      "Нажмите 🔖 в окне рецепта",
    profileTitle:   "Мой профиль",
    guestUser:      "Гость",
    statViewed:     "Просмотренных рецептов",
    statSaved:      "Сохранённых рецептов",
    statLiked:      "Понравившихся рецептов",
    clearData:      "Очистить все данные",
    clearConfirm:   "Все данные будут удалены. Продолжить?",
    appDesc:        "Узбекская кухня и рецепты мира",
    navHome:        "Главная",
    navSaved:       "Сохранённые",
    navProfile:     "Профиль",
    ingredients:    "Ингредиенты",
    steps:          "Шаги приготовления",
    timer:          "Таймер",
    timerStart:     "▶ Запустить",
    timerStop:      "⏹ Остановить",
    save:           "Сохранить",
    unsave:         "Удалить",
    share:          "Поделиться",
    noImage:        "Изображение недоступно",
    toastSaved:     "🔖 Сохранено!",
    toastUnsaved:   "Удалено из сохранённых",
    toastLiked:     "❤️ Лайк добавлен!",
    toastUnliked:   "Лайк убран",
    toastShared:    "📤 Ссылка скопирована!",
    toastTimerDone: "⏰ Готово! Блюдо готово 😋",
    toastCleared:   "✅ Данные очищены",
    timerRunning:   "Таймер работает...",
    resultsFound:   "рецептов найдено",
    daqiqa:        "мин.",
    catAll:         "Все категории",
    cuisineAll:     "Все кухни",
  },
  en: {
    searchTitle:    "What dish are you looking for?",
    searchPlaceholder: "Recipe name or ingredients (comma-separated)...",
    noResults:      "No recipes found",
    savedTitle:     "Saved Recipes",
    savedEmpty:     "No saved recipes yet",
    savedHint:      "Tap 🔖 in any recipe to save it",
    profileTitle:   "My Profile",
    guestUser:      "Guest User",
    statViewed:     "Recipes Viewed",
    statSaved:      "Recipes Saved",
    statLiked:      "Recipes Liked",
    clearData:      "Clear All Data",
    clearConfirm:   "All data will be deleted. Continue?",
    appDesc:        "Uzbek cuisine & world recipe collection",
    navHome:        "Home",
    navSaved:       "Saved",
    navProfile:     "Profile",
    ingredients:    "Ingredients",
    steps:          "Preparation Steps",
    timer:          "Timer",
    timerStart:     "▶ Start",
    timerStop:      "⏹ Stop",
    save:           "Save",
    unsave:         "Unsave",
    share:          "Share",
    noImage:        "No image available",
    toastSaved:     "🔖 Saved!",
    toastUnsaved:   "Removed from saved",
    toastLiked:     "❤️ Liked!",
    toastUnliked:   "Unliked",
    toastShared:    "📤 Link copied!",
    toastTimerDone: "⏰ Done! Food is ready 😋",
    toastCleared:   "✅ Data cleared",
    timerRunning:   "Timer running...",
    resultsFound:   "recipes found",
    daqiqa:        "min",
    catAll:         "All Categories",
    cuisineAll:     "All Cuisines",
  }
};

// ╔══════════════════════════════════════════════════════════════╗
// ║  APP STATE                                                  ║
// ╚══════════════════════════════════════════════════════════════╝
const state = {
  lang: localStorage.getItem('lang') || 'uz',
  theme: localStorage.getItem('theme') || 'light',
  recipes: [],
  savedIds: JSON.parse(localStorage.getItem('savedIds') || '[]'),
  likedIds: JSON.parse(localStorage.getItem('likedIds') || '[]'),
  viewedIds: JSON.parse(localStorage.getItem('viewedIds') || '[]'),
  likeCounts: JSON.parse(localStorage.getItem('likeCounts') || '{}'),
  searchQuery: '',
  filterCat: '',
  filterCuisine: '',
  activeTab: 'home',
  // Modal
  currentRecipeId: null,
  // Timer
  timerInterval: null,
  timerRemaining: 0,
};

// ╔══════════════════════════════════════════════════════════════╗
// ║  INIT                                                       ║
// ╚══════════════════════════════════════════════════════════════╝
function init() {
  // Load / seed recipes
  const stored = localStorage.getItem('recipes');
  if (stored) {
    state.recipes = JSON.parse(stored);
  } else {
    state.recipes = getInitialRecipes();
    persistRecipes();
  }

  applyTheme(state.theme);
  applyLanguage(state.lang);

  bindEvents();
  renderHomeGrid();
  updateStats();

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(console.warn);
  }
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  PERSISTENCE HELPERS                                        ║
// ╚══════════════════════════════════════════════════════════════╝
function persistRecipes() {
  localStorage.setItem('recipes', JSON.stringify(state.recipes));
}
function persistSaved() {
  localStorage.setItem('savedIds', JSON.stringify(state.savedIds));
}
function persistLiked() {
  localStorage.setItem('likedIds', JSON.stringify(state.likedIds));
  localStorage.setItem('likeCounts', JSON.stringify(state.likeCounts));
}
function persistViewed() {
  localStorage.setItem('viewedIds', JSON.stringify(state.viewedIds));
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  THEME                                                      ║
// ╚══════════════════════════════════════════════════════════════╝
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const icon = document.querySelector('.theme-icon');
  if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
  state.theme = theme;
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  LOCALIZATION                                               ║
// ╚══════════════════════════════════════════════════════════════╝
function t(key) {
  return (TRANSLATIONS[state.lang] && TRANSLATIONS[state.lang][key]) || key;
}

function applyLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  // Apply [data-i18n] text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // Apply [data-i18n-placeholder]
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  // Update lang select value
  const sel = document.getElementById('langSelect');
  if (sel) sel.value = lang;
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  EVENT BINDING                                              ║
// ╚══════════════════════════════════════════════════════════════╝
function bindEvents() {
  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', () => {
    const next = state.theme === 'light' ? 'dark' : 'light';
    applyTheme(next);
  });

  // Language selector
  document.getElementById('langSelect').addEventListener('change', (e) => {
    applyLanguage(e.target.value);
    renderHomeGrid();
    if (state.activeTab === 'saved') renderSavedGrid();
    updateStats();
  });

  // Bottom nav tabs
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  // Search
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    searchClear.style.display = e.target.value ? 'block' : 'none';
    renderHomeGrid();
  });
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    state.searchQuery = '';
    searchClear.style.display = 'none';
    renderHomeGrid();
  });

  // Filters
  document.getElementById('catFilter').addEventListener('change', (e) => {
    state.filterCat = e.target.value;
    renderHomeGrid();
  });
  document.getElementById('cuisineFilter').addEventListener('change', (e) => {
    state.filterCuisine = e.target.value;
    renderHomeGrid();
  });

  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('recipeModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('recipeModal')) closeModal();
  });

  // Modal action buttons
  document.getElementById('likeBtn').addEventListener('click', handleLike);
  document.getElementById('saveBtn').addEventListener('click', handleSave);
  document.getElementById('shareBtn').addEventListener('click', handleShare);

  // Timer buttons
  document.getElementById('timerStart').addEventListener('click', startTimer);
  document.getElementById('timerStop').addEventListener('click', stopTimer);

  // Profile clear
  document.getElementById('clearDataBtn').addEventListener('click', () => {
    if (confirm(t('clearConfirm'))) {
      localStorage.clear();
      state.savedIds = [];
      state.likedIds = [];
      state.viewedIds = [];
      state.likeCounts = {};
      state.recipes = getInitialRecipes();
      persistRecipes();
      updateStats();
      if (state.activeTab === 'saved') renderSavedGrid();
      showToast(t('toastCleared'));
    }
  });

  // Keyboard: Esc closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('recipeModal').style.display !== 'none') {
      closeModal();
    }
  });
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  TAB SWITCHING                                              ║
// ╚══════════════════════════════════════════════════════════════╝
function switchTab(tab) {
  state.activeTab = tab;

  // Update sections
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.getElementById(`tab-${tab}`).classList.add('active');

  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });

  if (tab === 'saved') renderSavedGrid();
  if (tab === 'profile') updateStats();
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  SEARCH & FILTER                                            ║
// ╚══════════════════════════════════════════════════════════════╝
function getFilteredRecipes() {
  const query = state.searchQuery.trim().toLowerCase();
  const catF = state.filterCat;
  const cuisineF = state.filterCuisine;

  return state.recipes.filter(r => {
    // Category filter
    if (catF && r.category !== catF) return false;
    // Cuisine filter
    if (cuisineF && r.cuisine !== cuisineF) return false;

    if (!query) return true;

    // Detect ingredient search: comma or multiple words
    const isIngredientSearch = query.includes(',');
    if (isIngredientSearch) {
      const terms = query.split(',').map(s => s.trim()).filter(Boolean);
      return terms.every(term =>
        r.ingredients.some(ing => ing.toLowerCase().includes(term))
      );
    }

    // Title search
    const titleMatch =
      r.title.toLowerCase().includes(query) ||
      (r.title_ru && r.title_ru.toLowerCase().includes(query)) ||
      (r.title_en && r.title_en.toLowerCase().includes(query));

    // Ingredient search (single word)
    const ingMatch = r.ingredients.some(ing => ing.toLowerCase().includes(query));

    return titleMatch || ingMatch;
  });
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  RENDER HOME GRID                                           ║
// ╚══════════════════════════════════════════════════════════════╝
function renderHomeGrid() {
  const filtered = getFilteredRecipes();
  const grid = document.getElementById('recipeGrid');
  const noRes = document.getElementById('noResults');
  const count = document.getElementById('resultsCount');

  if (filtered.length === 0) {
    grid.innerHTML = '';
    noRes.style.display = 'block';
    count.textContent = '';
  } else {
    noRes.style.display = 'none';
    count.textContent = `${filtered.length} ${t('resultsFound')}`;
    grid.innerHTML = filtered.map((r, i) => buildCardHTML(r, i)).join('');

    // Attach card click events
    grid.querySelectorAll('.recipe-card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.id));
    });
  }
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  RENDER SAVED GRID                                          ║
// ╚══════════════════════════════════════════════════════════════╝
function renderSavedGrid() {
  const saved = state.recipes.filter(r => state.savedIds.includes(r.id));
  const grid = document.getElementById('savedGrid');
  const empty = document.getElementById('savedEmpty');

  if (saved.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    grid.innerHTML = saved.map((r, i) => buildCardHTML(r, i)).join('');
    grid.querySelectorAll('.recipe-card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.id));
    });
  }
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  BUILD CARD HTML                                            ║
// ╚══════════════════════════════════════════════════════════════╝
function buildCardHTML(recipe, index) {
  const isSaved = state.savedIds.includes(recipe.id);
  const titleField = state.lang === 'ru' ? (recipe.title_ru || recipe.title) :
                     state.lang === 'en' ? (recipe.title_en || recipe.title) :
                     recipe.title;
  const likes = state.likeCounts[recipe.id] ?? recipe.likes;
  const delay = Math.min(index * 0.04, 0.5);

  return `
    <article
      class="recipe-card"
      data-id="${recipe.id}"
      role="listitem"
      tabindex="0"
      aria-label="${titleField}"
      style="animation-delay: ${delay}s"
    >
      <div class="card-image-wrap">
        <img
          class="card-image"
          src="${recipe.image}"
          alt="${titleField}"
          loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        />
        <div class="card-img-fallback" style="display:none">
          <span>🍽</span>
          <span>${t('noImage')}</span>
        </div>
        <span class="card-cuisine-badge">${recipe.cuisine}</span>
        ${isSaved ? '<span class="card-save-dot">🔖</span>' : ''}
      </div>
      <div class="card-body">
        <h3 class="card-title">${titleField}</h3>
        <div class="card-meta">
          <span class="card-tag">${recipe.category}</span>
          <span class="card-time">⏱ ${recipe.time} ${t('daqiqa')}</span>
        </div>
      </div>
    </article>
  `;
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  MODAL OPEN / CLOSE                                         ║
// ╚══════════════════════════════════════════════════════════════╝
function openModal(id) {
  const recipe = state.recipes.find(r => r.id === id);
  if (!recipe) return;

  state.currentRecipeId = id;
  stopTimer(); // reset any running timer

  // Track viewed
  if (!state.viewedIds.includes(id)) {
    state.viewedIds.push(id);
    persistViewed();
  }

  // Image
  const img = document.getElementById('modalImage');
  const fallback = document.getElementById('modalImgFallback');
  img.src = recipe.image;
  img.alt = recipe.title;
  img.style.display = 'block';
  fallback.style.display = 'none';

  // Title (localized)
  const title = state.lang === 'ru' ? (recipe.title_ru || recipe.title) :
                state.lang === 'en' ? (recipe.title_en || recipe.title) :
                recipe.title;

  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalCategory').textContent = recipe.category;
  document.getElementById('modalCuisine').textContent = recipe.cuisine;
  document.getElementById('modalTime').textContent = `⏱ ${recipe.time} ${t('daqiqa')}`;
  document.getElementById('modalRating').textContent = `⭐ ${recipe.rating}`;

  // Timer display
  const mins = recipe.time;
  document.getElementById('timerDisplay').textContent = formatTime(mins * 60);
  state.timerRemaining = mins * 60;

  // Ingredients
  const ingList = document.getElementById('modalIngredients');
  ingList.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');

  // Steps
  const stepsList = document.getElementById('modalSteps');
  stepsList.innerHTML = recipe.steps.map((step, i) => `
    <li class="step-item" data-index="${i}" tabindex="0">
      <span class="step-num">${i + 1}</span>
      <span class="step-text">${step}</span>
    </li>
  `).join('');

  // Bind step checkboxes
  stepsList.querySelectorAll('.step-item').forEach(item => {
    item.addEventListener('click', () => item.classList.toggle('done'));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') item.classList.toggle('done');
    });
  });

  // Like state
  updateLikeButton(id);
  // Save state
  updateSaveButton(id);

  // Timer buttons reset
  document.getElementById('timerStart').style.display = 'inline-flex';
  document.getElementById('timerStop').style.display = 'none';

  // Show modal
  const modal = document.getElementById('recipeModal');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Apply i18n to modal sections
  applyLanguage(state.lang);
}

function closeModal() {
  document.getElementById('recipeModal').style.display = 'none';
  document.body.style.overflow = '';
  stopTimer();
  state.currentRecipeId = null;
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  LIKE                                                       ║
// ╚══════════════════════════════════════════════════════════════╝
function handleLike() {
  const id = state.currentRecipeId;
  if (!id) return;
  const recipe = state.recipes.find(r => r.id === id);
  if (!recipe) return;

  if (state.likedIds.includes(id)) {
    state.likedIds = state.likedIds.filter(x => x !== id);
    state.likeCounts[id] = (state.likeCounts[id] ?? recipe.likes) - 1;
    showToast(t('toastUnliked'));
  } else {
    state.likedIds.push(id);
    state.likeCounts[id] = (state.likeCounts[id] ?? recipe.likes) + 1;
    showToast(t('toastLiked'));
  }

  persistLiked();
  updateLikeButton(id);
  updateStats();
}

function updateLikeButton(id) {
  const recipe = state.recipes.find(r => r.id === id);
  if (!recipe) return;
  const isLiked = state.likedIds.includes(id);
  const count = state.likeCounts[id] ?? recipe.likes;
  const btn = document.getElementById('likeBtn');
  const icon = document.getElementById('likeIcon');
  const cnt = document.getElementById('likeCount');

  if (!btn) return;
  btn.classList.toggle('liked', isLiked);
  icon.textContent = isLiked ? '❤️' : '🤍';
  cnt.textContent = count;
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  SAVE / UNSAVE                                              ║
// ╚══════════════════════════════════════════════════════════════╝
function handleSave() {
  const id = state.currentRecipeId;
  if (!id) return;

  if (state.savedIds.includes(id)) {
    state.savedIds = state.savedIds.filter(x => x !== id);
    showToast(t('toastUnsaved'));
  } else {
    state.savedIds.push(id);
    showToast(t('toastSaved'));
  }

  persistSaved();
  updateSaveButton(id);
  updateStats();

  // Refresh saved tab if open
  if (state.activeTab === 'saved') renderSavedGrid();
  // Refresh home grid to update bookmark dot
  if (state.activeTab === 'home') renderHomeGrid();
}

function updateSaveButton(id) {
  const isSaved = state.savedIds.includes(id);
  const btn = document.getElementById('saveBtn');
  const icon = document.getElementById('saveIcon');
  const text = document.getElementById('saveText');

  if (!btn) return;
  btn.classList.toggle('saved', isSaved);
  icon.textContent = isSaved ? '✅' : '🔖';
  text.textContent = isSaved ? t('unsave') : t('save');
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  SHARE                                                      ║
// ╚══════════════════════════════════════════════════════════════╝
function handleShare() {
  const id = state.currentRecipeId;
  const recipe = state.recipes.find(r => r.id === id);
  if (!recipe) return;

  const title = state.lang === 'ru' ? (recipe.title_ru || recipe.title) :
                state.lang === 'en' ? (recipe.title_en || recipe.title) :
                recipe.title;

  const shareText = `🍽 ${title}\n⏱ ${recipe.time} ${t('daqiqa')}\n\nTaomlar Retsepti ilovasidan`;

  if (navigator.share) {
    navigator.share({
      title: title,
      text: shareText,
      url: window.location.href,
    }).catch(() => {});
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(shareText + '\n' + window.location.href)
      .then(() => showToast(t('toastShared')))
      .catch(() => showToast(t('toastShared')));
  }
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  TIMER                                                      ║
// ╚══════════════════════════════════════════════════════════════╝
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function startTimer() {
  if (state.timerInterval) return; // already running

  const id = state.currentRecipeId;
  const recipe = state.recipes.find(r => r.id === id);
  if (!recipe) return;

  // If at zero, reset to recipe time
  if (state.timerRemaining <= 0) {
    state.timerRemaining = recipe.time * 60;
  }

  document.getElementById('timerStart').style.display = 'none';
  document.getElementById('timerStop').style.display = 'inline-flex';

  state.timerInterval = setInterval(() => {
    state.timerRemaining--;
    document.getElementById('timerDisplay').textContent = formatTime(state.timerRemaining);

    if (state.timerRemaining <= 0) {
      stopTimer();
      showToast(t('toastTimerDone'));
      // Try to beep
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        osc.connect(ctx.destination);
        osc.frequency.value = 880;
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      } catch (_) {}
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
  const startBtn = document.getElementById('timerStart');
  const stopBtn = document.getElementById('timerStop');
  if (startBtn) startBtn.style.display = 'inline-flex';
  if (stopBtn) stopBtn.style.display = 'none';
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  STATS (PROFILE)                                            ║
// ╚══════════════════════════════════════════════════════════════╝
function updateStats() {
  const el = (id) => document.getElementById(id);
  if (el('statViewed')) el('statViewed').textContent = state.viewedIds.length;
  if (el('statSaved')) el('statSaved').textContent = state.savedIds.length;
  if (el('statLiked')) el('statLiked').textContent = state.likedIds.length;
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  TOAST                                                      ║
// ╚══════════════════════════════════════════════════════════════╝
function showToast(msg) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    toast.addEventListener('animationend', () => toast.remove());
  }, 2500);
}

// ╔══════════════════════════════════════════════════════════════╗
// ║  KEYBOARD ACCESSIBILITY FOR CARDS                           ║
// ╚══════════════════════════════════════════════════════════════╝
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && e.target.classList.contains('recipe-card')) {
    const id = e.target.dataset.id;
    if (id) openModal(id);
  }
});

// ╔══════════════════════════════════════════════════════════════╗
// ║  START                                                      ║
// ╚══════════════════════════════════════════════════════════════╝
document.addEventListener('DOMContentLoaded', init);
