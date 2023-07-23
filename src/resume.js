export const header = {
    name: "조재균",
    desc: "프론트엔드 개발자",
    email: "kyeun950830@gmail.com",
    github: "https://github.com/JamesJoe0830",
    blog: "https://velog.io/@kyeun95",
};

export const intro = {
    subject: "Introduce",
    profile: "profile.png",
    intro: `
    안녕하세요! 프론트엔드 개발자 조재균입니다.

    - 새롭게 도입되는 기술에 대해 관심을 가지며 재사용성을 높여 효율적인 개발을 할 수 있는 사람이 되고싶습니다.

    - 학습할 때 '왜?'라는 질문을 통해 기술에 대해 학습해나가는 것을 지향합니다.

    - 알고리즘에 대한 이해를 위해 개념에 대한 접근과 문제를 풀어보면서 스터디를 진행하고 있습니다.

    - 현재 REACT.js로 프로젝트를 진행해본 경험을 갖고 있으며, TypeScript와 Next.js를 학습중에 있습니다.
    `
};

export const skills = {
    subject: "Skills",
    contents: [
        {
            category: "Frontend",
            desc: [
                { name: "React", proficiency: 60 },
                { name: "HTML", proficiency: 50 },
                { name: "CSS", proficiency: 45 },
                { name: "JavaScript", proficiency: 45 }
            ],
            explanation:"React에서 사용되는 Hook에 대한 이해를 하고 있으며, 재사용성을 높이기 위해 Component로 나누어 개발하고 있습니다. ",
        },
        // {
        //     category: "Backend",
        //     desc: [
        //         { name: "Nodejs", proficiency: 20 },
        //         { name: "PHP", proficiency: 40 },
        //         { name: "C++", proficiency: 45 },
        //         { name: "JAVA", proficiency: 30 },
        //         { name: "Python", proficiency: 50 }
        //     ]
        // },
        // {
        //     category: "DevOps",
        //     desc: [
        //         { name: "MySQL", proficiency: 40 }
        //     ]
        // },
        {
            category: "Ect",
            desc: [
                { name: "Python", proficiency: 80 },
                // { name: "", proficiency: 50 },
                // { name: "CSS", proficiency: 45 },
                // { name: "JavaScript", proficiency: 45 }
            ]
        },
    ],
};

export const experience = {
    subject: "Experience",
    contents: [
        // {
        //     title: "~ 근무",
        //     subtitle: "~ 프로젝트 참여",
        //     period: "2021.01 ~ 2021.12",
        //     link: "",
        //     desc: [
        //         { main: "~ 사내 프로젝트 참여", sub: ["~ 라이브러리 사용", "~ 백엔드 개발자로 참여"] },
        //         { main: "~ 사내 프로젝트 참여", sub: [] }
        //     ],
        //     keywords: [],
        //     folder: "",
        //     images: [],
        //     pdfs: []
        // },
        // {
        //     title: "~ 근무",
        //     subtitle: "",
        //     period: "",
        //     link: "",
        //     desc: [],
        //     keywords: [],
        //     folder: "",
        //     images: [],
        //     pdfs: []
        // },
    ],
};

export const projects = {
    subject: "Projects",
    contents: [
        {
            title: "Todo List",
            subtitle: "오늘 할 일을 기록할 수 있는 Todo App",
            period: "2023.07.10 ~ 2023.07.16",
            link: "https://jamesjoe0830.github.io/Todo_App/",
            desc: [
                { main: "TODO List ", sub: ["리액트로 만든 TODO_APP 입니다.","하루 일과를 시작하기 앞서 계획을 세우고 명언을 통해 동기부여를 얻을 수 있는 앱 입니다."] }
            ],
            keywords: ["React", "HTML", "CSS", "JavaScript"],
            folder: "simple-react-resume-template",
            images: ["TODO-thumbnail.png","TODO-thumbnail2.png"],
            pdfs: [
                { pdf: "TODO service_flow.pdf", thumbnail: "TODO-thumbnail.png" },
                { pdf: "TODO publishing.pdf", thumbnail: "TODO-thumbnail2.png" },
            ]
        },
        {
            title: "미자립 교회 웹사이트",
            subtitle: "미자립 교회를 돕기위한 재사용 가능한 웹사이트",
            period: "2023.03.10 ~ 2023.03.12",
            link: "https://www.verygoodchurch.co.kr/",
            desc: [
                { main: "미자립 교회 웹사이트", sub: ["리액트로 만든 교회 웹사이트 입니다.","교회의 외주를 받게 되면 재사용성이 높기 때문에 해당 교회의 데이터만 넣어서 1시간 안에 새로운 웹사이트 제작이 가능합니다."] }
            ],
            keywords: ["React", "HTML", "CSS", "JavaScript"],
            folder: "simple-react-resume-template",
            images: ["Church-thumbnail.png"],
            pdfs: [
                { pdf: "charmChurch.pdf", thumbnail: "Church-thumbnail.png" },
                { pdf: "ganaChurch.pdf", thumbnail: "Church-thumbnail2.png" },
            ]
        },
    ]
};

export const awards = {
    subject: "Awards",
    contents: [
        {
            title: "금상",
            subtitle: "고령 운전자 응급상황 감지 시스템 프로젝트",
            period: "2021.12.03",
            link: "",
            desc: [{ main: "한국시스템엔지니어링 학회에서 금상", sub: ["시스템엔지니어링 학회에서 주관하는 21년 추계학술대회 제 2회 창안 경진대회의 공모전에서 금상을 수상함"] }],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "",
            subtitle: "",
            period: "",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const research = {
    subject: "Research",
    contents: [
        // {
        //     title: "~ Journal",
        //     subtitle: "~ 연구",
        //     period: "2021.01.01",
        //     link: "",
        //     desc: [{ main: "~ 에 관한 연구", sub: [] }],
        //     keywords: [],
        //     folder: "",
        //     images: [],
        //     pdfs: []
        // },
        // {
        //     title: "",
        //     subtitle: "",
        //     period: "",
        //     link: "",
        //     desc: [],
        //     keywords: [],
        //     folder: "",
        //     images: [],
        //     pdfs: []
        // },
    ],
};

export const education = {
    subject: "Education",
    contents: [
        {
            title: "졸업",
            subtitle: "아주대학교 산업공학과",
            period: "2015.03 ~ 2022.02",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "졸업",
            subtitle: "분당 대진고등학교",
            period: "2011.03 ~ 2014.02",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "졸업",
            subtitle: "수내중학교",
            period: "2008.03 ~ 2011.02",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "졸업",
            subtitle: "수내초등학교",
            period: "2002.03 ~ 2008.02",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const certificate = {
    subject: "Certificate",
    contents: [
        {
            title: "오픽(IH)",
            subtitle: "ACTFL(American Council on theTeaching of Foreign Languages)",
            period: "2022.02.20",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "정보처리기사",
            subtitle: "대한상공회의소",
            period: "~ing",
            link: "",
            desc: [],
            keywords: [],
            folder: "", 
            images: [],
            pdfs: []
        },
        {
            title: "컴퓨터 활용능력 1급",
            subtitle: "한국산업인력공단",
            period: "2021.01.01",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "전기기사",
            subtitle: "한국산업인력공단",
            period: "2021.08.20",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "한국사 1급",
            subtitle: "국사편찬위원회",
            period: "2020.02.21",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const footer = { updated: "2021. 10. 11." };

export const main = [experience, projects, awards, research, education, certificate]