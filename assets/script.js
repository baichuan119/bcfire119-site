(function() {
  'use strict';

  // Translation Dictionaries
  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.products': 'Products',
      'nav.faq': 'FAQ',
      'nav.contact': 'Request a Quote',
      'hero.eyebrow': 'Engineered for Life Safety',
      'hero.title': 'Industrial-Grade Fire Protection Systems.',
      'hero.lead': 'A comprehensive B2B supplier of fire sprinklers, landing valves, control valves, and hose reels. Trusted by mechanical contractors and distributors globally.',
      'hero.cta': 'Initiate Technical RFQ',
      'hero.secondary': 'Review Product Catalog',
      'hero.note': 'Full compliance with UL, FM, CE, and ISO 9001 standards across major item ranges.',
      'tab1.title': 'Precision Engineering',
      'tab1.desc': 'Advanced CNC machining, casting, and multi-stage testing processes ensure dimensional precision.',
      'tab2.title': 'Global Compliance',
      'tab2.desc': 'Rigorous testing to meet international standards (UL, FM, CE) for key fire protection markets.',
      'tab3.title': 'Integrated Supply Chain',
      'tab3.desc': 'Coordinating full container loads, custom packaging, and comprehensive logistics to streamline project delivery.'
    },
    ru: {
      'nav.home': 'Главная',
      'nav.about': 'О нас',
      'nav.products': 'Продукция',
      'nav.faq': 'FAQ',
      'nav.contact': 'Запрос цены',
      'hero.eyebrow': 'Разработано для безопасности жизни',
      'hero.title': 'Промышленные системы пожаротушения.',
      'hero.lead': 'Комплексный B2B-поставщик спринклеров, пожарных гидрантов, регулирующих клапанов и рукавных катушек. Нам доверяют подрядчики и дистрибьюторы по всему миру.',
      'hero.cta': 'Запросить тех. предложение',
      'hero.secondary': 'Каталог продукции',
      'hero.note': 'Полное соответствие стандартам UL, FM, CE и ISO 9001 для основных групп товаров.',
      'tab1.title': 'Точное машиностроение',
      'tab1.desc': 'Передовая обработка на ЧПУ, литье и многоэтапное тестирование гарантируют геометрическую точность.',
      'tab2.title': 'Международные стандарты',
      'tab2.desc': 'Строгие испытания на соответствие мировым стандартам (UL, FM, CE) для ключевых рынков противопожарной защиты.',
      'tab3.title': 'Интегрированная логистика',
      'tab3.desc': 'Координация комплектных контейнеров, индивидуальной упаковки и комплексной логистики для оптимизации поставок.'
    },
    pt: {
      'nav.home': 'Início',
      'nav.about': 'Sobre Nós',
      'nav.products': 'Produtos',
      'nav.faq': 'FAQ',
      'nav.contact': 'Pedir Orçamento',
      'hero.eyebrow': 'Projetado para Salvar Vidas',
      'hero.title': 'Sistemas de Combate a Incêndio Industriais.',
      'hero.lead': 'Fornecedor B2B completo de sprinklers, hidrantes, válvulas de controle e carretéis de mangueira. Apoiado por engenheiros e distribuidores globais.',
      'hero.cta': 'Iniciar RFQ Técnico',
      'hero.secondary': 'Ver Catálogo',
      'hero.note': 'Conformidade total com as normas UL, FM, CE e ISO 9001 nas principais linhas.',
      'tab1.title': 'Engenharia de Precisão',
      'tab1.desc': 'Usinagem CNC avançada, fundição e testes em várias etapas garantem precisão dimensional.',
      'tab2.title': 'Conformidade Global',
      'tab2.desc': 'Testes rigorosos para atender às normas internacionais (UL, FM, CE) para os principais mercados de segurança.',
      'tab3.title': 'Cadeia de Suprimentos',
      'tab3.desc': 'Coordenação de contêineres completos, embalagens personalizadas e logística robusta para agilizar a entrega.'
    },
    hi: {
      'nav.home': 'होम',
      'nav.about': 'हमारे बारे में',
      'nav.products': 'उत्पाद',
      'nav.faq': 'FAQ',
      'nav.contact': 'कोटेशन मांगें',
      'hero.eyebrow': 'जीवन सुरक्षा के लिए निर्मित',
      'hero.title': 'औद्योगिक श्रेणी की अग्नि सुरक्षा प्रणाली।',
      'hero.lead': 'फायर स्प्रिंकलर, लैंडिंग वाल्व, कंट्रोल वाल्व, और होज़ रील के वैश्विक B2B आपूर्तिकर्ता। विश्व स्तर पर ठेकेदारों और वितरकों द्वारा विश्वसनीय।',
      'hero.cta': 'तकनीकी पूछताछ शुरू करें',
      'hero.secondary': 'उत्पाद सूची देखें',
      'hero.note': 'प्रमुख उत्पाद श्रेणियों में UL, FM, CE और ISO 9001 मानकों का पूर्ण अनुपालन।',
      'tab1.title': 'सटीक इंजीनियरिंग',
      'tab1.desc': 'उन्नत सीएनसी मशीनिंग, कास्टिंग, और बहु-चरणीय परीक्षण प्रक्रियाएं आयामी सटीकता सुनिश्चित करती हैं।',
      'tab2.title': 'वैश्विक अनुपालन',
      'tab2.desc': 'प्रमुख अग्नि सुरक्षा बाजारों के लिए अंतरराष्ट्रीय मानकों (UL, FM, CE) को पूरा करने के लिए कड़ा परीक्षण।',
      'tab3.title': 'एकीकृत आपूर्ति श्रृंखला',
      'tab3.desc': 'परियोजना वितरण को सुव्यवस्थित करने के लिए पूर्ण कंटेनर लोड, अनुकूलित पैकेजिंग और व्यापक रसद का समन्वय।'
    }
  };

  // Language Setup
  const params = new URLSearchParams(location.search);
  const lang = params.get('lang') || 'en';
  const dict = translations[lang] || translations.en;
  
  document.documentElement.lang = lang;
  
  const select = document.getElementById('languageSelect');
  if (select) {
    select.value = translations[lang] ? lang : 'en';
    select.addEventListener('change', function(e) {
      const url = new URL(location.href);
      url.searchParams.set('lang', e.target.value);
      location.href = url.toString();
    });
  }

  // Update i18n placeholders
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Header Scroll Effect
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Mobile Menu Toggle
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      const isOpen = menu.classList.toggle('open');
      toggle.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Interactive Capabilities Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  if (tabBtns.length > 0 && tabPanes.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const targetId = this.getAttribute('data-tab');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanes.forEach(p => p.classList.remove('active'));
        
        this.classList.add('active');
        const activePane = document.getElementById(targetId);
        if (activePane) {
          activePane.classList.add('active');
        }
      });
    });
  }

  // Form Submission
  const form = document.querySelector('[data-inquiry-form]');
  const notice = document.querySelector('.notice');
  if (form && notice) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      notice.classList.add('show');
      notice.textContent = 'Thank you for your RFQ! Our engineering and sales team will review your bill of materials and reply within 12 hours.';
      form.reset();
    });
  }
})();
