
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Weather
 * 
 */
export type Weather = $Result.DefaultSelection<Prisma.$WeatherPayload>
/**
 * Model Diary
 * 
 */
export type Diary = $Result.DefaultSelection<Prisma.$DiaryPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Recommendation
 * 
 */
export type Recommendation = $Result.DefaultSelection<Prisma.$RecommendationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Weathers
 * const weathers = await prisma.weather.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Weathers
   * const weathers = await prisma.weather.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.weather`: Exposes CRUD operations for the **Weather** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Weathers
    * const weathers = await prisma.weather.findMany()
    * ```
    */
  get weather(): Prisma.WeatherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diary`: Exposes CRUD operations for the **Diary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diaries
    * const diaries = await prisma.diary.findMany()
    * ```
    */
  get diary(): Prisma.DiaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recommendation`: Exposes CRUD operations for the **Recommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommendations
    * const recommendations = await prisma.recommendation.findMany()
    * ```
    */
  get recommendation(): Prisma.RecommendationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Weather: 'Weather',
    Diary: 'Diary',
    Comment: 'Comment',
    Recommendation: 'Recommendation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "weather" | "diary" | "comment" | "recommendation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Weather: {
        payload: Prisma.$WeatherPayload<ExtArgs>
        fields: Prisma.WeatherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeatherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeatherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          findFirst: {
            args: Prisma.WeatherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeatherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          findMany: {
            args: Prisma.WeatherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>[]
          }
          create: {
            args: Prisma.WeatherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          createMany: {
            args: Prisma.WeatherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeatherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>[]
          }
          delete: {
            args: Prisma.WeatherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          update: {
            args: Prisma.WeatherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          deleteMany: {
            args: Prisma.WeatherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeatherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WeatherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>[]
          }
          upsert: {
            args: Prisma.WeatherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeatherPayload>
          }
          aggregate: {
            args: Prisma.WeatherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeather>
          }
          groupBy: {
            args: Prisma.WeatherGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeatherGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeatherCountArgs<ExtArgs>
            result: $Utils.Optional<WeatherCountAggregateOutputType> | number
          }
        }
      }
      Diary: {
        payload: Prisma.$DiaryPayload<ExtArgs>
        fields: Prisma.DiaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaryPayload>
          }
          findFirst: {
            args: Prisma.DiaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaryPayload>
          }
          findMany: {
            args: Prisma.DiaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaryPayload>[]
          }
          create: {
            args: Prisma.DiaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaryPayload>
          }
          createMany: {
            args: Prisma.DiaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaryPayload>[]
          }
          delete: {
            args: Prisma.DiaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaryPayload>
          }
          update: {
            args: Prisma.DiaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaryPayload>
          }
          deleteMany: {
            args: Prisma.DiaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaryPayload>[]
          }
          upsert: {
            args: Prisma.DiaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiaryPayload>
          }
          aggregate: {
            args: Prisma.DiaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiary>
          }
          groupBy: {
            args: Prisma.DiaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiaryCountArgs<ExtArgs>
            result: $Utils.Optional<DiaryCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Recommendation: {
        payload: Prisma.$RecommendationPayload<ExtArgs>
        fields: Prisma.RecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findFirst: {
            args: Prisma.RecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findMany: {
            args: Prisma.RecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          create: {
            args: Prisma.RecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          createMany: {
            args: Prisma.RecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          delete: {
            args: Prisma.RecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          update: {
            args: Prisma.RecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecommendationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          upsert: {
            args: Prisma.RecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          aggregate: {
            args: Prisma.RecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendation>
          }
          groupBy: {
            args: Prisma.RecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    weather?: WeatherOmit
    diary?: DiaryOmit
    comment?: CommentOmit
    recommendation?: RecommendationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WeatherCountOutputType
   */

  export type WeatherCountOutputType = {
    diaries: number
  }

  export type WeatherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diaries?: boolean | WeatherCountOutputTypeCountDiariesArgs
  }

  // Custom InputTypes
  /**
   * WeatherCountOutputType without action
   */
  export type WeatherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeatherCountOutputType
     */
    select?: WeatherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WeatherCountOutputType without action
   */
  export type WeatherCountOutputTypeCountDiariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiaryWhereInput
  }


  /**
   * Count Type DiaryCountOutputType
   */

  export type DiaryCountOutputType = {
    comments: number
  }

  export type DiaryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | DiaryCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * DiaryCountOutputType without action
   */
  export type DiaryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiaryCountOutputType
     */
    select?: DiaryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiaryCountOutputType without action
   */
  export type DiaryCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Weather
   */

  export type AggregateWeather = {
    _count: WeatherCountAggregateOutputType | null
    _avg: WeatherAvgAggregateOutputType | null
    _sum: WeatherSumAggregateOutputType | null
    _min: WeatherMinAggregateOutputType | null
    _max: WeatherMaxAggregateOutputType | null
  }

  export type WeatherAvgAggregateOutputType = {
    id: number | null
    temperature: number | null
    humidity: number | null
    wind: number | null
  }

  export type WeatherSumAggregateOutputType = {
    id: number | null
    temperature: number | null
    humidity: number | null
    wind: number | null
  }

  export type WeatherMinAggregateOutputType = {
    id: number | null
    city: string | null
    temperature: number | null
    condition: string | null
    humidity: number | null
    wind: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeatherMaxAggregateOutputType = {
    id: number | null
    city: string | null
    temperature: number | null
    condition: string | null
    humidity: number | null
    wind: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WeatherCountAggregateOutputType = {
    id: number
    city: number
    temperature: number
    condition: number
    humidity: number
    wind: number
    date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WeatherAvgAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
    wind?: true
  }

  export type WeatherSumAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
    wind?: true
  }

  export type WeatherMinAggregateInputType = {
    id?: true
    city?: true
    temperature?: true
    condition?: true
    humidity?: true
    wind?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeatherMaxAggregateInputType = {
    id?: true
    city?: true
    temperature?: true
    condition?: true
    humidity?: true
    wind?: true
    date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WeatherCountAggregateInputType = {
    id?: true
    city?: true
    temperature?: true
    condition?: true
    humidity?: true
    wind?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WeatherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weather to aggregate.
     */
    where?: WeatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weathers to fetch.
     */
    orderBy?: WeatherOrderByWithRelationInput | WeatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weathers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Weathers
    **/
    _count?: true | WeatherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeatherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeatherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeatherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeatherMaxAggregateInputType
  }

  export type GetWeatherAggregateType<T extends WeatherAggregateArgs> = {
        [P in keyof T & keyof AggregateWeather]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeather[P]>
      : GetScalarType<T[P], AggregateWeather[P]>
  }




  export type WeatherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeatherWhereInput
    orderBy?: WeatherOrderByWithAggregationInput | WeatherOrderByWithAggregationInput[]
    by: WeatherScalarFieldEnum[] | WeatherScalarFieldEnum
    having?: WeatherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeatherCountAggregateInputType | true
    _avg?: WeatherAvgAggregateInputType
    _sum?: WeatherSumAggregateInputType
    _min?: WeatherMinAggregateInputType
    _max?: WeatherMaxAggregateInputType
  }

  export type WeatherGroupByOutputType = {
    id: number
    city: string
    temperature: number
    condition: string
    humidity: number | null
    wind: number | null
    date: Date
    createdAt: Date
    updatedAt: Date
    _count: WeatherCountAggregateOutputType | null
    _avg: WeatherAvgAggregateOutputType | null
    _sum: WeatherSumAggregateOutputType | null
    _min: WeatherMinAggregateOutputType | null
    _max: WeatherMaxAggregateOutputType | null
  }

  type GetWeatherGroupByPayload<T extends WeatherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeatherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeatherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeatherGroupByOutputType[P]>
            : GetScalarType<T[P], WeatherGroupByOutputType[P]>
        }
      >
    >


  export type WeatherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    temperature?: boolean
    condition?: boolean
    humidity?: boolean
    wind?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diaries?: boolean | Weather$diariesArgs<ExtArgs>
    _count?: boolean | WeatherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weather"]>

  export type WeatherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    temperature?: boolean
    condition?: boolean
    humidity?: boolean
    wind?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weather"]>

  export type WeatherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    temperature?: boolean
    condition?: boolean
    humidity?: boolean
    wind?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["weather"]>

  export type WeatherSelectScalar = {
    id?: boolean
    city?: boolean
    temperature?: boolean
    condition?: boolean
    humidity?: boolean
    wind?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WeatherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "city" | "temperature" | "condition" | "humidity" | "wind" | "date" | "createdAt" | "updatedAt", ExtArgs["result"]["weather"]>
  export type WeatherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diaries?: boolean | Weather$diariesArgs<ExtArgs>
    _count?: boolean | WeatherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WeatherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WeatherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WeatherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Weather"
    objects: {
      diaries: Prisma.$DiaryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      city: string
      temperature: number
      condition: string
      humidity: number | null
      wind: number | null
      date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["weather"]>
    composites: {}
  }

  type WeatherGetPayload<S extends boolean | null | undefined | WeatherDefaultArgs> = $Result.GetResult<Prisma.$WeatherPayload, S>

  type WeatherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WeatherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WeatherCountAggregateInputType | true
    }

  export interface WeatherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Weather'], meta: { name: 'Weather' } }
    /**
     * Find zero or one Weather that matches the filter.
     * @param {WeatherFindUniqueArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeatherFindUniqueArgs>(args: SelectSubset<T, WeatherFindUniqueArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Weather that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WeatherFindUniqueOrThrowArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeatherFindUniqueOrThrowArgs>(args: SelectSubset<T, WeatherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weather that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherFindFirstArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeatherFindFirstArgs>(args?: SelectSubset<T, WeatherFindFirstArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Weather that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherFindFirstOrThrowArgs} args - Arguments to find a Weather
     * @example
     * // Get one Weather
     * const weather = await prisma.weather.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeatherFindFirstOrThrowArgs>(args?: SelectSubset<T, WeatherFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Weathers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Weathers
     * const weathers = await prisma.weather.findMany()
     * 
     * // Get first 10 Weathers
     * const weathers = await prisma.weather.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weatherWithIdOnly = await prisma.weather.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeatherFindManyArgs>(args?: SelectSubset<T, WeatherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Weather.
     * @param {WeatherCreateArgs} args - Arguments to create a Weather.
     * @example
     * // Create one Weather
     * const Weather = await prisma.weather.create({
     *   data: {
     *     // ... data to create a Weather
     *   }
     * })
     * 
     */
    create<T extends WeatherCreateArgs>(args: SelectSubset<T, WeatherCreateArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Weathers.
     * @param {WeatherCreateManyArgs} args - Arguments to create many Weathers.
     * @example
     * // Create many Weathers
     * const weather = await prisma.weather.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeatherCreateManyArgs>(args?: SelectSubset<T, WeatherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Weathers and returns the data saved in the database.
     * @param {WeatherCreateManyAndReturnArgs} args - Arguments to create many Weathers.
     * @example
     * // Create many Weathers
     * const weather = await prisma.weather.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Weathers and only return the `id`
     * const weatherWithIdOnly = await prisma.weather.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeatherCreateManyAndReturnArgs>(args?: SelectSubset<T, WeatherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Weather.
     * @param {WeatherDeleteArgs} args - Arguments to delete one Weather.
     * @example
     * // Delete one Weather
     * const Weather = await prisma.weather.delete({
     *   where: {
     *     // ... filter to delete one Weather
     *   }
     * })
     * 
     */
    delete<T extends WeatherDeleteArgs>(args: SelectSubset<T, WeatherDeleteArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Weather.
     * @param {WeatherUpdateArgs} args - Arguments to update one Weather.
     * @example
     * // Update one Weather
     * const weather = await prisma.weather.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeatherUpdateArgs>(args: SelectSubset<T, WeatherUpdateArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Weathers.
     * @param {WeatherDeleteManyArgs} args - Arguments to filter Weathers to delete.
     * @example
     * // Delete a few Weathers
     * const { count } = await prisma.weather.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeatherDeleteManyArgs>(args?: SelectSubset<T, WeatherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weathers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Weathers
     * const weather = await prisma.weather.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeatherUpdateManyArgs>(args: SelectSubset<T, WeatherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Weathers and returns the data updated in the database.
     * @param {WeatherUpdateManyAndReturnArgs} args - Arguments to update many Weathers.
     * @example
     * // Update many Weathers
     * const weather = await prisma.weather.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Weathers and only return the `id`
     * const weatherWithIdOnly = await prisma.weather.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WeatherUpdateManyAndReturnArgs>(args: SelectSubset<T, WeatherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Weather.
     * @param {WeatherUpsertArgs} args - Arguments to update or create a Weather.
     * @example
     * // Update or create a Weather
     * const weather = await prisma.weather.upsert({
     *   create: {
     *     // ... data to create a Weather
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Weather we want to update
     *   }
     * })
     */
    upsert<T extends WeatherUpsertArgs>(args: SelectSubset<T, WeatherUpsertArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Weathers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherCountArgs} args - Arguments to filter Weathers to count.
     * @example
     * // Count the number of Weathers
     * const count = await prisma.weather.count({
     *   where: {
     *     // ... the filter for the Weathers we want to count
     *   }
     * })
    **/
    count<T extends WeatherCountArgs>(
      args?: Subset<T, WeatherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeatherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Weather.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WeatherAggregateArgs>(args: Subset<T, WeatherAggregateArgs>): Prisma.PrismaPromise<GetWeatherAggregateType<T>>

    /**
     * Group by Weather.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeatherGroupByArgs} args - Group by arguments.
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
      T extends WeatherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeatherGroupByArgs['orderBy'] }
        : { orderBy?: WeatherGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeatherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeatherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Weather model
   */
  readonly fields: WeatherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Weather.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeatherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diaries<T extends Weather$diariesArgs<ExtArgs> = {}>(args?: Subset<T, Weather$diariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Weather model
   */
  interface WeatherFieldRefs {
    readonly id: FieldRef<"Weather", 'Int'>
    readonly city: FieldRef<"Weather", 'String'>
    readonly temperature: FieldRef<"Weather", 'Float'>
    readonly condition: FieldRef<"Weather", 'String'>
    readonly humidity: FieldRef<"Weather", 'Int'>
    readonly wind: FieldRef<"Weather", 'Float'>
    readonly date: FieldRef<"Weather", 'DateTime'>
    readonly createdAt: FieldRef<"Weather", 'DateTime'>
    readonly updatedAt: FieldRef<"Weather", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Weather findUnique
   */
  export type WeatherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * Filter, which Weather to fetch.
     */
    where: WeatherWhereUniqueInput
  }

  /**
   * Weather findUniqueOrThrow
   */
  export type WeatherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * Filter, which Weather to fetch.
     */
    where: WeatherWhereUniqueInput
  }

  /**
   * Weather findFirst
   */
  export type WeatherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * Filter, which Weather to fetch.
     */
    where?: WeatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weathers to fetch.
     */
    orderBy?: WeatherOrderByWithRelationInput | WeatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weathers.
     */
    cursor?: WeatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weathers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weathers.
     */
    distinct?: WeatherScalarFieldEnum | WeatherScalarFieldEnum[]
  }

  /**
   * Weather findFirstOrThrow
   */
  export type WeatherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * Filter, which Weather to fetch.
     */
    where?: WeatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weathers to fetch.
     */
    orderBy?: WeatherOrderByWithRelationInput | WeatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Weathers.
     */
    cursor?: WeatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weathers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Weathers.
     */
    distinct?: WeatherScalarFieldEnum | WeatherScalarFieldEnum[]
  }

  /**
   * Weather findMany
   */
  export type WeatherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * Filter, which Weathers to fetch.
     */
    where?: WeatherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Weathers to fetch.
     */
    orderBy?: WeatherOrderByWithRelationInput | WeatherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Weathers.
     */
    cursor?: WeatherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Weathers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Weathers.
     */
    skip?: number
    distinct?: WeatherScalarFieldEnum | WeatherScalarFieldEnum[]
  }

  /**
   * Weather create
   */
  export type WeatherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * The data needed to create a Weather.
     */
    data: XOR<WeatherCreateInput, WeatherUncheckedCreateInput>
  }

  /**
   * Weather createMany
   */
  export type WeatherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Weathers.
     */
    data: WeatherCreateManyInput | WeatherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Weather createManyAndReturn
   */
  export type WeatherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * The data used to create many Weathers.
     */
    data: WeatherCreateManyInput | WeatherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Weather update
   */
  export type WeatherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * The data needed to update a Weather.
     */
    data: XOR<WeatherUpdateInput, WeatherUncheckedUpdateInput>
    /**
     * Choose, which Weather to update.
     */
    where: WeatherWhereUniqueInput
  }

  /**
   * Weather updateMany
   */
  export type WeatherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Weathers.
     */
    data: XOR<WeatherUpdateManyMutationInput, WeatherUncheckedUpdateManyInput>
    /**
     * Filter which Weathers to update
     */
    where?: WeatherWhereInput
    /**
     * Limit how many Weathers to update.
     */
    limit?: number
  }

  /**
   * Weather updateManyAndReturn
   */
  export type WeatherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * The data used to update Weathers.
     */
    data: XOR<WeatherUpdateManyMutationInput, WeatherUncheckedUpdateManyInput>
    /**
     * Filter which Weathers to update
     */
    where?: WeatherWhereInput
    /**
     * Limit how many Weathers to update.
     */
    limit?: number
  }

  /**
   * Weather upsert
   */
  export type WeatherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * The filter to search for the Weather to update in case it exists.
     */
    where: WeatherWhereUniqueInput
    /**
     * In case the Weather found by the `where` argument doesn't exist, create a new Weather with this data.
     */
    create: XOR<WeatherCreateInput, WeatherUncheckedCreateInput>
    /**
     * In case the Weather was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeatherUpdateInput, WeatherUncheckedUpdateInput>
  }

  /**
   * Weather delete
   */
  export type WeatherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
    /**
     * Filter which Weather to delete.
     */
    where: WeatherWhereUniqueInput
  }

  /**
   * Weather deleteMany
   */
  export type WeatherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Weathers to delete
     */
    where?: WeatherWhereInput
    /**
     * Limit how many Weathers to delete.
     */
    limit?: number
  }

  /**
   * Weather.diaries
   */
  export type Weather$diariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diary
     */
    select?: DiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diary
     */
    omit?: DiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaryInclude<ExtArgs> | null
    where?: DiaryWhereInput
    orderBy?: DiaryOrderByWithRelationInput | DiaryOrderByWithRelationInput[]
    cursor?: DiaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiaryScalarFieldEnum | DiaryScalarFieldEnum[]
  }

  /**
   * Weather without action
   */
  export type WeatherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Weather
     */
    select?: WeatherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Weather
     */
    omit?: WeatherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeatherInclude<ExtArgs> | null
  }


  /**
   * Model Diary
   */

  export type AggregateDiary = {
    _count: DiaryCountAggregateOutputType | null
    _avg: DiaryAvgAggregateOutputType | null
    _sum: DiarySumAggregateOutputType | null
    _min: DiaryMinAggregateOutputType | null
    _max: DiaryMaxAggregateOutputType | null
  }

  export type DiaryAvgAggregateOutputType = {
    id: number | null
    weatherId: number | null
  }

  export type DiarySumAggregateOutputType = {
    id: number | null
    weatherId: number | null
  }

  export type DiaryMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    date: Date | null
    weatherId: number | null
    selectedClothes: string | null
    selectedFood: string | null
    selectedActivity: string | null
    selectedMovie: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiaryMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    date: Date | null
    weatherId: number | null
    selectedClothes: string | null
    selectedFood: string | null
    selectedActivity: string | null
    selectedMovie: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiaryCountAggregateOutputType = {
    id: number
    title: number
    content: number
    date: number
    weatherId: number
    selectedClothes: number
    selectedFood: number
    selectedActivity: number
    selectedMovie: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DiaryAvgAggregateInputType = {
    id?: true
    weatherId?: true
  }

  export type DiarySumAggregateInputType = {
    id?: true
    weatherId?: true
  }

  export type DiaryMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    date?: true
    weatherId?: true
    selectedClothes?: true
    selectedFood?: true
    selectedActivity?: true
    selectedMovie?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiaryMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    date?: true
    weatherId?: true
    selectedClothes?: true
    selectedFood?: true
    selectedActivity?: true
    selectedMovie?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiaryCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    date?: true
    weatherId?: true
    selectedClothes?: true
    selectedFood?: true
    selectedActivity?: true
    selectedMovie?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DiaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diary to aggregate.
     */
    where?: DiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diaries to fetch.
     */
    orderBy?: DiaryOrderByWithRelationInput | DiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diaries
    **/
    _count?: true | DiaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiaryMaxAggregateInputType
  }

  export type GetDiaryAggregateType<T extends DiaryAggregateArgs> = {
        [P in keyof T & keyof AggregateDiary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiary[P]>
      : GetScalarType<T[P], AggregateDiary[P]>
  }




  export type DiaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiaryWhereInput
    orderBy?: DiaryOrderByWithAggregationInput | DiaryOrderByWithAggregationInput[]
    by: DiaryScalarFieldEnum[] | DiaryScalarFieldEnum
    having?: DiaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiaryCountAggregateInputType | true
    _avg?: DiaryAvgAggregateInputType
    _sum?: DiarySumAggregateInputType
    _min?: DiaryMinAggregateInputType
    _max?: DiaryMaxAggregateInputType
  }

  export type DiaryGroupByOutputType = {
    id: number
    title: string
    content: string
    date: Date
    weatherId: number
    selectedClothes: string | null
    selectedFood: string | null
    selectedActivity: string | null
    selectedMovie: string | null
    createdAt: Date
    updatedAt: Date
    _count: DiaryCountAggregateOutputType | null
    _avg: DiaryAvgAggregateOutputType | null
    _sum: DiarySumAggregateOutputType | null
    _min: DiaryMinAggregateOutputType | null
    _max: DiaryMaxAggregateOutputType | null
  }

  type GetDiaryGroupByPayload<T extends DiaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiaryGroupByOutputType[P]>
            : GetScalarType<T[P], DiaryGroupByOutputType[P]>
        }
      >
    >


  export type DiarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    date?: boolean
    weatherId?: boolean
    selectedClothes?: boolean
    selectedFood?: boolean
    selectedActivity?: boolean
    selectedMovie?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weather?: boolean | WeatherDefaultArgs<ExtArgs>
    comments?: boolean | Diary$commentsArgs<ExtArgs>
    _count?: boolean | DiaryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diary"]>

  export type DiarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    date?: boolean
    weatherId?: boolean
    selectedClothes?: boolean
    selectedFood?: boolean
    selectedActivity?: boolean
    selectedMovie?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weather?: boolean | WeatherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diary"]>

  export type DiarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    date?: boolean
    weatherId?: boolean
    selectedClothes?: boolean
    selectedFood?: boolean
    selectedActivity?: boolean
    selectedMovie?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    weather?: boolean | WeatherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diary"]>

  export type DiarySelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    date?: boolean
    weatherId?: boolean
    selectedClothes?: boolean
    selectedFood?: boolean
    selectedActivity?: boolean
    selectedMovie?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DiaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "date" | "weatherId" | "selectedClothes" | "selectedFood" | "selectedActivity" | "selectedMovie" | "createdAt" | "updatedAt", ExtArgs["result"]["diary"]>
  export type DiaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weather?: boolean | WeatherDefaultArgs<ExtArgs>
    comments?: boolean | Diary$commentsArgs<ExtArgs>
    _count?: boolean | DiaryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weather?: boolean | WeatherDefaultArgs<ExtArgs>
  }
  export type DiaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    weather?: boolean | WeatherDefaultArgs<ExtArgs>
  }

  export type $DiaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Diary"
    objects: {
      weather: Prisma.$WeatherPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      date: Date
      weatherId: number
      selectedClothes: string | null
      selectedFood: string | null
      selectedActivity: string | null
      selectedMovie: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["diary"]>
    composites: {}
  }

  type DiaryGetPayload<S extends boolean | null | undefined | DiaryDefaultArgs> = $Result.GetResult<Prisma.$DiaryPayload, S>

  type DiaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiaryCountAggregateInputType | true
    }

  export interface DiaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Diary'], meta: { name: 'Diary' } }
    /**
     * Find zero or one Diary that matches the filter.
     * @param {DiaryFindUniqueArgs} args - Arguments to find a Diary
     * @example
     * // Get one Diary
     * const diary = await prisma.diary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiaryFindUniqueArgs>(args: SelectSubset<T, DiaryFindUniqueArgs<ExtArgs>>): Prisma__DiaryClient<$Result.GetResult<Prisma.$DiaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiaryFindUniqueOrThrowArgs} args - Arguments to find a Diary
     * @example
     * // Get one Diary
     * const diary = await prisma.diary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiaryFindUniqueOrThrowArgs>(args: SelectSubset<T, DiaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiaryClient<$Result.GetResult<Prisma.$DiaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaryFindFirstArgs} args - Arguments to find a Diary
     * @example
     * // Get one Diary
     * const diary = await prisma.diary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiaryFindFirstArgs>(args?: SelectSubset<T, DiaryFindFirstArgs<ExtArgs>>): Prisma__DiaryClient<$Result.GetResult<Prisma.$DiaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaryFindFirstOrThrowArgs} args - Arguments to find a Diary
     * @example
     * // Get one Diary
     * const diary = await prisma.diary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiaryFindFirstOrThrowArgs>(args?: SelectSubset<T, DiaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiaryClient<$Result.GetResult<Prisma.$DiaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diaries
     * const diaries = await prisma.diary.findMany()
     * 
     * // Get first 10 Diaries
     * const diaries = await prisma.diary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diaryWithIdOnly = await prisma.diary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiaryFindManyArgs>(args?: SelectSubset<T, DiaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diary.
     * @param {DiaryCreateArgs} args - Arguments to create a Diary.
     * @example
     * // Create one Diary
     * const Diary = await prisma.diary.create({
     *   data: {
     *     // ... data to create a Diary
     *   }
     * })
     * 
     */
    create<T extends DiaryCreateArgs>(args: SelectSubset<T, DiaryCreateArgs<ExtArgs>>): Prisma__DiaryClient<$Result.GetResult<Prisma.$DiaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diaries.
     * @param {DiaryCreateManyArgs} args - Arguments to create many Diaries.
     * @example
     * // Create many Diaries
     * const diary = await prisma.diary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiaryCreateManyArgs>(args?: SelectSubset<T, DiaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diaries and returns the data saved in the database.
     * @param {DiaryCreateManyAndReturnArgs} args - Arguments to create many Diaries.
     * @example
     * // Create many Diaries
     * const diary = await prisma.diary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diaries and only return the `id`
     * const diaryWithIdOnly = await prisma.diary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiaryCreateManyAndReturnArgs>(args?: SelectSubset<T, DiaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diary.
     * @param {DiaryDeleteArgs} args - Arguments to delete one Diary.
     * @example
     * // Delete one Diary
     * const Diary = await prisma.diary.delete({
     *   where: {
     *     // ... filter to delete one Diary
     *   }
     * })
     * 
     */
    delete<T extends DiaryDeleteArgs>(args: SelectSubset<T, DiaryDeleteArgs<ExtArgs>>): Prisma__DiaryClient<$Result.GetResult<Prisma.$DiaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diary.
     * @param {DiaryUpdateArgs} args - Arguments to update one Diary.
     * @example
     * // Update one Diary
     * const diary = await prisma.diary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiaryUpdateArgs>(args: SelectSubset<T, DiaryUpdateArgs<ExtArgs>>): Prisma__DiaryClient<$Result.GetResult<Prisma.$DiaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diaries.
     * @param {DiaryDeleteManyArgs} args - Arguments to filter Diaries to delete.
     * @example
     * // Delete a few Diaries
     * const { count } = await prisma.diary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiaryDeleteManyArgs>(args?: SelectSubset<T, DiaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diaries
     * const diary = await prisma.diary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiaryUpdateManyArgs>(args: SelectSubset<T, DiaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diaries and returns the data updated in the database.
     * @param {DiaryUpdateManyAndReturnArgs} args - Arguments to update many Diaries.
     * @example
     * // Update many Diaries
     * const diary = await prisma.diary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diaries and only return the `id`
     * const diaryWithIdOnly = await prisma.diary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiaryUpdateManyAndReturnArgs>(args: SelectSubset<T, DiaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diary.
     * @param {DiaryUpsertArgs} args - Arguments to update or create a Diary.
     * @example
     * // Update or create a Diary
     * const diary = await prisma.diary.upsert({
     *   create: {
     *     // ... data to create a Diary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diary we want to update
     *   }
     * })
     */
    upsert<T extends DiaryUpsertArgs>(args: SelectSubset<T, DiaryUpsertArgs<ExtArgs>>): Prisma__DiaryClient<$Result.GetResult<Prisma.$DiaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaryCountArgs} args - Arguments to filter Diaries to count.
     * @example
     * // Count the number of Diaries
     * const count = await prisma.diary.count({
     *   where: {
     *     // ... the filter for the Diaries we want to count
     *   }
     * })
    **/
    count<T extends DiaryCountArgs>(
      args?: Subset<T, DiaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiaryAggregateArgs>(args: Subset<T, DiaryAggregateArgs>): Prisma.PrismaPromise<GetDiaryAggregateType<T>>

    /**
     * Group by Diary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiaryGroupByArgs} args - Group by arguments.
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
      T extends DiaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiaryGroupByArgs['orderBy'] }
        : { orderBy?: DiaryGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Diary model
   */
  readonly fields: DiaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Diary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    weather<T extends WeatherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WeatherDefaultArgs<ExtArgs>>): Prisma__WeatherClient<$Result.GetResult<Prisma.$WeatherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends Diary$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Diary$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Diary model
   */
  interface DiaryFieldRefs {
    readonly id: FieldRef<"Diary", 'Int'>
    readonly title: FieldRef<"Diary", 'String'>
    readonly content: FieldRef<"Diary", 'String'>
    readonly date: FieldRef<"Diary", 'DateTime'>
    readonly weatherId: FieldRef<"Diary", 'Int'>
    readonly selectedClothes: FieldRef<"Diary", 'String'>
    readonly selectedFood: FieldRef<"Diary", 'String'>
    readonly selectedActivity: FieldRef<"Diary", 'String'>
    readonly selectedMovie: FieldRef<"Diary", 'String'>
    readonly createdAt: FieldRef<"Diary", 'DateTime'>
    readonly updatedAt: FieldRef<"Diary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Diary findUnique
   */
  export type DiaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diary
     */
    select?: DiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diary
     */
    omit?: DiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaryInclude<ExtArgs> | null
    /**
     * Filter, which Diary to fetch.
     */
    where: DiaryWhereUniqueInput
  }

  /**
   * Diary findUniqueOrThrow
   */
  export type DiaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diary
     */
    select?: DiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diary
     */
    omit?: DiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaryInclude<ExtArgs> | null
    /**
     * Filter, which Diary to fetch.
     */
    where: DiaryWhereUniqueInput
  }

  /**
   * Diary findFirst
   */
  export type DiaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diary
     */
    select?: DiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diary
     */
    omit?: DiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaryInclude<ExtArgs> | null
    /**
     * Filter, which Diary to fetch.
     */
    where?: DiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diaries to fetch.
     */
    orderBy?: DiaryOrderByWithRelationInput | DiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diaries.
     */
    cursor?: DiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diaries.
     */
    distinct?: DiaryScalarFieldEnum | DiaryScalarFieldEnum[]
  }

  /**
   * Diary findFirstOrThrow
   */
  export type DiaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diary
     */
    select?: DiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diary
     */
    omit?: DiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaryInclude<ExtArgs> | null
    /**
     * Filter, which Diary to fetch.
     */
    where?: DiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diaries to fetch.
     */
    orderBy?: DiaryOrderByWithRelationInput | DiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diaries.
     */
    cursor?: DiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diaries.
     */
    distinct?: DiaryScalarFieldEnum | DiaryScalarFieldEnum[]
  }

  /**
   * Diary findMany
   */
  export type DiaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diary
     */
    select?: DiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diary
     */
    omit?: DiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaryInclude<ExtArgs> | null
    /**
     * Filter, which Diaries to fetch.
     */
    where?: DiaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diaries to fetch.
     */
    orderBy?: DiaryOrderByWithRelationInput | DiaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diaries.
     */
    cursor?: DiaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diaries.
     */
    skip?: number
    distinct?: DiaryScalarFieldEnum | DiaryScalarFieldEnum[]
  }

  /**
   * Diary create
   */
  export type DiaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diary
     */
    select?: DiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diary
     */
    omit?: DiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaryInclude<ExtArgs> | null
    /**
     * The data needed to create a Diary.
     */
    data: XOR<DiaryCreateInput, DiaryUncheckedCreateInput>
  }

  /**
   * Diary createMany
   */
  export type DiaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diaries.
     */
    data: DiaryCreateManyInput | DiaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Diary createManyAndReturn
   */
  export type DiaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diary
     */
    select?: DiarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diary
     */
    omit?: DiaryOmit<ExtArgs> | null
    /**
     * The data used to create many Diaries.
     */
    data: DiaryCreateManyInput | DiaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diary update
   */
  export type DiaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diary
     */
    select?: DiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diary
     */
    omit?: DiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaryInclude<ExtArgs> | null
    /**
     * The data needed to update a Diary.
     */
    data: XOR<DiaryUpdateInput, DiaryUncheckedUpdateInput>
    /**
     * Choose, which Diary to update.
     */
    where: DiaryWhereUniqueInput
  }

  /**
   * Diary updateMany
   */
  export type DiaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diaries.
     */
    data: XOR<DiaryUpdateManyMutationInput, DiaryUncheckedUpdateManyInput>
    /**
     * Filter which Diaries to update
     */
    where?: DiaryWhereInput
    /**
     * Limit how many Diaries to update.
     */
    limit?: number
  }

  /**
   * Diary updateManyAndReturn
   */
  export type DiaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diary
     */
    select?: DiarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Diary
     */
    omit?: DiaryOmit<ExtArgs> | null
    /**
     * The data used to update Diaries.
     */
    data: XOR<DiaryUpdateManyMutationInput, DiaryUncheckedUpdateManyInput>
    /**
     * Filter which Diaries to update
     */
    where?: DiaryWhereInput
    /**
     * Limit how many Diaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Diary upsert
   */
  export type DiaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diary
     */
    select?: DiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diary
     */
    omit?: DiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaryInclude<ExtArgs> | null
    /**
     * The filter to search for the Diary to update in case it exists.
     */
    where: DiaryWhereUniqueInput
    /**
     * In case the Diary found by the `where` argument doesn't exist, create a new Diary with this data.
     */
    create: XOR<DiaryCreateInput, DiaryUncheckedCreateInput>
    /**
     * In case the Diary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiaryUpdateInput, DiaryUncheckedUpdateInput>
  }

  /**
   * Diary delete
   */
  export type DiaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diary
     */
    select?: DiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diary
     */
    omit?: DiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaryInclude<ExtArgs> | null
    /**
     * Filter which Diary to delete.
     */
    where: DiaryWhereUniqueInput
  }

  /**
   * Diary deleteMany
   */
  export type DiaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diaries to delete
     */
    where?: DiaryWhereInput
    /**
     * Limit how many Diaries to delete.
     */
    limit?: number
  }

  /**
   * Diary.comments
   */
  export type Diary$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Diary without action
   */
  export type DiaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Diary
     */
    select?: DiarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Diary
     */
    omit?: DiaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiaryInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    diaryId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    diaryId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    content: string | null
    diaryId: number | null
    author: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    content: string | null
    diaryId: number | null
    author: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    diaryId: number
    author: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    diaryId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    diaryId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    diaryId?: true
    author?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    diaryId?: true
    author?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    diaryId?: true
    author?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    content: string
    diaryId: number
    author: string
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    diaryId?: boolean
    author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diary?: boolean | DiaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    diaryId?: boolean
    author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diary?: boolean | DiaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    diaryId?: boolean
    author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diary?: boolean | DiaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    diaryId?: boolean
    author?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "diaryId" | "author" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diary?: boolean | DiaryDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diary?: boolean | DiaryDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diary?: boolean | DiaryDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      diary: Prisma.$DiaryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      diaryId: number
      author: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diary<T extends DiaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiaryDefaultArgs<ExtArgs>>): Prisma__DiaryClient<$Result.GetResult<Prisma.$DiaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly diaryId: FieldRef<"Comment", 'Int'>
    readonly author: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Recommendation
   */

  export type AggregateRecommendation = {
    _count: RecommendationCountAggregateOutputType | null
    _avg: RecommendationAvgAggregateOutputType | null
    _sum: RecommendationSumAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  export type RecommendationAvgAggregateOutputType = {
    id: number | null
    tempMin: number | null
    tempMax: number | null
  }

  export type RecommendationSumAggregateOutputType = {
    id: number | null
    tempMin: number | null
    tempMax: number | null
  }

  export type RecommendationMinAggregateOutputType = {
    id: number | null
    weatherType: string | null
    tempMin: number | null
    tempMax: number | null
    title: string | null
    description: string | null
    icon: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecommendationMaxAggregateOutputType = {
    id: number | null
    weatherType: string | null
    tempMin: number | null
    tempMax: number | null
    title: string | null
    description: string | null
    icon: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecommendationCountAggregateOutputType = {
    id: number
    weatherType: number
    tempMin: number
    tempMax: number
    clothes: number
    foods: number
    drinks: number
    activities: number
    movies: number
    title: number
    description: number
    icon: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecommendationAvgAggregateInputType = {
    id?: true
    tempMin?: true
    tempMax?: true
  }

  export type RecommendationSumAggregateInputType = {
    id?: true
    tempMin?: true
    tempMax?: true
  }

  export type RecommendationMinAggregateInputType = {
    id?: true
    weatherType?: true
    tempMin?: true
    tempMax?: true
    title?: true
    description?: true
    icon?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecommendationMaxAggregateInputType = {
    id?: true
    weatherType?: true
    tempMin?: true
    tempMax?: true
    title?: true
    description?: true
    icon?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecommendationCountAggregateInputType = {
    id?: true
    weatherType?: true
    tempMin?: true
    tempMax?: true
    clothes?: true
    foods?: true
    drinks?: true
    activities?: true
    movies?: true
    title?: true
    description?: true
    icon?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendation to aggregate.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recommendations
    **/
    _count?: true | RecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecommendationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecommendationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationMaxAggregateInputType
  }

  export type GetRecommendationAggregateType<T extends RecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendation[P]>
      : GetScalarType<T[P], AggregateRecommendation[P]>
  }




  export type RecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithAggregationInput | RecommendationOrderByWithAggregationInput[]
    by: RecommendationScalarFieldEnum[] | RecommendationScalarFieldEnum
    having?: RecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationCountAggregateInputType | true
    _avg?: RecommendationAvgAggregateInputType
    _sum?: RecommendationSumAggregateInputType
    _min?: RecommendationMinAggregateInputType
    _max?: RecommendationMaxAggregateInputType
  }

  export type RecommendationGroupByOutputType = {
    id: number
    weatherType: string
    tempMin: number | null
    tempMax: number | null
    clothes: string[]
    foods: string[]
    drinks: string[]
    activities: string[]
    movies: string[]
    title: string
    description: string | null
    icon: string | null
    category: string
    createdAt: Date
    updatedAt: Date
    _count: RecommendationCountAggregateOutputType | null
    _avg: RecommendationAvgAggregateOutputType | null
    _sum: RecommendationSumAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  type GetRecommendationGroupByPayload<T extends RecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weatherType?: boolean
    tempMin?: boolean
    tempMax?: boolean
    clothes?: boolean
    foods?: boolean
    drinks?: boolean
    activities?: boolean
    movies?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weatherType?: boolean
    tempMin?: boolean
    tempMax?: boolean
    clothes?: boolean
    foods?: boolean
    drinks?: boolean
    activities?: boolean
    movies?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    weatherType?: boolean
    tempMin?: boolean
    tempMax?: boolean
    clothes?: boolean
    foods?: boolean
    drinks?: boolean
    activities?: boolean
    movies?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectScalar = {
    id?: boolean
    weatherType?: boolean
    tempMin?: boolean
    tempMax?: boolean
    clothes?: boolean
    foods?: boolean
    drinks?: boolean
    activities?: boolean
    movies?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecommendationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "weatherType" | "tempMin" | "tempMax" | "clothes" | "foods" | "drinks" | "activities" | "movies" | "title" | "description" | "icon" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["recommendation"]>

  export type $RecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recommendation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      weatherType: string
      tempMin: number | null
      tempMax: number | null
      clothes: string[]
      foods: string[]
      drinks: string[]
      activities: string[]
      movies: string[]
      title: string
      description: string | null
      icon: string | null
      category: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recommendation"]>
    composites: {}
  }

  type RecommendationGetPayload<S extends boolean | null | undefined | RecommendationDefaultArgs> = $Result.GetResult<Prisma.$RecommendationPayload, S>

  type RecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecommendationCountAggregateInputType | true
    }

  export interface RecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recommendation'], meta: { name: 'Recommendation' } }
    /**
     * Find zero or one Recommendation that matches the filter.
     * @param {RecommendationFindUniqueArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationFindUniqueArgs>(args: SelectSubset<T, RecommendationFindUniqueArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recommendation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecommendationFindUniqueOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationFindFirstArgs>(args?: SelectSubset<T, RecommendationFindFirstArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommendations
     * const recommendations = await prisma.recommendation.findMany()
     * 
     * // Get first 10 Recommendations
     * const recommendations = await prisma.recommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendationFindManyArgs>(args?: SelectSubset<T, RecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recommendation.
     * @param {RecommendationCreateArgs} args - Arguments to create a Recommendation.
     * @example
     * // Create one Recommendation
     * const Recommendation = await prisma.recommendation.create({
     *   data: {
     *     // ... data to create a Recommendation
     *   }
     * })
     * 
     */
    create<T extends RecommendationCreateArgs>(args: SelectSubset<T, RecommendationCreateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recommendations.
     * @param {RecommendationCreateManyArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationCreateManyArgs>(args?: SelectSubset<T, RecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recommendations and returns the data saved in the database.
     * @param {RecommendationCreateManyAndReturnArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recommendations and only return the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recommendation.
     * @param {RecommendationDeleteArgs} args - Arguments to delete one Recommendation.
     * @example
     * // Delete one Recommendation
     * const Recommendation = await prisma.recommendation.delete({
     *   where: {
     *     // ... filter to delete one Recommendation
     *   }
     * })
     * 
     */
    delete<T extends RecommendationDeleteArgs>(args: SelectSubset<T, RecommendationDeleteArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recommendation.
     * @param {RecommendationUpdateArgs} args - Arguments to update one Recommendation.
     * @example
     * // Update one Recommendation
     * const recommendation = await prisma.recommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationUpdateArgs>(args: SelectSubset<T, RecommendationUpdateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recommendations.
     * @param {RecommendationDeleteManyArgs} args - Arguments to filter Recommendations to delete.
     * @example
     * // Delete a few Recommendations
     * const { count } = await prisma.recommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationDeleteManyArgs>(args?: SelectSubset<T, RecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationUpdateManyArgs>(args: SelectSubset<T, RecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations and returns the data updated in the database.
     * @param {RecommendationUpdateManyAndReturnArgs} args - Arguments to update many Recommendations.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recommendations and only return the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecommendationUpdateManyAndReturnArgs>(args: SelectSubset<T, RecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recommendation.
     * @param {RecommendationUpsertArgs} args - Arguments to update or create a Recommendation.
     * @example
     * // Update or create a Recommendation
     * const recommendation = await prisma.recommendation.upsert({
     *   create: {
     *     // ... data to create a Recommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommendation we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationUpsertArgs>(args: SelectSubset<T, RecommendationUpsertArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationCountArgs} args - Arguments to filter Recommendations to count.
     * @example
     * // Count the number of Recommendations
     * const count = await prisma.recommendation.count({
     *   where: {
     *     // ... the filter for the Recommendations we want to count
     *   }
     * })
    **/
    count<T extends RecommendationCountArgs>(
      args?: Subset<T, RecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecommendationAggregateArgs>(args: Subset<T, RecommendationAggregateArgs>): Prisma.PrismaPromise<GetRecommendationAggregateType<T>>

    /**
     * Group by Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationGroupByArgs} args - Group by arguments.
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
      T extends RecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationGroupByArgs['orderBy'] },
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
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recommendation model
   */
  readonly fields: RecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Recommendation model
   */
  interface RecommendationFieldRefs {
    readonly id: FieldRef<"Recommendation", 'Int'>
    readonly weatherType: FieldRef<"Recommendation", 'String'>
    readonly tempMin: FieldRef<"Recommendation", 'Float'>
    readonly tempMax: FieldRef<"Recommendation", 'Float'>
    readonly clothes: FieldRef<"Recommendation", 'String[]'>
    readonly foods: FieldRef<"Recommendation", 'String[]'>
    readonly drinks: FieldRef<"Recommendation", 'String[]'>
    readonly activities: FieldRef<"Recommendation", 'String[]'>
    readonly movies: FieldRef<"Recommendation", 'String[]'>
    readonly title: FieldRef<"Recommendation", 'String'>
    readonly description: FieldRef<"Recommendation", 'String'>
    readonly icon: FieldRef<"Recommendation", 'String'>
    readonly category: FieldRef<"Recommendation", 'String'>
    readonly createdAt: FieldRef<"Recommendation", 'DateTime'>
    readonly updatedAt: FieldRef<"Recommendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recommendation findUnique
   */
  export type RecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findUniqueOrThrow
   */
  export type RecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findFirst
   */
  export type RecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findFirstOrThrow
   */
  export type RecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findMany
   */
  export type RecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation create
   */
  export type RecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The data needed to create a Recommendation.
     */
    data: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
  }

  /**
   * Recommendation createMany
   */
  export type RecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recommendation createManyAndReturn
   */
  export type RecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recommendation update
   */
  export type RecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The data needed to update a Recommendation.
     */
    data: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
    /**
     * Choose, which Recommendation to update.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation updateMany
   */
  export type RecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number
  }

  /**
   * Recommendation updateManyAndReturn
   */
  export type RecommendationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to update.
     */
    limit?: number
  }

  /**
   * Recommendation upsert
   */
  export type RecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * The filter to search for the Recommendation to update in case it exists.
     */
    where: RecommendationWhereUniqueInput
    /**
     * In case the Recommendation found by the `where` argument doesn't exist, create a new Recommendation with this data.
     */
    create: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
    /**
     * In case the Recommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
  }

  /**
   * Recommendation delete
   */
  export type RecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
    /**
     * Filter which Recommendation to delete.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation deleteMany
   */
  export type RecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendations to delete
     */
    where?: RecommendationWhereInput
    /**
     * Limit how many Recommendations to delete.
     */
    limit?: number
  }

  /**
   * Recommendation without action
   */
  export type RecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Recommendation
     */
    omit?: RecommendationOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WeatherScalarFieldEnum: {
    id: 'id',
    city: 'city',
    temperature: 'temperature',
    condition: 'condition',
    humidity: 'humidity',
    wind: 'wind',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WeatherScalarFieldEnum = (typeof WeatherScalarFieldEnum)[keyof typeof WeatherScalarFieldEnum]


  export const DiaryScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    date: 'date',
    weatherId: 'weatherId',
    selectedClothes: 'selectedClothes',
    selectedFood: 'selectedFood',
    selectedActivity: 'selectedActivity',
    selectedMovie: 'selectedMovie',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DiaryScalarFieldEnum = (typeof DiaryScalarFieldEnum)[keyof typeof DiaryScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    diaryId: 'diaryId',
    author: 'author',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const RecommendationScalarFieldEnum: {
    id: 'id',
    weatherType: 'weatherType',
    tempMin: 'tempMin',
    tempMax: 'tempMax',
    clothes: 'clothes',
    foods: 'foods',
    drinks: 'drinks',
    activities: 'activities',
    movies: 'movies',
    title: 'title',
    description: 'description',
    icon: 'icon',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecommendationScalarFieldEnum = (typeof RecommendationScalarFieldEnum)[keyof typeof RecommendationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type WeatherWhereInput = {
    AND?: WeatherWhereInput | WeatherWhereInput[]
    OR?: WeatherWhereInput[]
    NOT?: WeatherWhereInput | WeatherWhereInput[]
    id?: IntFilter<"Weather"> | number
    city?: StringFilter<"Weather"> | string
    temperature?: FloatFilter<"Weather"> | number
    condition?: StringFilter<"Weather"> | string
    humidity?: IntNullableFilter<"Weather"> | number | null
    wind?: FloatNullableFilter<"Weather"> | number | null
    date?: DateTimeFilter<"Weather"> | Date | string
    createdAt?: DateTimeFilter<"Weather"> | Date | string
    updatedAt?: DateTimeFilter<"Weather"> | Date | string
    diaries?: DiaryListRelationFilter
  }

  export type WeatherOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrder
    temperature?: SortOrder
    condition?: SortOrder
    humidity?: SortOrderInput | SortOrder
    wind?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diaries?: DiaryOrderByRelationAggregateInput
  }

  export type WeatherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeatherWhereInput | WeatherWhereInput[]
    OR?: WeatherWhereInput[]
    NOT?: WeatherWhereInput | WeatherWhereInput[]
    city?: StringFilter<"Weather"> | string
    temperature?: FloatFilter<"Weather"> | number
    condition?: StringFilter<"Weather"> | string
    humidity?: IntNullableFilter<"Weather"> | number | null
    wind?: FloatNullableFilter<"Weather"> | number | null
    date?: DateTimeFilter<"Weather"> | Date | string
    createdAt?: DateTimeFilter<"Weather"> | Date | string
    updatedAt?: DateTimeFilter<"Weather"> | Date | string
    diaries?: DiaryListRelationFilter
  }, "id">

  export type WeatherOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrder
    temperature?: SortOrder
    condition?: SortOrder
    humidity?: SortOrderInput | SortOrder
    wind?: SortOrderInput | SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WeatherCountOrderByAggregateInput
    _avg?: WeatherAvgOrderByAggregateInput
    _max?: WeatherMaxOrderByAggregateInput
    _min?: WeatherMinOrderByAggregateInput
    _sum?: WeatherSumOrderByAggregateInput
  }

  export type WeatherScalarWhereWithAggregatesInput = {
    AND?: WeatherScalarWhereWithAggregatesInput | WeatherScalarWhereWithAggregatesInput[]
    OR?: WeatherScalarWhereWithAggregatesInput[]
    NOT?: WeatherScalarWhereWithAggregatesInput | WeatherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Weather"> | number
    city?: StringWithAggregatesFilter<"Weather"> | string
    temperature?: FloatWithAggregatesFilter<"Weather"> | number
    condition?: StringWithAggregatesFilter<"Weather"> | string
    humidity?: IntNullableWithAggregatesFilter<"Weather"> | number | null
    wind?: FloatNullableWithAggregatesFilter<"Weather"> | number | null
    date?: DateTimeWithAggregatesFilter<"Weather"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Weather"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Weather"> | Date | string
  }

  export type DiaryWhereInput = {
    AND?: DiaryWhereInput | DiaryWhereInput[]
    OR?: DiaryWhereInput[]
    NOT?: DiaryWhereInput | DiaryWhereInput[]
    id?: IntFilter<"Diary"> | number
    title?: StringFilter<"Diary"> | string
    content?: StringFilter<"Diary"> | string
    date?: DateTimeFilter<"Diary"> | Date | string
    weatherId?: IntFilter<"Diary"> | number
    selectedClothes?: StringNullableFilter<"Diary"> | string | null
    selectedFood?: StringNullableFilter<"Diary"> | string | null
    selectedActivity?: StringNullableFilter<"Diary"> | string | null
    selectedMovie?: StringNullableFilter<"Diary"> | string | null
    createdAt?: DateTimeFilter<"Diary"> | Date | string
    updatedAt?: DateTimeFilter<"Diary"> | Date | string
    weather?: XOR<WeatherScalarRelationFilter, WeatherWhereInput>
    comments?: CommentListRelationFilter
  }

  export type DiaryOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    weatherId?: SortOrder
    selectedClothes?: SortOrderInput | SortOrder
    selectedFood?: SortOrderInput | SortOrder
    selectedActivity?: SortOrderInput | SortOrder
    selectedMovie?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    weather?: WeatherOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type DiaryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiaryWhereInput | DiaryWhereInput[]
    OR?: DiaryWhereInput[]
    NOT?: DiaryWhereInput | DiaryWhereInput[]
    title?: StringFilter<"Diary"> | string
    content?: StringFilter<"Diary"> | string
    date?: DateTimeFilter<"Diary"> | Date | string
    weatherId?: IntFilter<"Diary"> | number
    selectedClothes?: StringNullableFilter<"Diary"> | string | null
    selectedFood?: StringNullableFilter<"Diary"> | string | null
    selectedActivity?: StringNullableFilter<"Diary"> | string | null
    selectedMovie?: StringNullableFilter<"Diary"> | string | null
    createdAt?: DateTimeFilter<"Diary"> | Date | string
    updatedAt?: DateTimeFilter<"Diary"> | Date | string
    weather?: XOR<WeatherScalarRelationFilter, WeatherWhereInput>
    comments?: CommentListRelationFilter
  }, "id">

  export type DiaryOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    weatherId?: SortOrder
    selectedClothes?: SortOrderInput | SortOrder
    selectedFood?: SortOrderInput | SortOrder
    selectedActivity?: SortOrderInput | SortOrder
    selectedMovie?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DiaryCountOrderByAggregateInput
    _avg?: DiaryAvgOrderByAggregateInput
    _max?: DiaryMaxOrderByAggregateInput
    _min?: DiaryMinOrderByAggregateInput
    _sum?: DiarySumOrderByAggregateInput
  }

  export type DiaryScalarWhereWithAggregatesInput = {
    AND?: DiaryScalarWhereWithAggregatesInput | DiaryScalarWhereWithAggregatesInput[]
    OR?: DiaryScalarWhereWithAggregatesInput[]
    NOT?: DiaryScalarWhereWithAggregatesInput | DiaryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Diary"> | number
    title?: StringWithAggregatesFilter<"Diary"> | string
    content?: StringWithAggregatesFilter<"Diary"> | string
    date?: DateTimeWithAggregatesFilter<"Diary"> | Date | string
    weatherId?: IntWithAggregatesFilter<"Diary"> | number
    selectedClothes?: StringNullableWithAggregatesFilter<"Diary"> | string | null
    selectedFood?: StringNullableWithAggregatesFilter<"Diary"> | string | null
    selectedActivity?: StringNullableWithAggregatesFilter<"Diary"> | string | null
    selectedMovie?: StringNullableWithAggregatesFilter<"Diary"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Diary"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Diary"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    diaryId?: IntFilter<"Comment"> | number
    author?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    diary?: XOR<DiaryScalarRelationFilter, DiaryWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    diaryId?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diary?: DiaryOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    diaryId?: IntFilter<"Comment"> | number
    author?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    diary?: XOR<DiaryScalarRelationFilter, DiaryWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    diaryId?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    content?: StringWithAggregatesFilter<"Comment"> | string
    diaryId?: IntWithAggregatesFilter<"Comment"> | number
    author?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type RecommendationWhereInput = {
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    id?: IntFilter<"Recommendation"> | number
    weatherType?: StringFilter<"Recommendation"> | string
    tempMin?: FloatNullableFilter<"Recommendation"> | number | null
    tempMax?: FloatNullableFilter<"Recommendation"> | number | null
    clothes?: StringNullableListFilter<"Recommendation">
    foods?: StringNullableListFilter<"Recommendation">
    drinks?: StringNullableListFilter<"Recommendation">
    activities?: StringNullableListFilter<"Recommendation">
    movies?: StringNullableListFilter<"Recommendation">
    title?: StringFilter<"Recommendation"> | string
    description?: StringNullableFilter<"Recommendation"> | string | null
    icon?: StringNullableFilter<"Recommendation"> | string | null
    category?: StringFilter<"Recommendation"> | string
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
    updatedAt?: DateTimeFilter<"Recommendation"> | Date | string
  }

  export type RecommendationOrderByWithRelationInput = {
    id?: SortOrder
    weatherType?: SortOrder
    tempMin?: SortOrderInput | SortOrder
    tempMax?: SortOrderInput | SortOrder
    clothes?: SortOrder
    foods?: SortOrder
    drinks?: SortOrder
    activities?: SortOrder
    movies?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    weatherType?: StringFilter<"Recommendation"> | string
    tempMin?: FloatNullableFilter<"Recommendation"> | number | null
    tempMax?: FloatNullableFilter<"Recommendation"> | number | null
    clothes?: StringNullableListFilter<"Recommendation">
    foods?: StringNullableListFilter<"Recommendation">
    drinks?: StringNullableListFilter<"Recommendation">
    activities?: StringNullableListFilter<"Recommendation">
    movies?: StringNullableListFilter<"Recommendation">
    title?: StringFilter<"Recommendation"> | string
    description?: StringNullableFilter<"Recommendation"> | string | null
    icon?: StringNullableFilter<"Recommendation"> | string | null
    category?: StringFilter<"Recommendation"> | string
    createdAt?: DateTimeFilter<"Recommendation"> | Date | string
    updatedAt?: DateTimeFilter<"Recommendation"> | Date | string
  }, "id">

  export type RecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    weatherType?: SortOrder
    tempMin?: SortOrderInput | SortOrder
    tempMax?: SortOrderInput | SortOrder
    clothes?: SortOrder
    foods?: SortOrder
    drinks?: SortOrder
    activities?: SortOrder
    movies?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecommendationCountOrderByAggregateInput
    _avg?: RecommendationAvgOrderByAggregateInput
    _max?: RecommendationMaxOrderByAggregateInput
    _min?: RecommendationMinOrderByAggregateInput
    _sum?: RecommendationSumOrderByAggregateInput
  }

  export type RecommendationScalarWhereWithAggregatesInput = {
    AND?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    OR?: RecommendationScalarWhereWithAggregatesInput[]
    NOT?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Recommendation"> | number
    weatherType?: StringWithAggregatesFilter<"Recommendation"> | string
    tempMin?: FloatNullableWithAggregatesFilter<"Recommendation"> | number | null
    tempMax?: FloatNullableWithAggregatesFilter<"Recommendation"> | number | null
    clothes?: StringNullableListFilter<"Recommendation">
    foods?: StringNullableListFilter<"Recommendation">
    drinks?: StringNullableListFilter<"Recommendation">
    activities?: StringNullableListFilter<"Recommendation">
    movies?: StringNullableListFilter<"Recommendation">
    title?: StringWithAggregatesFilter<"Recommendation"> | string
    description?: StringNullableWithAggregatesFilter<"Recommendation"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Recommendation"> | string | null
    category?: StringWithAggregatesFilter<"Recommendation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Recommendation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recommendation"> | Date | string
  }

  export type WeatherCreateInput = {
    city: string
    temperature: number
    condition: string
    humidity?: number | null
    wind?: number | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    diaries?: DiaryCreateNestedManyWithoutWeatherInput
  }

  export type WeatherUncheckedCreateInput = {
    id?: number
    city: string
    temperature: number
    condition: string
    humidity?: number | null
    wind?: number | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    diaries?: DiaryUncheckedCreateNestedManyWithoutWeatherInput
  }

  export type WeatherUpdateInput = {
    city?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    humidity?: NullableIntFieldUpdateOperationsInput | number | null
    wind?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diaries?: DiaryUpdateManyWithoutWeatherNestedInput
  }

  export type WeatherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    humidity?: NullableIntFieldUpdateOperationsInput | number | null
    wind?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diaries?: DiaryUncheckedUpdateManyWithoutWeatherNestedInput
  }

  export type WeatherCreateManyInput = {
    id?: number
    city: string
    temperature: number
    condition: string
    humidity?: number | null
    wind?: number | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeatherUpdateManyMutationInput = {
    city?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    humidity?: NullableIntFieldUpdateOperationsInput | number | null
    wind?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    humidity?: NullableIntFieldUpdateOperationsInput | number | null
    wind?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaryCreateInput = {
    title: string
    content: string
    date: Date | string
    selectedClothes?: string | null
    selectedFood?: string | null
    selectedActivity?: string | null
    selectedMovie?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weather: WeatherCreateNestedOneWithoutDiariesInput
    comments?: CommentCreateNestedManyWithoutDiaryInput
  }

  export type DiaryUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    date: Date | string
    weatherId: number
    selectedClothes?: string | null
    selectedFood?: string | null
    selectedActivity?: string | null
    selectedMovie?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutDiaryInput
  }

  export type DiaryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedClothes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedFood?: NullableStringFieldUpdateOperationsInput | string | null
    selectedActivity?: NullableStringFieldUpdateOperationsInput | string | null
    selectedMovie?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weather?: WeatherUpdateOneRequiredWithoutDiariesNestedInput
    comments?: CommentUpdateManyWithoutDiaryNestedInput
  }

  export type DiaryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherId?: IntFieldUpdateOperationsInput | number
    selectedClothes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedFood?: NullableStringFieldUpdateOperationsInput | string | null
    selectedActivity?: NullableStringFieldUpdateOperationsInput | string | null
    selectedMovie?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutDiaryNestedInput
  }

  export type DiaryCreateManyInput = {
    id?: number
    title: string
    content: string
    date: Date | string
    weatherId: number
    selectedClothes?: string | null
    selectedFood?: string | null
    selectedActivity?: string | null
    selectedMovie?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiaryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedClothes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedFood?: NullableStringFieldUpdateOperationsInput | string | null
    selectedActivity?: NullableStringFieldUpdateOperationsInput | string | null
    selectedMovie?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherId?: IntFieldUpdateOperationsInput | number
    selectedClothes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedFood?: NullableStringFieldUpdateOperationsInput | string | null
    selectedActivity?: NullableStringFieldUpdateOperationsInput | string | null
    selectedMovie?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    content: string
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
    diary: DiaryCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    content: string
    diaryId: number
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diary?: DiaryUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    diaryId?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    content: string
    diaryId: number
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    diaryId?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationCreateInput = {
    weatherType: string
    tempMin?: number | null
    tempMax?: number | null
    clothes?: RecommendationCreateclothesInput | string[]
    foods?: RecommendationCreatefoodsInput | string[]
    drinks?: RecommendationCreatedrinksInput | string[]
    activities?: RecommendationCreateactivitiesInput | string[]
    movies?: RecommendationCreatemoviesInput | string[]
    title: string
    description?: string | null
    icon?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationUncheckedCreateInput = {
    id?: number
    weatherType: string
    tempMin?: number | null
    tempMax?: number | null
    clothes?: RecommendationCreateclothesInput | string[]
    foods?: RecommendationCreatefoodsInput | string[]
    drinks?: RecommendationCreatedrinksInput | string[]
    activities?: RecommendationCreateactivitiesInput | string[]
    movies?: RecommendationCreatemoviesInput | string[]
    title: string
    description?: string | null
    icon?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationUpdateInput = {
    weatherType?: StringFieldUpdateOperationsInput | string
    tempMin?: NullableFloatFieldUpdateOperationsInput | number | null
    tempMax?: NullableFloatFieldUpdateOperationsInput | number | null
    clothes?: RecommendationUpdateclothesInput | string[]
    foods?: RecommendationUpdatefoodsInput | string[]
    drinks?: RecommendationUpdatedrinksInput | string[]
    activities?: RecommendationUpdateactivitiesInput | string[]
    movies?: RecommendationUpdatemoviesInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    weatherType?: StringFieldUpdateOperationsInput | string
    tempMin?: NullableFloatFieldUpdateOperationsInput | number | null
    tempMax?: NullableFloatFieldUpdateOperationsInput | number | null
    clothes?: RecommendationUpdateclothesInput | string[]
    foods?: RecommendationUpdatefoodsInput | string[]
    drinks?: RecommendationUpdatedrinksInput | string[]
    activities?: RecommendationUpdateactivitiesInput | string[]
    movies?: RecommendationUpdatemoviesInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationCreateManyInput = {
    id?: number
    weatherType: string
    tempMin?: number | null
    tempMax?: number | null
    clothes?: RecommendationCreateclothesInput | string[]
    foods?: RecommendationCreatefoodsInput | string[]
    drinks?: RecommendationCreatedrinksInput | string[]
    activities?: RecommendationCreateactivitiesInput | string[]
    movies?: RecommendationCreatemoviesInput | string[]
    title: string
    description?: string | null
    icon?: string | null
    category: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationUpdateManyMutationInput = {
    weatherType?: StringFieldUpdateOperationsInput | string
    tempMin?: NullableFloatFieldUpdateOperationsInput | number | null
    tempMax?: NullableFloatFieldUpdateOperationsInput | number | null
    clothes?: RecommendationUpdateclothesInput | string[]
    foods?: RecommendationUpdatefoodsInput | string[]
    drinks?: RecommendationUpdatedrinksInput | string[]
    activities?: RecommendationUpdateactivitiesInput | string[]
    movies?: RecommendationUpdatemoviesInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    weatherType?: StringFieldUpdateOperationsInput | string
    tempMin?: NullableFloatFieldUpdateOperationsInput | number | null
    tempMax?: NullableFloatFieldUpdateOperationsInput | number | null
    clothes?: RecommendationUpdateclothesInput | string[]
    foods?: RecommendationUpdatefoodsInput | string[]
    drinks?: RecommendationUpdatedrinksInput | string[]
    activities?: RecommendationUpdateactivitiesInput | string[]
    movies?: RecommendationUpdatemoviesInput | string[]
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DiaryListRelationFilter = {
    every?: DiaryWhereInput
    some?: DiaryWhereInput
    none?: DiaryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DiaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeatherCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    temperature?: SortOrder
    condition?: SortOrder
    humidity?: SortOrder
    wind?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeatherAvgOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    wind?: SortOrder
  }

  export type WeatherMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    temperature?: SortOrder
    condition?: SortOrder
    humidity?: SortOrder
    wind?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeatherMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    temperature?: SortOrder
    condition?: SortOrder
    humidity?: SortOrder
    wind?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WeatherSumOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    wind?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type WeatherScalarRelationFilter = {
    is?: WeatherWhereInput
    isNot?: WeatherWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiaryCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    weatherId?: SortOrder
    selectedClothes?: SortOrder
    selectedFood?: SortOrder
    selectedActivity?: SortOrder
    selectedMovie?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiaryAvgOrderByAggregateInput = {
    id?: SortOrder
    weatherId?: SortOrder
  }

  export type DiaryMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    weatherId?: SortOrder
    selectedClothes?: SortOrder
    selectedFood?: SortOrder
    selectedActivity?: SortOrder
    selectedMovie?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiaryMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    date?: SortOrder
    weatherId?: SortOrder
    selectedClothes?: SortOrder
    selectedFood?: SortOrder
    selectedActivity?: SortOrder
    selectedMovie?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiarySumOrderByAggregateInput = {
    id?: SortOrder
    weatherId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DiaryScalarRelationFilter = {
    is?: DiaryWhereInput
    isNot?: DiaryWhereInput
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    diaryId?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    diaryId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    diaryId?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    diaryId?: SortOrder
    author?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    diaryId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type RecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    weatherType?: SortOrder
    tempMin?: SortOrder
    tempMax?: SortOrder
    clothes?: SortOrder
    foods?: SortOrder
    drinks?: SortOrder
    activities?: SortOrder
    movies?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecommendationAvgOrderByAggregateInput = {
    id?: SortOrder
    tempMin?: SortOrder
    tempMax?: SortOrder
  }

  export type RecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    weatherType?: SortOrder
    tempMin?: SortOrder
    tempMax?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    weatherType?: SortOrder
    tempMin?: SortOrder
    tempMax?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecommendationSumOrderByAggregateInput = {
    id?: SortOrder
    tempMin?: SortOrder
    tempMax?: SortOrder
  }

  export type DiaryCreateNestedManyWithoutWeatherInput = {
    create?: XOR<DiaryCreateWithoutWeatherInput, DiaryUncheckedCreateWithoutWeatherInput> | DiaryCreateWithoutWeatherInput[] | DiaryUncheckedCreateWithoutWeatherInput[]
    connectOrCreate?: DiaryCreateOrConnectWithoutWeatherInput | DiaryCreateOrConnectWithoutWeatherInput[]
    createMany?: DiaryCreateManyWeatherInputEnvelope
    connect?: DiaryWhereUniqueInput | DiaryWhereUniqueInput[]
  }

  export type DiaryUncheckedCreateNestedManyWithoutWeatherInput = {
    create?: XOR<DiaryCreateWithoutWeatherInput, DiaryUncheckedCreateWithoutWeatherInput> | DiaryCreateWithoutWeatherInput[] | DiaryUncheckedCreateWithoutWeatherInput[]
    connectOrCreate?: DiaryCreateOrConnectWithoutWeatherInput | DiaryCreateOrConnectWithoutWeatherInput[]
    createMany?: DiaryCreateManyWeatherInputEnvelope
    connect?: DiaryWhereUniqueInput | DiaryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DiaryUpdateManyWithoutWeatherNestedInput = {
    create?: XOR<DiaryCreateWithoutWeatherInput, DiaryUncheckedCreateWithoutWeatherInput> | DiaryCreateWithoutWeatherInput[] | DiaryUncheckedCreateWithoutWeatherInput[]
    connectOrCreate?: DiaryCreateOrConnectWithoutWeatherInput | DiaryCreateOrConnectWithoutWeatherInput[]
    upsert?: DiaryUpsertWithWhereUniqueWithoutWeatherInput | DiaryUpsertWithWhereUniqueWithoutWeatherInput[]
    createMany?: DiaryCreateManyWeatherInputEnvelope
    set?: DiaryWhereUniqueInput | DiaryWhereUniqueInput[]
    disconnect?: DiaryWhereUniqueInput | DiaryWhereUniqueInput[]
    delete?: DiaryWhereUniqueInput | DiaryWhereUniqueInput[]
    connect?: DiaryWhereUniqueInput | DiaryWhereUniqueInput[]
    update?: DiaryUpdateWithWhereUniqueWithoutWeatherInput | DiaryUpdateWithWhereUniqueWithoutWeatherInput[]
    updateMany?: DiaryUpdateManyWithWhereWithoutWeatherInput | DiaryUpdateManyWithWhereWithoutWeatherInput[]
    deleteMany?: DiaryScalarWhereInput | DiaryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DiaryUncheckedUpdateManyWithoutWeatherNestedInput = {
    create?: XOR<DiaryCreateWithoutWeatherInput, DiaryUncheckedCreateWithoutWeatherInput> | DiaryCreateWithoutWeatherInput[] | DiaryUncheckedCreateWithoutWeatherInput[]
    connectOrCreate?: DiaryCreateOrConnectWithoutWeatherInput | DiaryCreateOrConnectWithoutWeatherInput[]
    upsert?: DiaryUpsertWithWhereUniqueWithoutWeatherInput | DiaryUpsertWithWhereUniqueWithoutWeatherInput[]
    createMany?: DiaryCreateManyWeatherInputEnvelope
    set?: DiaryWhereUniqueInput | DiaryWhereUniqueInput[]
    disconnect?: DiaryWhereUniqueInput | DiaryWhereUniqueInput[]
    delete?: DiaryWhereUniqueInput | DiaryWhereUniqueInput[]
    connect?: DiaryWhereUniqueInput | DiaryWhereUniqueInput[]
    update?: DiaryUpdateWithWhereUniqueWithoutWeatherInput | DiaryUpdateWithWhereUniqueWithoutWeatherInput[]
    updateMany?: DiaryUpdateManyWithWhereWithoutWeatherInput | DiaryUpdateManyWithWhereWithoutWeatherInput[]
    deleteMany?: DiaryScalarWhereInput | DiaryScalarWhereInput[]
  }

  export type WeatherCreateNestedOneWithoutDiariesInput = {
    create?: XOR<WeatherCreateWithoutDiariesInput, WeatherUncheckedCreateWithoutDiariesInput>
    connectOrCreate?: WeatherCreateOrConnectWithoutDiariesInput
    connect?: WeatherWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutDiaryInput = {
    create?: XOR<CommentCreateWithoutDiaryInput, CommentUncheckedCreateWithoutDiaryInput> | CommentCreateWithoutDiaryInput[] | CommentUncheckedCreateWithoutDiaryInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutDiaryInput | CommentCreateOrConnectWithoutDiaryInput[]
    createMany?: CommentCreateManyDiaryInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutDiaryInput = {
    create?: XOR<CommentCreateWithoutDiaryInput, CommentUncheckedCreateWithoutDiaryInput> | CommentCreateWithoutDiaryInput[] | CommentUncheckedCreateWithoutDiaryInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutDiaryInput | CommentCreateOrConnectWithoutDiaryInput[]
    createMany?: CommentCreateManyDiaryInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WeatherUpdateOneRequiredWithoutDiariesNestedInput = {
    create?: XOR<WeatherCreateWithoutDiariesInput, WeatherUncheckedCreateWithoutDiariesInput>
    connectOrCreate?: WeatherCreateOrConnectWithoutDiariesInput
    upsert?: WeatherUpsertWithoutDiariesInput
    connect?: WeatherWhereUniqueInput
    update?: XOR<XOR<WeatherUpdateToOneWithWhereWithoutDiariesInput, WeatherUpdateWithoutDiariesInput>, WeatherUncheckedUpdateWithoutDiariesInput>
  }

  export type CommentUpdateManyWithoutDiaryNestedInput = {
    create?: XOR<CommentCreateWithoutDiaryInput, CommentUncheckedCreateWithoutDiaryInput> | CommentCreateWithoutDiaryInput[] | CommentUncheckedCreateWithoutDiaryInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutDiaryInput | CommentCreateOrConnectWithoutDiaryInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutDiaryInput | CommentUpsertWithWhereUniqueWithoutDiaryInput[]
    createMany?: CommentCreateManyDiaryInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutDiaryInput | CommentUpdateWithWhereUniqueWithoutDiaryInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutDiaryInput | CommentUpdateManyWithWhereWithoutDiaryInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutDiaryNestedInput = {
    create?: XOR<CommentCreateWithoutDiaryInput, CommentUncheckedCreateWithoutDiaryInput> | CommentCreateWithoutDiaryInput[] | CommentUncheckedCreateWithoutDiaryInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutDiaryInput | CommentCreateOrConnectWithoutDiaryInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutDiaryInput | CommentUpsertWithWhereUniqueWithoutDiaryInput[]
    createMany?: CommentCreateManyDiaryInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutDiaryInput | CommentUpdateWithWhereUniqueWithoutDiaryInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutDiaryInput | CommentUpdateManyWithWhereWithoutDiaryInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type DiaryCreateNestedOneWithoutCommentsInput = {
    create?: XOR<DiaryCreateWithoutCommentsInput, DiaryUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: DiaryCreateOrConnectWithoutCommentsInput
    connect?: DiaryWhereUniqueInput
  }

  export type DiaryUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<DiaryCreateWithoutCommentsInput, DiaryUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: DiaryCreateOrConnectWithoutCommentsInput
    upsert?: DiaryUpsertWithoutCommentsInput
    connect?: DiaryWhereUniqueInput
    update?: XOR<XOR<DiaryUpdateToOneWithWhereWithoutCommentsInput, DiaryUpdateWithoutCommentsInput>, DiaryUncheckedUpdateWithoutCommentsInput>
  }

  export type RecommendationCreateclothesInput = {
    set: string[]
  }

  export type RecommendationCreatefoodsInput = {
    set: string[]
  }

  export type RecommendationCreatedrinksInput = {
    set: string[]
  }

  export type RecommendationCreateactivitiesInput = {
    set: string[]
  }

  export type RecommendationCreatemoviesInput = {
    set: string[]
  }

  export type RecommendationUpdateclothesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RecommendationUpdatefoodsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RecommendationUpdatedrinksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RecommendationUpdateactivitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type RecommendationUpdatemoviesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DiaryCreateWithoutWeatherInput = {
    title: string
    content: string
    date: Date | string
    selectedClothes?: string | null
    selectedFood?: string | null
    selectedActivity?: string | null
    selectedMovie?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentCreateNestedManyWithoutDiaryInput
  }

  export type DiaryUncheckedCreateWithoutWeatherInput = {
    id?: number
    title: string
    content: string
    date: Date | string
    selectedClothes?: string | null
    selectedFood?: string | null
    selectedActivity?: string | null
    selectedMovie?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutDiaryInput
  }

  export type DiaryCreateOrConnectWithoutWeatherInput = {
    where: DiaryWhereUniqueInput
    create: XOR<DiaryCreateWithoutWeatherInput, DiaryUncheckedCreateWithoutWeatherInput>
  }

  export type DiaryCreateManyWeatherInputEnvelope = {
    data: DiaryCreateManyWeatherInput | DiaryCreateManyWeatherInput[]
    skipDuplicates?: boolean
  }

  export type DiaryUpsertWithWhereUniqueWithoutWeatherInput = {
    where: DiaryWhereUniqueInput
    update: XOR<DiaryUpdateWithoutWeatherInput, DiaryUncheckedUpdateWithoutWeatherInput>
    create: XOR<DiaryCreateWithoutWeatherInput, DiaryUncheckedCreateWithoutWeatherInput>
  }

  export type DiaryUpdateWithWhereUniqueWithoutWeatherInput = {
    where: DiaryWhereUniqueInput
    data: XOR<DiaryUpdateWithoutWeatherInput, DiaryUncheckedUpdateWithoutWeatherInput>
  }

  export type DiaryUpdateManyWithWhereWithoutWeatherInput = {
    where: DiaryScalarWhereInput
    data: XOR<DiaryUpdateManyMutationInput, DiaryUncheckedUpdateManyWithoutWeatherInput>
  }

  export type DiaryScalarWhereInput = {
    AND?: DiaryScalarWhereInput | DiaryScalarWhereInput[]
    OR?: DiaryScalarWhereInput[]
    NOT?: DiaryScalarWhereInput | DiaryScalarWhereInput[]
    id?: IntFilter<"Diary"> | number
    title?: StringFilter<"Diary"> | string
    content?: StringFilter<"Diary"> | string
    date?: DateTimeFilter<"Diary"> | Date | string
    weatherId?: IntFilter<"Diary"> | number
    selectedClothes?: StringNullableFilter<"Diary"> | string | null
    selectedFood?: StringNullableFilter<"Diary"> | string | null
    selectedActivity?: StringNullableFilter<"Diary"> | string | null
    selectedMovie?: StringNullableFilter<"Diary"> | string | null
    createdAt?: DateTimeFilter<"Diary"> | Date | string
    updatedAt?: DateTimeFilter<"Diary"> | Date | string
  }

  export type WeatherCreateWithoutDiariesInput = {
    city: string
    temperature: number
    condition: string
    humidity?: number | null
    wind?: number | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeatherUncheckedCreateWithoutDiariesInput = {
    id?: number
    city: string
    temperature: number
    condition: string
    humidity?: number | null
    wind?: number | null
    date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WeatherCreateOrConnectWithoutDiariesInput = {
    where: WeatherWhereUniqueInput
    create: XOR<WeatherCreateWithoutDiariesInput, WeatherUncheckedCreateWithoutDiariesInput>
  }

  export type CommentCreateWithoutDiaryInput = {
    content: string
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutDiaryInput = {
    id?: number
    content: string
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutDiaryInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutDiaryInput, CommentUncheckedCreateWithoutDiaryInput>
  }

  export type CommentCreateManyDiaryInputEnvelope = {
    data: CommentCreateManyDiaryInput | CommentCreateManyDiaryInput[]
    skipDuplicates?: boolean
  }

  export type WeatherUpsertWithoutDiariesInput = {
    update: XOR<WeatherUpdateWithoutDiariesInput, WeatherUncheckedUpdateWithoutDiariesInput>
    create: XOR<WeatherCreateWithoutDiariesInput, WeatherUncheckedCreateWithoutDiariesInput>
    where?: WeatherWhereInput
  }

  export type WeatherUpdateToOneWithWhereWithoutDiariesInput = {
    where?: WeatherWhereInput
    data: XOR<WeatherUpdateWithoutDiariesInput, WeatherUncheckedUpdateWithoutDiariesInput>
  }

  export type WeatherUpdateWithoutDiariesInput = {
    city?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    humidity?: NullableIntFieldUpdateOperationsInput | number | null
    wind?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeatherUncheckedUpdateWithoutDiariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    temperature?: FloatFieldUpdateOperationsInput | number
    condition?: StringFieldUpdateOperationsInput | string
    humidity?: NullableIntFieldUpdateOperationsInput | number | null
    wind?: NullableFloatFieldUpdateOperationsInput | number | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutDiaryInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutDiaryInput, CommentUncheckedUpdateWithoutDiaryInput>
    create: XOR<CommentCreateWithoutDiaryInput, CommentUncheckedCreateWithoutDiaryInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutDiaryInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutDiaryInput, CommentUncheckedUpdateWithoutDiaryInput>
  }

  export type CommentUpdateManyWithWhereWithoutDiaryInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutDiaryInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    diaryId?: IntFilter<"Comment"> | number
    author?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type DiaryCreateWithoutCommentsInput = {
    title: string
    content: string
    date: Date | string
    selectedClothes?: string | null
    selectedFood?: string | null
    selectedActivity?: string | null
    selectedMovie?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weather: WeatherCreateNestedOneWithoutDiariesInput
  }

  export type DiaryUncheckedCreateWithoutCommentsInput = {
    id?: number
    title: string
    content: string
    date: Date | string
    weatherId: number
    selectedClothes?: string | null
    selectedFood?: string | null
    selectedActivity?: string | null
    selectedMovie?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiaryCreateOrConnectWithoutCommentsInput = {
    where: DiaryWhereUniqueInput
    create: XOR<DiaryCreateWithoutCommentsInput, DiaryUncheckedCreateWithoutCommentsInput>
  }

  export type DiaryUpsertWithoutCommentsInput = {
    update: XOR<DiaryUpdateWithoutCommentsInput, DiaryUncheckedUpdateWithoutCommentsInput>
    create: XOR<DiaryCreateWithoutCommentsInput, DiaryUncheckedCreateWithoutCommentsInput>
    where?: DiaryWhereInput
  }

  export type DiaryUpdateToOneWithWhereWithoutCommentsInput = {
    where?: DiaryWhereInput
    data: XOR<DiaryUpdateWithoutCommentsInput, DiaryUncheckedUpdateWithoutCommentsInput>
  }

  export type DiaryUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedClothes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedFood?: NullableStringFieldUpdateOperationsInput | string | null
    selectedActivity?: NullableStringFieldUpdateOperationsInput | string | null
    selectedMovie?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weather?: WeatherUpdateOneRequiredWithoutDiariesNestedInput
  }

  export type DiaryUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    weatherId?: IntFieldUpdateOperationsInput | number
    selectedClothes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedFood?: NullableStringFieldUpdateOperationsInput | string | null
    selectedActivity?: NullableStringFieldUpdateOperationsInput | string | null
    selectedMovie?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiaryCreateManyWeatherInput = {
    id?: number
    title: string
    content: string
    date: Date | string
    selectedClothes?: string | null
    selectedFood?: string | null
    selectedActivity?: string | null
    selectedMovie?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiaryUpdateWithoutWeatherInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedClothes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedFood?: NullableStringFieldUpdateOperationsInput | string | null
    selectedActivity?: NullableStringFieldUpdateOperationsInput | string | null
    selectedMovie?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUpdateManyWithoutDiaryNestedInput
  }

  export type DiaryUncheckedUpdateWithoutWeatherInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedClothes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedFood?: NullableStringFieldUpdateOperationsInput | string | null
    selectedActivity?: NullableStringFieldUpdateOperationsInput | string | null
    selectedMovie?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutDiaryNestedInput
  }

  export type DiaryUncheckedUpdateManyWithoutWeatherInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    selectedClothes?: NullableStringFieldUpdateOperationsInput | string | null
    selectedFood?: NullableStringFieldUpdateOperationsInput | string | null
    selectedActivity?: NullableStringFieldUpdateOperationsInput | string | null
    selectedMovie?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyDiaryInput = {
    id?: number
    content: string
    author: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutDiaryInput = {
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutDiaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutDiaryInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}