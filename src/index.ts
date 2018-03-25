import * as t from 'io-ts';
import * as NumberType from './types/Number';
import * as ObjectType from './types/Object';

// tslint:disable:variable-name

export namespace Loi {
  export type Type<RT extends t.Any> = RT['_A'];

  export const number = NumberType.number
  export const object = ObjectType.object

  export function validate<S, A>(value: S, type: t.Decoder<S, A>): t.Validation<A> {
    return type.decode(value);
  }
}

export default Loi;
