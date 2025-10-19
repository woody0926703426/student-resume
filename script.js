const phrases = [
'นักพัฒนาเว็บที่ชอบทำของสวยๆ',
'ชอบเรียนรู้เทคโนโลยีใหม่ๆ',
'เปิดรับงานฟรีแลนซ์และโปรเจคร่วมมือ'
];
let i=0,j=0,forward=true;
const el=document.getElementById('typed');
function loop(){
const word=phrases[i];
if(forward){el.textContent=word.slice(0,++j);if(j===word.length){forward=false;setTimeout(loop,1000);return}}
else{el.textContent=word.slice(0,--j);if(j===0){forward=true;i=(i+1)%phrases.length}}
setTimeout(loop,forward?80:40);
}
setTimeout(loop,500);


document.getElementById('today').textContent=new Date().toLocaleDateString('th-TH',{year:'numeric',month:'short',day:'numeric'});


function copyIntro(){
const name=document.getElementById('name').textContent.trim();
const intro=`สวัสดีครับ ผม${name} — ${el.textContent}. ติดต่อ: youremail@example.com`;
navigator.clipboard?.writeText(intro).then(()=>alert('คัดลอกแนะนำตัวเรียบร้อย!'));
}
function downloadCard(){
const name=document.getElementById('name').textContent.trim();
const vcard=`BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nEMAIL:youremail@example.com\nEND:VCARD`;
const blob=new Blob([vcard],{type:'text/vcard'});
const url=URL.createObjectURL(blob);
const a=document.createElement('a');a.href=url;a.download=`${name.replace(/\s+/g,'_')}.vcf`;a.click();URL.revokeObjectURL(url);
}
let light=false;
function toggleTheme(){
light=!light;
document.documentElement.style.setProperty('--bg',light?'#f6f8fb':'#0f1724');
document.documentElement.style.setProperty('--card',light?'#ffffff':'#0b1220');
document.documentElement.style.setProperty('--muted',light?'#5b6b79':'#9aa4b2');
document.body.style.color=light?'#06202b':'#e6eef8';
}