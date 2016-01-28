
package com.xedb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  XeDB.Perfil
 *  01/28/2016 14:17:24
 * 
 */
public class Perfil {

    private Long codigo;
    private String descripcion;
    private String activo;
    private Set<com.xedb.data.Perfusua> perfusuas = new HashSet<com.xedb.data.Perfusua>();
    private Set<com.xedb.data.Formperf> formperfs = new HashSet<com.xedb.data.Formperf>();

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

    public String getActivo() {
        return activo;
    }

    public void setActivo(String activo) {
        this.activo = activo;
    }

    public Set<com.xedb.data.Perfusua> getPerfusuas() {
        return perfusuas;
    }

    public void setPerfusuas(Set<com.xedb.data.Perfusua> perfusuas) {
        this.perfusuas = perfusuas;
    }

    public Set<com.xedb.data.Formperf> getFormperfs() {
        return formperfs;
    }

    public void setFormperfs(Set<com.xedb.data.Formperf> formperfs) {
        this.formperfs = formperfs;
    }

}
