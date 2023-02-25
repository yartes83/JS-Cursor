const click = document.querySelector('.btn');
const out = document.querySelector('.out');
const clear = document.querySelector('.clear');

click.addEventListener('click', () => {
    out.innerHTML = idGenerator.next().value;
})

clear.addEventListener('click', () => {
    document.location.reload();
})

function* createIdGenerator(){
    let i = 0;
    while (true) {
        yield ++i;
    }
}
const idGenerator = createIdGenerator();



