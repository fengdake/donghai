var Meter4=(function(){var e={styles:{sAngle:0.93,eAngle:2.07,area:{radius:30,colors:{"0":"#1266BC","0.15":"#67C6F2","0.27":"#45F5E6","0.75":"#FFDE00","0.93":"#F5694B","1":"#FF0202"},lineWidth:1,scaleLength:9,scaleWidth:0.2,lineColor:"#fff"},range:{color:"#F4674B",width:2,arrow:{height:15,radius:4}},value:{margin:-50,color:"#F4674B",font:"bold 52px Microsoft YaHei"},title:{margin:-5,color:"#F4674B",font:"bold 20px Microsoft YaHei"},subTitle:{margin:25,color:"#999",font:"14px Microsoft YaHei"},label:{radius:28,color:"#aaa",background:"#f5f5f5",font:"12px Microsoft YaHei"},inner:{radius:97,color:"#999",dashedWidth:3}}};var b,d,j,g,k,m,l,r,s,o,a,u;var v=function(C,B){for(var A in B){if(C.hasOwnProperty(A)&&typeof C[A]=="object"){v(C[A],B[A])}else{C[A]=B[A]}}};var c=function(B,A){return{x:e.centerPoint.x+B*Math.cos(Math.PI*A),y:e.centerPoint.y+B*Math.sin(Math.PI*A)}};var x=function(F){var E=e.data.area,A=E.length-1;for(var B=A;B>=0;B--){if(F>=E[B].min&&F<E[B].max){A=B}}var D=(k-g)/E.length,C=D*A+g,G=D*(A+1)+g,H=E[A];return{range:(F-H.min)/(H.max-H.min)*(G-C)+C,index:A}};var f=function(D,B){var A=D.x||e.centerPoint.x,F=D.y||e.centerPoint.y,C=D.start||0,E=D.end||2;d.beginPath();d.moveTo(A,F);switch(B){case 1:d.setLineDash&&d.setLineDash([u.dashedWidth]);case 2:d.arc(A,F,D.r,Math.PI*C,Math.PI*E);d.closePath();d.strokeStyle=D.style;d.stroke();break;default:d.arc(A,F,D.r,Math.PI*C,Math.PI*E);d.closePath();d.fillStyle=D.style;d.fill();break}};var w=function(){var B=d.createLinearGradient(0,0,e.radius*2,0);for(var A in m.colors){B.addColorStop(A,m.colors[A])}f({r:e.radius,start:g,end:k,style:B});f({r:e.radius-m.radius,style:"#fff"})};var q=function(B){var A=e.radius-m.radius;f({r:A,start:g,end:B.range,style:a.background});f({r:A-a.radius,start:g,end:B.range,style:l.color});f({r:A-a.radius-l.width,style:"#fff"})};var t=function(A){d.font=A.font;d.fillStyle=A.color;d.textAlign=A.align||"center";d.textBaseline=A.vertical||"middle";d.moveTo(A.x,A.y);d.fillText(A.text,A.x,A.y)};var p=function(C,B){f({r:u.radius,start:g,end:k,style:u.color},1);f({r:u.radius-1,style:"#fff"});var A=e.data;t({font:r.font,color:r.color,text:B,x:e.radius,y:e.radius+r.margin});t({font:s.font,color:s.color,text:A.title.replace("{t}",A.area[C.index].text).replace("{v}",B),x:e.radius,y:e.radius+s.margin});t({font:o.font,color:o.color,text:A.subTitle,x:e.radius,y:e.radius+o.margin})};var i=function(E){var D=e.radius-m.radius-a.radius,F=c(D,E.range),B=F.x-1,H=F.y+0.5;f({x:B,y:H,r:l.arrow.radius,style:l.color});var C=c(D-l.arrow.height,E.range),A=c(D,E.range-0.01),G=c(D,E.range+0.01);d.beginPath();d.moveTo(C.x-1,C.y+0.5);d.lineTo(A.x-1,A.y+0.5);d.lineTo(G.x-1,G.y+0.5);d.closePath();d.fillStyle=l.color;d.fill();f({x:B,y:H,r:l.arrow.radius-l.width,style:"#fff"})};var n=function(A){d.beginPath();d.moveTo(A.start.x,A.start.y);d.lineTo(A.end.x,A.end.y);d.closePath();d.strokeStyle=A.style;d.lineWidth=A.width||1;d.stroke()};var h=function(){var D=m.scaleLength,G=e.data.area,K=D*G.length,I=(k-g)/K;for(var F=1;F<K;F++){n({start:c(e.radius,g+I*F),end:c(e.radius-m.radius,g+I*F),style:m.lineColor,width:F%D==0?m.lineWidth:m.scaleWidth})}var M=[];for(var H=0;H<G.length;H++){var C=G[H];if(M.join("").indexOf(C.min)==-1){M.push(C.min)}M.push(C.text);M.push(C.max)}var A=M.length-1,B=(k-g)/A,L=a,N=e.radius-m.radius-L.radius/2;for(var E=0;E<=A;E++){var J=c(N,g+B*E);L.x=J.x;L.y=J.y;L.text=M[E];t(L)}};var z=function(A,B){var D=e.data.value,C=e.data.area[0].min;var E=setInterval(function(){d.clearRect(0,0,A,B);d.fillStyle="#fff";d.fillRect(0,0,A,B);C=C+10>D?D:C+10;var F=x(C);w();q(F);p(F,C);i(F);h();if(C===D){clearInterval(E)}},10)};var y={};y.setOptions=function(A){v(e,A);j=e.styles;g=j.sAngle;k=j.eAngle;m=j.area;l=j.range;r=j.value;s=j.title;o=j.subTitle;a=j.label;u=j.inner;b=typeof e.element=="string"?document.getElementById(e.element):e.element;d=b.getContext("2d");return y};y.init=function(){z(b.offsetWidth,b.offsetHeight);return y};return y})();