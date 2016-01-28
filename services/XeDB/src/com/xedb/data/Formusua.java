
package com.xedb.data;



/**
 *  XeDB.Formusua
 *  01/28/2016 14:17:24
 * 
 */
public class Formusua {

    private Long idFormusua;
    private Formulario formulario;
    private Usuarios usuarios;
    private String activo;

    public Long getIdFormusua() {
        return idFormusua;
    }

    public void setIdFormusua(Long idFormusua) {
        this.idFormusua = idFormusua;
    }

    public Formulario getFormulario() {
        return formulario;
    }

    public void setFormulario(Formulario formulario) {
        this.formulario = formulario;
    }

    public Usuarios getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Usuarios usuarios) {
        this.usuarios = usuarios;
    }

    public String getActivo() {
        return activo;
    }

    public void setActivo(String activo) {
        this.activo = activo;
    }

}
