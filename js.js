let alp={ A:"1", B:"4", C:"7", D:"@",
E:"~", F:"?", G:"*", H:"c", I:"b",
J:"k", K:"2", L:"5", M:"8", N:"#",
O:"%", P:"!", Q:"µ", R:"d", S:"z",
T:"e", U:"3", V:"6", W:"9", X:"+",
Y:"$", Z:"&"};
function coder(){
    let mot=document.getElementById("write").value;
    let x=mot.length;
    let tab=[];
    for(let i=0;i< x;i++){
        let xa=mot[i];
        tab.push(alp[xa]);
        }
    document.getElementById("show").value=tab.join("");
}

function decoder(){
    let mot=document.getElementById("write_1").value;
    let tab=[];
    for(let i=0;i< mot.length;i++){
        let xa=mot[i];
        for(let j in alp){
            if(alp[j]==xa){
                tab.push(j);
            }
        }
        
        
    }
    document.getElementById("show_1").value=tab.join("");

}
/* function obj(nam ,pre,ag){
    this.frist_name=nam;
    this.last_na=pre;
    this.age=ag;
}
var p=new obj("oussama","benrkia","18");
var z=new obj("yassi","jaber","19");
console.log(p.frist_name+p.last_na+p.age);
console.log(z.frist_name+z.last_na+z.age);
obj.prototype.ville="rabat";
z.ville="marrakech";
console.log(z);
console.log(p);
console.log(p.ville);
 */