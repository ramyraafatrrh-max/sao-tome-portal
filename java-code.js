// Elite Navigation Logic

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    const targetPage = document.getElementById(pageId);

    // Fade out current page
    pages.forEach(p => {
        p.style.opacity = '0';
        p.style.transform = 'translateY(20px)';
    });

    // Wait for animation, then switch
    setTimeout(() => {
        pages.forEach(p => p.classList.remove('active'));
        
        // Reset sub-content views
        const subs = document.querySelectorAll('.content-view');
        subs.forEach(s => s.classList.remove('active'));

        targetPage.classList.add('active');
        
        // Trigger fade in
        setTimeout(() => {
            targetPage.style.opacity = '1';
            targetPage.style.transform = 'translateY(0)';
        }, 50);
    }, 400);
}

function showSub(subId) {
    const subView = document.getElementById(subId);
    subView.classList.add('active');
}

function hideSub() {
    const subs = document.querySelectorAll('.content-view');
    subs.forEach(s => s.classList.remove('active'));
}