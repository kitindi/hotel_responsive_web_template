window.onscroll =() =>{
    if(window.pageYOffset >50){
      document.getElementById('top__header').classList.add("top__header--white_bg");
    }else{
       document.getElementById('top__header').classList.remove("top__header--white_bg"); 
    }
}