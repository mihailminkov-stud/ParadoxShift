const gamesData = [
    {
        id: 1,
        title: "Hollow Knight",
        developer: "Team Cherry",
        price: 14.99,
        image: "assets/media/images/hollowknight.jpg",
        rating: 4.8,
        genre: "RPG",
        platform: "Multi",
        description: "Изследвай огромно взаимосвързано кралство от пещери и ужаси.",
        fullDescription: "Hollow Knight е класически оформена 2D екшън-приключенска игра. Изследвай обширен, атмосферичен свят от пещери и смъртоносни създания.",
        releaseDate: "2017-02-24",
        platforms: ["Windows", "Mac", "Linux", "Nintendo Switch", "PlayStation", "Xbox"]
    },
    {
        id: 2,
        title: "Celeste",
        developer: "Maddy Makes Games",
        price: 19.99,
        image: "assets/media/images/celeste.png",
        rating: 4.9,
        genre: "Platformer",
        platform: "Multi",
        description: "Помогни на Маделин да оцелее срещу вътрешните си демони на опасна планина.",
        fullDescription: "Celeste е предизвикателен платформър за изкачване на планина, с прецизно управление и завладяваща история.",
        releaseDate: "2018-01-25",
        platforms: ["Windows", "Mac", "Linux", "Nintendo Switch", "PlayStation", "Xbox"]
    },
    {
        id: 3,
        title: "Stardew Valley",
        developer: "ConcernedApe",
        price: 14.99,
        image: "assets/media/images/stardew.jpg",
        rating: 4.8,
        genre: "Simulation",
        platform: "Multi",
        description: "Избягай в провинцията и изгради своята фермерска империя.",
        fullDescription: "Наследил си старата ферма на дядо си в Stardew Valley. Въоръжен си с наследени инструменти и няколко монети.",
        releaseDate: "2016-02-28",
        platforms: ["Windows", "Mac", "Linux", "Nintendo Switch", "PlayStation", "Xbox"]
    },
    {
        id: 4,
        title: "Undertale",
        developer: "Toby Fox",
        price: 9.99,
        image: "assets/media/images/undertale.jpg",
        rating: 4.7,
        genre: "RPG",
        platform: "Multi",
        description: "Попадни в Подземието и прави избори, които имат значение.",
        fullDescription: "Когато паднеш дълбоко в земните недра, откриваш UNDERTALE. Изживей една красива история.",
        releaseDate: "2015-09-15",
        platforms: ["Windows", "Mac", "Linux", "Nintendo Switch", "PlayStation"]
    },
    {
        id: 5,
        title: "Terraria",
        developer: "Re-Logic",
        price: 29.99,
        image: "assets/media/images/terraria.jpg",
        rating: 4.6,
        genre: "Sandbox",
        platform: "Multi",
        description: "Копай, бий се и изследвай пътя си през 2D свят.",
        fullDescription: "Копай, бий се и изследвай в напълно преосмисления свят на Terraria.",
        releaseDate: "2011-05-16",
        platforms: ["Windows", "Mac", "Linux", "Nintendo Switch", "PlayStation", "Xbox"]
    },
    {
        id: 6,
        title: "Hades",
        developer: "Supergiant Games",
        price: 24.99,
        image: "assets/media/images/hades.jpg",
        rating: 4.9,
        genre: "Roguelike",
        platform: "Multi",
        description: "Избягай от Подземното царство в това стилно roguelike приключение.",
        fullDescription: "Hades е dungeon crawler, който съчетава бързото темпо на roguelike жанра с богата история и запомнящи се персонажи.",
        releaseDate: "2020-09-17",
        platforms: ["Windows", "Mac", "Nintendo Switch", "PlayStation", "Xbox"]
    },
   { id: 7,
        title: "MOUSE: P.I. For Hire",
        developer: "Fumi Games",
        price: 29.99,
        image: "assets/media/images/mouse for pi.jpg",
        rating: 4.9,
        genre: "RPG",
        platform: "Multi",
        description: " Джак Пепър се впуска в изпълнено с екшън и джаз приключение.",
        fullDescription: "Присъедини се към частния детектив Джак Пепър в изпълнено с престрелки и джаз приключение в MOUSE: P.I. For Hire. Играта съчетава очарованието на ръчно рисуваната анимация в стил „rubber hose“, вдъхновена от класическите анимационни филми от 30-те години, с адреналина и екшъна на експлозивен шутър от първо лице.",
        releaseDate: "2026-04-11",
        platforms: ["Windows", "Mac", "Nintendo Switch", "PlayStation", "Xbox"]
   }
];

const vlogsData = [
    {
        id: 1,
        title: "Създаване на Pixel Art за Indie Игри",
        developer: "PixelMaster Studios",
        thumbnail: "assets/media/images/pixel.png",
        views: "125K",
        uploadDate: "преди 2 дни",
        fullDescription: "В тази статия ще разгледаме подробно изкуството на създаването на pixel art за indie игри. Научи техники, инструменти и добри практики, използвани от професионални pixel художници. Ще обхванем всичко – от основни форми до напреднали анимации.",
        content: "Създаването на pixel art е едновременно изкуство и наука. В това подробно ръководство ще разгледаме основите на pixel art-а, включително теория на цветовете, принципи на анимацията и избор на инструменти. Независимо дали си начинаещ или опитен артист, който иска да усъвършенства уменията си, това ръководство предлага ценни насоки за създаването на впечатляващ pixel art за твоите indie игри."
    },
    {
        id: 2,
        title: "Game Dev Diaries - Първото ни издание",
        developer: "Indie Dreams",
        thumbnail: "assets/media/images/dev.png",
        views: "89K",
        uploadDate: "преди 1 ден",
        fullDescription: "Проследи нашето пътешествие по създаването и издаването на първата ни indie игра! В този епизод споделяме нашия опит, предизвикателствата и успехите по време на разработката и самото пускане на играта.",
        content: "Издаването на първата ти игра е едновременно вълнуващо и трудно преживяване. Присъедини се към нас, докато преминаваме през целия процес – от първоначалната идея до официалния старт. Ще поговорим за техническите трудности, с които се сблъскахме, как успяхме да ги преодолеем и какви уроци научихме, които могат да помогнат и на други indie разработчици при собствените им проекти."
    },
    {
        id: 3,
        title: "Топ 10 Indie Игри на 2025, които трябва да изиграеш",
        developer: "Gaming Talks",
        thumbnail: "assets/media/images/top10.png",
        views: "250 хил.",
        uploadDate: "преди 3 дни",
        fullDescription: "Открий най-добрите indie игри, излезли през 2025 година! Представяме нашите топ 10 избора, базирани на геймплей, история, визуален стил и иновации.",
        content: "2025 беше невероятна година за indie гейминга. От иновативни механики до впечатляващи художествени стилове – видяхме наистина изключителни заглавия. В този подробен обзор ще отброим нашите топ 10 indie игри на 2025 година, като ще подчертаем какво прави всяка от тях специална и защо си заслужава да я изиграеш."
    },
    {
        id: 4,
        title: "Създаването на 2D гейм дизайн за инди разработчици",
        developer: "Jiji Studio",
        thumbnail: "assets/media/images/2d.png",
        views: "100 хил.",
        uploadDate: "преди 8 дни",
        fullDescription: "В тази статия ще разгледаме основите на 2D гейм дизайна – от концепцията до реализацията. Ще научите как да изградите визуален стил, механики и потребителско изживяване, които правят една игра запомняща се.",
        content: "Създаването на 2D игра изисква комбинация от креативност, технически умения и добро планиране. В това ръководство ще преминем през ключовите етапи на гейм дизайна – от първоначалната идея до завършения продукт. Ще обърнем внимание на важни аспекти като баланс между геймплей и визия, както и как да задържите вниманието на играчите."
    },
    {
        id: 5,
        title: "Как да създаваме ефективни анимации за игри",
        developer: "Mickel Rovus",
        thumbnail: "assets/media/images/effect.png",
        views: "100 хил.",
        uploadDate: "преди 6 дни",
        fullDescription: "В тази статия ще разгледаме основите на 2D гейм дизайна – от концепцията до реализацията. Ще научите как да изградите визуален стил, механики и потребителско изживяване, които правят една игра запомняща се.",
        content: "Създаването на 2D игра изисква комбинация от креативност, технически умения и добро планиране. В това ръководство ще преминем през ключовите етапи на гейм дизайна – от първоначалната идея до завършения продукт. Ще обърнем внимание на важни аспекти като баланс между геймплей и визия, както и как да задържите вниманието на играчите."
    }
];

function getTopRatedGames() {
    return gamesData.slice().sort((a, b) => b.rating - a.rating).slice(0, 3);
}

function getGameById(id) {
    return gamesData.find(game => game.id === parseInt(id));
}

function getVlogById(id) {
    return vlogsData.find(vlog => vlog.id === parseInt(id));
}

function searchGames(query) {
    return gamesData.filter(game =>
        game.title.toLowerCase().includes(query.toLowerCase()) ||
        game.developer.toLowerCase().includes(query.toLowerCase()) ||
        game.genre.toLowerCase().includes(query.toLowerCase())
    );
}

function filterByGenre(genre) {
    return gamesData.filter(game => game.genre.toLowerCase() === genre.toLowerCase());
}

function getUniqueGenres() {
    return [...new Set(gamesData.map(game => game.genre))];
}