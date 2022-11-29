package fi.vamk.scm.server.entities;

import javax.persistence.*;

@Entity
@Table(name = "location")
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "no", nullable = false)
    private Integer no;

    @Column(name = "name", nullable = false, length = 30)
    private String name;

    @Column(name = "lat", nullable = false)
    private Double lat;

    @Column(name = "`long`", nullable = false)
    private Double longField;

    @Column(name = "processing_cost", nullable = false)
    private Double processingCost;

    @Column(name = "max_hr_cap", nullable = false)
    private Double maxHrCap;

    @Column(name = "sla", nullable = false)
    private byte[] sla;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getNo() {
        return no;
    }

    public void setNo(Integer no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Double getLongField() {
        return longField;
    }

    public void setLongField(Double longField) {
        this.longField = longField;
    }

    public Double getProcessingCost() {
        return processingCost;
    }

    public void setProcessingCost(Double processingCost) {
        this.processingCost = processingCost;
    }

    public Double getMaxHrCap() {
        return maxHrCap;
    }

    public void setMaxHrCap(Double maxHrCap) {
        this.maxHrCap = maxHrCap;
    }

    public byte[] getSla() {
        return sla;
    }

    public void setSla(byte[] sla) {
        this.sla = sla;
    }

}