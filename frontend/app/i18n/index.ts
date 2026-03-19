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
                    },
                    qa: {
                        "0": {
                            title: "Желаемый уровень дохода",
                            answer: "Во время стажировки - от 70 000 рублей вполне адекватный уровень оплаты, дальше - от 120 000 рублей, и дальше рост в зависимости от того, как я выполняю свои задачи."
                        },
                        "1": {
                            title: "Какой у тебя уровень образования?",
                            answer: 'Я закончил бакалавриат Новосибирского Государственного Университета - факультет ИИР (Институт Интеллектуальной Робототехники), направление "Мехатроника и робототехника". ЗАкончил учебу в 2025 году, в июне.'
                        },
                        "2": {
                            title: "Какой у тебя уровень английского?",
                            answer: 'На данный момент тестирование на навык не проходил, но могу оценить себя на C1 в использовании английского языка: слушание, понимание языка, использование языка на практике (написание текста и кода, в разговорной речи). Могу идеально понимать разговорную речь и могу также отвечать, однако потребуется немного времени, чтобы привыкнуть к речи - на данный момент не использую речь на английском. По необходимости, могу подтвердить знание языка.'
                        },
                        "3": {
                            title: "Какие рабочие задачи тебя интересуют?",
                            answer: 'Я готов выполнять любую задачу, которая касается работы fullstack/frontend разработчика касаемо написания нового кода или поддержки старого. Также к таким задачам можно отнести soft-skills (общение с клиентом, работа в команде с разными специалистами, включая не разработчиков - это вообще не проблема). Особо буду рад участвовать в разработке, тестировании, публикации и правке новых или существующих проектов!'
                        },
                        "4": {
                            title: "Расскажи больше о себе и о том, чем ты занимался во время учебы.",
                            answer: "Меня зовут Алексей, недавно закончил Новосибирский Государственный Университет, однако по специальности сразу не пошел работать: на тот момент решил пойти работать риелтором - важно было, чтобы я научился общаться с разными людьми без каких-либо проблем, личная цель. Когда эта цель была достигнута, я переехал домой в Барнаул, где я уже полгода постепенно улучшаю свои навыки в разработке, вкелючая изучение и разработку на новом языке программирования (Golang). На текущий момент считаю, что идеально подготовился для того, чтобы работать frontend или fullstack разработчиком на Typescript, React, классическом Javascript или с backend фреймворком (здесь ограничений не вижу - как минимум, Express.js или Gin на Golang). Также могу без проблем работать с базами данных PostgreSQL и MongoDB, с другими не успел поработать."
                        },
                        "5": {
                            title: "Где на данный момент проживаешь?",
                            answer: "На данный момент проживаю в Барнауле, так получилось. Смогу работать дистанционно без проблем,  рассматриваю пеезд в Новосибирск"
                        },
                        "6": {
                            title: "Какой грейд разработчика у тебя сейчас?",
                            answer: "У меня довольно мало опыта коммерческой разработки, тем более по желаемой специальности, поэтому оцениваю себя как Intern или Junior. По своим способностям в разработке мог бы оценить себя выше Junior (Middle, соответственно), но у меня мало опыта коммерческой разработки просто, поэтому так."
                        },
                        "7": {
                            title: "Which soft-skills you have?",
                            answer: `
- I can give presentation in front of any amount of people, even unprepared.
- I'm decent at sales and negotiating with people
                            `
                        },
                        "8": {
                            title: "What were you doing while studying at NSU except main studies?",
                            answer: `
- Starting from 3rd year in HSU actively engaged in body training - 3 times a week in average.
- In my 3rd year also started attending course on business administration from SBMA business club.
- At the 13th season of SMBA create a fullstack real estate aggregator for real estate promotion and digital registration and signing for rental transactions.
- In 2023 I was forking as a lab assistant (programmer) in Institute of Thermophysics SB RAS.
- I was helping with initiation of first-year students starting from 3rd year in NSU.
- In August 2024 I've built a Telegram bot to help people search sports partner (Sportics Bot - I'm recreating it into Collab Bot right now).
- From September 2024 me and my colleague started a running club for colleagues in SBMA business club - I've left the club in June 2025.
- Starting from half of my 3rd year in NSU I started visiting and working with psychologist on my fears and overall mental problems which were restricting abilities to interact with people, learn and act in certain situations (and a lot of different deep personal issues).
- In my 4th year I started visiting psychotherapeutic group and worked on my social skills while helping other people solve their problems.
- In the fall of 2024 I've joined closed business club Anomaly (owner - Mikhail Grebenyuk), learned some courses from there and helped with some events (October 2024 - joined the club and started working on my sales skills, April 2025 - volunteered to help with public event on the topic of business analysis).
- In the spring of 2025 I've built a social networking Telegram bot for SMBA business club (based on Sportics Bot - as I said, it's being reconstructed into other bot called Collab Bot).
- I've successfully defended my diploma thesis titled "Recognition, capturing and sorting hard trash object with computer vision algorithms and algorithms of deep reinforcement learning". Right now I'm working on remake of this project - side research thing.
- In July and August of 2025 worked as real estate agent and proficciently developed sales skills and skills of working in teams at "Etagi" real estate agency.
                            `
                        }
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
                    },
                    qa: {
                        "0": {
                            title: "Желаемый уровень дохода",
                            answer: "Во время стажировки - от 70 000 рублей вполне адекватный уровень оплаты, дальше - от 120 000 рублей, и дальше рост в зависимости от того, как я выполняю свои задачи."
                        },
                        "1": {
                            title: "Какой у тебя уровень образования?",
                            answer: 'Я закончил бакалавриат Новосибирского Государственного Университета - факультет ИИР (Институт Интеллектуальной Робототехники), направление "Мехатроника и робототехника". ЗАкончил учебу в 2025 году, в июне.'
                        },
                        "2": {
                            title: "Какой у тебя уровень английского?",
                            answer: 'На данный момент тестирование на навык не проходил, но могу оценить себя на C1 в использовании английского языка: слушание, понимание языка, использование языка на практике (написание текста и кода, в разговорной речи). Могу идеально понимать разговорную речь и могу также отвечать, однако потребуется немного времени, чтобы привыкнуть к речи - на данный момент не использую речь на английском. По необходимости, могу подтвердить знание языка.'
                        },
                        "3": {
                            title: "Какие рабочие задачи тебя интересуют?",
                            answer: 'Я готов выполнять любую задачу, которая касается работы fullstack/frontend разработчика касаемо написания нового кода или поддержки старого. Также к таким задачам можно отнести soft-skills (общение с клиентом, работа в команде с разными специалистами, включая не разработчиков - это вообще не проблема). Особо буду рад участвовать в разработке, тестировании, публикации и правке новых или существующих проектов!'
                        },
                        "4": {
                            title: "Расскажи больше о себе и о том, чем ты занимался во время учебы.",
                            answer: "Меня зовут Алексей, недавно закончил Новосибирский Государственный Университет, однако по специальности сразу не пошел работать: на тот момент решил пойти работать риелтором - важно было, чтобы я научился общаться с разными людьми без каких-либо проблем, личная цель. Когда эта цель была достигнута, я переехал домой в Барнаул, где я уже полгода постепенно улучшаю свои навыки в разработке, вкелючая изучение и разработку на новом языке программирования (Golang). На текущий момент считаю, что идеально подготовился для того, чтобы работать frontend или fullstack разработчиком на Typescript, React, классическом Javascript или с backend фреймворком (здесь ограничений не вижу - как минимум, Express.js или Gin на Golang). Также могу без проблем работать с базами данных PostgreSQL и MongoDB, с другими не успел поработать."
                        },
                        "5": {
                            title: "Где на данный момент проживаешь?",
                            answer: "На данный момент проживаю в Барнауле, так получилось. Смогу работать дистанционно без проблем,  рассматриваю пеезд в Новосибирск"
                        },
                        "6": {
                            title: "Какой грейд разработчика у тебя сейчас?",
                            answer: "У меня довольно мало опыта коммерческой разработки, тем более по желаемой специальности, поэтому оцениваю себя как Intern или Junior. По своим способностям в разработке мог бы оценить себя выше Junior (Middle, соответственно), но у меня мало опыта коммерческой разработки просто, поэтому так."
                        },
                        "7": {
                            title: "Какие soft-skills у тебя есть?",
                            answer: ""
                        },
                        "8": {
                            title: "Чем занимался в ВУЗе и чем занимаешься сейчас, кроме разработки нейронных сетей?",
                            answer: `
- Начиная с 3 курса в НГУ, активно занимаюсь спортом - в среднем 3 раза в неделю.
- На 3 курсе начал участие в 13 сезоне бизнес клубе SMBA - сначала на их курсе, а с 14 сезона стал помогать клубу.
- На 13 сезоне SMBA создал платформу-агрегатор недвижимости для продвижения недвижимости с перспективой оформления электронных сделок.
- В 2023 году работал лаборантом (программистом) в Институте Теплофизики СО РАН.
- Начиная с 3 курса, каждый год помогал в организации посвещения первокурсников на нашем факультете ИИР (Институт Интеллектуальной Робототехники).
- Летом между 3 и 4 курсом создал Telegram бота для поиска партнера для тренировок (Sportics Bot - сейчас переделываю в Collab Bot).
- Организовывал спортивные мероприятия в бизнес клубе SMBA + приглашали других студентов тоже (организовали SMBA Running Club - клуб, куда люди приходят бегать).
- С середины 3 курсы до конца 4 курса ходил к психологу - решал реальные проблемы характера (были проблемы с прямотой, уверенностью, и в общении в противоположным полом + масса личных проблем).
- На 4 курсе ходил на психотерапевтическую группу, чтобы улучшить воспроизведение мыслей + решить личные проблемы и пообщаться с другими членами группы.
- Осенью 2024 года вступил в закрытый бизнес клуб Аномалия (организатор пространства - Михаил Гребенюк), начал изучать курсы по продажам и созданию бизнеса + и неплохо проявил себя как член клуба в некоторых инстанциях (осенью 2024 года - вступил и начал работать над навыками продаж, апрель 2025 - помог организовать бизнес-разборы в Новосибирске, был волонтером).
- Весной 2025 года создал Telegram бота для нетворкинга внутри бизнес клуба SMBA - SMBA Bot (адаптировал от Sportics Bot - сейчас переделываю в Collab Bot для общего пользования и поиска возможностей сотрудничества).
- Защитил дипломную работу на отлично - тема "Распознавание, захват и сортировка твердых отходов при помощи алгоритмов компьютерного зрения и алгоритмов глубокого обучения с подкреплением". На текущий момент решил возобновить работу над проектом - стало интересно, что сейчас смогу сделать.
- Закрепил навыки продаж и работы в команде, работая риелтором в АН "Этажи" (июль-август 2025 года).
                            `
                        }
                    }
                }
            }
        }
    })

export default i18n