package de.com.bruns.yafe.fim_importer.gruppe;

import static de.com.bruns.yafe.fim_importer.FimImporterUtils.*;

import java.io.File;
import java.io.FilenameFilter;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import lombok.Getter;
import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class FimGruppenService {

	private static final FilenameFilter filter = (dir, name) -> name.startsWith("G") && name.endsWith(".xml");

	@Getter
	private List<DatenfeldGruppe> gruppen;

	@Value("${yafe.fim.datenfelder.directory}")
	private String fieldDirectory;

	@Autowired
	@Qualifier("fieldGruppeUnmarshaller")
	private Unmarshaller unmarshaller;

	@PostConstruct
	void init() {
		gruppen = Collections.unmodifiableList(loadGruppen());
	}

	private List<DatenfeldGruppe> loadGruppen() {
		return Arrays.stream(getFilesInDirectory(fieldDirectory, filter))
				.map(this::unmarshall).map(GruppeDocument::getDatenfeldgruppe)
				.collect(Collectors.toList());
	}

	private GruppeDocument unmarshall(File gruppeFile) {
		log.info("Parse file {}", gruppeFile.getName());

		try {
			return (GruppeDocument) unmarshaller.unmarshal(gruppeFile);
		} catch (JAXBException e) {
			throw new RuntimeException(e);
		}
	}
}
