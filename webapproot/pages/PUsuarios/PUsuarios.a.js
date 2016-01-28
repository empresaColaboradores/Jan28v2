dojo.declare("PUsuarios", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

PUsuarios.widgets = {
lvUsuarios: ["wm.LiveVariable", {"type":"com.xedb.data.Usuarios"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.xedb.data.Usuarios","view":[
{"caption":"Usuario","sortable":true,"dataIndex":"usuario","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Estado","sortable":true,"dataIndex":"estado","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}]
}],
usuariosDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"158px","height":"158px","title":"usuarios","width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
usuariosLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"88px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"usuariosLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usuariosDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
usuarioEditor1: ["wm.Text", {"caption":"Usuario","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"usuario","height":"26px","maxChars":15,"required":true,"width":"100%"}, {}],
nombreEditor1: ["wm.Text", {"caption":"Nombre","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"nombre","height":"26px","maxChars":50,"required":true,"width":"100%"}, {}],
estadoEditor1: ["wm.Text", {"caption":"Estado","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"estado","height":"26px","maxChars":1,"required":true,"width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"33px","height":"33px"}, {}, {
usuariosSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"usuariosLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"usuariosLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
usuariosCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"usuariosDialog.hide","onclick1":"usuariosLiveForm1.cancelEdit"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
usuariosLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
usuariosGridPanel: ["wm.FancyPanel", {"minDesktopHeight":220,"minHeight":220,"title":"Usuarios"}, {}, {
usuariosDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[
{"show":true,"field":"usuario","title":"Usuario","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"nombre","title":"Nombre","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"estado","title":"Estado","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Usuario: \" + ${usuario} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nombre: \" + ${nombre}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Estado: \" + ${estado}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.xedb.data.Usuarios","height":"100%","margin":"4","minDesktopHeight":60}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lvUsuarios","targetProperty":"dataSet"}, {}]
}]
}]
}],
usuariosDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"144px","title":"Detalles"}, {}, {
usuariosLiveForm2: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"112px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"lvUsuarios"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usuariosDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
usuarioEditor2: ["wm.Text", {"caption":"Usuario","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"usuario","height":"26px","maxChars":15,"readonly":true,"required":true,"width":"90%"}, {}],
nombreEditor2: ["wm.Text", {"caption":"Nombre","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"nombre","height":"26px","maxChars":50,"readonly":true,"required":true,"width":"90%"}, {}],
estadoEditor2: ["wm.Text", {"caption":"Estado","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"estado","height":"26px","maxChars":1,"readonly":true,"required":true,"width":"90%"}, {}],
usuariosLiveForm2EditPanel: ["wm.EditPanel", {"borderColor":"#FBFBFB","desktopHeight":"32px","height":"32px","liveForm":"usuariosLiveForm2","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"caption":"Guardar","height":"100%","margin":"4"}, {"onclick":"usuariosLiveForm2EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usuariosLiveForm2EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancelar","height":"100%","margin":"4"}, {"onclick":"usuariosLiveForm2EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"Nuevo","height":"100%","margin":"4"}, {"onclick":"usuariosLiveForm2EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Modificar","height":"100%","margin":"4"}, {"onclick":"usuariosLiveForm2EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usuariosLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Eliminar","height":"100%","margin":"4"}, {"onclick":"usuariosLiveForm2EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"usuariosLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
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

PUsuarios.prototype._cssText = '';
PUsuarios.prototype._htmlText = '';