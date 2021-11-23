var frameworks = "a11yana,axist,bahunya,bamboo,bare,base,basic,bonsai,bullframe,bulma,caiuss,caramel,cardinal,centurion,chota,cirrus,clmaterial,codify,comet,concise,concrete,cutestrap,flat-ui,fluidity,furtive,generic,github-markdown,gutenberg,hack,hello,hiq,holiday,html-starterkit,hyp,kathamo,koochak,kraken,kube,latex,lemon,lit,lotus,markdown,marx,material,materialize,mercury,milligram,min,mini,minimal,minimal-stylesheet,mobi,motherplate,mu,mui,mvp,neat,new,no-class,normalize,oh-my-css,ok,pandoc-scholar,paper,papier,pavilion,picnic,pico,preface,primer,propeller,pure,roble,sakura,sanitize,scooter,semantic-ui,shoelace,siimple,simple,skeleton,skeleton-framework,skeleton-plus,snack,spcss,spectre,style,stylize,tachyons,tacit,tent,thao,tui,vanilla,vital,water,wing,writ,yamb,yorha,ads-gazette,ads-medium,ads-notebook,ads-tufte,attri-bright-light-green,attri-midnight-green,attri-dark-forest-green,attri-dark-fairy-pink,attri-light-fairy-pink,awsm-default,awsm-black,awsm-bigstone,awsm-gondola,awsm-mischka,awsm-pastelpink,awsm-pearllusta,awsm-tasman,awsm-white,boot-cerulean,boot-cosmo,boot-cyborg,boot-darkly,boot-flatly,boot-journal,boot-lumen,boot-paper,boot-readable,boot-sandstone,boot-slate,boot-spacelab,boot-superhero,boot-yeti,md-air,md-modest,md-retro,md-splendor,w3c-chocolate,w3c-midnight,w3c-modernist,w3c-oldstyle,w3c-steely,w3c-swiss,w3c-traditional,w3c-ultramarine";

add_switcher();

function switch_css(css) {
  css_link.href = "https://dohliam.github.io/dropin-minimal-css/min/" + css + ".min.css";
}

function capitalize(s) {
  u = s.replace(/^(.)/, function(_, l){
    return l.toUpperCase();
  });
  return u;
}

function on_css_load() {
  var bgColor = getComputedStyle(document.body).backgroundColor;
  if (bgColor.match(/^rgba\(.*\)/) ) bgColor = 'white';
  switcher.style.backgroundColor = bgColor;
}

waittime = 1500
play = false

async function autoplay() {
    play = !play
    if (play) {
        document.getElementById("autoplay").innerText='Stop';
    } else {
        document.getElementById("autoplay").innerText='Play';
    }
    currentselection=document.getElementById("switcher_dropdown").selectedIndex;
    for (currentselection;currentselection<switcher_dropdown.length;currentselection++){
        if (play) {
            switch_css(switcher_dropdown[currentselection].value);
            switcher_dropdown.value=switcher_dropdown[currentselection].value;
            await sleep(waittime);
        } else {
            break;
        }
    }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function faster(){
    if (waittime > 1000){
        waittime -= 500;
    }
}
function slower(){
    waittime += 500;
}


function inline_switcher() {
  switcher = document.getElementById("switcher");
  frameworks_array = frameworks.split(",");
  select_open = '\n        <select name="switcher_dropdown" style="display: inline;width: 50%;" id="switcher_dropdown" accesskey="s" onchange="switch_css(this.value)">\n';
  dropdown = select_open;
  for (i = 0; i < frameworks_array.length; i++) {
    f = frameworks_array[i];
    framework_name = capitalize(f);
    option = '          <option value="' + f + '">' + framework_name + ' CSS</option>\n';
    dropdown = dropdown + option;
  }
  select_close = '        </select>\n <div style="display: inline;width: 50%;"> <button style="display: inline;padding: 5px;" onclick=slower()>-</button><button style="display: inline;padding: 5px;" id="autoplay" onclick=autoplay()>Play</button><button style="display: inline;padding: 5px;" onclick=faster()>+</button></div>'
  dropdown = dropdown + select_close;
  switcher.innerHTML = dropdown;
}

function add_switcher() {
  css_link = document.getElementsByTagName("link")[0];
  if (css_link == undefined) {
    head = document.getElementsByTagName('head')[0];
    css_link = document.createElement('link');
    css_link.rel="stylesheet";
    css_link.type="text/css";
    css_link.href="https://dohliam.github.io/dropin-minimal-css/min/" + frameworks.split(",")[0] + ".min.css";
    head.appendChild(css_link);
  }

  var new_div = document.createElement('div');
  new_div.style.top="0px"
  new_div.style.right="0px"
  new_div.style.position="absolute"
  new_div.style.display="float"
  new_div.style.top="0px"
  new_div.id = 'switcher';
  new_div.innerHTML = '      <div>&nbsp;</div>\n      <script type="text/javascript">inline_switcher();</script>';
  document.body.prepend(new_div);
  document.body.style.paddingLeft = "24px";

  inline_switcher();

  css_link.onload = on_css_load;
}