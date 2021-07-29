document.addEventListener('visibilitychange',
function(){
    if(document.visibilityState === "visible"){
        document.title = "Portfolio | Gaurav Ashish  😊 ";
    }
    else {
        document.title = "Come Back To Portfolio  🙏";
    }
});