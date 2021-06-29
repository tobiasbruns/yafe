package de.com.bruns.yafe.fim_importer.gruppe;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import de.com.bruns.yafe.fim_importer.datenfelder.Header;
import lombok.Getter;
import lombok.Setter;

@XmlRootElement(name = "xdatenfelder.datenfeldgruppe.0103", namespace = "urn:xoev-de:fim:standard:xdatenfelder_2")
@XmlType(name = "xdatenfelder.datenfeldgruppe.0103", propOrder = {
		"header",
		"datenfeldgruppe"
})
@XmlAccessorType(XmlAccessType.FIELD)
@Getter
@Setter
public class GruppeDocument {

	@XmlElement(required = true, name = "header")
	protected Header header;

	protected DatenfeldGruppe datenfeldgruppe;
}
