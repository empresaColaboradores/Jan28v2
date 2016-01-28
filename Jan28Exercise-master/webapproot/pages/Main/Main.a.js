dojo.declare("Main", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

Main.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"48px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
label1: ["wm.Label", {"align":"center","caption":"CRUD APP","padding":"4","styles":{"fontWeight":"bold"},"width":"82px"}, {}],
dgNavBar: ["wm.DojoMenu", {"fullStructure":[
{"label":"Usuarios","separator":undefined,"defaultLabel":"Usuarios","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"lyUsuarios","children":[]},
{"label":"Formularios","separator":undefined,"defaultLabel":"Formularios","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"lyFormularios","children":[]},
{"label":"Perfiles","separator":undefined,"defaultLabel":"Perfiles","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"lyPerfiles","children":[]},
{"label":"Perfiles de Usuario","separator":undefined,"defaultLabel":"Perfiles de Usuario","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"lyPerfilesUsuarios","children":[]},
{"label":"Formularios de Perfiles","separator":undefined,"defaultLabel":"Formularios de Perfiles","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"lyFormulariosPerfiles","children":[]},
{"label":"Excepciones","separator":undefined,"defaultLabel":"Excepciones","iconClass":undefined,"imageList":undefined,"idInPage":undefined,"isCheckbox":false,"onClick":"lyFormulariosUsuarios","children":[]}
],"localizationStructure":{},"styles":{}}, {}]
}],
panel2: ["wm.Panel", {"height":"85%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
lyMain: ["wm.Layers", {"styles":{}}, {}, {
lyUsuarios: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","styles":{},"themeStyleType":"","verticalAlign":"top"}, {}, {
pcUsuarios: ["wm.PageContainer", {"deferLoad":true,"pageName":"PUsuarios","styles":{},"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
lyPerfiles: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pcPerfiles: ["wm.PageContainer", {"deferLoad":true,"pageName":"PPerfiles","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
lyPerfilesUsuarios: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pcPerfilesUsuarios: ["wm.PageContainer", {"deferLoad":true,"pageName":"PPerfilesUsuarios","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
lyFormularios: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pcFormularios: ["wm.PageContainer", {"deferLoad":true,"pageName":"PFormularios","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
lyFormulariosPerfiles: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pcFormulariosPerfiles: ["wm.PageContainer", {"deferLoad":true,"pageName":"PFormulariosPerfiles","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
lyFormulariosUsuarios: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pcFormulariosUsuarios: ["wm.PageContainer", {"deferLoad":true,"pageName":"PFormulariosUsuarios","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';