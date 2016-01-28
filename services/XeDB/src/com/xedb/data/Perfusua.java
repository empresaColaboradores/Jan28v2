
package com.xedb.data;



/**
 *  XeDB.Perfusua
 *  01/28/2016 15:52:54
 * 
 */
public class Perfusua {

    private Long idPerfusua;
    private String activo;
    private Perfil perfil;
    private Usuarios usuarios;

    public Long getIdPerfusua() {
        return idPerfusua;
    }

    public void setIdPerfusua(Long idPerfusua) {
        this.idPerfusua = idPerfusua;
    }

    public String getActivo() {
        return activo;
    }

    public void setActivo(String activo) {
        this.activo = activo;
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

}
