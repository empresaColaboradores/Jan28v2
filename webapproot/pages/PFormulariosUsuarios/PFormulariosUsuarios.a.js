dojo.declare("PFormulariosUsuarios", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

PFormulariosUsuarios.widgets = {
lvFormulariosUsuarios: ["wm.LiveVariable", {"type":"com.xedb.data.Formusua"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.xedb.data.Formusua","related":["formulario","usuarios"],"view":[
{"caption":"IdFormusua","sortable":true,"dataIndex":"idFormusua","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"formulario.codigo","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"formulario.descripcion","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Nemotecnia","sortable":true,"dataIndex":"formulario.nemotecnia","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"formulario.activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Usuario","sortable":true,"dataIndex":"usuarios.usuario","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"usuarios.nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Estado","sortable":true,"dataIndex":"usuarios.estado","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}]
}],
formusuaDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"182px","height":"182px","title":"formusua","width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
formusuaLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"112px","horizontalAlign":"left","liveEditing":false,"margin":"4","styles":{},"verticalAlign":"top"}, {"onSuccess":"formusuaLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formusuaDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idFormusuaEditor1: ["wm.Number", {"caption":"IdFormusua","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idFormusua","height":"26px","required":true,"width":"100%"}, {}],
codigoUsuarioEditor1: ["wm.Text", {"caption":"CodigoUsuario","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"codigoUsuario","height":"26px","maxChars":15,"required":true,"width":"100%"}, {}],
activoEditor1: ["wm.Text", {"caption":"Activo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"activo","height":"26px","maxChars":1,"required":true,"width":"100%"}, {}],
formularioLookup1: ["wm.Lookup", {"caption":"Formulario","captionSize":"140px","dataType":"com.xedb.data.Formulario","displayField":"activo","formField":"formulario","required":true,"width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"33px","height":"33px"}, {}, {
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
formusuaLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
formusuaGridPanel: ["wm.FancyPanel", {"height":"315px","minDesktopHeight":220,"title":"Formusua"}, {}, {
formusuaDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[
{"show":true,"field":"idFormusua","title":"IdFormusua","width":"171px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"formulario.codigo","title":"Codigo Formulario","width":"282px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"formulario.descripcion","title":"Descripcion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"formulario.nemotecnia","title":"Nemotecnia","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"formulario.activo","title":"Activo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"usuarios.usuario","title":"Usuario","width":"264px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"usuarios.nombre","title":"Nombre","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"usuarios.estado","title":"Estado","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"activo","title":"Activo","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"IdFormusua: \" + ${idFormusua} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Codigo Formulario: \" + ${formulario.codigo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Usuario: \" + ${usuarios.usuario}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Activo: \" + ${activo}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.xedb.data.Formusua","height":"290px","margin":"4","minDesktopHeight":60,"width":"970px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lvFormulariosUsuarios","targetProperty":"dataSet"}, {}]
}]
}]
}],
fancyPanel1: ["wm.FancyPanel", {"height":"132px","title":"Usuario"}, {}, {
dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Usuario: \" + ${usuario} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nombre: \" + ${nombre}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Estado: \" + ${estado}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"usuario","title":"Usuario","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"nombre","title":"Nombre","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"estado","title":"Estado","width":"100%","displayType":"Text","align":"left","formatFunc":""}
],"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formusuaDojoGrid.selectedItem.usuarios","targetProperty":"dataSet"}, {}]
}]
}]
}],
fancyPanel2: ["wm.FancyPanel", {"height":"125px","title":"Formulario"}, {}, {
dojoGrid2: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Codigo: \" + ${codigo} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Descripcion: \" + ${descripcion}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Activo: \" + ${activo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nemotecnia: \" + ${nemotecnia}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"codigo","title":"Codigo","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"descripcion","title":"Descripcion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"activo","title":"Activo","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"nemotecnia","title":"Nemotecnia","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formusuaDojoGrid.selectedItem.formulario","targetProperty":"dataSet"}, {}]
}]
}]
}],
formusuaDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"166px","title":"Detalles"}, {}, {
formusuaLiveForm2: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"134px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"lvFormulariosUsuarios"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formusuaDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idFormusuaEditor2: ["wm.Number", {"caption":"IdFormusua","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idFormusua","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
formularioLookup2: ["wm.Lookup", {"caption":"Formulario","captionSize":"140px","dataType":"com.xedb.data.Formulario","displayField":"nemotecnia","formField":"formulario","readonly":true,"required":true,"width":"90%"}, {}],
usuariosLookup1: ["wm.Lookup", {"caption":"Usuarios","captionSize":"140px","dataType":"com.xedb.data.Usuarios","displayField":"nombre","formField":"usuarios","readonly":true,"required":true,"width":"90%"}, {}],
activoEditor2: ["wm.Text", {"caption":"Activo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"activo","height":"26px","maxChars":1,"readonly":true,"required":true,"width":"90%"}, {}],
formusuaLiveForm2EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"formusuaLiveForm2","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"caption":"Guardar","height":"100%","margin":"4"}, {"onclick":"formusuaLiveForm2EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formusuaLiveForm2EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancelar","height":"100%","margin":"4"}, {"onclick":"formusuaLiveForm2EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"Nuevo","height":"100%","margin":"4"}, {"onclick":"formusuaLiveForm2EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Modificar","height":"100%","margin":"4"}, {"onclick":"formusuaLiveForm2EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formusuaLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Eliminar","height":"100%","margin":"4"}, {"onclick":"formusuaLiveForm2EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formusuaLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
}]
};

PFormulariosUsuarios.prototype._cssText = '';
PFormulariosUsuarios.prototype._htmlText = '';