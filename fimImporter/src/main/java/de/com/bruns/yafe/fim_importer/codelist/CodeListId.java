package de.com.bruns.yafe.fim_importer.codelist;

import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class CodeListId {

	String uri;
	String version;

}
