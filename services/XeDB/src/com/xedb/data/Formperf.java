
package com.xedb.data;



/**
 *  XeDB.Formperf
 *  01/28/2016 15:42:28
 * 
 */
public class Formperf {

    private Long idFormperf;
    private String activo;
    private Formulario formulario;
    private Perfil perfil;

    public Long getIdFormperf() {
        return idFormperf;
    }

    public void setIdFormperf(Long idFormperf) {
        this.idFormperf = idFormperf;
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

    public Perfil getPerfil() {
        return perfil;
    }

    public void setPerfil(Perfil perfil) {
        this.perfil = perfil;
    }

}
