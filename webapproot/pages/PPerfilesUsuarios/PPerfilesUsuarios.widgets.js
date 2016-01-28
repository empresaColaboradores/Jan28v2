PPerfilesUsuarios.widgets = {
	lvPerfilUsuarios: ["wm.LiveVariable", {"type":"com.xedb.data.Perfusua"}, {}, {
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
	perfusuaDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","desktopHeight":"182px","height":"182px","title":"perfusua","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			perfusuaLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"112px","horizontalAlign":"left","liveEditing":false,"margin":"4","styles":{},"verticalAlign":"top"}, {"onSuccess":"perfusuaLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"perfusuaDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				idPerfusuaEditor1: ["wm.Number", {"caption":"IdPerfusua","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idPerfusua","height":"26px","required":true,"width":"100%"}, {}],
				codigoUsuarioEditor1: ["wm.Text", {"caption":"CodigoUsuario","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"codigoUsuario","height":"26px","maxChars":15,"required":true,"width":"100%"}, {}],
				activoEditor1: ["wm.Text", {"caption":"Activo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"activo","height":"26px","maxChars":1,"required":true,"width":"100%"}, {}],
				perfilLookup1: ["wm.Lookup", {"caption":"Perfil","captionSize":"140px","dataType":"com.xedb.data.Perfil","displayField":"activo","formField":"perfil","required":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.ButtonBarPanel", {"border":"1,0,0,0","borderColor":"#333333","desktopHeight":"33px","height":"33px"}, {}, {
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
			perfusuaLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
				perfusuaGridPanel: ["wm.FancyPanel", {"minDesktopHeight":220,"minHeight":220,"title":"Perfusua"}, {}, {
					perfusuaDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[
{"show":true,"field":"idPerfusua","title":"IdPerfusua","width":"128px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"perfil.codigo","title":"Codigo Perfil","width":"80px","align":"right","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"perfil.descripcion","title":"Descripcion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"perfil.activo","title":"Activo","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"usuarios.usuario","title":"Usuario","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"usuarios.nombre","title":"Nombre","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"usuarios.estado","title":"Estado","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"activo","title":"Activo","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"IdPerfusua: \" + ${idPerfusua} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Codigo Perfil: \" + ${perfil.codigo}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Usuario: \" + ${usuarios.usuario}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Activo: \" + ${activo}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.xedb.data.Perfusua","height":"100%","margin":"4","minDesktopHeight":60}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"source":"lvPerfilUsuarios","targetProperty":"dataSet"}, {}]
						}]
					}]
				}],
				perfusuaDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"166px","title":"Detalles"}, {}, {
					perfusuaLiveForm2: ["wm.LiveForm", {"editorWidth":"90%","fitToContentHeight":true,"height":"134px","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onSuccess":"lvPerfilUsuarios"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"perfusuaDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
						}],
						idPerfusuaEditor2: ["wm.Number", {"caption":"IdPerfusua","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idPerfusua","height":"26px","readonly":true,"required":true,"width":"90%"}, {}],
						activoEditor2: ["wm.Text", {"caption":"Activo","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"activo","height":"26px","maxChars":1,"readonly":true,"required":true,"width":"90%"}, {}],
						perfilLookup2: ["wm.Lookup", {"caption":"Perfil","captionSize":"140px","dataType":"com.xedb.data.Perfil","displayField":"activo","formField":"perfil","readonly":true,"required":true,"width":"90%"}, {}],
						usuariosLookup1: ["wm.Lookup", {"caption":"Usuarios","captionSize":"140px","dataType":"com.xedb.data.Usuarios","displayField":"usuario","formField":"usuarios","readonly":true,"required":true,"width":"90%"}, {}],
						perfusuaLiveForm2EditPanel: ["wm.EditPanel", {"borderColor":"#FBFBFB","desktopHeight":"32px","height":"32px","liveForm":"perfusuaLiveForm2","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
							savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
								saveButton1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"caption":"Guardar","height":"100%","margin":"4"}, {"onclick":"perfusuaLiveForm2EditPanel.saveData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"perfusuaLiveForm2EditPanel.formInvalid","targetProperty":"disabled"}, {}]
									}]
								}],
								cancelButton1: ["wm.Button", {"caption":"Cancelar","height":"100%","margin":"4"}, {"onclick":"perfusuaLiveForm2EditPanel.cancelEdit"}]
							}],
							operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								newButton1: ["wm.Button", {"caption":"Nuevo","height":"100%","margin":"4"}, {"onclick":"perfusuaLiveForm2EditPanel.beginDataInsert"}],
								updateButton1: ["wm.Button", {"caption":"Modificar","height":"100%","margin":"4"}, {"onclick":"perfusuaLiveForm2EditPanel.beginDataUpdate"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"perfusuaLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
									}]
								}],
								deleteButton1: ["wm.Button", {"caption":"Eliminar","height":"100%","margin":"4"}, {"onclick":"perfusuaLiveForm2EditPanel.deleteData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"perfusuaLiveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
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