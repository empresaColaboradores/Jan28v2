
package com.xedb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  XeDB.Usuarios
 *  01/28/2016 15:52:54
 * 
 */
public class Usuarios {

    private String usuario;
    private String nombre;
    private String estado;
    private Set<com.xedb.data.Formusua> formusuas = new HashSet<com.xedb.data.Formusua>();
    private Set<com.xedb.data.Perfusua> perfusuas = new HashSet<com.xedb.data.Perfusua>();

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Set<com.xedb.data.Formusua> getFormusuas() {
        return formusuas;
    }

    public void setFormusuas(Set<com.xedb.data.Formusua> formusuas) {
        this.formusuas = formusuas;
    }

    public Set<com.xedb.data.Perfusua> getPerfusuas() {
        return perfusuas;
    }

    public void setPerfusuas(Set<com.xedb.data.Perfusua> perfusuas) {
        this.perfusuas = perfusuas;
    }

}
