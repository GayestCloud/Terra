function popup(name, state) {
    let el = document.getElementById(name);
    if (el === undefined)
        return;
    
    el.classList.toggle('active', state);
}
