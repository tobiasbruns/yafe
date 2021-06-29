package de.com.bruns.yafe.fim_importer.formly;

import java.util.List;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class TemplateOptions {

	private String label;
	private String placeholder;
	private boolean required;

	private List<Option> options;
}
