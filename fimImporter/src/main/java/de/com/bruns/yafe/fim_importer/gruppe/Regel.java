package de.com.bruns.yafe.fim_importer.gruppe;

import de.com.bruns.yafe.fim_importer.datenfelder.CodeListElement;
import de.com.bruns.yafe.fim_importer.datenfelder.Identifikation;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Regel {

	private Identifikation identifikation;

	private String name;

	private String bezeichnungEingabe;
	private String beschreibung;
	private String definition;
	private String bezug;

	private CodeListElement status;

	private String fachlicherErsteller;

	private String script;
}
