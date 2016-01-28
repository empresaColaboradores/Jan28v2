
package com.xedb.data;



/**
 *  XeDB.Formusua
 *  01/28/2016 11:33:34
 * 
 */
public class Formusua {

    private Long idFormusua;
    private Formulario formulario;
    private String codigoUsuario;
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

    public String getCodigoUsuario() {
        return codigoUsuario;
    }

    public void setCodigoUsuario(String codigoUsuario) {
        this.codigoUsuario = codigoUsuario;
    }

    public String getActivo() {
        return activo;
    }

    public void setActivo(String activo) {
        this.activo = activo;
    }

}
