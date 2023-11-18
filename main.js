let input = document.querySelector('input');
let suggest = document.querySelector('div');
let request = new XMLHttpRequest();
request.open("GET", "word.txt", true);
request.send()

request.onload = function(){
    let word = this.responseText;
    let ul = document.querySelector('ul')
    let prev = []
    word = word.split("\n")

    console.log(word)

    input.addEventListener('input', ()=> {
        for(let i = 0; i < word.length; i++){
            if(word[i].startsWith(input.value.toLowerCase()) && input.value.toLowerCase() != "") {
                if(prev.includes(word[i]) == false) {
                    let a = document.createElement('a');
                    let li = document.createElement('li');
                    const capitalized =
                    word[i].charAt(0).toUpperCase()
                    + word[i].slice(1)
                    li.innerHTML = capitalized;
                    a.setAttribute("id",word[i]);
                    a.setAttribute("href","https://www.larousse.fr/dictionnaires/francais/" + word[i]);
                    ul.appendChild(a);
                    a.appendChild(li);
                    prev.push(word[i]);
                }
            } else if(prev.includes(word[i]) == true) {
                let index = prev.indexOf(word[i])
                if (index !== -1) {
                prev.splice(index, 1);
                }
                let item = document.getElementById(word[i]);
                item.parentNode.removeChild(item)
            }
        }
    })
}