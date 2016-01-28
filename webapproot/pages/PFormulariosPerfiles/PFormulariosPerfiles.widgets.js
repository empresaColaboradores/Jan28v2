PFormulariosPerfiles.widgets = {
	lvFormulariosPerfiles: ["wm.LiveVariable", {"type":"com.xedb.data.Formperf"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.xedb.data.Formperf","related":["formulario","perfil"],"view":[
{"caption":"IdFormperf","sortable":true,"dataIndex":"idFormperf","type":"java.lang.Long","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Activo","sortable":true,"dataIndex":"activo","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
	}],
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
	formperfDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"180px","height":"180px","title":"formperf","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			formperfLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"110px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"formperfLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"formperfDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				idFormperfEditor1: ["wm.Number", {"caption":"IdFormperf","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idFormperf","height":"26px","required":true,"width":"100%"}, {}],
				activoEditor1: ["wm.Text", {"caption":"Activo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"activo","height":"26px","maxChars":1,"required":true,"width":"100%"}, {}],
				formularioLookup1: ["wm.Lookup", {"caption":"Formulario","captionSize":"140px","dataType":"com.xedb.data.Formulario","displayField":"activo","formField":"formulario","required":true,"width":"100%"}, {}],
				perfilLookup1: ["wm.Lookup", {"caption":"Perfil","captionSize":"140px","dataType":"com.xedb.data.Perfil","displayField":"activo","formField":"perfil","required":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"33px","height":"33px"}, {}, {
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
			formperfLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
				formperfGridPanel: ["wm.FancyPanel", {"height":"313px","title":"Formperf"}, {}, {
					formperfDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[
{"show":true,"field":"idFormperf","title":"IdFormperf","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"formulario.codigo","title":"Codigo formulario","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"formulario.descripcion","title":"Descripcion formulario","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"formulario.nemotecnia","title":"Nemotecnia Formulario","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"formulario.activo","title":"Activo formulario","width":"93px","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"perfil.codigo","title":"Codigo perfil","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"perfil.descripcion","title":"Descripcion perfil","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"perfil.activo","title":"Activo perfil","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"activo","title":"Activo","width":"63px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"IdFormperf: \" + ${idFormperf} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Nemotecnia Formulario: \" + ${formulario.nemotecnia}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Descripcion perfil: \" + ${perfil.descripcion}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.xedb.data.Formperf","height":"284px","margin":"4","minDesktopHeight":60}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"source":"formperfLiveVariable1","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				fancyPanel1: ["wm.FancyPanel", {"height":"130px","title":"Formulario"}, {}, {
					dojoGrid1: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Activo: \" + ${activo} +\n\"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"activo","title":"Activo","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"codigo","title":"Codigo","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":false,"field":"descripcion","title":"Descripcion","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"nemotecnia","title":"Nemotecnia","width":"100%","displayType":"Text","align":"left","formatFunc":""}
],"dsType":"com.xedb.data.Formulario","height":"98px","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"formperfLiveVariable1.formulario","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				fancyPanel2: ["wm.FancyPanel", {"height":"130px","title":"Perfil"}, {}, {
					dojoGrid2: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Activo: \" + ${activo} +\n\"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"activo","title":"Activo","width":"85px","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"codigo","title":"Codigo","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":false,"field":"descripcion","title":"Descripcion","width":"100%","displayType":"Text","align":"left","formatFunc":""}
],"dsType":"com.xedb.data.Perfil","margin":"4","minDesktopHeight":60,"singleClickEdit":true}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"formperfLiveVariable1.perfil","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				formperfDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"166px","title":"Detalles"}, {}, {
					formperfLiveForm2: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"134px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"formperfLiveVariable1"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"formperfDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
						}],
						idFormperfEditor2: ["wm.Number", {"caption":"Id","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idFormperf","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
						formularioLookup2: ["wm.Lookup", {"caption":"Formulario","captionSize":"140px","dataType":"com.xedb.data.Formulario","displayField":"nemotecnia","formField":"formulario","readonly":true,"required":true,"width":"90%"}, {}],
						label1: ["wm.Label", {"padding":"4","showing":false}, {}],
						perfilLookup2: ["wm.Lookup", {"caption":"Perfil","captionSize":"140px","dataType":"com.xedb.data.Perfil","displayField":"descripcion","formField":"perfil","readonly":true,"required":true,"width":"90%"}, {}],
						activoEditor2: ["wm.Text", {"caption":"Activo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"activo","height":"26px","maxChars":1,"readonly":true,"required":true,"width":"90%"}, {}],
						formperfLiveForm2EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","liveForm":"formperfLiveForm2","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
							savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
								saveButton1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"caption":"Guardar","height":"100%","margin":"4"}, {"onclick":"formperfLiveForm2EditPanel.saveData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"formperfLiveForm2EditPanel.formInvalid","targetProperty":"disabled"}, {}]
									}]
								}],
								cancelButton1: ["wm.Button", {"caption":"Cancelar","height":"100%","margin":"4"}, {"onclick":"formperfLiveForm2EditPanel.cancelEdit"}]
							}],
							operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								newButton1: ["wm.Button", {"caption":"Nuevo","height":"100%","margin":"4"}, {"onclick":"formperfLiveForm2EditPanel.beginDataInsert"}],
								updateButton1: ["wm.Button", {"caption":"Modificar","height":"100%","margin":"4"}, {"onclick":"formperfLiveForm2EditPanel.beginDataUpdate"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"formperfLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
									}]
								}],
								deleteButton1: ["wm.Button", {"caption":"Eliminar","height":"100%","margin":"4"}, {"onclick":"formperfLiveForm2EditPanel.deleteData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"formperfLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
									}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}