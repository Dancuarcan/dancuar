let cursor =document.querySelector ('.cursor');
const ImageArray = [...document.querySelectorAll('.gallery img')]


document.addEventListener ('mousemove', moveCursor);

    function moveCursor(e){
            let x = e.clientX;
            let y = e.clientY;

            if(window.innerWidth > 710){
            cursor.style.left = x + "px" ;
            cursor.style.top = y + "px" ;
            cursor.style.display = 'block';
            document.body.style.cursor = 'none';
            } else {
            cursor.style.display = "none";  
            document.body.style.cursor = 'auto';
            }
 }



document.addEventListener ('mouseout', () =>{
    cursor.style.display = "none";
});


let links = Array.from(document.querySelectorAll("a"));

links.forEach(link =>{
    link.addEventListener('mouseover', ()=>{
        cursor.classList.add('change')
    })    
})
links.forEach(link =>{
    link.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('change')
    })    
})

//Index links array

const index = [...document.querySelectorAll(".index a")];



for(let i= 0; i < index.length; i++){
    index[i].addEventListener("mouseover",() => {
        for(let j = 0; j < index.length; j++){
            if(j !== i){
                index[j].style.opacity = 0.1;
                index[j].style.color = "#000";
                index[j].style.zindex = -2;
            }else{
                index[j].style.opacity = 1;
                // index[j].style.color = "#dd3b0a";
                index[j].style.zindex= 3;
            }
        }    
    })

    index[i].addEventListener("mouseleave", () => {
        for(let i = 0; i < index.length; i++){
            index[i].style.opacity = 1;
        } 
        for(let j = 0; j < index.length; j++) {
            if(j == i) {
                index[j].style.color = "#000";
            }
        }
        
    })
}




// let imageArray = [];


// let options = {
//     rootMargin: '0px',
//     threshold: 1.0
// }

// let callback = (entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             console.log(entry.target.classList[0]);
//             imageArray[+entry.target.classList[0]].reveal();

//         }
//     });
// })

// let observer = new IntersectionObserver(callback, options);

// class PixelImage{
//     constructor(id, image, width, height){
//         this.id = id;
//         this.image = image;
//         this.styleWidth = width;
//         this.styleHeight = height;
//         this.width = width * window.devicePixelRatio;
//         this.height = height * window.devicePixelRatio;
//         this.percent = .001;
//         this.applyCanvas();
//         this.draw();
//     }

//     applyCanvas(){
//         this.canvas = document.createElement('canvas');
//         this.canvas.classList.add(this.id);
//         this.ctx = this.canvas.getContext('2d');
//         this.image.parentElement.appendChild(this.canvas);
//         this.canvas.width = this.width;
//         this.canvas.height = this.height;
//         this.canvas.style.width = `${this.styleWidth}px`;
//         this.canvas.style.height = `${this.styleHeight}px`;
//         this.scaledWidth = this.width * this.percent;
//         this.scaledHeight = this.height * this.percent;

//         // turn off image aliasing
//         this.ctx.msImageSmoothingEnabled = false;
//         this.ctx.mozImageSmoothingEnabled = false;
//         this.ctx.webkitImageSmoothingEnabled = false;
//         this.ctx.imageSmoothingEnabled = false;

//         observer.observe(this.canvas);
//     }

//     draw(){
//         this.ctx.drawImage(this.image, 0, 0, this.scaledWidth, this.scaledHeight);
//         this.ctx.drawImage(this.canvas, 0, 0, this.scaledWidth, this.scaledHeight, 0, 0, this.width, this.height);
//     }

//     reveal(){
//         this.canvas.classList.add('active');
//         this.percent = this.percent < .1 ? this.percent += .002 : this.percent += .2;
//         if(this.percent > 1) {
//             this.percent = 1;
//         }
        
//         this.scaledWidth = this.width * this.percent;
//         this.scaledHeight = this.height * this.percent;

//         this.ctx.drawImage(this.image, 0, 0, this.scaledWidth, this.scaledHeight);
//         this.ctx.drawImage(this.canvas, 0, 0, this.scaledWidth, this.scaledHeight, 0, 0, this.width, this.height);
//         if(this.percent < 1) requestAnimationFrame(this.reveal.bind(this));
//     }
// }

// function generatePixelImages(){
//     let images = [...document.querySelectorAll('')];
//     images.forEach((image, idx) => {
//         let {width, height} = image.getBoundingClientRect();
//         let pixelImage = new PixelImage(idx, image, width, height);
//         imageArray.push(pixelImage);
//     })
// }

// setTimeout(() => {
//     generatePixelImages();
// }, 100  )




 const gallery = document.querySelector('.gallery')

 window.onscroll = () =>{

    if(window.innerWidth > 710){
        gallery.style.left = `${-window.scrollY}px`
    } else {
        gallery.style.left = "0px"
    }

 }

//     const allImages= [...document.querySelectorAll('.img_container')];
//     console.log(allImages)

// for(let i = 0; i < allImages.length; i++){
//     allImages[i].addEventListener('mouseover', ()=>{
//         cursor.classList.add('change')
//         console.log('hello')
//     })
//     allImages[i].addEventListener('mouseleave', ()=>{
//         cursor.classList.remove('change')
//         console.log('hello')
//     })
// }


// const arrow_left = document.getElementById('arrow_left')
// const arrow_right = document.getElementById('arrow_right')

// arrow_left.addEventListener('mouseover', ()=>{
//     cursor.classList.add('change');
// })
// arrow_left.addEventListener('mouseleave', ()=>{
//     cursor.classList.remove('change');
// })

// arrow_right.addEventListener('mouseover', ()=>{
//     cursor.classList.add('change');
// })
// arrow_right.addEventListener('mouseleave', ()=>{
//     cursor.classList.remove('change');
// })





const frame = document.getElementById('img_displayed')
var imgCount = document.getElementById('photography_imgCount')
var photographyImages = [
    './images/index_images/photography_1.1.jpg',
    './images/index_images/photography_2.jpg',
    './images/index_images/photography_3.jpg',
    './images/index_images/photography_4.jpg',
    './images/index_images/photography_5.jpg',
    './images/index_images/photography_6.jpg',
    './images/index_images/photography_7.jpg',
    './images/index_images/photography_8.jpg',
    './images/index_images/photography_9.jpg',
    './images/index_images/photography_10.jpg',
    './images/index_images/photography_11.jpg',
    './images/index_images/photography_12.jpg',
    './images/index_images/photography_13.jpg',
    './images/index_images/photography_14.jpg',
    './images/index_images/photography_15.jpg',
    './images/index_images/photography_16.jpg',
    './images/index_images/photography_17.jpg',
    './images/index_images/photography_18.jpg',
    
]
var i = 0;

function prev(){
    if(i <= 0) i = photographyImages.length;
    i--;
    return setImg();
}

function next(){
    if(i >= photographyImages.length -1) i = -1;
    i++;
    return setImg();
}

function setImg(){
    return frame.setAttribute('src', photographyImages[i]),
    imgCount.innerText = `${i+1}/${photographyImages.length}`;
}

const hello= document.querySelector('.photography_gallery .click_next');
let NEXT = document.createElement('p');
    cursor.appendChild(NEXT);
    NEXT.innerText = '👉';

if(hello){
    hello.addEventListener('mouseover', ()=>{
        cursor.classList.add('overImg');
        NEXT.style.display = 'block';
        // cursor.style.display = 'block';
        // document.body.style.cursor = 'none';
    })
    
    hello.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('overImg');
        NEXT.style.display = 'none';
        // cursor.style.display = 'none';
        // document.body.style.cursor = 'auto';

    })
}


let view = document.createElement('p');
    cursor.appendChild(view);
    view.innerText = '👀';


for(let i = 0; i < ImageArray.length; i++){
    const panel = document.createElement('div');
    let imgContainer = document.createElement('div');
    panel.classList.add('zoom_container');
    imgContainer.classList.add('zoomedImg_container');
    let image = document.createElement('img');
    let closeIcon =  document.createElement('p');

    closeIcon.innerText = '[x]';
    
    image.src = ImageArray[i].src;
    

    ImageArray[i].addEventListener('mouseover', ()=>{
        cursor.classList.add('overImg');
        view.style.display = 'block';
        // cursor.style.display = 'block';
        // document.body.style.cursor = 'none';
    })

    ImageArray[i].addEventListener('mouseleave', ()=>{
        cursor.classList.remove('overImg');
        view.style.display = 'none';
        // cursor.style.display = 'none';
        // document.body.style.cursor = 'auto';
    })

    ImageArray[i].addEventListener('click', ()=>{
        panel.classList.add('active'); 
        cursor.classList.remove('overImg');
        // cursor.style.display = 'none';
        view.style.display = 'none';
    })
    

    imgContainer.addEventListener('click',()=>{
        panel.classList.remove('active'); 
        cursor.classList.remove('change');
        
    })

    image.addEventListener('mouseover',()=>{
        // cursor.style.display = 'none';
        cursor.classList.add('change');     
    })

    image.addEventListener('mouseleave',()=>{
        cursor.classList.remove('change');
    })
    
    closeIcon.addEventListener('click', ()=>{
        panel.classList.remove('active');     
    })
    
    closeIcon.addEventListener('mouseover', ()=>{
        cursor.classList.add('change');
        document.body.style.cursor = 'pointer';
    })

    closeIcon.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('change');
        document.body.style.cursor = 'auto';
    })
    

    panel.appendChild(imgContainer);
    imgContainer.appendChild(image);
    document.body.appendChild(panel);
    panel.appendChild(closeIcon);
}


document.addEventListener('keydown', function (event){
    const escapePressed = event.key;

    const panel = document.querySelector('.zoom_container.active');
    if(escapePressed === 'Escape'){
        panel.classList.remove('active'); 
    }
})


