const uniInfoButton=document.getElementById('displayUniversity');
const uniInfo=document.getElementById('universityInfo');

uniInfoButton.addEventListener('mouseover',()=>{
    {
        if(uniInfo.style.display==='none' || uniInfo.style.display===''){
            uniInfo.style.display='block';
        }else{
            uniInfo.style.display='none';
        }
        
    }
})

const courseButton =document.getElementById('displayCourse');
const courseInfo=document.getElementById('courseInfo');

courseButton.addEventListener('mouseover',()=>{
    {
        if(courseInfo.style.display==='none' || courseInfo.style.display===''){
            courseInfo.style.display='block';
        }else{
            courseInfo.style.display='none';
        }
        
    }
})