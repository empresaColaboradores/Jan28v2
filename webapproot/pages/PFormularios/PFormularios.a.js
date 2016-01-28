dojo.declare("PFormularios", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

PFormularios.widgets = {
lvFormularios: ["wm.LiveVariable", {"type":"com.xedb.data.Formulario"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.xedb.data.Formulario","view":[
{"caption":"Codigo","sortable":true,"dataIndex":"codigo","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"descripcion","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Nemotecnia","sortable":true,"dataIndex":"nemotecnia","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}
]}, {}]
}],
formularioDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"238px","height":"238px","title":"formulario","width":"500px"}, {}, {
containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
formularioLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"168px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"formularioLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formularioDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
codigoEditor1: ["wm.Number", {"caption":"Codigo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"codigo","height":"26px","required":true,"width":"100%"}, {}],
descripcionEditor1: ["wm.LargeTextArea", {"caption":"Descripcion","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"descripcion","height":"80px","maxChars":510,"required":true,"width":"100%"}, {}],
nemotecniaEditor1: ["wm.Text", {"caption":"Nemotecnia","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"nemotecnia","height":"26px","maxChars":16,"required":true,"width":"100%"}, {}],
activoEditor1: ["wm.Text", {"caption":"Activo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"activo","height":"26px","maxChars":1,"required":true,"width":"100%"}, {}]
}]
}],
buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"33px","height":"33px"}, {}, {
formularioSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"formularioLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"formularioLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
formularioCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"formularioDialog.hide","onclick1":"formularioLiveForm1.cancelEdit"}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
formularioLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
formularioGridPanel: ["wm.FancyPanel", {"minDesktopHeight":220,"minHeight":220,"title":"Formulario"}, {}, {
formularioDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[
{"show":true,"field":"codigo","title":"Codigo","width":"101px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"descripcion","title":"Descripcion","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"nemotecnia","title":"Nemotecnia","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"activo","title":"Activo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Codigo: \" + ${codigo} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Descripcion: \" + ${descripcion}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nemotecnia: \" + ${nemotecnia}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Activo: \" + ${activo}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.xedb.data.Formulario","height":"100%","margin":"4","minDesktopHeight":60}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"lvFormularios","targetProperty":"dataSet"}, {}]
}]
}]
}],
formularioDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"224px","title":"Detalles"}, {}, {
formularioLiveForm2: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"192px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"lvFormularios"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formularioDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
codigoEditor2: ["wm.Number", {"caption":"Codigo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"codigo","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
descripcionEditor2: ["wm.LargeTextArea", {"caption":"Descripcion","captionAlign":"right","captionPosition":"left","captionSize":"140px","changeOnKey":true,"desktopHeight":"80px","emptyValue":"emptyString","formField":"descripcion","height":"80px","maxChars":510,"readonly":true,"required":true,"width":"90%"}, {}],
nemotecniaEditor2: ["wm.Text", {"caption":"Nemotecnia","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"nemotecnia","height":"26px","maxChars":16,"readonly":true,"required":true,"width":"90%"}, {}],
activoEditor2: ["wm.Text", {"caption":"Activo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"activo","height":"26px","maxChars":1,"readonly":true,"required":true,"width":"90%"}, {}],
formularioLiveForm2EditPanel: ["wm.EditPanel", {"borderColor":"#FBFBFB","desktopHeight":"32px","height":"32px","liveForm":"formularioLiveForm2","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"caption":"Guardar","height":"100%","margin":"4"}, {"onclick":"formularioLiveForm2EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formularioLiveForm2EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancelar","height":"100%","margin":"4"}, {"onclick":"formularioLiveForm2EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"Nuevo","height":"100%","margin":"4"}, {"onclick":"formularioLiveForm2EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Modificar","height":"100%","margin":"4"}, {"onclick":"formularioLiveForm2EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formularioLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Eliminar","height":"100%","margin":"4"}, {"onclick":"formularioLiveForm2EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"formularioLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
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

PFormularios.prototype._cssText = '';
PFormularios.prototype._htmlText = '';