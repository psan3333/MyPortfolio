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
                        portfolio: "Portfolio",
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
                        "0": {
                            title: "My hobby",
                            text: "I'm very passionate about modern web tech and developing mobile applications. I enjoy building and creating beautiful and simple solution for specific problems, it just makes me happy"
                        },
                        "1": {
                            title: "Development",
                            text: "Specialized in React and Typescript, mostly use Vite as go to for development, also like using PostgreSQL or MongoDB as data storage for fullstack app. Also, I know Go..."
                        },
                        "2": {
                            title: "Problem Solving",
                            text: "Strongly believe that there is no unsolvable problems. I can approach any problem and in the process of solving problems I can quickly learn and use required tech."
                        },
                        "3": {
                            title: "Inovation",
                            text: "Right now actively use OpenCode as a tool to create lots of boilerplate code, also use GhatGPT and Qwen to learn new things, mostly things in development."
                        }
                    }
                }
            },
            ru: {
                translation: {
                    nav: {
                        portfolio: "Портфолио",
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
                        title: "",
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
                    }
                }
            }
        }
    })

export default i18n