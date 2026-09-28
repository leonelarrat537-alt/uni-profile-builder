* {
  box-sizing: border-box;
}

:root {
  --bg: #081120;
  --bg-soft: #0f1d32;
  --panel: rgba(15, 29, 50, 0.8);
  --panel-strong: #102544;
  --surface: #f4f7fb;
  --surface-strong: #ffffff;
  --card: #eaf0fb;
  --primary: #5b8cff;
  --primary-strong: #3a68eb;
  --primary-soft: rgba(91, 140, 255, 0.12);
  --accent: #7ae7c7;
  --text: #e7edf9;
  --text-dark: #13213d;
  --muted: #b6c6e4;
  --line: rgba(158, 180, 220, 0.2);
  --success: #56d39a;
  --warning: #f7d58b;
  --shadow: 0 18px 48px rgba(8, 17, 32, 0.26);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(180deg, #07111d 0%, #0d1830 100%);
  color: var(--text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font: inherit;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 110px 0;
}

.soft-bg {
  background: rgba(9, 19, 34, 0.5);
}

.narrow {
  max-width: 800px;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  background: rgba(8, 17, 32, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: -0.04em;
}

.brand-mark {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--primary), #8d71ff);
  color: #fff;
  box-shadow: 0 10px 25px rgba(91, 140, 255, 0.45);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 26px;
  color: var(--muted);
  font-size: 0.96rem;
}

.nav-links a {
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--text);
}

.btn {
  border: 1px solid transparent;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), #7a6cff);
  color: white;
  box-shadow: 0 14px 30px rgba(91, 140, 255, 0.26);
  padding: 0.9rem 1.4rem;
}

.btn-secondary {
  border-color: rgba(255, 255, 255, 0.16);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
  padding: 0.9rem 1.4rem;
}

.hero {
  padding-top: 90px;
  padding-bottom: 60px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 48px;
}

.eyebrow {
  display: inline-flex;
  padding: 0.5rem 0.8rem;
  background: var(--primary-soft);
  border: 1px solid rgba(91, 140, 255, 0.3);
  border-radius: 999px;
  color: #dfe9ff;
  font-size: 0.76rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.hero-copy h1 {
  margin: 20px 0 18px;
  font-size: clamp(2.7rem, 4vw, 5rem);
  line-height: 0.98;
  letter-spacing: -0.08em;
  max-width: 660px;
}

.hero-copy p {
  max-width: 620px;
  color: var(--muted);
  font-size: 1.06rem;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.hero-pills {
  list-style: none;
  padding: 0;
  margin: 28px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-pills li {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.5rem 0.8rem;
  color: var(--muted);
  font-size: 0.85rem;
}

.hero-panel {
  display: grid;
  gap: 22px;
}

.mini-card {
  background: linear-gradient(180deg, rgba(19, 33, 57, 0.94), rgba(13, 23, 38, 0.9));
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.highlight-card {
  background: linear-gradient(135deg, rgba(91, 140, 255, 0.15), rgba(122, 108, 255, 0.16));
}

.score-row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 18px;
}

.score-row strong {
  font-size: 1.8rem;
  letter-spacing: -0.06em;
}

.label {
  color: var(--muted);
}

.progress-bar {
  width: 100%;
  height: 12px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-bar span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #64d3ff, #64f0c5);
}

.mini-card small {
  color: var(--muted);
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.tag {
  display: inline-flex;
  border-radius: 999px;
  background: rgba(122, 231, 199, 0.12);
  color: var(--accent);
  padding: 0.35rem 0.65rem;
  font-size: 0.75rem;
  border: 1px solid rgba(122, 231, 199, 0.2);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--muted);
  font-size: 0.72rem;
}

.dot-green::before {
  content: "";
  width: 8px;
  height: 8px;
  background: var(--success);
  border-radius: 50%;
  display: inline-block;
}

.mini-card h3 {
  margin: 0 0 10px;
  font-size: 1.35rem;
  letter-spacing: -0.05em;
}

.mini-card p {
  margin: 0;
  color: var(--muted);
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 18px;
}

.chip-row span {
  display: inline-flex;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  padding: 0.38rem 0.7rem;
  color: var(--muted);
  font-size: 0.72rem;
}

.section-heading {
  margin-bottom: 42px;
}

.section-heading.center {
  text-align: center;
}

.section-heading.left {
  text-align: left;
}

.section-heading h2 {
  margin: 14px 0 0;
  font-size: clamp(2rem, 2.8vw, 3.1rem);
  line-height: 1.1;
  letter-spacing: -0.06em;
}

.text-block {
  display: grid;
  gap: 18px;
  color: var(--muted);
  font-size: 1.06rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 20px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 26px 22px;
}

.feature-card .icon {
  display: inline-grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), #8d71ff);
  color: white;
  font-weight: 700;
  margin-bottom: 18px;
}

.feature-card h3 {
  margin: 0 0 12px;
  font-size: 1.28rem;
  letter-spacing: -0.05em;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
}

.filter-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 26px;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.03);
  color: var(--muted);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.7rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn.active {
  background: linear-gradient(135deg, rgba(91, 140, 255, 0.18), rgba(122, 108, 255, 0.12));
  color: white;
  border-color: rgba(91, 140, 255, 0.35);
}

.area-detail {
  background: linear-gradient(180deg, rgba(21, 36, 58, 0.96), rgba(11, 19, 33, 0.95));
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 28px;
}

.area-badge {
  display: inline-flex;
  padding: 0.45rem 0.75rem;
  background: rgba(91, 140, 255, 0.12);
  border: 1px solid rgba(91, 140, 255, 0.3);
  border-radius: 999px;
  color: #d9e8ff;
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.area-content h3 {
  margin: 18px 0 12px;
  font-size: clamp(1.8rem, 2vw, 2.4rem);
  letter-spacing: -0.06em;
}

.area-content p {
  margin: 0 0 18px;
  color: var(--muted);
  max-width: 740px;
}

.area-content ul {
  margin: 0;
  padding-left: 18px;
  color: var(--text);
  display: grid;
  gap: 10px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  gap: 22px;
}

.project-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 24px;
}

.project-tag {
  display: inline-flex;
  padding: 0.38rem 0.7rem;
  background: rgba(122, 231, 199, 0.12);
  border: 1px solid rgba(122, 231, 199, 0.2);
  color: var(--accent);
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.project-card h3 {
  margin: 18px 0 10px;
  font-size: 1.4rem;
  letter-spacing: -0.05em;
}

.project-card p {
  margin: 0 0 16px;
  color: var(--muted);
}

.project-card ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  color: var(--text);
}

.project-card li::before {
  content: "•";
  display: inline-block;
  margin-right: 8px;
  color: var(--primary);
}

.curriculum-layout {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  gap: 28px;
  align-items: center;
}

.curriculum-copy p {
  color: var(--muted);
  font-size: 1.04rem;
}

.check-list {
  list-style: none;
  margin: 26px 0 0;
  padding: 0;
  display: grid;
  gap: 12px;
}

.check-list li {
  position: relative;
  padding-left: 28px;
  color: var(--text);
}

.check-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--success);
  font-weight: 700;
}

.score-panel {
  display: grid;
  gap: 18px;
}

.score-box,
.analysis-box {
  background: rgba(11, 18, 30, 0.8);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px;
}

.score-box span,
.analysis-box h3 {
  color: var(--muted);
}

.score-box strong {
  display: block;
  margin: 10px 0 4px;
  font-size: clamp(2.2rem, 3vw, 3.2rem);
  letter-spacing: -0.08em;
}

.score-box small {
  color: var(--muted);
}

.analysis-box h3 {
  margin: 0 0 12px;
  color: var(--text);
}

.analysis-box ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  display: grid;
  gap: 8px;
}

.warning-box {
  border-color: rgba(247, 213, 139, 0.18);
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 18px;
}

.principles-grid article {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 22px;
  padding: 22px 20px;
}

.principles-grid h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 1.2rem;
  letter-spacing: -0.04em;
}

.principles-grid p {
  margin: 0;
  color: var(--muted);
}

.cta-section {
  padding-top: 60px;
}

.cta-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
  background: linear-gradient(135deg, rgba(91, 140, 255, 0.15), rgba(122, 108, 255, 0.12));
  border: 1px solid rgba(91, 140, 255, 0.22);
  border-radius: 28px;
  padding: 32px 28px;
}

.cta-box h2 {
  margin: 14px 0 0;
  font-size: clamp(2rem, 3vw, 2.8rem);
  letter-spacing: -0.06em;
}

.site-footer {
  padding: 26px 0 68px;
  color: var(--muted);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border-top: 1px solid var(--line);
  padding-top: 26px;
}

.footer-brand {
  flex-shrink: 0;
}

@media (max-width: 980px) {
  .hero-grid,
  .curriculum-layout,
  .feature-grid,
  .project-grid,
  .principles-grid {
    grid-template-columns: 1fr 1fr;
  }

  .hero-grid,
  .curriculum-layout {
    grid-template-columns: 1fr;
  }

  .feature-grid,
  .project-grid,
  .principles-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 700px) {
  .nav {
    flex-wrap: wrap;
    justify-content: center;
    padding: 14px 0;
  }

  .nav-links {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px 18px;
  }

  .hero {
    padding-top: 50px;
  }

  .feature-grid,
  .project-grid,
  .principles-grid,
  .curriculum-layout {
    grid-template-columns: 1fr;
  }

  .cta-box,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .hero-copy h1 {
    max-width: 100%;
  }
}
