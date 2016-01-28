dojo.declare("Page", wm.Page, {
start: function() {
},
"preferredDevice": "desktop",
_end: 0
});

Page.widgets = {
formperfLiveVariable1: ["wm.LiveVariable", {"type":"com.xedb.data.Formperf"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.xedb.data.Formperf","view":[
{"caption":"IdFormperf","sortable":true,"dataIndex":"idFormperf","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
perfusuaLiveVariable1: ["wm.LiveVariable", {"type":"com.xedb.data.Perfusua"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.xedb.data.Perfusua","related":["perfil","usuarios"],"view":[
{"caption":"IdPerfusua","sortable":true,"dataIndex":"idPerfusua","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"perfil.codigo","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"perfil.descripcion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"perfil.activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Usuario","sortable":true,"dataIndex":"usuarios.usuario","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"usuarios.nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Estado","sortable":true,"dataIndex":"usuarios.estado","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}]
}],
perfusuaLiveVariable2: ["wm.LiveVariable", {"type":"com.xedb.data.Perfusua"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.xedb.data.Perfusua","related":["perfil","usuarios"],"view":[
{"caption":"IdPerfusua","sortable":true,"dataIndex":"idPerfusua","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"perfil.codigo","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"perfil.descripcion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"perfil.activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Usuario","sortable":true,"dataIndex":"usuarios.usuario","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"usuarios.nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Estado","sortable":true,"dataIndex":"usuarios.estado","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}]
}],
perfilLiveVariable1: ["wm.LiveVariable", {"type":"com.xedb.data.Perfil"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.xedb.data.Perfil","view":[
{"caption":"Codigo","sortable":true,"dataIndex":"codigo","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"descripcion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}]
}],
usuariosLiveVariable1: ["wm.LiveVariable", {"type":"com.xedb.data.Usuarios"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.xedb.data.Usuarios","view":[
{"caption":"Usuario","sortable":true,"dataIndex":"usuario","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Estado","sortable":true,"dataIndex":"estado","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}]
}],
perfusuaLiveVariable3: ["wm.LiveVariable", {"type":"com.xedb.data.Perfusua"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.xedb.data.Perfusua","related":["perfil","usuarios"],"view":[
{"caption":"IdPerfusua","sortable":true,"dataIndex":"idPerfusua","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"perfil.codigo","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"perfil.descripcion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"perfil.activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Usuario","sortable":true,"dataIndex":"usuarios.usuario","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"usuarios.nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Estado","sortable":true,"dataIndex":"usuarios.estado","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
perfusuaLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Perfusua_List","targetId":null,"targetProperty":"gridLayer"}, {}],
wire1: ["wm.Wire", {"source":"Edit_Perfusua","targetId":null,"targetProperty":"detailsLayer"}, {}],
wire2: ["wm.Wire", {"source":"perfusuaLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire3: ["wm.Wire", {"source":"perfusuaDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire4: ["wm.Wire", {"source":"perfusuaSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
perfusuaLayers: ["wm.BreadcrumbLayers", {}, {}, {
Perfusua_List: ["wm.Layer", {"borderColor":"","caption":"Perfusua List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"perfusuaDojoGrid.deselectAll"}, {
perfusuaDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idPerfusua","title":"IdPerfusua","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"activo","title":"Activo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"perfil.codigo","title":"Codigo","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"perfil.descripcion","title":"Descripcion","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"perfil.activo","title":"Activo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"usuarios.usuario","title":"Usuario","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"usuarios.nombre","title":"Nombre","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"usuarios.estado","title":"Estado","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"IdPerfusua: \" + ${idPerfusua} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Activo: \" + ${activo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Codigo: \" + ${perfil.codigo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Descripcion: \" + ${perfil.descripcion}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Activo: \" + ${perfil.activo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Usuario: \" + ${usuarios.usuario}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nombre: \" + ${usuarios.nombre}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Estado: \" + ${usuarios.estado}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.xedb.data.Perfusua","height":"100%","margin":"4"}, {"onSelect":"perfusuaLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"perfusuaLiveVariable3","targetProperty":"dataSet"}, {}]
}]
}],
perfusuaGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
perfusuaNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"perfusuaLivePanel1.popupLivePanelInsert"}]
}]
}],
Edit_Perfusua: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Perfusua","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
perfusuaLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"height":"100%","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"perfusuaLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"perfusuaDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idPerfusuaEditor1: ["wm.Number", {"caption":"IdPerfusua","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idPerfusua","height":"26px","required":true,"width":"100%"}, {}],
activoEditor1: ["wm.Text", {"caption":"Activo","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"activo","height":"26px","maxChars":1,"required":true,"width":"100%"}, {}],
perfilLookup1: ["wm.Lookup", {"caption":"Perfil","captionSize":"140px","dataType":"com.xedb.data.Perfil","displayField":"activo","formField":"perfil","required":true,"width":"100%"}, {}],
usuariosLookup1: ["wm.Lookup", {"caption":"Usuarios","captionSize":"140px","dataType":"com.xedb.data.Usuarios","displayField":"usuario","formField":"usuarios","required":true,"width":"100%"}, {}]
}],
perfusuaFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
perfusuaSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"perfusuaLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${perfusuaLiveForm1.invalid} || !${perfusuaLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
perfusuaCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"Perfusua_List"}],
perfusuaDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"perfusuaLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"perfusuaDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
};

Page.prototype._cssText = '';
Page.prototype._htmlText = '';