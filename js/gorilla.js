function clickAction() {
    this.classList.add('active');
}
var target = document.getElementById('js_click');
console.log(target);
target.addEventListener('click', clickAction, false);
