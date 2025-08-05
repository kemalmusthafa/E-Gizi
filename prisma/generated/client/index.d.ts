
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BmrCalculation
 * 
 */
export type BmrCalculation = $Result.DefaultSelection<Prisma.$BmrCalculationPayload>
/**
 * Model NutritionRecord
 * 
 */
export type NutritionRecord = $Result.DefaultSelection<Prisma.$NutritionRecordPayload>
/**
 * Model NutritionFormulaResult
 * 
 */
export type NutritionFormulaResult = $Result.DefaultSelection<Prisma.$NutritionFormulaResultPayload>
/**
 * Model Disease
 * 
 */
export type Disease = $Result.DefaultSelection<Prisma.$DiseasePayload>
/**
 * Model UserDisease
 * 
 */
export type UserDisease = $Result.DefaultSelection<Prisma.$UserDiseasePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  PATIENT: 'PATIENT',
  NUTRITIONIST: 'NUTRITIONIST',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ActivityLevel: {
  SEDENTARY: 'SEDENTARY',
  LIGHT: 'LIGHT',
  MODERATE: 'MODERATE',
  HEAVY: 'HEAVY',
  VERY_HEAVY: 'VERY_HEAVY'
};

export type ActivityLevel = (typeof ActivityLevel)[keyof typeof ActivityLevel]


export const StressLevel: {
  NORMAL: 'NORMAL',
  MODERATE: 'MODERATE',
  HIGH: 'HIGH'
};

export type StressLevel = (typeof StressLevel)[keyof typeof StressLevel]


export const PhysiologicalStatus: {
  NONE: 'NONE',
  PREGNANT_TRIMESTER_1: 'PREGNANT_TRIMESTER_1',
  PREGNANT_TRIMESTER_2: 'PREGNANT_TRIMESTER_2',
  PREGNANT_TRIMESTER_3: 'PREGNANT_TRIMESTER_3',
  LACTATING_0_6_MONTHS: 'LACTATING_0_6_MONTHS',
  LACTATING_7_12_MONTHS: 'LACTATING_7_12_MONTHS'
};

export type PhysiologicalStatus = (typeof PhysiologicalStatus)[keyof typeof PhysiologicalStatus]


export const DietGoal: {
  MAINTAIN: 'MAINTAIN',
  GAIN_WEIGHT: 'GAIN_WEIGHT',
  LOSE_WEIGHT: 'LOSE_WEIGHT'
};

export type DietGoal = (typeof DietGoal)[keyof typeof DietGoal]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ActivityLevel = $Enums.ActivityLevel

export const ActivityLevel: typeof $Enums.ActivityLevel

export type StressLevel = $Enums.StressLevel

export const StressLevel: typeof $Enums.StressLevel

export type PhysiologicalStatus = $Enums.PhysiologicalStatus

export const PhysiologicalStatus: typeof $Enums.PhysiologicalStatus

export type DietGoal = $Enums.DietGoal

export const DietGoal: typeof $Enums.DietGoal

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bmrCalculation`: Exposes CRUD operations for the **BmrCalculation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BmrCalculations
    * const bmrCalculations = await prisma.bmrCalculation.findMany()
    * ```
    */
  get bmrCalculation(): Prisma.BmrCalculationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nutritionRecord`: Exposes CRUD operations for the **NutritionRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NutritionRecords
    * const nutritionRecords = await prisma.nutritionRecord.findMany()
    * ```
    */
  get nutritionRecord(): Prisma.NutritionRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nutritionFormulaResult`: Exposes CRUD operations for the **NutritionFormulaResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NutritionFormulaResults
    * const nutritionFormulaResults = await prisma.nutritionFormulaResult.findMany()
    * ```
    */
  get nutritionFormulaResult(): Prisma.NutritionFormulaResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.disease`: Exposes CRUD operations for the **Disease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diseases
    * const diseases = await prisma.disease.findMany()
    * ```
    */
  get disease(): Prisma.DiseaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDisease`: Exposes CRUD operations for the **UserDisease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDiseases
    * const userDiseases = await prisma.userDisease.findMany()
    * ```
    */
  get userDisease(): Prisma.UserDiseaseDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    User: 'User',
    BmrCalculation: 'BmrCalculation',
    NutritionRecord: 'NutritionRecord',
    NutritionFormulaResult: 'NutritionFormulaResult',
    Disease: 'Disease',
    UserDisease: 'UserDisease'
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
      modelProps: "user" | "bmrCalculation" | "nutritionRecord" | "nutritionFormulaResult" | "disease" | "userDisease"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BmrCalculation: {
        payload: Prisma.$BmrCalculationPayload<ExtArgs>
        fields: Prisma.BmrCalculationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BmrCalculationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BmrCalculationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BmrCalculationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BmrCalculationPayload>
          }
          findFirst: {
            args: Prisma.BmrCalculationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BmrCalculationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BmrCalculationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BmrCalculationPayload>
          }
          findMany: {
            args: Prisma.BmrCalculationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BmrCalculationPayload>[]
          }
          create: {
            args: Prisma.BmrCalculationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BmrCalculationPayload>
          }
          createMany: {
            args: Prisma.BmrCalculationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BmrCalculationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BmrCalculationPayload>[]
          }
          delete: {
            args: Prisma.BmrCalculationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BmrCalculationPayload>
          }
          update: {
            args: Prisma.BmrCalculationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BmrCalculationPayload>
          }
          deleteMany: {
            args: Prisma.BmrCalculationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BmrCalculationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BmrCalculationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BmrCalculationPayload>[]
          }
          upsert: {
            args: Prisma.BmrCalculationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BmrCalculationPayload>
          }
          aggregate: {
            args: Prisma.BmrCalculationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBmrCalculation>
          }
          groupBy: {
            args: Prisma.BmrCalculationGroupByArgs<ExtArgs>
            result: $Utils.Optional<BmrCalculationGroupByOutputType>[]
          }
          count: {
            args: Prisma.BmrCalculationCountArgs<ExtArgs>
            result: $Utils.Optional<BmrCalculationCountAggregateOutputType> | number
          }
        }
      }
      NutritionRecord: {
        payload: Prisma.$NutritionRecordPayload<ExtArgs>
        fields: Prisma.NutritionRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NutritionRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NutritionRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionRecordPayload>
          }
          findFirst: {
            args: Prisma.NutritionRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NutritionRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionRecordPayload>
          }
          findMany: {
            args: Prisma.NutritionRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionRecordPayload>[]
          }
          create: {
            args: Prisma.NutritionRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionRecordPayload>
          }
          createMany: {
            args: Prisma.NutritionRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NutritionRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionRecordPayload>[]
          }
          delete: {
            args: Prisma.NutritionRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionRecordPayload>
          }
          update: {
            args: Prisma.NutritionRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionRecordPayload>
          }
          deleteMany: {
            args: Prisma.NutritionRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NutritionRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NutritionRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionRecordPayload>[]
          }
          upsert: {
            args: Prisma.NutritionRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionRecordPayload>
          }
          aggregate: {
            args: Prisma.NutritionRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNutritionRecord>
          }
          groupBy: {
            args: Prisma.NutritionRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<NutritionRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.NutritionRecordCountArgs<ExtArgs>
            result: $Utils.Optional<NutritionRecordCountAggregateOutputType> | number
          }
        }
      }
      NutritionFormulaResult: {
        payload: Prisma.$NutritionFormulaResultPayload<ExtArgs>
        fields: Prisma.NutritionFormulaResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NutritionFormulaResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionFormulaResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NutritionFormulaResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionFormulaResultPayload>
          }
          findFirst: {
            args: Prisma.NutritionFormulaResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionFormulaResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NutritionFormulaResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionFormulaResultPayload>
          }
          findMany: {
            args: Prisma.NutritionFormulaResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionFormulaResultPayload>[]
          }
          create: {
            args: Prisma.NutritionFormulaResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionFormulaResultPayload>
          }
          createMany: {
            args: Prisma.NutritionFormulaResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NutritionFormulaResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionFormulaResultPayload>[]
          }
          delete: {
            args: Prisma.NutritionFormulaResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionFormulaResultPayload>
          }
          update: {
            args: Prisma.NutritionFormulaResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionFormulaResultPayload>
          }
          deleteMany: {
            args: Prisma.NutritionFormulaResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NutritionFormulaResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NutritionFormulaResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionFormulaResultPayload>[]
          }
          upsert: {
            args: Prisma.NutritionFormulaResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NutritionFormulaResultPayload>
          }
          aggregate: {
            args: Prisma.NutritionFormulaResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNutritionFormulaResult>
          }
          groupBy: {
            args: Prisma.NutritionFormulaResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<NutritionFormulaResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.NutritionFormulaResultCountArgs<ExtArgs>
            result: $Utils.Optional<NutritionFormulaResultCountAggregateOutputType> | number
          }
        }
      }
      Disease: {
        payload: Prisma.$DiseasePayload<ExtArgs>
        fields: Prisma.DiseaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiseaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiseaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          findFirst: {
            args: Prisma.DiseaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiseaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          findMany: {
            args: Prisma.DiseaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          create: {
            args: Prisma.DiseaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          createMany: {
            args: Prisma.DiseaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiseaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          delete: {
            args: Prisma.DiseaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          update: {
            args: Prisma.DiseaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          deleteMany: {
            args: Prisma.DiseaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiseaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiseaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>[]
          }
          upsert: {
            args: Prisma.DiseaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiseasePayload>
          }
          aggregate: {
            args: Prisma.DiseaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisease>
          }
          groupBy: {
            args: Prisma.DiseaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiseaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiseaseCountArgs<ExtArgs>
            result: $Utils.Optional<DiseaseCountAggregateOutputType> | number
          }
        }
      }
      UserDisease: {
        payload: Prisma.$UserDiseasePayload<ExtArgs>
        fields: Prisma.UserDiseaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDiseaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDiseaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>
          }
          findFirst: {
            args: Prisma.UserDiseaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDiseaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>
          }
          findMany: {
            args: Prisma.UserDiseaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>[]
          }
          create: {
            args: Prisma.UserDiseaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>
          }
          createMany: {
            args: Prisma.UserDiseaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDiseaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>[]
          }
          delete: {
            args: Prisma.UserDiseaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>
          }
          update: {
            args: Prisma.UserDiseaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>
          }
          deleteMany: {
            args: Prisma.UserDiseaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDiseaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDiseaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>[]
          }
          upsert: {
            args: Prisma.UserDiseaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiseasePayload>
          }
          aggregate: {
            args: Prisma.UserDiseaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDisease>
          }
          groupBy: {
            args: Prisma.UserDiseaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDiseaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDiseaseCountArgs<ExtArgs>
            result: $Utils.Optional<UserDiseaseCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    user?: UserOmit
    bmrCalculation?: BmrCalculationOmit
    nutritionRecord?: NutritionRecordOmit
    nutritionFormulaResult?: NutritionFormulaResultOmit
    disease?: DiseaseOmit
    userDisease?: UserDiseaseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    bmrCalculations: number
    nutritionRecords: number
    formulaResults: number
    diseases: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bmrCalculations?: boolean | UserCountOutputTypeCountBmrCalculationsArgs
    nutritionRecords?: boolean | UserCountOutputTypeCountNutritionRecordsArgs
    formulaResults?: boolean | UserCountOutputTypeCountFormulaResultsArgs
    diseases?: boolean | UserCountOutputTypeCountDiseasesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBmrCalculationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BmrCalculationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNutritionRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NutritionRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFormulaResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NutritionFormulaResultWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDiseasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDiseaseWhereInput
  }


  /**
   * Count Type DiseaseCountOutputType
   */

  export type DiseaseCountOutputType = {
    users: number
  }

  export type DiseaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DiseaseCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DiseaseCountOutputType without action
   */
  export type DiseaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiseaseCountOutputType
     */
    select?: DiseaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiseaseCountOutputType without action
   */
  export type DiseaseCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDiseaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    height: number | null
    weight: number | null
  }

  export type UserSumAggregateOutputType = {
    height: number | null
    weight: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    isEmailVerified: boolean | null
    name: string | null
    gender: string | null
    birthDate: Date | null
    height: number | null
    weight: number | null
    activityLevel: $Enums.ActivityLevel | null
    stressLevel: $Enums.StressLevel | null
    physiologicalStatus: $Enums.PhysiologicalStatus | null
    dietGoal: $Enums.DietGoal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    isEmailVerified: boolean | null
    name: string | null
    gender: string | null
    birthDate: Date | null
    height: number | null
    weight: number | null
    activityLevel: $Enums.ActivityLevel | null
    stressLevel: $Enums.StressLevel | null
    physiologicalStatus: $Enums.PhysiologicalStatus | null
    dietGoal: $Enums.DietGoal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    isEmailVerified: number
    name: number
    gender: number
    birthDate: number
    height: number
    weight: number
    activityLevel: number
    stressLevel: number
    physiologicalStatus: number
    dietGoal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    height?: true
    weight?: true
  }

  export type UserSumAggregateInputType = {
    height?: true
    weight?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isEmailVerified?: true
    name?: true
    gender?: true
    birthDate?: true
    height?: true
    weight?: true
    activityLevel?: true
    stressLevel?: true
    physiologicalStatus?: true
    dietGoal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isEmailVerified?: true
    name?: true
    gender?: true
    birthDate?: true
    height?: true
    weight?: true
    activityLevel?: true
    stressLevel?: true
    physiologicalStatus?: true
    dietGoal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    isEmailVerified?: true
    name?: true
    gender?: true
    birthDate?: true
    height?: true
    weight?: true
    activityLevel?: true
    stressLevel?: true
    physiologicalStatus?: true
    dietGoal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.Role
    isEmailVerified: boolean
    name: string
    gender: string | null
    birthDate: Date | null
    height: number | null
    weight: number | null
    activityLevel: $Enums.ActivityLevel | null
    stressLevel: $Enums.StressLevel | null
    physiologicalStatus: $Enums.PhysiologicalStatus | null
    dietGoal: $Enums.DietGoal | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    height?: boolean
    weight?: boolean
    activityLevel?: boolean
    stressLevel?: boolean
    physiologicalStatus?: boolean
    dietGoal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    bmrCalculations?: boolean | User$bmrCalculationsArgs<ExtArgs>
    nutritionRecords?: boolean | User$nutritionRecordsArgs<ExtArgs>
    formulaResults?: boolean | User$formulaResultsArgs<ExtArgs>
    diseases?: boolean | User$diseasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    height?: boolean
    weight?: boolean
    activityLevel?: boolean
    stressLevel?: boolean
    physiologicalStatus?: boolean
    dietGoal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    height?: boolean
    weight?: boolean
    activityLevel?: boolean
    stressLevel?: boolean
    physiologicalStatus?: boolean
    dietGoal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    isEmailVerified?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    height?: boolean
    weight?: boolean
    activityLevel?: boolean
    stressLevel?: boolean
    physiologicalStatus?: boolean
    dietGoal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "isEmailVerified" | "name" | "gender" | "birthDate" | "height" | "weight" | "activityLevel" | "stressLevel" | "physiologicalStatus" | "dietGoal" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bmrCalculations?: boolean | User$bmrCalculationsArgs<ExtArgs>
    nutritionRecords?: boolean | User$nutritionRecordsArgs<ExtArgs>
    formulaResults?: boolean | User$formulaResultsArgs<ExtArgs>
    diseases?: boolean | User$diseasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      bmrCalculations: Prisma.$BmrCalculationPayload<ExtArgs>[]
      nutritionRecords: Prisma.$NutritionRecordPayload<ExtArgs>[]
      formulaResults: Prisma.$NutritionFormulaResultPayload<ExtArgs>[]
      diseases: Prisma.$UserDiseasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.Role
      isEmailVerified: boolean
      name: string
      gender: string | null
      birthDate: Date | null
      height: number | null
      weight: number | null
      activityLevel: $Enums.ActivityLevel | null
      stressLevel: $Enums.StressLevel | null
      physiologicalStatus: $Enums.PhysiologicalStatus | null
      dietGoal: $Enums.DietGoal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bmrCalculations<T extends User$bmrCalculationsArgs<ExtArgs> = {}>(args?: Subset<T, User$bmrCalculationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BmrCalculationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nutritionRecords<T extends User$nutritionRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$nutritionRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    formulaResults<T extends User$formulaResultsArgs<ExtArgs> = {}>(args?: Subset<T, User$formulaResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionFormulaResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diseases<T extends User$diseasesArgs<ExtArgs> = {}>(args?: Subset<T, User$diseasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly name: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly height: FieldRef<"User", 'Float'>
    readonly weight: FieldRef<"User", 'Float'>
    readonly activityLevel: FieldRef<"User", 'ActivityLevel'>
    readonly stressLevel: FieldRef<"User", 'StressLevel'>
    readonly physiologicalStatus: FieldRef<"User", 'PhysiologicalStatus'>
    readonly dietGoal: FieldRef<"User", 'DietGoal'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.bmrCalculations
   */
  export type User$bmrCalculationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BmrCalculation
     */
    select?: BmrCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BmrCalculation
     */
    omit?: BmrCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BmrCalculationInclude<ExtArgs> | null
    where?: BmrCalculationWhereInput
    orderBy?: BmrCalculationOrderByWithRelationInput | BmrCalculationOrderByWithRelationInput[]
    cursor?: BmrCalculationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BmrCalculationScalarFieldEnum | BmrCalculationScalarFieldEnum[]
  }

  /**
   * User.nutritionRecords
   */
  export type User$nutritionRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionRecord
     */
    select?: NutritionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionRecord
     */
    omit?: NutritionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionRecordInclude<ExtArgs> | null
    where?: NutritionRecordWhereInput
    orderBy?: NutritionRecordOrderByWithRelationInput | NutritionRecordOrderByWithRelationInput[]
    cursor?: NutritionRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NutritionRecordScalarFieldEnum | NutritionRecordScalarFieldEnum[]
  }

  /**
   * User.formulaResults
   */
  export type User$formulaResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionFormulaResult
     */
    select?: NutritionFormulaResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionFormulaResult
     */
    omit?: NutritionFormulaResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionFormulaResultInclude<ExtArgs> | null
    where?: NutritionFormulaResultWhereInput
    orderBy?: NutritionFormulaResultOrderByWithRelationInput | NutritionFormulaResultOrderByWithRelationInput[]
    cursor?: NutritionFormulaResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NutritionFormulaResultScalarFieldEnum | NutritionFormulaResultScalarFieldEnum[]
  }

  /**
   * User.diseases
   */
  export type User$diseasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    where?: UserDiseaseWhereInput
    orderBy?: UserDiseaseOrderByWithRelationInput | UserDiseaseOrderByWithRelationInput[]
    cursor?: UserDiseaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDiseaseScalarFieldEnum | UserDiseaseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BmrCalculation
   */

  export type AggregateBmrCalculation = {
    _count: BmrCalculationCountAggregateOutputType | null
    _avg: BmrCalculationAvgAggregateOutputType | null
    _sum: BmrCalculationSumAggregateOutputType | null
    _min: BmrCalculationMinAggregateOutputType | null
    _max: BmrCalculationMaxAggregateOutputType | null
  }

  export type BmrCalculationAvgAggregateOutputType = {
    id: number | null
    bmr: number | null
    tee: number | null
    tea: number | null
  }

  export type BmrCalculationSumAggregateOutputType = {
    id: number | null
    bmr: number | null
    tee: number | null
    tea: number | null
  }

  export type BmrCalculationMinAggregateOutputType = {
    id: number | null
    userId: string | null
    bmr: number | null
    tee: number | null
    tea: number | null
    createdAt: Date | null
  }

  export type BmrCalculationMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    bmr: number | null
    tee: number | null
    tea: number | null
    createdAt: Date | null
  }

  export type BmrCalculationCountAggregateOutputType = {
    id: number
    userId: number
    bmr: number
    tee: number
    tea: number
    createdAt: number
    _all: number
  }


  export type BmrCalculationAvgAggregateInputType = {
    id?: true
    bmr?: true
    tee?: true
    tea?: true
  }

  export type BmrCalculationSumAggregateInputType = {
    id?: true
    bmr?: true
    tee?: true
    tea?: true
  }

  export type BmrCalculationMinAggregateInputType = {
    id?: true
    userId?: true
    bmr?: true
    tee?: true
    tea?: true
    createdAt?: true
  }

  export type BmrCalculationMaxAggregateInputType = {
    id?: true
    userId?: true
    bmr?: true
    tee?: true
    tea?: true
    createdAt?: true
  }

  export type BmrCalculationCountAggregateInputType = {
    id?: true
    userId?: true
    bmr?: true
    tee?: true
    tea?: true
    createdAt?: true
    _all?: true
  }

  export type BmrCalculationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BmrCalculation to aggregate.
     */
    where?: BmrCalculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BmrCalculations to fetch.
     */
    orderBy?: BmrCalculationOrderByWithRelationInput | BmrCalculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BmrCalculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BmrCalculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BmrCalculations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BmrCalculations
    **/
    _count?: true | BmrCalculationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BmrCalculationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BmrCalculationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BmrCalculationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BmrCalculationMaxAggregateInputType
  }

  export type GetBmrCalculationAggregateType<T extends BmrCalculationAggregateArgs> = {
        [P in keyof T & keyof AggregateBmrCalculation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBmrCalculation[P]>
      : GetScalarType<T[P], AggregateBmrCalculation[P]>
  }




  export type BmrCalculationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BmrCalculationWhereInput
    orderBy?: BmrCalculationOrderByWithAggregationInput | BmrCalculationOrderByWithAggregationInput[]
    by: BmrCalculationScalarFieldEnum[] | BmrCalculationScalarFieldEnum
    having?: BmrCalculationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BmrCalculationCountAggregateInputType | true
    _avg?: BmrCalculationAvgAggregateInputType
    _sum?: BmrCalculationSumAggregateInputType
    _min?: BmrCalculationMinAggregateInputType
    _max?: BmrCalculationMaxAggregateInputType
  }

  export type BmrCalculationGroupByOutputType = {
    id: number
    userId: string
    bmr: number
    tee: number
    tea: number
    createdAt: Date
    _count: BmrCalculationCountAggregateOutputType | null
    _avg: BmrCalculationAvgAggregateOutputType | null
    _sum: BmrCalculationSumAggregateOutputType | null
    _min: BmrCalculationMinAggregateOutputType | null
    _max: BmrCalculationMaxAggregateOutputType | null
  }

  type GetBmrCalculationGroupByPayload<T extends BmrCalculationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BmrCalculationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BmrCalculationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BmrCalculationGroupByOutputType[P]>
            : GetScalarType<T[P], BmrCalculationGroupByOutputType[P]>
        }
      >
    >


  export type BmrCalculationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bmr?: boolean
    tee?: boolean
    tea?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bmrCalculation"]>

  export type BmrCalculationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bmr?: boolean
    tee?: boolean
    tea?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bmrCalculation"]>

  export type BmrCalculationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bmr?: boolean
    tee?: boolean
    tea?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bmrCalculation"]>

  export type BmrCalculationSelectScalar = {
    id?: boolean
    userId?: boolean
    bmr?: boolean
    tee?: boolean
    tea?: boolean
    createdAt?: boolean
  }

  export type BmrCalculationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bmr" | "tee" | "tea" | "createdAt", ExtArgs["result"]["bmrCalculation"]>
  export type BmrCalculationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BmrCalculationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BmrCalculationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BmrCalculationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BmrCalculation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      bmr: number
      tee: number
      tea: number
      createdAt: Date
    }, ExtArgs["result"]["bmrCalculation"]>
    composites: {}
  }

  type BmrCalculationGetPayload<S extends boolean | null | undefined | BmrCalculationDefaultArgs> = $Result.GetResult<Prisma.$BmrCalculationPayload, S>

  type BmrCalculationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BmrCalculationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BmrCalculationCountAggregateInputType | true
    }

  export interface BmrCalculationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BmrCalculation'], meta: { name: 'BmrCalculation' } }
    /**
     * Find zero or one BmrCalculation that matches the filter.
     * @param {BmrCalculationFindUniqueArgs} args - Arguments to find a BmrCalculation
     * @example
     * // Get one BmrCalculation
     * const bmrCalculation = await prisma.bmrCalculation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BmrCalculationFindUniqueArgs>(args: SelectSubset<T, BmrCalculationFindUniqueArgs<ExtArgs>>): Prisma__BmrCalculationClient<$Result.GetResult<Prisma.$BmrCalculationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BmrCalculation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BmrCalculationFindUniqueOrThrowArgs} args - Arguments to find a BmrCalculation
     * @example
     * // Get one BmrCalculation
     * const bmrCalculation = await prisma.bmrCalculation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BmrCalculationFindUniqueOrThrowArgs>(args: SelectSubset<T, BmrCalculationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BmrCalculationClient<$Result.GetResult<Prisma.$BmrCalculationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BmrCalculation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BmrCalculationFindFirstArgs} args - Arguments to find a BmrCalculation
     * @example
     * // Get one BmrCalculation
     * const bmrCalculation = await prisma.bmrCalculation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BmrCalculationFindFirstArgs>(args?: SelectSubset<T, BmrCalculationFindFirstArgs<ExtArgs>>): Prisma__BmrCalculationClient<$Result.GetResult<Prisma.$BmrCalculationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BmrCalculation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BmrCalculationFindFirstOrThrowArgs} args - Arguments to find a BmrCalculation
     * @example
     * // Get one BmrCalculation
     * const bmrCalculation = await prisma.bmrCalculation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BmrCalculationFindFirstOrThrowArgs>(args?: SelectSubset<T, BmrCalculationFindFirstOrThrowArgs<ExtArgs>>): Prisma__BmrCalculationClient<$Result.GetResult<Prisma.$BmrCalculationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BmrCalculations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BmrCalculationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BmrCalculations
     * const bmrCalculations = await prisma.bmrCalculation.findMany()
     * 
     * // Get first 10 BmrCalculations
     * const bmrCalculations = await prisma.bmrCalculation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bmrCalculationWithIdOnly = await prisma.bmrCalculation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BmrCalculationFindManyArgs>(args?: SelectSubset<T, BmrCalculationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BmrCalculationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BmrCalculation.
     * @param {BmrCalculationCreateArgs} args - Arguments to create a BmrCalculation.
     * @example
     * // Create one BmrCalculation
     * const BmrCalculation = await prisma.bmrCalculation.create({
     *   data: {
     *     // ... data to create a BmrCalculation
     *   }
     * })
     * 
     */
    create<T extends BmrCalculationCreateArgs>(args: SelectSubset<T, BmrCalculationCreateArgs<ExtArgs>>): Prisma__BmrCalculationClient<$Result.GetResult<Prisma.$BmrCalculationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BmrCalculations.
     * @param {BmrCalculationCreateManyArgs} args - Arguments to create many BmrCalculations.
     * @example
     * // Create many BmrCalculations
     * const bmrCalculation = await prisma.bmrCalculation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BmrCalculationCreateManyArgs>(args?: SelectSubset<T, BmrCalculationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BmrCalculations and returns the data saved in the database.
     * @param {BmrCalculationCreateManyAndReturnArgs} args - Arguments to create many BmrCalculations.
     * @example
     * // Create many BmrCalculations
     * const bmrCalculation = await prisma.bmrCalculation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BmrCalculations and only return the `id`
     * const bmrCalculationWithIdOnly = await prisma.bmrCalculation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BmrCalculationCreateManyAndReturnArgs>(args?: SelectSubset<T, BmrCalculationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BmrCalculationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BmrCalculation.
     * @param {BmrCalculationDeleteArgs} args - Arguments to delete one BmrCalculation.
     * @example
     * // Delete one BmrCalculation
     * const BmrCalculation = await prisma.bmrCalculation.delete({
     *   where: {
     *     // ... filter to delete one BmrCalculation
     *   }
     * })
     * 
     */
    delete<T extends BmrCalculationDeleteArgs>(args: SelectSubset<T, BmrCalculationDeleteArgs<ExtArgs>>): Prisma__BmrCalculationClient<$Result.GetResult<Prisma.$BmrCalculationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BmrCalculation.
     * @param {BmrCalculationUpdateArgs} args - Arguments to update one BmrCalculation.
     * @example
     * // Update one BmrCalculation
     * const bmrCalculation = await prisma.bmrCalculation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BmrCalculationUpdateArgs>(args: SelectSubset<T, BmrCalculationUpdateArgs<ExtArgs>>): Prisma__BmrCalculationClient<$Result.GetResult<Prisma.$BmrCalculationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BmrCalculations.
     * @param {BmrCalculationDeleteManyArgs} args - Arguments to filter BmrCalculations to delete.
     * @example
     * // Delete a few BmrCalculations
     * const { count } = await prisma.bmrCalculation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BmrCalculationDeleteManyArgs>(args?: SelectSubset<T, BmrCalculationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BmrCalculations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BmrCalculationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BmrCalculations
     * const bmrCalculation = await prisma.bmrCalculation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BmrCalculationUpdateManyArgs>(args: SelectSubset<T, BmrCalculationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BmrCalculations and returns the data updated in the database.
     * @param {BmrCalculationUpdateManyAndReturnArgs} args - Arguments to update many BmrCalculations.
     * @example
     * // Update many BmrCalculations
     * const bmrCalculation = await prisma.bmrCalculation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BmrCalculations and only return the `id`
     * const bmrCalculationWithIdOnly = await prisma.bmrCalculation.updateManyAndReturn({
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
    updateManyAndReturn<T extends BmrCalculationUpdateManyAndReturnArgs>(args: SelectSubset<T, BmrCalculationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BmrCalculationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BmrCalculation.
     * @param {BmrCalculationUpsertArgs} args - Arguments to update or create a BmrCalculation.
     * @example
     * // Update or create a BmrCalculation
     * const bmrCalculation = await prisma.bmrCalculation.upsert({
     *   create: {
     *     // ... data to create a BmrCalculation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BmrCalculation we want to update
     *   }
     * })
     */
    upsert<T extends BmrCalculationUpsertArgs>(args: SelectSubset<T, BmrCalculationUpsertArgs<ExtArgs>>): Prisma__BmrCalculationClient<$Result.GetResult<Prisma.$BmrCalculationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BmrCalculations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BmrCalculationCountArgs} args - Arguments to filter BmrCalculations to count.
     * @example
     * // Count the number of BmrCalculations
     * const count = await prisma.bmrCalculation.count({
     *   where: {
     *     // ... the filter for the BmrCalculations we want to count
     *   }
     * })
    **/
    count<T extends BmrCalculationCountArgs>(
      args?: Subset<T, BmrCalculationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BmrCalculationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BmrCalculation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BmrCalculationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BmrCalculationAggregateArgs>(args: Subset<T, BmrCalculationAggregateArgs>): Prisma.PrismaPromise<GetBmrCalculationAggregateType<T>>

    /**
     * Group by BmrCalculation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BmrCalculationGroupByArgs} args - Group by arguments.
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
      T extends BmrCalculationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BmrCalculationGroupByArgs['orderBy'] }
        : { orderBy?: BmrCalculationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BmrCalculationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBmrCalculationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BmrCalculation model
   */
  readonly fields: BmrCalculationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BmrCalculation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BmrCalculationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BmrCalculation model
   */
  interface BmrCalculationFieldRefs {
    readonly id: FieldRef<"BmrCalculation", 'Int'>
    readonly userId: FieldRef<"BmrCalculation", 'String'>
    readonly bmr: FieldRef<"BmrCalculation", 'Float'>
    readonly tee: FieldRef<"BmrCalculation", 'Float'>
    readonly tea: FieldRef<"BmrCalculation", 'Float'>
    readonly createdAt: FieldRef<"BmrCalculation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BmrCalculation findUnique
   */
  export type BmrCalculationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BmrCalculation
     */
    select?: BmrCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BmrCalculation
     */
    omit?: BmrCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BmrCalculationInclude<ExtArgs> | null
    /**
     * Filter, which BmrCalculation to fetch.
     */
    where: BmrCalculationWhereUniqueInput
  }

  /**
   * BmrCalculation findUniqueOrThrow
   */
  export type BmrCalculationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BmrCalculation
     */
    select?: BmrCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BmrCalculation
     */
    omit?: BmrCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BmrCalculationInclude<ExtArgs> | null
    /**
     * Filter, which BmrCalculation to fetch.
     */
    where: BmrCalculationWhereUniqueInput
  }

  /**
   * BmrCalculation findFirst
   */
  export type BmrCalculationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BmrCalculation
     */
    select?: BmrCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BmrCalculation
     */
    omit?: BmrCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BmrCalculationInclude<ExtArgs> | null
    /**
     * Filter, which BmrCalculation to fetch.
     */
    where?: BmrCalculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BmrCalculations to fetch.
     */
    orderBy?: BmrCalculationOrderByWithRelationInput | BmrCalculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BmrCalculations.
     */
    cursor?: BmrCalculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BmrCalculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BmrCalculations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BmrCalculations.
     */
    distinct?: BmrCalculationScalarFieldEnum | BmrCalculationScalarFieldEnum[]
  }

  /**
   * BmrCalculation findFirstOrThrow
   */
  export type BmrCalculationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BmrCalculation
     */
    select?: BmrCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BmrCalculation
     */
    omit?: BmrCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BmrCalculationInclude<ExtArgs> | null
    /**
     * Filter, which BmrCalculation to fetch.
     */
    where?: BmrCalculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BmrCalculations to fetch.
     */
    orderBy?: BmrCalculationOrderByWithRelationInput | BmrCalculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BmrCalculations.
     */
    cursor?: BmrCalculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BmrCalculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BmrCalculations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BmrCalculations.
     */
    distinct?: BmrCalculationScalarFieldEnum | BmrCalculationScalarFieldEnum[]
  }

  /**
   * BmrCalculation findMany
   */
  export type BmrCalculationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BmrCalculation
     */
    select?: BmrCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BmrCalculation
     */
    omit?: BmrCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BmrCalculationInclude<ExtArgs> | null
    /**
     * Filter, which BmrCalculations to fetch.
     */
    where?: BmrCalculationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BmrCalculations to fetch.
     */
    orderBy?: BmrCalculationOrderByWithRelationInput | BmrCalculationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BmrCalculations.
     */
    cursor?: BmrCalculationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BmrCalculations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BmrCalculations.
     */
    skip?: number
    distinct?: BmrCalculationScalarFieldEnum | BmrCalculationScalarFieldEnum[]
  }

  /**
   * BmrCalculation create
   */
  export type BmrCalculationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BmrCalculation
     */
    select?: BmrCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BmrCalculation
     */
    omit?: BmrCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BmrCalculationInclude<ExtArgs> | null
    /**
     * The data needed to create a BmrCalculation.
     */
    data: XOR<BmrCalculationCreateInput, BmrCalculationUncheckedCreateInput>
  }

  /**
   * BmrCalculation createMany
   */
  export type BmrCalculationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BmrCalculations.
     */
    data: BmrCalculationCreateManyInput | BmrCalculationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BmrCalculation createManyAndReturn
   */
  export type BmrCalculationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BmrCalculation
     */
    select?: BmrCalculationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BmrCalculation
     */
    omit?: BmrCalculationOmit<ExtArgs> | null
    /**
     * The data used to create many BmrCalculations.
     */
    data: BmrCalculationCreateManyInput | BmrCalculationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BmrCalculationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BmrCalculation update
   */
  export type BmrCalculationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BmrCalculation
     */
    select?: BmrCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BmrCalculation
     */
    omit?: BmrCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BmrCalculationInclude<ExtArgs> | null
    /**
     * The data needed to update a BmrCalculation.
     */
    data: XOR<BmrCalculationUpdateInput, BmrCalculationUncheckedUpdateInput>
    /**
     * Choose, which BmrCalculation to update.
     */
    where: BmrCalculationWhereUniqueInput
  }

  /**
   * BmrCalculation updateMany
   */
  export type BmrCalculationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BmrCalculations.
     */
    data: XOR<BmrCalculationUpdateManyMutationInput, BmrCalculationUncheckedUpdateManyInput>
    /**
     * Filter which BmrCalculations to update
     */
    where?: BmrCalculationWhereInput
    /**
     * Limit how many BmrCalculations to update.
     */
    limit?: number
  }

  /**
   * BmrCalculation updateManyAndReturn
   */
  export type BmrCalculationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BmrCalculation
     */
    select?: BmrCalculationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BmrCalculation
     */
    omit?: BmrCalculationOmit<ExtArgs> | null
    /**
     * The data used to update BmrCalculations.
     */
    data: XOR<BmrCalculationUpdateManyMutationInput, BmrCalculationUncheckedUpdateManyInput>
    /**
     * Filter which BmrCalculations to update
     */
    where?: BmrCalculationWhereInput
    /**
     * Limit how many BmrCalculations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BmrCalculationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BmrCalculation upsert
   */
  export type BmrCalculationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BmrCalculation
     */
    select?: BmrCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BmrCalculation
     */
    omit?: BmrCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BmrCalculationInclude<ExtArgs> | null
    /**
     * The filter to search for the BmrCalculation to update in case it exists.
     */
    where: BmrCalculationWhereUniqueInput
    /**
     * In case the BmrCalculation found by the `where` argument doesn't exist, create a new BmrCalculation with this data.
     */
    create: XOR<BmrCalculationCreateInput, BmrCalculationUncheckedCreateInput>
    /**
     * In case the BmrCalculation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BmrCalculationUpdateInput, BmrCalculationUncheckedUpdateInput>
  }

  /**
   * BmrCalculation delete
   */
  export type BmrCalculationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BmrCalculation
     */
    select?: BmrCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BmrCalculation
     */
    omit?: BmrCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BmrCalculationInclude<ExtArgs> | null
    /**
     * Filter which BmrCalculation to delete.
     */
    where: BmrCalculationWhereUniqueInput
  }

  /**
   * BmrCalculation deleteMany
   */
  export type BmrCalculationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BmrCalculations to delete
     */
    where?: BmrCalculationWhereInput
    /**
     * Limit how many BmrCalculations to delete.
     */
    limit?: number
  }

  /**
   * BmrCalculation without action
   */
  export type BmrCalculationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BmrCalculation
     */
    select?: BmrCalculationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BmrCalculation
     */
    omit?: BmrCalculationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BmrCalculationInclude<ExtArgs> | null
  }


  /**
   * Model NutritionRecord
   */

  export type AggregateNutritionRecord = {
    _count: NutritionRecordCountAggregateOutputType | null
    _avg: NutritionRecordAvgAggregateOutputType | null
    _sum: NutritionRecordSumAggregateOutputType | null
    _min: NutritionRecordMinAggregateOutputType | null
    _max: NutritionRecordMaxAggregateOutputType | null
  }

  export type NutritionRecordAvgAggregateOutputType = {
    id: number | null
    energyTarget: number | null
    proteinTarget: number | null
    carbTarget: number | null
    fatTarget: number | null
    formulaResultId: number | null
  }

  export type NutritionRecordSumAggregateOutputType = {
    id: number | null
    energyTarget: number | null
    proteinTarget: number | null
    carbTarget: number | null
    fatTarget: number | null
    formulaResultId: number | null
  }

  export type NutritionRecordMinAggregateOutputType = {
    id: number | null
    userId: string | null
    energyTarget: number | null
    proteinTarget: number | null
    carbTarget: number | null
    fatTarget: number | null
    formulaResultId: number | null
    createdAt: Date | null
  }

  export type NutritionRecordMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    energyTarget: number | null
    proteinTarget: number | null
    carbTarget: number | null
    fatTarget: number | null
    formulaResultId: number | null
    createdAt: Date | null
  }

  export type NutritionRecordCountAggregateOutputType = {
    id: number
    userId: number
    energyTarget: number
    proteinTarget: number
    carbTarget: number
    fatTarget: number
    formulaResultId: number
    createdAt: number
    _all: number
  }


  export type NutritionRecordAvgAggregateInputType = {
    id?: true
    energyTarget?: true
    proteinTarget?: true
    carbTarget?: true
    fatTarget?: true
    formulaResultId?: true
  }

  export type NutritionRecordSumAggregateInputType = {
    id?: true
    energyTarget?: true
    proteinTarget?: true
    carbTarget?: true
    fatTarget?: true
    formulaResultId?: true
  }

  export type NutritionRecordMinAggregateInputType = {
    id?: true
    userId?: true
    energyTarget?: true
    proteinTarget?: true
    carbTarget?: true
    fatTarget?: true
    formulaResultId?: true
    createdAt?: true
  }

  export type NutritionRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    energyTarget?: true
    proteinTarget?: true
    carbTarget?: true
    fatTarget?: true
    formulaResultId?: true
    createdAt?: true
  }

  export type NutritionRecordCountAggregateInputType = {
    id?: true
    userId?: true
    energyTarget?: true
    proteinTarget?: true
    carbTarget?: true
    fatTarget?: true
    formulaResultId?: true
    createdAt?: true
    _all?: true
  }

  export type NutritionRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NutritionRecord to aggregate.
     */
    where?: NutritionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionRecords to fetch.
     */
    orderBy?: NutritionRecordOrderByWithRelationInput | NutritionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NutritionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NutritionRecords
    **/
    _count?: true | NutritionRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NutritionRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NutritionRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NutritionRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NutritionRecordMaxAggregateInputType
  }

  export type GetNutritionRecordAggregateType<T extends NutritionRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateNutritionRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNutritionRecord[P]>
      : GetScalarType<T[P], AggregateNutritionRecord[P]>
  }




  export type NutritionRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NutritionRecordWhereInput
    orderBy?: NutritionRecordOrderByWithAggregationInput | NutritionRecordOrderByWithAggregationInput[]
    by: NutritionRecordScalarFieldEnum[] | NutritionRecordScalarFieldEnum
    having?: NutritionRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NutritionRecordCountAggregateInputType | true
    _avg?: NutritionRecordAvgAggregateInputType
    _sum?: NutritionRecordSumAggregateInputType
    _min?: NutritionRecordMinAggregateInputType
    _max?: NutritionRecordMaxAggregateInputType
  }

  export type NutritionRecordGroupByOutputType = {
    id: number
    userId: string
    energyTarget: number
    proteinTarget: number
    carbTarget: number
    fatTarget: number
    formulaResultId: number | null
    createdAt: Date
    _count: NutritionRecordCountAggregateOutputType | null
    _avg: NutritionRecordAvgAggregateOutputType | null
    _sum: NutritionRecordSumAggregateOutputType | null
    _min: NutritionRecordMinAggregateOutputType | null
    _max: NutritionRecordMaxAggregateOutputType | null
  }

  type GetNutritionRecordGroupByPayload<T extends NutritionRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NutritionRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NutritionRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NutritionRecordGroupByOutputType[P]>
            : GetScalarType<T[P], NutritionRecordGroupByOutputType[P]>
        }
      >
    >


  export type NutritionRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    energyTarget?: boolean
    proteinTarget?: boolean
    carbTarget?: boolean
    fatTarget?: boolean
    formulaResultId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    formulaResult?: boolean | NutritionRecord$formulaResultArgs<ExtArgs>
  }, ExtArgs["result"]["nutritionRecord"]>

  export type NutritionRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    energyTarget?: boolean
    proteinTarget?: boolean
    carbTarget?: boolean
    fatTarget?: boolean
    formulaResultId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    formulaResult?: boolean | NutritionRecord$formulaResultArgs<ExtArgs>
  }, ExtArgs["result"]["nutritionRecord"]>

  export type NutritionRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    energyTarget?: boolean
    proteinTarget?: boolean
    carbTarget?: boolean
    fatTarget?: boolean
    formulaResultId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    formulaResult?: boolean | NutritionRecord$formulaResultArgs<ExtArgs>
  }, ExtArgs["result"]["nutritionRecord"]>

  export type NutritionRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    energyTarget?: boolean
    proteinTarget?: boolean
    carbTarget?: boolean
    fatTarget?: boolean
    formulaResultId?: boolean
    createdAt?: boolean
  }

  export type NutritionRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "energyTarget" | "proteinTarget" | "carbTarget" | "fatTarget" | "formulaResultId" | "createdAt", ExtArgs["result"]["nutritionRecord"]>
  export type NutritionRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    formulaResult?: boolean | NutritionRecord$formulaResultArgs<ExtArgs>
  }
  export type NutritionRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    formulaResult?: boolean | NutritionRecord$formulaResultArgs<ExtArgs>
  }
  export type NutritionRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    formulaResult?: boolean | NutritionRecord$formulaResultArgs<ExtArgs>
  }

  export type $NutritionRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NutritionRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      formulaResult: Prisma.$NutritionFormulaResultPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      energyTarget: number
      proteinTarget: number
      carbTarget: number
      fatTarget: number
      formulaResultId: number | null
      createdAt: Date
    }, ExtArgs["result"]["nutritionRecord"]>
    composites: {}
  }

  type NutritionRecordGetPayload<S extends boolean | null | undefined | NutritionRecordDefaultArgs> = $Result.GetResult<Prisma.$NutritionRecordPayload, S>

  type NutritionRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NutritionRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NutritionRecordCountAggregateInputType | true
    }

  export interface NutritionRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NutritionRecord'], meta: { name: 'NutritionRecord' } }
    /**
     * Find zero or one NutritionRecord that matches the filter.
     * @param {NutritionRecordFindUniqueArgs} args - Arguments to find a NutritionRecord
     * @example
     * // Get one NutritionRecord
     * const nutritionRecord = await prisma.nutritionRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NutritionRecordFindUniqueArgs>(args: SelectSubset<T, NutritionRecordFindUniqueArgs<ExtArgs>>): Prisma__NutritionRecordClient<$Result.GetResult<Prisma.$NutritionRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NutritionRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NutritionRecordFindUniqueOrThrowArgs} args - Arguments to find a NutritionRecord
     * @example
     * // Get one NutritionRecord
     * const nutritionRecord = await prisma.nutritionRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NutritionRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, NutritionRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NutritionRecordClient<$Result.GetResult<Prisma.$NutritionRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NutritionRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionRecordFindFirstArgs} args - Arguments to find a NutritionRecord
     * @example
     * // Get one NutritionRecord
     * const nutritionRecord = await prisma.nutritionRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NutritionRecordFindFirstArgs>(args?: SelectSubset<T, NutritionRecordFindFirstArgs<ExtArgs>>): Prisma__NutritionRecordClient<$Result.GetResult<Prisma.$NutritionRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NutritionRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionRecordFindFirstOrThrowArgs} args - Arguments to find a NutritionRecord
     * @example
     * // Get one NutritionRecord
     * const nutritionRecord = await prisma.nutritionRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NutritionRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, NutritionRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__NutritionRecordClient<$Result.GetResult<Prisma.$NutritionRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NutritionRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NutritionRecords
     * const nutritionRecords = await prisma.nutritionRecord.findMany()
     * 
     * // Get first 10 NutritionRecords
     * const nutritionRecords = await prisma.nutritionRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nutritionRecordWithIdOnly = await prisma.nutritionRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NutritionRecordFindManyArgs>(args?: SelectSubset<T, NutritionRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NutritionRecord.
     * @param {NutritionRecordCreateArgs} args - Arguments to create a NutritionRecord.
     * @example
     * // Create one NutritionRecord
     * const NutritionRecord = await prisma.nutritionRecord.create({
     *   data: {
     *     // ... data to create a NutritionRecord
     *   }
     * })
     * 
     */
    create<T extends NutritionRecordCreateArgs>(args: SelectSubset<T, NutritionRecordCreateArgs<ExtArgs>>): Prisma__NutritionRecordClient<$Result.GetResult<Prisma.$NutritionRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NutritionRecords.
     * @param {NutritionRecordCreateManyArgs} args - Arguments to create many NutritionRecords.
     * @example
     * // Create many NutritionRecords
     * const nutritionRecord = await prisma.nutritionRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NutritionRecordCreateManyArgs>(args?: SelectSubset<T, NutritionRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NutritionRecords and returns the data saved in the database.
     * @param {NutritionRecordCreateManyAndReturnArgs} args - Arguments to create many NutritionRecords.
     * @example
     * // Create many NutritionRecords
     * const nutritionRecord = await prisma.nutritionRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NutritionRecords and only return the `id`
     * const nutritionRecordWithIdOnly = await prisma.nutritionRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NutritionRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, NutritionRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NutritionRecord.
     * @param {NutritionRecordDeleteArgs} args - Arguments to delete one NutritionRecord.
     * @example
     * // Delete one NutritionRecord
     * const NutritionRecord = await prisma.nutritionRecord.delete({
     *   where: {
     *     // ... filter to delete one NutritionRecord
     *   }
     * })
     * 
     */
    delete<T extends NutritionRecordDeleteArgs>(args: SelectSubset<T, NutritionRecordDeleteArgs<ExtArgs>>): Prisma__NutritionRecordClient<$Result.GetResult<Prisma.$NutritionRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NutritionRecord.
     * @param {NutritionRecordUpdateArgs} args - Arguments to update one NutritionRecord.
     * @example
     * // Update one NutritionRecord
     * const nutritionRecord = await prisma.nutritionRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NutritionRecordUpdateArgs>(args: SelectSubset<T, NutritionRecordUpdateArgs<ExtArgs>>): Prisma__NutritionRecordClient<$Result.GetResult<Prisma.$NutritionRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NutritionRecords.
     * @param {NutritionRecordDeleteManyArgs} args - Arguments to filter NutritionRecords to delete.
     * @example
     * // Delete a few NutritionRecords
     * const { count } = await prisma.nutritionRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NutritionRecordDeleteManyArgs>(args?: SelectSubset<T, NutritionRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NutritionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NutritionRecords
     * const nutritionRecord = await prisma.nutritionRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NutritionRecordUpdateManyArgs>(args: SelectSubset<T, NutritionRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NutritionRecords and returns the data updated in the database.
     * @param {NutritionRecordUpdateManyAndReturnArgs} args - Arguments to update many NutritionRecords.
     * @example
     * // Update many NutritionRecords
     * const nutritionRecord = await prisma.nutritionRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NutritionRecords and only return the `id`
     * const nutritionRecordWithIdOnly = await prisma.nutritionRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends NutritionRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, NutritionRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NutritionRecord.
     * @param {NutritionRecordUpsertArgs} args - Arguments to update or create a NutritionRecord.
     * @example
     * // Update or create a NutritionRecord
     * const nutritionRecord = await prisma.nutritionRecord.upsert({
     *   create: {
     *     // ... data to create a NutritionRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NutritionRecord we want to update
     *   }
     * })
     */
    upsert<T extends NutritionRecordUpsertArgs>(args: SelectSubset<T, NutritionRecordUpsertArgs<ExtArgs>>): Prisma__NutritionRecordClient<$Result.GetResult<Prisma.$NutritionRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NutritionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionRecordCountArgs} args - Arguments to filter NutritionRecords to count.
     * @example
     * // Count the number of NutritionRecords
     * const count = await prisma.nutritionRecord.count({
     *   where: {
     *     // ... the filter for the NutritionRecords we want to count
     *   }
     * })
    **/
    count<T extends NutritionRecordCountArgs>(
      args?: Subset<T, NutritionRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NutritionRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NutritionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NutritionRecordAggregateArgs>(args: Subset<T, NutritionRecordAggregateArgs>): Prisma.PrismaPromise<GetNutritionRecordAggregateType<T>>

    /**
     * Group by NutritionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionRecordGroupByArgs} args - Group by arguments.
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
      T extends NutritionRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NutritionRecordGroupByArgs['orderBy'] }
        : { orderBy?: NutritionRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NutritionRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNutritionRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NutritionRecord model
   */
  readonly fields: NutritionRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NutritionRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NutritionRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formulaResult<T extends NutritionRecord$formulaResultArgs<ExtArgs> = {}>(args?: Subset<T, NutritionRecord$formulaResultArgs<ExtArgs>>): Prisma__NutritionFormulaResultClient<$Result.GetResult<Prisma.$NutritionFormulaResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NutritionRecord model
   */
  interface NutritionRecordFieldRefs {
    readonly id: FieldRef<"NutritionRecord", 'Int'>
    readonly userId: FieldRef<"NutritionRecord", 'String'>
    readonly energyTarget: FieldRef<"NutritionRecord", 'Float'>
    readonly proteinTarget: FieldRef<"NutritionRecord", 'Float'>
    readonly carbTarget: FieldRef<"NutritionRecord", 'Float'>
    readonly fatTarget: FieldRef<"NutritionRecord", 'Float'>
    readonly formulaResultId: FieldRef<"NutritionRecord", 'Int'>
    readonly createdAt: FieldRef<"NutritionRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NutritionRecord findUnique
   */
  export type NutritionRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionRecord
     */
    select?: NutritionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionRecord
     */
    omit?: NutritionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionRecordInclude<ExtArgs> | null
    /**
     * Filter, which NutritionRecord to fetch.
     */
    where: NutritionRecordWhereUniqueInput
  }

  /**
   * NutritionRecord findUniqueOrThrow
   */
  export type NutritionRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionRecord
     */
    select?: NutritionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionRecord
     */
    omit?: NutritionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionRecordInclude<ExtArgs> | null
    /**
     * Filter, which NutritionRecord to fetch.
     */
    where: NutritionRecordWhereUniqueInput
  }

  /**
   * NutritionRecord findFirst
   */
  export type NutritionRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionRecord
     */
    select?: NutritionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionRecord
     */
    omit?: NutritionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionRecordInclude<ExtArgs> | null
    /**
     * Filter, which NutritionRecord to fetch.
     */
    where?: NutritionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionRecords to fetch.
     */
    orderBy?: NutritionRecordOrderByWithRelationInput | NutritionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NutritionRecords.
     */
    cursor?: NutritionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NutritionRecords.
     */
    distinct?: NutritionRecordScalarFieldEnum | NutritionRecordScalarFieldEnum[]
  }

  /**
   * NutritionRecord findFirstOrThrow
   */
  export type NutritionRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionRecord
     */
    select?: NutritionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionRecord
     */
    omit?: NutritionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionRecordInclude<ExtArgs> | null
    /**
     * Filter, which NutritionRecord to fetch.
     */
    where?: NutritionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionRecords to fetch.
     */
    orderBy?: NutritionRecordOrderByWithRelationInput | NutritionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NutritionRecords.
     */
    cursor?: NutritionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NutritionRecords.
     */
    distinct?: NutritionRecordScalarFieldEnum | NutritionRecordScalarFieldEnum[]
  }

  /**
   * NutritionRecord findMany
   */
  export type NutritionRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionRecord
     */
    select?: NutritionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionRecord
     */
    omit?: NutritionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionRecordInclude<ExtArgs> | null
    /**
     * Filter, which NutritionRecords to fetch.
     */
    where?: NutritionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionRecords to fetch.
     */
    orderBy?: NutritionRecordOrderByWithRelationInput | NutritionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NutritionRecords.
     */
    cursor?: NutritionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionRecords.
     */
    skip?: number
    distinct?: NutritionRecordScalarFieldEnum | NutritionRecordScalarFieldEnum[]
  }

  /**
   * NutritionRecord create
   */
  export type NutritionRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionRecord
     */
    select?: NutritionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionRecord
     */
    omit?: NutritionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a NutritionRecord.
     */
    data: XOR<NutritionRecordCreateInput, NutritionRecordUncheckedCreateInput>
  }

  /**
   * NutritionRecord createMany
   */
  export type NutritionRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NutritionRecords.
     */
    data: NutritionRecordCreateManyInput | NutritionRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NutritionRecord createManyAndReturn
   */
  export type NutritionRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionRecord
     */
    select?: NutritionRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionRecord
     */
    omit?: NutritionRecordOmit<ExtArgs> | null
    /**
     * The data used to create many NutritionRecords.
     */
    data: NutritionRecordCreateManyInput | NutritionRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NutritionRecord update
   */
  export type NutritionRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionRecord
     */
    select?: NutritionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionRecord
     */
    omit?: NutritionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a NutritionRecord.
     */
    data: XOR<NutritionRecordUpdateInput, NutritionRecordUncheckedUpdateInput>
    /**
     * Choose, which NutritionRecord to update.
     */
    where: NutritionRecordWhereUniqueInput
  }

  /**
   * NutritionRecord updateMany
   */
  export type NutritionRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NutritionRecords.
     */
    data: XOR<NutritionRecordUpdateManyMutationInput, NutritionRecordUncheckedUpdateManyInput>
    /**
     * Filter which NutritionRecords to update
     */
    where?: NutritionRecordWhereInput
    /**
     * Limit how many NutritionRecords to update.
     */
    limit?: number
  }

  /**
   * NutritionRecord updateManyAndReturn
   */
  export type NutritionRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionRecord
     */
    select?: NutritionRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionRecord
     */
    omit?: NutritionRecordOmit<ExtArgs> | null
    /**
     * The data used to update NutritionRecords.
     */
    data: XOR<NutritionRecordUpdateManyMutationInput, NutritionRecordUncheckedUpdateManyInput>
    /**
     * Filter which NutritionRecords to update
     */
    where?: NutritionRecordWhereInput
    /**
     * Limit how many NutritionRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NutritionRecord upsert
   */
  export type NutritionRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionRecord
     */
    select?: NutritionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionRecord
     */
    omit?: NutritionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the NutritionRecord to update in case it exists.
     */
    where: NutritionRecordWhereUniqueInput
    /**
     * In case the NutritionRecord found by the `where` argument doesn't exist, create a new NutritionRecord with this data.
     */
    create: XOR<NutritionRecordCreateInput, NutritionRecordUncheckedCreateInput>
    /**
     * In case the NutritionRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NutritionRecordUpdateInput, NutritionRecordUncheckedUpdateInput>
  }

  /**
   * NutritionRecord delete
   */
  export type NutritionRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionRecord
     */
    select?: NutritionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionRecord
     */
    omit?: NutritionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionRecordInclude<ExtArgs> | null
    /**
     * Filter which NutritionRecord to delete.
     */
    where: NutritionRecordWhereUniqueInput
  }

  /**
   * NutritionRecord deleteMany
   */
  export type NutritionRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NutritionRecords to delete
     */
    where?: NutritionRecordWhereInput
    /**
     * Limit how many NutritionRecords to delete.
     */
    limit?: number
  }

  /**
   * NutritionRecord.formulaResult
   */
  export type NutritionRecord$formulaResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionFormulaResult
     */
    select?: NutritionFormulaResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionFormulaResult
     */
    omit?: NutritionFormulaResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionFormulaResultInclude<ExtArgs> | null
    where?: NutritionFormulaResultWhereInput
  }

  /**
   * NutritionRecord without action
   */
  export type NutritionRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionRecord
     */
    select?: NutritionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionRecord
     */
    omit?: NutritionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionRecordInclude<ExtArgs> | null
  }


  /**
   * Model NutritionFormulaResult
   */

  export type AggregateNutritionFormulaResult = {
    _count: NutritionFormulaResultCountAggregateOutputType | null
    _avg: NutritionFormulaResultAvgAggregateOutputType | null
    _sum: NutritionFormulaResultSumAggregateOutputType | null
    _min: NutritionFormulaResultMinAggregateOutputType | null
    _max: NutritionFormulaResultMaxAggregateOutputType | null
  }

  export type NutritionFormulaResultAvgAggregateOutputType = {
    id: number | null
    bmr: number | null
    tee: number | null
    tea: number | null
    stressFactor: number | null
    activityFactor: number | null
    totalEnergyRequirement: number | null
    proteinRequirement: number | null
    carbRequirement: number | null
    fatRequirement: number | null
    fluidRequirement: number | null
  }

  export type NutritionFormulaResultSumAggregateOutputType = {
    id: number | null
    bmr: number | null
    tee: number | null
    tea: number | null
    stressFactor: number | null
    activityFactor: number | null
    totalEnergyRequirement: number | null
    proteinRequirement: number | null
    carbRequirement: number | null
    fatRequirement: number | null
    fluidRequirement: number | null
  }

  export type NutritionFormulaResultMinAggregateOutputType = {
    id: number | null
    userId: string | null
    bmr: number | null
    tee: number | null
    tea: number | null
    stressFactor: number | null
    activityFactor: number | null
    totalEnergyRequirement: number | null
    proteinRequirement: number | null
    carbRequirement: number | null
    fatRequirement: number | null
    fluidRequirement: number | null
    condition: string | null
    createdAt: Date | null
  }

  export type NutritionFormulaResultMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    bmr: number | null
    tee: number | null
    tea: number | null
    stressFactor: number | null
    activityFactor: number | null
    totalEnergyRequirement: number | null
    proteinRequirement: number | null
    carbRequirement: number | null
    fatRequirement: number | null
    fluidRequirement: number | null
    condition: string | null
    createdAt: Date | null
  }

  export type NutritionFormulaResultCountAggregateOutputType = {
    id: number
    userId: number
    bmr: number
    tee: number
    tea: number
    stressFactor: number
    activityFactor: number
    totalEnergyRequirement: number
    proteinRequirement: number
    carbRequirement: number
    fatRequirement: number
    fluidRequirement: number
    condition: number
    createdAt: number
    _all: number
  }


  export type NutritionFormulaResultAvgAggregateInputType = {
    id?: true
    bmr?: true
    tee?: true
    tea?: true
    stressFactor?: true
    activityFactor?: true
    totalEnergyRequirement?: true
    proteinRequirement?: true
    carbRequirement?: true
    fatRequirement?: true
    fluidRequirement?: true
  }

  export type NutritionFormulaResultSumAggregateInputType = {
    id?: true
    bmr?: true
    tee?: true
    tea?: true
    stressFactor?: true
    activityFactor?: true
    totalEnergyRequirement?: true
    proteinRequirement?: true
    carbRequirement?: true
    fatRequirement?: true
    fluidRequirement?: true
  }

  export type NutritionFormulaResultMinAggregateInputType = {
    id?: true
    userId?: true
    bmr?: true
    tee?: true
    tea?: true
    stressFactor?: true
    activityFactor?: true
    totalEnergyRequirement?: true
    proteinRequirement?: true
    carbRequirement?: true
    fatRequirement?: true
    fluidRequirement?: true
    condition?: true
    createdAt?: true
  }

  export type NutritionFormulaResultMaxAggregateInputType = {
    id?: true
    userId?: true
    bmr?: true
    tee?: true
    tea?: true
    stressFactor?: true
    activityFactor?: true
    totalEnergyRequirement?: true
    proteinRequirement?: true
    carbRequirement?: true
    fatRequirement?: true
    fluidRequirement?: true
    condition?: true
    createdAt?: true
  }

  export type NutritionFormulaResultCountAggregateInputType = {
    id?: true
    userId?: true
    bmr?: true
    tee?: true
    tea?: true
    stressFactor?: true
    activityFactor?: true
    totalEnergyRequirement?: true
    proteinRequirement?: true
    carbRequirement?: true
    fatRequirement?: true
    fluidRequirement?: true
    condition?: true
    createdAt?: true
    _all?: true
  }

  export type NutritionFormulaResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NutritionFormulaResult to aggregate.
     */
    where?: NutritionFormulaResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionFormulaResults to fetch.
     */
    orderBy?: NutritionFormulaResultOrderByWithRelationInput | NutritionFormulaResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NutritionFormulaResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionFormulaResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionFormulaResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NutritionFormulaResults
    **/
    _count?: true | NutritionFormulaResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NutritionFormulaResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NutritionFormulaResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NutritionFormulaResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NutritionFormulaResultMaxAggregateInputType
  }

  export type GetNutritionFormulaResultAggregateType<T extends NutritionFormulaResultAggregateArgs> = {
        [P in keyof T & keyof AggregateNutritionFormulaResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNutritionFormulaResult[P]>
      : GetScalarType<T[P], AggregateNutritionFormulaResult[P]>
  }




  export type NutritionFormulaResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NutritionFormulaResultWhereInput
    orderBy?: NutritionFormulaResultOrderByWithAggregationInput | NutritionFormulaResultOrderByWithAggregationInput[]
    by: NutritionFormulaResultScalarFieldEnum[] | NutritionFormulaResultScalarFieldEnum
    having?: NutritionFormulaResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NutritionFormulaResultCountAggregateInputType | true
    _avg?: NutritionFormulaResultAvgAggregateInputType
    _sum?: NutritionFormulaResultSumAggregateInputType
    _min?: NutritionFormulaResultMinAggregateInputType
    _max?: NutritionFormulaResultMaxAggregateInputType
  }

  export type NutritionFormulaResultGroupByOutputType = {
    id: number
    userId: string
    bmr: number
    tee: number
    tea: number
    stressFactor: number
    activityFactor: number
    totalEnergyRequirement: number
    proteinRequirement: number
    carbRequirement: number
    fatRequirement: number
    fluidRequirement: number | null
    condition: string | null
    createdAt: Date
    _count: NutritionFormulaResultCountAggregateOutputType | null
    _avg: NutritionFormulaResultAvgAggregateOutputType | null
    _sum: NutritionFormulaResultSumAggregateOutputType | null
    _min: NutritionFormulaResultMinAggregateOutputType | null
    _max: NutritionFormulaResultMaxAggregateOutputType | null
  }

  type GetNutritionFormulaResultGroupByPayload<T extends NutritionFormulaResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NutritionFormulaResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NutritionFormulaResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NutritionFormulaResultGroupByOutputType[P]>
            : GetScalarType<T[P], NutritionFormulaResultGroupByOutputType[P]>
        }
      >
    >


  export type NutritionFormulaResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bmr?: boolean
    tee?: boolean
    tea?: boolean
    stressFactor?: boolean
    activityFactor?: boolean
    totalEnergyRequirement?: boolean
    proteinRequirement?: boolean
    carbRequirement?: boolean
    fatRequirement?: boolean
    fluidRequirement?: boolean
    condition?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    record?: boolean | NutritionFormulaResult$recordArgs<ExtArgs>
  }, ExtArgs["result"]["nutritionFormulaResult"]>

  export type NutritionFormulaResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bmr?: boolean
    tee?: boolean
    tea?: boolean
    stressFactor?: boolean
    activityFactor?: boolean
    totalEnergyRequirement?: boolean
    proteinRequirement?: boolean
    carbRequirement?: boolean
    fatRequirement?: boolean
    fluidRequirement?: boolean
    condition?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nutritionFormulaResult"]>

  export type NutritionFormulaResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bmr?: boolean
    tee?: boolean
    tea?: boolean
    stressFactor?: boolean
    activityFactor?: boolean
    totalEnergyRequirement?: boolean
    proteinRequirement?: boolean
    carbRequirement?: boolean
    fatRequirement?: boolean
    fluidRequirement?: boolean
    condition?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nutritionFormulaResult"]>

  export type NutritionFormulaResultSelectScalar = {
    id?: boolean
    userId?: boolean
    bmr?: boolean
    tee?: boolean
    tea?: boolean
    stressFactor?: boolean
    activityFactor?: boolean
    totalEnergyRequirement?: boolean
    proteinRequirement?: boolean
    carbRequirement?: boolean
    fatRequirement?: boolean
    fluidRequirement?: boolean
    condition?: boolean
    createdAt?: boolean
  }

  export type NutritionFormulaResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bmr" | "tee" | "tea" | "stressFactor" | "activityFactor" | "totalEnergyRequirement" | "proteinRequirement" | "carbRequirement" | "fatRequirement" | "fluidRequirement" | "condition" | "createdAt", ExtArgs["result"]["nutritionFormulaResult"]>
  export type NutritionFormulaResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    record?: boolean | NutritionFormulaResult$recordArgs<ExtArgs>
  }
  export type NutritionFormulaResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NutritionFormulaResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NutritionFormulaResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NutritionFormulaResult"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      record: Prisma.$NutritionRecordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      bmr: number
      tee: number
      tea: number
      stressFactor: number
      activityFactor: number
      totalEnergyRequirement: number
      proteinRequirement: number
      carbRequirement: number
      fatRequirement: number
      fluidRequirement: number | null
      condition: string | null
      createdAt: Date
    }, ExtArgs["result"]["nutritionFormulaResult"]>
    composites: {}
  }

  type NutritionFormulaResultGetPayload<S extends boolean | null | undefined | NutritionFormulaResultDefaultArgs> = $Result.GetResult<Prisma.$NutritionFormulaResultPayload, S>

  type NutritionFormulaResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NutritionFormulaResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NutritionFormulaResultCountAggregateInputType | true
    }

  export interface NutritionFormulaResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NutritionFormulaResult'], meta: { name: 'NutritionFormulaResult' } }
    /**
     * Find zero or one NutritionFormulaResult that matches the filter.
     * @param {NutritionFormulaResultFindUniqueArgs} args - Arguments to find a NutritionFormulaResult
     * @example
     * // Get one NutritionFormulaResult
     * const nutritionFormulaResult = await prisma.nutritionFormulaResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NutritionFormulaResultFindUniqueArgs>(args: SelectSubset<T, NutritionFormulaResultFindUniqueArgs<ExtArgs>>): Prisma__NutritionFormulaResultClient<$Result.GetResult<Prisma.$NutritionFormulaResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NutritionFormulaResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NutritionFormulaResultFindUniqueOrThrowArgs} args - Arguments to find a NutritionFormulaResult
     * @example
     * // Get one NutritionFormulaResult
     * const nutritionFormulaResult = await prisma.nutritionFormulaResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NutritionFormulaResultFindUniqueOrThrowArgs>(args: SelectSubset<T, NutritionFormulaResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NutritionFormulaResultClient<$Result.GetResult<Prisma.$NutritionFormulaResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NutritionFormulaResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFormulaResultFindFirstArgs} args - Arguments to find a NutritionFormulaResult
     * @example
     * // Get one NutritionFormulaResult
     * const nutritionFormulaResult = await prisma.nutritionFormulaResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NutritionFormulaResultFindFirstArgs>(args?: SelectSubset<T, NutritionFormulaResultFindFirstArgs<ExtArgs>>): Prisma__NutritionFormulaResultClient<$Result.GetResult<Prisma.$NutritionFormulaResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NutritionFormulaResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFormulaResultFindFirstOrThrowArgs} args - Arguments to find a NutritionFormulaResult
     * @example
     * // Get one NutritionFormulaResult
     * const nutritionFormulaResult = await prisma.nutritionFormulaResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NutritionFormulaResultFindFirstOrThrowArgs>(args?: SelectSubset<T, NutritionFormulaResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__NutritionFormulaResultClient<$Result.GetResult<Prisma.$NutritionFormulaResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NutritionFormulaResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFormulaResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NutritionFormulaResults
     * const nutritionFormulaResults = await prisma.nutritionFormulaResult.findMany()
     * 
     * // Get first 10 NutritionFormulaResults
     * const nutritionFormulaResults = await prisma.nutritionFormulaResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nutritionFormulaResultWithIdOnly = await prisma.nutritionFormulaResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NutritionFormulaResultFindManyArgs>(args?: SelectSubset<T, NutritionFormulaResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionFormulaResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NutritionFormulaResult.
     * @param {NutritionFormulaResultCreateArgs} args - Arguments to create a NutritionFormulaResult.
     * @example
     * // Create one NutritionFormulaResult
     * const NutritionFormulaResult = await prisma.nutritionFormulaResult.create({
     *   data: {
     *     // ... data to create a NutritionFormulaResult
     *   }
     * })
     * 
     */
    create<T extends NutritionFormulaResultCreateArgs>(args: SelectSubset<T, NutritionFormulaResultCreateArgs<ExtArgs>>): Prisma__NutritionFormulaResultClient<$Result.GetResult<Prisma.$NutritionFormulaResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NutritionFormulaResults.
     * @param {NutritionFormulaResultCreateManyArgs} args - Arguments to create many NutritionFormulaResults.
     * @example
     * // Create many NutritionFormulaResults
     * const nutritionFormulaResult = await prisma.nutritionFormulaResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NutritionFormulaResultCreateManyArgs>(args?: SelectSubset<T, NutritionFormulaResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NutritionFormulaResults and returns the data saved in the database.
     * @param {NutritionFormulaResultCreateManyAndReturnArgs} args - Arguments to create many NutritionFormulaResults.
     * @example
     * // Create many NutritionFormulaResults
     * const nutritionFormulaResult = await prisma.nutritionFormulaResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NutritionFormulaResults and only return the `id`
     * const nutritionFormulaResultWithIdOnly = await prisma.nutritionFormulaResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NutritionFormulaResultCreateManyAndReturnArgs>(args?: SelectSubset<T, NutritionFormulaResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionFormulaResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NutritionFormulaResult.
     * @param {NutritionFormulaResultDeleteArgs} args - Arguments to delete one NutritionFormulaResult.
     * @example
     * // Delete one NutritionFormulaResult
     * const NutritionFormulaResult = await prisma.nutritionFormulaResult.delete({
     *   where: {
     *     // ... filter to delete one NutritionFormulaResult
     *   }
     * })
     * 
     */
    delete<T extends NutritionFormulaResultDeleteArgs>(args: SelectSubset<T, NutritionFormulaResultDeleteArgs<ExtArgs>>): Prisma__NutritionFormulaResultClient<$Result.GetResult<Prisma.$NutritionFormulaResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NutritionFormulaResult.
     * @param {NutritionFormulaResultUpdateArgs} args - Arguments to update one NutritionFormulaResult.
     * @example
     * // Update one NutritionFormulaResult
     * const nutritionFormulaResult = await prisma.nutritionFormulaResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NutritionFormulaResultUpdateArgs>(args: SelectSubset<T, NutritionFormulaResultUpdateArgs<ExtArgs>>): Prisma__NutritionFormulaResultClient<$Result.GetResult<Prisma.$NutritionFormulaResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NutritionFormulaResults.
     * @param {NutritionFormulaResultDeleteManyArgs} args - Arguments to filter NutritionFormulaResults to delete.
     * @example
     * // Delete a few NutritionFormulaResults
     * const { count } = await prisma.nutritionFormulaResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NutritionFormulaResultDeleteManyArgs>(args?: SelectSubset<T, NutritionFormulaResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NutritionFormulaResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFormulaResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NutritionFormulaResults
     * const nutritionFormulaResult = await prisma.nutritionFormulaResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NutritionFormulaResultUpdateManyArgs>(args: SelectSubset<T, NutritionFormulaResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NutritionFormulaResults and returns the data updated in the database.
     * @param {NutritionFormulaResultUpdateManyAndReturnArgs} args - Arguments to update many NutritionFormulaResults.
     * @example
     * // Update many NutritionFormulaResults
     * const nutritionFormulaResult = await prisma.nutritionFormulaResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NutritionFormulaResults and only return the `id`
     * const nutritionFormulaResultWithIdOnly = await prisma.nutritionFormulaResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends NutritionFormulaResultUpdateManyAndReturnArgs>(args: SelectSubset<T, NutritionFormulaResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NutritionFormulaResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NutritionFormulaResult.
     * @param {NutritionFormulaResultUpsertArgs} args - Arguments to update or create a NutritionFormulaResult.
     * @example
     * // Update or create a NutritionFormulaResult
     * const nutritionFormulaResult = await prisma.nutritionFormulaResult.upsert({
     *   create: {
     *     // ... data to create a NutritionFormulaResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NutritionFormulaResult we want to update
     *   }
     * })
     */
    upsert<T extends NutritionFormulaResultUpsertArgs>(args: SelectSubset<T, NutritionFormulaResultUpsertArgs<ExtArgs>>): Prisma__NutritionFormulaResultClient<$Result.GetResult<Prisma.$NutritionFormulaResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NutritionFormulaResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFormulaResultCountArgs} args - Arguments to filter NutritionFormulaResults to count.
     * @example
     * // Count the number of NutritionFormulaResults
     * const count = await prisma.nutritionFormulaResult.count({
     *   where: {
     *     // ... the filter for the NutritionFormulaResults we want to count
     *   }
     * })
    **/
    count<T extends NutritionFormulaResultCountArgs>(
      args?: Subset<T, NutritionFormulaResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NutritionFormulaResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NutritionFormulaResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFormulaResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NutritionFormulaResultAggregateArgs>(args: Subset<T, NutritionFormulaResultAggregateArgs>): Prisma.PrismaPromise<GetNutritionFormulaResultAggregateType<T>>

    /**
     * Group by NutritionFormulaResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NutritionFormulaResultGroupByArgs} args - Group by arguments.
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
      T extends NutritionFormulaResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NutritionFormulaResultGroupByArgs['orderBy'] }
        : { orderBy?: NutritionFormulaResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NutritionFormulaResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNutritionFormulaResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NutritionFormulaResult model
   */
  readonly fields: NutritionFormulaResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NutritionFormulaResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NutritionFormulaResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    record<T extends NutritionFormulaResult$recordArgs<ExtArgs> = {}>(args?: Subset<T, NutritionFormulaResult$recordArgs<ExtArgs>>): Prisma__NutritionRecordClient<$Result.GetResult<Prisma.$NutritionRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NutritionFormulaResult model
   */
  interface NutritionFormulaResultFieldRefs {
    readonly id: FieldRef<"NutritionFormulaResult", 'Int'>
    readonly userId: FieldRef<"NutritionFormulaResult", 'String'>
    readonly bmr: FieldRef<"NutritionFormulaResult", 'Float'>
    readonly tee: FieldRef<"NutritionFormulaResult", 'Float'>
    readonly tea: FieldRef<"NutritionFormulaResult", 'Float'>
    readonly stressFactor: FieldRef<"NutritionFormulaResult", 'Float'>
    readonly activityFactor: FieldRef<"NutritionFormulaResult", 'Float'>
    readonly totalEnergyRequirement: FieldRef<"NutritionFormulaResult", 'Float'>
    readonly proteinRequirement: FieldRef<"NutritionFormulaResult", 'Float'>
    readonly carbRequirement: FieldRef<"NutritionFormulaResult", 'Float'>
    readonly fatRequirement: FieldRef<"NutritionFormulaResult", 'Float'>
    readonly fluidRequirement: FieldRef<"NutritionFormulaResult", 'Float'>
    readonly condition: FieldRef<"NutritionFormulaResult", 'String'>
    readonly createdAt: FieldRef<"NutritionFormulaResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NutritionFormulaResult findUnique
   */
  export type NutritionFormulaResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionFormulaResult
     */
    select?: NutritionFormulaResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionFormulaResult
     */
    omit?: NutritionFormulaResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionFormulaResultInclude<ExtArgs> | null
    /**
     * Filter, which NutritionFormulaResult to fetch.
     */
    where: NutritionFormulaResultWhereUniqueInput
  }

  /**
   * NutritionFormulaResult findUniqueOrThrow
   */
  export type NutritionFormulaResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionFormulaResult
     */
    select?: NutritionFormulaResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionFormulaResult
     */
    omit?: NutritionFormulaResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionFormulaResultInclude<ExtArgs> | null
    /**
     * Filter, which NutritionFormulaResult to fetch.
     */
    where: NutritionFormulaResultWhereUniqueInput
  }

  /**
   * NutritionFormulaResult findFirst
   */
  export type NutritionFormulaResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionFormulaResult
     */
    select?: NutritionFormulaResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionFormulaResult
     */
    omit?: NutritionFormulaResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionFormulaResultInclude<ExtArgs> | null
    /**
     * Filter, which NutritionFormulaResult to fetch.
     */
    where?: NutritionFormulaResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionFormulaResults to fetch.
     */
    orderBy?: NutritionFormulaResultOrderByWithRelationInput | NutritionFormulaResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NutritionFormulaResults.
     */
    cursor?: NutritionFormulaResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionFormulaResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionFormulaResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NutritionFormulaResults.
     */
    distinct?: NutritionFormulaResultScalarFieldEnum | NutritionFormulaResultScalarFieldEnum[]
  }

  /**
   * NutritionFormulaResult findFirstOrThrow
   */
  export type NutritionFormulaResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionFormulaResult
     */
    select?: NutritionFormulaResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionFormulaResult
     */
    omit?: NutritionFormulaResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionFormulaResultInclude<ExtArgs> | null
    /**
     * Filter, which NutritionFormulaResult to fetch.
     */
    where?: NutritionFormulaResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionFormulaResults to fetch.
     */
    orderBy?: NutritionFormulaResultOrderByWithRelationInput | NutritionFormulaResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NutritionFormulaResults.
     */
    cursor?: NutritionFormulaResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionFormulaResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionFormulaResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NutritionFormulaResults.
     */
    distinct?: NutritionFormulaResultScalarFieldEnum | NutritionFormulaResultScalarFieldEnum[]
  }

  /**
   * NutritionFormulaResult findMany
   */
  export type NutritionFormulaResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionFormulaResult
     */
    select?: NutritionFormulaResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionFormulaResult
     */
    omit?: NutritionFormulaResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionFormulaResultInclude<ExtArgs> | null
    /**
     * Filter, which NutritionFormulaResults to fetch.
     */
    where?: NutritionFormulaResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NutritionFormulaResults to fetch.
     */
    orderBy?: NutritionFormulaResultOrderByWithRelationInput | NutritionFormulaResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NutritionFormulaResults.
     */
    cursor?: NutritionFormulaResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NutritionFormulaResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NutritionFormulaResults.
     */
    skip?: number
    distinct?: NutritionFormulaResultScalarFieldEnum | NutritionFormulaResultScalarFieldEnum[]
  }

  /**
   * NutritionFormulaResult create
   */
  export type NutritionFormulaResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionFormulaResult
     */
    select?: NutritionFormulaResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionFormulaResult
     */
    omit?: NutritionFormulaResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionFormulaResultInclude<ExtArgs> | null
    /**
     * The data needed to create a NutritionFormulaResult.
     */
    data: XOR<NutritionFormulaResultCreateInput, NutritionFormulaResultUncheckedCreateInput>
  }

  /**
   * NutritionFormulaResult createMany
   */
  export type NutritionFormulaResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NutritionFormulaResults.
     */
    data: NutritionFormulaResultCreateManyInput | NutritionFormulaResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NutritionFormulaResult createManyAndReturn
   */
  export type NutritionFormulaResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionFormulaResult
     */
    select?: NutritionFormulaResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionFormulaResult
     */
    omit?: NutritionFormulaResultOmit<ExtArgs> | null
    /**
     * The data used to create many NutritionFormulaResults.
     */
    data: NutritionFormulaResultCreateManyInput | NutritionFormulaResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionFormulaResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NutritionFormulaResult update
   */
  export type NutritionFormulaResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionFormulaResult
     */
    select?: NutritionFormulaResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionFormulaResult
     */
    omit?: NutritionFormulaResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionFormulaResultInclude<ExtArgs> | null
    /**
     * The data needed to update a NutritionFormulaResult.
     */
    data: XOR<NutritionFormulaResultUpdateInput, NutritionFormulaResultUncheckedUpdateInput>
    /**
     * Choose, which NutritionFormulaResult to update.
     */
    where: NutritionFormulaResultWhereUniqueInput
  }

  /**
   * NutritionFormulaResult updateMany
   */
  export type NutritionFormulaResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NutritionFormulaResults.
     */
    data: XOR<NutritionFormulaResultUpdateManyMutationInput, NutritionFormulaResultUncheckedUpdateManyInput>
    /**
     * Filter which NutritionFormulaResults to update
     */
    where?: NutritionFormulaResultWhereInput
    /**
     * Limit how many NutritionFormulaResults to update.
     */
    limit?: number
  }

  /**
   * NutritionFormulaResult updateManyAndReturn
   */
  export type NutritionFormulaResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionFormulaResult
     */
    select?: NutritionFormulaResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionFormulaResult
     */
    omit?: NutritionFormulaResultOmit<ExtArgs> | null
    /**
     * The data used to update NutritionFormulaResults.
     */
    data: XOR<NutritionFormulaResultUpdateManyMutationInput, NutritionFormulaResultUncheckedUpdateManyInput>
    /**
     * Filter which NutritionFormulaResults to update
     */
    where?: NutritionFormulaResultWhereInput
    /**
     * Limit how many NutritionFormulaResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionFormulaResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NutritionFormulaResult upsert
   */
  export type NutritionFormulaResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionFormulaResult
     */
    select?: NutritionFormulaResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionFormulaResult
     */
    omit?: NutritionFormulaResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionFormulaResultInclude<ExtArgs> | null
    /**
     * The filter to search for the NutritionFormulaResult to update in case it exists.
     */
    where: NutritionFormulaResultWhereUniqueInput
    /**
     * In case the NutritionFormulaResult found by the `where` argument doesn't exist, create a new NutritionFormulaResult with this data.
     */
    create: XOR<NutritionFormulaResultCreateInput, NutritionFormulaResultUncheckedCreateInput>
    /**
     * In case the NutritionFormulaResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NutritionFormulaResultUpdateInput, NutritionFormulaResultUncheckedUpdateInput>
  }

  /**
   * NutritionFormulaResult delete
   */
  export type NutritionFormulaResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionFormulaResult
     */
    select?: NutritionFormulaResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionFormulaResult
     */
    omit?: NutritionFormulaResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionFormulaResultInclude<ExtArgs> | null
    /**
     * Filter which NutritionFormulaResult to delete.
     */
    where: NutritionFormulaResultWhereUniqueInput
  }

  /**
   * NutritionFormulaResult deleteMany
   */
  export type NutritionFormulaResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NutritionFormulaResults to delete
     */
    where?: NutritionFormulaResultWhereInput
    /**
     * Limit how many NutritionFormulaResults to delete.
     */
    limit?: number
  }

  /**
   * NutritionFormulaResult.record
   */
  export type NutritionFormulaResult$recordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionRecord
     */
    select?: NutritionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionRecord
     */
    omit?: NutritionRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionRecordInclude<ExtArgs> | null
    where?: NutritionRecordWhereInput
  }

  /**
   * NutritionFormulaResult without action
   */
  export type NutritionFormulaResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NutritionFormulaResult
     */
    select?: NutritionFormulaResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NutritionFormulaResult
     */
    omit?: NutritionFormulaResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NutritionFormulaResultInclude<ExtArgs> | null
  }


  /**
   * Model Disease
   */

  export type AggregateDisease = {
    _count: DiseaseCountAggregateOutputType | null
    _avg: DiseaseAvgAggregateOutputType | null
    _sum: DiseaseSumAggregateOutputType | null
    _min: DiseaseMinAggregateOutputType | null
    _max: DiseaseMaxAggregateOutputType | null
  }

  export type DiseaseAvgAggregateOutputType = {
    id: number | null
  }

  export type DiseaseSumAggregateOutputType = {
    id: number | null
  }

  export type DiseaseMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DiseaseMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DiseaseCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DiseaseAvgAggregateInputType = {
    id?: true
  }

  export type DiseaseSumAggregateInputType = {
    id?: true
  }

  export type DiseaseMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DiseaseMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DiseaseCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DiseaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disease to aggregate.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Diseases
    **/
    _count?: true | DiseaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiseaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiseaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiseaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiseaseMaxAggregateInputType
  }

  export type GetDiseaseAggregateType<T extends DiseaseAggregateArgs> = {
        [P in keyof T & keyof AggregateDisease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisease[P]>
      : GetScalarType<T[P], AggregateDisease[P]>
  }




  export type DiseaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiseaseWhereInput
    orderBy?: DiseaseOrderByWithAggregationInput | DiseaseOrderByWithAggregationInput[]
    by: DiseaseScalarFieldEnum[] | DiseaseScalarFieldEnum
    having?: DiseaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiseaseCountAggregateInputType | true
    _avg?: DiseaseAvgAggregateInputType
    _sum?: DiseaseSumAggregateInputType
    _min?: DiseaseMinAggregateInputType
    _max?: DiseaseMaxAggregateInputType
  }

  export type DiseaseGroupByOutputType = {
    id: number
    name: string
    _count: DiseaseCountAggregateOutputType | null
    _avg: DiseaseAvgAggregateOutputType | null
    _sum: DiseaseSumAggregateOutputType | null
    _min: DiseaseMinAggregateOutputType | null
    _max: DiseaseMaxAggregateOutputType | null
  }

  type GetDiseaseGroupByPayload<T extends DiseaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiseaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiseaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiseaseGroupByOutputType[P]>
            : GetScalarType<T[P], DiseaseGroupByOutputType[P]>
        }
      >
    >


  export type DiseaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Disease$usersArgs<ExtArgs>
    _count?: boolean | DiseaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["disease"]>

  export type DiseaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["disease"]>

  export type DiseaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["disease"]>

  export type DiseaseSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DiseaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["disease"]>
  export type DiseaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Disease$usersArgs<ExtArgs>
    _count?: boolean | DiseaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiseaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DiseaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DiseasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Disease"
    objects: {
      users: Prisma.$UserDiseasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["disease"]>
    composites: {}
  }

  type DiseaseGetPayload<S extends boolean | null | undefined | DiseaseDefaultArgs> = $Result.GetResult<Prisma.$DiseasePayload, S>

  type DiseaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiseaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiseaseCountAggregateInputType | true
    }

  export interface DiseaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Disease'], meta: { name: 'Disease' } }
    /**
     * Find zero or one Disease that matches the filter.
     * @param {DiseaseFindUniqueArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiseaseFindUniqueArgs>(args: SelectSubset<T, DiseaseFindUniqueArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Disease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiseaseFindUniqueOrThrowArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiseaseFindUniqueOrThrowArgs>(args: SelectSubset<T, DiseaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindFirstArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiseaseFindFirstArgs>(args?: SelectSubset<T, DiseaseFindFirstArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Disease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindFirstOrThrowArgs} args - Arguments to find a Disease
     * @example
     * // Get one Disease
     * const disease = await prisma.disease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiseaseFindFirstOrThrowArgs>(args?: SelectSubset<T, DiseaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diseases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diseases
     * const diseases = await prisma.disease.findMany()
     * 
     * // Get first 10 Diseases
     * const diseases = await prisma.disease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diseaseWithIdOnly = await prisma.disease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiseaseFindManyArgs>(args?: SelectSubset<T, DiseaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Disease.
     * @param {DiseaseCreateArgs} args - Arguments to create a Disease.
     * @example
     * // Create one Disease
     * const Disease = await prisma.disease.create({
     *   data: {
     *     // ... data to create a Disease
     *   }
     * })
     * 
     */
    create<T extends DiseaseCreateArgs>(args: SelectSubset<T, DiseaseCreateArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diseases.
     * @param {DiseaseCreateManyArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const disease = await prisma.disease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiseaseCreateManyArgs>(args?: SelectSubset<T, DiseaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diseases and returns the data saved in the database.
     * @param {DiseaseCreateManyAndReturnArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const disease = await prisma.disease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diseases and only return the `id`
     * const diseaseWithIdOnly = await prisma.disease.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiseaseCreateManyAndReturnArgs>(args?: SelectSubset<T, DiseaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Disease.
     * @param {DiseaseDeleteArgs} args - Arguments to delete one Disease.
     * @example
     * // Delete one Disease
     * const Disease = await prisma.disease.delete({
     *   where: {
     *     // ... filter to delete one Disease
     *   }
     * })
     * 
     */
    delete<T extends DiseaseDeleteArgs>(args: SelectSubset<T, DiseaseDeleteArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Disease.
     * @param {DiseaseUpdateArgs} args - Arguments to update one Disease.
     * @example
     * // Update one Disease
     * const disease = await prisma.disease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiseaseUpdateArgs>(args: SelectSubset<T, DiseaseUpdateArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diseases.
     * @param {DiseaseDeleteManyArgs} args - Arguments to filter Diseases to delete.
     * @example
     * // Delete a few Diseases
     * const { count } = await prisma.disease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiseaseDeleteManyArgs>(args?: SelectSubset<T, DiseaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diseases
     * const disease = await prisma.disease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiseaseUpdateManyArgs>(args: SelectSubset<T, DiseaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diseases and returns the data updated in the database.
     * @param {DiseaseUpdateManyAndReturnArgs} args - Arguments to update many Diseases.
     * @example
     * // Update many Diseases
     * const disease = await prisma.disease.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diseases and only return the `id`
     * const diseaseWithIdOnly = await prisma.disease.updateManyAndReturn({
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
    updateManyAndReturn<T extends DiseaseUpdateManyAndReturnArgs>(args: SelectSubset<T, DiseaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Disease.
     * @param {DiseaseUpsertArgs} args - Arguments to update or create a Disease.
     * @example
     * // Update or create a Disease
     * const disease = await prisma.disease.upsert({
     *   create: {
     *     // ... data to create a Disease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disease we want to update
     *   }
     * })
     */
    upsert<T extends DiseaseUpsertArgs>(args: SelectSubset<T, DiseaseUpsertArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseCountArgs} args - Arguments to filter Diseases to count.
     * @example
     * // Count the number of Diseases
     * const count = await prisma.disease.count({
     *   where: {
     *     // ... the filter for the Diseases we want to count
     *   }
     * })
    **/
    count<T extends DiseaseCountArgs>(
      args?: Subset<T, DiseaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiseaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiseaseAggregateArgs>(args: Subset<T, DiseaseAggregateArgs>): Prisma.PrismaPromise<GetDiseaseAggregateType<T>>

    /**
     * Group by Disease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseaseGroupByArgs} args - Group by arguments.
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
      T extends DiseaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiseaseGroupByArgs['orderBy'] }
        : { orderBy?: DiseaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiseaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiseaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Disease model
   */
  readonly fields: DiseaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Disease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiseaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Disease$usersArgs<ExtArgs> = {}>(args?: Subset<T, Disease$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Disease model
   */
  interface DiseaseFieldRefs {
    readonly id: FieldRef<"Disease", 'Int'>
    readonly name: FieldRef<"Disease", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Disease findUnique
   */
  export type DiseaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease findUniqueOrThrow
   */
  export type DiseaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease findFirst
   */
  export type DiseaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diseases.
     */
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease findFirstOrThrow
   */
  export type DiseaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Disease to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Diseases.
     */
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease findMany
   */
  export type DiseaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter, which Diseases to fetch.
     */
    where?: DiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Diseases to fetch.
     */
    orderBy?: DiseaseOrderByWithRelationInput | DiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Diseases.
     */
    cursor?: DiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Diseases.
     */
    skip?: number
    distinct?: DiseaseScalarFieldEnum | DiseaseScalarFieldEnum[]
  }

  /**
   * Disease create
   */
  export type DiseaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Disease.
     */
    data: XOR<DiseaseCreateInput, DiseaseUncheckedCreateInput>
  }

  /**
   * Disease createMany
   */
  export type DiseaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Diseases.
     */
    data: DiseaseCreateManyInput | DiseaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disease createManyAndReturn
   */
  export type DiseaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * The data used to create many Diseases.
     */
    data: DiseaseCreateManyInput | DiseaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Disease update
   */
  export type DiseaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Disease.
     */
    data: XOR<DiseaseUpdateInput, DiseaseUncheckedUpdateInput>
    /**
     * Choose, which Disease to update.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease updateMany
   */
  export type DiseaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Diseases.
     */
    data: XOR<DiseaseUpdateManyMutationInput, DiseaseUncheckedUpdateManyInput>
    /**
     * Filter which Diseases to update
     */
    where?: DiseaseWhereInput
    /**
     * Limit how many Diseases to update.
     */
    limit?: number
  }

  /**
   * Disease updateManyAndReturn
   */
  export type DiseaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * The data used to update Diseases.
     */
    data: XOR<DiseaseUpdateManyMutationInput, DiseaseUncheckedUpdateManyInput>
    /**
     * Filter which Diseases to update
     */
    where?: DiseaseWhereInput
    /**
     * Limit how many Diseases to update.
     */
    limit?: number
  }

  /**
   * Disease upsert
   */
  export type DiseaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Disease to update in case it exists.
     */
    where: DiseaseWhereUniqueInput
    /**
     * In case the Disease found by the `where` argument doesn't exist, create a new Disease with this data.
     */
    create: XOR<DiseaseCreateInput, DiseaseUncheckedCreateInput>
    /**
     * In case the Disease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiseaseUpdateInput, DiseaseUncheckedUpdateInput>
  }

  /**
   * Disease delete
   */
  export type DiseaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
    /**
     * Filter which Disease to delete.
     */
    where: DiseaseWhereUniqueInput
  }

  /**
   * Disease deleteMany
   */
  export type DiseaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Diseases to delete
     */
    where?: DiseaseWhereInput
    /**
     * Limit how many Diseases to delete.
     */
    limit?: number
  }

  /**
   * Disease.users
   */
  export type Disease$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    where?: UserDiseaseWhereInput
    orderBy?: UserDiseaseOrderByWithRelationInput | UserDiseaseOrderByWithRelationInput[]
    cursor?: UserDiseaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDiseaseScalarFieldEnum | UserDiseaseScalarFieldEnum[]
  }

  /**
   * Disease without action
   */
  export type DiseaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Disease
     */
    select?: DiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Disease
     */
    omit?: DiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiseaseInclude<ExtArgs> | null
  }


  /**
   * Model UserDisease
   */

  export type AggregateUserDisease = {
    _count: UserDiseaseCountAggregateOutputType | null
    _avg: UserDiseaseAvgAggregateOutputType | null
    _sum: UserDiseaseSumAggregateOutputType | null
    _min: UserDiseaseMinAggregateOutputType | null
    _max: UserDiseaseMaxAggregateOutputType | null
  }

  export type UserDiseaseAvgAggregateOutputType = {
    id: number | null
    diseaseId: number | null
  }

  export type UserDiseaseSumAggregateOutputType = {
    id: number | null
    diseaseId: number | null
  }

  export type UserDiseaseMinAggregateOutputType = {
    id: number | null
    userId: string | null
    diseaseId: number | null
    notes: string | null
  }

  export type UserDiseaseMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    diseaseId: number | null
    notes: string | null
  }

  export type UserDiseaseCountAggregateOutputType = {
    id: number
    userId: number
    diseaseId: number
    notes: number
    _all: number
  }


  export type UserDiseaseAvgAggregateInputType = {
    id?: true
    diseaseId?: true
  }

  export type UserDiseaseSumAggregateInputType = {
    id?: true
    diseaseId?: true
  }

  export type UserDiseaseMinAggregateInputType = {
    id?: true
    userId?: true
    diseaseId?: true
    notes?: true
  }

  export type UserDiseaseMaxAggregateInputType = {
    id?: true
    userId?: true
    diseaseId?: true
    notes?: true
  }

  export type UserDiseaseCountAggregateInputType = {
    id?: true
    userId?: true
    diseaseId?: true
    notes?: true
    _all?: true
  }

  export type UserDiseaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDisease to aggregate.
     */
    where?: UserDiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiseases to fetch.
     */
    orderBy?: UserDiseaseOrderByWithRelationInput | UserDiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDiseases
    **/
    _count?: true | UserDiseaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDiseaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDiseaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDiseaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDiseaseMaxAggregateInputType
  }

  export type GetUserDiseaseAggregateType<T extends UserDiseaseAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDisease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDisease[P]>
      : GetScalarType<T[P], AggregateUserDisease[P]>
  }




  export type UserDiseaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDiseaseWhereInput
    orderBy?: UserDiseaseOrderByWithAggregationInput | UserDiseaseOrderByWithAggregationInput[]
    by: UserDiseaseScalarFieldEnum[] | UserDiseaseScalarFieldEnum
    having?: UserDiseaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDiseaseCountAggregateInputType | true
    _avg?: UserDiseaseAvgAggregateInputType
    _sum?: UserDiseaseSumAggregateInputType
    _min?: UserDiseaseMinAggregateInputType
    _max?: UserDiseaseMaxAggregateInputType
  }

  export type UserDiseaseGroupByOutputType = {
    id: number
    userId: string
    diseaseId: number
    notes: string | null
    _count: UserDiseaseCountAggregateOutputType | null
    _avg: UserDiseaseAvgAggregateOutputType | null
    _sum: UserDiseaseSumAggregateOutputType | null
    _min: UserDiseaseMinAggregateOutputType | null
    _max: UserDiseaseMaxAggregateOutputType | null
  }

  type GetUserDiseaseGroupByPayload<T extends UserDiseaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDiseaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDiseaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDiseaseGroupByOutputType[P]>
            : GetScalarType<T[P], UserDiseaseGroupByOutputType[P]>
        }
      >
    >


  export type UserDiseaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    diseaseId?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDisease"]>

  export type UserDiseaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    diseaseId?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDisease"]>

  export type UserDiseaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    diseaseId?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDisease"]>

  export type UserDiseaseSelectScalar = {
    id?: boolean
    userId?: boolean
    diseaseId?: boolean
    notes?: boolean
  }

  export type UserDiseaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "diseaseId" | "notes", ExtArgs["result"]["userDisease"]>
  export type UserDiseaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }
  export type UserDiseaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }
  export type UserDiseaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    disease?: boolean | DiseaseDefaultArgs<ExtArgs>
  }

  export type $UserDiseasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDisease"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      disease: Prisma.$DiseasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      diseaseId: number
      notes: string | null
    }, ExtArgs["result"]["userDisease"]>
    composites: {}
  }

  type UserDiseaseGetPayload<S extends boolean | null | undefined | UserDiseaseDefaultArgs> = $Result.GetResult<Prisma.$UserDiseasePayload, S>

  type UserDiseaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDiseaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDiseaseCountAggregateInputType | true
    }

  export interface UserDiseaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDisease'], meta: { name: 'UserDisease' } }
    /**
     * Find zero or one UserDisease that matches the filter.
     * @param {UserDiseaseFindUniqueArgs} args - Arguments to find a UserDisease
     * @example
     * // Get one UserDisease
     * const userDisease = await prisma.userDisease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDiseaseFindUniqueArgs>(args: SelectSubset<T, UserDiseaseFindUniqueArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDisease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDiseaseFindUniqueOrThrowArgs} args - Arguments to find a UserDisease
     * @example
     * // Get one UserDisease
     * const userDisease = await prisma.userDisease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDiseaseFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDiseaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDisease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiseaseFindFirstArgs} args - Arguments to find a UserDisease
     * @example
     * // Get one UserDisease
     * const userDisease = await prisma.userDisease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDiseaseFindFirstArgs>(args?: SelectSubset<T, UserDiseaseFindFirstArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDisease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiseaseFindFirstOrThrowArgs} args - Arguments to find a UserDisease
     * @example
     * // Get one UserDisease
     * const userDisease = await prisma.userDisease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDiseaseFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDiseaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDiseases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiseaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDiseases
     * const userDiseases = await prisma.userDisease.findMany()
     * 
     * // Get first 10 UserDiseases
     * const userDiseases = await prisma.userDisease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDiseaseWithIdOnly = await prisma.userDisease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDiseaseFindManyArgs>(args?: SelectSubset<T, UserDiseaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDisease.
     * @param {UserDiseaseCreateArgs} args - Arguments to create a UserDisease.
     * @example
     * // Create one UserDisease
     * const UserDisease = await prisma.userDisease.create({
     *   data: {
     *     // ... data to create a UserDisease
     *   }
     * })
     * 
     */
    create<T extends UserDiseaseCreateArgs>(args: SelectSubset<T, UserDiseaseCreateArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDiseases.
     * @param {UserDiseaseCreateManyArgs} args - Arguments to create many UserDiseases.
     * @example
     * // Create many UserDiseases
     * const userDisease = await prisma.userDisease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDiseaseCreateManyArgs>(args?: SelectSubset<T, UserDiseaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDiseases and returns the data saved in the database.
     * @param {UserDiseaseCreateManyAndReturnArgs} args - Arguments to create many UserDiseases.
     * @example
     * // Create many UserDiseases
     * const userDisease = await prisma.userDisease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDiseases and only return the `id`
     * const userDiseaseWithIdOnly = await prisma.userDisease.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDiseaseCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDiseaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDisease.
     * @param {UserDiseaseDeleteArgs} args - Arguments to delete one UserDisease.
     * @example
     * // Delete one UserDisease
     * const UserDisease = await prisma.userDisease.delete({
     *   where: {
     *     // ... filter to delete one UserDisease
     *   }
     * })
     * 
     */
    delete<T extends UserDiseaseDeleteArgs>(args: SelectSubset<T, UserDiseaseDeleteArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDisease.
     * @param {UserDiseaseUpdateArgs} args - Arguments to update one UserDisease.
     * @example
     * // Update one UserDisease
     * const userDisease = await prisma.userDisease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDiseaseUpdateArgs>(args: SelectSubset<T, UserDiseaseUpdateArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDiseases.
     * @param {UserDiseaseDeleteManyArgs} args - Arguments to filter UserDiseases to delete.
     * @example
     * // Delete a few UserDiseases
     * const { count } = await prisma.userDisease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDiseaseDeleteManyArgs>(args?: SelectSubset<T, UserDiseaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDiseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiseaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDiseases
     * const userDisease = await prisma.userDisease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDiseaseUpdateManyArgs>(args: SelectSubset<T, UserDiseaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDiseases and returns the data updated in the database.
     * @param {UserDiseaseUpdateManyAndReturnArgs} args - Arguments to update many UserDiseases.
     * @example
     * // Update many UserDiseases
     * const userDisease = await prisma.userDisease.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDiseases and only return the `id`
     * const userDiseaseWithIdOnly = await prisma.userDisease.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserDiseaseUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDiseaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDisease.
     * @param {UserDiseaseUpsertArgs} args - Arguments to update or create a UserDisease.
     * @example
     * // Update or create a UserDisease
     * const userDisease = await prisma.userDisease.upsert({
     *   create: {
     *     // ... data to create a UserDisease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDisease we want to update
     *   }
     * })
     */
    upsert<T extends UserDiseaseUpsertArgs>(args: SelectSubset<T, UserDiseaseUpsertArgs<ExtArgs>>): Prisma__UserDiseaseClient<$Result.GetResult<Prisma.$UserDiseasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDiseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiseaseCountArgs} args - Arguments to filter UserDiseases to count.
     * @example
     * // Count the number of UserDiseases
     * const count = await prisma.userDisease.count({
     *   where: {
     *     // ... the filter for the UserDiseases we want to count
     *   }
     * })
    **/
    count<T extends UserDiseaseCountArgs>(
      args?: Subset<T, UserDiseaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDiseaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDisease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiseaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDiseaseAggregateArgs>(args: Subset<T, UserDiseaseAggregateArgs>): Prisma.PrismaPromise<GetUserDiseaseAggregateType<T>>

    /**
     * Group by UserDisease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiseaseGroupByArgs} args - Group by arguments.
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
      T extends UserDiseaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDiseaseGroupByArgs['orderBy'] }
        : { orderBy?: UserDiseaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDiseaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDiseaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDisease model
   */
  readonly fields: UserDiseaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDisease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDiseaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    disease<T extends DiseaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiseaseDefaultArgs<ExtArgs>>): Prisma__DiseaseClient<$Result.GetResult<Prisma.$DiseasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserDisease model
   */
  interface UserDiseaseFieldRefs {
    readonly id: FieldRef<"UserDisease", 'Int'>
    readonly userId: FieldRef<"UserDisease", 'String'>
    readonly diseaseId: FieldRef<"UserDisease", 'Int'>
    readonly notes: FieldRef<"UserDisease", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserDisease findUnique
   */
  export type UserDiseaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * Filter, which UserDisease to fetch.
     */
    where: UserDiseaseWhereUniqueInput
  }

  /**
   * UserDisease findUniqueOrThrow
   */
  export type UserDiseaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * Filter, which UserDisease to fetch.
     */
    where: UserDiseaseWhereUniqueInput
  }

  /**
   * UserDisease findFirst
   */
  export type UserDiseaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * Filter, which UserDisease to fetch.
     */
    where?: UserDiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiseases to fetch.
     */
    orderBy?: UserDiseaseOrderByWithRelationInput | UserDiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDiseases.
     */
    cursor?: UserDiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDiseases.
     */
    distinct?: UserDiseaseScalarFieldEnum | UserDiseaseScalarFieldEnum[]
  }

  /**
   * UserDisease findFirstOrThrow
   */
  export type UserDiseaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * Filter, which UserDisease to fetch.
     */
    where?: UserDiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiseases to fetch.
     */
    orderBy?: UserDiseaseOrderByWithRelationInput | UserDiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDiseases.
     */
    cursor?: UserDiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDiseases.
     */
    distinct?: UserDiseaseScalarFieldEnum | UserDiseaseScalarFieldEnum[]
  }

  /**
   * UserDisease findMany
   */
  export type UserDiseaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * Filter, which UserDiseases to fetch.
     */
    where?: UserDiseaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiseases to fetch.
     */
    orderBy?: UserDiseaseOrderByWithRelationInput | UserDiseaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDiseases.
     */
    cursor?: UserDiseaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiseases.
     */
    skip?: number
    distinct?: UserDiseaseScalarFieldEnum | UserDiseaseScalarFieldEnum[]
  }

  /**
   * UserDisease create
   */
  export type UserDiseaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDisease.
     */
    data: XOR<UserDiseaseCreateInput, UserDiseaseUncheckedCreateInput>
  }

  /**
   * UserDisease createMany
   */
  export type UserDiseaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDiseases.
     */
    data: UserDiseaseCreateManyInput | UserDiseaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDisease createManyAndReturn
   */
  export type UserDiseaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * The data used to create many UserDiseases.
     */
    data: UserDiseaseCreateManyInput | UserDiseaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDisease update
   */
  export type UserDiseaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDisease.
     */
    data: XOR<UserDiseaseUpdateInput, UserDiseaseUncheckedUpdateInput>
    /**
     * Choose, which UserDisease to update.
     */
    where: UserDiseaseWhereUniqueInput
  }

  /**
   * UserDisease updateMany
   */
  export type UserDiseaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDiseases.
     */
    data: XOR<UserDiseaseUpdateManyMutationInput, UserDiseaseUncheckedUpdateManyInput>
    /**
     * Filter which UserDiseases to update
     */
    where?: UserDiseaseWhereInput
    /**
     * Limit how many UserDiseases to update.
     */
    limit?: number
  }

  /**
   * UserDisease updateManyAndReturn
   */
  export type UserDiseaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * The data used to update UserDiseases.
     */
    data: XOR<UserDiseaseUpdateManyMutationInput, UserDiseaseUncheckedUpdateManyInput>
    /**
     * Filter which UserDiseases to update
     */
    where?: UserDiseaseWhereInput
    /**
     * Limit how many UserDiseases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDisease upsert
   */
  export type UserDiseaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDisease to update in case it exists.
     */
    where: UserDiseaseWhereUniqueInput
    /**
     * In case the UserDisease found by the `where` argument doesn't exist, create a new UserDisease with this data.
     */
    create: XOR<UserDiseaseCreateInput, UserDiseaseUncheckedCreateInput>
    /**
     * In case the UserDisease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDiseaseUpdateInput, UserDiseaseUncheckedUpdateInput>
  }

  /**
   * UserDisease delete
   */
  export type UserDiseaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
    /**
     * Filter which UserDisease to delete.
     */
    where: UserDiseaseWhereUniqueInput
  }

  /**
   * UserDisease deleteMany
   */
  export type UserDiseaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDiseases to delete
     */
    where?: UserDiseaseWhereInput
    /**
     * Limit how many UserDiseases to delete.
     */
    limit?: number
  }

  /**
   * UserDisease without action
   */
  export type UserDiseaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDisease
     */
    select?: UserDiseaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDisease
     */
    omit?: UserDiseaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiseaseInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    isEmailVerified: 'isEmailVerified',
    name: 'name',
    gender: 'gender',
    birthDate: 'birthDate',
    height: 'height',
    weight: 'weight',
    activityLevel: 'activityLevel',
    stressLevel: 'stressLevel',
    physiologicalStatus: 'physiologicalStatus',
    dietGoal: 'dietGoal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BmrCalculationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bmr: 'bmr',
    tee: 'tee',
    tea: 'tea',
    createdAt: 'createdAt'
  };

  export type BmrCalculationScalarFieldEnum = (typeof BmrCalculationScalarFieldEnum)[keyof typeof BmrCalculationScalarFieldEnum]


  export const NutritionRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    energyTarget: 'energyTarget',
    proteinTarget: 'proteinTarget',
    carbTarget: 'carbTarget',
    fatTarget: 'fatTarget',
    formulaResultId: 'formulaResultId',
    createdAt: 'createdAt'
  };

  export type NutritionRecordScalarFieldEnum = (typeof NutritionRecordScalarFieldEnum)[keyof typeof NutritionRecordScalarFieldEnum]


  export const NutritionFormulaResultScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bmr: 'bmr',
    tee: 'tee',
    tea: 'tea',
    stressFactor: 'stressFactor',
    activityFactor: 'activityFactor',
    totalEnergyRequirement: 'totalEnergyRequirement',
    proteinRequirement: 'proteinRequirement',
    carbRequirement: 'carbRequirement',
    fatRequirement: 'fatRequirement',
    fluidRequirement: 'fluidRequirement',
    condition: 'condition',
    createdAt: 'createdAt'
  };

  export type NutritionFormulaResultScalarFieldEnum = (typeof NutritionFormulaResultScalarFieldEnum)[keyof typeof NutritionFormulaResultScalarFieldEnum]


  export const DiseaseScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DiseaseScalarFieldEnum = (typeof DiseaseScalarFieldEnum)[keyof typeof DiseaseScalarFieldEnum]


  export const UserDiseaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    diseaseId: 'diseaseId',
    notes: 'notes'
  };

  export type UserDiseaseScalarFieldEnum = (typeof UserDiseaseScalarFieldEnum)[keyof typeof UserDiseaseScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ActivityLevel'
   */
  export type EnumActivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLevel'>
    


  /**
   * Reference to a field of type 'ActivityLevel[]'
   */
  export type ListEnumActivityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityLevel[]'>
    


  /**
   * Reference to a field of type 'StressLevel'
   */
  export type EnumStressLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StressLevel'>
    


  /**
   * Reference to a field of type 'StressLevel[]'
   */
  export type ListEnumStressLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StressLevel[]'>
    


  /**
   * Reference to a field of type 'PhysiologicalStatus'
   */
  export type EnumPhysiologicalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhysiologicalStatus'>
    


  /**
   * Reference to a field of type 'PhysiologicalStatus[]'
   */
  export type ListEnumPhysiologicalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PhysiologicalStatus[]'>
    


  /**
   * Reference to a field of type 'DietGoal'
   */
  export type EnumDietGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DietGoal'>
    


  /**
   * Reference to a field of type 'DietGoal[]'
   */
  export type ListEnumDietGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DietGoal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isEmailVerified?: BoolFilter<"User"> | boolean
    name?: StringFilter<"User"> | string
    gender?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    height?: FloatNullableFilter<"User"> | number | null
    weight?: FloatNullableFilter<"User"> | number | null
    activityLevel?: EnumActivityLevelNullableFilter<"User"> | $Enums.ActivityLevel | null
    stressLevel?: EnumStressLevelNullableFilter<"User"> | $Enums.StressLevel | null
    physiologicalStatus?: EnumPhysiologicalStatusNullableFilter<"User"> | $Enums.PhysiologicalStatus | null
    dietGoal?: EnumDietGoalNullableFilter<"User"> | $Enums.DietGoal | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bmrCalculations?: BmrCalculationListRelationFilter
    nutritionRecords?: NutritionRecordListRelationFilter
    formulaResults?: NutritionFormulaResultListRelationFilter
    diseases?: UserDiseaseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    name?: SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    activityLevel?: SortOrderInput | SortOrder
    stressLevel?: SortOrderInput | SortOrder
    physiologicalStatus?: SortOrderInput | SortOrder
    dietGoal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    bmrCalculations?: BmrCalculationOrderByRelationAggregateInput
    nutritionRecords?: NutritionRecordOrderByRelationAggregateInput
    formulaResults?: NutritionFormulaResultOrderByRelationAggregateInput
    diseases?: UserDiseaseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isEmailVerified?: BoolFilter<"User"> | boolean
    name?: StringFilter<"User"> | string
    gender?: StringNullableFilter<"User"> | string | null
    birthDate?: DateTimeNullableFilter<"User"> | Date | string | null
    height?: FloatNullableFilter<"User"> | number | null
    weight?: FloatNullableFilter<"User"> | number | null
    activityLevel?: EnumActivityLevelNullableFilter<"User"> | $Enums.ActivityLevel | null
    stressLevel?: EnumStressLevelNullableFilter<"User"> | $Enums.StressLevel | null
    physiologicalStatus?: EnumPhysiologicalStatusNullableFilter<"User"> | $Enums.PhysiologicalStatus | null
    dietGoal?: EnumDietGoalNullableFilter<"User"> | $Enums.DietGoal | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    bmrCalculations?: BmrCalculationListRelationFilter
    nutritionRecords?: NutritionRecordListRelationFilter
    formulaResults?: NutritionFormulaResultListRelationFilter
    diseases?: UserDiseaseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    name?: SortOrder
    gender?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    activityLevel?: SortOrderInput | SortOrder
    stressLevel?: SortOrderInput | SortOrder
    physiologicalStatus?: SortOrderInput | SortOrder
    dietGoal?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    name?: StringWithAggregatesFilter<"User"> | string
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    height?: FloatNullableWithAggregatesFilter<"User"> | number | null
    weight?: FloatNullableWithAggregatesFilter<"User"> | number | null
    activityLevel?: EnumActivityLevelNullableWithAggregatesFilter<"User"> | $Enums.ActivityLevel | null
    stressLevel?: EnumStressLevelNullableWithAggregatesFilter<"User"> | $Enums.StressLevel | null
    physiologicalStatus?: EnumPhysiologicalStatusNullableWithAggregatesFilter<"User"> | $Enums.PhysiologicalStatus | null
    dietGoal?: EnumDietGoalNullableWithAggregatesFilter<"User"> | $Enums.DietGoal | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BmrCalculationWhereInput = {
    AND?: BmrCalculationWhereInput | BmrCalculationWhereInput[]
    OR?: BmrCalculationWhereInput[]
    NOT?: BmrCalculationWhereInput | BmrCalculationWhereInput[]
    id?: IntFilter<"BmrCalculation"> | number
    userId?: StringFilter<"BmrCalculation"> | string
    bmr?: FloatFilter<"BmrCalculation"> | number
    tee?: FloatFilter<"BmrCalculation"> | number
    tea?: FloatFilter<"BmrCalculation"> | number
    createdAt?: DateTimeFilter<"BmrCalculation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BmrCalculationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bmr?: SortOrder
    tee?: SortOrder
    tea?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BmrCalculationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BmrCalculationWhereInput | BmrCalculationWhereInput[]
    OR?: BmrCalculationWhereInput[]
    NOT?: BmrCalculationWhereInput | BmrCalculationWhereInput[]
    userId?: StringFilter<"BmrCalculation"> | string
    bmr?: FloatFilter<"BmrCalculation"> | number
    tee?: FloatFilter<"BmrCalculation"> | number
    tea?: FloatFilter<"BmrCalculation"> | number
    createdAt?: DateTimeFilter<"BmrCalculation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BmrCalculationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bmr?: SortOrder
    tee?: SortOrder
    tea?: SortOrder
    createdAt?: SortOrder
    _count?: BmrCalculationCountOrderByAggregateInput
    _avg?: BmrCalculationAvgOrderByAggregateInput
    _max?: BmrCalculationMaxOrderByAggregateInput
    _min?: BmrCalculationMinOrderByAggregateInput
    _sum?: BmrCalculationSumOrderByAggregateInput
  }

  export type BmrCalculationScalarWhereWithAggregatesInput = {
    AND?: BmrCalculationScalarWhereWithAggregatesInput | BmrCalculationScalarWhereWithAggregatesInput[]
    OR?: BmrCalculationScalarWhereWithAggregatesInput[]
    NOT?: BmrCalculationScalarWhereWithAggregatesInput | BmrCalculationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BmrCalculation"> | number
    userId?: StringWithAggregatesFilter<"BmrCalculation"> | string
    bmr?: FloatWithAggregatesFilter<"BmrCalculation"> | number
    tee?: FloatWithAggregatesFilter<"BmrCalculation"> | number
    tea?: FloatWithAggregatesFilter<"BmrCalculation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BmrCalculation"> | Date | string
  }

  export type NutritionRecordWhereInput = {
    AND?: NutritionRecordWhereInput | NutritionRecordWhereInput[]
    OR?: NutritionRecordWhereInput[]
    NOT?: NutritionRecordWhereInput | NutritionRecordWhereInput[]
    id?: IntFilter<"NutritionRecord"> | number
    userId?: StringFilter<"NutritionRecord"> | string
    energyTarget?: FloatFilter<"NutritionRecord"> | number
    proteinTarget?: FloatFilter<"NutritionRecord"> | number
    carbTarget?: FloatFilter<"NutritionRecord"> | number
    fatTarget?: FloatFilter<"NutritionRecord"> | number
    formulaResultId?: IntNullableFilter<"NutritionRecord"> | number | null
    createdAt?: DateTimeFilter<"NutritionRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    formulaResult?: XOR<NutritionFormulaResultNullableScalarRelationFilter, NutritionFormulaResultWhereInput> | null
  }

  export type NutritionRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    energyTarget?: SortOrder
    proteinTarget?: SortOrder
    carbTarget?: SortOrder
    fatTarget?: SortOrder
    formulaResultId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    formulaResult?: NutritionFormulaResultOrderByWithRelationInput
  }

  export type NutritionRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    formulaResultId?: number
    AND?: NutritionRecordWhereInput | NutritionRecordWhereInput[]
    OR?: NutritionRecordWhereInput[]
    NOT?: NutritionRecordWhereInput | NutritionRecordWhereInput[]
    userId?: StringFilter<"NutritionRecord"> | string
    energyTarget?: FloatFilter<"NutritionRecord"> | number
    proteinTarget?: FloatFilter<"NutritionRecord"> | number
    carbTarget?: FloatFilter<"NutritionRecord"> | number
    fatTarget?: FloatFilter<"NutritionRecord"> | number
    createdAt?: DateTimeFilter<"NutritionRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    formulaResult?: XOR<NutritionFormulaResultNullableScalarRelationFilter, NutritionFormulaResultWhereInput> | null
  }, "id" | "formulaResultId">

  export type NutritionRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    energyTarget?: SortOrder
    proteinTarget?: SortOrder
    carbTarget?: SortOrder
    fatTarget?: SortOrder
    formulaResultId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NutritionRecordCountOrderByAggregateInput
    _avg?: NutritionRecordAvgOrderByAggregateInput
    _max?: NutritionRecordMaxOrderByAggregateInput
    _min?: NutritionRecordMinOrderByAggregateInput
    _sum?: NutritionRecordSumOrderByAggregateInput
  }

  export type NutritionRecordScalarWhereWithAggregatesInput = {
    AND?: NutritionRecordScalarWhereWithAggregatesInput | NutritionRecordScalarWhereWithAggregatesInput[]
    OR?: NutritionRecordScalarWhereWithAggregatesInput[]
    NOT?: NutritionRecordScalarWhereWithAggregatesInput | NutritionRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NutritionRecord"> | number
    userId?: StringWithAggregatesFilter<"NutritionRecord"> | string
    energyTarget?: FloatWithAggregatesFilter<"NutritionRecord"> | number
    proteinTarget?: FloatWithAggregatesFilter<"NutritionRecord"> | number
    carbTarget?: FloatWithAggregatesFilter<"NutritionRecord"> | number
    fatTarget?: FloatWithAggregatesFilter<"NutritionRecord"> | number
    formulaResultId?: IntNullableWithAggregatesFilter<"NutritionRecord"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"NutritionRecord"> | Date | string
  }

  export type NutritionFormulaResultWhereInput = {
    AND?: NutritionFormulaResultWhereInput | NutritionFormulaResultWhereInput[]
    OR?: NutritionFormulaResultWhereInput[]
    NOT?: NutritionFormulaResultWhereInput | NutritionFormulaResultWhereInput[]
    id?: IntFilter<"NutritionFormulaResult"> | number
    userId?: StringFilter<"NutritionFormulaResult"> | string
    bmr?: FloatFilter<"NutritionFormulaResult"> | number
    tee?: FloatFilter<"NutritionFormulaResult"> | number
    tea?: FloatFilter<"NutritionFormulaResult"> | number
    stressFactor?: FloatFilter<"NutritionFormulaResult"> | number
    activityFactor?: FloatFilter<"NutritionFormulaResult"> | number
    totalEnergyRequirement?: FloatFilter<"NutritionFormulaResult"> | number
    proteinRequirement?: FloatFilter<"NutritionFormulaResult"> | number
    carbRequirement?: FloatFilter<"NutritionFormulaResult"> | number
    fatRequirement?: FloatFilter<"NutritionFormulaResult"> | number
    fluidRequirement?: FloatNullableFilter<"NutritionFormulaResult"> | number | null
    condition?: StringNullableFilter<"NutritionFormulaResult"> | string | null
    createdAt?: DateTimeFilter<"NutritionFormulaResult"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    record?: XOR<NutritionRecordNullableScalarRelationFilter, NutritionRecordWhereInput> | null
  }

  export type NutritionFormulaResultOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bmr?: SortOrder
    tee?: SortOrder
    tea?: SortOrder
    stressFactor?: SortOrder
    activityFactor?: SortOrder
    totalEnergyRequirement?: SortOrder
    proteinRequirement?: SortOrder
    carbRequirement?: SortOrder
    fatRequirement?: SortOrder
    fluidRequirement?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    record?: NutritionRecordOrderByWithRelationInput
  }

  export type NutritionFormulaResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NutritionFormulaResultWhereInput | NutritionFormulaResultWhereInput[]
    OR?: NutritionFormulaResultWhereInput[]
    NOT?: NutritionFormulaResultWhereInput | NutritionFormulaResultWhereInput[]
    userId?: StringFilter<"NutritionFormulaResult"> | string
    bmr?: FloatFilter<"NutritionFormulaResult"> | number
    tee?: FloatFilter<"NutritionFormulaResult"> | number
    tea?: FloatFilter<"NutritionFormulaResult"> | number
    stressFactor?: FloatFilter<"NutritionFormulaResult"> | number
    activityFactor?: FloatFilter<"NutritionFormulaResult"> | number
    totalEnergyRequirement?: FloatFilter<"NutritionFormulaResult"> | number
    proteinRequirement?: FloatFilter<"NutritionFormulaResult"> | number
    carbRequirement?: FloatFilter<"NutritionFormulaResult"> | number
    fatRequirement?: FloatFilter<"NutritionFormulaResult"> | number
    fluidRequirement?: FloatNullableFilter<"NutritionFormulaResult"> | number | null
    condition?: StringNullableFilter<"NutritionFormulaResult"> | string | null
    createdAt?: DateTimeFilter<"NutritionFormulaResult"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    record?: XOR<NutritionRecordNullableScalarRelationFilter, NutritionRecordWhereInput> | null
  }, "id">

  export type NutritionFormulaResultOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bmr?: SortOrder
    tee?: SortOrder
    tea?: SortOrder
    stressFactor?: SortOrder
    activityFactor?: SortOrder
    totalEnergyRequirement?: SortOrder
    proteinRequirement?: SortOrder
    carbRequirement?: SortOrder
    fatRequirement?: SortOrder
    fluidRequirement?: SortOrderInput | SortOrder
    condition?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NutritionFormulaResultCountOrderByAggregateInput
    _avg?: NutritionFormulaResultAvgOrderByAggregateInput
    _max?: NutritionFormulaResultMaxOrderByAggregateInput
    _min?: NutritionFormulaResultMinOrderByAggregateInput
    _sum?: NutritionFormulaResultSumOrderByAggregateInput
  }

  export type NutritionFormulaResultScalarWhereWithAggregatesInput = {
    AND?: NutritionFormulaResultScalarWhereWithAggregatesInput | NutritionFormulaResultScalarWhereWithAggregatesInput[]
    OR?: NutritionFormulaResultScalarWhereWithAggregatesInput[]
    NOT?: NutritionFormulaResultScalarWhereWithAggregatesInput | NutritionFormulaResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NutritionFormulaResult"> | number
    userId?: StringWithAggregatesFilter<"NutritionFormulaResult"> | string
    bmr?: FloatWithAggregatesFilter<"NutritionFormulaResult"> | number
    tee?: FloatWithAggregatesFilter<"NutritionFormulaResult"> | number
    tea?: FloatWithAggregatesFilter<"NutritionFormulaResult"> | number
    stressFactor?: FloatWithAggregatesFilter<"NutritionFormulaResult"> | number
    activityFactor?: FloatWithAggregatesFilter<"NutritionFormulaResult"> | number
    totalEnergyRequirement?: FloatWithAggregatesFilter<"NutritionFormulaResult"> | number
    proteinRequirement?: FloatWithAggregatesFilter<"NutritionFormulaResult"> | number
    carbRequirement?: FloatWithAggregatesFilter<"NutritionFormulaResult"> | number
    fatRequirement?: FloatWithAggregatesFilter<"NutritionFormulaResult"> | number
    fluidRequirement?: FloatNullableWithAggregatesFilter<"NutritionFormulaResult"> | number | null
    condition?: StringNullableWithAggregatesFilter<"NutritionFormulaResult"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NutritionFormulaResult"> | Date | string
  }

  export type DiseaseWhereInput = {
    AND?: DiseaseWhereInput | DiseaseWhereInput[]
    OR?: DiseaseWhereInput[]
    NOT?: DiseaseWhereInput | DiseaseWhereInput[]
    id?: IntFilter<"Disease"> | number
    name?: StringFilter<"Disease"> | string
    users?: UserDiseaseListRelationFilter
  }

  export type DiseaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserDiseaseOrderByRelationAggregateInput
  }

  export type DiseaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DiseaseWhereInput | DiseaseWhereInput[]
    OR?: DiseaseWhereInput[]
    NOT?: DiseaseWhereInput | DiseaseWhereInput[]
    name?: StringFilter<"Disease"> | string
    users?: UserDiseaseListRelationFilter
  }, "id">

  export type DiseaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DiseaseCountOrderByAggregateInput
    _avg?: DiseaseAvgOrderByAggregateInput
    _max?: DiseaseMaxOrderByAggregateInput
    _min?: DiseaseMinOrderByAggregateInput
    _sum?: DiseaseSumOrderByAggregateInput
  }

  export type DiseaseScalarWhereWithAggregatesInput = {
    AND?: DiseaseScalarWhereWithAggregatesInput | DiseaseScalarWhereWithAggregatesInput[]
    OR?: DiseaseScalarWhereWithAggregatesInput[]
    NOT?: DiseaseScalarWhereWithAggregatesInput | DiseaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Disease"> | number
    name?: StringWithAggregatesFilter<"Disease"> | string
  }

  export type UserDiseaseWhereInput = {
    AND?: UserDiseaseWhereInput | UserDiseaseWhereInput[]
    OR?: UserDiseaseWhereInput[]
    NOT?: UserDiseaseWhereInput | UserDiseaseWhereInput[]
    id?: IntFilter<"UserDisease"> | number
    userId?: StringFilter<"UserDisease"> | string
    diseaseId?: IntFilter<"UserDisease"> | number
    notes?: StringNullableFilter<"UserDisease"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    disease?: XOR<DiseaseScalarRelationFilter, DiseaseWhereInput>
  }

  export type UserDiseaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    diseaseId?: SortOrder
    notes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    disease?: DiseaseOrderByWithRelationInput
  }

  export type UserDiseaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserDiseaseWhereInput | UserDiseaseWhereInput[]
    OR?: UserDiseaseWhereInput[]
    NOT?: UserDiseaseWhereInput | UserDiseaseWhereInput[]
    userId?: StringFilter<"UserDisease"> | string
    diseaseId?: IntFilter<"UserDisease"> | number
    notes?: StringNullableFilter<"UserDisease"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    disease?: XOR<DiseaseScalarRelationFilter, DiseaseWhereInput>
  }, "id">

  export type UserDiseaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    diseaseId?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: UserDiseaseCountOrderByAggregateInput
    _avg?: UserDiseaseAvgOrderByAggregateInput
    _max?: UserDiseaseMaxOrderByAggregateInput
    _min?: UserDiseaseMinOrderByAggregateInput
    _sum?: UserDiseaseSumOrderByAggregateInput
  }

  export type UserDiseaseScalarWhereWithAggregatesInput = {
    AND?: UserDiseaseScalarWhereWithAggregatesInput | UserDiseaseScalarWhereWithAggregatesInput[]
    OR?: UserDiseaseScalarWhereWithAggregatesInput[]
    NOT?: UserDiseaseScalarWhereWithAggregatesInput | UserDiseaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserDisease"> | number
    userId?: StringWithAggregatesFilter<"UserDisease"> | string
    diseaseId?: IntWithAggregatesFilter<"UserDisease"> | number
    notes?: StringNullableWithAggregatesFilter<"UserDisease"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    name: string
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    stressLevel?: $Enums.StressLevel | null
    physiologicalStatus?: $Enums.PhysiologicalStatus | null
    dietGoal?: $Enums.DietGoal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bmrCalculations?: BmrCalculationCreateNestedManyWithoutUserInput
    nutritionRecords?: NutritionRecordCreateNestedManyWithoutUserInput
    formulaResults?: NutritionFormulaResultCreateNestedManyWithoutUserInput
    diseases?: UserDiseaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    name: string
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    stressLevel?: $Enums.StressLevel | null
    physiologicalStatus?: $Enums.PhysiologicalStatus | null
    dietGoal?: $Enums.DietGoal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bmrCalculations?: BmrCalculationUncheckedCreateNestedManyWithoutUserInput
    nutritionRecords?: NutritionRecordUncheckedCreateNestedManyWithoutUserInput
    formulaResults?: NutritionFormulaResultUncheckedCreateNestedManyWithoutUserInput
    diseases?: UserDiseaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    physiologicalStatus?: NullableEnumPhysiologicalStatusFieldUpdateOperationsInput | $Enums.PhysiologicalStatus | null
    dietGoal?: NullableEnumDietGoalFieldUpdateOperationsInput | $Enums.DietGoal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bmrCalculations?: BmrCalculationUpdateManyWithoutUserNestedInput
    nutritionRecords?: NutritionRecordUpdateManyWithoutUserNestedInput
    formulaResults?: NutritionFormulaResultUpdateManyWithoutUserNestedInput
    diseases?: UserDiseaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    physiologicalStatus?: NullableEnumPhysiologicalStatusFieldUpdateOperationsInput | $Enums.PhysiologicalStatus | null
    dietGoal?: NullableEnumDietGoalFieldUpdateOperationsInput | $Enums.DietGoal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bmrCalculations?: BmrCalculationUncheckedUpdateManyWithoutUserNestedInput
    nutritionRecords?: NutritionRecordUncheckedUpdateManyWithoutUserNestedInput
    formulaResults?: NutritionFormulaResultUncheckedUpdateManyWithoutUserNestedInput
    diseases?: UserDiseaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    name: string
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    stressLevel?: $Enums.StressLevel | null
    physiologicalStatus?: $Enums.PhysiologicalStatus | null
    dietGoal?: $Enums.DietGoal | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    physiologicalStatus?: NullableEnumPhysiologicalStatusFieldUpdateOperationsInput | $Enums.PhysiologicalStatus | null
    dietGoal?: NullableEnumDietGoalFieldUpdateOperationsInput | $Enums.DietGoal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    physiologicalStatus?: NullableEnumPhysiologicalStatusFieldUpdateOperationsInput | $Enums.PhysiologicalStatus | null
    dietGoal?: NullableEnumDietGoalFieldUpdateOperationsInput | $Enums.DietGoal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BmrCalculationCreateInput = {
    bmr: number
    tee: number
    tea: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBmrCalculationsInput
  }

  export type BmrCalculationUncheckedCreateInput = {
    id?: number
    userId: string
    bmr: number
    tee: number
    tea: number
    createdAt?: Date | string
  }

  export type BmrCalculationUpdateInput = {
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBmrCalculationsNestedInput
  }

  export type BmrCalculationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BmrCalculationCreateManyInput = {
    id?: number
    userId: string
    bmr: number
    tee: number
    tea: number
    createdAt?: Date | string
  }

  export type BmrCalculationUpdateManyMutationInput = {
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BmrCalculationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionRecordCreateInput = {
    energyTarget: number
    proteinTarget: number
    carbTarget: number
    fatTarget: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNutritionRecordsInput
    formulaResult?: NutritionFormulaResultCreateNestedOneWithoutRecordInput
  }

  export type NutritionRecordUncheckedCreateInput = {
    id?: number
    userId: string
    energyTarget: number
    proteinTarget: number
    carbTarget: number
    fatTarget: number
    formulaResultId?: number | null
    createdAt?: Date | string
  }

  export type NutritionRecordUpdateInput = {
    energyTarget?: FloatFieldUpdateOperationsInput | number
    proteinTarget?: FloatFieldUpdateOperationsInput | number
    carbTarget?: FloatFieldUpdateOperationsInput | number
    fatTarget?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNutritionRecordsNestedInput
    formulaResult?: NutritionFormulaResultUpdateOneWithoutRecordNestedInput
  }

  export type NutritionRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    energyTarget?: FloatFieldUpdateOperationsInput | number
    proteinTarget?: FloatFieldUpdateOperationsInput | number
    carbTarget?: FloatFieldUpdateOperationsInput | number
    fatTarget?: FloatFieldUpdateOperationsInput | number
    formulaResultId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionRecordCreateManyInput = {
    id?: number
    userId: string
    energyTarget: number
    proteinTarget: number
    carbTarget: number
    fatTarget: number
    formulaResultId?: number | null
    createdAt?: Date | string
  }

  export type NutritionRecordUpdateManyMutationInput = {
    energyTarget?: FloatFieldUpdateOperationsInput | number
    proteinTarget?: FloatFieldUpdateOperationsInput | number
    carbTarget?: FloatFieldUpdateOperationsInput | number
    fatTarget?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    energyTarget?: FloatFieldUpdateOperationsInput | number
    proteinTarget?: FloatFieldUpdateOperationsInput | number
    carbTarget?: FloatFieldUpdateOperationsInput | number
    fatTarget?: FloatFieldUpdateOperationsInput | number
    formulaResultId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionFormulaResultCreateInput = {
    bmr: number
    tee: number
    tea: number
    stressFactor: number
    activityFactor: number
    totalEnergyRequirement: number
    proteinRequirement: number
    carbRequirement: number
    fatRequirement: number
    fluidRequirement?: number | null
    condition?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFormulaResultsInput
    record?: NutritionRecordCreateNestedOneWithoutFormulaResultInput
  }

  export type NutritionFormulaResultUncheckedCreateInput = {
    id?: number
    userId: string
    bmr: number
    tee: number
    tea: number
    stressFactor: number
    activityFactor: number
    totalEnergyRequirement: number
    proteinRequirement: number
    carbRequirement: number
    fatRequirement: number
    fluidRequirement?: number | null
    condition?: string | null
    createdAt?: Date | string
    record?: NutritionRecordUncheckedCreateNestedOneWithoutFormulaResultInput
  }

  export type NutritionFormulaResultUpdateInput = {
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    stressFactor?: FloatFieldUpdateOperationsInput | number
    activityFactor?: FloatFieldUpdateOperationsInput | number
    totalEnergyRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    carbRequirement?: FloatFieldUpdateOperationsInput | number
    fatRequirement?: FloatFieldUpdateOperationsInput | number
    fluidRequirement?: NullableFloatFieldUpdateOperationsInput | number | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFormulaResultsNestedInput
    record?: NutritionRecordUpdateOneWithoutFormulaResultNestedInput
  }

  export type NutritionFormulaResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    stressFactor?: FloatFieldUpdateOperationsInput | number
    activityFactor?: FloatFieldUpdateOperationsInput | number
    totalEnergyRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    carbRequirement?: FloatFieldUpdateOperationsInput | number
    fatRequirement?: FloatFieldUpdateOperationsInput | number
    fluidRequirement?: NullableFloatFieldUpdateOperationsInput | number | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    record?: NutritionRecordUncheckedUpdateOneWithoutFormulaResultNestedInput
  }

  export type NutritionFormulaResultCreateManyInput = {
    id?: number
    userId: string
    bmr: number
    tee: number
    tea: number
    stressFactor: number
    activityFactor: number
    totalEnergyRequirement: number
    proteinRequirement: number
    carbRequirement: number
    fatRequirement: number
    fluidRequirement?: number | null
    condition?: string | null
    createdAt?: Date | string
  }

  export type NutritionFormulaResultUpdateManyMutationInput = {
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    stressFactor?: FloatFieldUpdateOperationsInput | number
    activityFactor?: FloatFieldUpdateOperationsInput | number
    totalEnergyRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    carbRequirement?: FloatFieldUpdateOperationsInput | number
    fatRequirement?: FloatFieldUpdateOperationsInput | number
    fluidRequirement?: NullableFloatFieldUpdateOperationsInput | number | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionFormulaResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    stressFactor?: FloatFieldUpdateOperationsInput | number
    activityFactor?: FloatFieldUpdateOperationsInput | number
    totalEnergyRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    carbRequirement?: FloatFieldUpdateOperationsInput | number
    fatRequirement?: FloatFieldUpdateOperationsInput | number
    fluidRequirement?: NullableFloatFieldUpdateOperationsInput | number | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiseaseCreateInput = {
    name: string
    users?: UserDiseaseCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserDiseaseUncheckedCreateNestedManyWithoutDiseaseInput
  }

  export type DiseaseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserDiseaseUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserDiseaseUncheckedUpdateManyWithoutDiseaseNestedInput
  }

  export type DiseaseCreateManyInput = {
    id?: number
    name: string
  }

  export type DiseaseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DiseaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserDiseaseCreateInput = {
    notes?: string | null
    user: UserCreateNestedOneWithoutDiseasesInput
    disease: DiseaseCreateNestedOneWithoutUsersInput
  }

  export type UserDiseaseUncheckedCreateInput = {
    id?: number
    userId: string
    diseaseId: number
    notes?: string | null
  }

  export type UserDiseaseUpdateInput = {
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDiseasesNestedInput
    disease?: DiseaseUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserDiseaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    diseaseId?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDiseaseCreateManyInput = {
    id?: number
    userId: string
    diseaseId: number
    notes?: string | null
  }

  export type UserDiseaseUpdateManyMutationInput = {
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDiseaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    diseaseId?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type EnumActivityLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityLevelNullableFilter<$PrismaModel> | $Enums.ActivityLevel | null
  }

  export type EnumStressLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StressLevel | EnumStressLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStressLevelNullableFilter<$PrismaModel> | $Enums.StressLevel | null
  }

  export type EnumPhysiologicalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PhysiologicalStatus | EnumPhysiologicalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PhysiologicalStatus[] | ListEnumPhysiologicalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PhysiologicalStatus[] | ListEnumPhysiologicalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPhysiologicalStatusNullableFilter<$PrismaModel> | $Enums.PhysiologicalStatus | null
  }

  export type EnumDietGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DietGoal | EnumDietGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.DietGoal[] | ListEnumDietGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DietGoal[] | ListEnumDietGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDietGoalNullableFilter<$PrismaModel> | $Enums.DietGoal | null
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

  export type BmrCalculationListRelationFilter = {
    every?: BmrCalculationWhereInput
    some?: BmrCalculationWhereInput
    none?: BmrCalculationWhereInput
  }

  export type NutritionRecordListRelationFilter = {
    every?: NutritionRecordWhereInput
    some?: NutritionRecordWhereInput
    none?: NutritionRecordWhereInput
  }

  export type NutritionFormulaResultListRelationFilter = {
    every?: NutritionFormulaResultWhereInput
    some?: NutritionFormulaResultWhereInput
    none?: NutritionFormulaResultWhereInput
  }

  export type UserDiseaseListRelationFilter = {
    every?: UserDiseaseWhereInput
    some?: UserDiseaseWhereInput
    none?: UserDiseaseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BmrCalculationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NutritionRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NutritionFormulaResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserDiseaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    activityLevel?: SortOrder
    stressLevel?: SortOrder
    physiologicalStatus?: SortOrder
    dietGoal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    height?: SortOrder
    weight?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    activityLevel?: SortOrder
    stressLevel?: SortOrder
    physiologicalStatus?: SortOrder
    dietGoal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    isEmailVerified?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    activityLevel?: SortOrder
    stressLevel?: SortOrder
    physiologicalStatus?: SortOrder
    dietGoal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    height?: SortOrder
    weight?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type EnumActivityLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumActivityLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumActivityLevelNullableFilter<$PrismaModel>
  }

  export type EnumStressLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StressLevel | EnumStressLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStressLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.StressLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStressLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumStressLevelNullableFilter<$PrismaModel>
  }

  export type EnumPhysiologicalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhysiologicalStatus | EnumPhysiologicalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PhysiologicalStatus[] | ListEnumPhysiologicalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PhysiologicalStatus[] | ListEnumPhysiologicalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPhysiologicalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PhysiologicalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPhysiologicalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPhysiologicalStatusNullableFilter<$PrismaModel>
  }

  export type EnumDietGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DietGoal | EnumDietGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.DietGoal[] | ListEnumDietGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DietGoal[] | ListEnumDietGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDietGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.DietGoal | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDietGoalNullableFilter<$PrismaModel>
    _max?: NestedEnumDietGoalNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BmrCalculationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bmr?: SortOrder
    tee?: SortOrder
    tea?: SortOrder
    createdAt?: SortOrder
  }

  export type BmrCalculationAvgOrderByAggregateInput = {
    id?: SortOrder
    bmr?: SortOrder
    tee?: SortOrder
    tea?: SortOrder
  }

  export type BmrCalculationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bmr?: SortOrder
    tee?: SortOrder
    tea?: SortOrder
    createdAt?: SortOrder
  }

  export type BmrCalculationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bmr?: SortOrder
    tee?: SortOrder
    tea?: SortOrder
    createdAt?: SortOrder
  }

  export type BmrCalculationSumOrderByAggregateInput = {
    id?: SortOrder
    bmr?: SortOrder
    tee?: SortOrder
    tea?: SortOrder
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

  export type NutritionFormulaResultNullableScalarRelationFilter = {
    is?: NutritionFormulaResultWhereInput | null
    isNot?: NutritionFormulaResultWhereInput | null
  }

  export type NutritionRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    energyTarget?: SortOrder
    proteinTarget?: SortOrder
    carbTarget?: SortOrder
    fatTarget?: SortOrder
    formulaResultId?: SortOrder
    createdAt?: SortOrder
  }

  export type NutritionRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    energyTarget?: SortOrder
    proteinTarget?: SortOrder
    carbTarget?: SortOrder
    fatTarget?: SortOrder
    formulaResultId?: SortOrder
  }

  export type NutritionRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    energyTarget?: SortOrder
    proteinTarget?: SortOrder
    carbTarget?: SortOrder
    fatTarget?: SortOrder
    formulaResultId?: SortOrder
    createdAt?: SortOrder
  }

  export type NutritionRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    energyTarget?: SortOrder
    proteinTarget?: SortOrder
    carbTarget?: SortOrder
    fatTarget?: SortOrder
    formulaResultId?: SortOrder
    createdAt?: SortOrder
  }

  export type NutritionRecordSumOrderByAggregateInput = {
    id?: SortOrder
    energyTarget?: SortOrder
    proteinTarget?: SortOrder
    carbTarget?: SortOrder
    fatTarget?: SortOrder
    formulaResultId?: SortOrder
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

  export type NutritionRecordNullableScalarRelationFilter = {
    is?: NutritionRecordWhereInput | null
    isNot?: NutritionRecordWhereInput | null
  }

  export type NutritionFormulaResultCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bmr?: SortOrder
    tee?: SortOrder
    tea?: SortOrder
    stressFactor?: SortOrder
    activityFactor?: SortOrder
    totalEnergyRequirement?: SortOrder
    proteinRequirement?: SortOrder
    carbRequirement?: SortOrder
    fatRequirement?: SortOrder
    fluidRequirement?: SortOrder
    condition?: SortOrder
    createdAt?: SortOrder
  }

  export type NutritionFormulaResultAvgOrderByAggregateInput = {
    id?: SortOrder
    bmr?: SortOrder
    tee?: SortOrder
    tea?: SortOrder
    stressFactor?: SortOrder
    activityFactor?: SortOrder
    totalEnergyRequirement?: SortOrder
    proteinRequirement?: SortOrder
    carbRequirement?: SortOrder
    fatRequirement?: SortOrder
    fluidRequirement?: SortOrder
  }

  export type NutritionFormulaResultMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bmr?: SortOrder
    tee?: SortOrder
    tea?: SortOrder
    stressFactor?: SortOrder
    activityFactor?: SortOrder
    totalEnergyRequirement?: SortOrder
    proteinRequirement?: SortOrder
    carbRequirement?: SortOrder
    fatRequirement?: SortOrder
    fluidRequirement?: SortOrder
    condition?: SortOrder
    createdAt?: SortOrder
  }

  export type NutritionFormulaResultMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bmr?: SortOrder
    tee?: SortOrder
    tea?: SortOrder
    stressFactor?: SortOrder
    activityFactor?: SortOrder
    totalEnergyRequirement?: SortOrder
    proteinRequirement?: SortOrder
    carbRequirement?: SortOrder
    fatRequirement?: SortOrder
    fluidRequirement?: SortOrder
    condition?: SortOrder
    createdAt?: SortOrder
  }

  export type NutritionFormulaResultSumOrderByAggregateInput = {
    id?: SortOrder
    bmr?: SortOrder
    tee?: SortOrder
    tea?: SortOrder
    stressFactor?: SortOrder
    activityFactor?: SortOrder
    totalEnergyRequirement?: SortOrder
    proteinRequirement?: SortOrder
    carbRequirement?: SortOrder
    fatRequirement?: SortOrder
    fluidRequirement?: SortOrder
  }

  export type DiseaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DiseaseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DiseaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DiseaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DiseaseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DiseaseScalarRelationFilter = {
    is?: DiseaseWhereInput
    isNot?: DiseaseWhereInput
  }

  export type UserDiseaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    diseaseId?: SortOrder
    notes?: SortOrder
  }

  export type UserDiseaseAvgOrderByAggregateInput = {
    id?: SortOrder
    diseaseId?: SortOrder
  }

  export type UserDiseaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    diseaseId?: SortOrder
    notes?: SortOrder
  }

  export type UserDiseaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    diseaseId?: SortOrder
    notes?: SortOrder
  }

  export type UserDiseaseSumOrderByAggregateInput = {
    id?: SortOrder
    diseaseId?: SortOrder
  }

  export type BmrCalculationCreateNestedManyWithoutUserInput = {
    create?: XOR<BmrCalculationCreateWithoutUserInput, BmrCalculationUncheckedCreateWithoutUserInput> | BmrCalculationCreateWithoutUserInput[] | BmrCalculationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BmrCalculationCreateOrConnectWithoutUserInput | BmrCalculationCreateOrConnectWithoutUserInput[]
    createMany?: BmrCalculationCreateManyUserInputEnvelope
    connect?: BmrCalculationWhereUniqueInput | BmrCalculationWhereUniqueInput[]
  }

  export type NutritionRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<NutritionRecordCreateWithoutUserInput, NutritionRecordUncheckedCreateWithoutUserInput> | NutritionRecordCreateWithoutUserInput[] | NutritionRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NutritionRecordCreateOrConnectWithoutUserInput | NutritionRecordCreateOrConnectWithoutUserInput[]
    createMany?: NutritionRecordCreateManyUserInputEnvelope
    connect?: NutritionRecordWhereUniqueInput | NutritionRecordWhereUniqueInput[]
  }

  export type NutritionFormulaResultCreateNestedManyWithoutUserInput = {
    create?: XOR<NutritionFormulaResultCreateWithoutUserInput, NutritionFormulaResultUncheckedCreateWithoutUserInput> | NutritionFormulaResultCreateWithoutUserInput[] | NutritionFormulaResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NutritionFormulaResultCreateOrConnectWithoutUserInput | NutritionFormulaResultCreateOrConnectWithoutUserInput[]
    createMany?: NutritionFormulaResultCreateManyUserInputEnvelope
    connect?: NutritionFormulaResultWhereUniqueInput | NutritionFormulaResultWhereUniqueInput[]
  }

  export type UserDiseaseCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDiseaseCreateWithoutUserInput, UserDiseaseUncheckedCreateWithoutUserInput> | UserDiseaseCreateWithoutUserInput[] | UserDiseaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutUserInput | UserDiseaseCreateOrConnectWithoutUserInput[]
    createMany?: UserDiseaseCreateManyUserInputEnvelope
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
  }

  export type BmrCalculationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BmrCalculationCreateWithoutUserInput, BmrCalculationUncheckedCreateWithoutUserInput> | BmrCalculationCreateWithoutUserInput[] | BmrCalculationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BmrCalculationCreateOrConnectWithoutUserInput | BmrCalculationCreateOrConnectWithoutUserInput[]
    createMany?: BmrCalculationCreateManyUserInputEnvelope
    connect?: BmrCalculationWhereUniqueInput | BmrCalculationWhereUniqueInput[]
  }

  export type NutritionRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NutritionRecordCreateWithoutUserInput, NutritionRecordUncheckedCreateWithoutUserInput> | NutritionRecordCreateWithoutUserInput[] | NutritionRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NutritionRecordCreateOrConnectWithoutUserInput | NutritionRecordCreateOrConnectWithoutUserInput[]
    createMany?: NutritionRecordCreateManyUserInputEnvelope
    connect?: NutritionRecordWhereUniqueInput | NutritionRecordWhereUniqueInput[]
  }

  export type NutritionFormulaResultUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NutritionFormulaResultCreateWithoutUserInput, NutritionFormulaResultUncheckedCreateWithoutUserInput> | NutritionFormulaResultCreateWithoutUserInput[] | NutritionFormulaResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NutritionFormulaResultCreateOrConnectWithoutUserInput | NutritionFormulaResultCreateOrConnectWithoutUserInput[]
    createMany?: NutritionFormulaResultCreateManyUserInputEnvelope
    connect?: NutritionFormulaResultWhereUniqueInput | NutritionFormulaResultWhereUniqueInput[]
  }

  export type UserDiseaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDiseaseCreateWithoutUserInput, UserDiseaseUncheckedCreateWithoutUserInput> | UserDiseaseCreateWithoutUserInput[] | UserDiseaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutUserInput | UserDiseaseCreateOrConnectWithoutUserInput[]
    createMany?: UserDiseaseCreateManyUserInputEnvelope
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumActivityLevelFieldUpdateOperationsInput = {
    set?: $Enums.ActivityLevel | null
  }

  export type NullableEnumStressLevelFieldUpdateOperationsInput = {
    set?: $Enums.StressLevel | null
  }

  export type NullableEnumPhysiologicalStatusFieldUpdateOperationsInput = {
    set?: $Enums.PhysiologicalStatus | null
  }

  export type NullableEnumDietGoalFieldUpdateOperationsInput = {
    set?: $Enums.DietGoal | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BmrCalculationUpdateManyWithoutUserNestedInput = {
    create?: XOR<BmrCalculationCreateWithoutUserInput, BmrCalculationUncheckedCreateWithoutUserInput> | BmrCalculationCreateWithoutUserInput[] | BmrCalculationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BmrCalculationCreateOrConnectWithoutUserInput | BmrCalculationCreateOrConnectWithoutUserInput[]
    upsert?: BmrCalculationUpsertWithWhereUniqueWithoutUserInput | BmrCalculationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BmrCalculationCreateManyUserInputEnvelope
    set?: BmrCalculationWhereUniqueInput | BmrCalculationWhereUniqueInput[]
    disconnect?: BmrCalculationWhereUniqueInput | BmrCalculationWhereUniqueInput[]
    delete?: BmrCalculationWhereUniqueInput | BmrCalculationWhereUniqueInput[]
    connect?: BmrCalculationWhereUniqueInput | BmrCalculationWhereUniqueInput[]
    update?: BmrCalculationUpdateWithWhereUniqueWithoutUserInput | BmrCalculationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BmrCalculationUpdateManyWithWhereWithoutUserInput | BmrCalculationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BmrCalculationScalarWhereInput | BmrCalculationScalarWhereInput[]
  }

  export type NutritionRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<NutritionRecordCreateWithoutUserInput, NutritionRecordUncheckedCreateWithoutUserInput> | NutritionRecordCreateWithoutUserInput[] | NutritionRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NutritionRecordCreateOrConnectWithoutUserInput | NutritionRecordCreateOrConnectWithoutUserInput[]
    upsert?: NutritionRecordUpsertWithWhereUniqueWithoutUserInput | NutritionRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NutritionRecordCreateManyUserInputEnvelope
    set?: NutritionRecordWhereUniqueInput | NutritionRecordWhereUniqueInput[]
    disconnect?: NutritionRecordWhereUniqueInput | NutritionRecordWhereUniqueInput[]
    delete?: NutritionRecordWhereUniqueInput | NutritionRecordWhereUniqueInput[]
    connect?: NutritionRecordWhereUniqueInput | NutritionRecordWhereUniqueInput[]
    update?: NutritionRecordUpdateWithWhereUniqueWithoutUserInput | NutritionRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NutritionRecordUpdateManyWithWhereWithoutUserInput | NutritionRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NutritionRecordScalarWhereInput | NutritionRecordScalarWhereInput[]
  }

  export type NutritionFormulaResultUpdateManyWithoutUserNestedInput = {
    create?: XOR<NutritionFormulaResultCreateWithoutUserInput, NutritionFormulaResultUncheckedCreateWithoutUserInput> | NutritionFormulaResultCreateWithoutUserInput[] | NutritionFormulaResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NutritionFormulaResultCreateOrConnectWithoutUserInput | NutritionFormulaResultCreateOrConnectWithoutUserInput[]
    upsert?: NutritionFormulaResultUpsertWithWhereUniqueWithoutUserInput | NutritionFormulaResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NutritionFormulaResultCreateManyUserInputEnvelope
    set?: NutritionFormulaResultWhereUniqueInput | NutritionFormulaResultWhereUniqueInput[]
    disconnect?: NutritionFormulaResultWhereUniqueInput | NutritionFormulaResultWhereUniqueInput[]
    delete?: NutritionFormulaResultWhereUniqueInput | NutritionFormulaResultWhereUniqueInput[]
    connect?: NutritionFormulaResultWhereUniqueInput | NutritionFormulaResultWhereUniqueInput[]
    update?: NutritionFormulaResultUpdateWithWhereUniqueWithoutUserInput | NutritionFormulaResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NutritionFormulaResultUpdateManyWithWhereWithoutUserInput | NutritionFormulaResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NutritionFormulaResultScalarWhereInput | NutritionFormulaResultScalarWhereInput[]
  }

  export type UserDiseaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDiseaseCreateWithoutUserInput, UserDiseaseUncheckedCreateWithoutUserInput> | UserDiseaseCreateWithoutUserInput[] | UserDiseaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutUserInput | UserDiseaseCreateOrConnectWithoutUserInput[]
    upsert?: UserDiseaseUpsertWithWhereUniqueWithoutUserInput | UserDiseaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDiseaseCreateManyUserInputEnvelope
    set?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    disconnect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    delete?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    update?: UserDiseaseUpdateWithWhereUniqueWithoutUserInput | UserDiseaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDiseaseUpdateManyWithWhereWithoutUserInput | UserDiseaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDiseaseScalarWhereInput | UserDiseaseScalarWhereInput[]
  }

  export type BmrCalculationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BmrCalculationCreateWithoutUserInput, BmrCalculationUncheckedCreateWithoutUserInput> | BmrCalculationCreateWithoutUserInput[] | BmrCalculationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BmrCalculationCreateOrConnectWithoutUserInput | BmrCalculationCreateOrConnectWithoutUserInput[]
    upsert?: BmrCalculationUpsertWithWhereUniqueWithoutUserInput | BmrCalculationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BmrCalculationCreateManyUserInputEnvelope
    set?: BmrCalculationWhereUniqueInput | BmrCalculationWhereUniqueInput[]
    disconnect?: BmrCalculationWhereUniqueInput | BmrCalculationWhereUniqueInput[]
    delete?: BmrCalculationWhereUniqueInput | BmrCalculationWhereUniqueInput[]
    connect?: BmrCalculationWhereUniqueInput | BmrCalculationWhereUniqueInput[]
    update?: BmrCalculationUpdateWithWhereUniqueWithoutUserInput | BmrCalculationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BmrCalculationUpdateManyWithWhereWithoutUserInput | BmrCalculationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BmrCalculationScalarWhereInput | BmrCalculationScalarWhereInput[]
  }

  export type NutritionRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NutritionRecordCreateWithoutUserInput, NutritionRecordUncheckedCreateWithoutUserInput> | NutritionRecordCreateWithoutUserInput[] | NutritionRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NutritionRecordCreateOrConnectWithoutUserInput | NutritionRecordCreateOrConnectWithoutUserInput[]
    upsert?: NutritionRecordUpsertWithWhereUniqueWithoutUserInput | NutritionRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NutritionRecordCreateManyUserInputEnvelope
    set?: NutritionRecordWhereUniqueInput | NutritionRecordWhereUniqueInput[]
    disconnect?: NutritionRecordWhereUniqueInput | NutritionRecordWhereUniqueInput[]
    delete?: NutritionRecordWhereUniqueInput | NutritionRecordWhereUniqueInput[]
    connect?: NutritionRecordWhereUniqueInput | NutritionRecordWhereUniqueInput[]
    update?: NutritionRecordUpdateWithWhereUniqueWithoutUserInput | NutritionRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NutritionRecordUpdateManyWithWhereWithoutUserInput | NutritionRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NutritionRecordScalarWhereInput | NutritionRecordScalarWhereInput[]
  }

  export type NutritionFormulaResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NutritionFormulaResultCreateWithoutUserInput, NutritionFormulaResultUncheckedCreateWithoutUserInput> | NutritionFormulaResultCreateWithoutUserInput[] | NutritionFormulaResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NutritionFormulaResultCreateOrConnectWithoutUserInput | NutritionFormulaResultCreateOrConnectWithoutUserInput[]
    upsert?: NutritionFormulaResultUpsertWithWhereUniqueWithoutUserInput | NutritionFormulaResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NutritionFormulaResultCreateManyUserInputEnvelope
    set?: NutritionFormulaResultWhereUniqueInput | NutritionFormulaResultWhereUniqueInput[]
    disconnect?: NutritionFormulaResultWhereUniqueInput | NutritionFormulaResultWhereUniqueInput[]
    delete?: NutritionFormulaResultWhereUniqueInput | NutritionFormulaResultWhereUniqueInput[]
    connect?: NutritionFormulaResultWhereUniqueInput | NutritionFormulaResultWhereUniqueInput[]
    update?: NutritionFormulaResultUpdateWithWhereUniqueWithoutUserInput | NutritionFormulaResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NutritionFormulaResultUpdateManyWithWhereWithoutUserInput | NutritionFormulaResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NutritionFormulaResultScalarWhereInput | NutritionFormulaResultScalarWhereInput[]
  }

  export type UserDiseaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDiseaseCreateWithoutUserInput, UserDiseaseUncheckedCreateWithoutUserInput> | UserDiseaseCreateWithoutUserInput[] | UserDiseaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutUserInput | UserDiseaseCreateOrConnectWithoutUserInput[]
    upsert?: UserDiseaseUpsertWithWhereUniqueWithoutUserInput | UserDiseaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDiseaseCreateManyUserInputEnvelope
    set?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    disconnect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    delete?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    update?: UserDiseaseUpdateWithWhereUniqueWithoutUserInput | UserDiseaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDiseaseUpdateManyWithWhereWithoutUserInput | UserDiseaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDiseaseScalarWhereInput | UserDiseaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBmrCalculationsInput = {
    create?: XOR<UserCreateWithoutBmrCalculationsInput, UserUncheckedCreateWithoutBmrCalculationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBmrCalculationsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBmrCalculationsNestedInput = {
    create?: XOR<UserCreateWithoutBmrCalculationsInput, UserUncheckedCreateWithoutBmrCalculationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBmrCalculationsInput
    upsert?: UserUpsertWithoutBmrCalculationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBmrCalculationsInput, UserUpdateWithoutBmrCalculationsInput>, UserUncheckedUpdateWithoutBmrCalculationsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutNutritionRecordsInput = {
    create?: XOR<UserCreateWithoutNutritionRecordsInput, UserUncheckedCreateWithoutNutritionRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNutritionRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type NutritionFormulaResultCreateNestedOneWithoutRecordInput = {
    create?: XOR<NutritionFormulaResultCreateWithoutRecordInput, NutritionFormulaResultUncheckedCreateWithoutRecordInput>
    connectOrCreate?: NutritionFormulaResultCreateOrConnectWithoutRecordInput
    connect?: NutritionFormulaResultWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNutritionRecordsNestedInput = {
    create?: XOR<UserCreateWithoutNutritionRecordsInput, UserUncheckedCreateWithoutNutritionRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNutritionRecordsInput
    upsert?: UserUpsertWithoutNutritionRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNutritionRecordsInput, UserUpdateWithoutNutritionRecordsInput>, UserUncheckedUpdateWithoutNutritionRecordsInput>
  }

  export type NutritionFormulaResultUpdateOneWithoutRecordNestedInput = {
    create?: XOR<NutritionFormulaResultCreateWithoutRecordInput, NutritionFormulaResultUncheckedCreateWithoutRecordInput>
    connectOrCreate?: NutritionFormulaResultCreateOrConnectWithoutRecordInput
    upsert?: NutritionFormulaResultUpsertWithoutRecordInput
    disconnect?: NutritionFormulaResultWhereInput | boolean
    delete?: NutritionFormulaResultWhereInput | boolean
    connect?: NutritionFormulaResultWhereUniqueInput
    update?: XOR<XOR<NutritionFormulaResultUpdateToOneWithWhereWithoutRecordInput, NutritionFormulaResultUpdateWithoutRecordInput>, NutritionFormulaResultUncheckedUpdateWithoutRecordInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutFormulaResultsInput = {
    create?: XOR<UserCreateWithoutFormulaResultsInput, UserUncheckedCreateWithoutFormulaResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormulaResultsInput
    connect?: UserWhereUniqueInput
  }

  export type NutritionRecordCreateNestedOneWithoutFormulaResultInput = {
    create?: XOR<NutritionRecordCreateWithoutFormulaResultInput, NutritionRecordUncheckedCreateWithoutFormulaResultInput>
    connectOrCreate?: NutritionRecordCreateOrConnectWithoutFormulaResultInput
    connect?: NutritionRecordWhereUniqueInput
  }

  export type NutritionRecordUncheckedCreateNestedOneWithoutFormulaResultInput = {
    create?: XOR<NutritionRecordCreateWithoutFormulaResultInput, NutritionRecordUncheckedCreateWithoutFormulaResultInput>
    connectOrCreate?: NutritionRecordCreateOrConnectWithoutFormulaResultInput
    connect?: NutritionRecordWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFormulaResultsNestedInput = {
    create?: XOR<UserCreateWithoutFormulaResultsInput, UserUncheckedCreateWithoutFormulaResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormulaResultsInput
    upsert?: UserUpsertWithoutFormulaResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFormulaResultsInput, UserUpdateWithoutFormulaResultsInput>, UserUncheckedUpdateWithoutFormulaResultsInput>
  }

  export type NutritionRecordUpdateOneWithoutFormulaResultNestedInput = {
    create?: XOR<NutritionRecordCreateWithoutFormulaResultInput, NutritionRecordUncheckedCreateWithoutFormulaResultInput>
    connectOrCreate?: NutritionRecordCreateOrConnectWithoutFormulaResultInput
    upsert?: NutritionRecordUpsertWithoutFormulaResultInput
    disconnect?: NutritionRecordWhereInput | boolean
    delete?: NutritionRecordWhereInput | boolean
    connect?: NutritionRecordWhereUniqueInput
    update?: XOR<XOR<NutritionRecordUpdateToOneWithWhereWithoutFormulaResultInput, NutritionRecordUpdateWithoutFormulaResultInput>, NutritionRecordUncheckedUpdateWithoutFormulaResultInput>
  }

  export type NutritionRecordUncheckedUpdateOneWithoutFormulaResultNestedInput = {
    create?: XOR<NutritionRecordCreateWithoutFormulaResultInput, NutritionRecordUncheckedCreateWithoutFormulaResultInput>
    connectOrCreate?: NutritionRecordCreateOrConnectWithoutFormulaResultInput
    upsert?: NutritionRecordUpsertWithoutFormulaResultInput
    disconnect?: NutritionRecordWhereInput | boolean
    delete?: NutritionRecordWhereInput | boolean
    connect?: NutritionRecordWhereUniqueInput
    update?: XOR<XOR<NutritionRecordUpdateToOneWithWhereWithoutFormulaResultInput, NutritionRecordUpdateWithoutFormulaResultInput>, NutritionRecordUncheckedUpdateWithoutFormulaResultInput>
  }

  export type UserDiseaseCreateNestedManyWithoutDiseaseInput = {
    create?: XOR<UserDiseaseCreateWithoutDiseaseInput, UserDiseaseUncheckedCreateWithoutDiseaseInput> | UserDiseaseCreateWithoutDiseaseInput[] | UserDiseaseUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutDiseaseInput | UserDiseaseCreateOrConnectWithoutDiseaseInput[]
    createMany?: UserDiseaseCreateManyDiseaseInputEnvelope
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
  }

  export type UserDiseaseUncheckedCreateNestedManyWithoutDiseaseInput = {
    create?: XOR<UserDiseaseCreateWithoutDiseaseInput, UserDiseaseUncheckedCreateWithoutDiseaseInput> | UserDiseaseCreateWithoutDiseaseInput[] | UserDiseaseUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutDiseaseInput | UserDiseaseCreateOrConnectWithoutDiseaseInput[]
    createMany?: UserDiseaseCreateManyDiseaseInputEnvelope
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
  }

  export type UserDiseaseUpdateManyWithoutDiseaseNestedInput = {
    create?: XOR<UserDiseaseCreateWithoutDiseaseInput, UserDiseaseUncheckedCreateWithoutDiseaseInput> | UserDiseaseCreateWithoutDiseaseInput[] | UserDiseaseUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutDiseaseInput | UserDiseaseCreateOrConnectWithoutDiseaseInput[]
    upsert?: UserDiseaseUpsertWithWhereUniqueWithoutDiseaseInput | UserDiseaseUpsertWithWhereUniqueWithoutDiseaseInput[]
    createMany?: UserDiseaseCreateManyDiseaseInputEnvelope
    set?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    disconnect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    delete?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    update?: UserDiseaseUpdateWithWhereUniqueWithoutDiseaseInput | UserDiseaseUpdateWithWhereUniqueWithoutDiseaseInput[]
    updateMany?: UserDiseaseUpdateManyWithWhereWithoutDiseaseInput | UserDiseaseUpdateManyWithWhereWithoutDiseaseInput[]
    deleteMany?: UserDiseaseScalarWhereInput | UserDiseaseScalarWhereInput[]
  }

  export type UserDiseaseUncheckedUpdateManyWithoutDiseaseNestedInput = {
    create?: XOR<UserDiseaseCreateWithoutDiseaseInput, UserDiseaseUncheckedCreateWithoutDiseaseInput> | UserDiseaseCreateWithoutDiseaseInput[] | UserDiseaseUncheckedCreateWithoutDiseaseInput[]
    connectOrCreate?: UserDiseaseCreateOrConnectWithoutDiseaseInput | UserDiseaseCreateOrConnectWithoutDiseaseInput[]
    upsert?: UserDiseaseUpsertWithWhereUniqueWithoutDiseaseInput | UserDiseaseUpsertWithWhereUniqueWithoutDiseaseInput[]
    createMany?: UserDiseaseCreateManyDiseaseInputEnvelope
    set?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    disconnect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    delete?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    connect?: UserDiseaseWhereUniqueInput | UserDiseaseWhereUniqueInput[]
    update?: UserDiseaseUpdateWithWhereUniqueWithoutDiseaseInput | UserDiseaseUpdateWithWhereUniqueWithoutDiseaseInput[]
    updateMany?: UserDiseaseUpdateManyWithWhereWithoutDiseaseInput | UserDiseaseUpdateManyWithWhereWithoutDiseaseInput[]
    deleteMany?: UserDiseaseScalarWhereInput | UserDiseaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDiseasesInput = {
    create?: XOR<UserCreateWithoutDiseasesInput, UserUncheckedCreateWithoutDiseasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiseasesInput
    connect?: UserWhereUniqueInput
  }

  export type DiseaseCreateNestedOneWithoutUsersInput = {
    create?: XOR<DiseaseCreateWithoutUsersInput, DiseaseUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DiseaseCreateOrConnectWithoutUsersInput
    connect?: DiseaseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDiseasesNestedInput = {
    create?: XOR<UserCreateWithoutDiseasesInput, UserUncheckedCreateWithoutDiseasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDiseasesInput
    upsert?: UserUpsertWithoutDiseasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDiseasesInput, UserUpdateWithoutDiseasesInput>, UserUncheckedUpdateWithoutDiseasesInput>
  }

  export type DiseaseUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<DiseaseCreateWithoutUsersInput, DiseaseUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DiseaseCreateOrConnectWithoutUsersInput
    upsert?: DiseaseUpsertWithoutUsersInput
    connect?: DiseaseWhereUniqueInput
    update?: XOR<XOR<DiseaseUpdateToOneWithWhereWithoutUsersInput, DiseaseUpdateWithoutUsersInput>, DiseaseUncheckedUpdateWithoutUsersInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumActivityLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityLevelNullableFilter<$PrismaModel> | $Enums.ActivityLevel | null
  }

  export type NestedEnumStressLevelNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.StressLevel | EnumStressLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStressLevelNullableFilter<$PrismaModel> | $Enums.StressLevel | null
  }

  export type NestedEnumPhysiologicalStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PhysiologicalStatus | EnumPhysiologicalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PhysiologicalStatus[] | ListEnumPhysiologicalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PhysiologicalStatus[] | ListEnumPhysiologicalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPhysiologicalStatusNullableFilter<$PrismaModel> | $Enums.PhysiologicalStatus | null
  }

  export type NestedEnumDietGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DietGoal | EnumDietGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.DietGoal[] | ListEnumDietGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DietGoal[] | ListEnumDietGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDietGoalNullableFilter<$PrismaModel> | $Enums.DietGoal | null
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumActivityLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityLevel | EnumActivityLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ActivityLevel[] | ListEnumActivityLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumActivityLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.ActivityLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumActivityLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumActivityLevelNullableFilter<$PrismaModel>
  }

  export type NestedEnumStressLevelNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StressLevel | EnumStressLevelFieldRefInput<$PrismaModel> | null
    in?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.StressLevel[] | ListEnumStressLevelFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStressLevelNullableWithAggregatesFilter<$PrismaModel> | $Enums.StressLevel | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStressLevelNullableFilter<$PrismaModel>
    _max?: NestedEnumStressLevelNullableFilter<$PrismaModel>
  }

  export type NestedEnumPhysiologicalStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PhysiologicalStatus | EnumPhysiologicalStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PhysiologicalStatus[] | ListEnumPhysiologicalStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PhysiologicalStatus[] | ListEnumPhysiologicalStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPhysiologicalStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PhysiologicalStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPhysiologicalStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPhysiologicalStatusNullableFilter<$PrismaModel>
  }

  export type NestedEnumDietGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DietGoal | EnumDietGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.DietGoal[] | ListEnumDietGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DietGoal[] | ListEnumDietGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDietGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.DietGoal | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDietGoalNullableFilter<$PrismaModel>
    _max?: NestedEnumDietGoalNullableFilter<$PrismaModel>
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

  export type BmrCalculationCreateWithoutUserInput = {
    bmr: number
    tee: number
    tea: number
    createdAt?: Date | string
  }

  export type BmrCalculationUncheckedCreateWithoutUserInput = {
    id?: number
    bmr: number
    tee: number
    tea: number
    createdAt?: Date | string
  }

  export type BmrCalculationCreateOrConnectWithoutUserInput = {
    where: BmrCalculationWhereUniqueInput
    create: XOR<BmrCalculationCreateWithoutUserInput, BmrCalculationUncheckedCreateWithoutUserInput>
  }

  export type BmrCalculationCreateManyUserInputEnvelope = {
    data: BmrCalculationCreateManyUserInput | BmrCalculationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NutritionRecordCreateWithoutUserInput = {
    energyTarget: number
    proteinTarget: number
    carbTarget: number
    fatTarget: number
    createdAt?: Date | string
    formulaResult?: NutritionFormulaResultCreateNestedOneWithoutRecordInput
  }

  export type NutritionRecordUncheckedCreateWithoutUserInput = {
    id?: number
    energyTarget: number
    proteinTarget: number
    carbTarget: number
    fatTarget: number
    formulaResultId?: number | null
    createdAt?: Date | string
  }

  export type NutritionRecordCreateOrConnectWithoutUserInput = {
    where: NutritionRecordWhereUniqueInput
    create: XOR<NutritionRecordCreateWithoutUserInput, NutritionRecordUncheckedCreateWithoutUserInput>
  }

  export type NutritionRecordCreateManyUserInputEnvelope = {
    data: NutritionRecordCreateManyUserInput | NutritionRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NutritionFormulaResultCreateWithoutUserInput = {
    bmr: number
    tee: number
    tea: number
    stressFactor: number
    activityFactor: number
    totalEnergyRequirement: number
    proteinRequirement: number
    carbRequirement: number
    fatRequirement: number
    fluidRequirement?: number | null
    condition?: string | null
    createdAt?: Date | string
    record?: NutritionRecordCreateNestedOneWithoutFormulaResultInput
  }

  export type NutritionFormulaResultUncheckedCreateWithoutUserInput = {
    id?: number
    bmr: number
    tee: number
    tea: number
    stressFactor: number
    activityFactor: number
    totalEnergyRequirement: number
    proteinRequirement: number
    carbRequirement: number
    fatRequirement: number
    fluidRequirement?: number | null
    condition?: string | null
    createdAt?: Date | string
    record?: NutritionRecordUncheckedCreateNestedOneWithoutFormulaResultInput
  }

  export type NutritionFormulaResultCreateOrConnectWithoutUserInput = {
    where: NutritionFormulaResultWhereUniqueInput
    create: XOR<NutritionFormulaResultCreateWithoutUserInput, NutritionFormulaResultUncheckedCreateWithoutUserInput>
  }

  export type NutritionFormulaResultCreateManyUserInputEnvelope = {
    data: NutritionFormulaResultCreateManyUserInput | NutritionFormulaResultCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDiseaseCreateWithoutUserInput = {
    notes?: string | null
    disease: DiseaseCreateNestedOneWithoutUsersInput
  }

  export type UserDiseaseUncheckedCreateWithoutUserInput = {
    id?: number
    diseaseId: number
    notes?: string | null
  }

  export type UserDiseaseCreateOrConnectWithoutUserInput = {
    where: UserDiseaseWhereUniqueInput
    create: XOR<UserDiseaseCreateWithoutUserInput, UserDiseaseUncheckedCreateWithoutUserInput>
  }

  export type UserDiseaseCreateManyUserInputEnvelope = {
    data: UserDiseaseCreateManyUserInput | UserDiseaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BmrCalculationUpsertWithWhereUniqueWithoutUserInput = {
    where: BmrCalculationWhereUniqueInput
    update: XOR<BmrCalculationUpdateWithoutUserInput, BmrCalculationUncheckedUpdateWithoutUserInput>
    create: XOR<BmrCalculationCreateWithoutUserInput, BmrCalculationUncheckedCreateWithoutUserInput>
  }

  export type BmrCalculationUpdateWithWhereUniqueWithoutUserInput = {
    where: BmrCalculationWhereUniqueInput
    data: XOR<BmrCalculationUpdateWithoutUserInput, BmrCalculationUncheckedUpdateWithoutUserInput>
  }

  export type BmrCalculationUpdateManyWithWhereWithoutUserInput = {
    where: BmrCalculationScalarWhereInput
    data: XOR<BmrCalculationUpdateManyMutationInput, BmrCalculationUncheckedUpdateManyWithoutUserInput>
  }

  export type BmrCalculationScalarWhereInput = {
    AND?: BmrCalculationScalarWhereInput | BmrCalculationScalarWhereInput[]
    OR?: BmrCalculationScalarWhereInput[]
    NOT?: BmrCalculationScalarWhereInput | BmrCalculationScalarWhereInput[]
    id?: IntFilter<"BmrCalculation"> | number
    userId?: StringFilter<"BmrCalculation"> | string
    bmr?: FloatFilter<"BmrCalculation"> | number
    tee?: FloatFilter<"BmrCalculation"> | number
    tea?: FloatFilter<"BmrCalculation"> | number
    createdAt?: DateTimeFilter<"BmrCalculation"> | Date | string
  }

  export type NutritionRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: NutritionRecordWhereUniqueInput
    update: XOR<NutritionRecordUpdateWithoutUserInput, NutritionRecordUncheckedUpdateWithoutUserInput>
    create: XOR<NutritionRecordCreateWithoutUserInput, NutritionRecordUncheckedCreateWithoutUserInput>
  }

  export type NutritionRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: NutritionRecordWhereUniqueInput
    data: XOR<NutritionRecordUpdateWithoutUserInput, NutritionRecordUncheckedUpdateWithoutUserInput>
  }

  export type NutritionRecordUpdateManyWithWhereWithoutUserInput = {
    where: NutritionRecordScalarWhereInput
    data: XOR<NutritionRecordUpdateManyMutationInput, NutritionRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type NutritionRecordScalarWhereInput = {
    AND?: NutritionRecordScalarWhereInput | NutritionRecordScalarWhereInput[]
    OR?: NutritionRecordScalarWhereInput[]
    NOT?: NutritionRecordScalarWhereInput | NutritionRecordScalarWhereInput[]
    id?: IntFilter<"NutritionRecord"> | number
    userId?: StringFilter<"NutritionRecord"> | string
    energyTarget?: FloatFilter<"NutritionRecord"> | number
    proteinTarget?: FloatFilter<"NutritionRecord"> | number
    carbTarget?: FloatFilter<"NutritionRecord"> | number
    fatTarget?: FloatFilter<"NutritionRecord"> | number
    formulaResultId?: IntNullableFilter<"NutritionRecord"> | number | null
    createdAt?: DateTimeFilter<"NutritionRecord"> | Date | string
  }

  export type NutritionFormulaResultUpsertWithWhereUniqueWithoutUserInput = {
    where: NutritionFormulaResultWhereUniqueInput
    update: XOR<NutritionFormulaResultUpdateWithoutUserInput, NutritionFormulaResultUncheckedUpdateWithoutUserInput>
    create: XOR<NutritionFormulaResultCreateWithoutUserInput, NutritionFormulaResultUncheckedCreateWithoutUserInput>
  }

  export type NutritionFormulaResultUpdateWithWhereUniqueWithoutUserInput = {
    where: NutritionFormulaResultWhereUniqueInput
    data: XOR<NutritionFormulaResultUpdateWithoutUserInput, NutritionFormulaResultUncheckedUpdateWithoutUserInput>
  }

  export type NutritionFormulaResultUpdateManyWithWhereWithoutUserInput = {
    where: NutritionFormulaResultScalarWhereInput
    data: XOR<NutritionFormulaResultUpdateManyMutationInput, NutritionFormulaResultUncheckedUpdateManyWithoutUserInput>
  }

  export type NutritionFormulaResultScalarWhereInput = {
    AND?: NutritionFormulaResultScalarWhereInput | NutritionFormulaResultScalarWhereInput[]
    OR?: NutritionFormulaResultScalarWhereInput[]
    NOT?: NutritionFormulaResultScalarWhereInput | NutritionFormulaResultScalarWhereInput[]
    id?: IntFilter<"NutritionFormulaResult"> | number
    userId?: StringFilter<"NutritionFormulaResult"> | string
    bmr?: FloatFilter<"NutritionFormulaResult"> | number
    tee?: FloatFilter<"NutritionFormulaResult"> | number
    tea?: FloatFilter<"NutritionFormulaResult"> | number
    stressFactor?: FloatFilter<"NutritionFormulaResult"> | number
    activityFactor?: FloatFilter<"NutritionFormulaResult"> | number
    totalEnergyRequirement?: FloatFilter<"NutritionFormulaResult"> | number
    proteinRequirement?: FloatFilter<"NutritionFormulaResult"> | number
    carbRequirement?: FloatFilter<"NutritionFormulaResult"> | number
    fatRequirement?: FloatFilter<"NutritionFormulaResult"> | number
    fluidRequirement?: FloatNullableFilter<"NutritionFormulaResult"> | number | null
    condition?: StringNullableFilter<"NutritionFormulaResult"> | string | null
    createdAt?: DateTimeFilter<"NutritionFormulaResult"> | Date | string
  }

  export type UserDiseaseUpsertWithWhereUniqueWithoutUserInput = {
    where: UserDiseaseWhereUniqueInput
    update: XOR<UserDiseaseUpdateWithoutUserInput, UserDiseaseUncheckedUpdateWithoutUserInput>
    create: XOR<UserDiseaseCreateWithoutUserInput, UserDiseaseUncheckedCreateWithoutUserInput>
  }

  export type UserDiseaseUpdateWithWhereUniqueWithoutUserInput = {
    where: UserDiseaseWhereUniqueInput
    data: XOR<UserDiseaseUpdateWithoutUserInput, UserDiseaseUncheckedUpdateWithoutUserInput>
  }

  export type UserDiseaseUpdateManyWithWhereWithoutUserInput = {
    where: UserDiseaseScalarWhereInput
    data: XOR<UserDiseaseUpdateManyMutationInput, UserDiseaseUncheckedUpdateManyWithoutUserInput>
  }

  export type UserDiseaseScalarWhereInput = {
    AND?: UserDiseaseScalarWhereInput | UserDiseaseScalarWhereInput[]
    OR?: UserDiseaseScalarWhereInput[]
    NOT?: UserDiseaseScalarWhereInput | UserDiseaseScalarWhereInput[]
    id?: IntFilter<"UserDisease"> | number
    userId?: StringFilter<"UserDisease"> | string
    diseaseId?: IntFilter<"UserDisease"> | number
    notes?: StringNullableFilter<"UserDisease"> | string | null
  }

  export type UserCreateWithoutBmrCalculationsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    name: string
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    stressLevel?: $Enums.StressLevel | null
    physiologicalStatus?: $Enums.PhysiologicalStatus | null
    dietGoal?: $Enums.DietGoal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nutritionRecords?: NutritionRecordCreateNestedManyWithoutUserInput
    formulaResults?: NutritionFormulaResultCreateNestedManyWithoutUserInput
    diseases?: UserDiseaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBmrCalculationsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    name: string
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    stressLevel?: $Enums.StressLevel | null
    physiologicalStatus?: $Enums.PhysiologicalStatus | null
    dietGoal?: $Enums.DietGoal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nutritionRecords?: NutritionRecordUncheckedCreateNestedManyWithoutUserInput
    formulaResults?: NutritionFormulaResultUncheckedCreateNestedManyWithoutUserInput
    diseases?: UserDiseaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBmrCalculationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBmrCalculationsInput, UserUncheckedCreateWithoutBmrCalculationsInput>
  }

  export type UserUpsertWithoutBmrCalculationsInput = {
    update: XOR<UserUpdateWithoutBmrCalculationsInput, UserUncheckedUpdateWithoutBmrCalculationsInput>
    create: XOR<UserCreateWithoutBmrCalculationsInput, UserUncheckedCreateWithoutBmrCalculationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBmrCalculationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBmrCalculationsInput, UserUncheckedUpdateWithoutBmrCalculationsInput>
  }

  export type UserUpdateWithoutBmrCalculationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    physiologicalStatus?: NullableEnumPhysiologicalStatusFieldUpdateOperationsInput | $Enums.PhysiologicalStatus | null
    dietGoal?: NullableEnumDietGoalFieldUpdateOperationsInput | $Enums.DietGoal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutritionRecords?: NutritionRecordUpdateManyWithoutUserNestedInput
    formulaResults?: NutritionFormulaResultUpdateManyWithoutUserNestedInput
    diseases?: UserDiseaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBmrCalculationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    physiologicalStatus?: NullableEnumPhysiologicalStatusFieldUpdateOperationsInput | $Enums.PhysiologicalStatus | null
    dietGoal?: NullableEnumDietGoalFieldUpdateOperationsInput | $Enums.DietGoal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nutritionRecords?: NutritionRecordUncheckedUpdateManyWithoutUserNestedInput
    formulaResults?: NutritionFormulaResultUncheckedUpdateManyWithoutUserNestedInput
    diseases?: UserDiseaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNutritionRecordsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    name: string
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    stressLevel?: $Enums.StressLevel | null
    physiologicalStatus?: $Enums.PhysiologicalStatus | null
    dietGoal?: $Enums.DietGoal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bmrCalculations?: BmrCalculationCreateNestedManyWithoutUserInput
    formulaResults?: NutritionFormulaResultCreateNestedManyWithoutUserInput
    diseases?: UserDiseaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNutritionRecordsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    name: string
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    stressLevel?: $Enums.StressLevel | null
    physiologicalStatus?: $Enums.PhysiologicalStatus | null
    dietGoal?: $Enums.DietGoal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bmrCalculations?: BmrCalculationUncheckedCreateNestedManyWithoutUserInput
    formulaResults?: NutritionFormulaResultUncheckedCreateNestedManyWithoutUserInput
    diseases?: UserDiseaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNutritionRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNutritionRecordsInput, UserUncheckedCreateWithoutNutritionRecordsInput>
  }

  export type NutritionFormulaResultCreateWithoutRecordInput = {
    bmr: number
    tee: number
    tea: number
    stressFactor: number
    activityFactor: number
    totalEnergyRequirement: number
    proteinRequirement: number
    carbRequirement: number
    fatRequirement: number
    fluidRequirement?: number | null
    condition?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFormulaResultsInput
  }

  export type NutritionFormulaResultUncheckedCreateWithoutRecordInput = {
    id?: number
    userId: string
    bmr: number
    tee: number
    tea: number
    stressFactor: number
    activityFactor: number
    totalEnergyRequirement: number
    proteinRequirement: number
    carbRequirement: number
    fatRequirement: number
    fluidRequirement?: number | null
    condition?: string | null
    createdAt?: Date | string
  }

  export type NutritionFormulaResultCreateOrConnectWithoutRecordInput = {
    where: NutritionFormulaResultWhereUniqueInput
    create: XOR<NutritionFormulaResultCreateWithoutRecordInput, NutritionFormulaResultUncheckedCreateWithoutRecordInput>
  }

  export type UserUpsertWithoutNutritionRecordsInput = {
    update: XOR<UserUpdateWithoutNutritionRecordsInput, UserUncheckedUpdateWithoutNutritionRecordsInput>
    create: XOR<UserCreateWithoutNutritionRecordsInput, UserUncheckedCreateWithoutNutritionRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNutritionRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNutritionRecordsInput, UserUncheckedUpdateWithoutNutritionRecordsInput>
  }

  export type UserUpdateWithoutNutritionRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    physiologicalStatus?: NullableEnumPhysiologicalStatusFieldUpdateOperationsInput | $Enums.PhysiologicalStatus | null
    dietGoal?: NullableEnumDietGoalFieldUpdateOperationsInput | $Enums.DietGoal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bmrCalculations?: BmrCalculationUpdateManyWithoutUserNestedInput
    formulaResults?: NutritionFormulaResultUpdateManyWithoutUserNestedInput
    diseases?: UserDiseaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNutritionRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    physiologicalStatus?: NullableEnumPhysiologicalStatusFieldUpdateOperationsInput | $Enums.PhysiologicalStatus | null
    dietGoal?: NullableEnumDietGoalFieldUpdateOperationsInput | $Enums.DietGoal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bmrCalculations?: BmrCalculationUncheckedUpdateManyWithoutUserNestedInput
    formulaResults?: NutritionFormulaResultUncheckedUpdateManyWithoutUserNestedInput
    diseases?: UserDiseaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NutritionFormulaResultUpsertWithoutRecordInput = {
    update: XOR<NutritionFormulaResultUpdateWithoutRecordInput, NutritionFormulaResultUncheckedUpdateWithoutRecordInput>
    create: XOR<NutritionFormulaResultCreateWithoutRecordInput, NutritionFormulaResultUncheckedCreateWithoutRecordInput>
    where?: NutritionFormulaResultWhereInput
  }

  export type NutritionFormulaResultUpdateToOneWithWhereWithoutRecordInput = {
    where?: NutritionFormulaResultWhereInput
    data: XOR<NutritionFormulaResultUpdateWithoutRecordInput, NutritionFormulaResultUncheckedUpdateWithoutRecordInput>
  }

  export type NutritionFormulaResultUpdateWithoutRecordInput = {
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    stressFactor?: FloatFieldUpdateOperationsInput | number
    activityFactor?: FloatFieldUpdateOperationsInput | number
    totalEnergyRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    carbRequirement?: FloatFieldUpdateOperationsInput | number
    fatRequirement?: FloatFieldUpdateOperationsInput | number
    fluidRequirement?: NullableFloatFieldUpdateOperationsInput | number | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFormulaResultsNestedInput
  }

  export type NutritionFormulaResultUncheckedUpdateWithoutRecordInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    stressFactor?: FloatFieldUpdateOperationsInput | number
    activityFactor?: FloatFieldUpdateOperationsInput | number
    totalEnergyRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    carbRequirement?: FloatFieldUpdateOperationsInput | number
    fatRequirement?: FloatFieldUpdateOperationsInput | number
    fluidRequirement?: NullableFloatFieldUpdateOperationsInput | number | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutFormulaResultsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    name: string
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    stressLevel?: $Enums.StressLevel | null
    physiologicalStatus?: $Enums.PhysiologicalStatus | null
    dietGoal?: $Enums.DietGoal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bmrCalculations?: BmrCalculationCreateNestedManyWithoutUserInput
    nutritionRecords?: NutritionRecordCreateNestedManyWithoutUserInput
    diseases?: UserDiseaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFormulaResultsInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    name: string
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    stressLevel?: $Enums.StressLevel | null
    physiologicalStatus?: $Enums.PhysiologicalStatus | null
    dietGoal?: $Enums.DietGoal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bmrCalculations?: BmrCalculationUncheckedCreateNestedManyWithoutUserInput
    nutritionRecords?: NutritionRecordUncheckedCreateNestedManyWithoutUserInput
    diseases?: UserDiseaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFormulaResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFormulaResultsInput, UserUncheckedCreateWithoutFormulaResultsInput>
  }

  export type NutritionRecordCreateWithoutFormulaResultInput = {
    energyTarget: number
    proteinTarget: number
    carbTarget: number
    fatTarget: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNutritionRecordsInput
  }

  export type NutritionRecordUncheckedCreateWithoutFormulaResultInput = {
    id?: number
    userId: string
    energyTarget: number
    proteinTarget: number
    carbTarget: number
    fatTarget: number
    createdAt?: Date | string
  }

  export type NutritionRecordCreateOrConnectWithoutFormulaResultInput = {
    where: NutritionRecordWhereUniqueInput
    create: XOR<NutritionRecordCreateWithoutFormulaResultInput, NutritionRecordUncheckedCreateWithoutFormulaResultInput>
  }

  export type UserUpsertWithoutFormulaResultsInput = {
    update: XOR<UserUpdateWithoutFormulaResultsInput, UserUncheckedUpdateWithoutFormulaResultsInput>
    create: XOR<UserCreateWithoutFormulaResultsInput, UserUncheckedCreateWithoutFormulaResultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFormulaResultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFormulaResultsInput, UserUncheckedUpdateWithoutFormulaResultsInput>
  }

  export type UserUpdateWithoutFormulaResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    physiologicalStatus?: NullableEnumPhysiologicalStatusFieldUpdateOperationsInput | $Enums.PhysiologicalStatus | null
    dietGoal?: NullableEnumDietGoalFieldUpdateOperationsInput | $Enums.DietGoal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bmrCalculations?: BmrCalculationUpdateManyWithoutUserNestedInput
    nutritionRecords?: NutritionRecordUpdateManyWithoutUserNestedInput
    diseases?: UserDiseaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFormulaResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    physiologicalStatus?: NullableEnumPhysiologicalStatusFieldUpdateOperationsInput | $Enums.PhysiologicalStatus | null
    dietGoal?: NullableEnumDietGoalFieldUpdateOperationsInput | $Enums.DietGoal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bmrCalculations?: BmrCalculationUncheckedUpdateManyWithoutUserNestedInput
    nutritionRecords?: NutritionRecordUncheckedUpdateManyWithoutUserNestedInput
    diseases?: UserDiseaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NutritionRecordUpsertWithoutFormulaResultInput = {
    update: XOR<NutritionRecordUpdateWithoutFormulaResultInput, NutritionRecordUncheckedUpdateWithoutFormulaResultInput>
    create: XOR<NutritionRecordCreateWithoutFormulaResultInput, NutritionRecordUncheckedCreateWithoutFormulaResultInput>
    where?: NutritionRecordWhereInput
  }

  export type NutritionRecordUpdateToOneWithWhereWithoutFormulaResultInput = {
    where?: NutritionRecordWhereInput
    data: XOR<NutritionRecordUpdateWithoutFormulaResultInput, NutritionRecordUncheckedUpdateWithoutFormulaResultInput>
  }

  export type NutritionRecordUpdateWithoutFormulaResultInput = {
    energyTarget?: FloatFieldUpdateOperationsInput | number
    proteinTarget?: FloatFieldUpdateOperationsInput | number
    carbTarget?: FloatFieldUpdateOperationsInput | number
    fatTarget?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNutritionRecordsNestedInput
  }

  export type NutritionRecordUncheckedUpdateWithoutFormulaResultInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    energyTarget?: FloatFieldUpdateOperationsInput | number
    proteinTarget?: FloatFieldUpdateOperationsInput | number
    carbTarget?: FloatFieldUpdateOperationsInput | number
    fatTarget?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiseaseCreateWithoutDiseaseInput = {
    notes?: string | null
    user: UserCreateNestedOneWithoutDiseasesInput
  }

  export type UserDiseaseUncheckedCreateWithoutDiseaseInput = {
    id?: number
    userId: string
    notes?: string | null
  }

  export type UserDiseaseCreateOrConnectWithoutDiseaseInput = {
    where: UserDiseaseWhereUniqueInput
    create: XOR<UserDiseaseCreateWithoutDiseaseInput, UserDiseaseUncheckedCreateWithoutDiseaseInput>
  }

  export type UserDiseaseCreateManyDiseaseInputEnvelope = {
    data: UserDiseaseCreateManyDiseaseInput | UserDiseaseCreateManyDiseaseInput[]
    skipDuplicates?: boolean
  }

  export type UserDiseaseUpsertWithWhereUniqueWithoutDiseaseInput = {
    where: UserDiseaseWhereUniqueInput
    update: XOR<UserDiseaseUpdateWithoutDiseaseInput, UserDiseaseUncheckedUpdateWithoutDiseaseInput>
    create: XOR<UserDiseaseCreateWithoutDiseaseInput, UserDiseaseUncheckedCreateWithoutDiseaseInput>
  }

  export type UserDiseaseUpdateWithWhereUniqueWithoutDiseaseInput = {
    where: UserDiseaseWhereUniqueInput
    data: XOR<UserDiseaseUpdateWithoutDiseaseInput, UserDiseaseUncheckedUpdateWithoutDiseaseInput>
  }

  export type UserDiseaseUpdateManyWithWhereWithoutDiseaseInput = {
    where: UserDiseaseScalarWhereInput
    data: XOR<UserDiseaseUpdateManyMutationInput, UserDiseaseUncheckedUpdateManyWithoutDiseaseInput>
  }

  export type UserCreateWithoutDiseasesInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    name: string
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    stressLevel?: $Enums.StressLevel | null
    physiologicalStatus?: $Enums.PhysiologicalStatus | null
    dietGoal?: $Enums.DietGoal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bmrCalculations?: BmrCalculationCreateNestedManyWithoutUserInput
    nutritionRecords?: NutritionRecordCreateNestedManyWithoutUserInput
    formulaResults?: NutritionFormulaResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDiseasesInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.Role
    isEmailVerified?: boolean
    name: string
    gender?: string | null
    birthDate?: Date | string | null
    height?: number | null
    weight?: number | null
    activityLevel?: $Enums.ActivityLevel | null
    stressLevel?: $Enums.StressLevel | null
    physiologicalStatus?: $Enums.PhysiologicalStatus | null
    dietGoal?: $Enums.DietGoal | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bmrCalculations?: BmrCalculationUncheckedCreateNestedManyWithoutUserInput
    nutritionRecords?: NutritionRecordUncheckedCreateNestedManyWithoutUserInput
    formulaResults?: NutritionFormulaResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDiseasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDiseasesInput, UserUncheckedCreateWithoutDiseasesInput>
  }

  export type DiseaseCreateWithoutUsersInput = {
    name: string
  }

  export type DiseaseUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type DiseaseCreateOrConnectWithoutUsersInput = {
    where: DiseaseWhereUniqueInput
    create: XOR<DiseaseCreateWithoutUsersInput, DiseaseUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutDiseasesInput = {
    update: XOR<UserUpdateWithoutDiseasesInput, UserUncheckedUpdateWithoutDiseasesInput>
    create: XOR<UserCreateWithoutDiseasesInput, UserUncheckedCreateWithoutDiseasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDiseasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDiseasesInput, UserUncheckedUpdateWithoutDiseasesInput>
  }

  export type UserUpdateWithoutDiseasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    physiologicalStatus?: NullableEnumPhysiologicalStatusFieldUpdateOperationsInput | $Enums.PhysiologicalStatus | null
    dietGoal?: NullableEnumDietGoalFieldUpdateOperationsInput | $Enums.DietGoal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bmrCalculations?: BmrCalculationUpdateManyWithoutUserNestedInput
    nutritionRecords?: NutritionRecordUpdateManyWithoutUserNestedInput
    formulaResults?: NutritionFormulaResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDiseasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    weight?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: NullableEnumActivityLevelFieldUpdateOperationsInput | $Enums.ActivityLevel | null
    stressLevel?: NullableEnumStressLevelFieldUpdateOperationsInput | $Enums.StressLevel | null
    physiologicalStatus?: NullableEnumPhysiologicalStatusFieldUpdateOperationsInput | $Enums.PhysiologicalStatus | null
    dietGoal?: NullableEnumDietGoalFieldUpdateOperationsInput | $Enums.DietGoal | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bmrCalculations?: BmrCalculationUncheckedUpdateManyWithoutUserNestedInput
    nutritionRecords?: NutritionRecordUncheckedUpdateManyWithoutUserNestedInput
    formulaResults?: NutritionFormulaResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DiseaseUpsertWithoutUsersInput = {
    update: XOR<DiseaseUpdateWithoutUsersInput, DiseaseUncheckedUpdateWithoutUsersInput>
    create: XOR<DiseaseCreateWithoutUsersInput, DiseaseUncheckedCreateWithoutUsersInput>
    where?: DiseaseWhereInput
  }

  export type DiseaseUpdateToOneWithWhereWithoutUsersInput = {
    where?: DiseaseWhereInput
    data: XOR<DiseaseUpdateWithoutUsersInput, DiseaseUncheckedUpdateWithoutUsersInput>
  }

  export type DiseaseUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DiseaseUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BmrCalculationCreateManyUserInput = {
    id?: number
    bmr: number
    tee: number
    tea: number
    createdAt?: Date | string
  }

  export type NutritionRecordCreateManyUserInput = {
    id?: number
    energyTarget: number
    proteinTarget: number
    carbTarget: number
    fatTarget: number
    formulaResultId?: number | null
    createdAt?: Date | string
  }

  export type NutritionFormulaResultCreateManyUserInput = {
    id?: number
    bmr: number
    tee: number
    tea: number
    stressFactor: number
    activityFactor: number
    totalEnergyRequirement: number
    proteinRequirement: number
    carbRequirement: number
    fatRequirement: number
    fluidRequirement?: number | null
    condition?: string | null
    createdAt?: Date | string
  }

  export type UserDiseaseCreateManyUserInput = {
    id?: number
    diseaseId: number
    notes?: string | null
  }

  export type BmrCalculationUpdateWithoutUserInput = {
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BmrCalculationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BmrCalculationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionRecordUpdateWithoutUserInput = {
    energyTarget?: FloatFieldUpdateOperationsInput | number
    proteinTarget?: FloatFieldUpdateOperationsInput | number
    carbTarget?: FloatFieldUpdateOperationsInput | number
    fatTarget?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaResult?: NutritionFormulaResultUpdateOneWithoutRecordNestedInput
  }

  export type NutritionRecordUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    energyTarget?: FloatFieldUpdateOperationsInput | number
    proteinTarget?: FloatFieldUpdateOperationsInput | number
    carbTarget?: FloatFieldUpdateOperationsInput | number
    fatTarget?: FloatFieldUpdateOperationsInput | number
    formulaResultId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionRecordUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    energyTarget?: FloatFieldUpdateOperationsInput | number
    proteinTarget?: FloatFieldUpdateOperationsInput | number
    carbTarget?: FloatFieldUpdateOperationsInput | number
    fatTarget?: FloatFieldUpdateOperationsInput | number
    formulaResultId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NutritionFormulaResultUpdateWithoutUserInput = {
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    stressFactor?: FloatFieldUpdateOperationsInput | number
    activityFactor?: FloatFieldUpdateOperationsInput | number
    totalEnergyRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    carbRequirement?: FloatFieldUpdateOperationsInput | number
    fatRequirement?: FloatFieldUpdateOperationsInput | number
    fluidRequirement?: NullableFloatFieldUpdateOperationsInput | number | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    record?: NutritionRecordUpdateOneWithoutFormulaResultNestedInput
  }

  export type NutritionFormulaResultUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    stressFactor?: FloatFieldUpdateOperationsInput | number
    activityFactor?: FloatFieldUpdateOperationsInput | number
    totalEnergyRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    carbRequirement?: FloatFieldUpdateOperationsInput | number
    fatRequirement?: FloatFieldUpdateOperationsInput | number
    fluidRequirement?: NullableFloatFieldUpdateOperationsInput | number | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    record?: NutritionRecordUncheckedUpdateOneWithoutFormulaResultNestedInput
  }

  export type NutritionFormulaResultUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bmr?: FloatFieldUpdateOperationsInput | number
    tee?: FloatFieldUpdateOperationsInput | number
    tea?: FloatFieldUpdateOperationsInput | number
    stressFactor?: FloatFieldUpdateOperationsInput | number
    activityFactor?: FloatFieldUpdateOperationsInput | number
    totalEnergyRequirement?: FloatFieldUpdateOperationsInput | number
    proteinRequirement?: FloatFieldUpdateOperationsInput | number
    carbRequirement?: FloatFieldUpdateOperationsInput | number
    fatRequirement?: FloatFieldUpdateOperationsInput | number
    fluidRequirement?: NullableFloatFieldUpdateOperationsInput | number | null
    condition?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiseaseUpdateWithoutUserInput = {
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    disease?: DiseaseUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserDiseaseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    diseaseId?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDiseaseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    diseaseId?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDiseaseCreateManyDiseaseInput = {
    id?: number
    userId: string
    notes?: string | null
  }

  export type UserDiseaseUpdateWithoutDiseaseInput = {
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDiseasesNestedInput
  }

  export type UserDiseaseUncheckedUpdateWithoutDiseaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserDiseaseUncheckedUpdateManyWithoutDiseaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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