package de.com.bruns.yafe.fim_importer.datenfelder;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;

import lombok.Getter;
import lombok.Setter;

@XmlAccessorType(XmlAccessType.FIELD)
@Getter
@Setter
public class Datenfeld {

	private Identifikation identifikation;

	private String name;
	private String bezeichnungEingabe;
	private String bezeichnungAusgabe;

	private String beschreibung;
	private String definition;
	private String bezug;

	private Status status;

	private String fachlicherErsteller;
	private String versionshinweis;
	@XmlElement(name = "freigabedatum")
	private String freigabeDatum;
	@XmlElement(name = "veroeffentlichungsdatum")
	private String veroeffentlichungsDatum;

	@XmlElement(name = "schemaelementart")
	private CodeListElement schemaElementArt;
	@XmlElement(name = "feldart")
	private CodeListElement feldArt;
	@XmlElement(name = "datentyp")
	private CodeListElement datenTyp;

	private CodeListReferenz codelisteReferenz;

	private String hilfetextEingabe;
	private String hilfetextAusgabe;

	private String inhalt;

	private String praezisierung;

}
