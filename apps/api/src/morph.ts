import { Project, ts } from 'ts-morph';
import path from 'path';
import IndentStyle = ts.IndentStyle;

const project = new Project({
  tsConfigFilePath: path.resolve(__dirname, '../tsconfig.json'),
  skipAddingFilesFromTsConfig: false,
});

function generateTypeFile(sourceFilename: string) {
  const sourceFile = project.getSourceFileOrThrow(path.resolve(__dirname, sourceFilename));
  const outFilename = sourceFilename.split('/').slice(0, -1).join('/') + '.ts';
  const outPath = path.resolve(__dirname, '../../../packages/types/src', outFilename);
  const outFile = project.createSourceFile(outPath, '', { overwrite: true });

  console.log('Exporting', outFilename);

  sourceFile.getExportedDeclarations().forEach((decls, name) => {
    decls.forEach((decl) => {

      console.log('>', name);

      outFile.addTypeAlias({
        name,
        type: decl.getType().getText(),
        isExported: true,
      });
    });
  });

  outFile.formatText({
    ensureNewLineAtEndOfFile: true,
    indentSize: 2,
    indentStyle: IndentStyle.Smart,
  });

  project.saveSync();
}

const exportFiles = project.getSourceFiles('**/*.export.ts');

for (const sourceFile of exportFiles) {
  const typeFilename =  path.relative(__dirname, sourceFile.getFilePath());
  generateTypeFile(typeFilename);
}

console.log('Types exported!');
