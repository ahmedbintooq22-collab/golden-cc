import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS
app.use('/api/*', cors())

// Translations for all 3 languages
const translations = {
  en: {
    lang: 'en',
    dir: 'ltr',
    meta: {
      title: 'Golden Globe Catering | Luxury Catering for Elite Events in Abu Dhabi',
      description: 'Premium luxury catering services in Abu Dhabi & UAE. Corporate events, royal functions, weddings & VIP hospitality. 15+ years excellence. Book your consultation today.',
      keywords: 'luxury catering Abu Dhabi, premium catering UAE, corporate catering, wedding catering, VIP hospitality, royal events catering, fine dining catering, event catering services'
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      reviews: 'Reviews',
      contact: 'Contact',
      cta: 'Discover Your Style'
    },
    hero: {
      subtitle: 'Welcome to Excellence',
      title: 'Luxury Catering for',
      titleHighlight: 'Elite Events',
      desc: 'Crafting Unforgettable Culinary Experiences Since 2008',
      categories: ['CORPORATE', 'ROYAL', 'GOVERNMENT', 'VIP HOSPITALITY'],
      btnPrimary: 'Request a Proposal',
      btnSecondary: 'View Our Events',
      scroll: 'Scroll'
    },
    about: {
      subtitle: 'About Us',
      title: 'We Do Not Just Cater Events — We Craft Experiences',
      p1: 'Golden Globe Catering Services is one of the leading catering services in Abu Dhabi, where we open our doors to all with a steadfast commitment to delivering unparalleled hospitality services.',
      p2: 'From our beginnings in Catering Services and Fine Dining Restaurants to offering Catering-related Consultancy services, we have continuously evolved to meet the ever-changing needs of our valued patrons.',
      p3: 'We have successfully expanded our presence across the United Arab Emirates, serving corporate functions, government events, luxury weddings, private VIP gatherings, and large-scale international occasions.',
      stats: {
        years: 'Years Experience',
        events: 'Events Served',
        guests: 'Happy Guests'
      }
    },
    vision: {
      subtitle: 'Our Purpose',
      title: 'Vision & Mission',
      visionTitle: 'Our Vision',
      visionText: 'To lead in delivering exceptional hospitality experiences and redefine industry standards. We envision Golden Globe Catering as the first choice for VIP, corporate, and high-profile events, where quality, discretion, and elegance are non-negotiable.',
      missionTitle: 'Our Mission',
      missionText: 'Consistently provide top-tier hospitality services, from fine dining to industrial catering and beyond, while prioritizing excellence, innovation, and customer satisfaction.'
    },
    services: {
      subtitle: 'What We Offer',
      title: 'Our Premium Services',
      desc: 'From intimate gatherings to grand celebrations, we deliver excellence at every scale',
      items: [
        { title: 'Corporate Catering', desc: 'Executive lunches, conferences, product launches, and corporate gatherings with impeccable service.' },
        { title: 'Royal & Government Events', desc: 'Prestigious events requiring the highest level of discretion, security, and culinary excellence.' },
        { title: 'Weddings & Private Functions', desc: 'Creating magical moments with bespoke menus and elegant presentation for your special celebrations.' },
        { title: 'VIP Hospitality & Lounge', desc: 'Exclusive dining experiences and premium lounge services for distinguished guests.' },
        { title: 'Mega Outdoor Events', desc: 'Luxurious tents, state-of-the-art facilities, and impeccable catering for large-scale celebrations.' },
        { title: 'Industrial & Labour Camp', desc: 'Nutritious, quality meals delivered consistently for workforce accommodations.' }
      ]
    },
    portfolio: {
      subtitle: 'Our Work',
      title: 'Signature Events',
      desc: 'A glimpse into our world of culinary excellence and event perfection',
      viewEvent: 'View Event'
    },
    quiz: {
      title: 'Discover Your Event Style',
      desc: 'Take our 30-second luxury experience quiz and receive a complimentary VIP consultation',
      start: 'Start Your Journey',
      q1: 'What type of event are you planning?',
      q2: 'How many guests are you expecting?',
      q3: 'What\'s your preferred style?',
      q4: 'What cuisine interests you most?',
      options: {
        corporate: 'Corporate Event',
        wedding: 'Wedding',
        government: 'Government/Royal',
        private: 'Private Party',
        under50: 'Under 50',
        medium: '50 - 150',
        large: '150 - 500',
        mega: '500+',
        classic: 'Classic Elegant',
        modern: 'Modern Chic',
        royal: 'Royal Luxe',
        cultural: 'Cultural Traditional',
        international: 'International',
        arabic: 'Arabic',
        asian: 'Asian Fusion',
        mixed: 'Mix of Everything'
      },
      reward: 'Your VIP Reward',
      rewardText: 'Complimentary Menu Consultation + Priority Booking',
      bookConsultation: 'Book Your Consultation'
    },
    reviews: {
      subtitle: 'Client Testimonials',
      title: 'What Our Clients Say',
      readMore: 'Read More Reviews',
      items: [
        { name: 'Ahmed Hassan', text: 'Exceptional service from start to finish. Golden Globe catered our corporate event with absolute professionalism. The food quality and presentation exceeded all expectations.' },
        { name: 'Sarah Khan', text: 'They made our wedding absolutely magical! Every detail was perfect, and our guests couldn\'t stop talking about the incredible food. Highly recommend!' },
        { name: 'Mohammed Rahman', text: 'We\'ve used Golden Globe for multiple government events. Their discretion, reliability, and quality are unmatched. A truly premium catering service.' }
      ]
    },
    contact: {
      subtitle: 'Get in Touch',
      title: 'Let\'s Create Something Extraordinary',
      desc: 'Whether you\'re planning an intimate gathering or a grand celebration, our team is ready to bring your vision to life.',
      formTitle: 'Private Consultation Request',
      name: 'Your Name',
      email: 'Email Address',
      phone: 'Phone Number',
      eventType: 'Event Type',
      eventDate: 'Event Date',
      guests: 'Number of Guests',
      message: 'Your Message',
      submit: 'Submit Request',
      selectEvent: 'Select Event Type',
      eventTypes: ['Corporate Event', 'Wedding', 'Government/Royal', 'Private Function', 'Mega Outdoor Event', 'Other']
    },
    footer: {
      desc: 'Luxury catering services delivering exceptional culinary experiences for elite events across the UAE.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      copyright: '© 2024 Golden Globe Catering. All Rights Reserved.',
      crafted: 'Crafted with'
    },
    chat: {
      title: 'Golden Globe Assistant',
      status: 'Online • AI Powered',
      welcome: 'Welcome to Golden Globe Catering! 👋 I\'m your AI assistant. How can I help you today?',
      helpWith: 'You can ask me about:',
      topics: ['Our services', 'Booking process', 'Menu options', 'Pricing information', 'Event planning'],
      placeholder: 'Type your message...'
    }
  },
  ar: {
    lang: 'ar',
    dir: 'rtl',
    meta: {
      title: 'جولدن جلوب للتموين | خدمات تموين فاخرة للفعاليات الراقية في أبوظبي',
      description: 'خدمات تموين فاخرة ومتميزة في أبوظبي والإمارات. فعاليات الشركات، المناسبات الملكية، حفلات الزفاف وضيافة كبار الشخصيات. أكثر من 15 عاماً من التميز.',
      keywords: 'تموين فاخر أبوظبي، تموين متميز الإمارات، تموين الشركات، تموين حفلات الزفاف، ضيافة VIP، تموين المناسبات الملكية'
    },
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      portfolio: 'أعمالنا',
      reviews: 'آراء العملاء',
      contact: 'اتصل بنا',
      cta: 'اكتشف أسلوبك'
    },
    hero: {
      subtitle: 'مرحباً بكم في عالم التميز',
      title: 'تموين فاخر لـ',
      titleHighlight: 'الفعاليات الراقية',
      desc: 'نصنع تجارب طهي لا تُنسى منذ عام 2008',
      categories: ['الشركات', 'الملكية', 'الحكومية', 'ضيافة VIP'],
      btnPrimary: 'اطلب عرض سعر',
      btnSecondary: 'شاهد فعالياتنا',
      scroll: 'مرر للأسفل'
    },
    about: {
      subtitle: 'من نحن',
      title: 'نحن لا نقدم الطعام فقط — نصنع التجارب',
      p1: 'جولدن جلوب لخدمات التموين هي واحدة من الشركات الرائدة في مجال التموين في أبوظبي، حيث نفتح أبوابنا للجميع مع التزام راسخ بتقديم خدمات ضيافة لا مثيل لها.',
      p2: 'من بداياتنا في خدمات التموين والمطاعم الفاخرة إلى تقديم خدمات الاستشارات المتعلقة بالتموين، تطورنا باستمرار لتلبية الاحتياجات المتغيرة لعملائنا الكرام.',
      p3: 'نجحنا في توسيع حضورنا في جميع أنحاء الإمارات العربية المتحدة، لخدمة الفعاليات المؤسسية والحكومية وحفلات الزفاف الفاخرة والتجمعات الخاصة لكبار الشخصيات.',
      stats: {
        years: 'سنوات الخبرة',
        events: 'فعالية منظمة',
        guests: 'ضيف سعيد'
      }
    },
    vision: {
      subtitle: 'هدفنا',
      title: 'الرؤية والرسالة',
      visionTitle: 'رؤيتنا',
      visionText: 'أن نكون الرواد في تقديم تجارب ضيافة استثنائية وإعادة تعريف معايير الصناعة. نتصور جولدن جلوب للتموين كالخيار الأول لفعاليات كبار الشخصيات والشركات.',
      missionTitle: 'رسالتنا',
      missionText: 'تقديم خدمات ضيافة من الدرجة الأولى بشكل مستمر، من المطاعم الفاخرة إلى التموين الصناعي، مع إعطاء الأولوية للتميز والابتكار ورضا العملاء.'
    },
    services: {
      subtitle: 'ما نقدمه',
      title: 'خدماتنا المتميزة',
      desc: 'من التجمعات الحميمة إلى الاحتفالات الكبرى، نقدم التميز في كل المستويات',
      items: [
        { title: 'تموين الشركات', desc: 'غداء تنفيذي، مؤتمرات، إطلاق منتجات، وتجمعات الشركات بخدمة لا تشوبها شائبة.' },
        { title: 'الفعاليات الملكية والحكومية', desc: 'فعاليات مرموقة تتطلب أعلى مستويات السرية والأمان والتميز في الطهي.' },
        { title: 'حفلات الزفاف والمناسبات الخاصة', desc: 'خلق لحظات سحرية مع قوائم طعام مخصصة وعرض أنيق لاحتفالاتكم الخاصة.' },
        { title: 'ضيافة VIP والصالات', desc: 'تجارب طعام حصرية وخدمات صالات متميزة للضيوف المميزين.' },
        { title: 'الفعاليات الخارجية الكبرى', desc: 'خيام فاخرة ومرافق حديثة وتموين لا تشوبه شائبة للاحتفالات الكبيرة.' },
        { title: 'التموين الصناعي وسكن العمال', desc: 'وجبات مغذية وعالية الجودة تُقدم بشكل مستمر لمرافق الإقامة.' }
      ]
    },
    portfolio: {
      subtitle: 'أعمالنا',
      title: 'فعاليات مميزة',
      desc: 'لمحة عن عالمنا من التميز في الطهي وإتقان الفعاليات',
      viewEvent: 'عرض الفعالية'
    },
    quiz: {
      title: 'اكتشف أسلوب فعاليتك',
      desc: 'خذ اختبارنا السريع واحصل على استشارة VIP مجانية',
      start: 'ابدأ رحلتك',
      q1: 'ما نوع الفعالية التي تخطط لها؟',
      q2: 'كم عدد الضيوف المتوقع؟',
      q3: 'ما هو أسلوبك المفضل؟',
      q4: 'ما المطبخ الذي يثير اهتمامك؟',
      options: {
        corporate: 'فعالية شركات',
        wedding: 'حفل زفاف',
        government: 'حكومية/ملكية',
        private: 'حفلة خاصة',
        under50: 'أقل من 50',
        medium: '50 - 150',
        large: '150 - 500',
        mega: '+500',
        classic: 'كلاسيكي أنيق',
        modern: 'عصري أنيق',
        royal: 'ملكي فاخر',
        cultural: 'تراثي ثقافي',
        international: 'دولي',
        arabic: 'عربي',
        asian: 'آسيوي',
        mixed: 'مزيج من كل شيء'
      },
      reward: 'مكافأتك VIP',
      rewardText: 'استشارة قائمة طعام مجانية + أولوية الحجز',
      bookConsultation: 'احجز استشارتك'
    },
    reviews: {
      subtitle: 'آراء العملاء',
      title: 'ماذا يقول عملاؤنا',
      readMore: 'اقرأ المزيد من الآراء',
      items: [
        { name: 'أحمد حسن', text: 'خدمة استثنائية من البداية إلى النهاية. قدم جولدن جلوب خدمات التموين لفعاليتنا المؤسسية باحترافية مطلقة. جودة الطعام والعرض تجاوزت كل التوقعات.' },
        { name: 'سارة خان', text: 'جعلوا حفل زفافنا سحرياً تماماً! كل تفصيل كان مثالياً، ولم يتوقف ضيوفنا عن الحديث عن الطعام الرائع. أوصي بهم بشدة!' },
        { name: 'محمد رحمن', text: 'استخدمنا جولدن جلوب لعدة فعاليات حكومية. سريتهم وموثوقيتهم وجودتهم لا مثيل لها. خدمة تموين متميزة حقاً.' }
      ]
    },
    contact: {
      subtitle: 'تواصل معنا',
      title: 'لنصنع شيئاً استثنائياً معاً',
      desc: 'سواء كنت تخطط لتجمع حميم أو احتفال كبير، فريقنا جاهز لتحقيق رؤيتك.',
      formTitle: 'طلب استشارة خاصة',
      name: 'اسمك',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      eventType: 'نوع الفعالية',
      eventDate: 'تاريخ الفعالية',
      guests: 'عدد الضيوف',
      message: 'رسالتك',
      submit: 'إرسال الطلب',
      selectEvent: 'اختر نوع الفعالية',
      eventTypes: ['فعالية شركات', 'حفل زفاف', 'حكومية/ملكية', 'مناسبة خاصة', 'فعالية خارجية كبيرة', 'أخرى']
    },
    footer: {
      desc: 'خدمات تموين فاخرة تقدم تجارب طهي استثنائية للفعاليات الراقية في جميع أنحاء الإمارات.',
      quickLinks: 'روابط سريعة',
      services: 'الخدمات',
      contact: 'اتصل بنا',
      copyright: '© 2024 جولدن جلوب للتموين. جميع الحقوق محفوظة.',
      crafted: 'صُنع بـ'
    },
    chat: {
      title: 'مساعد جولدن جلوب',
      status: 'متصل • مدعوم بالذكاء الاصطناعي',
      welcome: 'مرحباً بك في جولدن جلوب للتموين! 👋 أنا مساعدك الذكي. كيف يمكنني مساعدتك اليوم؟',
      helpWith: 'يمكنك السؤال عن:',
      topics: ['خدماتنا', 'عملية الحجز', 'خيارات القائمة', 'معلومات الأسعار', 'تخطيط الفعاليات'],
      placeholder: 'اكتب رسالتك...'
    }
  },
  fr: {
    lang: 'fr',
    dir: 'ltr',
    meta: {
      title: 'Golden Globe Catering | Traiteur de Luxe pour Événements d\'Élite à Abu Dhabi',
      description: 'Services de traiteur haut de gamme à Abu Dhabi et aux EAU. Événements d\'entreprise, fonctions royales, mariages et hospitalité VIP. Plus de 15 ans d\'excellence.',
      keywords: 'traiteur luxe Abu Dhabi, traiteur premium EAU, traiteur entreprise, traiteur mariage, hospitalité VIP, événements royaux'
    },
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      portfolio: 'Portfolio',
      reviews: 'Avis',
      contact: 'Contact',
      cta: 'Découvrez Votre Style'
    },
    hero: {
      subtitle: 'Bienvenue dans l\'Excellence',
      title: 'Traiteur de Luxe pour',
      titleHighlight: 'Événements d\'Élite',
      desc: 'Créer des Expériences Culinaires Inoubliables Depuis 2008',
      categories: ['ENTREPRISE', 'ROYAL', 'GOUVERNEMENT', 'HOSPITALITÉ VIP'],
      btnPrimary: 'Demander un Devis',
      btnSecondary: 'Voir Nos Événements',
      scroll: 'Défiler'
    },
    about: {
      subtitle: 'À Propos de Nous',
      title: 'Nous Ne Faisons Pas Que Servir — Nous Créons des Expériences',
      p1: 'Golden Globe Catering Services est l\'un des principaux services de traiteur à Abu Dhabi, où nous ouvrons nos portes à tous avec un engagement indéfectible à offrir des services d\'hospitalité inégalés.',
      p2: 'De nos débuts dans les services de restauration et les restaurants gastronomiques à l\'offre de services de conseil en restauration, nous avons continuellement évolué pour répondre aux besoins changeants de nos clients.',
      p3: 'Nous avons réussi à étendre notre présence dans les Émirats arabes unis, servant des fonctions d\'entreprise, des événements gouvernementaux, des mariages de luxe et des rassemblements VIP privés.',
      stats: {
        years: 'Ans d\'Expérience',
        events: 'Événements Servis',
        guests: 'Invités Satisfaits'
      }
    },
    vision: {
      subtitle: 'Notre Mission',
      title: 'Vision et Mission',
      visionTitle: 'Notre Vision',
      visionText: 'Être leader dans la fourniture d\'expériences d\'hospitalité exceptionnelles et redéfinir les standards de l\'industrie. Nous envisageons Golden Globe Catering comme le premier choix pour les événements VIP et d\'entreprise.',
      missionTitle: 'Notre Mission',
      missionText: 'Fournir constamment des services d\'hospitalité de premier ordre, de la restauration gastronomique à la restauration industrielle, tout en privilégiant l\'excellence, l\'innovation et la satisfaction client.'
    },
    services: {
      subtitle: 'Ce Que Nous Offrons',
      title: 'Nos Services Premium',
      desc: 'Des réunions intimes aux grandes célébrations, nous offrons l\'excellence à toutes les échelles',
      items: [
        { title: 'Traiteur d\'Entreprise', desc: 'Déjeuners exécutifs, conférences, lancements de produits et réunions d\'entreprise avec un service impeccable.' },
        { title: 'Événements Royaux et Gouvernementaux', desc: 'Événements prestigieux nécessitant le plus haut niveau de discrétion, de sécurité et d\'excellence culinaire.' },
        { title: 'Mariages et Fonctions Privées', desc: 'Créer des moments magiques avec des menus sur mesure et une présentation élégante pour vos célébrations.' },
        { title: 'Hospitalité VIP et Salon', desc: 'Expériences culinaires exclusives et services de salon premium pour les invités distingués.' },
        { title: 'Méga Événements en Plein Air', desc: 'Tentes luxueuses, installations modernes et restauration impeccable pour les grandes célébrations.' },
        { title: 'Restauration Industrielle', desc: 'Repas nutritifs et de qualité livrés de manière constante pour les hébergements de la main-d\'œuvre.' }
      ]
    },
    portfolio: {
      subtitle: 'Notre Travail',
      title: 'Événements Signature',
      desc: 'Un aperçu de notre monde d\'excellence culinaire et de perfection événementielle',
      viewEvent: 'Voir l\'Événement'
    },
    quiz: {
      title: 'Découvrez Votre Style d\'Événement',
      desc: 'Faites notre quiz de 30 secondes et recevez une consultation VIP gratuite',
      start: 'Commencer Votre Voyage',
      q1: 'Quel type d\'événement planifiez-vous?',
      q2: 'Combien d\'invités attendez-vous?',
      q3: 'Quel est votre style préféré?',
      q4: 'Quelle cuisine vous intéresse?',
      options: {
        corporate: 'Événement d\'Entreprise',
        wedding: 'Mariage',
        government: 'Gouvernemental/Royal',
        private: 'Fête Privée',
        under50: 'Moins de 50',
        medium: '50 - 150',
        large: '150 - 500',
        mega: '500+',
        classic: 'Classique Élégant',
        modern: 'Moderne Chic',
        royal: 'Luxe Royal',
        cultural: 'Traditionnel Culturel',
        international: 'International',
        arabic: 'Arabe',
        asian: 'Fusion Asiatique',
        mixed: 'Mélange de Tout'
      },
      reward: 'Votre Récompense VIP',
      rewardText: 'Consultation Menu Gratuite + Réservation Prioritaire',
      bookConsultation: 'Réserver Votre Consultation'
    },
    reviews: {
      subtitle: 'Témoignages Clients',
      title: 'Ce Que Disent Nos Clients',
      readMore: 'Lire Plus d\'Avis',
      items: [
        { name: 'Ahmed Hassan', text: 'Service exceptionnel du début à la fin. Golden Globe a assuré le traiteur de notre événement d\'entreprise avec un professionnalisme absolu. La qualité et la présentation ont dépassé toutes les attentes.' },
        { name: 'Sarah Khan', text: 'Ils ont rendu notre mariage absolument magique! Chaque détail était parfait, et nos invités n\'ont pas cessé de parler de la nourriture incroyable. Je recommande vivement!' },
        { name: 'Mohammed Rahman', text: 'Nous avons utilisé Golden Globe pour plusieurs événements gouvernementaux. Leur discrétion, fiabilité et qualité sont inégalées. Un service de traiteur vraiment premium.' }
      ]
    },
    contact: {
      subtitle: 'Contactez-Nous',
      title: 'Créons Quelque Chose d\'Extraordinaire',
      desc: 'Que vous planifiiez une réunion intime ou une grande célébration, notre équipe est prête à donner vie à votre vision.',
      formTitle: 'Demande de Consultation Privée',
      name: 'Votre Nom',
      email: 'Adresse Email',
      phone: 'Numéro de Téléphone',
      eventType: 'Type d\'Événement',
      eventDate: 'Date de l\'Événement',
      guests: 'Nombre d\'Invités',
      message: 'Votre Message',
      submit: 'Envoyer la Demande',
      selectEvent: 'Sélectionner le Type',
      eventTypes: ['Événement d\'Entreprise', 'Mariage', 'Gouvernemental/Royal', 'Fonction Privée', 'Méga Événement', 'Autre']
    },
    footer: {
      desc: 'Services de traiteur de luxe offrant des expériences culinaires exceptionnelles pour les événements d\'élite aux EAU.',
      quickLinks: 'Liens Rapides',
      services: 'Services',
      contact: 'Contact',
      copyright: '© 2024 Golden Globe Catering. Tous Droits Réservés.',
      crafted: 'Créé avec'
    },
    chat: {
      title: 'Assistant Golden Globe',
      status: 'En ligne • Propulsé par IA',
      welcome: 'Bienvenue chez Golden Globe Catering! 👋 Je suis votre assistant IA. Comment puis-je vous aider?',
      helpWith: 'Vous pouvez me demander:',
      topics: ['Nos services', 'Processus de réservation', 'Options de menu', 'Informations sur les prix', 'Planification d\'événements'],
      placeholder: 'Tapez votre message...'
    }
  }
};

// Generate HTML for a specific language
function generateHTML(lang: 'en' | 'ar' | 'fr') {
  const t = translations[lang];
  const isRTL = t.dir === 'rtl';
  
  return `<!DOCTYPE html>
<html lang="${t.lang}" dir="${t.dir}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Primary SEO Meta Tags -->
    <title>${t.meta.title}</title>
    <meta name="title" content="${t.meta.title}">
    <meta name="description" content="${t.meta.description}">
    <meta name="keywords" content="${t.meta.keywords}">
    <meta name="author" content="Golden Globe Catering">
    <meta name="robots" content="index, follow">
    <meta name="language" content="${t.lang}">
    <meta name="revisit-after" content="7 days">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://goldenglobecatering.com${lang === 'en' ? '' : '/' + lang}">
    
    <!-- Alternate Language Links -->
    <link rel="alternate" hreflang="en" href="https://goldenglobecatering.com">
    <link rel="alternate" hreflang="ar" href="https://goldenglobecatering.com/ar">
    <link rel="alternate" hreflang="fr" href="https://goldenglobecatering.com/fr">
    <link rel="alternate" hreflang="x-default" href="https://goldenglobecatering.com">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://goldenglobecatering.com${lang === 'en' ? '' : '/' + lang}">
    <meta property="og:title" content="${t.meta.title}">
    <meta property="og:description" content="${t.meta.description}">
    <meta property="og:image" content="https://goldenglobecatering.com/og-image.jpg">
    <meta property="og:locale" content="${lang === 'ar' ? 'ar_AE' : lang === 'fr' ? 'fr_FR' : 'en_US'}">
    <meta property="og:site_name" content="Golden Globe Catering">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://goldenglobecatering.com${lang === 'en' ? '' : '/' + lang}">
    <meta property="twitter:title" content="${t.meta.title}">
    <meta property="twitter:description" content="${t.meta.description}">
    <meta property="twitter:image" content="https://goldenglobecatering.com/og-image.jpg">
    
    <!-- Geo Tags -->
    <meta name="geo.region" content="AE-AZ">
    <meta name="geo.placename" content="Abu Dhabi">
    <meta name="geo.position" content="24.4539;54.3773">
    <meta name="ICBM" content="24.4539, 54.3773">
    
    <!-- Schema.org Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "CateringService",
      "name": "Golden Globe Catering",
      "description": "${t.meta.description}",
      "url": "https://goldenglobecatering.com",
      "logo": "https://goldenglobecatering.com/logo.png",
      "image": "https://goldenglobecatering.com/og-image.jpg",
      "telephone": "+971-2-555-1234",
      "email": "info@goldenglobecatering.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "M38, Industrial Area, Mussaffah",
        "addressLocality": "Abu Dhabi",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.4539",
        "longitude": "54.3773"
      },
      "priceRange": "$$$",
      "servesCuisine": ["International", "Arabic", "Asian", "Continental"],
      "areaServed": {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150"
      },
      "sameAs": [
        "https://www.facebook.com/goldenglobecatering",
        "https://www.instagram.com/goldenglobecatering",
        "https://www.linkedin.com/company/goldenglobecatering"
      ]
    }
    </script>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <!-- AOS Animation Library -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    
    <style>
        :root {
            --gold: #C9A962;
            --gold-light: #E8D5A3;
            --gold-dark: #A68B3D;
            --black: #0A0A0A;
            --black-light: #1A1A1A;
            --charcoal: #2A2A2A;
            --white: #FFFFFF;
            --white-soft: #F5F5F5;
            --gray: #888888;
            --font-serif: 'Playfair Display', serif;
            --font-sans: ${isRTL ? "'Noto Sans Arabic', 'Inter', sans-serif" : "'Inter', sans-serif"};
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html {
            scroll-behavior: smooth;
        }
        
        body {
            font-family: var(--font-sans);
            background-color: var(--black);
            color: var(--white);
            overflow-x: hidden;
            line-height: 1.6;
            direction: ${t.dir};
        }
        
        /* RTL Support */
        ${isRTL ? `
        .navbar { flex-direction: row-reverse; }
        .nav-links { flex-direction: row-reverse; }
        .logo { flex-direction: row-reverse; }
        .hero-buttons { flex-direction: row-reverse; }
        .about-container { direction: rtl; }
        .contact-container { direction: rtl; }
        .footer-top { direction: rtl; }
        .vm-container { direction: rtl; }
        .review-header { flex-direction: row-reverse; }
        .contact-item { flex-direction: row-reverse; }
        .chat-header-info { flex-direction: row-reverse; }
        .chat-message.user { align-self: flex-start; border-radius: 15px 15px 5px 15px; }
        .chat-message.bot { align-self: flex-end; border-radius: 15px 15px 15px 5px; }
        ` : ''}
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--black); }
        ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 4px; }
        
        /* Language Switcher */
        .lang-switcher {
            display: flex;
            gap: 10px;
            align-items: center;
            margin-${isRTL ? 'right' : 'left'}: 20px;
        }
        .lang-btn {
            background: transparent;
            border: 1px solid var(--charcoal);
            color: var(--gray);
            padding: 5px 12px;
            font-size: 0.8rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
        }
        .lang-btn:hover, .lang-btn.active {
            border-color: var(--gold);
            color: var(--gold);
        }
        
        /* Preloader */
        .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--black);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.8s ease, visibility 0.8s ease;
        }
        .preloader.hidden { opacity: 0; visibility: hidden; }
        .preloader-content { text-align: center; }
        .preloader-logo {
            font-family: var(--font-serif);
            font-size: 2.5rem;
            color: var(--gold);
            margin-bottom: 30px;
            animation: pulse 1.5s ease-in-out infinite;
        }
        .preloader-bar {
            width: 200px;
            height: 2px;
            background: var(--charcoal);
            border-radius: 2px;
            overflow: hidden;
        }
        .preloader-progress {
            height: 100%;
            background: linear-gradient(90deg, var(--gold), var(--gold-light));
            animation: loading 2s ease-out forwards;
        }
        @keyframes loading { from { width: 0; } to { width: 100%; } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        
        /* Navigation */
        .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 20px 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
            transition: all 0.4s ease;
            background: transparent;
        }
        .navbar.scrolled {
            background: rgba(10, 10, 10, 0.95);
            backdrop-filter: blur(10px);
            padding: 15px 60px;
        }
        .logo {
            font-family: var(--font-serif);
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--gold);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .logo-icon {
            width: 45px;
            height: 45px;
            border: 2px solid var(--gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }
        .nav-links {
            display: flex;
            gap: 40px;
            list-style: none;
            align-items: center;
        }
        .nav-links a {
            color: var(--white);
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 400;
            letter-spacing: 1px;
            text-transform: uppercase;
            position: relative;
            padding: 5px 0;
            transition: color 0.3s ease;
        }
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            ${isRTL ? 'right' : 'left'}: 0;
            width: 0;
            height: 1px;
            background: var(--gold);
            transition: width 0.3s ease;
        }
        .nav-links a:hover { color: var(--gold); }
        .nav-links a:hover::after { width: 100%; }
        .nav-cta {
            background: transparent;
            border: 1px solid var(--gold);
            color: var(--gold);
            padding: 12px 28px;
            font-size: 0.85rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .nav-cta:hover { background: var(--gold); color: var(--black); }
        
        /* Mobile Menu */
        .menu-toggle {
            display: none;
            flex-direction: column;
            gap: 6px;
            cursor: pointer;
            z-index: 1001;
        }
        .menu-toggle span {
            width: 30px;
            height: 2px;
            background: var(--gold);
            transition: all 0.3s ease;
        }
        .mobile-menu {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: var(--black);
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
        }
        .mobile-menu.active { opacity: 1; visibility: visible; }
        .mobile-menu-content {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
        }
        .mobile-menu a {
            font-family: var(--font-serif);
            font-size: 2rem;
            color: var(--white);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .mobile-menu a:hover { color: var(--gold); }
        .mobile-lang-switcher {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        
        /* Hero Section */
        .hero {
            position: relative;
            height: 100vh;
            min-height: 700px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
        }
        .hero-slider {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .hero-slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 1.5s ease;
            background-size: cover;
            background-position: center;
            transform: scale(1);
            animation: kenBurns 8s ease-in-out infinite;
        }
        .hero-slide.active { opacity: 1; }
        @keyframes kenBurns { 0% { transform: scale(1); } 100% { transform: scale(1.08); } }
        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.8) 100%);
            z-index: 1;
        }
        .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            max-width: 900px;
            padding: 0 20px;
        }
        .hero-subtitle {
            font-size: 0.9rem;
            letter-spacing: 6px;
            text-transform: uppercase;
            color: var(--gold);
            margin-bottom: 25px;
            opacity: 0;
            animation: fadeInUp 1s ease 0.5s forwards;
        }
        .hero-title {
            font-family: var(--font-serif);
            font-size: 4.5rem;
            font-weight: 500;
            line-height: 1.1;
            margin-bottom: 25px;
            opacity: 0;
            animation: fadeInUp 1s ease 0.7s forwards;
        }
        .hero-title span { color: var(--gold); }
        .hero-desc {
            font-size: 1.1rem;
            color: var(--gray);
            margin-bottom: 20px;
            opacity: 0;
            animation: fadeInUp 1s ease 0.9s forwards;
        }
        .hero-categories {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-bottom: 45px;
            flex-wrap: wrap;
            opacity: 0;
            animation: fadeInUp 1s ease 1s forwards;
        }
        .hero-categories span {
            font-size: 0.85rem;
            letter-spacing: 2px;
            color: var(--white-soft);
            position: relative;
        }
        .hero-categories span:not(:last-child)::after {
            content: '•';
            position: absolute;
            ${isRTL ? 'left' : 'right'}: -18px;
            color: var(--gold);
        }
        .hero-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            opacity: 0;
            animation: fadeInUp 1s ease 1.2s forwards;
        }
        .btn-primary {
            background: var(--gold);
            color: var(--black);
            padding: 18px 45px;
            font-size: 0.85rem;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        .btn-primary::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            transition: left 0.5s ease;
        }
        .btn-primary:hover::before { left: 100%; }
        .btn-primary:hover { background: var(--gold-light); transform: translateY(-2px); }
        .btn-secondary {
            background: transparent;
            color: var(--white);
            padding: 18px 45px;
            font-size: 0.85rem;
            font-weight: 500;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
            border: 1px solid var(--white);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .btn-secondary:hover { background: var(--white); color: var(--black); }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .scroll-indicator {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            opacity: 0;
            animation: fadeInUp 1s ease 1.5s forwards;
        }
        .scroll-indicator span {
            font-size: 0.75rem;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: var(--gray);
        }
        .scroll-line {
            width: 1px;
            height: 60px;
            background: linear-gradient(to bottom, var(--gold), transparent);
            animation: scrollPulse 2s ease-in-out infinite;
        }
        @keyframes scrollPulse { 0%, 100% { opacity: 1; height: 60px; } 50% { opacity: 0.5; height: 40px; } }
        
        /* Gold Divider */
        .gold-divider {
            width: 80px;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--gold), transparent);
            margin: 0 auto;
        }
        
        /* Section Styles */
        section { padding: 120px 60px; }
        .section-header { text-align: center; margin-bottom: 80px; }
        .section-subtitle {
            font-size: 0.85rem;
            letter-spacing: 4px;
            text-transform: uppercase;
            color: var(--gold);
            margin-bottom: 15px;
        }
        .section-title {
            font-family: var(--font-serif);
            font-size: 3rem;
            font-weight: 500;
            margin-bottom: 25px;
        }
        .section-desc {
            max-width: 600px;
            margin: 0 auto;
            color: var(--gray);
            font-size: 1rem;
        }
        
        /* About Section */
        .about {
            background: var(--black-light);
            position: relative;
            overflow: hidden;
        }
        .about::before {
            content: '';
            position: absolute;
            top: 0;
            ${isRTL ? 'left' : 'right'}: 0;
            width: 40%;
            height: 100%;
            background: linear-gradient(45deg, transparent, rgba(201, 169, 98, 0.03));
        }
        .about-container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 100px;
            align-items: center;
        }
        .about-image { position: relative; }
        .about-image img {
            width: 100%;
            height: 600px;
            object-fit: cover;
        }
        .about-image-frame {
            position: absolute;
            top: 30px;
            ${isRTL ? 'right' : 'left'}: 30px;
            ${isRTL ? 'left' : 'right'}: -30px;
            bottom: -30px;
            border: 1px solid var(--gold);
            z-index: -1;
        }
        .about-content { padding-${isRTL ? 'left' : 'right'}: 40px; }
        .about-content .section-subtitle { text-align: ${isRTL ? 'right' : 'left'}; }
        .about-content .section-title { text-align: ${isRTL ? 'right' : 'left'}; margin-bottom: 30px; }
        .about-content p {
            color: var(--gray);
            margin-bottom: 25px;
            font-size: 1rem;
            line-height: 1.8;
        }
        .about-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-top: 50px;
            padding-top: 50px;
            border-top: 1px solid var(--charcoal);
        }
        .stat-item { text-align: center; }
        .stat-number {
            font-family: var(--font-serif);
            font-size: 3rem;
            color: var(--gold);
            margin-bottom: 10px;
        }
        .stat-label {
            font-size: 0.85rem;
            color: var(--gray);
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        
        /* Vision & Mission */
        .vision-mission { background: var(--black); position: relative; }
        .vm-container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
        }
        .vm-card {
            background: var(--black-light);
            padding: 60px;
            position: relative;
            overflow: hidden;
            border: 1px solid var(--charcoal);
            transition: all 0.4s ease;
        }
        .vm-card:hover { border-color: var(--gold); transform: translateY(-5px); }
        .vm-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, var(--gold), var(--gold-dark));
        }
        .vm-icon {
            width: 70px;
            height: 70px;
            border: 1px solid var(--gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: var(--gold);
            margin-bottom: 30px;
        }
        .vm-card h3 {
            font-family: var(--font-serif);
            font-size: 2rem;
            margin-bottom: 25px;
        }
        .vm-card p { color: var(--gray); line-height: 1.8; }
        
        /* Services Section */
        .services { background: var(--black-light); }
        .services-grid {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }
        .service-card {
            position: relative;
            height: 450px;
            overflow: hidden;
            cursor: pointer;
        }
        .service-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s ease;
        }
        .service-card:hover img { transform: scale(1.1); }
        .service-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.1) 100%);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 40px;
            transition: all 0.4s ease;
        }
        .service-card:hover .service-overlay {
            background: linear-gradient(to top, rgba(201,169,98,0.9) 0%, rgba(10,10,10,0.6) 60%, rgba(10,10,10,0.3) 100%);
        }
        .service-icon {
            font-size: 2rem;
            color: var(--gold);
            margin-bottom: 20px;
            transition: color 0.4s ease;
        }
        .service-card:hover .service-icon { color: var(--black); }
        .service-card h3 {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            margin-bottom: 15px;
            transition: color 0.4s ease;
        }
        .service-card:hover h3 { color: var(--black); }
        .service-card p {
            color: var(--gray);
            font-size: 0.9rem;
            line-height: 1.6;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.4s ease;
        }
        .service-card:hover p { opacity: 1; transform: translateY(0); color: var(--black); }
        
        /* Portfolio */
        .portfolio { background: var(--black); }
        .portfolio-grid {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }
        .portfolio-item {
            position: relative;
            height: 300px;
            overflow: hidden;
            cursor: pointer;
        }
        .portfolio-item.large { grid-column: span 2; grid-row: span 2; height: auto; }
        .portfolio-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }
        .portfolio-item:hover img { transform: scale(1.1); }
        .portfolio-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 10, 10, 0.8);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: opacity 0.4s ease;
        }
        .portfolio-item:hover .portfolio-overlay { opacity: 1; }
        .portfolio-overlay i { font-size: 2rem; color: var(--gold); margin-bottom: 15px; }
        .portfolio-overlay span { font-size: 0.85rem; letter-spacing: 2px; text-transform: uppercase; }
        
        /* Quiz Section */
        .quiz-section {
            background: linear-gradient(135deg, var(--black-light) 0%, var(--black) 100%);
            position: relative;
            overflow: hidden;
        }
        .quiz-section::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(201, 169, 98, 0.05) 0%, transparent 70%);
        }
        .quiz-container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            z-index: 1;
        }
        .quiz-icon {
            width: 100px;
            height: 100px;
            border: 2px solid var(--gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 40px;
            font-size: 2.5rem;
            color: var(--gold);
        }
        .quiz-title {
            font-family: var(--font-serif);
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        .quiz-desc {
            color: var(--gray);
            margin-bottom: 40px;
            font-size: 1.1rem;
        }
        
        /* Reviews */
        .reviews { background: var(--black-light); }
        .reviews-container { max-width: 1400px; margin: 0 auto; }
        .google-badge {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 60px;
        }
        .google-badge img { height: 40px; }
        .google-rating { display: flex; align-items: center; gap: 10px; }
        .google-rating .stars { color: #FBBC04; font-size: 1.2rem; }
        .google-rating .rating-text { font-size: 1.5rem; font-weight: 600; }
        .reviews-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }
        .review-card {
            background: var(--black);
            padding: 40px;
            border: 1px solid var(--charcoal);
            transition: all 0.3s ease;
        }
        .review-card:hover { border-color: var(--gold); transform: translateY(-5px); }
        .review-header {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 20px;
        }
        .review-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--gold);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--font-serif);
            font-size: 1.2rem;
            color: var(--black);
        }
        .review-info h4 { font-size: 1rem; margin-bottom: 5px; }
        .review-info .stars { color: #FBBC04; font-size: 0.9rem; }
        .review-text {
            color: var(--gray);
            font-size: 0.95rem;
            line-height: 1.8;
            font-style: italic;
        }
        .review-date { margin-top: 20px; font-size: 0.8rem; color: var(--gray); }
        
        /* Contact Section */
        .contact { background: var(--black); position: relative; }
        .contact-container {
            max-width: 1400px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 80px;
        }
        .contact-info h3 {
            font-family: var(--font-serif);
            font-size: 2.5rem;
            margin-bottom: 30px;
        }
        .contact-info p { color: var(--gray); margin-bottom: 40px; line-height: 1.8; }
        .contact-details { display: flex; flex-direction: column; gap: 25px; }
        .contact-item { display: flex; align-items: center; gap: 20px; }
        .contact-item i {
            width: 50px;
            height: 50px;
            border: 1px solid var(--gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gold);
            font-size: 1.1rem;
        }
        .contact-item span { color: var(--white-soft); }
        .contact-form {
            background: var(--black-light);
            padding: 50px;
            border: 1px solid var(--charcoal);
        }
        .contact-form h4 {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            margin-bottom: 30px;
            text-align: center;
        }
        .form-group { margin-bottom: 25px; }
        .form-group label {
            display: block;
            font-size: 0.85rem;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: var(--gray);
            margin-bottom: 10px;
        }
        .form-group input, .form-group select, .form-group textarea {
            width: 100%;
            padding: 15px 20px;
            background: var(--black);
            border: 1px solid var(--charcoal);
            color: var(--white);
            font-family: var(--font-sans);
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
            outline: none;
            border-color: var(--gold);
        }
        .form-group textarea { height: 120px; resize: none; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .form-submit {
            width: 100%;
            padding: 18px;
            background: var(--gold);
            color: var(--black);
            border: none;
            font-size: 0.9rem;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .form-submit:hover { background: var(--gold-light); }
        
        /* Footer */
        .footer {
            background: var(--black-light);
            padding: 80px 60px 30px;
            border-top: 1px solid var(--charcoal);
        }
        .footer-container { max-width: 1400px; margin: 0 auto; }
        .footer-top {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 60px;
            padding-bottom: 60px;
            border-bottom: 1px solid var(--charcoal);
        }
        .footer-brand { max-width: 350px; }
        .footer-logo {
            font-family: var(--font-serif);
            font-size: 2rem;
            color: var(--gold);
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .footer-brand p { color: var(--gray); line-height: 1.8; margin-bottom: 30px; }
        .social-links { display: flex; gap: 15px; }
        .social-links a {
            width: 45px;
            height: 45px;
            border: 1px solid var(--charcoal);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            transition: all 0.3s ease;
        }
        .social-links a:hover { border-color: var(--gold); color: var(--gold); }
        .footer-column h4 {
            font-family: var(--font-serif);
            font-size: 1.2rem;
            margin-bottom: 25px;
            color: var(--white);
        }
        .footer-column ul { list-style: none; }
        .footer-column ul li { margin-bottom: 12px; }
        .footer-column ul a {
            color: var(--gray);
            text-decoration: none;
            font-size: 0.95rem;
            transition: color 0.3s ease;
        }
        .footer-column ul a:hover { color: var(--gold); }
        .footer-bottom {
            padding-top: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .footer-bottom p { color: var(--gray); font-size: 0.9rem; }
        
        /* Floating Buttons */
        .floating-buttons {
            position: fixed;
            bottom: 30px;
            ${isRTL ? 'left' : 'right'}: 30px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            z-index: 1000;
        }
        .float-btn {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
            border: none;
        }
        .whatsapp-btn { background: #25D366; color: white; }
        .whatsapp-btn:hover { transform: scale(1.1); }
        .chat-btn { background: var(--gold); color: var(--black); }
        .chat-btn:hover { transform: scale(1.1); }
        
        /* Chat Widget */
        .chat-widget {
            position: fixed;
            bottom: 110px;
            ${isRTL ? 'left' : 'right'}: 30px;
            width: 380px;
            max-height: 550px;
            background: var(--black-light);
            border: 1px solid var(--charcoal);
            border-radius: 15px;
            overflow: hidden;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s ease;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }
        .chat-widget.active { opacity: 1; visibility: visible; transform: translateY(0); }
        .chat-header {
            background: var(--gold);
            color: var(--black);
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .chat-header-info { display: flex; align-items: center; gap: 12px; }
        .chat-avatar {
            width: 45px;
            height: 45px;
            background: var(--black);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gold);
        }
        .chat-header h4 { font-size: 1rem; margin-bottom: 3px; }
        .chat-header span { font-size: 0.8rem; opacity: 0.8; }
        .chat-close {
            background: none;
            border: none;
            color: var(--black);
            font-size: 1.2rem;
            cursor: pointer;
        }
        .chat-messages {
            height: 350px;
            overflow-y: auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
        .chat-message {
            max-width: 85%;
            padding: 12px 18px;
            border-radius: 15px;
            font-size: 0.9rem;
            line-height: 1.5;
        }
        .chat-message.bot {
            background: var(--charcoal);
            color: var(--white);
            align-self: flex-start;
            border-bottom-left-radius: 5px;
        }
        .chat-message.user {
            background: var(--gold);
            color: var(--black);
            align-self: flex-end;
            border-bottom-right-radius: 5px;
        }
        .chat-input {
            padding: 15px 20px;
            border-top: 1px solid var(--charcoal);
            display: flex;
            gap: 10px;
        }
        .chat-input input {
            flex: 1;
            padding: 12px 15px;
            background: var(--black);
            border: 1px solid var(--charcoal);
            border-radius: 25px;
            color: var(--white);
            font-size: 0.9rem;
        }
        .chat-input input:focus { outline: none; border-color: var(--gold); }
        .chat-input button {
            width: 45px;
            height: 45px;
            background: var(--gold);
            border: none;
            border-radius: 50%;
            color: var(--black);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .chat-input button:hover { background: var(--gold-light); }
        
        /* Quiz Modal */
        .quiz-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 10, 10, 0.95);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
        }
        .quiz-modal.active { opacity: 1; visibility: visible; }
        .quiz-modal-content {
            background: var(--black-light);
            width: 90%;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
            border: 1px solid var(--gold);
            padding: 50px;
            position: relative;
        }
        .quiz-modal-close {
            position: absolute;
            top: 20px;
            ${isRTL ? 'left' : 'right'}: 20px;
            background: none;
            border: none;
            color: var(--white);
            font-size: 1.5rem;
            cursor: pointer;
        }
        .quiz-progress { margin-bottom: 40px; }
        .quiz-progress-bar {
            height: 4px;
            background: var(--charcoal);
            border-radius: 2px;
            overflow: hidden;
        }
        .quiz-progress-fill {
            height: 100%;
            background: var(--gold);
            transition: width 0.3s ease;
        }
        .quiz-step { display: none; }
        .quiz-step.active { display: block; }
        .quiz-question {
            font-family: var(--font-serif);
            font-size: 1.8rem;
            margin-bottom: 30px;
            text-align: center;
        }
        .quiz-options {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        .quiz-option {
            padding: 20px;
            background: var(--black);
            border: 1px solid var(--charcoal);
            cursor: pointer;
            text-align: center;
            transition: all 0.3s ease;
        }
        .quiz-option:hover, .quiz-option.selected {
            border-color: var(--gold);
            background: rgba(201, 169, 98, 0.1);
        }
        .quiz-option i {
            font-size: 2rem;
            color: var(--gold);
            margin-bottom: 10px;
            display: block;
        }
        .quiz-result { text-align: center; }
        .quiz-result-icon {
            width: 100px;
            height: 100px;
            border: 2px solid var(--gold);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px;
            font-size: 2.5rem;
            color: var(--gold);
        }
        .quiz-result h3 {
            font-family: var(--font-serif);
            font-size: 2rem;
            margin-bottom: 15px;
        }
        .quiz-result p { color: var(--gray); margin-bottom: 30px; }
        .quiz-reward {
            background: rgba(201, 169, 98, 0.1);
            border: 1px dashed var(--gold);
            padding: 25px;
            margin-top: 20px;
        }
        .quiz-reward h4 { color: var(--gold); margin-bottom: 10px; }
        
        /* Lightbox */
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 10, 10, 0.95);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        .lightbox.active { opacity: 1; visibility: visible; }
        .lightbox-close {
            position: absolute;
            top: 30px;
            ${isRTL ? 'left' : 'right'}: 30px;
            background: none;
            border: none;
            color: var(--white);
            font-size: 2rem;
            cursor: pointer;
        }
        .lightbox img { max-width: 90%; max-height: 90vh; object-fit: contain; }
        
        /* Responsive */
        @media (max-width: 1200px) {
            .hero-title { font-size: 3.5rem; }
            .services-grid { grid-template-columns: repeat(2, 1fr); }
            .portfolio-grid { grid-template-columns: repeat(2, 1fr); }
            .portfolio-item.large { grid-column: span 2; }
            .footer-top { grid-template-columns: 1fr 1fr; gap: 40px; }
        }
        
        @media (max-width: 992px) {
            section { padding: 80px 30px; }
            .navbar { padding: 15px 30px; }
            .nav-links { display: none; }
            .nav-cta { display: none; }
            .menu-toggle { display: flex; }
            .mobile-menu { display: block; }
            .about-container { grid-template-columns: 1fr; gap: 50px; }
            .about-image { order: -1; }
            .about-content { padding: 0; }
            .vm-container { grid-template-columns: 1fr; }
            .reviews-grid { grid-template-columns: 1fr; }
            .contact-container { grid-template-columns: 1fr; }
        }
        
        @media (max-width: 768px) {
            .hero-title { font-size: 2.5rem; }
            .hero-subtitle { font-size: 0.75rem; letter-spacing: 4px; }
            .hero-categories { gap: 15px; }
            .hero-buttons { flex-direction: column; }
            .btn-primary, .btn-secondary { width: 100%; text-align: center; }
            .section-title { font-size: 2rem; }
            .services-grid { grid-template-columns: 1fr; }
            .portfolio-grid { grid-template-columns: 1fr; }
            .portfolio-item.large { grid-column: span 1; }
            .about-stats { grid-template-columns: 1fr; }
            .form-row { grid-template-columns: 1fr; }
            .footer-top { grid-template-columns: 1fr; text-align: center; }
            .footer-brand { max-width: 100%; }
            .social-links { justify-content: center; }
            .footer-bottom { flex-direction: column; gap: 15px; text-align: center; }
            .chat-widget { width: calc(100% - 30px); ${isRTL ? 'left' : 'right'}: 15px; bottom: 100px; }
            .quiz-options { grid-template-columns: 1fr; }
            .lang-switcher { display: none; }
        }
    </style>
</head>
<body>
    <!-- Preloader -->
    <div class="preloader">
        <div class="preloader-content">
            <div class="preloader-logo"><i class="fas fa-globe"></i> Golden Globe</div>
            <div class="preloader-bar"><div class="preloader-progress"></div></div>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="navbar">
        <a href="#" class="logo">
            <div class="logo-icon"><i class="fas fa-globe"></i></div>
            Golden Globe
        </a>
        <ul class="nav-links">
            <li><a href="#home">${t.nav.home}</a></li>
            <li><a href="#about">${t.nav.about}</a></li>
            <li><a href="#services">${t.nav.services}</a></li>
            <li><a href="#portfolio">${t.nav.portfolio}</a></li>
            <li><a href="#reviews">${t.nav.reviews}</a></li>
            <li><a href="#contact">${t.nav.contact}</a></li>
            <li class="lang-switcher">
                <a href="/" class="lang-btn ${lang === 'en' ? 'active' : ''}">EN</a>
                <a href="/ar" class="lang-btn ${lang === 'ar' ? 'active' : ''}">عربي</a>
                <a href="/fr" class="lang-btn ${lang === 'fr' ? 'active' : ''}">FR</a>
            </li>
        </ul>
        <button class="nav-cta" onclick="openQuiz()">${t.nav.cta}</button>
        <div class="menu-toggle" onclick="toggleMobileMenu()">
            <span></span><span></span><span></span>
        </div>
    </nav>
    
    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu">
        <div class="mobile-menu-content">
            <a href="#home" onclick="toggleMobileMenu()">${t.nav.home}</a>
            <a href="#about" onclick="toggleMobileMenu()">${t.nav.about}</a>
            <a href="#services" onclick="toggleMobileMenu()">${t.nav.services}</a>
            <a href="#portfolio" onclick="toggleMobileMenu()">${t.nav.portfolio}</a>
            <a href="#reviews" onclick="toggleMobileMenu()">${t.nav.reviews}</a>
            <a href="#contact" onclick="toggleMobileMenu()">${t.nav.contact}</a>
            <div class="mobile-lang-switcher">
                <a href="/" class="lang-btn ${lang === 'en' ? 'active' : ''}">EN</a>
                <a href="/ar" class="lang-btn ${lang === 'ar' ? 'active' : ''}">عربي</a>
                <a href="/fr" class="lang-btn ${lang === 'fr' ? 'active' : ''}">FR</a>
            </div>
        </div>
    </div>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-bg">
            <div class="hero-slider">
                <div class="hero-slide active" style="background-image: url('https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=80')"></div>
                <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')"></div>
                <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80')"></div>
                <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=80')"></div>
            </div>
            <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
            <p class="hero-subtitle">${t.hero.subtitle}</p>
            <h1 class="hero-title">${t.hero.title} <span>${t.hero.titleHighlight}</span></h1>
            <p class="hero-desc">${t.hero.desc}</p>
            <div class="hero-categories">
                ${t.hero.categories.map(cat => `<span>${cat}</span>`).join('')}
            </div>
            <div class="hero-buttons">
                <a href="#contact" class="btn-primary">${t.hero.btnPrimary}</a>
                <a href="#portfolio" class="btn-secondary">${t.hero.btnSecondary}</a>
            </div>
        </div>
        <div class="scroll-indicator">
            <span>${t.hero.scroll}</span>
            <div class="scroll-line"></div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about" id="about">
        <div class="about-container">
            <div class="about-image" data-aos="fade-${isRTL ? 'left' : 'right'}">
                <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" alt="Luxury Catering">
                <div class="about-image-frame"></div>
            </div>
            <div class="about-content" data-aos="fade-${isRTL ? 'right' : 'left'}">
                <p class="section-subtitle">${t.about.subtitle}</p>
                <h2 class="section-title">${t.about.title}</h2>
                <p>${t.about.p1}</p>
                <p>${t.about.p2}</p>
                <p>${t.about.p3}</p>
                <div class="about-stats">
                    <div class="stat-item">
                        <div class="stat-number">15+</div>
                        <div class="stat-label">${t.about.stats.years}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">500+</div>
                        <div class="stat-label">${t.about.stats.events}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">50K+</div>
                        <div class="stat-label">${t.about.stats.guests}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Vision & Mission -->
    <section class="vision-mission">
        <div class="section-header" data-aos="fade-up">
            <p class="section-subtitle">${t.vision.subtitle}</p>
            <h2 class="section-title">${t.vision.title}</h2>
            <div class="gold-divider"></div>
        </div>
        <div class="vm-container">
            <div class="vm-card" data-aos="fade-up" data-aos-delay="100">
                <div class="vm-icon"><i class="fas fa-eye"></i></div>
                <h3>${t.vision.visionTitle}</h3>
                <p>${t.vision.visionText}</p>
            </div>
            <div class="vm-card" data-aos="fade-up" data-aos-delay="200">
                <div class="vm-icon"><i class="fas fa-bullseye"></i></div>
                <h3>${t.vision.missionTitle}</h3>
                <p>${t.vision.missionText}</p>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
        <div class="section-header" data-aos="fade-up">
            <p class="section-subtitle">${t.services.subtitle}</p>
            <h2 class="section-title">${t.services.title}</h2>
            <p class="section-desc">${t.services.desc}</p>
        </div>
        <div class="services-grid">
            ${[
              { icon: 'fa-building', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80' },
              { icon: 'fa-crown', img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80' },
              { icon: 'fa-heart', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80' },
              { icon: 'fa-star', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
              { icon: 'fa-campground', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80' },
              { icon: 'fa-utensils', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' }
            ].map((s, i) => `
            <div class="service-card" data-aos="fade-up" data-aos-delay="${(i+1)*100}">
                <img src="${s.img}" alt="${t.services.items[i].title}">
                <div class="service-overlay">
                    <i class="fas ${s.icon} service-icon"></i>
                    <h3>${t.services.items[i].title}</h3>
                    <p>${t.services.items[i].desc}</p>
                </div>
            </div>`).join('')}
        </div>
    </section>

    <!-- Portfolio Section -->
    <section class="portfolio" id="portfolio">
        <div class="section-header" data-aos="fade-up">
            <p class="section-subtitle">${t.portfolio.subtitle}</p>
            <h2 class="section-title">${t.portfolio.title}</h2>
            <p class="section-desc">${t.portfolio.desc}</p>
        </div>
        <div class="portfolio-grid">
            ${[
              { img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80', large: true },
              { img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80' },
              { img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80' },
              { img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
              { img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80' },
              { img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80' },
              { img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80' }
            ].map((p, i) => `
            <div class="portfolio-item${p.large ? ' large' : ''}" data-aos="fade-up" data-aos-delay="${i*100}" onclick="openLightbox(this)">
                <img src="${p.img}" alt="Event">
                <div class="portfolio-overlay">
                    <i class="fas fa-expand"></i>
                    <span>${t.portfolio.viewEvent}</span>
                </div>
            </div>`).join('')}
        </div>
    </section>

    <!-- Quiz Section -->
    <section class="quiz-section">
        <div class="quiz-container" data-aos="fade-up">
            <div class="quiz-icon"><i class="fas fa-magic"></i></div>
            <h2 class="quiz-title">${t.quiz.title}</h2>
            <p class="quiz-desc">${t.quiz.desc}</p>
            <button class="btn-primary" onclick="openQuiz()">
                <i class="fas fa-play"></i>&nbsp;&nbsp;${t.quiz.start}
            </button>
        </div>
    </section>

    <!-- Google Reviews -->
    <section class="reviews" id="reviews">
        <div class="reviews-container">
            <div class="section-header" data-aos="fade-up">
                <p class="section-subtitle">${t.reviews.subtitle}</p>
                <h2 class="section-title">${t.reviews.title}</h2>
            </div>
            <div class="google-badge" data-aos="fade-up">
                <img src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png" alt="Google">
                <div class="google-rating">
                    <div class="stars">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                    </div>
                    <span class="rating-text">4.8/5</span>
                </div>
            </div>
            <div class="reviews-grid">
                ${t.reviews.items.map((r, i) => `
                <div class="review-card" data-aos="fade-up" data-aos-delay="${(i+1)*100}">
                    <div class="review-header">
                        <div class="review-avatar">${r.name.split(' ').map(n => n[0]).join('')}</div>
                        <div class="review-info">
                            <h4>${r.name}</h4>
                            <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                        </div>
                    </div>
                    <p class="review-text">"${r.text}"</p>
                </div>`).join('')}
            </div>
            <div style="text-align: center; margin-top: 50px;" data-aos="fade-up">
                <a href="https://www.google.com/search?q=golden+globe+catering+abu+dhabi+reviews" target="_blank" class="btn-secondary">
                    <i class="fab fa-google"></i>&nbsp;&nbsp;${t.reviews.readMore}
                </a>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact" id="contact">
        <div class="contact-container">
            <div class="contact-info" data-aos="fade-${isRTL ? 'left' : 'right'}">
                <p class="section-subtitle">${t.contact.subtitle}</p>
                <h3>${t.contact.title}</h3>
                <p>${t.contact.desc}</p>
                <div class="contact-details">
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>M38, Industrial Area, Mussaffah, Abu Dhabi, UAE</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>+971 2 555 1234</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>info@goldenglobecatering.com</span>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-whatsapp"></i>
                        <span>+971 50 123 4567</span>
                    </div>
                </div>
            </div>
            <div class="contact-form" data-aos="fade-${isRTL ? 'right' : 'left'}">
                <h4>${t.contact.formTitle}</h4>
                <form id="contactForm" onsubmit="handleFormSubmit(event)">
                    <div class="form-row">
                        <div class="form-group">
                            <label>${t.contact.name}</label>
                            <input type="text" name="name" required>
                        </div>
                        <div class="form-group">
                            <label>${t.contact.email}</label>
                            <input type="email" name="email" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>${t.contact.phone}</label>
                            <input type="tel" name="phone">
                        </div>
                        <div class="form-group">
                            <label>${t.contact.eventType}</label>
                            <select name="eventType">
                                <option value="">${t.contact.selectEvent}</option>
                                ${t.contact.eventTypes.map(et => `<option value="${et}">${et}</option>`).join('')}
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>${t.contact.eventDate}</label>
                            <input type="date" name="date">
                        </div>
                        <div class="form-group">
                            <label>${t.contact.guests}</label>
                            <input type="number" name="guests">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>${t.contact.message}</label>
                        <textarea name="message"></textarea>
                    </div>
                    <button type="submit" class="form-submit">
                        <i class="fas fa-paper-plane"></i>&nbsp;&nbsp;${t.contact.submit}
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-top">
                <div class="footer-brand">
                    <div class="footer-logo"><i class="fas fa-globe"></i> Golden Globe</div>
                    <p>${t.footer.desc}</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
                <div class="footer-column">
                    <h4>${t.footer.quickLinks}</h4>
                    <ul>
                        <li><a href="#about">${t.nav.about}</a></li>
                        <li><a href="#services">${t.nav.services}</a></li>
                        <li><a href="#portfolio">${t.nav.portfolio}</a></li>
                        <li><a href="#reviews">${t.nav.reviews}</a></li>
                        <li><a href="#contact">${t.nav.contact}</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>${t.footer.services}</h4>
                    <ul>
                        ${t.services.items.slice(0, 5).map(s => `<li><a href="#services">${s.title}</a></li>`).join('')}
                    </ul>
                </div>
                <div class="footer-column">
                    <h4>${t.footer.contact}</h4>
                    <ul>
                        <li><a href="tel:+97125551234">+971 2 555 1234</a></li>
                        <li><a href="mailto:info@goldenglobecatering.com">info@goldenglobecatering.com</a></li>
                        <li><a href="#">Mussaffah, Abu Dhabi</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>${t.footer.copyright}</p>
                <p>${t.footer.crafted} <i class="fas fa-heart" style="color: var(--gold);"></i></p>
            </div>
        </div>
    </footer>

    <!-- Floating Buttons -->
    <div class="floating-buttons">
        <a href="https://wa.me/971501234567?text=${encodeURIComponent(lang === 'ar' ? 'مرحباً جولدن جلوب للتموين، أود طلب عرض سعر.' : lang === 'fr' ? 'Bonjour Golden Globe Catering, je souhaite demander un devis.' : 'Hello Golden Globe Catering, I would like to request a proposal.')}" target="_blank" class="float-btn whatsapp-btn" title="WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
        <button class="float-btn chat-btn" onclick="toggleChat()" title="Chat">
            <i class="fas fa-comments"></i>
        </button>
    </div>

    <!-- AI Chat Widget -->
    <div class="chat-widget" id="chatWidget">
        <div class="chat-header">
            <div class="chat-header-info">
                <div class="chat-avatar"><i class="fas fa-robot"></i></div>
                <div>
                    <h4>${t.chat.title}</h4>
                    <span>${t.chat.status}</span>
                </div>
            </div>
            <button class="chat-close" onclick="toggleChat()"><i class="fas fa-times"></i></button>
        </div>
        <div class="chat-messages" id="chatMessages">
            <div class="chat-message bot">${t.chat.welcome}</div>
            <div class="chat-message bot">${t.chat.helpWith}<br>${t.chat.topics.map(topic => '• ' + topic).join('<br>')}</div>
        </div>
        <div class="chat-input">
            <input type="text" id="chatInput" placeholder="${t.chat.placeholder}" onkeypress="handleChatKeypress(event)">
            <button onclick="sendMessage()"><i class="fas fa-paper-plane"></i></button>
        </div>
    </div>

    <!-- Quiz Modal -->
    <div class="quiz-modal" id="quizModal">
        <div class="quiz-modal-content">
            <button class="quiz-modal-close" onclick="closeQuiz()"><i class="fas fa-times"></i></button>
            <div class="quiz-progress">
                <div class="quiz-progress-bar">
                    <div class="quiz-progress-fill" id="quizProgress" style="width: 25%"></div>
                </div>
            </div>
            <div class="quiz-step active" id="quizStep1">
                <h3 class="quiz-question">${t.quiz.q1}</h3>
                <div class="quiz-options">
                    <div class="quiz-option" onclick="selectOption(this, 1, 'corporate')"><i class="fas fa-building"></i><span>${t.quiz.options.corporate}</span></div>
                    <div class="quiz-option" onclick="selectOption(this, 1, 'wedding')"><i class="fas fa-heart"></i><span>${t.quiz.options.wedding}</span></div>
                    <div class="quiz-option" onclick="selectOption(this, 1, 'government')"><i class="fas fa-crown"></i><span>${t.quiz.options.government}</span></div>
                    <div class="quiz-option" onclick="selectOption(this, 1, 'private')"><i class="fas fa-star"></i><span>${t.quiz.options.private}</span></div>
                </div>
            </div>
            <div class="quiz-step" id="quizStep2">
                <h3 class="quiz-question">${t.quiz.q2}</h3>
                <div class="quiz-options">
                    <div class="quiz-option" onclick="selectOption(this, 2, 'intimate')"><i class="fas fa-user-friends"></i><span>${t.quiz.options.under50}</span></div>
                    <div class="quiz-option" onclick="selectOption(this, 2, 'medium')"><i class="fas fa-users"></i><span>${t.quiz.options.medium}</span></div>
                    <div class="quiz-option" onclick="selectOption(this, 2, 'large')"><i class="fas fa-people-group"></i><span>${t.quiz.options.large}</span></div>
                    <div class="quiz-option" onclick="selectOption(this, 2, 'mega')"><i class="fas fa-city"></i><span>${t.quiz.options.mega}</span></div>
                </div>
            </div>
            <div class="quiz-step" id="quizStep3">
                <h3 class="quiz-question">${t.quiz.q3}</h3>
                <div class="quiz-options">
                    <div class="quiz-option" onclick="selectOption(this, 3, 'classic')"><i class="fas fa-gem"></i><span>${t.quiz.options.classic}</span></div>
                    <div class="quiz-option" onclick="selectOption(this, 3, 'modern')"><i class="fas fa-bolt"></i><span>${t.quiz.options.modern}</span></div>
                    <div class="quiz-option" onclick="selectOption(this, 3, 'royal')"><i class="fas fa-crown"></i><span>${t.quiz.options.royal}</span></div>
                    <div class="quiz-option" onclick="selectOption(this, 3, 'cultural')"><i class="fas fa-mosque"></i><span>${t.quiz.options.cultural}</span></div>
                </div>
            </div>
            <div class="quiz-step" id="quizStep4">
                <h3 class="quiz-question">${t.quiz.q4}</h3>
                <div class="quiz-options">
                    <div class="quiz-option" onclick="selectOption(this, 4, 'international')"><i class="fas fa-globe"></i><span>${t.quiz.options.international}</span></div>
                    <div class="quiz-option" onclick="selectOption(this, 4, 'arabic')"><i class="fas fa-moon"></i><span>${t.quiz.options.arabic}</span></div>
                    <div class="quiz-option" onclick="selectOption(this, 4, 'asian')"><i class="fas fa-utensils"></i><span>${t.quiz.options.asian}</span></div>
                    <div class="quiz-option" onclick="selectOption(this, 4, 'mixed')"><i class="fas fa-utensil-spoon"></i><span>${t.quiz.options.mixed}</span></div>
                </div>
            </div>
            <div class="quiz-step" id="quizResult">
                <div class="quiz-result">
                    <div class="quiz-result-icon"><i class="fas fa-award"></i></div>
                    <h3 id="resultTitle">${t.quiz.options.royal}</h3>
                    <p id="resultDesc"></p>
                    <button class="btn-primary" onclick="window.location.href='#contact'; closeQuiz();">${t.quiz.bookConsultation}</button>
                    <div class="quiz-reward">
                        <h4><i class="fas fa-gift"></i> ${t.quiz.reward}</h4>
                        <p>${t.quiz.rewardText}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Lightbox -->
    <div class="lightbox" id="lightbox" onclick="closeLightbox()">
        <button class="lightbox-close"><i class="fas fa-times"></i></button>
        <img src="" alt="Event" id="lightboxImage">
    </div>

    <!-- AOS Animation Library -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    
    <script>
        // Initialize AOS
        if (typeof AOS !== 'undefined') {
            AOS.init({ duration: 1000, once: true, offset: 100 });
        }
        
        // Preloader
        function hidePreloader() {
            const preloader = document.querySelector('.preloader');
            if (preloader && !preloader.classList.contains('hidden')) {
                preloader.classList.add('hidden');
            }
        }
        setTimeout(hidePreloader, 2500);
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => setTimeout(hidePreloader, 1500));
        } else {
            setTimeout(hidePreloader, 1500);
        }
        window.addEventListener('load', () => setTimeout(hidePreloader, 500));

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Hero Slider
        const slides = document.querySelectorAll('.hero-slide');
        let currentSlide = 0;
        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        setInterval(nextSlide, 6000);
        
        // Mobile Menu
        function toggleMobileMenu() {
            document.getElementById('mobileMenu').classList.toggle('active');
        }
        
        // Chat Widget
        function toggleChat() {
            document.getElementById('chatWidget').classList.toggle('active');
        }
        
        // Chat
        function sendMessage() {
            const input = document.getElementById('chatInput');
            const message = input.value.trim();
            if (!message) return;
            const messagesDiv = document.getElementById('chatMessages');
            messagesDiv.innerHTML += '<div class="chat-message user">' + message + '</div>';
            input.value = '';
            setTimeout(() => {
                const responses = {
                    en: "Thank you for your message! Our team will contact you shortly. For immediate assistance, please call +971 2 555 1234.",
                    ar: "شكراً لرسالتك! سيتواصل معك فريقنا قريباً. للمساعدة الفورية، يرجى الاتصال على +971 2 555 1234.",
                    fr: "Merci pour votre message! Notre équipe vous contactera bientôt. Pour une assistance immédiate, appelez le +971 2 555 1234."
                };
                messagesDiv.innerHTML += '<div class="chat-message bot">' + responses['${lang}'] + '</div>';
                messagesDiv.scrollTop = messagesDiv.scrollHeight;
            }, 1000);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
        
        function handleChatKeypress(e) {
            if (e.key === 'Enter') sendMessage();
        }
        
        // Quiz
        let quizAnswers = {};
        function openQuiz() {
            document.getElementById('quizModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        function closeQuiz() {
            document.getElementById('quizModal').classList.remove('active');
            document.body.style.overflow = '';
            document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
            document.getElementById('quizStep1').classList.add('active');
            document.getElementById('quizProgress').style.width = '25%';
            document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
            quizAnswers = {};
        }
        function selectOption(el, step, value) {
            el.parentElement.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
            el.classList.add('selected');
            quizAnswers['step' + step] = value;
            setTimeout(() => {
                if (step < 4) {
                    document.getElementById('quizStep' + step).classList.remove('active');
                    document.getElementById('quizStep' + (step + 1)).classList.add('active');
                    document.getElementById('quizProgress').style.width = ((step + 1) * 25) + '%';
                } else {
                    document.getElementById('quizStep4').classList.remove('active');
                    document.getElementById('quizResult').classList.add('active');
                    document.getElementById('quizProgress').style.width = '100%';
                }
            }, 300);
        }
        
        // Lightbox
        function openLightbox(el) {
            document.getElementById('lightboxImage').src = el.querySelector('img').src;
            document.getElementById('lightbox').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Form Submit
        function handleFormSubmit(e) {
            e.preventDefault();
            const messages = {
                en: 'Thank you for your inquiry! Our team will contact you within 24 hours.',
                ar: 'شكراً لاستفسارك! سيتواصل معك فريقنا خلال 24 ساعة.',
                fr: 'Merci pour votre demande! Notre équipe vous contactera dans les 24 heures.'
            };
            alert(messages['${lang}']);
        }
        
        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    </script>
</body>
</html>`;
}

// Routes for each language
app.get('/', (c) => c.html(generateHTML('en')))
app.get('/ar', (c) => c.html(generateHTML('ar')))
app.get('/fr', (c) => c.html(generateHTML('fr')))

// API Routes
app.get('/api/health', (c) => c.json({ status: 'ok' }))

app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  return c.json({ success: true, message: 'Thank you for your inquiry!' })
})

// Sitemap for SEO
app.get('/sitemap.xml', (c) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://goldenglobecatering.com/</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://goldenglobecatering.com/"/>
    <xhtml:link rel="alternate" hreflang="ar" href="https://goldenglobecatering.com/ar"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://goldenglobecatering.com/fr"/>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://goldenglobecatering.com/ar</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://goldenglobecatering.com/"/>
    <xhtml:link rel="alternate" hreflang="ar" href="https://goldenglobecatering.com/ar"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://goldenglobecatering.com/fr"/>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://goldenglobecatering.com/fr</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://goldenglobecatering.com/"/>
    <xhtml:link rel="alternate" hreflang="ar" href="https://goldenglobecatering.com/ar"/>
    <xhtml:link rel="alternate" hreflang="fr" href="https://goldenglobecatering.com/fr"/>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`
  return c.text(sitemap, 200, { 'Content-Type': 'application/xml' })
})

// Robots.txt for SEO
app.get('/robots.txt', (c) => {
  const robots = `User-agent: *
Allow: /

Sitemap: https://goldenglobecatering.com/sitemap.xml`
  return c.text(robots)
})

export default app
