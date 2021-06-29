package de.com.bruns.yafe.fim_importer;

import static org.assertj.core.api.Assertions.*;

import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.xml.sax.SAXException;

import de.com.bruns.yafe.fim_importer.gruppe.GruppeDocument;

class ImportGruppeTest {

	private Unmarshaller unmarshaller;

	@BeforeEach
	void initTest() throws JAXBException, SAXException {
		unmarshaller = new Application().fieldGruppeUnmarshaller();
	}

	@Test
	void test() throws JAXBException {
		var gruppe = (GruppeDocument) unmarshaller.unmarshal(FimImporterUtils.loadFile("gruppe.xml"));

		assertThat(gruppe).isNotNull();
		assertThat(gruppe.getDatenfeldgruppe().getStruktur()).hasSize(7);
	}

}
