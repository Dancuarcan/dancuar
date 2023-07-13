let cursor =document.querySelector ('.cursor');
const ImageArray = [...document.querySelectorAll('.gallery img')]



document.addEventListener ('mousemove', moveCursor);

    function moveCursor(e){
            let x = e.clientX;
            let y = e.clientY;

            if(window.innerWidth > 790){
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



 const gallery = document.querySelector('.gallery')

 window.onscroll = () =>{

    if(window.innerWidth > 710){
        gallery.style.left = `${-window.scrollY}px`
    } else {
        gallery.style.left = "0px"
    }

 }




const frame = document.getElementById('img_displayed')
var photographyImages = [
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
    './images/index_images/photography_1.1.jpg',
    
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
let NEXT = document.createElement('p');
    cursor.appendChild(NEXT);
    NEXT.innerText = '👉';

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

    } else if(window.innerWidth < 790) {

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


//animations





