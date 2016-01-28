dojo.declare("PPerfilesUsuarios", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

PPerfilesUsuarios.widgets = {
perfusuaLiveVariable1: ["wm.LiveVariable", {"type":"com.xedb.data.Perfusua"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.xedb.data.Perfusua","related":["perfil"],"view":[
{"caption":"IdPerfusua","sortable":true,"dataIndex":"idPerfusua","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"CodigoUsuario","sortable":true,"dataIndex":"codigoUsuario","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"perfil.codigo","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"perfil.descripcion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"perfil.activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}]
}],
perfusuaDialog: ["wm.DesignableDialog", {"height":"182px","title":"perfusua","width":"500px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
perfusuaLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"112px","horizontalAlign":"left","liveEditing":false,"margin":"4","styles":{},"verticalAlign":"top"}, {"onSuccess":"perfusuaLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"perfusuaDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idPerfusuaEditor1: ["wm.Number", {"caption":"IdPerfusua","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idPerfusua","height":"26px","required":true,"width":"100%"}, {}],
codigoUsuarioEditor1: ["wm.Text", {"caption":"CodigoUsuario","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"codigoUsuario","height":"26px","maxChars":15,"required":true,"width":"100%"}, {}],
activoEditor1: ["wm.Text", {"caption":"Activo","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"activo","height":"26px","maxChars":1,"required":true,"width":"100%"}, {}],
perfilLookup1: ["wm.Lookup", {"caption":"Perfil","captionSize":"140px","dataType":"com.xedb.data.Perfil","displayField":"activo","formField":"perfil","required":true,"width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","height":"33px"}, {}, {
perfusuaSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"perfusuaLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"perfusuaLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
perfusuaCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"perfusuaDialog.hide","onclick1":"perfusuaLiveForm1.cancelEdit"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
perfusuaLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"perfusuaDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"perfusuaLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"perfusuaDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"perfusuaSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
perfusuaDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idPerfusua","title":"IdPerfusua","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"codigoUsuario","title":"CodigoUsuario","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"activo","title":"Activo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"perfil.codigo","title":"Codigo","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"perfil.descripcion","title":"Descripcion","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"perfil.activo","title":"Activo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"IdPerfusua: \" + ${idPerfusua} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"CodigoUsuario: \" + ${codigoUsuario}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Activo: \" + ${activo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Codigo: \" + ${perfil.codigo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Descripcion: \" + ${perfil.descripcion}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Activo: \" + ${perfil.activo}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.xedb.data.Perfusua","height":"100%","margin":"4"}, {"onCellDblClick":"perfusuaLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"perfusuaLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
perfusuaGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
perfusuaNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"perfusuaLivePanel1.popupLivePanelInsert"}],
perfusuaUpdateButton: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"perfusuaLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"perfusuaDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
perfusuaDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"perfusuaLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"perfusuaDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
};

PPerfilesUsuarios.prototype._cssText = '';
PPerfilesUsuarios.prototype._htmlText = '';