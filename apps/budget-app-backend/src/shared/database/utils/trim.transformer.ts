import type { TransformFnParams } from 'class-transformer';

export function TrimTransformer(params: TransformFnParams) {
  if (typeof params.value !== 'string') {
    return params.value;
  }

  return params.value.trim().replace(/^\s+|\s+$/g, '');
}
