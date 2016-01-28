PFormulariosPerfiles.widgets = {
	formperfLiveVariable1: ["wm.LiveVariable", {"type":"com.xedb.data.Formperf"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.xedb.data.Formperf","related":["formulario","perfil"],"view":[
{"caption":"IdFormperf","sortable":true,"dataIndex":"idFormperf","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"formulario.codigo","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"formulario.descripcion","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Nemotecnia","sortable":true,"dataIndex":"formulario.nemotecnia","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"formulario.activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},
{"caption":"Codigo","sortable":true,"dataIndex":"perfil.codigo","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"perfil.descripcion","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"perfil.activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}]
	}],
	formperfDialog: ["wm.DesignableDialog", {"height":"180px","title":"formperf","width":"500px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			formperfLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"110px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"formperfLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"formperfDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				idFormperfEditor1: ["wm.Number", {"caption":"IdFormperf","captionSize":"140px","changeOnKey":true,"emptyValue":"zero","formField":"idFormperf","height":"26px","required":true,"width":"100%"}, {}],
				activoEditor1: ["wm.Text", {"caption":"Activo","captionSize":"140px","changeOnKey":true,"emptyValue":"emptyString","formField":"activo","height":"26px","maxChars":1,"required":true,"width":"100%"}, {}],
				formularioLookup1: ["wm.Lookup", {"caption":"Formulario","captionSize":"140px","dataType":"com.xedb.data.Formulario","displayField":"activo","formField":"formulario","required":true,"width":"100%"}, {}],
				perfilLookup1: ["wm.Lookup", {"caption":"Perfil","captionSize":"140px","dataType":"com.xedb.data.Perfil","displayField":"activo","formField":"perfil","required":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","height":"33px"}, {}, {
			formperfSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"formperfLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"formperfLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			formperfCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"formperfDialog.hide","onclick1":"formperfLiveForm1.cancelEdit"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","styles":{"backgroundColor":"#ffffff"},"verticalAlign":"top"}, {}, {
		panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","styles":{},"verticalAlign":"top","width":"100%"}, {}, {
			formperfLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"formperfDialog","targetId":null,"targetProperty":"dialog"}, {}],
					wire1: ["wm.Wire", {"source":"formperfLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
					wire2: ["wm.Wire", {"source":"formperfDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
					wire3: ["wm.Wire", {"source":"formperfSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
				}],
				formperfDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idFormperf","title":"IdFormperf","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"activo","title":"Activo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"formulario.codigo","title":"Codigo","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"formulario.descripcion","title":"Descripcion","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"formulario.nemotecnia","title":"Nemotecnia","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"formulario.activo","title":"Activo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"perfil.codigo","title":"Codigo","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"perfil.descripcion","title":"Descripcion","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"perfil.activo","title":"Activo","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"IdFormperf: \" + ${idFormperf} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Activo: \" + ${activo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Codigo: \" + ${formulario.codigo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Descripcion: \" + ${formulario.descripcion}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nemotecnia: \" + ${formulario.nemotecnia}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Activo: \" + ${formulario.activo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Codigo: \" + ${perfil.codigo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Descripcion: \" + ${perfil.descripcion}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Activo: \" + ${perfil.activo}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.xedb.data.Formperf","height":"100%","margin":"4"}, {"onCellDblClick":"formperfLivePanel1.popupLivePanelEdit"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"formperfLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}],
				formperfGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
					formperfNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"formperfLivePanel1.popupLivePanelInsert"}],
					formperfUpdateButton: ["wm.Button", {"caption":"Modificar","margin":"4"}, {"onclick":"formperfLivePanel1.popupLivePanelEdit"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"source":"formperfDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
						}]
					}],
					formperfDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"formperfLiveForm1.deleteData"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"source":"formperfDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}