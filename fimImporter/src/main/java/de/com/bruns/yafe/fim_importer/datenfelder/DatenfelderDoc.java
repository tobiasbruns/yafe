package de.com.bruns.yafe.fim_importer.datenfelder;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

import lombok.Getter;
import lombok.Setter;

@XmlRootElement(name = "xdatenfelder.datenfeld.0104", namespace = "urn:xoev-de:fim:standard:xdatenfelder_2")
@XmlType(name = "xdatenfelder.datenfeld.0104", propOrder = {
		"header",
		"datenfeld"
})
@XmlAccessorType(XmlAccessType.FIELD)
@Getter
@Setter
public class DatenfelderDoc {

	@XmlElement(required = true, name = "header")
	protected Header header;

	protected Datenfeld datenfeld;
}