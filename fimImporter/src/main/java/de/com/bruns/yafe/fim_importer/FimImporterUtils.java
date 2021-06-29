package de.com.bruns.yafe.fim_importer;

import java.io.File;
import java.io.FilenameFilter;
import java.io.InputStream;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class FimImporterUtils {

	public static InputStream loadFile(final String fileName) {
		InputStream stream = FimImporterUtils.class.getClassLoader().getResourceAsStream(fileName);
		if (stream == null) {
			throw new RuntimeException("File '" + fileName + "' not found."); // NOSONAR
		}
		return stream;
	}

	public static File[] getFilesInDirectory(String directory, FilenameFilter filter) {
		File dir = new File(directory);

		var gruppeFiles = dir.listFiles(filter);
		if (gruppeFiles == null) {
			throw new RuntimeException(directory + "does not exist or is no directory");
		}
		return gruppeFiles;
	}
}
