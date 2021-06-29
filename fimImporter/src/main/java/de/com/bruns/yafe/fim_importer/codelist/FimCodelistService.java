package de.com.bruns.yafe.fim_importer.codelist;

import static de.com.bruns.yafe.fim_importer.FimImporterUtils.*;

import java.io.File;
import java.io.FilenameFilter;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.apache.commons.lang3.StringUtils;
import org.oasis_open.docs.codelist.ns.genericode._1.CodeListDocument;
import org.oasis_open.docs.codelist.ns.genericode._1.Identification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class FimCodelistService {

	private static final FilenameFilter filter = (dir, name) -> name.startsWith("C") && name.endsWith(".xml");

	@Autowired
	@Qualifier("codelistUnmarshaller")
	private Unmarshaller unmarshaller;

	@Value("${yafe.fim.codelist.directory}")
	private String fieldDirectory;

	private Map<String, CodeListDocument> codelistByUri;

	public Optional<CodeListDocument> getCodelist(String uri) {
		return Optional.ofNullable(codelistByUri.get(uri));
	}

	@PostConstruct
	void init() {
		codelistByUri = loadCodelists().stream()
				.collect(Collectors.toMap(codelist -> StringUtils.trim(codelist.getIdentification().getCanonicalVersionUri()), codelist -> codelist));
	}

	private CodeListId buildId(Identification identification) {
		return CodeListId.builder().uri(identification.getCanonicalUri()).version(identification.getVersion()).build();
	}

	private List<CodeListDocument> loadCodelists() {
		return Arrays.stream(getFilesInDirectory(fieldDirectory, filter))
				.map(this::unmarshall)
				.collect(Collectors.toList());
	}

	private CodeListDocument unmarshall(File codelistFile) {
		log.info("unmarshall: " + codelistFile.getName());

		try {
			return ((JAXBElement<CodeListDocument>) unmarshaller.unmarshal(codelistFile)).getValue();
		} catch (JAXBException e) {
			throw new RuntimeException(e);
		}
	}

}
