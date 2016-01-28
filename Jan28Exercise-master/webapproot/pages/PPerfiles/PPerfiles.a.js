dojo.declare("PPerfiles", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

PPerfiles.widgets = {
lvPerfiles: ["wm.LiveVariable", {"type":"com.xedb.data.Perfil"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.xedb.data.Perfil","view":[
{"caption":"Codigo","sortable":true,"dataIndex":"codigo","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"descripcion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}]
}],
perfilDialog: ["wm.DesignableDialog", {"height":"212px","title":"perfil","width":"500px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
perfilLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"142px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"perfilLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"perfilDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
codigoEditor1: ["wm.Number", {"caption":"Codigo","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"codigo","height":"26px","required":true,"width":"100%"}, {}],
descripcionEditor1: ["wm.LargeTextArea", {"caption":"Descripcion","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"descripcion","height":"80px","maxChars":510,"width":"100%"}, {}],
activoEditor1: ["wm.Text", {"caption":"Activo","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"activo","height":"26px","maxChars":1,"required":true,"width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","height":"33px"}, {}, {
perfilSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"perfilLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"perfilLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
perfilCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"perfilDialog.hide","onclick1":"perfilLiveForm1.cancelEdit"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
perfilLivePanel1: ["wm.LivePanel", {"autoScroll":false,"borderColor":"#FBFBFB","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"perfilDialog","targetId":null,"targetProperty":"dialog"}, {}],
wire1: ["wm.Wire", {"source":"perfilLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire2: ["wm.Wire", {"source":"perfilDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire3: ["wm.Wire", {"source":"perfilSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
perfilDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"codigo","title":"Codigo","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"descripcion","title":"Descripcion","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"activo","title":"Activo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Codigo: \" + ${codigo} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Descripcion: \" + ${descripcion}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Activo: \" + ${activo}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.xedb.data.Perfil","height":"100%","margin":"4"}, {"onCellDblClick":"perfilLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"lvPerfiles","targetProperty":"dataSet"}, {}]
}]
}],
perfilGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
perfilNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"perfilLivePanel1.popupLivePanelInsert"}],
perfilUpdateButton: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"perfilLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"perfilDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
perfilDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"perfilLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"perfilDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
};

PPerfiles.prototype._cssText = '';
PPerfiles.prototype._htmlText = '';