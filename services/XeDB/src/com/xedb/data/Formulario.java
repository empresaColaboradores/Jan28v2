
package com.xedb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  XeDB.Formulario
 *  01/28/2016 15:52:34
 * 
 */
public class Formulario {

    private Long codigo;
    private String descripcion;
    private String nemotecnia;
    private String activo;
    private Set<com.xedb.data.Formperf> formperfs = new HashSet<com.xedb.data.Formperf>();
    private Set<com.xedb.data.Formusua> formusuas = new HashSet<com.xedb.data.Formusua>();

    public Long getCodigo() {
        return codigo;
    }

    public void setCodigo(Long codigo) {
        this.codigo = codigo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getNemotecnia() {
        return nemotecnia;
    }

    public void setNemotecnia(String nemotecnia) {
        this.nemotecnia = nemotecnia;
    }

    public String getActivo() {
        return activo;
    }

    public void setActivo(String activo) {
        this.activo = activo;
    }

    public Set<com.xedb.data.Formperf> getFormperfs() {
        return formperfs;
    }

    public void setFormperfs(Set<com.xedb.data.Formperf> formperfs) {
        this.formperfs = formperfs;
    }

    public Set<com.xedb.data.Formusua> getFormusuas() {
        return formusuas;
    }

    public void setFormusuas(Set<com.xedb.data.Formusua> formusuas) {
        this.formusuas = formusuas;
    }

}
