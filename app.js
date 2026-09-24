/* ==========================================================================
   Piyush Kalra - Portfolio Interactive Script
   ========================================================================== */

// Skills Data derived strictly from resume
const SKILLS_DATA = [
  // Languages
  { name: 'Python', category: 'lang', icon: 'code-2', level: 'Core Language' },
  { name: 'SQL', category: 'lang', icon: 'database', level: 'Core Language' },
  { name: 'C', category: 'lang', icon: 'terminal', level: 'Procedural Language' },
  { name: 'C++', category: 'lang', icon: 'cpu', level: 'Systems Language' },

  // AI & Machine Learning
  { name: 'Machine Learning', category: 'aiml', icon: 'brain', level: 'Supervised Learning' },
  { name: 'YOLOv8', category: 'aiml', icon: 'eye', level: 'Object Detection' },
  { name: 'OpenCV', category: 'aiml', icon: 'camera', level: 'Computer Vision' },
  { name: 'Model Training', category: 'aiml', icon: 'activity', level: 'Fine-Tuning & Evaluation' },
  { name: 'Hyperparameter Tuning', category: 'aiml', icon: 'sliders', level: 'Optimization' },

  // Data & Analytics
  { name: 'Pandas', category: 'analytics', icon: 'binary', level: 'Data Wrangling' },
  { name: 'NumPy', category: 'analytics', icon: 'calculator', level: 'Numerical Computing' },
  { name: 'EDA', category: 'analytics', icon: 'pie-chart', level: 'Exploratory Analysis' },
  { name: 'Statistical Analysis', category: 'analytics', icon: 'trending-up', level: 'Hypothesis & Metrics' },
  { name: 'Power BI', category: 'analytics', icon: 'bar-chart-2', level: 'Dashboards & BI' },
  { name: 'Excel', category: 'analytics', icon: 'sheet', level: 'Spreadsheets & Analytics' },

  // Data Engineering
  { name: 'ETL', category: 'de', icon: 'git-merge', level: 'Pipeline Transformation' },
  { name: 'Data Pipelines', category: 'de', icon: 'workflow', level: 'Automation & Processing' },
  { name: 'Data Modeling', category: 'de', icon: 'network', level: 'Star Schema & Design' },
  { name: 'Data Cleaning', category: 'de', icon: 'sparkles', level: 'Quality & Standardization' },
  { name: 'Data Validation', category: 'de', icon: 'check-circle-2', level: 'Reconciliation & QA' },
  { name: 'APIs', category: 'de', icon: 'link-2', level: 'REST & Integrations' },
  { name: 'PySpark', category: 'de', icon: 'zap', level: 'Distributed Processing' },

  // Cloud & Databases
  { name: 'AWS S3', category: 'cloud', icon: 'hard-drive', level: 'Cloud Object Storage' },
  { name: 'AWS Glue', category: 'cloud', icon: 'layers', level: 'Serverless ETL' },
  { name: 'Amazon Athena', category: 'cloud', icon: 'search', level: 'Serverless SQL' },
  { name: 'MySQL', category: 'cloud', icon: 'server', level: 'Relational Database' },
  { name: 'SQLite', category: 'cloud', icon: 'table', level: 'Embedded RDBMS' },
  { name: 'RDBMS', category: 'cloud', icon: 'database', level: 'Database Design' },

  // Tools
  { name: 'Git', category: 'tools', icon: 'git-branch', level: 'Version Control' },
  { name: 'GitHub', category: 'tools', icon: 'github', level: 'Collaboration & CI' },
  { name: 'VS Code', category: 'tools', icon: 'file-code', level: 'IDE' },
  { name: 'Jupyter Notebook', category: 'tools', icon: 'book-open', level: 'Interactive Analytics' }
];

// Resume Verbatim Text for Modal
const RESUME_TEXT = `
===============================================================================
                             PIYUSH KALRA
   +91 6239729240 | kalrapiyush21@gmail.com | linkedin.com/in/kalrapiyushh | github.com/piyushkalra002
===============================================================================

POSITIONING
-------------------------------------------------------------------------------
AI/ML • Data Engineering • Analytics
Final-year ECE student building AI systems, data pipelines, and data-driven solutions.

EDUCATION
-------------------------------------------------------------------------------
Thapar Institute of Engineering and Technology                  Patiala, Punjab
B.E. in Electronics and Communication Engineering              Aug 2023 - May 2027
Minor in Finance
Relevant Coursework: Finance, Accounting & Valuation, Financial Markets & 
Portfolio Theory, Derivatives Pricing, Trading & Strategies

Shiv Jyoti Public School                                     Jalandhar, Punjab
Senior Secondary (CBSE): 96.0% | Higher Secondary (CBSE): 81.2%  Aug 2021 - 2023


EXPERIENCE
-------------------------------------------------------------------------------
Data Analyst Intern                                      June 2026 – August 2026
Bluestock Fintech                                                 Pune, India
• Coordinated a 3-person team to build a Mutual Fund Analytics Platform covering 
  40 schemes, 5,000 investors, and 32,778 transactions worth INR 352+ crore, 
  translating business requirements into actionable financial insights.
• Built and validated an ETL and SQL analysis pipeline for 46K+ NAV records, using 
  data-quality checks and comparative analysis to identify performance drivers 
  and support business recommendations.

Research Intern – R&D, Hardware & Circuit Design         Jan 2026 – May 2026
Dr. B.R. Ambedkar National Institute of Technology              Jalandhar, Punjab
• Built a full-spectrum EMI Detector from scratch using a dual op-amp signal chain with 
  variable gain up to ×2,200, driving a buzzer and LED output across 50 Hz to 3 MHz.
• Diagnosed and resolved real-world circuit failures through systematic node-by-node 
  multimeter testing across a ±5V dual-supply breadboard prototype.
• Advanced the design to PCB layout in EasyEDA with a portable 9V battery form factor 
  and initiated provisional patent filing for the detection topology.


PROJECTS
-------------------------------------------------------------------------------
Real-Time Facial Emotion Recognition | Python, YOLOv8, OpenCV
• Fine-tuned YOLOv8n on 4,540 labeled facial images across 4 emotion classes, achieving 
  93.4% mAP@50, 90.8% precision, and 90.2% recall on 892 validation images. Built a 
  real-time OpenCV inference pipeline running at 15 FPS on CPU.

Cloud-Based E-Commerce Data Pipeline | AWS S3, AWS Glue, PySpark, Athena, IAM
• Built an end-to-end AWS data pipeline processing 100K+ e-commerce records from 
  Amazon S3 through AWS Glue and PySpark, transforming data into Parquet format 
  for efficient querying and analysis through Amazon Athena.

Customer Retention & RFM Analysis | Python, SQL, Power BI
• Analyzed 4,300+ customers using RFM analysis and identified £1.03M in at-risk revenue, 
  representing 11.8% of total revenue. Built a targeted customer win-back business case 
  and stress-tested ROI across 9 scenarios.


TECHNICAL SKILLS
-------------------------------------------------------------------------------
Languages: Python, SQL, C, C++
AI & Machine Learning: Machine Learning, YOLOv8, OpenCV, Model Training, Hyperparameter Tuning
Data & Analytics: Pandas, NumPy, EDA, Statistical Analysis, Power BI, Excel
Data Engineering: ETL, Data Pipelines, Data Modeling, Data Cleaning, Data Validation, APIs, PySpark
Cloud & Databases: AWS S3, AWS Glue, Amazon Athena, MySQL, SQLite, RDBMS
Tools: Git, GitHub, VS Code, Jupyter Notebook


POSITIONS OF RESPONSIBILITY
-------------------------------------------------------------------------------
Mudra Society | Cultural Secretary                             Aug 2026 – Present
Thapar Institute of Engineering and Technology
• Lead large-scale cultural events with 5,000+ attendees, coordinating 150+ 
  students across teams, timelines, and workstreams.
• Manage budgets, vendor negotiations, stakeholder communication, and event execution.

Saturnalia Fest | Event Management and Outreach Head           Nov 2025 – Aug 2026
Thapar Institute of Engineering and Technology
• Coordinated teams and event operations across multiple workstreams for a large-scale 
  techno-cultural festival.
• Anchored live events before audiences of 3,000+ students, developing strong presentation 
  and audience engagement skills.
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
