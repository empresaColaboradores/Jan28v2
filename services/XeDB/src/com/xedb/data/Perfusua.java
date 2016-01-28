
package com.xedb.data;



/**
 *  XeDB.Perfusua
 *  01/28/2016 14:17:24
 * 
 */
public class Perfusua {

    private Long idPerfusua;
    private Perfil perfil;
    private Usuarios usuarios;
    private String activo;

    public Long getIdPerfusua() {
        return idPerfusua;
    }

    public void setIdPerfusua(Long idPerfusua) {
        this.idPerfusua = idPerfusua;
    }

    public Perfil getPerfil() {
        return perfil;
    }

    public void setPerfil(Perfil perfil) {
        this.perfil = perfil;
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
