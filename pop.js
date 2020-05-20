var launch_all=document.getElementById('launch-all');

launch_all.addEventListener('click',function(){
    UpdateLinks();
});
var urls=[
"https://lakshyabansal.000webhostapp.com/",
"https://github.com/prog-hammer/",
"https://www.linkedin.com/in/proghammer/",
"https://twitter.com/lakshya__bansal"
]
function UpdateLinks(){
    for(var i in urls){
        window.open(urls[i]);
    }
}