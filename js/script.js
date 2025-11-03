// ===== 移动端导航菜单切换 =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // 汉堡菜单动画
        hamburger.classList.toggle('active');
    });
}

// 点击导航链接后关闭移动端菜单
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== 平滑滚动 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // 减去导航栏高度
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== 导航栏滚动效果 =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // 添加阴影效果
    if (currentScroll > 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===== 滚动动画效果 =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 观察所有需要动画的元素
const animateElements = document.querySelectorAll('.blog-card, .project-card, .contact-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== 动态年份更新 =====
const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('.footer p');
if (yearElement) {
    yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
}

// ===== 平滑加载效果 =====
// 页面加载时已经可见，无需额外处理
// 如需淡入效果，应在 CSS 中设置初始状态

// ===== 控制台欢迎信息 =====
console.log('%c欢迎来到星笺的个人网站！', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%c如果你对网站的代码感兴趣，欢迎访问 GitHub 仓库：', 'color: #334155; font-size: 14px;');
console.log('%chttps://github.com/Aster-Letter/Aster-Letter.github.io', 'color: #8b5cf6; font-size: 14px;');
