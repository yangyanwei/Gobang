window.onload=function(){

    var ROW = 10;
    var sence = document.getElementById('sence');
    var div;
    var el,els;
    for(var i=0;i<ROW;i++){
        var cc = Math.floor((600/ROW)/2+600/ROW*i)+'px';
        el = document.createElement('div');
        el.style.position = 'absolute';
        el.style.top = cc;
        el.style.width = '600px';
        el.style.height = '1px';
        el.style.background = 'white';
        sence.appendChild(el);
        els = document.createElement('div');
        els.style.position = 'absolute';
        els.style.left = cc;
        els.style.width = '1px';
        els.style.height = '600px';
        els.style.background = 'white';
        sence.appendChild(els);
    }

   var row = ROW,
       width = Math.floor(600-row)/row+'px',
       sence = document.getElementById('sence'),
       child;
    for(var i=0;i<row;i++){
        for(var j=0;j<row;j++){
            child = document.createElement('div');
            child.setAttribute('class','black');
            child.setAttribute('id',i+'_'+j);
            child.style.width = width;
            child.style.height = width;
            sence.appendChild(child);
        }
    }
    var kaiguan = true;
    var dict1 = {};
    var dict2 = {};
    var panduan = function(id,dic){
        var x = Number(id.split('_')[0]);
        var y = Number(id.split('_')[1]);
        var tx,ty;

        var hang = 1;
        tx = x;ty = y;
        while(dic[tx+'_'+(ty+1)]){hang++;ty++;}
        tx = x; ty = y;
        while(dic[tx+'_'+(ty-1)]){hang++;ty--;}
        if(hang == 5) return true;

        var lie = 1;
        tx = x; ty = y;
        while(dic[(tx-1)+'_'+(ty)]){lie++;tx--;}
        tx = x; ty = y;
        while(dic[(tx+1)+'_'+(ty)]){lie++;tx++;}
        if(lie == 5) return true;

        var lx = 1;
        tx = x; ty = y;
        while(dic[(tx-1)+'_'+(ty+1)]){lx++;tx--;ty++}
        tx = x; ty = y;
        while(dic[(tx+1)+'_'+(ty-1)]){lx++;tx++;ty--;}
        if(lx == 5) return true;

        var rx = 1;
        tx = x; ty = y;
        while(dic[(tx+1)+'_'+(ty+1)]){rx++;tx--;ty++;}
        tx = x; ty = y;
        while(dic[(tx-1)+'_'+(ty-1)]){rx++;tx--;ty--;}
        if(rx == 5) return true;

        return false;
    }

    var black = document.getElementsByClassName('black');
    for(var i=0;i<black.length;i++){
        black[i].onclick = function(){
            var id = this.getAttribute('id');
            if(!this.hasAttribute('hasColor')){
                this.setAttribute('hasColor','true');
                this.style.borderRadius = '50%';
                this.style.boxShadow = '0 2px 12px black';
                if(kaiguan){
                    this.style.background = 'black';kaiguan = false;
                    dict1[id] = true;
                    if(panduan(id,dict1)){alert('黑棋赢了');location.reload() }
                }else{
                    this.style.backgroundColor = 'white';kaiguan = true;
                    dict2[id] = true;
                    if(panduan(id,dict2)){alert ('白棋赢了'); location.reload()}
                }
            }
            }
    }


};