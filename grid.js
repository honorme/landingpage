const gridMovement = () => {
    const photoGrid = document.querySelector('.photo-grid');
    const top = document.querySelector('.top');
    const bottom = document.querySelector('.bottom');
    const topLeft = document.querySelector('.tl');
    const topRight = document.querySelector('.tr');
    const bottomLeft = document.querySelector('.bl');
    const bottomRight = document.querySelector('.br');
    const circlei = document.querySelector('.circlei');
    const circleii = document.querySelector('.circleii');
    const circleiii = document.querySelector('.circleiii');
    const circleiv = document.querySelector('.circleiv');
    const logo = document.querySelector('.logo');
    const x = document.querySelector('.x');
    const sectionv = document.querySelector('.sectionv')

    circlei.addEventListener("mouseover", () => {
    if (topLeft.backgroundImage == "url("/img&logo/clothes/sliced/silver/row-1-col-1.jpg")"{
        topRight.backgroundImage = "/img&logo/clothes/sliced/silver/row-1-col-2.jpg";
    }
    if(topRight.src.indexOf("/img&logo/clothes/croped/crped-silver-jacket-front.jpg") != 1) {
        topRight.src = "/img&logo/clothes/croped/crped-hoodie-black-front.jpg"
    }else {
        topRight.src = "/img&logo/clothes/croped/crped-silver-jacket-front.jpg";
    }


    topLeft.classList.toggle("top-left-toggle");
    topRight.classList.toggle("top-right-toggle");
    bottomLeft.classList.toggle("bottom-left-toggle");
    bottomRight.classList.toggle("bottom-right-toggle");
    // topLeft.style.visibility = "hidden";
    // topRight.style.visibility = "hidden";
    // bottomLeft.style.visibility = "hidden";
    // bottomRight.style.visibility = "hidden";
    // photoGrid.style.backgroundImage = "url('/img&logo/clothes/silver-jacket-front-copy.jpg')";
    // photoGrid.style.backgroundSize = "110%";
    // photoGrid.style.backgroundRepeat = "no-repeat";
    // photoGrid.style.backgroundPosition = "0% 34%";
    
    });
}
gridMovement(); 