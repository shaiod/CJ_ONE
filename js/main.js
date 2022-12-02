// main.js

/* 퀵메뉴 이미지 */
// for()문을 이용해서 <img>를 quick01_00000.png~quick01_00019.png 생성
// <span>안에 넣기

// content1-퀵메뉴 이미지 
let quick1 = "";

// for (let i = 0; i < 20; i++) {
//     for(let k = 0; k <20; k++){
//     if(i<10){
//         quick1 += `<img src="images/quick01/quick01_0000${i}.png" />`;
//     }else{
//         quick1 += `<img scr="images/quick01/quick01_000${i}.png" />`;
//     }
// }
// }
// document.querySelector("span.quick1").innerHTML = quick1;

const quickSpan = document.querySelectorAll('.content1>ul>li>a>span');
 
for(let j=0; j<quickSpan.length;j++){ //span 4개 0,1,2,3
    let images='';
    for(let i=0;i<20;i++){
        if(i<10){
            images += `<img src="images/quick0${j+1}/quick0${j+1}_0000${i}.png" />`;
        }else{
            images += `<img src="images/quick0${j+1}/quick0${j+1}_000${i}.png" />`;
        }
    }
    quickSpan[j].innerHTML = images;
}

// 중복 for문 for 문 안에 for문

/* 로그인 이미지 */
let Appear='';
for (let k=0; k<57;k++){
        if(k<10){
            Appear += `<img src="images/appear/appear_0000${k}.png" />`;
        }else{
            Appear += `<img src="images/appear/appear_000${k}.png" />`;
        }
}
document.querySelector(".login>.appear").innerHTML =Appear;

let Loop='';
    for(let h=0;h<82;h++){
        if(h<10){
            Loop += `<img src="images/loop/loop_0000${h}.png" />`;
        }else{
            Loop += `<img src="images/loop/loop_000${h}.png" />`;
        }
}
document.querySelector(".login>.loop").innerHTML= Loop;

/* 로그인 애니메이션 */
// appear 0~56 이미지
// animation: ani 2.75s linear 0s 1;
// animation: ani 2.75s linear 0.05s 1;
// animation: ani 2.75s linear 0.10s 1;

//loop 0~81 이미지
// animation: ani 4.1s linear 2.85s infinite;
// animation: ani 4.1s linear 2.90s infinite;
// animation: ani 4.1s linear 2.95s infinite;

const delay = 0.05;
const appearImgs = document.querySelectorAll(".appear>img");
const loopImgs = document.querySelectorAll(".loop>img");
for(let i=0; i<appearImgs.length; i++){
    appearImgs[i].style.animation = `ani 2.85s linear ${delay*i}s 1 normal`;
}
for(let j=0; j<loopImgs.length;j++){
    loopImgs[j].style.animation =`ani 4.1s linear ${2.85+(j*delay)}s infinite`;
}




// 고객센터
// toggle()
// title="고객센터 열기" -> title="고객센터 닫기"

const topMenuDD = document.querySelectorAll('dl.topMenu >dd');
topMenuDD[4].addEventListener('click',e=>{
    e.currentTarget.classList.toggle("on");
    if(e.currentTarget.classList.contains("on")){
       e.currentTarget.children[0].setAttribute("title","고객센터 닫기");
    }else{
        e.currentTarget.children[0].setAttribute("title","고객센터 열기");
    }

})

/*주메뉴*/

const gnbMenu = document.querySelectorAll(".gnb>ul>li");
const headerWrap = document.querySelector(".header_wrap");
var subMenu = document.querySelectorAll('.gnb>ul>li>ul');


for(var i=0; i<gnbMenu.length;i++){
    gnbMenu[i].addEventListener('mouseover',()=>{
        //고객센터에 on붙어 있으면 고객센터의 on을 지운다
        if(topMenuDD[4].classList.contains('on')){
            topMenuDD[4].classList.remove("on");
        }
        // 검색박스에 on 붙어있으면 검색박스의 on을 지운다
        if(srchOpen.classList.contains('on')){
            srchOpen.classList.remove("on");
            srchBox.classList.remove("on");
        }
       headerWrap.classList.add("on");
       subMenu.forEach(item=>{
       item.classList.add("on");
       })
    }); //mouseover
    gnbMenu[i].addEventListener('mouseout', () =>{
        headerWrap.classList.remove("on");
        subMenu.forEach(item=>{
        item.classList.remove("on");
      })
    });
    gnbMenu[i].children[0].addEventListener('focus', () =>{
        headerWrap.classList.remove("on");
        subMenu.forEach(item=>{
        item.classList.remove("on");
      })
    });
    gnbMenu[i].children[0].addEventListener('blur', () =>{
        headerWrap.classList.remove("on");
        subMenu.forEach(item=>{
        item.classList.remove("on");
      })
    });
};


/* 검색열기닫기 */
const srchBox = document.querySelector('form.srch');
const srchOpen = document.querySelector('.srch_open');
const btn_srch = document.querySelector('.srch_open>a');

srchOpen.addEventListener('click',e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle('on');
    srchBox.classList.toggle('on');

    if(e.currentTarget.classList.contains('on')){
       e.currentTarget.children[0].setAttribute('title','검색입력서식 닫기');
    } else{
        e.currentTarget.children[0].setAttribute('title','검색입력서식 열기');
    }
});

// 배너
// next 버튼을 눌렀을때
// 배너번호 1증가
// 배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로
// 배너프레임의 left값 변경해서 배너 움직이게

/* 오토배너 */

const btnNext = document.querySelector('.btn_next');
const btnPrev = document.querySelector('.btn_prev');
const bnnFrame = document.querySelector('.banner_frame');
const bnnSection = document.querySelectorAll('.banner_frame>section');

const arrowA = document.querySelectorAll('.banner_arrow>a');
const rollingA = document.querySelectorAll('.banner_rolling a');
const bnn_rollA = document.querySelectorAll('.banner_rolling li a');

let bnnW = document.querySelector('body>section').offsetWidth;
window.addEventListener('resize',()=>{
    bnnW = document.querySelector('body>section').offsetWidth;
})

let bnnNum = 0;
let lastNum = bnnSection.length -1;

let secWhite = (bannerNumber)=>{
    
    if(bnnSection[bannerNumber].classList.contains('white')){
        arrowA.forEach(item=>{
            item.classList.add('white');
        })
        rollingA.forEach(item=>{
            item.classList.add('white');
        })
    }else{
        arrowA.forEach(item=>{
            item.classList.remove('white');
        })
        rollingA.forEach(item=>{
            item.classList.remove('white');
        })
    }

    bnn_rollA.forEach(item => {
        item.classList.remove('on');
    });
    bnn_rollA[bannerNumber].classList.add('on');
}
secWhite(bnnNum);


// next 버튼
btnNext.addEventListener('click',e=>{
    e.preventDefault();
    bnnNum++;
    if(bnnNum>lastNum) bnnNum = 0;
    bnnFrame.style.left = `${-bnnNum * bnnW}px`;
    secWhite(bnnNum);
});

// prev버튼

btnPrev.addEventListener('click',e=>{
    e.preventDefault();
    bnnNum--;
    if(bnnNum<0) bnnNum=lastNum;
    bnnFrame.style.left = `${-bnnNum * bnnW}px`;
    secWhite(bnnNum);
});


// 오토배너
let autoBanner= ()=>{
    bnnNum++;
    if(bnnNum>lastNum) bnnNum=0;
    bnnFrame.style.left = `${-bnnNum * bnnW}px`;
    secWhite(bnnNum);
    autoBnn = setTimeout(autoBanner,5000);
};


let autoBnn = setTimeout(autoBanner,5000);

// 재생/멈춤 버튼

let flag = true;
const btnPlay = document.querySelector('a.btn_play');
btnPlay.addEventListener('click', e => {
    e.preventDefault();
    if(flag){
         clearTimeout(autoBnn);
         btnPlay.classList.add('on');
         flag = false;
     }else{
         autoBnn=setTimeout(autoBanner,5000);
         btnPlay.classList.remove('on');
         flag = true;
     }
});


// 롤링버튼 클릭

const bnnRollLists = document.querySelectorAll(".banner_rolling li");

for(let i=0;i<bnnRollLists.length;i++){
    bnnRollLists[i].addEventListener("click",e=>{
        clearTimeout(autoBnn);
        bnnFrame.style.left = `${-i * bnnW}px`;
        secWhite(i);
        })
    }


//  content 애니메이션 실행

const content1Li = document.querySelectorAll(".content1 ul li");

// 마우스 올리면 실행 delay 는 위에서 정한걸로 됨.

for(let i=0; i<content1Li.length; i++){
    content1Li[i].addEventListener("mouseover",e=>{
        for(let k=0; k<20; k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            // content1 ul li의 첫번째 자식의-> 첫번째 자식의-> 첫번째 자식 지정.
            imgLi[k].style.animation= `ani 1s linear ${delay * k}s 1`;
        }
    });
}


// forEach문으로 지정할시
// content1Li.forEach(item=>{
//     content1Li[i].addEventListener("mouseover",e=>{
//         for(let k=0; k<20; k++){
//             let imgLi = e.currentTarget.children[0].children[0].children;
//             // content1 ul li의 첫번째 자식의-> 첫번째 자식의-> 첫번째 자식 지정.
//             imgLi[k].style.animation= `ani 1s linear ${delay * k}s 1`;
//         }
//     });
// }


//  마우스 뗐을때 애니메이션 실행 x => 다시 올리면 실행

for(let i=0; i<content1Li.length; i++){
    content1Li[i].addEventListener("mouseout",e=>{
        for(let k=0; k<20; k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animation= "none";
        }
    });
}


// 스크롤 이벤트


window.addEventListener('scroll',()=>{
    let scroll = document.querySelector('html').scrollTop;
    // 도넛
    const doughnut_Left_L = document.querySelector(".doughnut_left_L")
    const doughnut_Left_s = document.querySelector(".doughnut_left_s")
    const combine_Left = document.querySelector(".combine_left");

    combine_Left.style.top = `70+${scroll*0.7}px`;
    doughnut_Left_s.style.top = `${scroll*0.5}px`;
    doughnut_Left_L.style.top = `${1310-scroll*0.8}px`;

    //top 버튼
    if(scroll <=0){
        Btntop.classList.remove("on","ab");
    }else if(scroll >0 && scroll <2700){
        Btntop.classList.remove("ab");
        Btntop.classList.add("on");
    }else{
        Btntop.classList.add("ab");
    }
});

// content3
// li 하나 하나에 마우스오버하면 모든 li에 .on을 지우고 마우스 오버한 li만 .on이 붙어라

const content3Li = document.querySelectorAll('.content3_inner>div>ul>li');

// for (let i = 0; i < content3Li.length; i++) {
//   content3Li[i].addEventListener('mouseover', (e) => {
//     content3Li.forEach((item) => {
//       item.classList.remove('on');
//     });
//     e.currentTarget.classList.add('on');
//   });
// }


const all= document.querySelectorAll(".content3_inner>div>ul>li");
all.forEach(item=>{
    item.addEventListener('mouseover',e=>{
        e.currentTarget.classList.add('on');
    });
    item.addEventListener('mouseout',e=>{
        e.currentTarget.classList.remove('on');
    });
})


// li 하나하나를 클릭했을때
// class 속성값을 가져와서 변수에 저장
// 변수값이랑 정확하게 일치하는 케이스 찾아서
// 해당 클래스 이름에 해당되는 li만 보이게 설정한다- 각 클래스 이름에 해당되는 li만 따로 모아서 저장해놓고


const group = document.querySelectorAll(".content3_inner>ul>li>a"); //5개

const ent = document.querySelectorAll(".content3_inner>div>ul>li.ent");
const shop = document.querySelectorAll(".content3_inner>div>ul>li.shop");
const diner = document.querySelectorAll(".content3_inner>div>ul>li.diner");
const box = document.querySelectorAll(".content3_inner>div>ul>li.box");


for(let k=0; k<group.length; k++){
    group[k].addEventListener('click',e=>{
        e.preventDefault(); //위로 안올라가게 고정시키는 선언.
        
        group.forEach(item=>{
            item.classList.remove('on');
        });
        e.currentTarget.classList.add('on');

        let className = e.currentTarget.parentElement.getAttribute("class");

        all.forEach(item =>{
            item.style.display = "none";
        });

        // 각 리스트 누르면 각 목록만 나오게 하기. break-> 위로 안올라가게 하는거..?
        switch(className){
            case "all" :
                all.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "ent" :
                ent.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "shop" :
                shop.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "diner" :
                diner.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "box" :
                box.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            defalut : 
                break;
        }
    });
}

// 패밀리 사이트
const familySite = document.querySelector("dd.family_site");
familySite.addEventListener('click',e=>{
    e.preventDefault();
    e.currentTarget.classList.toggle("on");

    if(e.currentTarget.classList.contains("on")){
       e.currentTarget.children[0].setAttribute("title","닫기");
    }else{
       e.currentTarget.children[0].setAttribute("title","열기");
    }
})

//top
const Btntop = document.querySelector('.top');
Btntop.addEventListener('click',e=>{
    e.preventDefault();
    window.scroll({
        top: 0,
        left:0,
        behavior: 'smooth'

    });
});

// 햄버거 버튼 클릭

const body = document.querySelector("body"); 
const bg = document.querySelector(".bg");

const mobBtn = document.querySelector(".mobBtn");
const mobBtn_Close = document.querySelector(".mobBtn_close");
const mob = document.querySelector(".mob");


mobBtn.addEventListener('click', e =>{
    e.preventDefault();
    body.classList.add("on");
    bg.classList.add("on");
    mob.classList.add("on");
    mobBtn_Close.classList.add("on");
});

mobBtn_Close.addEventListener('click', e =>{
    e.preventDefault();
    body.classList.remove("on");
    bg.classList.remove("on");
    mob.classList.remove("on");
    mobBtn_Close.classList.remove("on");
});

const menu=document.querySelector("div> nav.mob_gnb>ul>li");
const subBar=document.querySelector("div> nav.mob_gnb>ul>li>ul");

let subToggle=true;
function show_sub(){
  if(subToggle){
    subBar.style.height="120px";
    subToggle=!subToggle;
  }else{
    subBar.style.height="0px";
    subToggle=!subToggle;
  }
  
}

menu.addEventListener("click",show_sub);
