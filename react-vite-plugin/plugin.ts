import { createFilter, Plugin } from 'vite';
import { CallExpression, parseSync, transformSync } from '@swc/core';
import { Visitor } from '@swc/core/Visitor';

interface ITransformResult {
  code: string;
  map?: string;
}

const include = [/\.[cm]?[tj]sx?$/];
const exclude = ['**/node_modules/**'];

const filterFile = createFilter(include, exclude);

class PluginTransformImport extends Visitor {
  visitCallExpression(n: CallExpression) {
    if (n.callee.type === 'Identifier' && n.callee.value === 'jsx') {
      if (n.arguments[1]?.expression.type === 'ObjectExpression') {
        const newProperties = n.arguments[1].expression.properties.filter(e => {
          return (e.type === 'KeyValueProperty') && (e.key.type === 'StringLiteral') && (e.key.value !== 'data-testid')
        })
        n.arguments[1].expression.properties = newProperties
      }
    }
    return super.visitCallExpression(n);
  }
}

const plugin = (program) => new PluginTransformImport().visitProgram(program);
const removeAttributes = (): Plugin => ({
  name: 'vite-plugin-remove-attributes',
  apply: 'build',
  transform: (src: string, id: string) => {
    let result: ITransformResult = { code: '', map: '' };
    const isTrans = (process.env.NODE_ENV === 'production') && filterFile(id);
    if (isTrans) {
      result = transformSync(src, {
        plugin,
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: 'ecmascript',
            jsx: true,
          }
        }
      })
    }
    return result;
  },
})

export default removeAttributes;
