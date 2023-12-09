let cursor =document.querySelector ('.cursor');
const ImageArray = [...document.querySelectorAll('.gallery img')]



document.addEventListener ('mousemove', moveCursor);

    function moveCursor(e){
            let x = e.clientX;
            let y = e.clientY;

            if(window.innerWidth > 790){
            cursor.style.left = `${x}px` ;
            cursor.style.top = `${y}px` ;
            cursor.style.display = 'block';
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



 const gallery = document.querySelector('.gallery')

 if(gallery){
    window.onscroll = () =>{

        if(window.innerWidth > 710){
            gallery.style.left = `${-window.scrollY}px`
        } else {
            gallery.style.left = "0px"
        }
    
     }    
 }





const frame = document.getElementById('img_displayed')
var photographyImages = [
    './images/index_images/photography_2.webp',
    './images/index_images/photography_3.webp',
    './images/index_images/photography_4.webp',
    './images/index_images/photography_5.webp',
    './images/index_images/photography_6.webp',
    './images/index_images/photography_7.webp',
    './images/index_images/photography_8.webp',
    './images/index_images/photography_9.webp',
    './images/index_images/photography_10.webp',
    './images/index_images/photography_11.webp',
    './images/index_images/photography_12.webp',
    './images/index_images/photography_13.webp',
    './images/index_images/photography_14.webp',
    './images/index_images/photography_15.webp',
    './images/index_images/photography_16.webp',
    './images/index_images/photography_17.webp',
    './images/index_images/photography_18.webp',
    './images/index_images/photography_1.1.webp',
    
]

function photographyPreloader(){
    for (i=0; i<photographyImages.length; i++){
        let frameContainer = document.createElement('div');
        frameContainer.classList.add('framePreload');
        let image = document.createElement('img');

        frameContainer.style.display = 'none';
    
        image.src = photographyImages[i];

        document.body.appendChild(frameContainer);
        frameContainer.appendChild(image);
    }
}


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
    return frame.setAttribute('src', photographyImages[i]) 
};

const nextButton= document.querySelector('.photography_gallery .click_next');
let NEXT = document.createElement('img');
    NEXT.classList.add('next_icon');
    cursor.appendChild(NEXT);
    NEXT.src = './images/next_icon.png'; 

if(nextButton){

    photographyPreloader();

    nextButton.addEventListener('mouseover', ()=>{
        cursor.classList.add('overImg');
        NEXT.style.display = 'block';
        // cursor.style.display = 'block';
        // document.body.style.cursor = 'none';
    })
    
    nextButton.addEventListener('mouseleave', ()=>{
        cursor.classList.remove('overImg');
        NEXT.style.display = 'none';
        // cursor.style.display = 'none';
        // document.body.style.cursor = 'auto';

    })
}


let view = document.createElement('img');
    cursor.appendChild(view);
    view.classList.add('view_icon');
    view.src = './images/view_icon.png';


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


let device_menu_toggle_on = document.querySelector('.device_menu_toggle_on');
let device_menu_toggle_off = document.querySelector('.device_menu_toggle_off');
let device_menu = document.querySelector('.device_menu');
let device_menu_index = Array.from(document.querySelectorAll('.device_menu_index a'));


function menuToggle(){

    if (window.innerWidth < 790){
      
        device_menu_toggle_on.style.display = 'none';
        device_menu_toggle_off.style.display = 'flex';
        device_menu.classList.add('displayed');

        device_menu_index.forEach((link, idx) =>{
            setTimeout(()=>{
                link.classList.add("active");
            }, idx * 70)
        })
    } 
}


function menuOff(){

    if (window.innerWidth < 790){
        
        device_menu_toggle_on.style.display = 'flex';
        device_menu_toggle_off.style.display = 'none';
        device_menu.classList.remove('displayed');

        device_menu_index.forEach((link) =>{
            link.classList.remove("active");
        })
    } 
}

window.addEventListener("resize", ()=> {

    if (window.innerWidth > 790){

        device_menu_toggle_off.style.display = 'none';
        device_menu_toggle_on.style.display = 'none'; 
        device_menu.classList.remove('displayed');

    } else if(window.innerWidth <= 790) {

        device_menu_toggle_off.style.display = 'none';
        device_menu_toggle_on.style.display = 'flex'; 
        device_menu.classList.remove('displayed');
    }
   });


device_menu_toggle_on.addEventListener('mouseover', ()=>{
    cursor.classList.add('change')
});

device_menu_toggle_on.addEventListener('mouseleave', ()=>{
    cursor.classList.remove('change')
});


//animation section

const AnimationArray = [...document.querySelectorAll('.gallery_animation img')]

const AnimationGallery = document.querySelector('.gallery_animation')

if(AnimationGallery){
   window.onscroll = () =>{

       if(window.innerWidth > 710){
        AnimationGallery.style.left = `${-window.scrollY}px`
       } else {
        AnimationGallery.style.left = "0px"
       }
   
    }    
}


for(let i = 0; i < AnimationArray.length; i++){
    const panel = document.createElement('div');
    panel.classList.add('ProjectView_container');
    let closeIcon =  document.createElement('p');

    closeIcon.innerText = '[x]';
    

    AnimationArray[i].addEventListener('mouseover', ()=>{
        cursor.classList.add('overImg');
        view.style.display = 'block';
        // cursor.style.display = 'block';
        // document.body.style.cursor = 'none';
    })

    AnimationArray[i].addEventListener('mouseleave', ()=>{
        cursor.classList.remove('overImg');
        view.style.display = 'none';
        // cursor.style.display = 'none';
        // document.body.style.cursor = 'auto';
    })

}


// Vimeo player mouse off

var vimeoPlayer = document.querySelector('iframe');

vimeoPlayer.addEventListener('mouseover', ()=>{
    cursor.classList.add('vimeo');
})

vimeoPlayer.addEventListener('mouseleave', ()=>{
    cursor.classList.remove('vimeo');
})