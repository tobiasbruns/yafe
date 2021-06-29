package de.com.bruns.yafe.fim_importer.datenfelder;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "header", propOrder = {
		"nachrichtID",
		"erstellungsZeitpunkt"
})
public class Header {

	@XmlElement(required = true)
	protected String nachrichtID;
	@XmlElement(name = "erstellungszeitpunkt")
	protected String erstellungsZeitpunkt;

	public String getNachrichtID() {
		return nachrichtID;
	}

	public void setNachrichtID(String nachrichtID) {
		this.nachrichtID = nachrichtID;
	}

	public String getErstellungsZeitpunkt() {
		return erstellungsZeitpunkt;
	}

	public void setErstellungsZeitpunkt(String erstellungsZeitpunkt) {
		this.erstellungsZeitpunkt = erstellungsZeitpunkt;
	}

}
