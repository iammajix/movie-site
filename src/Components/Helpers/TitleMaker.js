export function itemTitle(title , type){
    let  itemType= "";
    if (type == "movie"){
        itemType="فیلم"
    }else if (type=="series") {
        itemType="سریال"
    }
    document.title = `${itemType}تماشای فیلم ${title}  | تتیس فیلم`
    }
    export function pageTitle (title){
        document.title= `${title} - تتیس فیلم`
    }
