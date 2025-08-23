<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Git UZ — Bosh sahifa</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <!-- Header -->
  <header class="site-header">
    <div class="container header-inner">
      <div class="brand">
        <div class="logo">🔥</div>
        <a href="index.html" class="brand-title">Git UZ</a>
      </div>
      <nav class="nav">
        <a href="about.html">Git nima?</a>
        <a href="commands.html">Buyruqlar</a>
        <a href="tutorials.html">Darslar</a>
        <a href="download.html">Yuklab olish</a>
        <a href="signup.html" class="btn btn-primary">Akaunt ochish</a>
      </nav>
      <button id="themeToggle" class="theme-btn" aria-label="Toggle theme">🌙</button>
    </div>
  </header>

  <!-- Hero -->
  <main>
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-text">
          <h1>Git bilan versiyalarni boshqarish <span class="accent">oson</span> va tez</h1>
          <p class="lead">Oddiy buyruqlar, amaliy darslar va yuklab olish bo‘limi. Boshlash uchun yuqoridagi bo‘limlardan birini tanlang.</p>
          <div class="hero-cta">
            <a href="commands.html" class="btn btn-secondary">Tez buyruqlar</a>
            <a href="tutorials.html" class="btn btn-outline">Bosqichma-bosqich</a>
          </div>
        </div>
        <div class="hero-card">
          <pre class="code-block"><code>$ git init
$ git add .
$ git commit -m "initial"
$ git branch -M main
$ git remote add origin https://github.com/user/repo.git
$ git push -u origin main</code></pre>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="container features">
      <div class="feature">
        <h3>Ishonchli tarix</h3>
        <p>Har bir commit izohi bilan saqlanadi.</p>
      </div>
      <div class="feature">
        <h3>Tarmoqlar</h3>
        <p>Yangi funksiyalar uchun alohida branch’lar foydalaning.</p>
      </div>
      <div class="feature">
        <h3>Hamkorlik</h3>
        <p>Pull requestlar orqali kodni tekshiring va birlashtiring.</p>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-inner">
      <p>© <span id="year"></span> Git UZ — Yaratuvchi: Shohboz</p>
      <p class="small">Sayt demo — haqiqiy authentication server yo‘q (faslga maqsad demo).</p>
    </div>
  </footer>

  <button id="toTop" class="to-top" aria-label="Back to top">⬆</button>
  <script src="script.js"></script>
</body>
</html>
# gituz
