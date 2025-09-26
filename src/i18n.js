import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { m } from 'framer-motion';

i18n
 .use(LanguageDetector) 
 .use(initReactI18next)
    .init({
        debug :true,
        lng: "en",
        resources: {
            en: {
                translation: {
                    nameYanaNaydenova: "Yana Naydenova",
                    name: "Yana",
                    surname : "Naydenova",
                    portfolio: "Portfolio",
                    home: "Home",
                    about: "About",
                    skills: "Skills",
                    education: "Education",
                    projects: "Projects",
                    contact: "Contact",
                    messageFirstAbout:"Hello there!",
                    messageSecondAbout:"Coding is my kind of art 🎨 ",
                    messageThirdAbout:"Let's build something cool! ✨ ",
                    messageFourthAbout:"Hi, nice to meet you! ",
                    greeting: "Hi, I'm",
                    textAbout:" Computer Science graduate and software developer passionate about creating clean, user-friendly applications and exploring modern technologies.",
                    viewWork : "View My Work",
                    scroll: "Scroll",
                    about: "About",
                    me: "Me",
                    passionateDeveloper: "Passionate  Passionate Developer & Tech Creator",
                    textAboutFirst:" I am a Computer Science graduate turning ideas into interactive applications with modern technologies.I enjoy creating clean and user-friendly software that solves real problems.",
                    textAboutSecond:" I have experience working with a variety of tools and frameworks, constantly learning new technologies to stay up-to-date and deliver high-quality results.",
                    textAboutThird:"     I am motivated, detail-oriented, and enjoy taking on new challenges, always striving to improve as a developer and make a positive impact through my work.",
                    contactMe: "Contact Me",
                    downloadCV: "Download CV",
                    problemSolving:"Problem Solving",
                    collaboration:"Collaboration & Communication",
                    innovation:"Innovation & Growth",
                    problemSolvingExplain: "I approach challenges with analytical thinking, designing effective solutions for complex problems.",
                    collaborationExplain: " I thrive in team environments, working closely with designers, developers, and stakeholders.",
                    innovationExplain: " I embrace new technologies and strive to create innovative, efficient, and reliable software solutions.",
                    programmingLanguage: "Programming Language",
                    framework: "Framework",
                    database: "Database",
                    tools: "Tools",
                    design: "Design",
                    all: "All",



                },
            },
            ru: { 
                translation: {
                    nameYanaNaydenova: "Яна Найденева",
                    name: "Яна",
                    surname : "Найденева",
                    portfolio: "Портфолио",
                    home: "Главная",
                    about: "Обо мне",
                    skills: "Навыки",
                    education: "Образование",
                    projects: "Проекты",
                    contact: "Контакты",
                    messageFirstAbout:"Привет!",
                    messageSecondAbout:"Кодинг - это мое искусство 🎨 ",
                    messageThirdAbout:"Давайте создадим что-нибудь классное! ✨ ",
                    messageFourthAbout:"Привет, приятно познакомиться! ",
                    greeting: "Привет, я",
                    textAbout:" Выпускница компьютерных наук и разработчик программного обеспечения, увлеченная созданием чистых, удобных приложений и изучением современных технологий.",
                    viewWork : "Посмотреть мои работы",
                    scroll: "Прокрутить",
                    about: "Обо",
                    me: "Мне",
                    passionateDeveloper: "Страстный разработчик и технический создатель",
                    textAboutFirst:" Я выпускница компьютерных наук, превращающая идеи в интерактивные приложения с помощью современных технологий. Мне нравится создавать чистое и удобное программное обеспечение, которое решает реальные проблемы.",
                    textAboutSecond:" У меня есть опыт работы с различными инструментами и фреймворками, я постоянно изучаю новые технологии, чтобы быть в курсе событий и предоставлять высококачественные результаты.",
                    textAboutThird:" Я мотивирована, внимательна к деталям и люблю браться за новые задачи, всегда стремясь совершенствоваться как разработчик и оказывать положительное влияние через свою работу.",
                    contactMe: "Связаться со мной",
                    downloadCV: "Скачать резюме",
                    problemSolving:"Решение проблем",
                    collaboration:"Сотрудничество и коммуникация",
                    innovation:"Инновации и развитие",
                    problemSolvingExplain: "Я подхожу к задачам с аналитическим мышлением, разрабатывая эффективные решения для сложных проблем.",
                    collaborationExplain: " Я преуспеваю в командной среде, тесно сотрудничая с дизайнерами, разработчиками и заинтересованными сторонами.",
                    innovationExplain: " Я принимаю новые технологии и стремлюсь создавать инновационные, эффективные и надежные программные решения.",
                    programmingLanguage: "Язык программирования",
                    framework: "Фреймворк",
                    database: "База данных",
                    tools: "Инструменты",
                    design: "Дизайн",
                    all: "Все",






                }
            },
            uk: {
                translation: {
                    nameYanaNaydenova: " Яна Найденова",
                    name: "Яна",
                    surname : "Найденова",
                    portfolio: "Портфоліо",
                    home: "Головна",
                    about: "Про мене",
                    skills: "Навички",
                    education: "Освіта",
                    projects: "Проєкти",
                    contact: "Контакти",
                    messageFirstAbout:"Привіт!",
                    messageSecondAbout:"Кодування - це моє мистецтво 🎨 ",
                    messageThirdAbout:"Давайте створимо щось класне! ✨ ",
                    messageFourthAbout:"Привіт, приємно познайомитись! ",
                    greeting: "Привіт, я",
                    textAbout:" Випускниця комп'ютерних наук та розробниця програмного забезпечення, захоплена створенням чистих, зручних додатків та вивченням сучасних технологій.",
                    viewWork : "Переглянути мої роботи",
                    scroll: "Прокрутити",
                    about: "Про",
                    me: "Мене",
                    passionateDeveloper: "Пристрасний розробник і технічний творець",
                    textAboutFirst:"Я випускниця комп'ютерних наук, яка перетворює ідеї на інтерактивні додатки за допомогою сучасних технологій. Мені подобається створювати чисте та зручне програмне забезпечення, яке вирішує реальні проблеми.",
                    textAboutSecond:"У мене є досвід роботи з різноманітними інструментами та фреймворками, я постійно вивчаю нові технології, щоб бути в курсі подій і надавати високоякісні результати.",
                    textAboutThird:"Я мотивована, уважна до деталей і люблю братися за нові завдання, завжди прагнучи вдосконалюватися як розробник і надавати позитивний вплив через свою роботу.",
                    contactMe: "Зв'язатися зі мною",
                    downloadCV: "Завантажити резюме",
                    problemSolving:"Вирішення проблем",
                    collaboration:"Співпраця та комунікація",
                    innovation:"Інновації та розвиток",
                    problemSolvingExplain: "Я підходжу до завдань з аналітичним мисленням, розробляючи ефективні рішення для складних проблем.",
                    collaborationExplain: "Я преуспеваю у командній середовищі, тісно співпрацюючи з дизайнерами, розробниками та зацікавленими сторонами.",
                    innovationExplain: "Я приймаю нові технології і прагну створювати інноваційні, ефективні та надійні програмні рішення.",
                    programmingLanguage: "Мова програмування",
                    framework: "Фреймворк",
                    database: "База даних",
                    tools: "Інструменти",
                    design: "Дизайн",
                    all: "Всі",

                  


                }
            },
            he: {
                translation: {
                    nameYanaNaydenova: "יאנה נאידנובה",
                    name: "יאנה",
                    surname : "נאידנובה",
                    portfolio: "פורטפוליו",
                    home: "בית",
                    about: "עליי",
                    skills: "כישורים",
                    education: "השכלה",
                    projects: "פרויקטים",
                    contact: "צור קשר",
                    messageFirstAbout:" ! שלום",
                    messageSecondAbout:"קידוד זה סוג האמנות שלי 🎨 ",
                    messageThirdAbout:"בואו נבנה משהו מגניב ✨ ",
                    messageFourthAbout:" !היי, נעים להכיר ",
                    greeting: "  היי, אני",
                    textAbout:" .בוגרת מדעי המחשב ומפתחת תוכנה הנלהבת ליצור יישומים נקיים וידידותיים למשתמש ולחקור טכנולוגיות מודרניות",
                    viewWork : "הצג את העבודה שלי",
                    scroll: "גלול",
                    about: "עליי",
                    me: "",
                    passionateDeveloper: "מפתחת נלהבת ויוצרת טכנולוגית",
                    textAboutFirst:" אני בוגרת מדעי המחשב שהופכת רעיונות ליישומים אינטראקטיביים עם טכנולוגיות מודרניות. אני נהנית ליצור תוכנה נקייה וידידותית למשתמש הפותרת בעיות אמיתיות",
                    textAboutSecond:" יש לי ניסיון בעבודה עם מגוון כלים ומסגרות, ולומדת כל הזמן טכנולוגיות חדשות כדי להישאר מעודכנת ולספק תוצאות באיכות גבוהה",
                    textAboutThird:" אני בעלת מוטיבציה, שמים לב לפרטים ואוהבת להתמודד עם אתגרים חדשים, תמיד שואפת להשתפר כמפתחת ולהשפיע בצורה חיובית דרך העבודה שלי",
                    contactMe: "צור איתי קשר",
                    downloadCV: "הורד קורות חיים",
                    problemSolving:"פתרון בעיות",
                    collaboration:"שיתוף פעולה ותקשורת",
                    innovation:"חדשנות וצמיחה",
                    problemSolvingExplain: "אני ניגשת לאתגרים עם חשיבה אנליטית, ומעצבת פתרונות יעילים לבעיות מורכבות.",
                    collaborationExplain: " אני מצטיינת בסביבות צוות, עובדת בשיתוף פעולה הדוק עם מעצבים, מפתחים ובעלי עניין.",
                    innovationExplain: " אני מאמצת טכנולוגיות חדשות ושואפת ליצור פתרונות תוכנה חדשניים, יעילים ואמינים.",
                    programmingLanguage: "שפת תכנות",
                    framework: "מסגרת",
                    database: "בסיס נתונים",
                    tools: "כלים",
                    design: "עיצוב",
                    all: "הכל",
               }
            }
        }
    });

 



