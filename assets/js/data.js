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
    }
];

const vlogsData = [
    {
        id: 1,
        title: "Creating Pixel Art for Indie Games",
        developer: "PixelMaster Studios",
        thumbnail: "assets/media/images/pixel.png",
        views: "125K",
        uploadDate: "преди 2 дни",
        fullDescription: "In this article, we dive deep into the art of creating pixel art for indie games. Learn the techniques, tools, and best practices used by professional pixel artists. We'll cover everything from basic shapes to advanced animations.",
        content: "Creating pixel art is both an art and a science. In this comprehensive guide, we explore the fundamentals of pixel art creation, including color theory, animation principles, and tool selection. Whether you're a beginner or an experienced artist looking to refine your skills, this guide provides valuable insights into the process of creating stunning pixel art for your indie games.\n\nKey topics covered:\n• Color palettes and color theory\n• Drawing techniques and tools\n• Animation principles\n• Common mistakes and how to avoid them\n• Creating assets for different resolutions"
    },
    {
        id: 2,
        title: "Game Dev Diaries - Our First Release",
        developer: "Indie Dreams",
        thumbnail: "assets/media/images/dev.png",
        views: "89K",
        uploadDate: "преди 1 седмица",
        fullDescription: "Follow our journey as we release our first indie game! In this episode, we share our experiences, challenges, and triumphs throughout the development process and launch.",
        content: "Releasing your first game is an exciting and challenging experience. Join us as we walk through our journey from concept to launch. We'll discuss the technical challenges we faced, how we overcame them, and the lessons we learned that can help other indie developers navigate their own releases.\n\nTopics discussed:\n• Pre-launch preparation\n• Managing expectations\n• Marketing strategies\n• Community engagement\n• Post-launch support and updates"
    },
    {
        id: 3,
        title: "Top 10 Indie Games of 2025, that you should play",
        developer: "Gaming Talks",
        thumbnail: "assets/media/images/top10.png",
        views: "250 хил.",
        uploadDate: "преди 3 дни",
        fullDescription: "Discover the best indie games released in 2025! We count down our top 10 picks based on gameplay, story, art, and innovation.",
        content: "2025 has been an incredible year for indie gaming. From innovative mechanics to breathtaking art styles, we've seen some truly amazing games released. In this comprehensive roundup, we count down our top 10 indie games of 2025, highlighting what makes each one special and why you should play them.\n\nOur selection criteria:\n• Gameplay innovation\n• Story and narrative\n• Art and visual design\n• Audio and soundtrack\n• Overall player experience\n\nEach game on this list represents the best of what indie developers can achieve when they combine passion, creativity, and technical skill."
    },
    {
        id: 4,
        title: "Въведение в създаването на 2D гейм дизайн за инди разработчици",
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
        views: "10 хил.",
        uploadDate: "преди 6 часа",
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