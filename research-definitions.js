/* Tab switcher called by onclick="switchTab('published',this)".
   Paste before </body>, or load with <script src="research-definitions.js"></script> */
function switchTab(name, el){
  document.querySelectorAll('.pub-sec').forEach(function(s){ s.classList.remove('active'); });
  document.querySelectorAll('.pub-tab').forEach(function(t){ t.classList.remove('active'); });

  var panel = document.getElementById('tab-' + name);
  if (panel) panel.classList.add('active');
  if (el) el.classList.add('active');
}
