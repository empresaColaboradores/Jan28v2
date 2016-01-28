dojo.declare("PFormulariosUsuarios", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

PFormulariosUsuarios.widgets = {
formusuaLiveVariable1: ["wm.LiveVariable", {"type":"com.xedb.data.Formusua"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.xedb.data.Formusua","related":["formulario"],"view":[
{"caption":"IdFormusua","sortable":true,"dataIndex":"idFormusua","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"CodigoUsuario","sortable":true,"dataIndex":"codigoUsuario","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"formulario.codigo","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"formulario.descripcion","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Nemotecnia","sortable":true,"dataIndex":"formulario.nemotecnia","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"formulario.activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}
]}, {}]
}],
formusuaDialog: ["wm.DesignableDialog", {"height":"182px","title":"formusua","width":"500px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
formusuaLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"112px","horizontalAlign":"left","liveEditing":false,"margin":"4","styles":{},"verticalAlign":"top"}, {"onSuccess":"formusuaLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formusuaDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idFormusuaEditor1: ["wm.Number", {"caption":"IdFormusua","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idFormusua","height":"26px","required":true,"width":"100%"}, {}],
codigoUsuarioEditor1: ["wm.Text", {"caption":"CodigoUsuario","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"codigoUsuario","height":"26px","maxChars":15,"required":true,"width":"100%"}, {}],
activoEditor1: ["wm.Text", {"caption":"Activo","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"activo","height":"26px","maxChars":1,"required":true,"width":"100%"}, {}],
formularioLookup1: ["wm.Lookup", {"caption":"Formulario","captionSize":"140px","dataType":"com.xedb.data.Formulario","displayField":"activo","formField":"formulario","required":true,"width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","height":"33px"}, {}, {
formusuaSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"formusuaLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"formusuaLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
formusuaCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"formusuaDialog.hide","onclick1":"formusuaLiveForm1.cancelEdit"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
formusuaLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"formusuaDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"formusuaLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"formusuaDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"formusuaSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
formusuaDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idFormusua","title":"IdFormusua","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"codigoUsuario","title":"CodigoUsuario","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"activo","title":"Activo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"formulario.codigo","title":"Codigo","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"formulario.descripcion","title":"Descripcion","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"formulario.nemotecnia","title":"Nemotecnia","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"formulario.activo","title":"Activo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"IdFormusua: \" + ${idFormusua} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"CodigoUsuario: \" + ${codigoUsuario}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Activo: \" + ${activo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Codigo: \" + ${formulario.codigo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Descripcion: \" + ${formulario.descripcion}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nemotecnia: \" + ${formulario.nemotecnia}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Activo: \" + ${formulario.activo}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.xedb.data.Formusua","height":"100%","margin":"4"}, {"onCellDblClick":"formusuaLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formusuaLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
formusuaGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
formusuaNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"formusuaLivePanel1.popupLivePanelInsert"}],
formusuaUpdateButton: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"formusuaLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"formusuaDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
formusuaDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"formusuaLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"formusuaDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
};

PFormulariosUsuarios.prototype._cssText = '';
PFormulariosUsuarios.prototype._htmlText = '';