let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(i) {
    pages.forEach(p => p.style.display = "none");
    pages[i].style.display = "flex";
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

showPage(currentPage);
