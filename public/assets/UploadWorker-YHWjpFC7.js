(function(){"use strict";self.onmessage=function(a){const{url:n,file:s}=a.data,o=new FormData;o.append("videos",s);const e=new XMLHttpRequest;e.upload.onprogress=function(t){if(t.lengthComputable){const r=Math.round(t.loaded*100/t.total);self.postMessage({type:"progress",fileName:s.name,progress:r})}},e.onload=function(){e.status===200?self.postMessage({type:"success",fileName:s.name}):self.postMessage({type:"error",fileName:s.name,error:e.statusText})},e.onerror=function(){self.postMessage({type:"error",fileName:s.name,error:e.statusText})},e.open("POST",`${n}/api/video/upload`,!0),e.setRequestHeader("Accept","application/json"),e.send(o)}})();
