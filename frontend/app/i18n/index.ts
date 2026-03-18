import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    nav: {
                        home: "Home",
                        about: "About me",
                        techStack: "Tech Stack",
                        projects: "Projects",
                        experience: "Experience",
                        contact: "Contacts"
                    },
                    hero: {
                        hello: "Hello, I'm",
                        me: "Tsarev Alexey",
                        fullstack: "Fullstack",
                        dev: "Developer",
                        desc: "Building scalable web applications with modern technologies. Passionate about creating exceptional user experiences.",
                        viewWork: "View My Work",
                        getInTouch: "Get In Touch"
                    },
                    aboutMe: {
                        about: "About",
                        me: "me",
                        title: "Get to know more about me and what I do",
                        "0": {
                            title: "My hobby",
                            text: "I'm very passionate about modern web tech and developing mobile applications. I enjoy building and creating beautiful and simple solution for specific problems, it just makes me happy"
                        },
                        "1": {
                            title: "Dev",
                            text: "Specialized in React and Typescript, mostly use Vite as go to for development, also like using PostgreSQL or MongoDB as data storage for fullstack app. Also, I know Go..."
                        },
                        "2": {
                            title: "Problem Solving",
                            text: "Strongly believe that there is no unsolvable problems. I can approach any problem and in the process of solving problems I can quickly learn and use required tech."
                        },
                        "3": {
                            title: "Inovation",
                            text: "Right now actively use OpenCode as a tool to create lots of boilerplate code, also use GhatGPT and Qwen to learn new things, mostly things in development. Also new to NotebookLM."
                        }
                    },
                    techStack: {
                        tech: "Tech",
                        stack: "Stack",
                        caption: "Technologies I work with to build amazing applications"
                    },
                    projects: {
                        featured: "Featured",
                        projects: "Projects",
                        label: "Here are some of the projects I've worked on",
                        github: "View Projects on GitHub",
                        projList: {
                            FLAT: "Automated platform for real estate renting with remote interactions and payment + document creation and signing.",
                            Schedule: "A mobile app which has analytics board with tasks management, charts and tools to work with AI - user can use AI API to analyze his behavioural data.",
                            "Collab Bot": "A Telegram bot which is designed to create space for people to exchange ideas and advertize personal services.",
                            "Secret Project": "A fullstack application designed to scale around the globe. Uses Yandex Maps and also Go for backend."
                        }
                    },
                    experience: {
                        work: "Work",
                        experience: "Experience",
                        label: "My professional journey in tech",
                        jobsList: {
                            "0": {
                                title: "Diplom Practice",
                                company: "Novosibirsk State University",
                                desc: "I created Deep Reinforcment Learning algorithm which controlls robotic manipulator to sort out different kind of trash.",
                                location: "Novosibirsk, Russia"
                            },
                            "1": {
                                title: "Lab Assistant",
                                company: "Institube of Thermophysics at SB RAS",
                                desc: "I was building programs for analysing hydro-sernor data + built particle segmentation and tracking algorithm.",
                                location: "Novosibirsk, Russia"
                            },
                        }
                    },
                    contactMe: {
                        getIn: "Get In",
                        touch: "Touch",
                        label: "Have a project in mind or want ot collaborate? Feel free to reach out!"
                    },
                    footer: {
                        made: "Made",
                        with: "with",
                        and: "and"
                    }
                }
            },
            ru: {
                translation: {
                    nav: {
                        home: "Главная",
                        about: "Обо мне",
                        techStack: "Стек",
                        projects: "Проекты",
                        experience: "Опыт",
                        contact: "Контакты"
                    },
                    hero: {
                        hello: "Привет, я",
                        me: "Царев Алексей",
                        fullstack: "Фуллстек",
                        dev: "Разработчик",
                        desc: "Создаю простые и масштабируемые приложения. Использую современные технологии, которые упрощают разработку и отладку приложений.",
                        viewWork: "Мои работы",
                        getInTouch: "Связь со мной"
                    },
                    aboutMe: {
                        about: "Про",
                        me: "меня",
                        title: "Кратко обо мне и чем я занимаюсь в свободное время",
                        "0": {
                            title: "Хобби",
                            text: "Серьезно увлечен технологиями Интернета, люблю создавать приложения на телефон и браузер. В свободное время создаю приложения для личного и общего удобства пользователей (в секции 'Проекты' есть примеры)"
                        },
                        "1": {
                            title: "Разработка",
                            text: "Силен в Typescript, React и часто использую Vite для разработки. Кроме этого, использую Go для разработки бэкенд приложений, Python для создания ботов в Telegram и разбираююсь в работе баз данных (MongoDB, PostgreSQL)"
                        },
                        "2": {
                            title: "Решение Проблем",
                            text: "Любая проблема решается. Есть задача - всегда смогу найти решения и технологии, которые подойдут под любую бизнес-задачу, или смогу создать свою."
                        },
                        "3": {
                            title: "Инновации",
                            text: "Сейчас использую OpenCode для генерации шаблонного кода, часто использую ChatGPT или Qwen для обучения, также недавно нашел NotebookLM - теперь удобно читать книги. Каждый день интересуют новыми технологиями, читаю vc.ru"
                        }
                    },
                    techStack: {
                        tech: "Технологии",
                        stack: "", // на английском Tech Stack, а на русском можно сократить до одного слова
                        caption: "Технологии, которые я использую для создания разнообразных приложений"
                    },
                    projects: {
                        featured: "Основные",
                        projects: "Проекты",
                        label: "Примеры проектов, над которыми я работаю сейчас",
                        github: "Проекты на GitHub",
                        projList: {
                            FLAT: "Агрегатор недвижимости для сделок на расстоянии - оплата, заполнение и подписание документов электронно.",
                            Schedule: "Мобильное приложение для анализа выполнения своих задач при помощи графиков и диаграм. Также есть поддержка аналитики от ИИ.",
                            "Collab Bot": "Telegram бот для нетворкинга и обмена навыками. Сделан для того, чтобы предпринимателю легче было найти необходимую экспертизу.",
                            "Secret Project": "Фуллстек приложение на Typescript + Next.js и Go для бэкенд части. Также использует Яндекс.Карты."
                        }
                    },
                    experience: {
                        work: "Опыт",
                        experience: "Работы",
                        label: "Мой опыт работы в сфере профессиональной разработки",
                        jobsList: {
                            "0": {
                                title: "Дипломная Практика",
                                company: "Новосибирский Государственный Университет",
                                desc: "Создал алгоритм глубокого обучения с подкреплением для того, чтобы робот-манипулятор мог сортировать мусор по разным категориям.",
                                location: "Новосибирск, Россия"
                            },
                            "1": {
                                title: "Лаборант",
                                company: "Институт Теплофизики СО РАН",
                                desc: "Создавал инструменты для раблоты с лабораторными данными, включаю обработку данных с гидродатчиков и сегментацию + отслеживание движения частиц с датчиков.",
                                location: "Новосибирск, Россия"
                            }
                        }
                    },
                    contactMe: {
                        getIn: "Связаться со",
                        touch: "Мной",
                        label: "Можете без проблем со мной связаться по ссылкам ниже, если хотите предложить совместное сотрудничество!"
                    },
                    footer: {
                        made: "Сделано",
                        with: "с",
                        and: "и"
                    }
                }
            }
        }
    })

export default i18n