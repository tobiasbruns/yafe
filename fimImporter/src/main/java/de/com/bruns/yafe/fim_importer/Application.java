package de.com.bruns.yafe.fim_importer;

import static de.com.bruns.yafe.fim_importer.FimImporterUtils.*;

import javax.xml.XMLConstants;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Marshaller;
import javax.xml.bind.Unmarshaller;
import javax.xml.bind.helpers.DefaultValidationEventHandler;
import javax.xml.transform.Source;
import javax.xml.transform.stream.StreamSource;
import javax.xml.validation.Schema;
import javax.xml.validation.SchemaFactory;

import org.oasis_open.docs.codelist.ns.genericode._1.CodeListDocument;
import org.oasis_open.docs.codelist.ns.genericode._1.ColumnSet;
import org.oasis_open.docs.codelist.ns.genericode._1.Identification;
import org.oasis_open.docs.codelist.ns.genericode._1.SimpleCodeList;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.xml.sax.SAXException;

import de.com.bruns.yafe.fim_importer.datenfelder.DatenfelderDoc;
import de.com.bruns.yafe.fim_importer.datenfelder.Header;
import de.com.bruns.yafe.fim_importer.gruppe.GruppeDocument;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	public Unmarshaller codelistUnmarshaller() throws JAXBException, SAXException {
		Unmarshaller unmarshaller = createContext().createUnmarshaller();
//		unmarshaller.setSchema(createSchema());

		return unmarshaller;
	}

	@Bean
	public Marshaller jaxbMarshaller() throws JAXBException, SAXException {
		var marshaller = createContext().createMarshaller();
		marshaller.setSchema(createSchema());

		return marshaller;
	}

	private JAXBContext createContext() throws JAXBException {
		return JAXBContext.newInstance(CodeListDocument.class, Identification.class, SimpleCodeList.class, ColumnSet.class);
	}

	@Bean
	public Unmarshaller datenfeldUnmarshaller() throws JAXBException, SAXException {
		var ctxt = JAXBContext.newInstance(DatenfelderDoc.class, Header.class);
		var unmarshaller = ctxt.createUnmarshaller();
//		unmarshaller.setSchema(createSchema());
		unmarshaller.setEventHandler(new DefaultValidationEventHandler());

		return unmarshaller;
	}

	public Marshaller datenfeldMarshaller() throws JAXBException, SAXException {
		var ctxt = JAXBContext.newInstance(DatenfelderDoc.class);
		var marshaller = ctxt.createMarshaller();
//		marshaller.setSchema(createSchema());

		return marshaller;
	}

	@Bean
	public Unmarshaller fieldGruppeUnmarshaller() throws JAXBException {
		var ctxt = JAXBContext.newInstance(GruppeDocument.class, Header.class);
		var unmarshaller = ctxt.createUnmarshaller();
		unmarshaller.setEventHandler(new DefaultValidationEventHandler());

		return unmarshaller;
	}

	private Schema createSchema() throws SAXException {
		var sf = SchemaFactory.newInstance(XMLConstants.W3C_XML_SCHEMA_NS_URI);
		return sf.newSchema(new Source[] { fromFile("xml.xsd"), fromFile("genericode.xsd"), fromFile("datenfeld.xsd") });
	}

	private Source fromFile(String fileName) {
		return new StreamSource(loadFile(fileName));
	}
}
