const uniInfoButton=document.getElementById('displayUniversity');
const uniInfo=document.getElementById('universityInfo');

uniInfoButton.addEventListener('click',()=>{
    {
        if(uniInfo.style.display==='none' || uniInfo.style.display===''){
            uniInfo.style.display='block';
        }else{
            uniInfo.style.display='none';
        }
        
    }
})