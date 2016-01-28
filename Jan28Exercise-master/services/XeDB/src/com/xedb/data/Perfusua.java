
package com.xedb.data;



/**
 *  XeDB.Perfusua
 *  01/28/2016 11:33:34
 * 
 */
public class Perfusua {

    private Long idPerfusua;
    private Perfil perfil;
    private String codigoUsuario;
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
