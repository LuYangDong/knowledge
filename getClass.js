function getClass(param){
    if(document.getElementsByClassName){
        return document.getElementsByClassName(param);
    }else{
        var allTag = document.getElementsByTagName("*");
        var arr = [];
        for(var i=0;i<allTag.length;i++){
            var className = allTag[i].className;
            var arrClass =  className.split(" ");    //多个类名的处理  分割开  "xq a"  ["xq","a"]
            for(var j=0;j<arrClass.length;j++){
                if(arrClass[j]==param){
                    arr.push(allTag[i]);
                }
            }
        };
        return arr;
    };
};
