// Data Dummy Buku
const books = [
    {
        id: 1,
        title: "Ajaran Bahagia dari Jawa",
        cover: "assets/images/bukubahagiadarijawa.png",
        landscape: "assets/images/ajaranbahagiajawalandscape.webp",
        portraits: [
            "assets/images/potraitjawa.jpg",
            "assets/images/potraitjawa2.jpeg",
            "assets/images/potraitjawa3.jpeg"
        ],
        desc: "Sebuah perpustakaan di antara kehidupan dan kematian.",
        review: "Buku yang sangat menginspirasi. Membaca ini membuat saya berpikir ulang tentang penyesalan dan pilihan hidup. Plotnya sangat unik dan penyampaian penulis sangat emosional namun menenangkan.",
        isFavorite: false
    },
    {
        id: 2,
        title: "Hari Ini Aku Datang Kembali Ke Toko Buku Kobayashi",
        cover: "assets/images/bukukobayashi.jpg",
        landscape: "hassets/images/bukukobayashi.jpg",
        portraits: [
            "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=300",
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=300",
            "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=300"
        ],
        desc: "Perubahan kecil yang memberikan hasil luar biasa.",
        review: "Panduan praktis terbaik untuk membangun kebiasaan baik dan menghilangkan yang buruk. Sangat aplikatif dan didasarkan pada ilmu psikologi yang mudah dicerna.",
        isFavorite: true
    },
    {
        id: 3,
        title: "Filosofi Teras",
        cover: "assets/images/bukufilosofiteras.avif",
        landscape: "assets/images/bukufilosofiteras.avif",
        portraits: [
            "https://images.unsplash.com/photo-1494809610410-160faaed4de0?auto=format&fit=crop&q=80&w=300",
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=300",
            "https://images.unsplash.com/photo-1522205408450-add114ad53fe?auto=format&fit=crop&q=80&w=300"
        ],
        desc: "Rahasia Jepang untuk umur panjang dan bahagia.",
        review: "Buku yang hangat dan menenangkan. Memberikan perspektif baru tentang bagaimana menemukan tujuan hidup dari hal-hal sederhana setiap harinya.",
        isFavorite: false
    },
    {
        id: 4,
        title: "Gentayangan",
        cover: "assets/images/bukugentayangan.jpg",
        landscape: "assets/images/bukugentayangan.jpg",
        portraits: [
            "https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?auto=format&fit=crop&q=80&w=300",
            "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=300",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=300"
        ],
        desc: "Riwayat singkat umat manusia.",
        review: "Membuka wawasan tentang sejarah evolusi kita. Ditulis dengan narasi yang memikat sehingga sejarah terasa seperti cerita fiksi yang seru.",
        isFavorite: false
    },
    {
        id: 5,
        title: "Seorang Pria yang Melalui Duka dengan Mencuci Piring",
        cover: "assets/images/bukucucipiring.jpg",
        landscape: "assets/images/bukucucipiring.jpg",
        portraits: [
            "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=300",
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=300",
            "https://images.unsplash.com/photo-1437382836617-ee1cb9b99684?auto=format&fit=crop&q=80&w=300"
        ],
        desc: "Kisah keluarga, kehilangan, dan persahabatan.",
        review: "Sangat menyentuh hati. Mengangkat sejarah Indonesia dengan cara yang indah namun menyayat hati. Sangat direkomendasikan.",
        isFavorite: false
    },
    {
        id: 6,
        title: "Janji",
        cover: "assets/images/bukujanji.jpeg",
        landscape: "assets/images/bukujanji.jpeg",
        portraits: [
            "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=300",
            "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=300",
            "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=300"
        ],
        desc: "Epik fiksi ilmiah tentang politik dan ekologi di planet gurun.",
        review: "Mahakarya sci-fi. Pembangunan dunianya sangat detail dan intrik politiknya brilian.",
        isFavorite: false
    }
];

// DOM Elements
const homeView = document.getElementById('home-view');
const reviewView = document.getElementById('review-view');
const bookContainer = document.getElementById('book-container');
const reviewContent = document.getElementById('review-content');
const navHome = document.getElementById('nav-home');
const navFavorite = document.getElementById('nav-favorite');
const profileView = document.getElementById('profile-view');
const navProfile = document.getElementById('nav-profile');

// Render Daftar Buku
function renderBooks(filterFavorite = false) {
    bookContainer.innerHTML = '';
    const booksToRender = filterFavorite ? books.filter(b => b.isFavorite) : books;

    if (booksToRender.length === 0) {
        bookContainer.innerHTML = '<p style="text-align:center; grid-column:1/-1;">Belum ada buku favorit.</p>';
        return;
    }

    booksToRender.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${book.cover}" alt="${book.title}" class="card-img">
            <h3 class="card-title">${book.title}</h3>
            <button class="btn-review" onclick="openReview(${book.id})">Lihat Review</button>
        `;
        bookContainer.appendChild(card);
    });
}

// Buka Halaman Review
function openReview(id) {
    const book = books.find(b => b.id === id);
    if (!book) return;

    // Set icon heart berdasarkan status favorite
    const heartIcon = book.isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart';

    reviewContent.innerHTML = `
        <button class="btn-back" onclick="goHome()"><i class="fa-solid fa-arrow-left"></i> Kembali</button>
        <img src="${book.landscape}" alt="${book.title} Landscape" class="landscape-img">
        
        <div class="portrait-gallery">
            <img src="${book.portraits[0]}" alt="Portrait 1" class="portrait-img">
            <img src="${book.portraits[1]}" alt="Portrait 2" class="portrait-img">
            <img src="${book.portraits[2]}" alt="Portrait 3" class="portrait-img">
        </div>

        <div class="review-header">
            <h2 class="review-title">${book.title}</h2>
            <button class="btn-favorite" onclick="toggleFavorite(${book.id}, this)">
                <i class="${heartIcon}"></i>
            </button>
        </div>
        
        <p class="book-desc">"${book.desc}"</p>
        <p class="book-review"><strong>Review:</strong> <br>${book.review}</p>
    `;

    homeView.classList.remove('active');
    reviewView.classList.add('active');
    window.scrollTo(0, 0);
}

// Fungsi Toggle Favorite (Love/Unlove)
function toggleFavorite(id, btnElement) {
    const book = books.find(b => b.id === id);
    if (book) {
        book.isFavorite = !book.isFavorite;
        const icon = btnElement.querySelector('i');
        
        // Animasi kecil saat di-klik
        btnElement.style.transform = "scale(1.2)";
        setTimeout(() => btnElement.style.transform = "scale(1)", 150);

        if (book.isFavorite) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
    }
}

function resetNavAndViews() {
    navHome.classList.remove('active')
    navFavorite.classList.remove('active')
    navProfile.classList.remove('active')

    homeView.classList.remove('active')
    reviewView.classList.remove('active')
    profileView.classList.remove('active')
}

//Update statistik di profile
// Update statistik di profile secara aman
function updateProfileStats() {
    const statReadEl = document.getElementById('stat-read');
    const statReviewedEl = document.getElementById('stat-reviewed');
    const statFavoriteEl = document.getElementById('stat-favorite');

    if (statReadEl && statReviewedEl && statFavoriteEl) {
        const readCount = books.length;
        const reviewedCount = books.filter(b => b.review && b.review.trim() !== "").length;
        
        const favoriteCount = books.filter(b => b.isFavorite).length;

        statReadEl.innerText = readCount;
        statReviewedEl.innerText = reviewedCount;
        statFavoriteEl.innerText = favoriteCount;
    } else {
        console.log("Elemen stat HTML belum ditemukan!");
    }
}

// Navigasi Kembali ke Home
function goHome() {
    reviewView.classList.remove('active');
    homeView.classList.add('active');
    // Re-render sesuai tab aktif
    const isFavTab = navFavorite.classList.contains('active');
    renderBooks(isFavTab);
}

// Event Listeners Navigasi
navHome.addEventListener('click', (e) => {
    e.preventDefault();
    resetNavAndViews();
    navHome.classList.add('active');
    homeView.classList.add('active')
    renderBooks(false);
});

navFavorite.addEventListener('click', (e) => {
    e.preventDefault();
    resetNavAndViews();
    navFavorite.classList.add('active');
    homeView.classList.add('active');
    renderBooks(true);
});

navProfile.addEventListener('click', (e)=>{
    e.preventDefault();
    resetNavAndViews()
    navProfile.classList.add("active")
    profileView.classList.add("active")
    updateProfileStats()
})

// Inisialisasi awal
renderBooks();
updateProfileStats();

