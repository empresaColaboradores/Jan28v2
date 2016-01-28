
package com.xedb.data;



/**
 *  XeDB.Formusua
 *  01/28/2016 15:52:34
 * 
 */
public class Formusua {

    private Long idFormusua;
    private String activo;
    private Formulario formulario;
    private Usuarios usuarios;

    public Long getIdFormusua() {
        return idFormusua;
    }

    public void setIdFormusua(Long idFormusua) {
        this.idFormusua = idFormusua;
    }

    public String getActivo() {
        return activo;
    }

    public void setActivo(String activo) {
        this.activo = activo;
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

}
