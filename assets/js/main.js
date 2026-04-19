console.log('✅ main.js loaded');
function loadTopRatedGames() {
    const container = $('#featuredGames');
    if (!container.length) return;

    const topGames = getTopRatedGames();
    container.empty();

    topGames.forEach(game => {
        const stars = Array(Math.floor(game.rating)).fill('<i class="fas fa-star"></i>').join('');
        
        const card = `
    <div class="col-lg-4 col-md-6">
        <div class="game-card h-100">
            <a href="../pages/game-detail.html?id=${game.id}" style="text-decoration: none; color: inherit;">
                <img src="../${game.image}" alt="${game.title}" class="game-image" style="cursor: pointer;">
            </a>
            <div class="card-body p-3">
                <h5 class="card-title">${game.title}</h5>
                <p class="card-text small text-muted mb-2">${game.developer}</p>
                <p class="card-text small mb-3">${game.description}</p>
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <span class="badge bg-primary">${game.genre}</span>
                    <span class="rating small text-warning">${stars} ${game.rating}</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <span class="price fw-bold text-success">${game.price}EU</span>
                    <a href="../pages/game-detail.html?id=${game.id}" class="btn btn-sm btn-primary">Вижте повече</a>
                </div>
            </div>
        </div>
    </div>
`;
        container.append(card);
    });
}

/* Load Latest Vlogs */
function loadLatestVlogs() {
    const container = $('#latestVlogs');
    if (!container.length) return;

    container.empty();

    vlogsData.slice(0, 3).forEach(vlog => {
        const card = `
    <div class="col-lg-4 col-md-6">
        <div class="vlog-card h-100">
            <a href="../pages/vlog-detail.html?id=${vlog.id}" style="text-decoration: none; color: inherit;">
                <img src="../${vlog.thumbnail}" alt="${vlog.title}" class="vlog-image" style="cursor: pointer;">
            </a>
            <div class="card-body p-3">
                <h5 class="card-title">${vlog.title}</h5>
                <p class="card-text small text-muted mb-2">
                    <i class="fas fa-user"></i> ${vlog.developer}
                </p>
                <div class="d-flex justify-content-between align-items-center small text-muted mb-3">
                    <span><i class="fas fa-eye"></i> ${vlog.views}</span>
                    <span><i class="fas fa-calendar"></i> ${vlog.uploadDate}</span>
                </div>
                <a href="../pages/vlog-detail.html?id=${vlog.id}" class="btn btn-sm btn-primary w-100">
                    <i class="fas fa-book"></i> Прочетете влога
                </a>
            </div>
        </div>
    </div>
`;
        container.append(card);
    });
}

/* Initialize */
$(document).ready(function() {
    loadTopRatedGames();
    loadLatestVlogs();
    console.log('✅ Index initialized');
});