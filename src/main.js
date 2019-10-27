let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `
/* 你好，我是Sozyhi
 * 这是一个空白的页面
 * 让我们一起打开脑洞，创建世界吧
 * 先随便来个方块怎么样？
*/
#div1{
  border:1px solid black;
  width:200px;
  height:200px;
}
/* 接下来我把这个方块变成一幅太极八卦图
 * 注意看哦
 * 首先把方块变成一个圆
*/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/* 太极八卦图是阴阳形成的
 * 一黑一白
*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 太极八卦图中有两个阴阳鱼，表示万物相互关系
 * 阳鱼的头部有个阴眼，阴鱼的头部有个阳眼，表示万物都在相互转化
 * 下面我将黑白两块变为阴阳鱼
 * 注意看哦
*/
#div1::before{
  width:100px;
  height:100px;
  background:#fff;
  up:0;
  left:50%;
  transform:translateX(-50%);
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1::after{
  width:100px;
  height:100px;
  background:#000;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
/* 一幅太极八卦图就完成了
 * 接下来，我们让太极动起来
 */
 #div1{
   animation:spin 3s linear infinite;
 }
 @keyframes spin{
   from{
     transform:rotate(0);
   }
   to{
    transform:rotate(360deg);
  }
 }
 /* 下次再见哦 */

`;
let string2 = "";
let n = 0;
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scroll(0, 99999);
    html.scroll(0, 99999);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 50);
};
step();
