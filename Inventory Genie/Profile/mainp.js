
const avatars = document.getElementsByClassName("avatar");
for (const avatar of avatars) {
    avatar.addEventListener("click",remove)
}
function remove(e) {
    const el = e.target
    const picture = document.getElementsByClassName("picture")[0];
    picture.innerHTML =""
    picture.appendChild(el)
}