package de.com.bruns.yafe.fim_importer.datenfelder;

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

import lombok.extern.log4j.Log4j2;

@Service
@Log4j2
public class FimService {

	private static final String FIELD_XML = "datenfelder/F60000020V1.0.xml";

	private List<Datenfeld> datenfelder;

	@Value("${yafe.fim.datenfelder.directory}")
	private String fieldDirectory;

	@Autowired
	@Qualifier("datenfeldUnmarshaller")
	private Unmarshaller unmarshaller;

	@PostConstruct
	void init() {
		datenfelder = Collections.unmodifiableList(loadFields());
	}

	public List<Datenfeld> getFields() {
		return datenfelder;
	}

	private List<Datenfeld> loadFields() {
		var fieldFiles = getfieldFiles();

		return Arrays.stream(fieldFiles).map(this::<DatenfelderDoc>unmarshall)
				.map(DatenfelderDoc::getDatenfeld).collect(Collectors.toList());

	}

	private File[] getfieldFiles() {
		File dir = new File(fieldDirectory);

		var fieldFiles = dir.listFiles(new FilenameFilter() {

			@Override
			public boolean accept(File dir, String name) {
				return name.startsWith("F") && name.endsWith(".xml");
			}
		});

		if (fieldFiles == null) {
			throw new RuntimeException(fieldDirectory + "does not exist or is no directory");
		}

		return fieldFiles;
	}

	@SuppressWarnings("unchecked")
	private <T> T unmarshall(File fieldFile) {
		log.info("Parse file {}", fieldFile.getName());

		try {
			return (T) unmarshaller.unmarshal(fieldFile);
		} catch (JAXBException e) {
			throw new RuntimeException(e);
		}
	}

}
