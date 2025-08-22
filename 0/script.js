// ====== Theme toggle & year ======
document.addEventListener('DOMContentLoaded', () => {
    const themeBtnList = document.querySelectorAll('#themeToggle');
    themeBtnList.forEach(btn => {
        btn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            btn.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
        });
    });

    // set years in footers
    const years = new Date().getFullYear();
    ['year', 'year2', 'year3', 'year4', 'year5', 'year6'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = years;
    });

    // toTop button
    const toTop = document.getElementById('toTop');
    window.addEventListener('scroll', () => {
        if (!toTop) return;
        if (window.scrollY > 300) toTop.style.display = 'block'; else toTop.style.display = 'none';
    });
    if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});

// ====== Commands page: populate & copy ======

const cmds = [
  { k: 'init', c: 'git init', d: "Joriy papkani yangi Git reposi sifatida ishga tushirish" },
  { k: 'status', c: 'git status', d: "O'zgarishlar holatini ko'rish" },
  { k: 'add', c: 'git add .', d: "Barcha o'zgarishlarni stagingga qo'shish" },
  { k: 'commit', c: 'git commit -m \"xabar\"', d: "Stagingdagi o'zgarishlarni tarixga yozish" },
  { k: 'branch', c: 'git branch', d: "Branchlar ro'yxati" },
  { k: 'switch', c: 'git switch -c feature/x', d: "Yangi branch yaratish va unga o'tish" },
  { k: 'merge', c: 'git merge feature/x', d: "Branchni joriy branchga qo'shish" },
  { k: 'pull', c: 'git pull', d: "Uzoq reposidan so'nggi o'zgarishlarni olish va qo'shish" },
  { k: 'push', c: 'git push -u origin main', d: "Joriy branchni uzoq reposiga yuklash" },
  { k: 'clone', c: 'git clone URL', d: "Uzoq repodan nusxa olish" },
  { k: 'log', c: 'git log --oneline --graph --decorate --all', d: "Tarixni ixcham ko'rinishda chiqarish" },
  { k: 'stash', c: 'git stash && git stash pop', d: "Vaqtinchalik saqlash va qaytarish" },
  { k: 'rebase', c: 'git rebase main', d: "Tarixni toza qilish uchun rebase" },
  { k: 'tag', c: 'git tag v1.0.0 && git push --tags', d: "Teg qo'yish va yuborish" },
  { k: 'diff', c: 'git diff', d: "O'zgarishlar farqini ko'rish" },
  { k: 'config', c: 'git config --global user.name \"Ism\"', d: "Foydalanuvchi nomini sozlash" }
];


function populateCommands(filter = '') {
    const listEl = document.getElementById('commandsList');
    if (!listEl) return;
    listEl.innerHTML = '';
    const f = filter.trim().toLowerCase();
    const filtered = cmds.filter(x => !f || x.k.includes(f) || x.c.toLowerCase().includes(f) || x.d.toLowerCase().includes(f));
    filtered.forEach(cmd => {
        const div = document.createElement('div');
        div.className = 'cmd-card';
        div.innerHTML = `
      <div>
        <pre>${cmd.c}</pre>
        <div class="muted" style="font-size:13px">${cmd.d}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <button class="btn copy-btn" data-cmd="${encodeURIComponent(cmd.c)}">Nusxa</button>
      </div>`;
        listEl.appendChild(div);
    });

    // attach copy handlers
    document.querySelectorAll('.copy-btn').forEach(b => {
        b.addEventListener('click', (e) => {
            const txt = decodeURIComponent(e.currentTarget.dataset.cmd);
            navigator.clipboard.writeText(txt).then(() => {
                const old = e.currentTarget.textContent;
                e.currentTarget.textContent = '✅ Nusxalandi';
                setTimeout(() => e.currentTarget.textContent = old, 1200);
            }).catch(() => alert('Clipboardga yozib bo\'lmadi'));
        });
    });
}

// if commands page is opened
document.addEventListener('DOMContentLoaded', () => {
    populateCommands();
    const search = document.getElementById('cmdSearch');
    if (search) {
        search.addEventListener('input', () => populateCommands(search.value));
        const clearBtn = document.getElementById('clearCmd');
        if (clearBtn) clearBtn.addEventListener('click', () => { search.value = ''; populateCommands(''); });
    }

    // Signup form handling (local demo)
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = (document.getElementById('email') || {}).value || '';
            const code = (document.getElementById('code') || {}).value || '';
            const msgEl = document.getElementById('signupMsg');
            if (!email || !code || code.length < 4) {
                if (msgEl) { msgEl.classList.remove('hidden'); msgEl.textContent = 'Iltimos haqiqiy email va kamida 4 belgidan iborat kod kiriting.'; msgEl.style.color = 'crimson'; }
                return;
            }
            // Demo: saqlaymiz localStorage ga (faqat demo, xavfsiz emas)
            try {
                const users = JSON.parse(localStorage.getItem('gituz_users') || '[]');
                users.push({ email, code, created: new Date().toISOString() });
                localStorage.setItem('gituz_users', JSON.stringify(users));
                if (msgEl) { msgEl.classList.remove('hidden'); msgEl.style.color = 'green'; msgEl.textContent = '✅ Akaunt muvaffaqiyatli yaratildi (demo).'; }
                signupForm.reset();
            } catch (err) {
                if (msgEl) { msgEl.classList.remove('hidden'); msgEl.style.color = 'crimson'; msgEl.textContent = 'Xatolik yuz berdi.'; }
            }
        });
    }
});
