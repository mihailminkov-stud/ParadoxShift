const gamesData = [
    {
        id: 1,
        title: "Hollow Knight",
        developer: "Team Cherry",
        price: 14.99,
        image: "assets/media/images/hollowknight.jpg",
        rating: 4.8,
        genre: "Metroidvania",
        platform: "Multi",
        description: "Explore a vast interconnected kingdom of caves and horrors.",
        fullDescription: "Hollow Knight is a classically styled 2D action adventure game. Explore a vast, atmospheric world of caverns and deadly creatures.",
        releaseDate: "2017-02-24",
        platforms: ["Windows", "Mac", "Linux", "Nintendo Switch", "PlayStation", "Xbox"]
    },
    {
        id: 2,
        title: "Celeste",
        developer: "Maddy Makes Games",
        price: 19.99,
        image: "assets/media/img/games/celeste.jpg",
        rating: 4.9,
        genre: "Platformer",
        platform: "Multi",
        description: "Help Madeline survive her inner demons on a dangerous mountain.",
        fullDescription: "Celeste is a challenging platformer about climbing a mountain. With precise controls and a compelling story.",
        releaseDate: "2018-01-25",
        platforms: ["Windows", "Mac", "Linux", "Nintendo Switch", "PlayStation", "Xbox"]
    },
    {
        id: 3,
        title: "Stardew Valley",
        developer: "ConcernedApe",
        price: 14.99,
        image: "assets/media/img/games/stardew-valley.jpg",
        rating: 4.8,
        genre: "Simulation",
        platform: "Multi",
        description: "Escape to the countryside and build your farming empire.",
        fullDescription: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins.",
        releaseDate: "2016-02-28",
        platforms: ["Windows", "Mac", "Linux", "Nintendo Switch", "PlayStation", "Xbox"]
    },
    {
        id: 4,
        title: "Undertale",
        developer: "Toby Fox",
        price: 9.99,
        image: "assets/media/img/games/undertale.jpg",
        rating: 4.7,
        genre: "RPG",
        platform: "Multi",
        description: "Fall into the Underground and make choices that matter.",
        fullDescription: "When you fall down into the depths of the earth, you discover UNDERTALE. Play through a beautiful story.",
        releaseDate: "2015-09-15",
        platforms: ["Windows", "Mac", "Linux", "Nintendo Switch", "PlayStation"]
    },
    {
        id: 5,
        title: "Terraria",
        developer: "Re-Logic",
        price: 29.99,
        image: "assets/media/img/games/terraria.jpg",
        rating: 4.6,
        genre: "Sandbox",
        platform: "Multi",
        description: "Dig, fight, and explore your way through a 2D world.",
        fullDescription: "Dig, fight, and explore your way through a completely re-imagined Terraria.",
        releaseDate: "2011-05-16",
        platforms: ["Windows", "Mac", "Linux", "Nintendo Switch", "PlayStation", "Xbox"]
    },
    {
        id: 6,
        title: "Hades",
        developer: "Supergiant Games",
        price: 24.99,
        image: "assets/media/img/games/hades.jpg",
        rating: 4.9,
        genre: "Roguelike",
        platform: "Multi",
        description: "Escape the Underworld in this stylish roguelike adventure.",
        fullDescription: "Hades is a dungeon crawler that combines the fast-paced action of a roguelike with the rich story and characters.",
        releaseDate: "2020-09-17",
        platforms: ["Windows", "Mac", "Nintendo Switch", "PlayStation", "Xbox"]
    }
];

const vlogsData = [
    {
        id: 1,
        title: "Creating Pixel Art for Indie Games",
        developer: "PixelMaster Studios",
        thumbnail: "assets/media/img/vlogs/pixel-art.jpg",
        views: "125K",
        uploadDate: "2 days ago",
        fullDescription: "In this article, we dive deep into the art of creating pixel art for indie games. Learn the techniques, tools, and best practices used by professional pixel artists. We'll cover everything from basic shapes to advanced animations.",
        content: "Creating pixel art is both an art and a science. In this comprehensive guide, we explore the fundamentals of pixel art creation, including color theory, animation principles, and tool selection. Whether you're a beginner or an experienced artist looking to refine your skills, this guide provides valuable insights into the process of creating stunning pixel art for your indie games.\n\nKey topics covered:\n• Color palettes and color theory\n• Drawing techniques and tools\n• Animation principles\n• Common mistakes and how to avoid them\n• Creating assets for different resolutions"
    },
    {
        id: 2,
        title: "Game Dev Diaries - Our First Release",
        developer: "Indie Dreams",
        thumbnail: "assets/media/img/vlogs/game-dev-diaries.jpg",
        views: "89K",
        uploadDate: "1 week ago",
        fullDescription: "Follow our journey as we release our first indie game! In this episode, we share our experiences, challenges, and triumphs throughout the development process and launch.",
        content: "Releasing your first game is an exciting and challenging experience. Join us as we walk through our journey from concept to launch. We'll discuss the technical challenges we faced, how we overcame them, and the lessons we learned that can help other indie developers navigate their own releases.\n\nTopics discussed:\n• Pre-launch preparation\n• Managing expectations\n• Marketing strategies\n• Community engagement\n• Post-launch support and updates"
    },
    {
        id: 3,
        title: "Top 10 Indie Games of 2025",
        developer: "Gaming Talks",
        thumbnail: "assets/media/img/vlogs/top-10-games.jpg",
        views: "250K",
        uploadDate: "3 days ago",
        fullDescription: "Discover the best indie games released in 2025! We count down our top 10 picks based on gameplay, story, art, and innovation.",
        content: "2025 has been an incredible year for indie gaming. From innovative mechanics to breathtaking art styles, we've seen some truly amazing games released. In this comprehensive roundup, we count down our top 10 indie games of 2025, highlighting what makes each one special and why you should play them.\n\nOur selection criteria:\n• Gameplay innovation\n• Story and narrative\n• Art and visual design\n• Audio and soundtrack\n• Overall player experience\n\nEach game on this list represents the best of what indie developers can achieve when they combine passion, creativity, and technical skill."
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