package de.com.bruns.yafe.fim_importer.formly;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;
import org.oasis_open.docs.codelist.ns.genericode._1.CodeListDocument;
import org.oasis_open.docs.codelist.ns.genericode._1.Column;
import org.oasis_open.docs.codelist.ns.genericode._1.Key;
import org.oasis_open.docs.codelist.ns.genericode._1.Row;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import de.com.bruns.yafe.fim_importer.codelist.FimCodelistService;
import de.com.bruns.yafe.fim_importer.datenfelder.Datenfeld;
import de.com.bruns.yafe.fim_importer.gruppe.DatenfeldGruppe;
import de.com.bruns.yafe.fim_importer.gruppe.Felder;
import de.com.bruns.yafe.fim_importer.gruppe.Struktur;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class Fim2FormlyMapper {

	@Autowired
	private FimCodelistService codelistService;

	public FormlyField toFormly(Datenfeld datenfeld) {
		return FormlyField.builder()
				.key(datenfeld.getIdentifikation().getId())
				.type(getType(datenfeld))
				.templateOptions(buildTemplateOptions(datenfeld))
				.build();

	}

	private String getType(Datenfeld datenfeld) {
		if (Objects.equals(datenfeld.getFeldArt().getCode(), "input")) {
			if (datentypeIs(datenfeld, "text", "num", "num_int"))
				return "input";
			if (Objects.equals(datenfeld.getDatenTyp().getCode(), "bool"))
				return "checkbox";
			if (Objects.equals(datenfeld.getDatenTyp().getCode(), "date"))
				return "datepicker";
			log.warn("unbekannter datentyp: " + datenfeld.getDatenTyp().getCode());
			return "input";
		}
		if (Objects.equals(datenfeld.getFeldArt().getCode(), "select")) {
			return "select";
		}
		log.warn("unbekannte feldart: " + datenfeld.getFeldArt().getCode());
		return datenfeld.getFeldArt().getCode();
	}

	private boolean datentypeIs(Datenfeld datenfeld, String... toCheck) {
		return new HashSet<>(Arrays.asList(toCheck)).contains(datenfeld.getDatenTyp().getCode());
	}

	private TemplateOptions buildTemplateOptions(Datenfeld datenfeld) {
		return TemplateOptions.builder()
				.label(datenfeld.getBezeichnungEingabe())
				.placeholder(datenfeld.getBeschreibung())
				.options(buildOptions(datenfeld))
				.build();
	}

	private List<Option> buildOptions(Datenfeld datenfeld) {
		if (datenfeld.getCodelisteReferenz() == null) {
			return Collections.emptyList();
		}

		var uri = datenfeld.getCodelisteReferenz().getGenericodeIdentification();

		CodeListDocument codelist = codelistService.getCodelist(uri.getCanonicalVersionUri())
				.orElseThrow(() -> new IllegalStateException("Cannot find codelist with uri: " + uri.getCanonicalVersionUri()));

		log.info("use codelist " + codelist.getIdentification().getCanonicalUri());
		String codeKey = getCodeKey(codelist);
		String codeName = getCodeName(codelist);

		return codelist.getSimpleCodeList().getRow().stream()
				.map(row -> Option.builder().label(getValueByRef(codeName, row)).value(getValueByRef(codeKey, row)).build())
				.collect(Collectors.toList());
		// todo load list / build options

//		return null;
	}

	private String getCodeKey(CodeListDocument codeList) {
		return codeList.getColumnSet().getKeyChoice().stream()
				.map(key -> (Key) key).filter(key -> StringUtils.equalsIgnoreCase(StringUtils.trim(key.getId()), "codeKey"))
				.findAny().map(key -> getShortName(key))
				.orElseThrow(() -> new IllegalStateException("Cannot find codeKey"));
	}

	private String getCodeName(CodeListDocument codeList) {
		return codeList.getColumnSet().getKeyChoice().stream()
				.map(key -> (Key) key)
				.filter(key -> StringUtils.equalsIgnoreCase(StringUtils.trim(key.getId()), "codenameKey"))
				.findAny().map(key -> getShortName(key))
				.orElseThrow(() -> new IllegalStateException("Cannot find codenameKey"));
	}

	private String getShortName(Key key) {
		return ((Column) key.getColumnRef().get(0).getRef()).getShortName().getValue();
	}

	private String getValueByRef(String ref, Row row) {
		return row.getValue().stream().filter(val -> StringUtils.equalsIgnoreCase(((Column) val.getColumnRef()).getId(), ref)).findAny()
				.map(val -> val.getSimpleValue().getValue())
//				.orElse("");
				.orElseThrow(() -> new IllegalStateException("Cannot find value with reference: " + ref));
	}

	public FormlyGroup toFormly(DatenfeldGruppe gruppe) {
		return FormlyGroup.builder()
				.key(gruppe.getIdentifikation().getId())
				.templateOptions(
						TemplateOptions.builder().label(gruppe.getBezeichnungEingabe()).build())
				.fieldGroup(toFormly(gruppe.getStruktur()))
				.build();
	}

	private List<FormlyItem> toFormly(List<Struktur> strukturen) {
		return strukturen.stream().map(Struktur::getEnthaelt).map(this::toFormlyFields)
				.collect(Collectors.toList());
	}

	private FormlyItem toFormlyFields(Felder felder) {
		if (felder.getDatenfeld() != null)
			return toFormly(felder.getDatenfeld());
		if (felder.getDatenfeldgruppe() != null)
			return toFormly(felder.getDatenfeldgruppe());

		return null;
	}
}
