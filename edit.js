var name_field=document.getElementById('name')
var website=document.getElementById('website')
var github=document.getElementById('github')
var linkedin=document.getElementById('linkedin')
var twitter=document.getElementById('twitter')
var facebook=document.getElementById('facebook')
var save=document.getElementById('save')

var keys=["name","website","github","linkedin","twitter","facebook"];

chrome.storage.local.get(keys,function(links){
    if(!chrome.runtime.error){
        if(links.name){
            name_field.innerHTML=links.name;
        }
        if(links.website){
            website.value=links.website;
        }
        if(links.github){
            github.value=links.github;
        }
        if(links.linkedin){
            linkedin.value=links.linkedin;
        }
        if(links.twitter){
            twitter.value=links.twitter;
        }
        if(links.facebook){
            facebook.value=links.facebook;
        }
    }
});
save.addEventListener('click',function(){
    updateLinks();
    console.log("hk")
});

function updateLinks(){
    let values={
        "name":name_field.value,
        "website":website.value,
        "github":github.value,
        "linkedin":linkedin.value,
        "twitter":twitter.value,
        "facebook":facebook.value
    }
    console.log("values",values)
    chrome.storage.local.set(values,function(){
        if(!chrome.runtime.error){
            window.location.pathname='popup.html'
        }
    })
}