let elModeBtn = document.getElementById('modeBtn');
let elVersionBox = document.getElementById('versionBox');
let elLightBtn = document.getElementById('lightBtn');
let elDarkBtn = document.getElementById('darkBtn');
let elBtnIcon = document.getElementById('btnIcon');

elModeBtn.addEventListener('click', function(){
  elVersionBox.classList.toggle('show');
  elBtnIcon.classList.toggle('rotate');
})
elDarkBtn.addEventListener('click', function(){
  document.body.classList.add('dark');
})
elLightBtn.addEventListener('click', function(){
  document.body.classList.remove('dark');
})