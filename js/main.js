window.addEventListener('load',function(){
    document.querySelector('.preloader').classList.add('opacity-0');
    setTimeout(function(){
        document.querySelector('.preloader').style.display='none';
    },1000)
});
// cursor

// let cursor1 = document.querySelector('.cursor-1');
// let cursor2 = document.querySelector('.cursor-2');

// window.onmousemove = (e) =>{
//     cursor1.style.top = e.pageY + 'px';
//     cursor1.style.left = e.pageX + 'px';
//     cursor2.style.top = e.pageY + 'px';
//     cursor2.style.left = e.pageX + 'px';
// }

// document.querySelectorAll('a').forEach(links =>{

//     links.onmouseenter = () =>{
//         cursor1.classList.add('active');
//         cursor2.classList.add('active');
//     }

//     links.onmouseleave = () =>{
//         cursor1.classList.remove('active');
//         cursor2.classList.remove('active');
//     }

// });


// burgur btn
const nav = document.querySelector(".nav-menu"),
      navList=document.querySelectorAll(".nav-menu li"),
      totalNavList=navList.length;
for(let i = 0 ; i < totalNavList ; i++ ){
    let a = navList[i].querySelector("a")
    a.addEventListener('click',function(){
        for(let j = 0 ; j < totalNavList ; j++ ){
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
        if(window.innerWidth < 1200){
            asideSection();
        }
    });
}

const navTogglerBtn = document.querySelector('aside .nav-toggler'),
      aside = document.querySelector('aside');
    navTogglerBtn.addEventListener('click',function(){
    asideSection();
    });
    function asideSection(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
    }

// scrollspy
let section =document.querySelectorAll('section');
let navLinks=document.querySelectorAll(".nav-menu li a");
window.onscroll =() =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                document.querySelector(`.nav-menu li a[href *= ${id}]`).classList.add('active')
            });
        }
    });
};
// about
let aboutBtn = document.querySelector('.about-tabs')
let btns = document.querySelectorAll('.tab-item')
console.log(btns);
aboutBtn.addEventListener('click',function(e){
    if(e.target.dataset.target == 'education'){
        btns[0].classList.add('active-tab')
        document.getElementById('education').classList.add('active-tab2')
        btns[1].classList.remove('active-tab')
        document.getElementById('experience').classList.remove('active-tab2')
    }
    else if(e.target.dataset.target == 'experience'){
        btns[1].classList.add('active-tab')
        document.getElementById('experience').classList.add('active-tab2')
        btns[0].classList.remove('active-tab')
        document.getElementById('education').classList.remove('active-tab2')
    }
})