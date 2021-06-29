package de.com.bruns.yafe.fim_importer.gruppe;

import java.util.List;

import de.com.bruns.yafe.fim_importer.datenfelder.CodeListElement;
import de.com.bruns.yafe.fim_importer.datenfelder.Identifikation;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DatenfeldGruppe {

	private Identifikation identifikation;

	private String name;
	private String bezeichnungEingabe;
	private String bezeichnungAusgabe;
	private String beschreibung;
	private String definition;
	private String bezug;

	private CodeListElement status;

	private String fachlicherErsteller;
	private String veroeffentlichungsdatum;

	private CodeListElement schemaelementart;

	private String hilfetextEingabe;
	private String hilfetextAusgabe;

	private Regel regel;

	private List<Struktur> struktur;

	private String versionshinweis;
	private String freigabedatum;
}
