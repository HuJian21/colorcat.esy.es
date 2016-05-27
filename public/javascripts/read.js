window.onload=function(){
      var oShow=document.getElementsByClassName('show');
      var oShowall=document.getElementsByClassName('showall');

      var Lenshowall=oShowall.length;

  //--图片每3000毫秒变化一次--
  var oRimg=document.getElementById('rimg');
  var arrUrl=['../images/1.jpg','../images/2.jpg','../images/3.jpg','../images/4.jpg','../images/5.jpg'];
  var TimeTab=3000;
  var num=0;
  
  setInterval(changeimg,TimeTab);

  function changeimg(){
    if(num==arrUrl.length-1){
      num=0;
    }
    else{
      num++;
    }
    oRimg.src=arrUrl[num];
  };

  //添加自定义属性开关和索引值 
  for(var i=0;i<Lenshowall;i++){
    oShowall[i].index=i;
    oShowall[i].offon=true;
    oShowall[i].onclick=function(){
      if(this.offon){ 
        oShow[this.index].style.height='auto';
        this.innerHTML='<p class="showall">'+'收起'+'<span>'+'&nbsp;'+'∧'+'</span>'+'</p>';
        this.offon=false;
      }
      else{
        oShow[this.index].style.height='126px';
        this.innerHTML='<p class="showall">'+'显示全部'+'<span>'+'&nbsp;'+'∨'+'</span>'+'</p>';
        this.offon=true;
      }
    };
  };
};