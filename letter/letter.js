let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "qlx.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str = '亲爱的乖乖：<喜欢一个人的感觉，大概就是听别人讨论爱情，我只想起你<每每静下来想你，便觉得一切都美好的不可思议，想起你我第一次见面，那是你在我家，你笑起来，像人间不该有的季节，看着你微笑的侧脸，心动，心动，我本想我们不会有交集，没想到我们能在一起，至此占据我的整颗心<当你看到信的这一刻，我应该在"知音号"上为你戴上这枚戒指了，我想说的是，这枚戒指，是我对你的承诺，是我们未来的期许。它代表着我的真心，代表着我对你无尽的爱意。<遥远的星星有闪烁一下，<我也有心动<却不止一下'
let strp = ''

function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },190);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 5500);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},1500)
}
appearBackground()

})
