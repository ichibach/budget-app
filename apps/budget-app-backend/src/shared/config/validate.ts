import { plainToClass, type ClassConstructor } from 'class-transformer';
import { validateSync } from 'class-validator';

export function validateEnvSchema(validateSchema: ClassConstructor<unknown>) {
  return function (config: Record<string, unknown>) {
    const validatedConfig = plainToClass(validateSchema, config, {
      enableImplicitConversion: true,
    });
    const errors = validateSync(validatedConfig as object, {
      skipMissingProperties: false,
    });

    if (errors.length > 0) {
      throw new Error(errors.toString());
    }
    return validatedConfig;
  };
}
