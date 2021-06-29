package de.com.bruns.yafe.fim_importer;

import static de.com.bruns.yafe.fim_importer.FimImporterUtils.*;
import static org.assertj.core.api.Assertions.*;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.xml.sax.SAXException;

import de.com.bruns.yafe.fim_importer.datenfelder.DatenfelderDoc;
import de.com.bruns.yafe.fim_importer.datenfelder.Header;

class ImportFieldTest {

	private Unmarshaller unmarshaller;
	private Marshaller marshaller;

	@BeforeEach
	void initTest() throws JAXBException, SAXException {
		unmarshaller = new Application().datenfeldUnmarshaller();
		marshaller = new Application().datenfeldMarshaller();
	}

	@Test
	void importTestField() throws JAXBException {
		DatenfelderDoc fieldDef = (DatenfelderDoc) unmarshaller.unmarshal(loadFile("testfield.xml"));

		assertThat(fieldDef).isNotNull();
		assertThat(fieldDef.getHeader()).describedAs("Header").isNotNull();
		assertThat(fieldDef.getHeader().getNachrichtID()).isEqualTo("testid");
	}

	@Test
	void importField() throws JAXBException {
		DatenfelderDoc fieldDef = (DatenfelderDoc) unmarshaller.unmarshal(loadFile("F60000020V1.0.xml"));

		assertThat(fieldDef).isNotNull();
		assertThat(fieldDef.getHeader()).describedAs("Header").isNotNull();
		assertThat(fieldDef.getHeader().getNachrichtID()).isEqualTo("A424DF2532286F7A");
	}

	@Test
	void writeFieldXml() throws JAXBException {
		var header = new Header();
		header.setNachrichtID("testid");

		var df = new DatenfelderDoc();
		df.setHeader(header);

		var qname = new javax.xml.namespace.QName("urn:xoev-de:fim:standard:xdatenfelder_2", "xdatenfelder.datenfeld.0104");
		var element = new JAXBElement(qname, DatenfelderDoc.class, df);
		marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
		marshaller.marshal(element, System.out);
	}

}
