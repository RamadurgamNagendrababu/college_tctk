function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
  }
  
  // Check if user is logged in
  if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("You must login first!");
    window.location.href = "login.html";
  }
  

 // === Background Image Slider for Hero Section ===
const heroSection = document.querySelector('.hero');
const backgroundImages = [
    'https://lh5.googleusercontent.com/proxy/MbCy-6GEQ2kOL5TUo4xWHEMhlEjdHZcn-wWdkjtdN4ObCQ9I8iscfNJLc05nLxnYdkF9SNlXBR3IsP4DcuvWKx6M7K7qWTwHYVjSR6lVAJy9xubu6zl2cX-_J1EY8JZ2_gU3qHsrfv7i-cQzULZ5I7MFG12EL6RSYS53D9R_WEAops3fpTIFN0KBp7WGJn2z',
  'https://lh3.googleusercontent.com/proxy/yiFu_4EIQwu3qxSIxJSSEuJ2pP49cb1KD6QK-msS3swdwNmrwBVvT52BAQx3sqdrbT1RIWgctRILbDRUiod8JCGkuIE',
  'https://lh3.googleusercontent.com/proxy/JZNAeoUtOUCFUQN06x10mc8ytdsLkJPJk0AOW4mIid57nClcpRg_-1I6okOEkDaLj11dY1NBDQP8dLeN2xyUhmXZIx0zxFfrhsoz4hrb1_Oer3-1FefX',
  'https://cdn.universitykart.com//Content/upload/admin/nphaslxb.keg.jpg'
];

let bgIndex = 0;

function changeHeroBackground() {
  heroSection.style.backgroundImage = `url('${backgroundImages[bgIndex]}')`;
  heroSection.style.backgroundSize = 'cover';
  heroSection.style.backgroundPosition = 'center';
  bgIndex = (bgIndex + 1) % backgroundImages.length;
}

setInterval(changeHeroBackground, 5000);
changeHeroBackground();

// === Logout Function ===
function logout() {
  if (confirm("Are you sure you want to logout?")) {
    window.location.href = "login.html"; // Change to your login page
  }
}

// === Smooth Scroll for Navbar Links ===
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// === Optional: Highlight Active Nav on Scroll ===
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY || document.documentElement.scrollTop;

  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= scrollPos + 100 && section.offsetTop + section.offsetHeight > scrollPos + 100) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
});


