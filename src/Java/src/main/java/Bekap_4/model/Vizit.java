package Bekap_4.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Bekap_4.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Визит
 */
@Entity(name = "IISBekap_4Визит")
@Table(schema = "public", name = "Визит")
public class Vizit {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодВизита")
    private Integer кодвизита;

    @Column(name = "НачалоСеанса")
    private String началосеанса;

    @Column(name = "КонецСеанса")
    private String конецсеанса;

    @Column(name = "ДатаВизита")
    private Date датавизита;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;

    @OneToMany(mappedBy = "vizit", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZapisVizita> zapisvizitas;


    public Vizit() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодВизита() {
      return кодвизита;
    }

    public void setКодВизита(Integer кодвизита) {
      this.кодвизита = кодвизита;
    }

    public String getНачалоСеанса() {
      return началосеанса;
    }

    public void setНачалоСеанса(String началосеанса) {
      this.началосеанса = началосеанса;
    }

    public String getКонецСеанса() {
      return конецсеанса;
    }

    public void setКонецСеанса(String конецсеанса) {
      this.конецсеанса = конецсеанса;
    }

    public Date getДатаВизита() {
      return датавизита;
    }

    public void setДатаВизита(Date датавизита) {
      this.датавизита = датавизита;
    }


}