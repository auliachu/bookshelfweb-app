// Data Dummy Buku
const books = [
    {
        id: 1,
        title: "Ajaran Bahagia dari Jawa",
        cover: "assets/images/bukubahagiadarijawa.png",
        landscape: "assets/images/jawald.jpg",
        portraits: [
            "assets/images/jawa2.jpg",
            "assets/images/bukubahagiadarijawa.png",
            "assets/images/jawa1.png"
        ],
        desc: "Setelah lelah mencari bahagia dimana mana, cobalah kembali pada ajaran leluhur Jawa. <br><br> After growing tired of searching for happiness everywhere, try returning to the teachings of Javanese ancestors.",
        review: "Buku Ajaran Bahagia dari Jawa karya Paksi Raras Alit mengajak pembaca untuk kembali memahami kebijaksanaan leluhur Jawa sebagai sumber kebahagiaan yang sering terlupakan di tengah kehidupan modern yang serba cepat. Melalui refleksi yang mendalam namun disampaikan dengan gaya ringan, buku ini menekankan bahwa kebahagiaan sejati tidak terletak pada pencapaian materi, melainkan pada ketenangan batin, keseimbangan hidup, dan kemampuan memahami diri sendiri. Nilai-nilai seperti legawa, olah rasa, serta keselarasan dalam berpikir dan bertindak diangkat sebagai pedoman untuk menghadapi tekanan hidup masa kini, sehingga pembaca dapat menemukan kebahagiaan yang lebih sederhana, mendalam, dan berkelanjutan. <br><br> The book <i>Ajaran Bahagia dari Jawa</i> by Paksi Raras Alit invites readers to rediscover the wisdom of Javanese ancestors as a source of happiness that is often forgotten in today’s fast-paced modern life. Through deep reflection presented in a light and accessible style, the book emphasizes that true happiness does not lie in material achievements, but in inner peace, balance in life, and the ability to understand oneself. Values such as legawa (sincere acceptance), olah rasa (refined self-awareness), and harmony in thought and action are highlighted as guiding principles for facing modern life’s pressures, helping readers find a form of happiness that is simpler, deeper, and more sustainable.",
        isFavorite: false
    },
    {
        id: 2,
        title: "Hari Ini Aku Datang Kembali Ke Toko Buku Kobayashi",
        cover: "assets/images/bukukobayashi.jpg",
        landscape: "assets/images/kobayashild.webp",
        portraits: [
            "assets/images/kobayashi1.jpg",
            "assets/images/bukukobayashi.jpg",
            "assets/images/kobayashi2.jpg"
        ],
        desc: "Sebuah kisah nyata tentang bagaimana Oomori Rika berkembang setelah bertemu dengan Yumiko Kobayashi. <br><br> A true story about how Oomori Rika grows and transforms after meeting Yumiko Kobayashi.",
        review: "Buku Hari Ini Aku Datang Kembali ke Toko Buku Kobayashi karya Tetsuya Kawakami menceritakan perjalanan Oomori Rika, seorang karyawan baru di perusahaan distribusi buku yang harus beradaptasi dengan kehidupan dan pekerjaan barunya di Osaka. Dalam masa penuh keraguan dan ketidakpercayaan diri, Rika bertemu dengan Yumiko Kobayashi, pemilik toko buku kecil berusia puluhan tahun yang hangat dan penuh cerita. Melalui kunjungan berulang ke toko tersebut, Rika mendengarkan berbagai kisah hidup yang perlahan membantunya memahami diri sendiri, menemukan keberanian, dan melihat kelemahan sebagai bagian berharga dari hidup. Novel yang terinspirasi dari kisah nyata ini menghadirkan suasana hangat dan reflektif, serta menyampaikan pesan bahwa setiap orang bisa tumbuh dan menemukan arah hidupnya melalui pengalaman sederhana dan pertemuan yang bermakna. <br><br> The book Hari Ini Aku Datang Kembali ke Toko Buku Kobayashi by Tetsuya Kawakami tells the story of Oomori Rika, a new employee at a book distribution company who must adapt to her new life and work in Osaka. During a time filled with doubt and insecurity, Rika meets Yumiko Kobayashi, the warm and wise owner of a long-established small bookstore. Through her repeated visits to the shop, Rika listens to various life stories that gradually help her understand herself, find courage, and see her weaknesses as a valuable part of life. Inspired by a true story, the novel offers a warm and reflective atmosphere, conveying the message that everyone can grow and discover their path through simple experiences and meaningful encounters.",
        isFavorite: true
    },
    {
        id: 3,
        title: "Filosofi Teras",
        cover: "assets/images/bukufilosofiteras.avif",
        landscape: "assets/images/filosofiterasld.jpg",
        portraits: [
            "assets/images/filosofiteras1.jpg",
            "assets/images/bukufilosofiteras.avif",
            "assets/images/filosofiteras2.jpg"
        ],
        desc: "Manusia tidak memiliki kuasa untuk memiliki apapun yang dia mau, tetapi dia memiliki kuasa untuk tidak mengingini apa yang dia belum miliki, dan dengan gembira memaksimalkan apa yang dia terima. <br><br> Humans do not have the power to possess everything they desire, but they do have the power to not crave what they do not yet have, and to joyfully make the most of what they have received.",
        review: "Buku Filosofi Teras karya Henry Manampiring mengangkat ajaran Stoisisme, yaitu filsafat Yunani-Romawi kuno yang berfokus pada pengendalian emosi dan pembentukan mental yang tangguh dalam menghadapi kehidupan. Buku ini menjelaskan bahwa banyak emosi negatif seperti marah, cemas, dan sedih bukan berasal dari peristiwa itu sendiri, melainkan dari cara kita memaknainya, sehingga kita diajak untuk lebih fokus pada hal-hal yang bisa dikendalikan dan menerima yang tidak bisa diubah. Dengan gaya penulisan yang ringan, praktis, dan relevan bagi kehidupan modern, buku ini membantu pembaca memahami cara berpikir yang lebih rasional, tenang, dan bijak dalam menghadapi berbagai situasi hidup, sekaligus membuktikan bahwa filsafat tidak harus rumit, tetapi bisa menjadi panduan nyata untuk menjalani hidup yang lebih damai dan seimbang. <br><br> The book <i>Filosofi Teras</i> by Henry Manampiring introduces the teachings of Stoicism, an ancient Greco-Roman philosophy that focuses on emotional control and building a resilient mindset in facing life. It explains that many negative emotions—such as anger, anxiety, and sadness—do not arise from events themselves, but from how we interpret them, encouraging readers to focus on what they can control and to accept what cannot be changed. Written in a light, practical, and modern style, the book helps readers develop a more rational, calm, and wise way of thinking when dealing with life’s challenges, while demonstrating that philosophy does not have to be complicated, but can serve as a practical guide to living a more peaceful and balanced life.",
        isFavorite: false
    },
    {
        id: 4,
        title: "Gentayangan",
        cover: "assets/images/bukugentayangan.jpg",
        landscape: "assets/images/gentayanganld.webp",
        portraits: [
            "assets/images/gentayangan1.webp",
            "assets/images/bukugentayangan.jpg",
            "assets/images/gentayangan2.jpg"
        ],
        desc: "Tak ada akhir buat perempuan-perempuan sihir. Sebagaimana kita tahu, cewek baik masuk surga, cewek bandel gentayangan. <br><br> There is no ending for witchy women. As we know, good girls go to heaven, while rebellious girls wander endlessly.",
        review: "Buku Gentayangan karya Intan Paramadhita merupakan novel eksperimental bergaya choose your own adventure yang mengajak pembaca mengikuti perjalanan seorang perempuan yang membuat perjanjian dengan iblis demi mewujudkan keinginannya untuk berkeliling dunia. Dengan hadiah sepatu merah terkutuk, ia menjalani kehidupan “gentayangan”—berpindah dari satu kota ke kota lain tanpa benar-benar memiliki tempat pulang, sekaligus menghadapi berbagai kisah tentang identitas, batasan sosial, gender, dan kebebasan. Cerita yang dituturkan dengan sudut pandang orang kedua ini membuat pembaca seolah menjadi tokoh utama, memilih alur petualangan sendiri, dan menyadari bahwa di balik kebebasan tersebut terdapat keterbatasan, ilusi pilihan, serta pencarian makna tentang rumah, diri, dan keberadaan di dunia yang terus berubah. <br><br> The book <i>Gentayangan</i> by Intan Paramadhita is an experimental novel in the style of choose your own adventure that invites readers to follow the journey of a woman who makes a pact with the devil to fulfill her desire to travel the world. Gifted with a pair of cursed red shoes, she lives a “wandering” life—moving from one city to another without ever truly having a place to call home, while encountering stories about identity, social boundaries, gender, and freedom. Told from a second-person perspective, the narrative makes readers feel as if they are the protagonist, choosing their own path, while realizing that behind such freedom lie limitations, the illusion of choice, and an ongoing search for meaning about home, self, and existence in an ever-changing world",
        isFavorite: false
    },
    {
        id: 5,
        title: "Seorang Pria yang Melalui Duka dengan Mencuci Piring",
        cover: "assets/images/bukucucipiring.jpg",
        landscape: "assets/images/cucipiringld.jpg",
        portraits: [
            "assets/images/cucipiring1.jpeg",
            "assets/images/cucipiring2.jpg",
            "assets/images/cucipiring3.jpg"
        ],
        desc: "Bagi dunia, kehilangan satu orang hanyalah satu angka. Bagi orang yang ditinggalkan, kehilangan satu orang bisa jadi berarti kehilangan satu dunia. <br><br> For the world, losing one person is just a number. But for those left behind, losing one person can mean losing an entire world.",
        review: "Buku Seorang Pria yang Melalui Duka dengan Mencuci Piring karya Andreas Kurniawan mengisahkan perjalanan emosional seorang pria dalam menghadapi kehilangan dan duka yang mendalam melalui cara-cara sederhana dalam keseharian, seperti mencuci piring. Dengan pendekatan yang hangat dan reflektif, buku ini menunjukkan bahwa proses berduka tidak selalu harus dramatis, melainkan bisa hadir dalam rutinitas kecil yang membantu seseorang perlahan menerima kenyataan dan menata kembali hidupnya. Dipadukan dengan sudut pandang psikologis, pembaca diajak memahami bahwa duka adalah proses yang personal dan valid, serta bahwa penyembuhan dapat ditemukan melalui kesadaran, penerimaan, dan keberanian untuk tetap menjalani hidup meskipun rasa kehilangan masih ada. <br><br> The book <i>Seorang Pria yang Melalui Duka dengan Mencuci Piring</i> by Andreas Kurniawan tells the emotional journey of a man coping with deep loss and grief through simple everyday activities, such as washing dishes. With a warm and reflective approach, the book shows that grieving does not always have to be dramatic, but can unfold quietly through small routines that help a person gradually accept reality and rebuild their life. Enriched with psychological insights, it invites readers to understand that grief is a personal and valid process, and that healing can be found through awareness, acceptance, and the courage to keep living even when the sense of loss still lingers.",
        isFavorite: false
    },
    {
        id: 6,
        title: "Janji",
        cover: "assets/images/bukujanji.jpeg",
        landscape: "assets/images/janjild.png",
        portraits: [
            "assets/images/janji1.webp",
            "assets/images/janji2.jpg",
            "assets/images/janji3.jpg"
        ],
        desc: "kata orang bijak dulu, kau akan lebih menyesal bukan karena kau melakukan sesuatu dan ternyata itu gagal atau keliru. kau akan lebih menyesal saat kau tidak pernah melakukan sesuatu mengingat betapa tidak beraninya kau mengambil keputusan. <br><br> As the wise once said, you will regret not the things you tried that failed or went wrong, but the things you never dared to do—remembering how you lacked the courage to make a decision.",
        review: "Buku Janji karya Tere Liye mengisahkan perjalanan emosional tentang kesetiaan, penebusan, dan makna sebuah janji yang dipegang teguh dalam berbagai keadaan. Melalui alur cerita yang penuh misteri dan refleksi kehidupan, novel ini menggambarkan bagaimana setiap tokoh dihadapkan pada pilihan sulit, masa lalu yang membekas, serta konsekuensi dari keputusan yang mereka ambil. Dengan gaya penceritaan yang khas dan menyentuh, Tere Liye mengajak pembaca merenungkan tentang arti tanggung jawab, keikhlasan, dan kekuatan untuk tetap berpegang pada janji meskipun waktu dan keadaan terus berubah. <br><br> The book <i>Janji</i> by Tere Liye tells an emotional journey about loyalty, redemption, and the meaning of a promise that is upheld through all circumstances. Through a storyline filled with mystery and life reflections, the novel portrays how each character faces difficult choices, lingering pasts, and the consequences of their decisions. With a distinctive and touching narrative style, Tere Liye invites readers to reflect on the values of responsibility, sincerity, and the strength to hold on to a promise despite the passage of time and changing situations.",
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

