package de.com.bruns.yafe.fim_importer.formly;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class FormlyField implements FormlyItem {

	private String key;
	private String type;

	private TemplateOptions templateOptions;
}
