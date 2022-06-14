window.onload = function () {
    var theme = localStorage.getItem('data-theme');
    if (theme == 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else if (theme == '') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else if (theme == 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("checkbox").checked = true;
    }
}
function toggle(a) {
    if (a.checkbox.checked == true) {
        document.documentElement.classList.add('transition');
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    }
    else if (a.checkbox.checked == false) {
        document.documentElement.classList.add('transition');
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
    }
};