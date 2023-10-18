/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model book
 *
 */
export type book = $Result.DefaultSelection<Prisma.$bookPayload>;
/**
 * Model book_category
 *
 */
export type book_category = $Result.DefaultSelection<Prisma.$book_categoryPayload>;
/**
 * Model category
 *
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>;
/**
 * Model publisher
 *
 */
export type publisher = $Result.DefaultSelection<Prisma.$publisherPayload>;
/**
 * Model review
 *
 */
export type review = $Result.DefaultSelection<Prisma.$reviewPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Books
 * const books = await prisma.book.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Books
   * const books = await prisma.book.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **book** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Books
   * const books = await prisma.book.findMany()
   * ```
   */
  get book(): Prisma.bookDelegate<ExtArgs>;

  /**
   * `prisma.book_category`: Exposes CRUD operations for the **book_category** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Book_categories
   * const book_categories = await prisma.book_category.findMany()
   * ```
   */
  get book_category(): Prisma.book_categoryDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   */
  get category(): Prisma.categoryDelegate<ExtArgs>;

  /**
   * `prisma.publisher`: Exposes CRUD operations for the **publisher** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Publishers
   * const publishers = await prisma.publisher.findMany()
   * ```
   */
  get publisher(): Prisma.publisherDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **review** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Reviews
   * const reviews = await prisma.review.findMany()
   * ```
   */
  get review(): Prisma.reviewDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    book: 'book';
    book_category: 'book_category';
    category: 'category';
    publisher: 'publisher';
    review: 'review';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'book' | 'book_category' | 'category' | 'publisher' | 'review' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      book: {
        payload: Prisma.$bookPayload<ExtArgs>;
        fields: Prisma.bookFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.bookFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.bookFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookPayload>;
          };
          findFirst: {
            args: Prisma.bookFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.bookFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookPayload>;
          };
          findMany: {
            args: Prisma.bookFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[];
          };
          create: {
            args: Prisma.bookCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookPayload>;
          };
          createMany: {
            args: Prisma.bookCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.bookDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookPayload>;
          };
          update: {
            args: Prisma.bookUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookPayload>;
          };
          deleteMany: {
            args: Prisma.bookDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.bookUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.bookUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$bookPayload>;
          };
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBook>;
          };
          groupBy: {
            args: Prisma.bookGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookGroupByOutputType>[];
          };
          count: {
            args: Prisma.bookCountArgs<ExtArgs>;
            result: $Utils.Optional<BookCountAggregateOutputType> | number;
          };
        };
      };
      book_category: {
        payload: Prisma.$book_categoryPayload<ExtArgs>;
        fields: Prisma.book_categoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.book_categoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$book_categoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.book_categoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$book_categoryPayload>;
          };
          findFirst: {
            args: Prisma.book_categoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$book_categoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.book_categoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$book_categoryPayload>;
          };
          findMany: {
            args: Prisma.book_categoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$book_categoryPayload>[];
          };
          create: {
            args: Prisma.book_categoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$book_categoryPayload>;
          };
          createMany: {
            args: Prisma.book_categoryCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.book_categoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$book_categoryPayload>;
          };
          update: {
            args: Prisma.book_categoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$book_categoryPayload>;
          };
          deleteMany: {
            args: Prisma.book_categoryDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.book_categoryUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.book_categoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$book_categoryPayload>;
          };
          aggregate: {
            args: Prisma.Book_categoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBook_category>;
          };
          groupBy: {
            args: Prisma.book_categoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Book_categoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.book_categoryCountArgs<ExtArgs>;
            result: $Utils.Optional<Book_categoryCountAggregateOutputType> | number;
          };
        };
      };
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>;
        fields: Prisma.categoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>;
          };
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>;
          };
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[];
          };
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>;
          };
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>;
          };
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>;
          };
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>;
          };
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategory>;
          };
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>;
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number;
          };
        };
      };
      publisher: {
        payload: Prisma.$publisherPayload<ExtArgs>;
        fields: Prisma.publisherFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.publisherFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publisherPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.publisherFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>;
          };
          findFirst: {
            args: Prisma.publisherFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publisherPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.publisherFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>;
          };
          findMany: {
            args: Prisma.publisherFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>[];
          };
          create: {
            args: Prisma.publisherCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>;
          };
          createMany: {
            args: Prisma.publisherCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.publisherDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>;
          };
          update: {
            args: Prisma.publisherUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>;
          };
          deleteMany: {
            args: Prisma.publisherDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.publisherUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.publisherUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$publisherPayload>;
          };
          aggregate: {
            args: Prisma.PublisherAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePublisher>;
          };
          groupBy: {
            args: Prisma.publisherGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PublisherGroupByOutputType>[];
          };
          count: {
            args: Prisma.publisherCountArgs<ExtArgs>;
            result: $Utils.Optional<PublisherCountAggregateOutputType> | number;
          };
        };
      };
      review: {
        payload: Prisma.$reviewPayload<ExtArgs>;
        fields: Prisma.reviewFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.reviewFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.reviewFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findFirst: {
            args: Prisma.reviewFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.reviewFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          findMany: {
            args: Prisma.reviewFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>[];
          };
          create: {
            args: Prisma.reviewCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          createMany: {
            args: Prisma.reviewCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.reviewDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          update: {
            args: Prisma.reviewUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          deleteMany: {
            args: Prisma.reviewDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.reviewUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.reviewUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$reviewPayload>;
          };
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateReview>;
          };
          groupBy: {
            args: Prisma.reviewGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ReviewGroupByOutputType>[];
          };
          count: {
            args: Prisma.reviewCountArgs<ExtArgs>;
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    book_category: number;
    review: number;
  };

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book_category?: boolean | BookCountOutputTypeCountBook_categoryArgs;
    review?: boolean | BookCountOutputTypeCountReviewArgs;
  };

  // Custom InputTypes

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBook_categoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: book_categoryWhereInput;
  };

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
  };

  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    book_category: number;
  };

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book_category?: boolean | CategoryCountOutputTypeCountBook_categoryArgs;
  };

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountBook_categoryArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: book_categoryWhereInput;
  };

  /**
   * Count Type PublisherCountOutputType
   */

  export type PublisherCountOutputType = {
    book: number;
  };

  export type PublisherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | PublisherCountOutputTypeCountBookArgs;
  };

  // Custom InputTypes

  /**
   * PublisherCountOutputType without action
   */
  export type PublisherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the PublisherCountOutputType
       */
      select?: PublisherCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * PublisherCountOutputType without action
   */
  export type PublisherCountOutputTypeCountBookArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: bookWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    publisher: number;
    review: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | UserCountOutputTypeCountPublisherArgs;
    review?: boolean | UserCountOutputTypeCountReviewArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPublisherArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: publisherWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null;
    _avg: BookAvgAggregateOutputType | null;
    _sum: BookSumAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
  };

  export type BookAvgAggregateOutputType = {
    page_count: number | null;
  };

  export type BookSumAggregateOutputType = {
    page_count: number | null;
  };

  export type BookMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    author: string | null;
    published_date: Date | null;
    publisher_id: string | null;
    genre: string | null;
    language: string | null;
    page_count: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    author: string | null;
    published_date: Date | null;
    publisher_id: string | null;
    genre: string | null;
    language: string | null;
    page_count: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookCountAggregateOutputType = {
    id: number;
    title: number;
    author: number;
    published_date: number;
    publisher_id: number;
    genre: number;
    language: number;
    page_count: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BookAvgAggregateInputType = {
    page_count?: true;
  };

  export type BookSumAggregateInputType = {
    page_count?: true;
  };

  export type BookMinAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    published_date?: true;
    publisher_id?: true;
    genre?: true;
    language?: true;
    page_count?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookMaxAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    published_date?: true;
    publisher_id?: true;
    genre?: true;
    language?: true;
    page_count?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookCountAggregateInputType = {
    id?: true;
    title?: true;
    author?: true;
    published_date?: true;
    publisher_id?: true;
    genre?: true;
    language?: true;
    page_count?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book to aggregate.
     */
    where?: bookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: bookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned books
     **/
    _count?: true | BookCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BookAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BookSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookMaxAggregateInputType;
  };

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
    [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>;
  };

  export type bookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookWhereInput;
    orderBy?: bookOrderByWithAggregationInput | bookOrderByWithAggregationInput[];
    by: BookScalarFieldEnum[] | BookScalarFieldEnum;
    having?: bookScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookCountAggregateInputType | true;
    _avg?: BookAvgAggregateInputType;
    _sum?: BookSumAggregateInputType;
    _min?: BookMinAggregateInputType;
    _max?: BookMaxAggregateInputType;
  };

  export type BookGroupByOutputType = {
    id: string;
    title: string;
    author: string;
    published_date: Date | null;
    publisher_id: string;
    genre: string;
    language: string;
    page_count: number;
    created_at: Date;
    updated_at: Date;
    _count: BookCountAggregateOutputType | null;
    _avg: BookAvgAggregateOutputType | null;
    _sum: BookSumAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
  };

  type GetBookGroupByPayload<T extends bookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BookGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BookGroupByOutputType[P]>
          : GetScalarType<T[P], BookGroupByOutputType[P]>;
      }
    >
  >;

  export type bookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      author?: boolean;
      published_date?: boolean;
      publisher_id?: boolean;
      genre?: boolean;
      language?: boolean;
      page_count?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      publisher?: boolean | publisherDefaultArgs<ExtArgs>;
      book_category?: boolean | book$book_categoryArgs<ExtArgs>;
      review?: boolean | book$reviewArgs<ExtArgs>;
      _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['book']
  >;

  export type bookSelectScalar = {
    id?: boolean;
    title?: boolean;
    author?: boolean;
    published_date?: boolean;
    publisher_id?: boolean;
    genre?: boolean;
    language?: boolean;
    page_count?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type bookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | publisherDefaultArgs<ExtArgs>;
    book_category?: boolean | book$book_categoryArgs<ExtArgs>;
    review?: boolean | book$reviewArgs<ExtArgs>;
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $bookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'book';
    objects: {
      publisher: Prisma.$publisherPayload<ExtArgs>;
      book_category: Prisma.$book_categoryPayload<ExtArgs>[];
      review: Prisma.$reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        title: string;
        author: string;
        published_date: Date | null;
        publisher_id: string;
        genre: string;
        language: string;
        page_count: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['book']
    >;
    composites: {};
  };

  type bookGetPayload<S extends boolean | null | undefined | bookDefaultArgs> = $Result.GetResult<
    Prisma.$bookPayload,
    S
  >;

  type bookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    bookFindManyArgs,
    'select' | 'include'
  > & {
    select?: BookCountAggregateInputType | true;
  };

  export interface bookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book']; meta: { name: 'book' } };
    /**
     * Find zero or one Book that matches the filter.
     * @param {bookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends bookFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bookFindUniqueArgs<ExtArgs>>,
    ): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Book that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {bookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends bookFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends bookFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bookFindFirstArgs<ExtArgs>>,
    ): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends bookFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     *
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends bookFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Book.
     * @param {bookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     *
     **/
    create<T extends bookCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bookCreateArgs<ExtArgs>>,
    ): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Books.
     *     @param {bookCreateManyArgs} args - Arguments to create many Books.
     *     @example
     *     // Create many Books
     *     const book = await prisma.book.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends bookCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Book.
     * @param {bookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     *
     **/
    delete<T extends bookDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bookDeleteArgs<ExtArgs>>,
    ): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Book.
     * @param {bookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends bookUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bookUpdateArgs<ExtArgs>>,
    ): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Books.
     * @param {bookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends bookDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends bookUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bookUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Book.
     * @param {bookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     **/
    upsert<T extends bookUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bookUpsertArgs<ExtArgs>>,
    ): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
     **/
    count<T extends bookCountArgs>(
      args?: Subset<T, bookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BookAggregateArgs>(
      args: Subset<T, BookAggregateArgs>,
    ): Prisma.PrismaPromise<GetBookAggregateType<T>>;

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends bookGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookGroupByArgs['orderBy'] }
        : { orderBy?: bookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, bookGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the book model
     */
    readonly fields: bookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    publisher<T extends publisherDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, publisherDefaultArgs<ExtArgs>>,
    ): Prisma__publisherClient<
      $Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    book_category<T extends book$book_categoryArgs<ExtArgs> = {}>(
      args?: Subset<T, book$book_categoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_categoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    review<T extends book$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, book$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the book model
   */
  interface bookFieldRefs {
    readonly id: FieldRef<'book', 'String'>;
    readonly title: FieldRef<'book', 'String'>;
    readonly author: FieldRef<'book', 'String'>;
    readonly published_date: FieldRef<'book', 'DateTime'>;
    readonly publisher_id: FieldRef<'book', 'String'>;
    readonly genre: FieldRef<'book', 'String'>;
    readonly language: FieldRef<'book', 'String'>;
    readonly page_count: FieldRef<'book', 'Int'>;
    readonly created_at: FieldRef<'book', 'DateTime'>;
    readonly updated_at: FieldRef<'book', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * book findUnique
   */
  export type bookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookInclude<ExtArgs> | null;
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput;
  };

  /**
   * book findUniqueOrThrow
   */
  export type bookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookInclude<ExtArgs> | null;
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput;
  };

  /**
   * book findFirst
   */
  export type bookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookInclude<ExtArgs> | null;
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[];
  };

  /**
   * book findFirstOrThrow
   */
  export type bookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookInclude<ExtArgs> | null;
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` books.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[];
  };

  /**
   * book findMany
   */
  export type bookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookInclude<ExtArgs> | null;
    /**
     * Filter, which books to fetch.
     */
    where?: bookWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing books.
     */
    cursor?: bookWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` books from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` books.
     */
    skip?: number;
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[];
  };

  /**
   * book create
   */
  export type bookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookInclude<ExtArgs> | null;
    /**
     * The data needed to create a book.
     */
    data: XOR<bookCreateInput, bookUncheckedCreateInput>;
  };

  /**
   * book createMany
   */
  export type bookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many books.
     */
    data: bookCreateManyInput | bookCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * book update
   */
  export type bookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookInclude<ExtArgs> | null;
    /**
     * The data needed to update a book.
     */
    data: XOR<bookUpdateInput, bookUncheckedUpdateInput>;
    /**
     * Choose, which book to update.
     */
    where: bookWhereUniqueInput;
  };

  /**
   * book updateMany
   */
  export type bookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update books.
     */
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyInput>;
    /**
     * Filter which books to update
     */
    where?: bookWhereInput;
  };

  /**
   * book upsert
   */
  export type bookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookInclude<ExtArgs> | null;
    /**
     * The filter to search for the book to update in case it exists.
     */
    where: bookWhereUniqueInput;
    /**
     * In case the book found by the `where` argument doesn't exist, create a new book with this data.
     */
    create: XOR<bookCreateInput, bookUncheckedCreateInput>;
    /**
     * In case the book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookUpdateInput, bookUncheckedUpdateInput>;
  };

  /**
   * book delete
   */
  export type bookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookInclude<ExtArgs> | null;
    /**
     * Filter which book to delete.
     */
    where: bookWhereUniqueInput;
  };

  /**
   * book deleteMany
   */
  export type bookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to delete
     */
    where?: bookWhereInput;
  };

  /**
   * book.book_category
   */
  export type book$book_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_category
     */
    select?: book_categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: book_categoryInclude<ExtArgs> | null;
    where?: book_categoryWhereInput;
    orderBy?: book_categoryOrderByWithRelationInput | book_categoryOrderByWithRelationInput[];
    cursor?: book_categoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Book_categoryScalarFieldEnum | Book_categoryScalarFieldEnum[];
  };

  /**
   * book.review
   */
  export type book$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * book without action
   */
  export type bookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookInclude<ExtArgs> | null;
  };

  /**
   * Model book_category
   */

  export type AggregateBook_category = {
    _count: Book_categoryCountAggregateOutputType | null;
    _min: Book_categoryMinAggregateOutputType | null;
    _max: Book_categoryMaxAggregateOutputType | null;
  };

  export type Book_categoryMinAggregateOutputType = {
    id: string | null;
    book_id: string | null;
    category_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Book_categoryMaxAggregateOutputType = {
    id: string | null;
    book_id: string | null;
    category_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Book_categoryCountAggregateOutputType = {
    id: number;
    book_id: number;
    category_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Book_categoryMinAggregateInputType = {
    id?: true;
    book_id?: true;
    category_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Book_categoryMaxAggregateInputType = {
    id?: true;
    book_id?: true;
    category_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Book_categoryCountAggregateInputType = {
    id?: true;
    book_id?: true;
    category_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Book_categoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book_category to aggregate.
     */
    where?: book_categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of book_categories to fetch.
     */
    orderBy?: book_categoryOrderByWithRelationInput | book_categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: book_categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` book_categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` book_categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned book_categories
     **/
    _count?: true | Book_categoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Book_categoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Book_categoryMaxAggregateInputType;
  };

  export type GetBook_categoryAggregateType<T extends Book_categoryAggregateArgs> = {
    [P in keyof T & keyof AggregateBook_category]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook_category[P]>
      : GetScalarType<T[P], AggregateBook_category[P]>;
  };

  export type book_categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: book_categoryWhereInput;
    orderBy?: book_categoryOrderByWithAggregationInput | book_categoryOrderByWithAggregationInput[];
    by: Book_categoryScalarFieldEnum[] | Book_categoryScalarFieldEnum;
    having?: book_categoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Book_categoryCountAggregateInputType | true;
    _min?: Book_categoryMinAggregateInputType;
    _max?: Book_categoryMaxAggregateInputType;
  };

  export type Book_categoryGroupByOutputType = {
    id: string;
    book_id: string;
    category_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Book_categoryCountAggregateOutputType | null;
    _min: Book_categoryMinAggregateOutputType | null;
    _max: Book_categoryMaxAggregateOutputType | null;
  };

  type GetBook_categoryGroupByPayload<T extends book_categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Book_categoryGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Book_categoryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Book_categoryGroupByOutputType[P]>
          : GetScalarType<T[P], Book_categoryGroupByOutputType[P]>;
      }
    >
  >;

  export type book_categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        book_id?: boolean;
        category_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        book?: boolean | bookDefaultArgs<ExtArgs>;
        category?: boolean | categoryDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['book_category']
    >;

  export type book_categorySelectScalar = {
    id?: boolean;
    book_id?: boolean;
    category_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type book_categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>;
    category?: boolean | categoryDefaultArgs<ExtArgs>;
  };

  export type $book_categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'book_category';
    objects: {
      book: Prisma.$bookPayload<ExtArgs>;
      category: Prisma.$categoryPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        book_id: string;
        category_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['book_category']
    >;
    composites: {};
  };

  type book_categoryGetPayload<S extends boolean | null | undefined | book_categoryDefaultArgs> = $Result.GetResult<
    Prisma.$book_categoryPayload,
    S
  >;

  type book_categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    book_categoryFindManyArgs,
    'select' | 'include'
  > & {
    select?: Book_categoryCountAggregateInputType | true;
  };

  export interface book_categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book_category']; meta: { name: 'book_category' } };
    /**
     * Find zero or one Book_category that matches the filter.
     * @param {book_categoryFindUniqueArgs} args - Arguments to find a Book_category
     * @example
     * // Get one Book_category
     * const book_category = await prisma.book_category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends book_categoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, book_categoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__book_categoryClient<
      $Result.GetResult<Prisma.$book_categoryPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Book_category that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {book_categoryFindUniqueOrThrowArgs} args - Arguments to find a Book_category
     * @example
     * // Get one Book_category
     * const book_category = await prisma.book_category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends book_categoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, book_categoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__book_categoryClient<
      $Result.GetResult<Prisma.$book_categoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Book_category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_categoryFindFirstArgs} args - Arguments to find a Book_category
     * @example
     * // Get one Book_category
     * const book_category = await prisma.book_category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends book_categoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, book_categoryFindFirstArgs<ExtArgs>>,
    ): Prisma__book_categoryClient<
      $Result.GetResult<Prisma.$book_categoryPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Book_category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_categoryFindFirstOrThrowArgs} args - Arguments to find a Book_category
     * @example
     * // Get one Book_category
     * const book_category = await prisma.book_category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends book_categoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, book_categoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__book_categoryClient<
      $Result.GetResult<Prisma.$book_categoryPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Book_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_categoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Book_categories
     * const book_categories = await prisma.book_category.findMany()
     *
     * // Get first 10 Book_categories
     * const book_categories = await prisma.book_category.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const book_categoryWithIdOnly = await prisma.book_category.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends book_categoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, book_categoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_categoryPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Book_category.
     * @param {book_categoryCreateArgs} args - Arguments to create a Book_category.
     * @example
     * // Create one Book_category
     * const Book_category = await prisma.book_category.create({
     *   data: {
     *     // ... data to create a Book_category
     *   }
     * })
     *
     **/
    create<T extends book_categoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, book_categoryCreateArgs<ExtArgs>>,
    ): Prisma__book_categoryClient<
      $Result.GetResult<Prisma.$book_categoryPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Book_categories.
     *     @param {book_categoryCreateManyArgs} args - Arguments to create many Book_categories.
     *     @example
     *     // Create many Book_categories
     *     const book_category = await prisma.book_category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends book_categoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, book_categoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Book_category.
     * @param {book_categoryDeleteArgs} args - Arguments to delete one Book_category.
     * @example
     * // Delete one Book_category
     * const Book_category = await prisma.book_category.delete({
     *   where: {
     *     // ... filter to delete one Book_category
     *   }
     * })
     *
     **/
    delete<T extends book_categoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, book_categoryDeleteArgs<ExtArgs>>,
    ): Prisma__book_categoryClient<
      $Result.GetResult<Prisma.$book_categoryPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Book_category.
     * @param {book_categoryUpdateArgs} args - Arguments to update one Book_category.
     * @example
     * // Update one Book_category
     * const book_category = await prisma.book_category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends book_categoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, book_categoryUpdateArgs<ExtArgs>>,
    ): Prisma__book_categoryClient<
      $Result.GetResult<Prisma.$book_categoryPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Book_categories.
     * @param {book_categoryDeleteManyArgs} args - Arguments to filter Book_categories to delete.
     * @example
     * // Delete a few Book_categories
     * const { count } = await prisma.book_category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends book_categoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, book_categoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Book_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Book_categories
     * const book_category = await prisma.book_category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends book_categoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, book_categoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Book_category.
     * @param {book_categoryUpsertArgs} args - Arguments to update or create a Book_category.
     * @example
     * // Update or create a Book_category
     * const book_category = await prisma.book_category.upsert({
     *   create: {
     *     // ... data to create a Book_category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book_category we want to update
     *   }
     * })
     **/
    upsert<T extends book_categoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, book_categoryUpsertArgs<ExtArgs>>,
    ): Prisma__book_categoryClient<
      $Result.GetResult<Prisma.$book_categoryPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Book_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_categoryCountArgs} args - Arguments to filter Book_categories to count.
     * @example
     * // Count the number of Book_categories
     * const count = await prisma.book_category.count({
     *   where: {
     *     // ... the filter for the Book_categories we want to count
     *   }
     * })
     **/
    count<T extends book_categoryCountArgs>(
      args?: Subset<T, book_categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Book_categoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Book_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Book_categoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Book_categoryAggregateArgs>(
      args: Subset<T, Book_categoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetBook_categoryAggregateType<T>>;

    /**
     * Group by Book_category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {book_categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends book_categoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: book_categoryGroupByArgs['orderBy'] }
        : { orderBy?: book_categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, book_categoryGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBook_categoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the book_category model
     */
    readonly fields: book_categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book_category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__book_categoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    book<T extends bookDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, bookDefaultArgs<ExtArgs>>,
    ): Prisma__bookClient<
      $Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    category<T extends categoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, categoryDefaultArgs<ExtArgs>>,
    ): Prisma__categoryClient<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the book_category model
   */
  interface book_categoryFieldRefs {
    readonly id: FieldRef<'book_category', 'String'>;
    readonly book_id: FieldRef<'book_category', 'String'>;
    readonly category_id: FieldRef<'book_category', 'String'>;
    readonly created_at: FieldRef<'book_category', 'DateTime'>;
    readonly updated_at: FieldRef<'book_category', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * book_category findUnique
   */
  export type book_categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_category
     */
    select?: book_categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: book_categoryInclude<ExtArgs> | null;
    /**
     * Filter, which book_category to fetch.
     */
    where: book_categoryWhereUniqueInput;
  };

  /**
   * book_category findUniqueOrThrow
   */
  export type book_categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_category
     */
    select?: book_categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: book_categoryInclude<ExtArgs> | null;
    /**
     * Filter, which book_category to fetch.
     */
    where: book_categoryWhereUniqueInput;
  };

  /**
   * book_category findFirst
   */
  export type book_categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_category
     */
    select?: book_categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: book_categoryInclude<ExtArgs> | null;
    /**
     * Filter, which book_category to fetch.
     */
    where?: book_categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of book_categories to fetch.
     */
    orderBy?: book_categoryOrderByWithRelationInput | book_categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for book_categories.
     */
    cursor?: book_categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` book_categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` book_categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of book_categories.
     */
    distinct?: Book_categoryScalarFieldEnum | Book_categoryScalarFieldEnum[];
  };

  /**
   * book_category findFirstOrThrow
   */
  export type book_categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_category
     */
    select?: book_categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: book_categoryInclude<ExtArgs> | null;
    /**
     * Filter, which book_category to fetch.
     */
    where?: book_categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of book_categories to fetch.
     */
    orderBy?: book_categoryOrderByWithRelationInput | book_categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for book_categories.
     */
    cursor?: book_categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` book_categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` book_categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of book_categories.
     */
    distinct?: Book_categoryScalarFieldEnum | Book_categoryScalarFieldEnum[];
  };

  /**
   * book_category findMany
   */
  export type book_categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_category
     */
    select?: book_categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: book_categoryInclude<ExtArgs> | null;
    /**
     * Filter, which book_categories to fetch.
     */
    where?: book_categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of book_categories to fetch.
     */
    orderBy?: book_categoryOrderByWithRelationInput | book_categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing book_categories.
     */
    cursor?: book_categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` book_categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` book_categories.
     */
    skip?: number;
    distinct?: Book_categoryScalarFieldEnum | Book_categoryScalarFieldEnum[];
  };

  /**
   * book_category create
   */
  export type book_categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_category
     */
    select?: book_categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: book_categoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a book_category.
     */
    data: XOR<book_categoryCreateInput, book_categoryUncheckedCreateInput>;
  };

  /**
   * book_category createMany
   */
  export type book_categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many book_categories.
     */
    data: book_categoryCreateManyInput | book_categoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * book_category update
   */
  export type book_categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_category
     */
    select?: book_categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: book_categoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a book_category.
     */
    data: XOR<book_categoryUpdateInput, book_categoryUncheckedUpdateInput>;
    /**
     * Choose, which book_category to update.
     */
    where: book_categoryWhereUniqueInput;
  };

  /**
   * book_category updateMany
   */
  export type book_categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update book_categories.
     */
    data: XOR<book_categoryUpdateManyMutationInput, book_categoryUncheckedUpdateManyInput>;
    /**
     * Filter which book_categories to update
     */
    where?: book_categoryWhereInput;
  };

  /**
   * book_category upsert
   */
  export type book_categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_category
     */
    select?: book_categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: book_categoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the book_category to update in case it exists.
     */
    where: book_categoryWhereUniqueInput;
    /**
     * In case the book_category found by the `where` argument doesn't exist, create a new book_category with this data.
     */
    create: XOR<book_categoryCreateInput, book_categoryUncheckedCreateInput>;
    /**
     * In case the book_category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<book_categoryUpdateInput, book_categoryUncheckedUpdateInput>;
  };

  /**
   * book_category delete
   */
  export type book_categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_category
     */
    select?: book_categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: book_categoryInclude<ExtArgs> | null;
    /**
     * Filter which book_category to delete.
     */
    where: book_categoryWhereUniqueInput;
  };

  /**
   * book_category deleteMany
   */
  export type book_categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book_categories to delete
     */
    where?: book_categoryWhereInput;
  };

  /**
   * book_category without action
   */
  export type book_categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_category
     */
    select?: book_categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: book_categoryInclude<ExtArgs> | null;
  };

  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  export type CategoryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    category_status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CategoryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    category_status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CategoryCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    category_status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    category_status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    category_status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    category_status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned categories
     **/
    _count?: true | CategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoryMaxAggregateInputType;
  };

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>;
  };

  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput;
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[];
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum;
    having?: categoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInputType | true;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
  };

  export type CategoryGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    category_status: string;
    created_at: Date;
    updated_at: Date;
    _count: CategoryCountAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CategoryGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
          : GetScalarType<T[P], CategoryGroupByOutputType[P]>;
      }
    >
  >;

  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        description?: boolean;
        category_status?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        book_category?: boolean | category$book_categoryArgs<ExtArgs>;
        _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['category']
    >;

  export type categorySelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    category_status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book_category?: boolean | category$book_categoryArgs<ExtArgs>;
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'category';
    objects: {
      book_category: Prisma.$book_categoryPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        category_status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['category']
    >;
    composites: {};
  };

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<
    Prisma.$categoryPayload,
    S
  >;

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    categoryFindManyArgs,
    'select' | 'include'
  > & {
    select?: CategoryCountAggregateInputType | true;
  };

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category']; meta: { name: 'category' } };
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends categoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__categoryClient<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__categoryClient<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends categoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>,
    ): Prisma__categoryClient<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__categoryClient<
      $Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends categoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     *
     **/
    create<T extends categoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, categoryCreateArgs<ExtArgs>>,
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Categories.
     *     @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends categoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     *
     **/
    delete<T extends categoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>,
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends categoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>,
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends categoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends categoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     **/
    upsert<T extends categoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>,
    ): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CategoryAggregateArgs>(
      args: Subset<T, CategoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetCategoryAggregateType<T>>;

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the category model
     */
    readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    book_category<T extends category$book_categoryArgs<ExtArgs> = {}>(
      args?: Subset<T, category$book_categoryArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$book_categoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<'category', 'String'>;
    readonly name: FieldRef<'category', 'String'>;
    readonly description: FieldRef<'category', 'String'>;
    readonly category_status: FieldRef<'category', 'String'>;
    readonly created_at: FieldRef<'category', 'DateTime'>;
    readonly updated_at: FieldRef<'category', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null;
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput;
  };

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null;
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput;
  };

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null;
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null;
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null;
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` categories.
     */
    skip?: number;
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>;
  };

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>;
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput;
  };

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>;
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput;
  };

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput;
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>;
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>;
  };

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null;
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput;
  };

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput;
  };

  /**
   * category.book_category
   */
  export type category$book_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book_category
     */
    select?: book_categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: book_categoryInclude<ExtArgs> | null;
    where?: book_categoryWhereInput;
    orderBy?: book_categoryOrderByWithRelationInput | book_categoryOrderByWithRelationInput[];
    cursor?: book_categoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Book_categoryScalarFieldEnum | Book_categoryScalarFieldEnum[];
  };

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: categoryInclude<ExtArgs> | null;
  };

  /**
   * Model publisher
   */

  export type AggregatePublisher = {
    _count: PublisherCountAggregateOutputType | null;
    _min: PublisherMinAggregateOutputType | null;
    _max: PublisherMaxAggregateOutputType | null;
  };

  export type PublisherMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    publisher_status: string | null;
    publisher_type: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type PublisherMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    publisher_status: string | null;
    publisher_type: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type PublisherCountAggregateOutputType = {
    id: number;
    description: number;
    publisher_status: number;
    publisher_type: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type PublisherMinAggregateInputType = {
    id?: true;
    description?: true;
    publisher_status?: true;
    publisher_type?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type PublisherMaxAggregateInputType = {
    id?: true;
    description?: true;
    publisher_status?: true;
    publisher_type?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type PublisherCountAggregateInputType = {
    id?: true;
    description?: true;
    publisher_status?: true;
    publisher_type?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type PublisherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publisher to aggregate.
     */
    where?: publisherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of publishers to fetch.
     */
    orderBy?: publisherOrderByWithRelationInput | publisherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: publisherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` publishers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` publishers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned publishers
     **/
    _count?: true | PublisherCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PublisherMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PublisherMaxAggregateInputType;
  };

  export type GetPublisherAggregateType<T extends PublisherAggregateArgs> = {
    [P in keyof T & keyof AggregatePublisher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublisher[P]>
      : GetScalarType<T[P], AggregatePublisher[P]>;
  };

  export type publisherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: publisherWhereInput;
    orderBy?: publisherOrderByWithAggregationInput | publisherOrderByWithAggregationInput[];
    by: PublisherScalarFieldEnum[] | PublisherScalarFieldEnum;
    having?: publisherScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PublisherCountAggregateInputType | true;
    _min?: PublisherMinAggregateInputType;
    _max?: PublisherMaxAggregateInputType;
  };

  export type PublisherGroupByOutputType = {
    id: string;
    description: string | null;
    publisher_status: string | null;
    publisher_type: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: PublisherCountAggregateOutputType | null;
    _min: PublisherMinAggregateOutputType | null;
    _max: PublisherMaxAggregateOutputType | null;
  };

  type GetPublisherGroupByPayload<T extends publisherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublisherGroupByOutputType, T['by']> & {
        [P in keyof T & keyof PublisherGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PublisherGroupByOutputType[P]>
          : GetScalarType<T[P], PublisherGroupByOutputType[P]>;
      }
    >
  >;

  export type publisherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        publisher_status?: boolean;
        publisher_type?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        book?: boolean | publisher$bookArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | PublisherCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['publisher']
    >;

  export type publisherSelectScalar = {
    id?: boolean;
    description?: boolean;
    publisher_status?: boolean;
    publisher_type?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type publisherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | publisher$bookArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | PublisherCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $publisherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'publisher';
    objects: {
      book: Prisma.$bookPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        publisher_status: string | null;
        publisher_type: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['publisher']
    >;
    composites: {};
  };

  type publisherGetPayload<S extends boolean | null | undefined | publisherDefaultArgs> = $Result.GetResult<
    Prisma.$publisherPayload,
    S
  >;

  type publisherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    publisherFindManyArgs,
    'select' | 'include'
  > & {
    select?: PublisherCountAggregateInputType | true;
  };

  export interface publisherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['publisher']; meta: { name: 'publisher' } };
    /**
     * Find zero or one Publisher that matches the filter.
     * @param {publisherFindUniqueArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends publisherFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, publisherFindUniqueArgs<ExtArgs>>,
    ): Prisma__publisherClient<
      $Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Publisher that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {publisherFindUniqueOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends publisherFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, publisherFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__publisherClient<
      $Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Publisher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publisherFindFirstArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends publisherFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, publisherFindFirstArgs<ExtArgs>>,
    ): Prisma__publisherClient<
      $Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Publisher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publisherFindFirstOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends publisherFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, publisherFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__publisherClient<
      $Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Publishers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publisherFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publishers
     * const publishers = await prisma.publisher.findMany()
     *
     * // Get first 10 Publishers
     * const publishers = await prisma.publisher.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const publisherWithIdOnly = await prisma.publisher.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends publisherFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, publisherFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Publisher.
     * @param {publisherCreateArgs} args - Arguments to create a Publisher.
     * @example
     * // Create one Publisher
     * const Publisher = await prisma.publisher.create({
     *   data: {
     *     // ... data to create a Publisher
     *   }
     * })
     *
     **/
    create<T extends publisherCreateArgs<ExtArgs>>(
      args: SelectSubset<T, publisherCreateArgs<ExtArgs>>,
    ): Prisma__publisherClient<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Publishers.
     *     @param {publisherCreateManyArgs} args - Arguments to create many Publishers.
     *     @example
     *     // Create many Publishers
     *     const publisher = await prisma.publisher.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends publisherCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, publisherCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Publisher.
     * @param {publisherDeleteArgs} args - Arguments to delete one Publisher.
     * @example
     * // Delete one Publisher
     * const Publisher = await prisma.publisher.delete({
     *   where: {
     *     // ... filter to delete one Publisher
     *   }
     * })
     *
     **/
    delete<T extends publisherDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, publisherDeleteArgs<ExtArgs>>,
    ): Prisma__publisherClient<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Publisher.
     * @param {publisherUpdateArgs} args - Arguments to update one Publisher.
     * @example
     * // Update one Publisher
     * const publisher = await prisma.publisher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends publisherUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, publisherUpdateArgs<ExtArgs>>,
    ): Prisma__publisherClient<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Publishers.
     * @param {publisherDeleteManyArgs} args - Arguments to filter Publishers to delete.
     * @example
     * // Delete a few Publishers
     * const { count } = await prisma.publisher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends publisherDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, publisherDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publisherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publishers
     * const publisher = await prisma.publisher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends publisherUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, publisherUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Publisher.
     * @param {publisherUpsertArgs} args - Arguments to update or create a Publisher.
     * @example
     * // Update or create a Publisher
     * const publisher = await prisma.publisher.upsert({
     *   create: {
     *     // ... data to create a Publisher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publisher we want to update
     *   }
     * })
     **/
    upsert<T extends publisherUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, publisherUpsertArgs<ExtArgs>>,
    ): Prisma__publisherClient<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publisherCountArgs} args - Arguments to filter Publishers to count.
     * @example
     * // Count the number of Publishers
     * const count = await prisma.publisher.count({
     *   where: {
     *     // ... the filter for the Publishers we want to count
     *   }
     * })
     **/
    count<T extends publisherCountArgs>(
      args?: Subset<T, publisherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublisherCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PublisherAggregateArgs>(
      args: Subset<T, PublisherAggregateArgs>,
    ): Prisma.PrismaPromise<GetPublisherAggregateType<T>>;

    /**
     * Group by Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {publisherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends publisherGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: publisherGroupByArgs['orderBy'] }
        : { orderBy?: publisherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, publisherGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetPublisherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the publisher model
     */
    readonly fields: publisherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for publisher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__publisherClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    book<T extends publisher$bookArgs<ExtArgs> = {}>(
      args?: Subset<T, publisher$bookArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the publisher model
   */
  interface publisherFieldRefs {
    readonly id: FieldRef<'publisher', 'String'>;
    readonly description: FieldRef<'publisher', 'String'>;
    readonly publisher_status: FieldRef<'publisher', 'String'>;
    readonly publisher_type: FieldRef<'publisher', 'String'>;
    readonly name: FieldRef<'publisher', 'String'>;
    readonly created_at: FieldRef<'publisher', 'DateTime'>;
    readonly updated_at: FieldRef<'publisher', 'DateTime'>;
    readonly user_id: FieldRef<'publisher', 'String'>;
    readonly tenant_id: FieldRef<'publisher', 'String'>;
  }

  // Custom InputTypes

  /**
   * publisher findUnique
   */
  export type publisherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publisherInclude<ExtArgs> | null;
    /**
     * Filter, which publisher to fetch.
     */
    where: publisherWhereUniqueInput;
  };

  /**
   * publisher findUniqueOrThrow
   */
  export type publisherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publisherInclude<ExtArgs> | null;
    /**
     * Filter, which publisher to fetch.
     */
    where: publisherWhereUniqueInput;
  };

  /**
   * publisher findFirst
   */
  export type publisherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publisherInclude<ExtArgs> | null;
    /**
     * Filter, which publisher to fetch.
     */
    where?: publisherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of publishers to fetch.
     */
    orderBy?: publisherOrderByWithRelationInput | publisherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for publishers.
     */
    cursor?: publisherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` publishers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` publishers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of publishers.
     */
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[];
  };

  /**
   * publisher findFirstOrThrow
   */
  export type publisherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publisherInclude<ExtArgs> | null;
    /**
     * Filter, which publisher to fetch.
     */
    where?: publisherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of publishers to fetch.
     */
    orderBy?: publisherOrderByWithRelationInput | publisherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for publishers.
     */
    cursor?: publisherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` publishers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` publishers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of publishers.
     */
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[];
  };

  /**
   * publisher findMany
   */
  export type publisherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publisherInclude<ExtArgs> | null;
    /**
     * Filter, which publishers to fetch.
     */
    where?: publisherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of publishers to fetch.
     */
    orderBy?: publisherOrderByWithRelationInput | publisherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing publishers.
     */
    cursor?: publisherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` publishers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` publishers.
     */
    skip?: number;
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[];
  };

  /**
   * publisher create
   */
  export type publisherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publisherInclude<ExtArgs> | null;
    /**
     * The data needed to create a publisher.
     */
    data: XOR<publisherCreateInput, publisherUncheckedCreateInput>;
  };

  /**
   * publisher createMany
   */
  export type publisherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many publishers.
     */
    data: publisherCreateManyInput | publisherCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * publisher update
   */
  export type publisherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publisherInclude<ExtArgs> | null;
    /**
     * The data needed to update a publisher.
     */
    data: XOR<publisherUpdateInput, publisherUncheckedUpdateInput>;
    /**
     * Choose, which publisher to update.
     */
    where: publisherWhereUniqueInput;
  };

  /**
   * publisher updateMany
   */
  export type publisherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update publishers.
     */
    data: XOR<publisherUpdateManyMutationInput, publisherUncheckedUpdateManyInput>;
    /**
     * Filter which publishers to update
     */
    where?: publisherWhereInput;
  };

  /**
   * publisher upsert
   */
  export type publisherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publisherInclude<ExtArgs> | null;
    /**
     * The filter to search for the publisher to update in case it exists.
     */
    where: publisherWhereUniqueInput;
    /**
     * In case the publisher found by the `where` argument doesn't exist, create a new publisher with this data.
     */
    create: XOR<publisherCreateInput, publisherUncheckedCreateInput>;
    /**
     * In case the publisher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<publisherUpdateInput, publisherUncheckedUpdateInput>;
  };

  /**
   * publisher delete
   */
  export type publisherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publisherInclude<ExtArgs> | null;
    /**
     * Filter which publisher to delete.
     */
    where: publisherWhereUniqueInput;
  };

  /**
   * publisher deleteMany
   */
  export type publisherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which publishers to delete
     */
    where?: publisherWhereInput;
  };

  /**
   * publisher.book
   */
  export type publisher$bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookInclude<ExtArgs> | null;
    where?: bookWhereInput;
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[];
    cursor?: bookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[];
  };

  /**
   * publisher without action
   */
  export type publisherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publisherInclude<ExtArgs> | null;
  };

  /**
   * Model review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  export type ReviewAvgAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewSumAggregateOutputType = {
    rating: number | null;
  };

  export type ReviewMinAggregateOutputType = {
    id: string | null;
    content: string | null;
    rating: number | null;
    user_id: string | null;
    book_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewMaxAggregateOutputType = {
    id: string | null;
    content: string | null;
    rating: number | null;
    user_id: string | null;
    book_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ReviewCountAggregateOutputType = {
    id: number;
    content: number;
    rating: number;
    user_id: number;
    book_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ReviewAvgAggregateInputType = {
    rating?: true;
  };

  export type ReviewSumAggregateInputType = {
    rating?: true;
  };

  export type ReviewMinAggregateInputType = {
    id?: true;
    content?: true;
    rating?: true;
    user_id?: true;
    book_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewMaxAggregateInputType = {
    id?: true;
    content?: true;
    rating?: true;
    user_id?: true;
    book_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ReviewCountAggregateInputType = {
    id?: true;
    content?: true;
    rating?: true;
    user_id?: true;
    book_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which review to aggregate.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned reviews
     **/
    _count?: true | ReviewCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ReviewAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ReviewSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ReviewMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ReviewMaxAggregateInputType;
  };

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
    [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>;
  };

  export type reviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithAggregationInput | reviewOrderByWithAggregationInput[];
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum;
    having?: reviewScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReviewCountAggregateInputType | true;
    _avg?: ReviewAvgAggregateInputType;
    _sum?: ReviewSumAggregateInputType;
    _min?: ReviewMinAggregateInputType;
    _max?: ReviewMaxAggregateInputType;
  };

  export type ReviewGroupByOutputType = {
    id: string;
    content: string;
    rating: number;
    user_id: string;
    book_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ReviewCountAggregateOutputType | null;
    _avg: ReviewAvgAggregateOutputType | null;
    _sum: ReviewSumAggregateOutputType | null;
    _min: ReviewMinAggregateOutputType | null;
    _max: ReviewMaxAggregateOutputType | null;
  };

  type GetReviewGroupByPayload<T extends reviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ReviewGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
          : GetScalarType<T[P], ReviewGroupByOutputType[P]>;
      }
    >
  >;

  export type reviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      content?: boolean;
      rating?: boolean;
      user_id?: boolean;
      book_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      book?: boolean | bookDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['review']
  >;

  export type reviewSelectScalar = {
    id?: boolean;
    content?: boolean;
    rating?: boolean;
    user_id?: boolean;
    book_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type reviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | bookDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $reviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'review';
    objects: {
      book: Prisma.$bookPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        content: string;
        rating: number;
        user_id: string;
        book_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['review']
    >;
    composites: {};
  };

  type reviewGetPayload<S extends boolean | null | undefined | reviewDefaultArgs> = $Result.GetResult<
    Prisma.$reviewPayload,
    S
  >;

  type reviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    reviewFindManyArgs,
    'select' | 'include'
  > & {
    select?: ReviewCountAggregateInputType | true;
  };

  export interface reviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['review']; meta: { name: 'review' } };
    /**
     * Find zero or one Review that matches the filter.
     * @param {reviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends reviewFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, reviewFindUniqueArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Review that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {reviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends reviewFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends reviewFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends reviewFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     *
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends reviewFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Review.
     * @param {reviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     *
     **/
    create<T extends reviewCreateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewCreateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Reviews.
     *     @param {reviewCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const review = await prisma.review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends reviewCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Review.
     * @param {reviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     *
     **/
    delete<T extends reviewDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, reviewDeleteArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Review.
     * @param {reviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends reviewUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Reviews.
     * @param {reviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends reviewDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, reviewDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends reviewUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Review.
     * @param {reviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     **/
    upsert<T extends reviewUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, reviewUpsertArgs<ExtArgs>>,
    ): Prisma__reviewClient<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
     **/
    count<T extends reviewCountArgs>(
      args?: Subset<T, reviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ReviewAggregateArgs>(
      args: Subset<T, ReviewAggregateArgs>,
    ): Prisma.PrismaPromise<GetReviewAggregateType<T>>;

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends reviewGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reviewGroupByArgs['orderBy'] }
        : { orderBy?: reviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, reviewGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the review model
     */
    readonly fields: reviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reviewClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    book<T extends bookDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, bookDefaultArgs<ExtArgs>>,
    ): Prisma__bookClient<
      $Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the review model
   */
  interface reviewFieldRefs {
    readonly id: FieldRef<'review', 'String'>;
    readonly content: FieldRef<'review', 'String'>;
    readonly rating: FieldRef<'review', 'Int'>;
    readonly user_id: FieldRef<'review', 'String'>;
    readonly book_id: FieldRef<'review', 'String'>;
    readonly created_at: FieldRef<'review', 'DateTime'>;
    readonly updated_at: FieldRef<'review', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * review findUnique
   */
  export type reviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findUniqueOrThrow
   */
  export type reviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review findFirst
   */
  export type reviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findFirstOrThrow
   */
  export type reviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which review to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review findMany
   */
  export type reviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter, which reviews to fetch.
     */
    where?: reviewWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of reviews to fetch.
     */
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing reviews.
     */
    cursor?: reviewWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` reviews from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` reviews.
     */
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * review create
   */
  export type reviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to create a review.
     */
    data: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
  };

  /**
   * review createMany
   */
  export type reviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reviews.
     */
    data: reviewCreateManyInput | reviewCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * review update
   */
  export type reviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The data needed to update a review.
     */
    data: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
    /**
     * Choose, which review to update.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review updateMany
   */
  export type reviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reviews.
     */
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyInput>;
    /**
     * Filter which reviews to update
     */
    where?: reviewWhereInput;
  };

  /**
   * review upsert
   */
  export type reviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * The filter to search for the review to update in case it exists.
     */
    where: reviewWhereUniqueInput;
    /**
     * In case the review found by the `where` argument doesn't exist, create a new review with this data.
     */
    create: XOR<reviewCreateInput, reviewUncheckedCreateInput>;
    /**
     * In case the review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reviewUpdateInput, reviewUncheckedUpdateInput>;
  };

  /**
   * review delete
   */
  export type reviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    /**
     * Filter which review to delete.
     */
    where: reviewWhereUniqueInput;
  };

  /**
   * review deleteMany
   */
  export type reviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reviews to delete
     */
    where?: reviewWhereInput;
  };

  /**
   * review without action
   */
  export type reviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      publisher?: boolean | user$publisherArgs<ExtArgs>;
      review?: boolean | user$reviewArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | user$publisherArgs<ExtArgs>;
    review?: boolean | user$reviewArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      publisher: Prisma.$publisherPayload<ExtArgs>[];
      review: Prisma.$reviewPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    publisher<T extends user$publisherArgs<ExtArgs> = {}>(
      args?: Subset<T, user$publisherArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$publisherPayload<ExtArgs>, T, 'findMany'> | Null>;

    review<T extends user$reviewArgs<ExtArgs> = {}>(
      args?: Subset<T, user$reviewArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reviewPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.publisher
   */
  export type user$publisherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the publisher
     */
    select?: publisherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: publisherInclude<ExtArgs> | null;
    where?: publisherWhereInput;
    orderBy?: publisherOrderByWithRelationInput | publisherOrderByWithRelationInput[];
    cursor?: publisherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[];
  };

  /**
   * user.review
   */
  export type user$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the review
     */
    select?: reviewSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: reviewInclude<ExtArgs> | null;
    where?: reviewWhereInput;
    orderBy?: reviewOrderByWithRelationInput | reviewOrderByWithRelationInput[];
    cursor?: reviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const BookScalarFieldEnum: {
    id: 'id';
    title: 'title';
    author: 'author';
    published_date: 'published_date';
    publisher_id: 'publisher_id';
    genre: 'genre';
    language: 'language';
    page_count: 'page_count';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum];

  export const Book_categoryScalarFieldEnum: {
    id: 'id';
    book_id: 'book_id';
    category_id: 'category_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Book_categoryScalarFieldEnum =
    (typeof Book_categoryScalarFieldEnum)[keyof typeof Book_categoryScalarFieldEnum];

  export const CategoryScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    category_status: 'category_status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];

  export const PublisherScalarFieldEnum: {
    id: 'id';
    description: 'description';
    publisher_status: 'publisher_status';
    publisher_type: 'publisher_type';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type PublisherScalarFieldEnum = (typeof PublisherScalarFieldEnum)[keyof typeof PublisherScalarFieldEnum];

  export const ReviewScalarFieldEnum: {
    id: 'id';
    content: 'content';
    rating: 'rating';
    user_id: 'user_id';
    book_id: 'book_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type bookWhereInput = {
    AND?: bookWhereInput | bookWhereInput[];
    OR?: bookWhereInput[];
    NOT?: bookWhereInput | bookWhereInput[];
    id?: UuidFilter<'book'> | string;
    title?: StringFilter<'book'> | string;
    author?: StringFilter<'book'> | string;
    published_date?: DateTimeNullableFilter<'book'> | Date | string | null;
    publisher_id?: UuidFilter<'book'> | string;
    genre?: StringFilter<'book'> | string;
    language?: StringFilter<'book'> | string;
    page_count?: IntFilter<'book'> | number;
    created_at?: DateTimeFilter<'book'> | Date | string;
    updated_at?: DateTimeFilter<'book'> | Date | string;
    publisher?: XOR<PublisherRelationFilter, publisherWhereInput>;
    book_category?: Book_categoryListRelationFilter;
    review?: ReviewListRelationFilter;
  };

  export type bookOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    author?: SortOrder;
    published_date?: SortOrderInput | SortOrder;
    publisher_id?: SortOrder;
    genre?: SortOrder;
    language?: SortOrder;
    page_count?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    publisher?: publisherOrderByWithRelationInput;
    book_category?: book_categoryOrderByRelationAggregateInput;
    review?: reviewOrderByRelationAggregateInput;
  };

  export type bookWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: bookWhereInput | bookWhereInput[];
      OR?: bookWhereInput[];
      NOT?: bookWhereInput | bookWhereInput[];
      title?: StringFilter<'book'> | string;
      author?: StringFilter<'book'> | string;
      published_date?: DateTimeNullableFilter<'book'> | Date | string | null;
      publisher_id?: UuidFilter<'book'> | string;
      genre?: StringFilter<'book'> | string;
      language?: StringFilter<'book'> | string;
      page_count?: IntFilter<'book'> | number;
      created_at?: DateTimeFilter<'book'> | Date | string;
      updated_at?: DateTimeFilter<'book'> | Date | string;
      publisher?: XOR<PublisherRelationFilter, publisherWhereInput>;
      book_category?: Book_categoryListRelationFilter;
      review?: ReviewListRelationFilter;
    },
    'id'
  >;

  export type bookOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    author?: SortOrder;
    published_date?: SortOrderInput | SortOrder;
    publisher_id?: SortOrder;
    genre?: SortOrder;
    language?: SortOrder;
    page_count?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: bookCountOrderByAggregateInput;
    _avg?: bookAvgOrderByAggregateInput;
    _max?: bookMaxOrderByAggregateInput;
    _min?: bookMinOrderByAggregateInput;
    _sum?: bookSumOrderByAggregateInput;
  };

  export type bookScalarWhereWithAggregatesInput = {
    AND?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[];
    OR?: bookScalarWhereWithAggregatesInput[];
    NOT?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'book'> | string;
    title?: StringWithAggregatesFilter<'book'> | string;
    author?: StringWithAggregatesFilter<'book'> | string;
    published_date?: DateTimeNullableWithAggregatesFilter<'book'> | Date | string | null;
    publisher_id?: UuidWithAggregatesFilter<'book'> | string;
    genre?: StringWithAggregatesFilter<'book'> | string;
    language?: StringWithAggregatesFilter<'book'> | string;
    page_count?: IntWithAggregatesFilter<'book'> | number;
    created_at?: DateTimeWithAggregatesFilter<'book'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'book'> | Date | string;
  };

  export type book_categoryWhereInput = {
    AND?: book_categoryWhereInput | book_categoryWhereInput[];
    OR?: book_categoryWhereInput[];
    NOT?: book_categoryWhereInput | book_categoryWhereInput[];
    id?: UuidFilter<'book_category'> | string;
    book_id?: UuidFilter<'book_category'> | string;
    category_id?: UuidFilter<'book_category'> | string;
    created_at?: DateTimeFilter<'book_category'> | Date | string;
    updated_at?: DateTimeFilter<'book_category'> | Date | string;
    book?: XOR<BookRelationFilter, bookWhereInput>;
    category?: XOR<CategoryRelationFilter, categoryWhereInput>;
  };

  export type book_categoryOrderByWithRelationInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    category_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    book?: bookOrderByWithRelationInput;
    category?: categoryOrderByWithRelationInput;
  };

  export type book_categoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: book_categoryWhereInput | book_categoryWhereInput[];
      OR?: book_categoryWhereInput[];
      NOT?: book_categoryWhereInput | book_categoryWhereInput[];
      book_id?: UuidFilter<'book_category'> | string;
      category_id?: UuidFilter<'book_category'> | string;
      created_at?: DateTimeFilter<'book_category'> | Date | string;
      updated_at?: DateTimeFilter<'book_category'> | Date | string;
      book?: XOR<BookRelationFilter, bookWhereInput>;
      category?: XOR<CategoryRelationFilter, categoryWhereInput>;
    },
    'id'
  >;

  export type book_categoryOrderByWithAggregationInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    category_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: book_categoryCountOrderByAggregateInput;
    _max?: book_categoryMaxOrderByAggregateInput;
    _min?: book_categoryMinOrderByAggregateInput;
  };

  export type book_categoryScalarWhereWithAggregatesInput = {
    AND?: book_categoryScalarWhereWithAggregatesInput | book_categoryScalarWhereWithAggregatesInput[];
    OR?: book_categoryScalarWhereWithAggregatesInput[];
    NOT?: book_categoryScalarWhereWithAggregatesInput | book_categoryScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'book_category'> | string;
    book_id?: UuidWithAggregatesFilter<'book_category'> | string;
    category_id?: UuidWithAggregatesFilter<'book_category'> | string;
    created_at?: DateTimeWithAggregatesFilter<'book_category'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'book_category'> | Date | string;
  };

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[];
    OR?: categoryWhereInput[];
    NOT?: categoryWhereInput | categoryWhereInput[];
    id?: UuidFilter<'category'> | string;
    name?: StringFilter<'category'> | string;
    description?: StringNullableFilter<'category'> | string | null;
    category_status?: StringFilter<'category'> | string;
    created_at?: DateTimeFilter<'category'> | Date | string;
    updated_at?: DateTimeFilter<'category'> | Date | string;
    book_category?: Book_categoryListRelationFilter;
  };

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    category_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    book_category?: book_categoryOrderByRelationAggregateInput;
  };

  export type categoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: categoryWhereInput | categoryWhereInput[];
      OR?: categoryWhereInput[];
      NOT?: categoryWhereInput | categoryWhereInput[];
      name?: StringFilter<'category'> | string;
      description?: StringNullableFilter<'category'> | string | null;
      category_status?: StringFilter<'category'> | string;
      created_at?: DateTimeFilter<'category'> | Date | string;
      updated_at?: DateTimeFilter<'category'> | Date | string;
      book_category?: Book_categoryListRelationFilter;
    },
    'id'
  >;

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    category_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: categoryCountOrderByAggregateInput;
    _max?: categoryMaxOrderByAggregateInput;
    _min?: categoryMinOrderByAggregateInput;
  };

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[];
    OR?: categoryScalarWhereWithAggregatesInput[];
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'category'> | string;
    name?: StringWithAggregatesFilter<'category'> | string;
    description?: StringNullableWithAggregatesFilter<'category'> | string | null;
    category_status?: StringWithAggregatesFilter<'category'> | string;
    created_at?: DateTimeWithAggregatesFilter<'category'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'category'> | Date | string;
  };

  export type publisherWhereInput = {
    AND?: publisherWhereInput | publisherWhereInput[];
    OR?: publisherWhereInput[];
    NOT?: publisherWhereInput | publisherWhereInput[];
    id?: UuidFilter<'publisher'> | string;
    description?: StringNullableFilter<'publisher'> | string | null;
    publisher_status?: StringNullableFilter<'publisher'> | string | null;
    publisher_type?: StringNullableFilter<'publisher'> | string | null;
    name?: StringFilter<'publisher'> | string;
    created_at?: DateTimeFilter<'publisher'> | Date | string;
    updated_at?: DateTimeFilter<'publisher'> | Date | string;
    user_id?: UuidFilter<'publisher'> | string;
    tenant_id?: StringFilter<'publisher'> | string;
    book?: BookListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type publisherOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    publisher_status?: SortOrderInput | SortOrder;
    publisher_type?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    book?: bookOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type publisherWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: publisherWhereInput | publisherWhereInput[];
      OR?: publisherWhereInput[];
      NOT?: publisherWhereInput | publisherWhereInput[];
      description?: StringNullableFilter<'publisher'> | string | null;
      publisher_status?: StringNullableFilter<'publisher'> | string | null;
      publisher_type?: StringNullableFilter<'publisher'> | string | null;
      name?: StringFilter<'publisher'> | string;
      created_at?: DateTimeFilter<'publisher'> | Date | string;
      updated_at?: DateTimeFilter<'publisher'> | Date | string;
      user_id?: UuidFilter<'publisher'> | string;
      tenant_id?: StringFilter<'publisher'> | string;
      book?: BookListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type publisherOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    publisher_status?: SortOrderInput | SortOrder;
    publisher_type?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: publisherCountOrderByAggregateInput;
    _max?: publisherMaxOrderByAggregateInput;
    _min?: publisherMinOrderByAggregateInput;
  };

  export type publisherScalarWhereWithAggregatesInput = {
    AND?: publisherScalarWhereWithAggregatesInput | publisherScalarWhereWithAggregatesInput[];
    OR?: publisherScalarWhereWithAggregatesInput[];
    NOT?: publisherScalarWhereWithAggregatesInput | publisherScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'publisher'> | string;
    description?: StringNullableWithAggregatesFilter<'publisher'> | string | null;
    publisher_status?: StringNullableWithAggregatesFilter<'publisher'> | string | null;
    publisher_type?: StringNullableWithAggregatesFilter<'publisher'> | string | null;
    name?: StringWithAggregatesFilter<'publisher'> | string;
    created_at?: DateTimeWithAggregatesFilter<'publisher'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'publisher'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'publisher'> | string;
    tenant_id?: StringWithAggregatesFilter<'publisher'> | string;
  };

  export type reviewWhereInput = {
    AND?: reviewWhereInput | reviewWhereInput[];
    OR?: reviewWhereInput[];
    NOT?: reviewWhereInput | reviewWhereInput[];
    id?: UuidFilter<'review'> | string;
    content?: StringFilter<'review'> | string;
    rating?: IntFilter<'review'> | number;
    user_id?: UuidFilter<'review'> | string;
    book_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
    book?: XOR<BookRelationFilter, bookWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type reviewOrderByWithRelationInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    user_id?: SortOrder;
    book_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    book?: bookOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type reviewWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: reviewWhereInput | reviewWhereInput[];
      OR?: reviewWhereInput[];
      NOT?: reviewWhereInput | reviewWhereInput[];
      content?: StringFilter<'review'> | string;
      rating?: IntFilter<'review'> | number;
      user_id?: UuidFilter<'review'> | string;
      book_id?: UuidFilter<'review'> | string;
      created_at?: DateTimeFilter<'review'> | Date | string;
      updated_at?: DateTimeFilter<'review'> | Date | string;
      book?: XOR<BookRelationFilter, bookWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type reviewOrderByWithAggregationInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    user_id?: SortOrder;
    book_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: reviewCountOrderByAggregateInput;
    _avg?: reviewAvgOrderByAggregateInput;
    _max?: reviewMaxOrderByAggregateInput;
    _min?: reviewMinOrderByAggregateInput;
    _sum?: reviewSumOrderByAggregateInput;
  };

  export type reviewScalarWhereWithAggregatesInput = {
    AND?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    OR?: reviewScalarWhereWithAggregatesInput[];
    NOT?: reviewScalarWhereWithAggregatesInput | reviewScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'review'> | string;
    content?: StringWithAggregatesFilter<'review'> | string;
    rating?: IntWithAggregatesFilter<'review'> | number;
    user_id?: UuidWithAggregatesFilter<'review'> | string;
    book_id?: UuidWithAggregatesFilter<'review'> | string;
    created_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'review'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    publisher?: PublisherListRelationFilter;
    review?: ReviewListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    publisher?: publisherOrderByRelationAggregateInput;
    review?: reviewOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      publisher?: PublisherListRelationFilter;
      review?: ReviewListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type bookCreateInput = {
    id?: string;
    title: string;
    author: string;
    published_date?: Date | string | null;
    genre: string;
    language: string;
    page_count: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    publisher: publisherCreateNestedOneWithoutBookInput;
    book_category?: book_categoryCreateNestedManyWithoutBookInput;
    review?: reviewCreateNestedManyWithoutBookInput;
  };

  export type bookUncheckedCreateInput = {
    id?: string;
    title: string;
    author: string;
    published_date?: Date | string | null;
    publisher_id: string;
    genre: string;
    language: string;
    page_count: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    book_category?: book_categoryUncheckedCreateNestedManyWithoutBookInput;
    review?: reviewUncheckedCreateNestedManyWithoutBookInput;
  };

  export type bookUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    page_count?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publisher?: publisherUpdateOneRequiredWithoutBookNestedInput;
    book_category?: book_categoryUpdateManyWithoutBookNestedInput;
    review?: reviewUpdateManyWithoutBookNestedInput;
  };

  export type bookUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher_id?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    page_count?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    book_category?: book_categoryUncheckedUpdateManyWithoutBookNestedInput;
    review?: reviewUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type bookCreateManyInput = {
    id?: string;
    title: string;
    author: string;
    published_date?: Date | string | null;
    publisher_id: string;
    genre: string;
    language: string;
    page_count: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    page_count?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher_id?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    page_count?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type book_categoryCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    book: bookCreateNestedOneWithoutBook_categoryInput;
    category: categoryCreateNestedOneWithoutBook_categoryInput;
  };

  export type book_categoryUncheckedCreateInput = {
    id?: string;
    book_id: string;
    category_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type book_categoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    book?: bookUpdateOneRequiredWithoutBook_categoryNestedInput;
    category?: categoryUpdateOneRequiredWithoutBook_categoryNestedInput;
  };

  export type book_categoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    category_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type book_categoryCreateManyInput = {
    id?: string;
    book_id: string;
    category_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type book_categoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type book_categoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    category_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type categoryCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    category_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    book_category?: book_categoryCreateNestedManyWithoutCategoryInput;
  };

  export type categoryUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    category_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    book_category?: book_categoryUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type categoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    category_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    book_category?: book_categoryUpdateManyWithoutCategoryNestedInput;
  };

  export type categoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    category_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    book_category?: book_categoryUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type categoryCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    category_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type categoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    category_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type categoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    category_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publisherCreateInput = {
    id?: string;
    description?: string | null;
    publisher_status?: string | null;
    publisher_type?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    book?: bookCreateNestedManyWithoutPublisherInput;
    user: userCreateNestedOneWithoutPublisherInput;
  };

  export type publisherUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    publisher_status?: string | null;
    publisher_type?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    book?: bookUncheckedCreateNestedManyWithoutPublisherInput;
  };

  export type publisherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_status?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    book?: bookUpdateManyWithoutPublisherNestedInput;
    user?: userUpdateOneRequiredWithoutPublisherNestedInput;
  };

  export type publisherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_status?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    book?: bookUncheckedUpdateManyWithoutPublisherNestedInput;
  };

  export type publisherCreateManyInput = {
    id?: string;
    description?: string | null;
    publisher_status?: string | null;
    publisher_type?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type publisherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_status?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type publisherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_status?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type reviewCreateInput = {
    id?: string;
    content: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    book: bookCreateNestedOneWithoutReviewInput;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateInput = {
    id?: string;
    content: string;
    rating: number;
    user_id: string;
    book_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    book?: bookUpdateOneRequiredWithoutReviewNestedInput;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewCreateManyInput = {
    id?: string;
    content: string;
    rating: number;
    user_id: string;
    book_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    publisher?: publisherCreateNestedManyWithoutUserInput;
    review?: reviewCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    publisher?: publisherUncheckedCreateNestedManyWithoutUserInput;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publisher?: publisherUpdateManyWithoutUserNestedInput;
    review?: reviewUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publisher?: publisherUncheckedUpdateManyWithoutUserNestedInput;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type PublisherRelationFilter = {
    is?: publisherWhereInput;
    isNot?: publisherWhereInput;
  };

  export type Book_categoryListRelationFilter = {
    every?: book_categoryWhereInput;
    some?: book_categoryWhereInput;
    none?: book_categoryWhereInput;
  };

  export type ReviewListRelationFilter = {
    every?: reviewWhereInput;
    some?: reviewWhereInput;
    none?: reviewWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type book_categoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type reviewOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type bookCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    author?: SortOrder;
    published_date?: SortOrder;
    publisher_id?: SortOrder;
    genre?: SortOrder;
    language?: SortOrder;
    page_count?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookAvgOrderByAggregateInput = {
    page_count?: SortOrder;
  };

  export type bookMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    author?: SortOrder;
    published_date?: SortOrder;
    publisher_id?: SortOrder;
    genre?: SortOrder;
    language?: SortOrder;
    page_count?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    author?: SortOrder;
    published_date?: SortOrder;
    publisher_id?: SortOrder;
    genre?: SortOrder;
    language?: SortOrder;
    page_count?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type bookSumOrderByAggregateInput = {
    page_count?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type BookRelationFilter = {
    is?: bookWhereInput;
    isNot?: bookWhereInput;
  };

  export type CategoryRelationFilter = {
    is?: categoryWhereInput;
    isNot?: categoryWhereInput;
  };

  export type book_categoryCountOrderByAggregateInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    category_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type book_categoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    category_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type book_categoryMinOrderByAggregateInput = {
    id?: SortOrder;
    book_id?: SortOrder;
    category_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    category_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    category_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    category_status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type BookListRelationFilter = {
    every?: bookWhereInput;
    some?: bookWhereInput;
    none?: bookWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type bookOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type publisherCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    publisher_status?: SortOrder;
    publisher_type?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type publisherMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    publisher_status?: SortOrder;
    publisher_type?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type publisherMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    publisher_status?: SortOrder;
    publisher_type?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type reviewCountOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    user_id?: SortOrder;
    book_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewAvgOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type reviewMaxOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    user_id?: SortOrder;
    book_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewMinOrderByAggregateInput = {
    id?: SortOrder;
    content?: SortOrder;
    rating?: SortOrder;
    user_id?: SortOrder;
    book_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type reviewSumOrderByAggregateInput = {
    rating?: SortOrder;
  };

  export type PublisherListRelationFilter = {
    every?: publisherWhereInput;
    some?: publisherWhereInput;
    none?: publisherWhereInput;
  };

  export type publisherOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type publisherCreateNestedOneWithoutBookInput = {
    create?: XOR<publisherCreateWithoutBookInput, publisherUncheckedCreateWithoutBookInput>;
    connectOrCreate?: publisherCreateOrConnectWithoutBookInput;
    connect?: publisherWhereUniqueInput;
  };

  export type book_categoryCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<book_categoryCreateWithoutBookInput, book_categoryUncheckedCreateWithoutBookInput>
      | book_categoryCreateWithoutBookInput[]
      | book_categoryUncheckedCreateWithoutBookInput[];
    connectOrCreate?: book_categoryCreateOrConnectWithoutBookInput | book_categoryCreateOrConnectWithoutBookInput[];
    createMany?: book_categoryCreateManyBookInputEnvelope;
    connect?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
  };

  export type reviewCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<reviewCreateWithoutBookInput, reviewUncheckedCreateWithoutBookInput>
      | reviewCreateWithoutBookInput[]
      | reviewUncheckedCreateWithoutBookInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutBookInput | reviewCreateOrConnectWithoutBookInput[];
    createMany?: reviewCreateManyBookInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type book_categoryUncheckedCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<book_categoryCreateWithoutBookInput, book_categoryUncheckedCreateWithoutBookInput>
      | book_categoryCreateWithoutBookInput[]
      | book_categoryUncheckedCreateWithoutBookInput[];
    connectOrCreate?: book_categoryCreateOrConnectWithoutBookInput | book_categoryCreateOrConnectWithoutBookInput[];
    createMany?: book_categoryCreateManyBookInputEnvelope;
    connect?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutBookInput = {
    create?:
      | XOR<reviewCreateWithoutBookInput, reviewUncheckedCreateWithoutBookInput>
      | reviewCreateWithoutBookInput[]
      | reviewUncheckedCreateWithoutBookInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutBookInput | reviewCreateOrConnectWithoutBookInput[];
    createMany?: reviewCreateManyBookInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type publisherUpdateOneRequiredWithoutBookNestedInput = {
    create?: XOR<publisherCreateWithoutBookInput, publisherUncheckedCreateWithoutBookInput>;
    connectOrCreate?: publisherCreateOrConnectWithoutBookInput;
    upsert?: publisherUpsertWithoutBookInput;
    connect?: publisherWhereUniqueInput;
    update?: XOR<
      XOR<publisherUpdateToOneWithWhereWithoutBookInput, publisherUpdateWithoutBookInput>,
      publisherUncheckedUpdateWithoutBookInput
    >;
  };

  export type book_categoryUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<book_categoryCreateWithoutBookInput, book_categoryUncheckedCreateWithoutBookInput>
      | book_categoryCreateWithoutBookInput[]
      | book_categoryUncheckedCreateWithoutBookInput[];
    connectOrCreate?: book_categoryCreateOrConnectWithoutBookInput | book_categoryCreateOrConnectWithoutBookInput[];
    upsert?: book_categoryUpsertWithWhereUniqueWithoutBookInput | book_categoryUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: book_categoryCreateManyBookInputEnvelope;
    set?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    disconnect?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    delete?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    connect?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    update?: book_categoryUpdateWithWhereUniqueWithoutBookInput | book_categoryUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?: book_categoryUpdateManyWithWhereWithoutBookInput | book_categoryUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: book_categoryScalarWhereInput | book_categoryScalarWhereInput[];
  };

  export type reviewUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<reviewCreateWithoutBookInput, reviewUncheckedCreateWithoutBookInput>
      | reviewCreateWithoutBookInput[]
      | reviewUncheckedCreateWithoutBookInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutBookInput | reviewCreateOrConnectWithoutBookInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutBookInput | reviewUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: reviewCreateManyBookInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutBookInput | reviewUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutBookInput | reviewUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type book_categoryUncheckedUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<book_categoryCreateWithoutBookInput, book_categoryUncheckedCreateWithoutBookInput>
      | book_categoryCreateWithoutBookInput[]
      | book_categoryUncheckedCreateWithoutBookInput[];
    connectOrCreate?: book_categoryCreateOrConnectWithoutBookInput | book_categoryCreateOrConnectWithoutBookInput[];
    upsert?: book_categoryUpsertWithWhereUniqueWithoutBookInput | book_categoryUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: book_categoryCreateManyBookInputEnvelope;
    set?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    disconnect?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    delete?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    connect?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    update?: book_categoryUpdateWithWhereUniqueWithoutBookInput | book_categoryUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?: book_categoryUpdateManyWithWhereWithoutBookInput | book_categoryUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: book_categoryScalarWhereInput | book_categoryScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutBookNestedInput = {
    create?:
      | XOR<reviewCreateWithoutBookInput, reviewUncheckedCreateWithoutBookInput>
      | reviewCreateWithoutBookInput[]
      | reviewUncheckedCreateWithoutBookInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutBookInput | reviewCreateOrConnectWithoutBookInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutBookInput | reviewUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: reviewCreateManyBookInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutBookInput | reviewUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutBookInput | reviewUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type bookCreateNestedOneWithoutBook_categoryInput = {
    create?: XOR<bookCreateWithoutBook_categoryInput, bookUncheckedCreateWithoutBook_categoryInput>;
    connectOrCreate?: bookCreateOrConnectWithoutBook_categoryInput;
    connect?: bookWhereUniqueInput;
  };

  export type categoryCreateNestedOneWithoutBook_categoryInput = {
    create?: XOR<categoryCreateWithoutBook_categoryInput, categoryUncheckedCreateWithoutBook_categoryInput>;
    connectOrCreate?: categoryCreateOrConnectWithoutBook_categoryInput;
    connect?: categoryWhereUniqueInput;
  };

  export type bookUpdateOneRequiredWithoutBook_categoryNestedInput = {
    create?: XOR<bookCreateWithoutBook_categoryInput, bookUncheckedCreateWithoutBook_categoryInput>;
    connectOrCreate?: bookCreateOrConnectWithoutBook_categoryInput;
    upsert?: bookUpsertWithoutBook_categoryInput;
    connect?: bookWhereUniqueInput;
    update?: XOR<
      XOR<bookUpdateToOneWithWhereWithoutBook_categoryInput, bookUpdateWithoutBook_categoryInput>,
      bookUncheckedUpdateWithoutBook_categoryInput
    >;
  };

  export type categoryUpdateOneRequiredWithoutBook_categoryNestedInput = {
    create?: XOR<categoryCreateWithoutBook_categoryInput, categoryUncheckedCreateWithoutBook_categoryInput>;
    connectOrCreate?: categoryCreateOrConnectWithoutBook_categoryInput;
    upsert?: categoryUpsertWithoutBook_categoryInput;
    connect?: categoryWhereUniqueInput;
    update?: XOR<
      XOR<categoryUpdateToOneWithWhereWithoutBook_categoryInput, categoryUpdateWithoutBook_categoryInput>,
      categoryUncheckedUpdateWithoutBook_categoryInput
    >;
  };

  export type book_categoryCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<book_categoryCreateWithoutCategoryInput, book_categoryUncheckedCreateWithoutCategoryInput>
      | book_categoryCreateWithoutCategoryInput[]
      | book_categoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | book_categoryCreateOrConnectWithoutCategoryInput
      | book_categoryCreateOrConnectWithoutCategoryInput[];
    createMany?: book_categoryCreateManyCategoryInputEnvelope;
    connect?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
  };

  export type book_categoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<book_categoryCreateWithoutCategoryInput, book_categoryUncheckedCreateWithoutCategoryInput>
      | book_categoryCreateWithoutCategoryInput[]
      | book_categoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | book_categoryCreateOrConnectWithoutCategoryInput
      | book_categoryCreateOrConnectWithoutCategoryInput[];
    createMany?: book_categoryCreateManyCategoryInputEnvelope;
    connect?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type book_categoryUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<book_categoryCreateWithoutCategoryInput, book_categoryUncheckedCreateWithoutCategoryInput>
      | book_categoryCreateWithoutCategoryInput[]
      | book_categoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | book_categoryCreateOrConnectWithoutCategoryInput
      | book_categoryCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | book_categoryUpsertWithWhereUniqueWithoutCategoryInput
      | book_categoryUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: book_categoryCreateManyCategoryInputEnvelope;
    set?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    disconnect?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    delete?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    connect?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    update?:
      | book_categoryUpdateWithWhereUniqueWithoutCategoryInput
      | book_categoryUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | book_categoryUpdateManyWithWhereWithoutCategoryInput
      | book_categoryUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: book_categoryScalarWhereInput | book_categoryScalarWhereInput[];
  };

  export type book_categoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<book_categoryCreateWithoutCategoryInput, book_categoryUncheckedCreateWithoutCategoryInput>
      | book_categoryCreateWithoutCategoryInput[]
      | book_categoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | book_categoryCreateOrConnectWithoutCategoryInput
      | book_categoryCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | book_categoryUpsertWithWhereUniqueWithoutCategoryInput
      | book_categoryUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: book_categoryCreateManyCategoryInputEnvelope;
    set?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    disconnect?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    delete?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    connect?: book_categoryWhereUniqueInput | book_categoryWhereUniqueInput[];
    update?:
      | book_categoryUpdateWithWhereUniqueWithoutCategoryInput
      | book_categoryUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | book_categoryUpdateManyWithWhereWithoutCategoryInput
      | book_categoryUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: book_categoryScalarWhereInput | book_categoryScalarWhereInput[];
  };

  export type bookCreateNestedManyWithoutPublisherInput = {
    create?:
      | XOR<bookCreateWithoutPublisherInput, bookUncheckedCreateWithoutPublisherInput>
      | bookCreateWithoutPublisherInput[]
      | bookUncheckedCreateWithoutPublisherInput[];
    connectOrCreate?: bookCreateOrConnectWithoutPublisherInput | bookCreateOrConnectWithoutPublisherInput[];
    createMany?: bookCreateManyPublisherInputEnvelope;
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutPublisherInput = {
    create?: XOR<userCreateWithoutPublisherInput, userUncheckedCreateWithoutPublisherInput>;
    connectOrCreate?: userCreateOrConnectWithoutPublisherInput;
    connect?: userWhereUniqueInput;
  };

  export type bookUncheckedCreateNestedManyWithoutPublisherInput = {
    create?:
      | XOR<bookCreateWithoutPublisherInput, bookUncheckedCreateWithoutPublisherInput>
      | bookCreateWithoutPublisherInput[]
      | bookUncheckedCreateWithoutPublisherInput[];
    connectOrCreate?: bookCreateOrConnectWithoutPublisherInput | bookCreateOrConnectWithoutPublisherInput[];
    createMany?: bookCreateManyPublisherInputEnvelope;
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[];
  };

  export type bookUpdateManyWithoutPublisherNestedInput = {
    create?:
      | XOR<bookCreateWithoutPublisherInput, bookUncheckedCreateWithoutPublisherInput>
      | bookCreateWithoutPublisherInput[]
      | bookUncheckedCreateWithoutPublisherInput[];
    connectOrCreate?: bookCreateOrConnectWithoutPublisherInput | bookCreateOrConnectWithoutPublisherInput[];
    upsert?: bookUpsertWithWhereUniqueWithoutPublisherInput | bookUpsertWithWhereUniqueWithoutPublisherInput[];
    createMany?: bookCreateManyPublisherInputEnvelope;
    set?: bookWhereUniqueInput | bookWhereUniqueInput[];
    disconnect?: bookWhereUniqueInput | bookWhereUniqueInput[];
    delete?: bookWhereUniqueInput | bookWhereUniqueInput[];
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[];
    update?: bookUpdateWithWhereUniqueWithoutPublisherInput | bookUpdateWithWhereUniqueWithoutPublisherInput[];
    updateMany?: bookUpdateManyWithWhereWithoutPublisherInput | bookUpdateManyWithWhereWithoutPublisherInput[];
    deleteMany?: bookScalarWhereInput | bookScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutPublisherNestedInput = {
    create?: XOR<userCreateWithoutPublisherInput, userUncheckedCreateWithoutPublisherInput>;
    connectOrCreate?: userCreateOrConnectWithoutPublisherInput;
    upsert?: userUpsertWithoutPublisherInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutPublisherInput, userUpdateWithoutPublisherInput>,
      userUncheckedUpdateWithoutPublisherInput
    >;
  };

  export type bookUncheckedUpdateManyWithoutPublisherNestedInput = {
    create?:
      | XOR<bookCreateWithoutPublisherInput, bookUncheckedCreateWithoutPublisherInput>
      | bookCreateWithoutPublisherInput[]
      | bookUncheckedCreateWithoutPublisherInput[];
    connectOrCreate?: bookCreateOrConnectWithoutPublisherInput | bookCreateOrConnectWithoutPublisherInput[];
    upsert?: bookUpsertWithWhereUniqueWithoutPublisherInput | bookUpsertWithWhereUniqueWithoutPublisherInput[];
    createMany?: bookCreateManyPublisherInputEnvelope;
    set?: bookWhereUniqueInput | bookWhereUniqueInput[];
    disconnect?: bookWhereUniqueInput | bookWhereUniqueInput[];
    delete?: bookWhereUniqueInput | bookWhereUniqueInput[];
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[];
    update?: bookUpdateWithWhereUniqueWithoutPublisherInput | bookUpdateWithWhereUniqueWithoutPublisherInput[];
    updateMany?: bookUpdateManyWithWhereWithoutPublisherInput | bookUpdateManyWithWhereWithoutPublisherInput[];
    deleteMany?: bookScalarWhereInput | bookScalarWhereInput[];
  };

  export type bookCreateNestedOneWithoutReviewInput = {
    create?: XOR<bookCreateWithoutReviewInput, bookUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: bookCreateOrConnectWithoutReviewInput;
    connect?: bookWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutReviewInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;
    connect?: userWhereUniqueInput;
  };

  export type bookUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<bookCreateWithoutReviewInput, bookUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: bookCreateOrConnectWithoutReviewInput;
    upsert?: bookUpsertWithoutReviewInput;
    connect?: bookWhereUniqueInput;
    update?: XOR<
      XOR<bookUpdateToOneWithWhereWithoutReviewInput, bookUpdateWithoutReviewInput>,
      bookUncheckedUpdateWithoutReviewInput
    >;
  };

  export type userUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    connectOrCreate?: userCreateOrConnectWithoutReviewInput;
    upsert?: userUpsertWithoutReviewInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutReviewInput, userUpdateWithoutReviewInput>,
      userUncheckedUpdateWithoutReviewInput
    >;
  };

  export type publisherCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<publisherCreateWithoutUserInput, publisherUncheckedCreateWithoutUserInput>
      | publisherCreateWithoutUserInput[]
      | publisherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: publisherCreateOrConnectWithoutUserInput | publisherCreateOrConnectWithoutUserInput[];
    createMany?: publisherCreateManyUserInputEnvelope;
    connect?: publisherWhereUniqueInput | publisherWhereUniqueInput[];
  };

  export type reviewCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type publisherUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<publisherCreateWithoutUserInput, publisherUncheckedCreateWithoutUserInput>
      | publisherCreateWithoutUserInput[]
      | publisherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: publisherCreateOrConnectWithoutUserInput | publisherCreateOrConnectWithoutUserInput[];
    createMany?: publisherCreateManyUserInputEnvelope;
    connect?: publisherWhereUniqueInput | publisherWhereUniqueInput[];
  };

  export type reviewUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
  };

  export type publisherUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<publisherCreateWithoutUserInput, publisherUncheckedCreateWithoutUserInput>
      | publisherCreateWithoutUserInput[]
      | publisherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: publisherCreateOrConnectWithoutUserInput | publisherCreateOrConnectWithoutUserInput[];
    upsert?: publisherUpsertWithWhereUniqueWithoutUserInput | publisherUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: publisherCreateManyUserInputEnvelope;
    set?: publisherWhereUniqueInput | publisherWhereUniqueInput[];
    disconnect?: publisherWhereUniqueInput | publisherWhereUniqueInput[];
    delete?: publisherWhereUniqueInput | publisherWhereUniqueInput[];
    connect?: publisherWhereUniqueInput | publisherWhereUniqueInput[];
    update?: publisherUpdateWithWhereUniqueWithoutUserInput | publisherUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: publisherUpdateManyWithWhereWithoutUserInput | publisherUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: publisherScalarWhereInput | publisherScalarWhereInput[];
  };

  export type reviewUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type publisherUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<publisherCreateWithoutUserInput, publisherUncheckedCreateWithoutUserInput>
      | publisherCreateWithoutUserInput[]
      | publisherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: publisherCreateOrConnectWithoutUserInput | publisherCreateOrConnectWithoutUserInput[];
    upsert?: publisherUpsertWithWhereUniqueWithoutUserInput | publisherUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: publisherCreateManyUserInputEnvelope;
    set?: publisherWhereUniqueInput | publisherWhereUniqueInput[];
    disconnect?: publisherWhereUniqueInput | publisherWhereUniqueInput[];
    delete?: publisherWhereUniqueInput | publisherWhereUniqueInput[];
    connect?: publisherWhereUniqueInput | publisherWhereUniqueInput[];
    update?: publisherUpdateWithWhereUniqueWithoutUserInput | publisherUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: publisherUpdateManyWithWhereWithoutUserInput | publisherUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: publisherScalarWhereInput | publisherScalarWhereInput[];
  };

  export type reviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>
      | reviewCreateWithoutUserInput[]
      | reviewUncheckedCreateWithoutUserInput[];
    connectOrCreate?: reviewCreateOrConnectWithoutUserInput | reviewCreateOrConnectWithoutUserInput[];
    upsert?: reviewUpsertWithWhereUniqueWithoutUserInput | reviewUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: reviewCreateManyUserInputEnvelope;
    set?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    disconnect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    delete?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    connect?: reviewWhereUniqueInput | reviewWhereUniqueInput[];
    update?: reviewUpdateWithWhereUniqueWithoutUserInput | reviewUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: reviewUpdateManyWithWhereWithoutUserInput | reviewUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: reviewScalarWhereInput | reviewScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type publisherCreateWithoutBookInput = {
    id?: string;
    description?: string | null;
    publisher_status?: string | null;
    publisher_type?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutPublisherInput;
  };

  export type publisherUncheckedCreateWithoutBookInput = {
    id?: string;
    description?: string | null;
    publisher_status?: string | null;
    publisher_type?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type publisherCreateOrConnectWithoutBookInput = {
    where: publisherWhereUniqueInput;
    create: XOR<publisherCreateWithoutBookInput, publisherUncheckedCreateWithoutBookInput>;
  };

  export type book_categoryCreateWithoutBookInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    category: categoryCreateNestedOneWithoutBook_categoryInput;
  };

  export type book_categoryUncheckedCreateWithoutBookInput = {
    id?: string;
    category_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type book_categoryCreateOrConnectWithoutBookInput = {
    where: book_categoryWhereUniqueInput;
    create: XOR<book_categoryCreateWithoutBookInput, book_categoryUncheckedCreateWithoutBookInput>;
  };

  export type book_categoryCreateManyBookInputEnvelope = {
    data: book_categoryCreateManyBookInput | book_categoryCreateManyBookInput[];
    skipDuplicates?: boolean;
  };

  export type reviewCreateWithoutBookInput = {
    id?: string;
    content: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutBookInput = {
    id?: string;
    content: string;
    rating: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutBookInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutBookInput, reviewUncheckedCreateWithoutBookInput>;
  };

  export type reviewCreateManyBookInputEnvelope = {
    data: reviewCreateManyBookInput | reviewCreateManyBookInput[];
    skipDuplicates?: boolean;
  };

  export type publisherUpsertWithoutBookInput = {
    update: XOR<publisherUpdateWithoutBookInput, publisherUncheckedUpdateWithoutBookInput>;
    create: XOR<publisherCreateWithoutBookInput, publisherUncheckedCreateWithoutBookInput>;
    where?: publisherWhereInput;
  };

  export type publisherUpdateToOneWithWhereWithoutBookInput = {
    where?: publisherWhereInput;
    data: XOR<publisherUpdateWithoutBookInput, publisherUncheckedUpdateWithoutBookInput>;
  };

  export type publisherUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_status?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutPublisherNestedInput;
  };

  export type publisherUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_status?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type book_categoryUpsertWithWhereUniqueWithoutBookInput = {
    where: book_categoryWhereUniqueInput;
    update: XOR<book_categoryUpdateWithoutBookInput, book_categoryUncheckedUpdateWithoutBookInput>;
    create: XOR<book_categoryCreateWithoutBookInput, book_categoryUncheckedCreateWithoutBookInput>;
  };

  export type book_categoryUpdateWithWhereUniqueWithoutBookInput = {
    where: book_categoryWhereUniqueInput;
    data: XOR<book_categoryUpdateWithoutBookInput, book_categoryUncheckedUpdateWithoutBookInput>;
  };

  export type book_categoryUpdateManyWithWhereWithoutBookInput = {
    where: book_categoryScalarWhereInput;
    data: XOR<book_categoryUpdateManyMutationInput, book_categoryUncheckedUpdateManyWithoutBookInput>;
  };

  export type book_categoryScalarWhereInput = {
    AND?: book_categoryScalarWhereInput | book_categoryScalarWhereInput[];
    OR?: book_categoryScalarWhereInput[];
    NOT?: book_categoryScalarWhereInput | book_categoryScalarWhereInput[];
    id?: UuidFilter<'book_category'> | string;
    book_id?: UuidFilter<'book_category'> | string;
    category_id?: UuidFilter<'book_category'> | string;
    created_at?: DateTimeFilter<'book_category'> | Date | string;
    updated_at?: DateTimeFilter<'book_category'> | Date | string;
  };

  export type reviewUpsertWithWhereUniqueWithoutBookInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutBookInput, reviewUncheckedUpdateWithoutBookInput>;
    create: XOR<reviewCreateWithoutBookInput, reviewUncheckedCreateWithoutBookInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutBookInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutBookInput, reviewUncheckedUpdateWithoutBookInput>;
  };

  export type reviewUpdateManyWithWhereWithoutBookInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutBookInput>;
  };

  export type reviewScalarWhereInput = {
    AND?: reviewScalarWhereInput | reviewScalarWhereInput[];
    OR?: reviewScalarWhereInput[];
    NOT?: reviewScalarWhereInput | reviewScalarWhereInput[];
    id?: UuidFilter<'review'> | string;
    content?: StringFilter<'review'> | string;
    rating?: IntFilter<'review'> | number;
    user_id?: UuidFilter<'review'> | string;
    book_id?: UuidFilter<'review'> | string;
    created_at?: DateTimeFilter<'review'> | Date | string;
    updated_at?: DateTimeFilter<'review'> | Date | string;
  };

  export type bookCreateWithoutBook_categoryInput = {
    id?: string;
    title: string;
    author: string;
    published_date?: Date | string | null;
    genre: string;
    language: string;
    page_count: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    publisher: publisherCreateNestedOneWithoutBookInput;
    review?: reviewCreateNestedManyWithoutBookInput;
  };

  export type bookUncheckedCreateWithoutBook_categoryInput = {
    id?: string;
    title: string;
    author: string;
    published_date?: Date | string | null;
    publisher_id: string;
    genre: string;
    language: string;
    page_count: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutBookInput;
  };

  export type bookCreateOrConnectWithoutBook_categoryInput = {
    where: bookWhereUniqueInput;
    create: XOR<bookCreateWithoutBook_categoryInput, bookUncheckedCreateWithoutBook_categoryInput>;
  };

  export type categoryCreateWithoutBook_categoryInput = {
    id?: string;
    name: string;
    description?: string | null;
    category_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type categoryUncheckedCreateWithoutBook_categoryInput = {
    id?: string;
    name: string;
    description?: string | null;
    category_status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type categoryCreateOrConnectWithoutBook_categoryInput = {
    where: categoryWhereUniqueInput;
    create: XOR<categoryCreateWithoutBook_categoryInput, categoryUncheckedCreateWithoutBook_categoryInput>;
  };

  export type bookUpsertWithoutBook_categoryInput = {
    update: XOR<bookUpdateWithoutBook_categoryInput, bookUncheckedUpdateWithoutBook_categoryInput>;
    create: XOR<bookCreateWithoutBook_categoryInput, bookUncheckedCreateWithoutBook_categoryInput>;
    where?: bookWhereInput;
  };

  export type bookUpdateToOneWithWhereWithoutBook_categoryInput = {
    where?: bookWhereInput;
    data: XOR<bookUpdateWithoutBook_categoryInput, bookUncheckedUpdateWithoutBook_categoryInput>;
  };

  export type bookUpdateWithoutBook_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    page_count?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publisher?: publisherUpdateOneRequiredWithoutBookNestedInput;
    review?: reviewUpdateManyWithoutBookNestedInput;
  };

  export type bookUncheckedUpdateWithoutBook_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher_id?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    page_count?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type categoryUpsertWithoutBook_categoryInput = {
    update: XOR<categoryUpdateWithoutBook_categoryInput, categoryUncheckedUpdateWithoutBook_categoryInput>;
    create: XOR<categoryCreateWithoutBook_categoryInput, categoryUncheckedCreateWithoutBook_categoryInput>;
    where?: categoryWhereInput;
  };

  export type categoryUpdateToOneWithWhereWithoutBook_categoryInput = {
    where?: categoryWhereInput;
    data: XOR<categoryUpdateWithoutBook_categoryInput, categoryUncheckedUpdateWithoutBook_categoryInput>;
  };

  export type categoryUpdateWithoutBook_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    category_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type categoryUncheckedUpdateWithoutBook_categoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    category_status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type book_categoryCreateWithoutCategoryInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    book: bookCreateNestedOneWithoutBook_categoryInput;
  };

  export type book_categoryUncheckedCreateWithoutCategoryInput = {
    id?: string;
    book_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type book_categoryCreateOrConnectWithoutCategoryInput = {
    where: book_categoryWhereUniqueInput;
    create: XOR<book_categoryCreateWithoutCategoryInput, book_categoryUncheckedCreateWithoutCategoryInput>;
  };

  export type book_categoryCreateManyCategoryInputEnvelope = {
    data: book_categoryCreateManyCategoryInput | book_categoryCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type book_categoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: book_categoryWhereUniqueInput;
    update: XOR<book_categoryUpdateWithoutCategoryInput, book_categoryUncheckedUpdateWithoutCategoryInput>;
    create: XOR<book_categoryCreateWithoutCategoryInput, book_categoryUncheckedCreateWithoutCategoryInput>;
  };

  export type book_categoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: book_categoryWhereUniqueInput;
    data: XOR<book_categoryUpdateWithoutCategoryInput, book_categoryUncheckedUpdateWithoutCategoryInput>;
  };

  export type book_categoryUpdateManyWithWhereWithoutCategoryInput = {
    where: book_categoryScalarWhereInput;
    data: XOR<book_categoryUpdateManyMutationInput, book_categoryUncheckedUpdateManyWithoutCategoryInput>;
  };

  export type bookCreateWithoutPublisherInput = {
    id?: string;
    title: string;
    author: string;
    published_date?: Date | string | null;
    genre: string;
    language: string;
    page_count: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    book_category?: book_categoryCreateNestedManyWithoutBookInput;
    review?: reviewCreateNestedManyWithoutBookInput;
  };

  export type bookUncheckedCreateWithoutPublisherInput = {
    id?: string;
    title: string;
    author: string;
    published_date?: Date | string | null;
    genre: string;
    language: string;
    page_count: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    book_category?: book_categoryUncheckedCreateNestedManyWithoutBookInput;
    review?: reviewUncheckedCreateNestedManyWithoutBookInput;
  };

  export type bookCreateOrConnectWithoutPublisherInput = {
    where: bookWhereUniqueInput;
    create: XOR<bookCreateWithoutPublisherInput, bookUncheckedCreateWithoutPublisherInput>;
  };

  export type bookCreateManyPublisherInputEnvelope = {
    data: bookCreateManyPublisherInput | bookCreateManyPublisherInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutPublisherInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutPublisherInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    review?: reviewUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutPublisherInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutPublisherInput, userUncheckedCreateWithoutPublisherInput>;
  };

  export type bookUpsertWithWhereUniqueWithoutPublisherInput = {
    where: bookWhereUniqueInput;
    update: XOR<bookUpdateWithoutPublisherInput, bookUncheckedUpdateWithoutPublisherInput>;
    create: XOR<bookCreateWithoutPublisherInput, bookUncheckedCreateWithoutPublisherInput>;
  };

  export type bookUpdateWithWhereUniqueWithoutPublisherInput = {
    where: bookWhereUniqueInput;
    data: XOR<bookUpdateWithoutPublisherInput, bookUncheckedUpdateWithoutPublisherInput>;
  };

  export type bookUpdateManyWithWhereWithoutPublisherInput = {
    where: bookScalarWhereInput;
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyWithoutPublisherInput>;
  };

  export type bookScalarWhereInput = {
    AND?: bookScalarWhereInput | bookScalarWhereInput[];
    OR?: bookScalarWhereInput[];
    NOT?: bookScalarWhereInput | bookScalarWhereInput[];
    id?: UuidFilter<'book'> | string;
    title?: StringFilter<'book'> | string;
    author?: StringFilter<'book'> | string;
    published_date?: DateTimeNullableFilter<'book'> | Date | string | null;
    publisher_id?: UuidFilter<'book'> | string;
    genre?: StringFilter<'book'> | string;
    language?: StringFilter<'book'> | string;
    page_count?: IntFilter<'book'> | number;
    created_at?: DateTimeFilter<'book'> | Date | string;
    updated_at?: DateTimeFilter<'book'> | Date | string;
  };

  export type userUpsertWithoutPublisherInput = {
    update: XOR<userUpdateWithoutPublisherInput, userUncheckedUpdateWithoutPublisherInput>;
    create: XOR<userCreateWithoutPublisherInput, userUncheckedCreateWithoutPublisherInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutPublisherInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutPublisherInput, userUncheckedUpdateWithoutPublisherInput>;
  };

  export type userUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    review?: reviewUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type bookCreateWithoutReviewInput = {
    id?: string;
    title: string;
    author: string;
    published_date?: Date | string | null;
    genre: string;
    language: string;
    page_count: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    publisher: publisherCreateNestedOneWithoutBookInput;
    book_category?: book_categoryCreateNestedManyWithoutBookInput;
  };

  export type bookUncheckedCreateWithoutReviewInput = {
    id?: string;
    title: string;
    author: string;
    published_date?: Date | string | null;
    publisher_id: string;
    genre: string;
    language: string;
    page_count: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    book_category?: book_categoryUncheckedCreateNestedManyWithoutBookInput;
  };

  export type bookCreateOrConnectWithoutReviewInput = {
    where: bookWhereUniqueInput;
    create: XOR<bookCreateWithoutReviewInput, bookUncheckedCreateWithoutReviewInput>;
  };

  export type userCreateWithoutReviewInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    publisher?: publisherCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutReviewInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    publisher?: publisherUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutReviewInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
  };

  export type bookUpsertWithoutReviewInput = {
    update: XOR<bookUpdateWithoutReviewInput, bookUncheckedUpdateWithoutReviewInput>;
    create: XOR<bookCreateWithoutReviewInput, bookUncheckedCreateWithoutReviewInput>;
    where?: bookWhereInput;
  };

  export type bookUpdateToOneWithWhereWithoutReviewInput = {
    where?: bookWhereInput;
    data: XOR<bookUpdateWithoutReviewInput, bookUncheckedUpdateWithoutReviewInput>;
  };

  export type bookUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    page_count?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publisher?: publisherUpdateOneRequiredWithoutBookNestedInput;
    book_category?: book_categoryUpdateManyWithoutBookNestedInput;
  };

  export type bookUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    publisher_id?: StringFieldUpdateOperationsInput | string;
    genre?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    page_count?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    book_category?: book_categoryUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type userUpsertWithoutReviewInput = {
    update: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>;
    create: XOR<userCreateWithoutReviewInput, userUncheckedCreateWithoutReviewInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutReviewInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutReviewInput, userUncheckedUpdateWithoutReviewInput>;
  };

  export type userUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publisher?: publisherUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    publisher?: publisherUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type publisherCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    publisher_status?: string | null;
    publisher_type?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    book?: bookCreateNestedManyWithoutPublisherInput;
  };

  export type publisherUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    publisher_status?: string | null;
    publisher_type?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    book?: bookUncheckedCreateNestedManyWithoutPublisherInput;
  };

  export type publisherCreateOrConnectWithoutUserInput = {
    where: publisherWhereUniqueInput;
    create: XOR<publisherCreateWithoutUserInput, publisherUncheckedCreateWithoutUserInput>;
  };

  export type publisherCreateManyUserInputEnvelope = {
    data: publisherCreateManyUserInput | publisherCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type reviewCreateWithoutUserInput = {
    id?: string;
    content: string;
    rating: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    book: bookCreateNestedOneWithoutReviewInput;
  };

  export type reviewUncheckedCreateWithoutUserInput = {
    id?: string;
    content: string;
    rating: number;
    book_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateOrConnectWithoutUserInput = {
    where: reviewWhereUniqueInput;
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>;
  };

  export type reviewCreateManyUserInputEnvelope = {
    data: reviewCreateManyUserInput | reviewCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type publisherUpsertWithWhereUniqueWithoutUserInput = {
    where: publisherWhereUniqueInput;
    update: XOR<publisherUpdateWithoutUserInput, publisherUncheckedUpdateWithoutUserInput>;
    create: XOR<publisherCreateWithoutUserInput, publisherUncheckedCreateWithoutUserInput>;
  };

  export type publisherUpdateWithWhereUniqueWithoutUserInput = {
    where: publisherWhereUniqueInput;
    data: XOR<publisherUpdateWithoutUserInput, publisherUncheckedUpdateWithoutUserInput>;
  };

  export type publisherUpdateManyWithWhereWithoutUserInput = {
    where: publisherScalarWhereInput;
    data: XOR<publisherUpdateManyMutationInput, publisherUncheckedUpdateManyWithoutUserInput>;
  };

  export type publisherScalarWhereInput = {
    AND?: publisherScalarWhereInput | publisherScalarWhereInput[];
    OR?: publisherScalarWhereInput[];
    NOT?: publisherScalarWhereInput | publisherScalarWhereInput[];
    id?: UuidFilter<'publisher'> | string;
    description?: StringNullableFilter<'publisher'> | string | null;
    publisher_status?: StringNullableFilter<'publisher'> | string | null;
    publisher_type?: StringNullableFilter<'publisher'> | string | null;
    name?: StringFilter<'publisher'> | string;
    created_at?: DateTimeFilter<'publisher'> | Date | string;
    updated_at?: DateTimeFilter<'publisher'> | Date | string;
    user_id?: UuidFilter<'publisher'> | string;
    tenant_id?: StringFilter<'publisher'> | string;
  };

  export type reviewUpsertWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput;
    update: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>;
    create: XOR<reviewCreateWithoutUserInput, reviewUncheckedCreateWithoutUserInput>;
  };

  export type reviewUpdateWithWhereUniqueWithoutUserInput = {
    where: reviewWhereUniqueInput;
    data: XOR<reviewUpdateWithoutUserInput, reviewUncheckedUpdateWithoutUserInput>;
  };

  export type reviewUpdateManyWithWhereWithoutUserInput = {
    where: reviewScalarWhereInput;
    data: XOR<reviewUpdateManyMutationInput, reviewUncheckedUpdateManyWithoutUserInput>;
  };

  export type book_categoryCreateManyBookInput = {
    id?: string;
    category_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type reviewCreateManyBookInput = {
    id?: string;
    content: string;
    rating: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type book_categoryUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    category?: categoryUpdateOneRequiredWithoutBook_categoryNestedInput;
  };

  export type book_categoryUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    category_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type book_categoryUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    category_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutBookInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type book_categoryCreateManyCategoryInput = {
    id?: string;
    book_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type book_categoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    book?: bookUpdateOneRequiredWithoutBook_categoryNestedInput;
  };

  export type book_categoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type book_categoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    book_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type bookCreateManyPublisherInput = {
    id?: string;
    title: string;
    author: string;
    published_date?: Date | string | null;
    genre: string;
    language: string;
    page_count: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type bookUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    page_count?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    book_category?: book_categoryUpdateManyWithoutBookNestedInput;
    review?: reviewUpdateManyWithoutBookNestedInput;
  };

  export type bookUncheckedUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    page_count?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    book_category?: book_categoryUncheckedUpdateManyWithoutBookNestedInput;
    review?: reviewUncheckedUpdateManyWithoutBookNestedInput;
  };

  export type bookUncheckedUpdateManyWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    author?: StringFieldUpdateOperationsInput | string;
    published_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    genre?: StringFieldUpdateOperationsInput | string;
    language?: StringFieldUpdateOperationsInput | string;
    page_count?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type publisherCreateManyUserInput = {
    id?: string;
    description?: string | null;
    publisher_status?: string | null;
    publisher_type?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type reviewCreateManyUserInput = {
    id?: string;
    content: string;
    rating: number;
    book_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type publisherUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_status?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    book?: bookUpdateManyWithoutPublisherNestedInput;
  };

  export type publisherUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_status?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    book?: bookUncheckedUpdateManyWithoutPublisherNestedInput;
  };

  export type publisherUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_status?: NullableStringFieldUpdateOperationsInput | string | null;
    publisher_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type reviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    book?: bookUpdateOneRequiredWithoutReviewNestedInput;
  };

  export type reviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    book_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type reviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    content?: StringFieldUpdateOperationsInput | string;
    rating?: IntFieldUpdateOperationsInput | number;
    book_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use BookCountOutputTypeDefaultArgs instead
   */
  export type BookCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    BookCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
   */
  export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CategoryCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use PublisherCountOutputTypeDefaultArgs instead
   */
  export type PublisherCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    PublisherCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use bookDefaultArgs instead
   */
  export type bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = bookDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use book_categoryDefaultArgs instead
   */
  export type book_categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    book_categoryDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use categoryDefaultArgs instead
   */
  export type categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    categoryDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use publisherDefaultArgs instead
   */
  export type publisherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    publisherDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use reviewDefaultArgs instead
   */
  export type reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    reviewDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
