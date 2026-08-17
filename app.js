/* ==========================================================================
   Piyush Kalra - Portfolio Interactive Script
   ========================================================================== */

// Skills Data derived strictly from resume
const SKILLS_DATA = [
  // Languages
  { name: 'Python', category: 'lang', icon: 'code-2', level: 'Core Language' },
  { name: 'SQL', category: 'lang', icon: 'database', level: 'Core Language' },
  { name: 'C++', category: 'lang', icon: 'cpu', level: 'Systems Language' },
  { name: 'C', category: 'lang', icon: 'terminal', level: 'Low-level / Embedded' },

  // Data Analytics & Engineering
  { name: 'Power BI', category: 'analytics', icon: 'bar-chart-2', level: 'Visualization & Dashboards' },
  { name: 'Excel', category: 'analytics', icon: 'sheet', level: 'Financial & Data Analysis' },
  { name: 'Pandas', category: 'analytics', icon: 'binary', level: 'Data Wrangling & RFM' },
  { name: 'SQLite / MySQL', category: 'analytics', icon: 'table', level: 'Star Schema & ETL' },
  { name: 'ETL Pipelines', category: 'analytics', icon: 'git-merge', level: 'Pipeline Automation' },
  { name: 'Financial Analysis', category: 'analytics', icon: 'trending-up', level: 'CAGR, Sharpe, VaR' },
  { name: 'Statistical Reasoning', category: 'analytics', icon: 'calculator', level: 'EDA & Correlation' },
  { name: 'Data Cleaning', category: 'analytics', icon: 'sparkles', level: 'Reconciliation & QA' },

  // Hardware & Circuit Design
  { name: 'Dual Op-Amp Circuits', category: 'hardware', icon: 'activity', level: 'Signal Chain (×2,200 Gain)' },
  { name: 'EasyEDA PCB Layout', category: 'hardware', icon: 'layers', level: '9V Battery Form Factor' },
  { name: 'EMI Detection', category: 'hardware', icon: 'radio', level: '50 Hz - 3 MHz Frequency' },
  { name: 'Multimeter Testing', category: 'hardware', icon: 'zap', level: '±5V Node Diagnostics' },

  // Developer Tools
  { name: 'VS Code', category: 'tools', icon: 'file-code', level: 'IDE' },
  { name: 'Git / GitHub', category: 'tools', icon: 'git-branch', level: 'Version Control' },
  { name: 'MySQL Workbench', category: 'tools', icon: 'server', level: 'Database Administration' },

  // Soft Skills & Leadership
  { name: 'Leadership', category: 'soft', icon: 'shield-check', level: '150+ Team Management' },
  { name: 'Time Management', category: 'soft', icon: 'clock', level: 'Concurrent Workstreams' },
  { name: 'Communication', category: 'soft', icon: 'message-square', level: '3,000+ Audience Anchor' },
  { name: 'Ownership & Adaptability', category: 'soft', icon: 'compass', level: 'End-to-end Execution' }
];

// Resume Verbatim Text for Modal
const RESUME_TEXT = `
===============================================================================
                             PIYUSH KALRA
   +91 6239729240 | kalrapiyush21@gmail.com | linkedin.com/in/kalrapiyushh | github.com/piyushkalra002
===============================================================================

EDUCATION
-------------------------------------------------------------------------------
Thapar Institute of Engineering and Technology                  Patiala, Punjab
B.E. in Electronics and Communication Engineering              Aug 2023 - Present

Shiv Jyoti Public School                                     Jalandhar, Punjab
Senior Secondary (CBSE): 96.0% | Higher Secondary (CBSE): 81.2%  Aug 2021 - 2023


EXPERIENCE
-------------------------------------------------------------------------------
Data Analyst Intern                                                         2026
Bluestock Fintech                                                         Remote
• Led a 3-person team to build a Mutual Fund Analytics Platform, personally owning 
  schema design and query development (6-table SQLite star schema, 10 SQL queries, 
  ETL pipeline from raw files) while directing teammates on supporting analysis.
• Presented a composite scorecard ranking and recommending funds to stakeholders, 
  built on CAGR, Sharpe/Sortino ratios, Alpha/Beta vs. Nifty 100, Max Drawdown, and Value at Risk.
• Ran EDA across 11+ visualizations and personally identified and fixed data pipeline 
  bugs affecting output accuracy.

Research Intern - R&D, Hardware & Circuit Design                            2026
Dr. B.R. Ambedkar National Institute of Technology              Jalandhar, Punjab
• Built a full-spectrum EMI Detector from scratch using a dual op-amp signal chain with 
  variable gain up to ×2,200, driving a buzzer and LED output across 50 Hz to 3 MHz.
• Diagnosed and resolved real-world circuit failures through systematic node-by-node 
  multimeter testing across a ±5V dual-supply breadboard prototype.
• Advanced the design to PCB layout in EasyEDA with a portable 9V battery form factor 
  and initiated provisional patent filing for the detection topology.


PROJECTS
-------------------------------------------------------------------------------
Customer Retention & RFM Analysis | Python, Pandas, SQL, Power BI
• Identified £1.03M (11.8%) of revenue concentrated in at-risk customers, matching 
  loyal-segment value, by segmenting 4,300+ customers via SQL extraction and Python 
  RFM scoring, validated against independent queries.
• Recommended a targeted win-back strategy delivering 2.4–2.5x better ROI than a 
  blanket approach, stress-tested across 9 cost/reactivation scenarios.

Blinkit Sales Pipeline & Reporting Automation | Python, SQL, Power BI
• Built and validated an 8-table MySQL schema from 100K+ records, resolving a 
  duplicated timing column and a revenue total unreconciled in 99.98% of orders.
• Ruled out distance, delivery partner, and delay as satisfaction drivers via SQL 
  (correlation = 0.004; 32-34% negative reviews regardless of delay status), and 
  corrected a flawed ROAS metric to identify Email as top marketing channel (2.05x vs 1.92x).


TECHNICAL SKILLS
-------------------------------------------------------------------------------
Languages: C, C++, Python, SQL
Developer Tools: VS Code, MySQL, Git/GitHub, EasyEDA
Data analytics: Power BI, Excel, Pandas
Core Skills: Data Cleaning, Data Visualization, Financial Analysis, SQL Querying, 
             Process Optimization, Statistical reasoning, Circuit Design, PCB Layout
Soft Skills: Leadership, Time Management, Communication, Ownership, Adaptability


POSITIONS OF RESPONSIBILITY
-------------------------------------------------------------------------------
Mudra Society | Core Convener, Performances and Logistics       Aug 2025 - Present
Thapar Institute of Engineering and Technology
• Managed large-scale events (Mudranite 2024, Izhaar 2025) with a combined attendance exceeding 5,000.
• Led 150+ students across performances and logistics; coordinated budgets, vendor negotiations.

Saturnalia Fest | Event Management and Outreach Head           Nov 2025 - Present
Thapar Institute of Engineering and Technology
• Directed end-to-end event operations across multiple concurrent workstreams in North India’s Largest Fest.
• Anchored live events before audiences of 3,000+ students.
`;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Render Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Render Skills Grid
  renderSkills('all');

  // Setup Event Listeners
  setupSkillFilters();
  setupScrollEffects();
  setupNavigation();
  setupContactCopy();
  setupResumeModal();
});

// Render Skills Cards
function renderSkills(filterCat) {
  const container = document.getElementById('skills-container');
  if (!container) return;

  const filtered = filterCat === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === filterCat);

  container.innerHTML = filtered.map(skill => `
    <div class="skill-pill">
      <div class="skill-icon">
        <i data-lucide="${skill.icon}"></i>
      </div>
      <div>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-cat">${skill.level}</div>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Setup Skill Category Filter Buttons
function setupSkillFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderSkills(cat);
    });
  });
}

// Scroll Reveals and Progress Bar
function setupScrollEffects() {
  const progressBar = document.getElementById('scroll-progress');
  const navbar = document.getElementById('navbar');
  const reveals = document.querySelectorAll('.reveal');

  // IntersectionObserver for reveal animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));

  // Scroll listener for progress & navbar
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    if (progressBar) {
      progressBar.style.width = scrolled + '%';
    }

    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Highlight active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Navigation hamburger menu
function setupNavigation() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

// Copy email action with toast notification
function setupContactCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  const toast = document.getElementById('toast');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'kalrapiyush21@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied to clipboard!');
      }).catch(() => {
        showToast('kalrapiyush21@gmail.com');
      });
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerText = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// Resume Modal handlers
function setupResumeModal() {
  const modal = document.getElementById('resume-modal');
  const openNavBtn = document.getElementById('open-resume-nav');
  const openHeroBtn = document.getElementById('open-resume-hero');
  const closeBtn = document.getElementById('close-modal-btn');
  const copyBtn = document.getElementById('copy-resume-btn');
  const printBtn = document.getElementById('print-resume-btn');
  const bodyContent = document.getElementById('modal-body-content');

  if (bodyContent) {
    bodyContent.innerHTML = `<pre style="font-family:var(--font-mono); font-size:0.85rem; white-space:pre-wrap; word-break:break-word; color:#e2e8f0;">${RESUME_TEXT.trim()}</pre>`;
  }

  const openModal = () => {
    if (modal) modal.classList.add('open');
  };

  const closeModal = () => {
    if (modal) modal.classList.remove('open');
  };

  if (openNavBtn) openNavBtn.addEventListener('click', openModal);
  if (openHeroBtn) openHeroBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(RESUME_TEXT).then(() => {
        showToast('Resume plain text copied to clipboard!');
      });
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      const printWin = window.open('', '_blank');
      printWin.document.write(`
        <html>
          <head>
            <title>Piyush Kalra - Resume</title>
            <style>
              body { font-family: monospace; padding: 40px; line-height: 1.5; font-size: 14px; color: #000; }
              pre { white-space: pre-wrap; word-wrap: break-word; }
            </style>
          </head>
          <body>
            <pre>${RESUME_TEXT.trim()}</pre>
            <script>window.onload = function() { window.print(); }</script>
          </body>
        </html>
      `);
      printWin.document.close();
    });
  }
}
