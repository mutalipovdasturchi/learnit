function openCourse(course) {
    const content = document.getElementById("course-content");
    const title = document.getElementById("course-title");
    const link = document.getElementById("course-link");

    content.classList.remove("hidden");

    if (course === "python") {
        title.innerText = "Python Darslari";
        link.href = "https://www.youtube.com/watch?v=_uQrJ0TkZlc";
    }

    if (course === "css") {
        title.innerText = "CSS Darslari";
        link.href = "https://www.youtube.com/watch?v=1Rs2ND1ryYc";
    }

    if (course === "html") {
        title.innerText = "HTML Darslari";
        link.href = "https://www.youtube.com/watch?v=pQN-pnXPaVg";
    }
}

function goBack() {
    document.getElementById("course-content").classList.add("hidden");
}
