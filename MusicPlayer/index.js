document.addEventListener('DOMContentLoaded', function (){
    const audio=document.getElementById('audio');
    const prevButton=document.getElementById('prev-btn');
    const nextButton=document.getElementById('next-btn');
    const songNameElement=document.getElementById('song-name');
    const pictureElement=document.getElementById('album-pic');

   let currentSong=0;

   //Array of song path
   const songsList=[
    "Resource/music/Alone_-_Color_Out.mp3",
    "Resource/music/Color_Out_-_Host.mp3",
    "Resource/music/Molotov_Heart_-_radionowhere.mp3",
    "Resource/music/No_Rest_Or_Endless_Rest_-_Lisofv.mp3",
    "Resource/music/Tab_-_Sake_Bomb_(feat._Jade_Gritty_&amp;_Aurc).mp3",
    "Resource/music/O_Sajani_Re.mp3"
   ]

   //Array of album pictures
   const imageList=[
    "Resource/images/Alone_img.png",
    "Resource/images/Host_img.png",
    "Resource/images/Moltoveheart_img.png",
    "Resource/images/NorestOrEndlessRest_img.png",
    "Resource/images/SakeBomb_img.png",
    "Resource/images/Sajani-re.png"
   ]

   var imageIndex=0;


   // function to play next song

   nextButton.addEventListener('click', function(){
    if(currentSong < songsList.length -1){
        pictureElement.setAttribute("src",imageList[imageIndex++]);
        currentSong++;
    }else{
        currentSong = 0;
        pictureElement.setAttribute("src",imageList[imageIndex++]);
    }
    updateSong(currentSong);
   });

   function updateSong(index){
    audio.src=songsList[index];
    const songName=songsList[index];
    const newSongName=songName.replace("Resource/music/", "");
    songNameElement.innerText=newSongName;
    pictureElement.setAttribute("src",imageList[index]);
   }


   //function to play previous song

   prevButton.addEventListener('click', function(){
    if(currentSong > 0){
        pictureElement.setAttribute("src",imageList[--imageIndex]);
        currentSong--;
    }else{
        pictureElement.setAttribute("src",imageList[--imageIndex]);
        currentSong =songsList.length-1
    }
    updateSong(currentSong);
   });

   
   updateSong(currentSong);
})