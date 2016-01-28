wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"com.xedb.data.Formperf": {
			"fields": {
				"activo": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"formulario": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.xedb.data.Formulario"
				},
				"idFormperf": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"perfil": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.xedb.data.Perfil"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "XeDB"
		},
		"com.xedb.data.Formulario": {
			"fields": {
				"activo": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"descripcion": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"formperfs": {
					"exclude": [],
					"fieldOrder": 5,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.xedb.data.Formperf"
				},
				"formusuas": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.xedb.data.Formusua"
				},
				"nemotecnia": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "XeDB"
		},
		"com.xedb.data.Formusua": {
			"fields": {
				"activo": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"formulario": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.xedb.data.Formulario"
				},
				"idFormusua": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"usuarios": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.xedb.data.Usuarios"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "XeDB"
		},
		"com.xedb.data.Perfil": {
			"fields": {
				"activo": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"descripcion": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"formperfs": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.xedb.data.Formperf"
				},
				"perfusuas": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.xedb.data.Perfusua"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "XeDB"
		},
		"com.xedb.data.Perfusua": {
			"fields": {
				"activo": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"idPerfusua": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"perfil": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.xedb.data.Perfil"
				},
				"usuarios": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.xedb.data.Usuarios"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "XeDB"
		},
		"com.xedb.data.Usuarios": {
			"fields": {
				"estado": {
					"exclude": [],
					"fieldOrder": 2,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"formusuas": {
					"exclude": [],
					"fieldOrder": 3,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.xedb.data.Formusua"
				},
				"nombre": {
					"exclude": [],
					"fieldOrder": 1,
					"fieldSubType": null,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"perfusuas": {
					"exclude": [],
					"fieldOrder": 4,
					"fieldSubType": null,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.xedb.data.Perfusua"
				},
				"usuario": {
					"exclude": [],
					"fieldOrder": 0,
					"fieldSubType": null,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "XeDB"
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};