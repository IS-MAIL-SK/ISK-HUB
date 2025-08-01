document.addEventListener('DOMContentLoaded', function() {
    // Sample data for novels
    const novels = [
        {
            title: "The Divine Path of Ancients",
            genre: "Action",
            time: "5 minutes ago",
            rating: 4.8,
            chapters: 125,
            cover: "https://placehold.co/200x300/1a1a1a/8a2be2?text=Novel+1"
        },
        {
            title: "Realm of the Dragon Lords",
            genre: "Fantasy",
            time: "52 minutes ago",
            rating: 4.9,
            chapters: 87,
            cover: "https://placehold.co/200x300/1a1a1a/ff6b6b?text=Novel+2"
        },
        {
            title: "Mystic Chronicles",
            genre: "Adventure",
            time: "2 hours ago",
            rating: 4.6,
            chapters: 210,
            cover: "https://placehold.co/200x300/1a1a1a/4caf50?text=Novel+3"
        },
        {
            title: "Chronicles of the Void",
            genre: "Sci-Fi",
            time: "5 hours ago",
            rating: 4.7,
            chapters: 156,
            cover: "https://placehold.co/200x300/1a1a1a/ff9800?text=Novel+4"
        },
        {
            title: "The Forgotten Empire",
            genre: "Historical",
            time: "1 day ago",
            rating: 4.5,
            chapters: 98,
            cover: "https://placehold.co/200x300/1a1a1a/9c27b0?text=Novel+5"
        }
    ];

    // Sample data for rankings
    const rankings = {
        daily: [
            { title: "The Divine Path of Ancients", rating: 4.9, chapters: 125, reads: "15.2K", cover: "https://placehold.co/50x70/1a1a1a/8a2be2?text=1" },
            { title: "Realm of the Dragon Lords", rating: 4.8, chapters: 87, reads: "12.7K", cover: "https://placehold.co/50x70/1a1a1a/ff6b6b?text=2" },
            { title: "Mystic Chronicles", rating: 4.7, chapters: 210, reads: "10.5K", cover: "https://placehold.co/50x70/1a1a1a/4caf50?text=3" },
            { title: "Chronicles of the Void", rating: 4.6, chapters: 156, reads: "9.8K", cover: "https://placehold.co/50x70/1a1a1a/ff9800?text=4" },
            { title: "The Forgotten Empire", rating: 4.5, chapters: 98, reads: "8.3K", cover: "https://placehold.co/50x70/1a1a1a/9c27b0?text=5" }
        ],
        weekly: [
            { title: "Realm of the Dragon Lords", rating: 4.9, chapters: 87, reads: "45.7K", cover: "https://placehold.co/50x70/1a1a1a/ff6b6b?text=1" },
            { title: "The Divine Path of Ancients", rating: 4.8, chapters: 125, reads: "42.3K", cover: "https://placehold.co/50x70/1a1a1a/8a2be2?text=2" },
            { title: "Chronicles of the Void", rating: 4.7, chapters: 156, reads: "38.9K", cover: "https://placehold.co/50x70/1a1a1a/ff9800?text=3" },
            { title: "Mystic Chronicles", rating: 4.6, chapters: 210, reads: "35.2K", cover: "https://placehold.co/50x70/1a1a1a/4caf50?text=4" },
            { title: "The Forgotten Empire", rating: 4.5, chapters: 98, reads: "31.7K", cover: "https://placehold.co/50x70/1a1a1a/9c27b0?text=5" }
        ],
        monthly: [
            { title: "The Divine Path of Ancients", rating: 4.9, chapters: 125, reads: "187.4K", cover: "https://placehold.co/50x70/1a1a1a/8a2be2?text=1" },
            { title: "Realm of the Dragon Lords", rating: 4.8, chapters: 87, reads: "172.8K", cover: "https://placehold.co/50x70/1a1a1a/ff6b6b?text=2" },
            { title: "Mystic Chronicles", rating: 4.7, chapters: 210, reads: "156.3K", cover: "https://placehold.co/50x70/1a1a1a/4caf50?text=3" },
            { title: "Chronicles of the Void", rating: 4.6, chapters: 156, reads: "142.7K", cover: "https://placehold.co/50x70/1a1a1a/ff9800?text=4" },
            { title: "The Forgotten Empire", rating: 4.5, chapters: 98, reads: "135.9K", cover: "https://placehold.co/50x70/1a1a1a/9c27b0?text=5" }
        ]
    };

    // DOM Elements
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const searchInput = document.getElementById('search-input');
    const languageSelector = document.getElementById('language-selector');
    const themeRadios = document.querySelectorAll('input[name="theme"]');
    const loginBtn = document.getElementById('login-btn');
    const loginMessage = document.getElementById('login-message');
    const userProfile = document.getElementById('user-profile');
    const profileDropdown = document.getElementById('profile-dropdown');
    const notificationBtn = document.getElementById('notification-btn');
    const refreshBtn = document.getElementById('refresh-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const novelGrid = document.getElementById('novel-grid');
    const rankingTabs = document.querySelectorAll('.tab-btn');
    const rankingList = document.getElementById('ranking-list');

    // Initialize the page
    populateNovels();
    populateRankings('daily');

    // Toggle sidebar on mobile
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    // Close sidebar when clicking overlay
    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    // Handle search functionality
    function handleSearch(e) {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Searching for: ${query}`);
                // In a real implementation, this would filter novels
            }
        }
    }

    // Change language
    function changeLanguage() {
        const selectedLanguage = languageSelector.value;
        alert(`Language changed to: ${selectedLanguage}`);
        // In a real implementation, this would change the UI language
    }

    // Change theme
    function changeTheme() {
        const selectedTheme = document.querySelector('input[name="theme"]:checked').value;
        if (selectedTheme === 'light') {
            document.body.classList.add('light-theme');
        } else {
            document.body.classList.remove('light-theme');
        }
    }

    // Handle login
    function handleLogin() {
        alert('Login functionality would be implemented here');
        // Simulate login
        loginMessage.style.display = 'none';
    }

    // Toggle profile dropdown
    function toggleProfileDropdown(e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('active');
    }

    // Close profile dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!userProfile.contains(e.target)) {
            profileDropdown.classList.remove('active');
        }
    });

    // Show notifications
    function showNotifications() {
        alert('You have 3 new notifications');
        // In a real implementation, this would show a notification panel
    }

    // Refresh content
    function refreshContent() {
        alert('Content refreshed');
        // In a real implementation, this would fetch new data
    }

    // Handle logout
    function handleLogout(e) {
        e.preventDefault();
        alert('Logged out successfully');
        loginMessage.style.display = 'block';
        profileDropdown.classList.remove('active');
    }

    // Populate novels grid
    function populateNovels() {
        novelGrid.innerHTML = '';
        novels.forEach(novel => {
            const novelCard = document.createElement('div');
            novelCard.className = 'novel-card';
            novelCard.innerHTML = `
                <img src="${novel.cover}" alt="${novel.title}" class="novel-cover">
                <div class="novel-info">
                    <h3 class="novel-title">${novel.title}</h3>
                    <div class="novel-meta">
                        <span class="novel-genre">${novel.genre}</span>
                        <span>${novel.time}</span>
                    </div>
                    <div class="novel-stats">
                        <div class="stat">
                            <i class="fas fa-star"></i>
                            <span>${novel.rating}</span>
                        </div>
                        <div class="stat">
                            <i class="fas fa-book"></i>
                            <span>Ch. ${novel.chapters}</span>
                        </div>
                    </div>
                </div>
            `;
            novelGrid.appendChild(novelCard);
        });
    }

    // Populate rankings
    function populateRankings(period) {
        rankingList.innerHTML = '';
        rankings[period].forEach((novel, index) => {
            const rankNumber = index + 1;
            let rankClass = '';
            if (rankNumber === 1) rankClass = 'rank-1';
            else if (rankNumber === 2) rankClass = 'rank-2';
            else if (rankNumber === 3) rankClass = 'rank-3';

            const rankingItem = document.createElement('div');
            rankingItem.className = 'ranking-item';
            rankingItem.innerHTML = `
                <div class="rank-number ${rankClass}">${rankNumber}</div>
                <img src="${novel.cover}" alt="${novel.title}" class="ranking-cover">
                <div class="ranking-info">
                    <h3 class="ranking-title">${novel.title}</h3>
                    <div class="ranking-meta">
                        <span><i class="fas fa-star"></i> ${novel.rating}</span>
                        <span><i class="fas fa-book"></i> Ch. ${novel.chapters}</span>
                        <span><i class="fas fa-fire"></i> ${novel.reads} reads</span>
                    </div>
                </div>
            `;
            rankingList.appendChild(rankingItem);
        });
    }

    // Set up event listeners
    menuToggle.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', closeSidebar);
    searchInput.addEventListener('keyup', handleSearch);
    languageSelector.addEventListener('change', changeLanguage);
    themeRadios.forEach(radio => radio.addEventListener('change', changeTheme));
    loginBtn.addEventListener('click', handleLogin);
    userProfile.addEventListener('click', toggleProfileDropdown);
    notificationBtn.addEventListener('click', showNotifications);
    refreshBtn.addEventListener('click', refreshContent);
    logoutBtn.addEventListener('click', handleLogout);

    rankingTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            rankingTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            // Update rankings
            populateRankings(this.dataset.period);
        });
    });
});
