let navMain=document.querySelector(".navigation"),navToggle=document.querySelector(".navigation__toggle"),navjs=document.querySelector(".main-header__wrapper");navjs.classList.remove("main-header__wrapper-nojs"),navToggle.addEventListener("click",(function(){navMain.classList.contains("navigation--closed")?(navMain.classList.remove("navigation--closed"),navMain.classList.add("navigation--opened")):(navMain.classList.add("navigation--closed"),navMain.classList.remove("navigation--opened"))}));