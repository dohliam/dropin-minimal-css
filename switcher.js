var frameworks = "base,boot-cerulean,boot-cosmo,boot-cyborg,boot-darkly,boot-flatly,boot-journal,boot-lumen,boot-paper,boot-readable,boot-sandstone,boot-slate,boot-spacelab,boot-superhero,boot-yeti,bullframe,bulma,cardinal,caramel,caiuss,flat-ui,html-starterkit,kathamo,kube,lotus,milligram,min,motherplate,mui,normalize,oh-my-css,papier,pavilion,picnic,pure,sanitize-10up,sanitize-zdroid,semantic-ui,siimple,simple,skeleton-framework,skeleton-plus,skeleton,tacit,thao,wing";

add_switcher();

function switch_css(css) {
  document.getElementsByTagName("link")[0].href = "https://dohliam.github.io/dropin-minimal-css/vendor/" + css + ".min.css";
}

function capitalize(s) {
  u = s.replace(/^(.)/, function(_, l){
    return l.toUpperCase();
  });
  return u;
}

function inline_switcher() {
  switcher = document.getElementById("switcher");
  frameworks_array = frameworks.split(",");
  select_open = '\n        <select name="switcher_dropdown" id="switcher_dropdown" accesskey="s" onchange="switch_css(this.value)">\n';
  dropdown = select_open;
  for (i = 0; i < frameworks_array.length; i++) {
    f = frameworks_array[i];
    framework_name = capitalize(f);
    option = '          <option value="' + f + '">' + framework_name + ' CSS</option>\n';
    dropdown = dropdown + option;
  }
  select_close = '        </select>\n      '
  dropdown = dropdown + select_close;
  switcher.innerHTML = dropdown;
}

function add_switcher() {
  stylesheet = document.getElementsByTagName("link")[0];
  if (stylesheet == undefined) {
    head = document.getElementsByTagName('head')[0];
    link = document.createElement('link');
    link.rel="stylesheet";
    link.type="text/css";
    link.href="https://dohliam.github.io/dropin-minimal-css/vendor/" + frameworks.split(",")[0] + ".min.css";
    head.appendChild(link);
  }

  var new_div = document.createElement("div");
  new_div.innerHTML = '      <div id="switcher">&nbsp;</div>\n      <script type="text/javascript">inline_switcher();</script>';
  document.body.insertBefore(new_div, document.body.firstChild);
  document.body.style.paddingLeft = "24px"

  inline_switcher();
}
