package de.com.bruns.yafe.fim_importer.formly;

import java.util.List;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class FormlyGroup implements FormlyItem {

	private String key;
	private final String[] wrappers = new String[] { "card" };
	private TemplateOptions templateOptions;

	private List<FormlyItem> fieldGroup;
}
