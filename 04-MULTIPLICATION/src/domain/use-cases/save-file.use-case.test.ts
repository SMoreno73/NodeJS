import { SaveFile } from "./save-file.use-case";
import fs from "fs";

describe("SaveFileUseCase.ts", () => {
  const customOptions = {
    fileContent: "custom content",
    fileDestination: "custom-outputs/file-destination",
    fileName: "custom-table-name",
  };

  const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

  afterEach(() => {
    const outputFolderExists = fs.existsSync("outputs");
    if (outputFolderExists) fs.rmSync("outputs", { recursive: true });

    const customOutputFolderExists = fs.existsSync(
      customOptions.fileDestination
    );
    if (customOutputFolderExists)
      fs.rmSync(customOptions.fileDestination, { recursive: true });
  });

  test("Should save the file with default values", () => {
    const saveFile = new SaveFile();
    const filePath = "outputs/table.txt";
    const option = {
      fileContent: "test content",
    };
    const result = saveFile.execute(option);
    //You need to check the file don't exist before, because else this don't work
    const fileExists = fs.existsSync(filePath); // Take care
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(option.fileContent);
  });

  test("should save file with custom values", () => {
    const saveFile = new SaveFile();

    const result = saveFile.execute(customOptions);
    const fileExists = fs.existsSync(customFilePath);
    const fileContent = fs.readFileSync(customFilePath, { encoding: "utf-8" });

    expect(result).toBe(true);
    expect(fileExists).toBe(true);
    expect(fileContent).toBe(customOptions.fileContent);
  });

  test('should return false if directory could not be created', () => {
    
  })
});
