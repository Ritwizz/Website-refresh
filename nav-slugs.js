/* Clean slugs are the real URLs on the live site. When a page is opened as a
   file (editor preview, local disk), route those slug links to the sibling
   .dc.html instead so navigation still works. */
(function(){
  var MAP={'/':'Home.dc.html','/about':'About.dc.html','/off-hours':'OffHours.dc.html',
    '/aakaar':'Aakaar.dc.html','/ergoplay':'Ergoplay.dc.html','/vita':'Vita.dc.html',
    '/altr':'Altr.dc.html','/art-of-concealing':'ArtOfConcealing.dc.html','/snapin':'Snapin.dc.html'};
  var here=location.pathname.split('/').pop()||'';
  if(!/\.dc\.html$/.test(here))return;
  var dir=location.pathname.slice(0,location.pathname.length-here.length);
  document.addEventListener('click',function(e){
    if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
    var a=e.target&&e.target.closest?e.target.closest('a[href]'):null;
    if(!a)return;
    var f=MAP[a.getAttribute('href')];
    if(!f)return;
    e.preventDefault();
    location.href=dir+f;
  },true);
})();
