package de.com.bruns.yafe.fim_importer.formly;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import de.com.bruns.yafe.fim_importer.datenfelder.FimService;
import de.com.bruns.yafe.fim_importer.gruppe.FimGruppenService;

@RestController
@RequestMapping("/forms/formlyTest.yml")
public class FormlyTestController {

	@Autowired
	private FimService fimService;
	@Autowired
	private FimGruppenService fimGruppeService;
	@Autowired
	private Fim2FormlyMapper mapper;

	@GetMapping
	public List<FormlyItem> getFields() {
		return Stream.concat(
				fimService.getFields().stream().map(mapper::toFormly),
				fimGruppeService.getGruppen().stream().map(mapper::toFormly))
				.collect(Collectors.toList());

	}
}
