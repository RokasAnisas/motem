import prompts from 'prompts';
import type { ModuleHead } from './types/ModuleHead.type';

export const promptModuleType = async (
  filesList: ModuleHead[]
): Promise<ModuleHead> => {
  const choices = filesList.map(file => ({
    title: file.name || file.fileName,
    description: file.description,
    value: file,
  }));

  const moduleChice = await prompts(
    {
      type: 'select',
      name: 'module',
      message: 'Choose type',
      choices: choices,
    },
    {
      onCancel: () => {
        console.log(`Abort generate`);
        process.exit(1);
      },
    }
  );

  return moduleChice.module;
};
