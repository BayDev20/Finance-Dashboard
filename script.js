document.addEventListener('DOMContentLoaded', () => {
    fetchExchangeRates();
    setInterval(fetchExchangeRates, 360000); 
});

document.addEventListener('DOMContentLoaded', () => {
    fetchNews();
    setInterval(fetchNews, 360000); 
});

async function fetchNews() {
    const newsapiKey = '8460da42f5c444cb8a7eef546722f9da';
    const url = `https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=${newsapiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        updateNewsTicker(data.articles);
    } catch (error) {
        console.error('Failed to fetch news:', error);
    }
}

function updateNewsTicker(articles) {
    const ticker = document.getElementById('newsTicker');
    ticker.innerHTML = ''; // Clear existing news items

    const newsContent = document.createElement('div');
    let newsItems = '';

    articles.forEach(article => {
        newsItems += `${article.title} - `;
    });

    newsContent.textContent = newsItems;
    ticker.appendChild(newsContent);
}

function updateTimeZones() {
    const formatOptions = { timeZone: 'UTC', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    document.getElementById('timeNY').textContent = new Intl.DateTimeFormat('en-US', { ...formatOptions, timeZone: 'America/New_York' }).format(new Date()).toLowerCase();
    document.getElementById('timeLondon').textContent = new Intl.DateTimeFormat('en-GB', { ...formatOptions, timeZone: 'Europe/London' }).format(new Date()).toLowerCase();
    document.getElementById('timeTokyo').textContent = new Intl.DateTimeFormat('ja-JP', { ...formatOptions, timeZone: 'Asia/Tokyo' }).format(new Date()).toLowerCase();
    document.getElementById('timeSydney').textContent = new Intl.DateTimeFormat('en-AU', { ...formatOptions, timeZone: 'Australia/Sydney' }).format(new Date()).toLowerCase();
}

setInterval(updateTimeZones, 1000);

document.getElementById('youtube-streams').addEventListener('change', function() {
    var selectedStreamId = this.value;
    var player = document.getElementById('player');
    player.src = 'https://www.youtube.com/embed/' + selectedStreamId + '?autoplay=1';
});

document.getElementById('toggleButton').addEventListener('click', function() {
    var container = document.getElementById('topStocksContainer');
    container.classList.toggle('expanded');
});

document.getElementById('closeButton').addEventListener('click', function() {
    var container = document.getElementById('topStocksContainer');
    container.classList.remove('expanded');
});

document.getElementById('toggleTradingViewButton').addEventListener('click', function() {
    var container = document.getElementById('topStocksContainer2');
    container.classList.toggle('expanded');
});

document.getElementById('closeButton2').addEventListener('click', function() {
    var container = document.getElementById('topStocksContainer2');
    container.classList.remove('expanded');
});

