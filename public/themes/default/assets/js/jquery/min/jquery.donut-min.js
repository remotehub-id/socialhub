!function($){$.fn.donut=function(t){var e=$.extend({colors:["#40557D","#FAC942","#1AA6D6","#F0B499","#72C4B9","#289DF5"]},t);return this.each(function(){function t(t,e,l){a.lineWidth=1,a.fillStyle="#ffffff",a.textAlign="center",a.textBaseline="middle",a.textTransform="uppercase",a.fillText(c,n,o)}var a=this.getContext("2d"),l=[],i=[];$(this).children().map(function(){var t=$(this).data("value"),e=parseFloat(t);isNaN(e)?console.log("Chart value '"+t+"' is invalid"):(l.push(e),i.push($(this).text()))});var r=$(this).width(),h=$(this).height(),n=Math.floor(r/2),o=Math.floor(h/2),s=Math.ceil(.8*Math.min(n,o)),f=Math.ceil(s/1.2);a.clearRect(0,0,r,h),a.restore(),a.save();var c="";$(this).data("title")&&(c=$(this).data("title"),t(c,n,o));var u,d=0;for(u=0;u<l.length;u++)d+=parseFloat(l[u]);var v=360/d,g=Math.PI/180,p=0,x=0,M,F,m;for(a.translate(n,o),a.rotate(270*g),u=0;u<l.length;u++)x=p*g,M=(p+l[u]*v)*g,a.fillStyle=e.colors[u%e.colors.length],a.beginPath(),a.arc(0,0,s,x,M,!1),a.arc(0,0,f,M,x,!0),a.closePath(),a.fill(),p+=l[u]*v})}}(jQuery);