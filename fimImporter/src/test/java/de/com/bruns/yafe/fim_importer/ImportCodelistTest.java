package de.com.bruns.yafe.fim_importer;

import java.io.InputStream;

import javax.xml.XMLConstants;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import javax.xml.transform.Source;
import javax.xml.transform.stream.StreamSource;
import javax.xml.validation.SchemaFactory;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.oasis_open.docs.codelist.ns.genericode._1.CodeListDocument;
import org.oasis_open.docs.codelist.ns.genericode._1.Identification;
import org.oasis_open.docs.codelist.ns.genericode._1.LongName;
import org.oasis_open.docs.codelist.ns.genericode._1.ShortName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.context.SpringBootTest;
import org.xml.sax.SAXException;

@SpringBootTest
class ImportCodelistTest {

	@Autowired
	@Qualifier("codelistUnmarshaller")
	private Unmarshaller unmarshaller;
	@Autowired
	private Marshaller marshaller;

	@Test
	void validateXml() throws JAXBException, SAXException {
		var sf = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
		var schema = sf.newSchema(new Source[] { new StreamSource(loadFile("xml.xsd")), new StreamSource(loadFile("genericode.xsd")) });

		unmarshaller.setSchema(schema);

		unmarshaller.unmarshal(loadFile("Codelisten/C60000001_genericode.xml"));
	}

	@Test
	void parseXml() throws JAXBException {
//		JAXBContext ctxt = appl.createContext();

//		Unmarshaller unmarshaller = ctxt.createUnmarshaller();
		var codeliste1 = (JAXBElement<CodeListDocument>) unmarshaller.unmarshal(loadFile("Codelisten/C60000001_genericode.xml"));

		System.out.println(codeliste1.getValue().getIdentification());
		System.out.println(codeliste1.getValue().getSimpleCodeList());

		var value = codeliste1.getValue().getSimpleCodeList().getRow().get(1).getValue().get(0);
	}

	@Disabled
	@Test
	void writeXml() throws JAXBException, SAXException {

		var codeliste = new CodeListDocument();
		var identification = new Identification();
		var shortName = new ShortName();
		shortName.setValue("Klaus");
		identification.setShortName(shortName);
		var longName = new LongName();
		longName.setValue("Test");
		identification.getLongName().add(longName);

		identification.setVersion("1");
		identification.setCanonicalUri("urn:de:dsmeld:schluesseltabelle:familienstand");
		identification.setCanonicalVersionUri("urn:de:dsmeld:schluesseltabelle:familienstand_2");

		codeliste.setIdentification(identification);

		var qname = new javax.xml.namespace.QName("http://docs.oasis-open.org/codelist/ns/genericode/1.0/", "CodeList");
		var element = new JAXBElement(qname, CodeListDocument.class, codeliste);

		marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
		marshaller.marshal(element, System.out);
	}

	public static InputStream loadFile(final String fileName) {
		InputStream stream = ImportCodelistTest.class.getClassLoader().getResourceAsStream(fileName);
		if (stream == null) {
			throw new RuntimeException("File '" + fileName + "' not found."); // NOSONAR
		}
		return stream;
	}
}
