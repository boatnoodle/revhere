// Type definitions for Jest 24.0
// Project: https://jestjs.io/
// Definitions by: Asana (https://asana.com)
//                 Ivo Stratev <https://github.com/NoHomey>
//                 jwbay <https://github.com/jwbay>
//                 Alexey Svetliakov <https://github.com/asvetliakov>
//                 Alex Jover Morales <https://github.com/alexjoverm>
//                 Allan Lukwago <https://github.com/epicallan>
//                 Ika <https://github.com/ikatyang>
//                 Waseem Dahman <https://github.com/wsmd>
//                 Jamie Mason <https://github.com/JamieMason>
//                 Douglas Duteil <https://github.com/douglasduteil>
//                 Ahn <https://github.com/ahnpnl>
//                 Josh Goldberg <https://github.com/joshuakgoldberg>
//                 Jeff Lau <https://github.com/UselessPickles>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Martin Hochel <https://github.com/hotell>
//                 Sebastian Sebald <https://github.com/sebald>
//                 Andy <https://github.com/andys8>
//                 Antoine Brault <https://github.com/antoinebrault>
//                 Jeroen Claassens <https://github.com/favna>
//                 Gregor Stamać <https://github.com/gstamac>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Alex Bolenok <https://github.com/quassnoi>
//                 Mario Beltrán Alarcón <https://github.com/Belco90>
//                 Tony Hallett <https://github.com/tonyhallett>
//                 Jason Yu <https://github.com/ycmjason>
//                 Devansh Jethmalani <https://github.com/devanshj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="jest-diff" />

declare let beforeAll: jest.Lifecycle;
declare let beforeEach: jest.Lifecycle;
declare let afterAll: jest.Lifecycle;
declare let afterEach: jest.Lifecycle;
declare let describe: jest.Describe;
declare let fdescribe: jest.Describe;
declare let xdescribe: jest.Describe;
declare let it: jest.It;
declare let fit: jest.It;
declare let xit: jest.It;
declare let test: jest.It;
declare let xtest: jest.It;

declare const expect: jest.Expect;

type ExtractEachCallbackArgs<T extends ReadonlyArray<any>> = {
  1: [T[0]];
  2: [T[0], T[1]];
  3: [T[0], T[1], T[2]];
  4: [T[0], T[1], T[2], T[3]];
  5: [T[0], T[1], T[2], T[3], T[4]];
  6: [T[0], T[1], T[2], T[3], T[4], T[5]];
  7: [T[0], T[1], T[2], T[3], T[4], T[5], T[6]];
  8: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7]];
  9: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8]];
  10: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9]];
  fallback: Array<T extends ReadonlyArray<infer U> ? U : any>;
}[T extends Readonly<[any]>
  ? 1
  : T extends Readonly<[any, any]>
  ? 2
  : T extends Readonly<[any, any, any]>
  ? 3
  : T extends Readonly<[any, any, any, any]>
  ? 4
  : T extends Readonly<[any, any, any, any, any]>
  ? 5
  : T extends Readonly<[any, any, any, any, any, any]>
  ? 6
  : T extends Readonly<[any, any, any, any, any, any, any]>
  ? 7
  : T extends Readonly<[any, any, any, any, any, any, any, any]>
  ? 8
  : T extends Readonly<[any, any, any, any, any, any, any, any, any]>
  ? 9
  : T extends Readonly<[any, any, any, any, any, any, any, any, any, any]>
  ? 10
  : 'fallback'];

interface NodeRequire {
  /**
   * Returns the actual module instead of a mock, bypassing all checks on
   * whether the module should receive a mock implementation or not.
   *
   * @deprecated Use `jest.requireActual` instead.
   */
  requireActual(moduleName: string): any;
  /**
   * Returns a mock module instead of the actual module, bypassing all checks
   * on whether the module should be required normally or not.
   *
   * @deprecated Use `jest.requireMock`instead.
   */
  requireMock(moduleName: string): any;
}

declare namespace jest {
  /**
   * Provides a way to add Jasmine-compatible matchers into your Jest context.
   */
  function addMatchers(matchers: jasmine.CustomMatcherFactories): typeof jest;
  /**
   * Disables automatic mocking in the module loader.
   */
  function autoMockOff(): typeof jest;
  /**
   * Enables automatic mocking in the module loader.
   */
  function autoMockOn(): typeof jest;
  /**
   * Clears the mock.calls and mock.instances properties of all mocks.
   * Equivalent to calling .mockClear() on every mocked function.
   */
  function clearAllMocks(): typeof jest;
  /**
   * Resets the state of all mocks.
   * Equivalent to calling .mockReset() on every mocked function.
   */
  function resetAllMocks(): typeof jest;
  /**
   * available since Jest 21.1.0
   * Restores all mocks back to their original value.
   * Equivalent to calling .mockRestore on every mocked function.
   * Beware that jest.restoreAllMocks() only works when mock was created with
   * jest.spyOn; other mocks will require you to manually restore them.
   */
  function restoreAllMocks(): typeof jest;
  /**
   * Removes any pending timers from the timer system. If any timers have
   * been scheduled, they will be cleared and will never have the opportunity
   * to execute in the future.
   */
  function clearAllTimers(): typeof jest;
  /**
   * Returns the number of fake timers still left to run.
   */
  function getTimerCount(): number;
  /**
   * Indicates that the module system should never return a mocked version
   * of the specified module, including all of the specificied module's dependencies.
   */
  function deepUnmock(moduleName: string): typeof jest;
  /**
   * Disables automatic mocking in the module loader.
   */
  function disableAutomock(): typeof jest;
  /**
   * Mocks a module with an auto-mocked version when it is being required.
   */
  function doMock(moduleName: string, factory?: () => unknown, options?: MockOptions): typeof jest;
  /**
   * Indicates that the module system should never return a mocked version
   * of the specified module from require() (e.g. that it should always return the real module).
   */
  function dontMock(moduleName: string): typeof jest;
  /**
   * Enables automatic mocking in the module loader.
   */
  function enableAutomock(): typeof jest;
  /**
   * Creates a mock function. Optionally takes a mock implementation.
   */
  function fn(): Mock;
  /**
   * Creates a mock function. Optionally takes a mock implementation.
   */
  function fn<T, Y extends any[]>(implementation?: (...args: Y) => T): Mock<T, Y>;
  /**
   * Use the automatic mocking system to generate a mocked version of the given module.
   */
  function genMockFromModule<T>(moduleName: string): T;
  /**
   * Returns whether the given function is a mock function.
   */
  function isMockFunction(fn: any): fn is Mock;
  /**
   * Mocks a module with an auto-mocked version when it is being required.
   */
  function mock(moduleName: string, factory?: () => unknown, options?: MockOptions): typeof jest;
  /**
   * Returns the actual module instead of a mock, bypassing all checks on
   * whether the module should receive a mock implementation or not.
   */
  function requireActual(moduleName: string): any;
  /**
   * Returns a mock module instead of the actual module, bypassing all checks
   * on whether the module should be required normally or not.
   */
  function requireMock(moduleName: string): any;
  /**
   * Resets the module registry - the cache of all required modules. This is
   * useful to isolate modules where local state might conflict between tests.
   */
  function resetModuleRegistry(): typeof jest;
  /**
   * Resets the module registry - the cache of all required modules. This is
   * useful to isolate modules where local state might conflict between tests.
   */
  function resetModules(): typeof jest;
  /**
   * Creates a sandbox registry for the modules that are loaded inside the callback function..
   * This is useful to isolate specific modules for every test so that local module state doesn't conflict between tests.
   */
  function isolateModules(fn: () => void): typeof jest;
  /**
   * Runs failed tests n-times until they pass or until the max number of retries is exhausted.
   * This only works with jest-circus!
   */
  function retryTimes(numRetries: number): typeof jest;
  /**
   * Exhausts tasks queued by setImmediate().
   */
  function runAllImmediates(): typeof jest;
  /**
   * Exhausts the micro-task queue (usually interfaced in node via process.nextTick).
   */
  function runAllTicks(): typeof jest;
  /**
   * Exhausts the macro-task queue (i.e., all tasks queued by setTimeout() and setInterval()).
   */
  function runAllTimers(): typeof jest;
  /**
   * Executes only the macro-tasks that are currently pending (i.e., only the
   * tasks that have been queued by setTimeout() or setInterval() up to this point).
   * If any of the currently pending macro-tasks schedule new macro-tasks,
   * those new tasks will not be executed by this call.
   */
  function runOnlyPendingTimers(): typeof jest;
  /**
   * (renamed to `advanceTimersByTime` in Jest 21.3.0+) Executes only the macro
   * task queue (i.e. all tasks queued by setTimeout() or setInterval() and setImmediate()).
   */
  function runTimersToTime(msToRun: number): typeof jest;
  /**
   * Advances all timers by msToRun milliseconds. All pending "macro-tasks" that have been
   * queued via setTimeout() or setInterval(), and would be executed within this timeframe
   * will be executed.
   */
  function advanceTimersByTime(msToRun: number): typeof jest;
  /**
   * Advances all timers by the needed milliseconds so that only the next
   * timeouts/intervals will run. Optionally, you can provide steps, so it
   * will run steps amount of next timeouts/intervals.
   */
  function advanceTimersToNextTimer(step?: number): void;
  /**
   * Explicitly supplies the mock object that the module system should return
   * for the specified module.
   */
  function setMock<T>(moduleName: string, moduleExports: T): typeof jest;
  /**
   * Set the default timeout interval for tests and before/after hooks in milliseconds.
   * Note: The default timeout interval is 5 seconds if this method is not called.
   */
  function setTimeout(timeout: number): typeof jest;
  /**
   * Creates a mock function similar to jest.fn but also tracks calls to `object[methodName]`
   *
   * Note: By default, jest.spyOn also calls the spied method. This is different behavior from most
   * other test libraries.
   *
   * @example
   *
   * const video = require('./video');
   *
   * test('plays video', () => {
   *   const spy = jest.spyOn(video, 'play');
   *   const isPlaying = video.play();
   *
   *   expect(spy).toHaveBeenCalled();
   *   expect(isPlaying).toBe(true);
   *
   *   spy.mockReset();
   *   spy.mockRestore();
   * });
   */
  function spyOn<T extends {}, M extends NonFunctionPropertyNames<Required<T>>>(
    object: T,
    method: M,
    accessType: 'get',
  ): SpyInstance<Required<T>[M], []>;
  function spyOn<T extends {}, M extends NonFunctionPropertyNames<Required<T>>>(
    object: T,
    method: M,
    accessType: 'set',
  ): SpyInstance<void, [Required<T>[M]]>;
  function spyOn<T extends {}, M extends FunctionPropertyNames<Required<T>>>(
    object: T,
    method: M,
  ): Required<T>[M] extends (...args: any[]) => any
    ? SpyInstance<ReturnType<Required<T>[M]>, ArgsType<Required<T>[M]>>
    : never;
  /**
   * Indicates that the module system should never return a mocked version of
   * the specified module from require() (e.g. that it should always return the real module).
   */
  function unmock(moduleName: string): typeof jest;
  /**
   * Instructs Jest to use fake versions of the standard timer functions.
   */
  function useFakeTimers(): typeof jest;
  /**
   * Instructs Jest to use the real versions of the standard timer functions.
   */
  function useRealTimers(): typeof jest;

  interface MockOptions {
    virtual?: boolean;
  }

  type EmptyFunction = () => void;
  type ArgsType<T> = T extends (...args: infer A) => any ? A : never;
  type RejectedValue<T> = T extends PromiseLike<any> ? any : never;
  type ResolvedValue<T> = T extends PromiseLike<infer U> ? U | T : never;
  // see https://github.com/Microsoft/TypeScript/issues/25215
  type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K }[keyof T] &
    string;
  type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never }[keyof T] &
    string;

  interface DoneCallback {
    (...args: any[]): any;
    fail(error?: string | { message: string }): any;
  }

  type ProvidesCallback = (cb: DoneCallback) => any;

  type Lifecycle = (fn: ProvidesCallback, timeout?: number) => any;

  interface FunctionLike {
    readonly name: string;
  }

  interface Each {
    // Exclusively arrays.
    <T extends any[] | [any]>(cases: ReadonlyArray<T>): (
      name: string,
      fn: (...args: T) => any,
      timeout?: number,
    ) => void;
    <T extends ReadonlyArray<any>>(cases: ReadonlyArray<T>): (
      name: string,
      fn: (...args: ExtractEachCallbackArgs<T>) => any,
      timeout?: number,
    ) => void;
    // Not arrays.
    <T>(cases: ReadonlyArray<T>): (name: string, fn: (...args: T[]) => any, timeout?: number) => void;
    (cases: ReadonlyArray<ReadonlyArray<any>>): (name: string, fn: (...args: any[]) => any, timeout?: number) => void;
    (strings: TemplateStringsArray, ...placeholders: any[]): (
      name: string,
      fn: (arg: any) => any,
      timeout?: number,
    ) => void;
  }

  /**
   * Creates a test closure
   */
  interface It {
    /**
     * Creates a test closure.
     *
     * @param name The name of your test
     * @param fn The function for your test
     * @param timeout The timeout for an async function test
     */
    (name: string, fn?: ProvidesCallback, timeout?: number): void;
    /**
     * Only runs this test in the current file.
     */
    only: It;
    /**
     * Skips running this test in the current file.
     */
    skip: It;
    /**
     * Sketch out which tests to write in the future.
     */
    todo: It;
    /**
     * Experimental and should be avoided.
     */
    concurrent: It;
    /**
     * Use if you keep duplicating the same test with different data. `.each` allows you to write the
     * test once and pass data in.
     *
     * `.each` is available with two APIs:
     *
     * #### 1  `test.each(table)(name, fn)`
     *
     * - `table`: Array of Arrays with the arguments that are passed into the test fn for each row.
     * - `name`: String the title of the test block.
     * - `fn`: Function the test to be ran, this is the function that will receive the parameters in each row as function arguments.
     *
     *
     * #### 2  `test.each table(name, fn)`
     *
     * - `table`: Tagged Template Literal
     * - `name`: String the title of the test, use `$variable` to inject test data into the test title from the tagged template expressions.
     * - `fn`: Function the test to be ran, this is the function that will receive the test data object..
     *
     * @example
     *
     * // API 1
     * test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
     *   '.add(%i, %i)',
     *   (a, b, expected) => {
     *     expect(a + b).toBe(expected);
     *   },
     * );
     *
     * // API 2
     * test.each`
     * a    | b    | expected
     * ${1} | ${1} | ${2}
     * ${1} | ${2} | ${3}
     * ${2} | ${1} | ${3}
     * `('returns $expected when $a is added $b', ({a, b, expected}) => {
     *    expect(a + b).toBe(expected);
     * });
     *
     */
    each: Each;
  }

  interface Describe {
    // tslint:disable-next-line ban-types
    (name: number | string | Function | FunctionLike, fn: EmptyFunction): void;
    /** Only runs the tests inside this `describe` for the current file */
    only: Describe;
    /** Skips running the tests inside this `describe` for the current file */
    skip: Describe;
    each: Each;
  }

  type PrintLabel = (string: string) => string;

  type MatcherHintColor = (arg: string) => string;

  interface MatcherHintOptions {
    comment?: string;
    expectedColor?: MatcherHintColor;
    isDirectExpectCall?: boolean;
    isNot?: boolean;
    promise?: string;
    receivedColor?: MatcherHintColor;
    secondArgument?: string;
    secondArgumentColor?: MatcherHintColor;
  }

  interface ChalkFunction {
    (text: TemplateStringsArray, ...placeholders: any[]): string;
    (...text: any[]): string;
  }

  interface ChalkColorSupport {
    level: 0 | 1 | 2 | 3;
    hasBasic: boolean;
    has256: boolean;
    has16m: boolean;
  }

  type MatcherColorFn = ChalkFunction & { supportsColor: ChalkColorSupport };

  type EqualityTester = (a: any, b: any) => boolean | undefined;

  interface MatcherUtils {
    readonly isNot: boolean;
    readonly dontThrow: () => void;
    readonly promise: string;
    readonly assertionCalls: number;
    readonly expectedAssertionsNumber: number | null;
    readonly isExpectingAssertions: boolean;
    readonly suppressedErrors: any[];
    readonly expand: boolean;
    readonly testPath: string;
    readonly currentTestName: string;
    utils: {
      readonly EXPECTED_COLOR: MatcherColorFn;
      readonly RECEIVED_COLOR: MatcherColorFn;
      readonly INVERTED_COLOR: MatcherColorFn;
      readonly BOLD_WEIGHT: MatcherColorFn;
      readonly DIM_COLOR: MatcherColorFn;
      readonly SUGGEST_TO_CONTAIN_EQUAL: string;
      diff(a: any, b: any, options?: import('jest-diff').DiffOptions): string | null;
      ensureActualIsNumber(actual: any, matcherName: string, options?: MatcherHintOptions): void;
      ensureExpectedIsNumber(actual: any, matcherName: string, options?: MatcherHintOptions): void;
      ensureNoExpected(actual: any, matcherName: string, options?: MatcherHintOptions): void;
      ensureNumbers(actual: any, expected: any, matcherName: string, options?: MatcherHintOptions): void;
      ensureExpectedIsNonNegativeInteger(expected: any, matcherName: string, options?: MatcherHintOptions): void;
      matcherHint(matcherName: string, received?: string, expected?: string, options?: MatcherHintOptions): string;
      matcherErrorMessage(hint: string, generic: string, specific: string): string;
      pluralize(word: string, count: number): string;
      printReceived(object: any): string;
      printExpected(value: any): string;
      printWithType(name: string, value: any, print: (value: any) => string): string;
      stringify(object: {}, maxDepth?: number): string;
      highlightTrailingWhitespace(text: string): string;

      printDiffOrStringify(
        expected: any,
        received: any,
        expectedLabel: string,
        receivedLabel: string,
        expand: boolean,
      ): string;

      getLabelPrinter(...strings: string[]): PrintLabel;

      iterableEquality: EqualityTester;
      subsetEquality: EqualityTester;
    };
    /**
     *  This is a deep-equality function that will return true if two objects have the same values (recursively).
     */
    equals(a: any, b: any, customTesters?: EqualityTester[], strictCheck?: boolean): boolean;
    [other: string]: any;
  }

  interface ExpectExtendMap {
    [key: string]: CustomMatcher;
  }

  type MatcherContext = MatcherUtils & Readonly<MatcherState>;
  type CustomMatcher = (
    this: MatcherContext,
    received: any,
    ...actual: any[]
  ) => CustomMatcherResult | Promise<CustomMatcherResult>;

  interface CustomMatcherResult {
    pass: boolean;
    message: () => string;
  }

  interface SnapshotSerializerOptions {
    callToJSON?: boolean;
    edgeSpacing?: string;
    spacing?: string;
    escapeRegex?: boolean;
    highlight?: boolean;
    indent?: number;
    maxDepth?: number;
    min?: boolean;
    plugins?: SnapshotSerializerPlugin[];
    printFunctionName?: boolean;
    theme?: SnapshotSerializerOptionsTheme;

    // see https://github.com/facebook/jest/blob/e56103cf142d2e87542ddfb6bd892bcee262c0e6/types/PrettyFormat.js
  }
  interface SnapshotSerializerOptionsTheme {
    comment?: string;
    content?: string;
    prop?: string;
    tag?: string;
    value?: string;
  }
  interface SnapshotSerializerColor {
    close: string;
    open: string;
  }
  interface SnapshotSerializerColors {
    comment: SnapshotSerializerColor;
    content: SnapshotSerializerColor;
    prop: SnapshotSerializerColor;
    tag: SnapshotSerializerColor;
    value: SnapshotSerializerColor;
  }
  interface SnapshotSerializerPlugin {
    print(
      val: any,
      serialize: (val: any) => string,
      indent: (str: string) => string,
      opts: SnapshotSerializerOptions,
      colors: SnapshotSerializerColors,
    ): string;
    test(val: any): boolean;
  }

  interface InverseAsymmetricMatchers {
    /**
     * `expect.not.arrayContaining(array)` matches a received array which
     * does not contain all of the elements in the expected array. That is,
     * the expected array is not a subset of the received array. It is the
     * inverse of `expect.arrayContaining`.
     *
     * Optionally, you can provide a type for the elements via a generic.
     */
    arrayContaining<E = any>(arr: E[]): any;
    /**
     * `expect.not.objectContaining(object)` matches any received object
     * that does not recursively match the expected properties. That is, the
     * expected object is not a subset of the received object. Therefore,
     * it matches a received object which contains properties that are not
     * in the expected object. It is the inverse of `expect.objectContaining`.
     *
     * Optionally, you can provide a type for the object via a generic.
     * This ensures that the object contains the desired structure.
     */
    objectContaining<E = {}>(obj: E): any;
    /**
     * `expect.not.stringMatching(string | regexp)` matches the received
     * string that does not match the expected regexp. It is the inverse of
     * `expect.stringMatching`.
     */
    stringMatching(str: string | RegExp): any;
    /**
     * `expect.not.stringContaining(string)` matches the received string
     * that does not contain the exact expected string. It is the inverse of
     * `expect.stringContaining`.
     */
    stringContaining(str: string): any;
  }
  interface MatcherState {
    assertionCalls: number;
    currentTestName: string;
    expand: boolean;
    expectedAssertionsNumber: number;
    isExpectingAssertions?: boolean;
    suppressedErrors: Error[];
    testPath: string;
  }
  /**
   * The `expect` function is used every time you want to test a value.
   * You will rarely call `expect` by itself.
   */
  interface Expect {
    /**
     * The `expect` function is used every time you want to test a value.
     * You will rarely call `expect` by itself.
     *
     * @param actual The value to apply matchers against.
     */
    <T = any>(actual: T): JestMatchers<T>;
    /**
     * Matches anything but null or undefined. You can use it inside `toEqual` or `toBeCalledWith` instead
     * of a literal value. For example, if you want to check that a mock function is called with a
     * non-null argument:
     *
     * @example
     *
     * test('map calls its argument with a non-null argument', () => {
     *   const mock = jest.fn();
     *   [1].map(x => mock(x));
     *   expect(mock).toBeCalledWith(expect.anything());
     * });
     *
     */
    anything(): any;
    /**
     * Matches anything that was created with the given constructor.
     * You can use it inside `toEqual` or `toBeCalledWith` instead of a literal value.
     *
     * @example
     *
     * function randocall(fn) {
     *   return fn(Math.floor(Math.random() * 6 + 1));
     * }
     *
     * test('randocall calls its callback with a number', () => {
     *   const mock = jest.fn();
     *   randocall(mock);
     *   expect(mock).toBeCalledWith(expect.any(Number));
     * });
     */
    any(classType: any): any;
    /**
     * Matches any array made up entirely of elements in the provided array.
     * You can use it inside `toEqual` or `toBeCalledWith` instead of a literal value.
     *
     * Optionally, you can provide a type for the elements via a generic.
     */
    arrayContaining<E = any>(arr: E[]): any;
    /**
     * Verifies that a certain number of assertions are called during a test.
     * This is often useful when testing asynchronous code, in order to
     * make sure that assertions in a callback actually got called.
     */
    assertions(num: number): void;
    /**
     * Verifies that at least one assertion is called during a test.
     * This is often useful when testing asynchronous code, in order to
     * make sure that assertions in a callback actually got called.
     */
    hasAssertions(): void;
    /**
     * You can use `expect.extend` to add your own matchers to Jest.
     */
    extend(obj: ExpectExtendMap): void;
    /**
     * Adds a module to format application-specific data structures for serialization.
     */
    addSnapshotSerializer(serializer: SnapshotSerializerPlugin): void;
    /**
     * Matches any object that recursively matches the provided keys.
     * This is often handy in conjunction with other asymmetric matchers.
     *
     * Optionally, you can provide a type for the object via a generic.
     * This ensures that the object contains the desired structure.
     */
    objectContaining<E = {}>(obj: E): any;
    /**
     * Matches any string that contains the exact provided string
     */
    stringMatching(str: string | RegExp): any;
    /**
     * Matches any received string that contains the exact expected string
     */
    stringContaining(str: string): any;

    not: InverseAsymmetricMatchers;

    setState(state: object): void;
    getState(): MatcherState & Record<string, any>;
  }

  type JestMatchers<T> = JestMatchersShape<Matchers<void, T>, Matchers<Promise<void>, T>>;

  type JestMatchersShape<TNonPromise extends {} = {}, TPromise extends {} = {}> = {
    /**
     * Use resolves to unwrap the value of a fulfilled promise so any other
     * matcher can be chained. If the promise is rejected the assertion fails.
     */
    resolves: AndNot<TPromise>;
    /**
     * Unwraps the reason of a rejected promise so any other matcher can be chained.
     * If the promise is fulfilled the assertion fails.
     */
    rejects: AndNot<TPromise>;
  } & AndNot<TNonPromise>;
  type AndNot<T> = T & {
    not: T;
  };
  // should be R extends void|Promise<void> but getting dtslint error
  interface Matchers<R, T> {
    /**
     * Ensures the last call to a mock function was provided specific args.
     *
     * Optionally, you can provide a type for the expected arguments via a generic.
     * Note that the type must be either an array or a tuple.
     */
    lastCalledWith<E extends any[]>(...args: E): R;
    /**
     * Ensure that the last call to a mock function has returned a specified value.
     *
     * Optionally, you can provide a type for the expected value via a generic.
     * This is particuarly useful for ensuring expected objects have the right structure.
     */
    lastReturnedWith<E = any>(value: E): R;
    /**
     * Ensure that a mock function is called with specific arguments on an Nth call.
     *
     * Optionally, you can provide a type for the expected arguments via a generic.
     * Note that the type must be either an array or a tuple.
     */
    nthCalledWith<E extends any[]>(nthCall: number, ...params: E): R;
    /**
     * Ensure that the nth call to a mock function has returned a specified value.
     *
     * Optionally, you can provide a type for the expected value via a generic.
     * This is particuarly useful for ensuring expected objects have the right structure.
     */
    nthReturnedWith<E = any>(n: number, value: E): R;
    /**
     * Checks that a value is what you expect. It uses `===` to check strict equality.
     * Don't use `toBe` with floating-point numbers.
     *
     * Optionally, you can provide a type for the expected value via a generic.
     * This is particuarly useful for ensuring expected objects have the right structure.
     */
    toBe<E = any>(expected: E): R;
    /**
     * Ensures that a mock function is called.
     */
    toBeCalled(): R;
    /**
     * Ensures that a mock function is called an exact number of times.
     */
    toBeCalledTimes(expected: number): R;
    /**
     * Ensure that a mock function is called with specific arguments.
     *
     * Optionally, you can provide a type for the expected arguments via a generic.
     * Note that the type must be either an array or a tuple.
     */
    toBeCalledWith<E extends any[]>(...args: E): R;
    /**
     * Using exact equality with floating point numbers is a bad idea.
     * Rounding means that intuitive things fail.
     * The default for numDigits is 2.
     */
    toBeCloseTo(expected: number, numDigits?: number): R;
    /**
     * Ensure that a variable is not undefined.
     */
    toBeDefined(): R;
    /**
     * When you don't care what a value is, you just want to
     * ensure a value is false in a boolean context.
     */
    toBeFalsy(): R;
    /**
     * For comparing floating point numbers.
     */
    toBeGreaterThan(expected: number): R;
    /**
     * For comparing floating point numbers.
     */
    toBeGreaterThanOrEqual(expected: number): R;
    /**
     * Ensure that an object is an instance of a class.
     * This matcher uses `instanceof` underneath.
     *
     * Optionally, you can provide a type for the expected value via a generic.
     * This is particuarly useful for ensuring expected objects have the right structure.
     */
    toBeInstanceOf<E = any>(expected: E): R;
    /**
     * For comparing floating point numbers.
     */
    toBeLessThan(expected: number): R;
    /**
     * For comparing floating point numbers.
     */
    toBeLessThanOrEqual(expected: number): R;
    /**
     * This is the same as `.toBe(null)` but the error messages are a bit nicer.
     * So use `.toBeNull()` when you want to check that something is null.
     */
    toBeNull(): R;
    /**
     * Use when you don't care what a value is, you just want to ensure a value
     * is true in a boolean context. In JavaScript, there are six falsy values:
     * `false`, `0`, `''`, `null`, `undefined`, and `NaN`. Everything else is truthy.
     */
    toBeTruthy(): R;
    /**
     * Used to check that a variable is undefined.
     */
    toBeUndefined(): R;
    /**
     * Used to check that a variable is NaN.
     */
    toBeNaN(): R;
    /**
     * Used when you want to check that an item is in a list.
     * For testing the items in the list, this uses `===`, a strict equality check.
     *
     * Optionally, you can provide a type for the expected value via a generic.
     * This is particuarly useful for ensuring expected objects have the right structure.
     */
    toContain<E = any>(expected: E): R;
    /**
     * Used when you want to check that an item is in a list.
     * For testing the items in the list, this matcher recursively checks the
     * equality of all fields, rather than checking for object identity.
     *
     * Optionally, you can provide a type for the expected value via a generic.
     * This is particuarly useful for ensuring expected objects have the right structure.
     */
    toContainEqual<E = any>(expected: E): R;
    /**
     * Used when you want to check that two objects have the same value.
     * This matcher recursively checks the equality of all fields, rather than checking for object identity.
     *
     * Optionally, you can provide a type for the expected value via a generic.
     * This is particuarly useful for ensuring expected objects have the right structure.
     */
    toEqual<E = any>(expected: E): R;
    /**
     * Ensures that a mock function is called.
     */
    toHaveBeenCalled(): R;
    /**
     * Ensures that a mock function is called an exact number of times.
     */
    toHaveBeenCalledTimes(expected: number): R;
    /**
     * Ensure that a mock function is called with specific arguments.
     *
     * Optionally, you can provide a type for the expected arguments via a generic.
     * Note that the type must be either an array or a tuple.
     */
    toHaveBeenCalledWith<E extends any[]>(...params: E): R;
    /**
     * Ensure that a mock function is called with specific arguments on an Nth call.
     *
     * Optionally, you can provide a type for the expected arguments via a generic.
     * Note that the type must be either an array or a tuple.
     */
    toHaveBeenNthCalledWith<E extends any[]>(nthCall: number, ...params: E): R;
    /**
     * If you have a mock function, you can use `.toHaveBeenLastCalledWith`
     * to test what arguments it was last called with.
     *
     * Optionally, you can provide a type for the expected arguments via a generic.
     * Note that the type must be either an array or a tuple.
     */
    toHaveBeenLastCalledWith<E extends any[]>(...params: E): R;
    /**
     * Use to test the specific value that a mock function last returned.
     * If the last call to the mock function threw an error, then this matcher will fail
     * no matter what value you provided as the expected return value.
     *
     * Optionally, you can provide a type for the expected value via a generic.
     * This is particuarly useful for ensuring expected objects have the right structure.
     */
    toHaveLastReturnedWith<E = any>(expected: E): R;
    /**
     * Used to check that an object has a `.length` property
     * and it is set to a certain numeric value.
     */
    toHaveLength(expected: number): R;
    /**
     * Use to test the specific value that a mock function returned for the nth call.
     * If the nth call to the mock function threw an error, then this matcher will fail
     * no matter what value you provided as the expected return value.
     *
     * Optionally, you can provide a type for the expected value via a generic.
     * This is particuarly useful for ensuring expected objects have the right structure.
     */
    toHaveNthReturnedWith<E = any>(nthCall: number, expected: E): R;
    /**
     * Use to check if property at provided reference keyPath exists for an object.
     * For checking deeply nested properties in an object you may use dot notation or an array containing
     * the keyPath for deep references.
     *
     * Optionally, you can provide a value to check if it's equal to the value present at keyPath
     * on the target object. This matcher uses 'deep equality' (like `toEqual()`) and recursively checks
     * the equality of all fields.
     *
     * @example
     *
     * expect(houseForSale).toHaveProperty('kitchen.area', 20);
     */
    toHaveProperty<E = any>(propertyPath: string | any[], value?: E): R;
    /**
     * Use to test that the mock function successfully returned (i.e., did not throw an error) at least one time
     */
    toHaveReturned(): R;
    /**
     * Use to ensure that a mock function returned successfully (i.e., did not throw an error) an exact number of times.
     * Any calls to the mock function that throw an error are not counted toward the number of times the function returned.
     */
    toHaveReturnedTimes(expected: number): R;
    /**
     * Use to ensure that a mock function returned a specific value.
     *
     * Optionally, you can provide a type for the expected value via a generic.
     * This is particuarly useful for ensuring expected objects have the right structure.
     */
    toHaveReturnedWith<E = any>(expected: E): R;
    /**
     * Check that a string matches a regular expression.
     */
    toMatch(expected: string | RegExp): R;
    /**
     * Used to check that a JavaScript object matches a subset of the properties of an object
     *
     * Optionally, you can provide an object to use as Generic type for the expected value.
     * This ensures that the matching object matches the structure of the provided object-like type.
     *
     * @example
     *
     * type House = {
     *   bath: boolean;
     *   bedrooms: number;
     *   kitchen: {
     *     amenities: string[];
     *     area: number;
     *     wallColor: string;
     *   }
     * };
     *
     * expect(desiredHouse).toMatchObject<House>(...standardHouse, kitchen: {area: 20}) // wherein standardHouse is some base object of type House
     */
    toMatchObject<E extends {} | any[]>(expected: E): R;
    /**
     * This ensures that a value matches the most recent snapshot with property matchers.
     * Check out [the Snapshot Testing guide](http://facebook.github.io/jest/docs/snapshot-testing.html) for more information.
     */
    toMatchSnapshot<U extends { [P in keyof T]: any }>(propertyMatchers: Partial<U>, snapshotName?: string): R;
    /**
     * This ensures that a value matches the most recent snapshot.
     * Check out [the Snapshot Testing guide](http://facebook.github.io/jest/docs/snapshot-testing.html) for more information.
     */
    toMatchSnapshot(snapshotName?: string): R;
    /**
     * This ensures that a value matches the most recent snapshot with property matchers.
     * Instead of writing the snapshot value to a .snap file, it will be written into the source code automatically.
     * Check out [the Snapshot Testing guide](http://facebook.github.io/jest/docs/snapshot-testing.html) for more information.
     */
    toMatchInlineSnapshot<U extends { [P in keyof T]: any }>(propertyMatchers: Partial<U>, snapshot?: string): R;
    /**
     * This ensures that a value matches the most recent snapshot with property matchers.
     * Instead of writing the snapshot value to a .snap file, it will be written into the source code automatically.
     * Check out [the Snapshot Testing guide](http://facebook.github.io/jest/docs/snapshot-testing.html) for more information.
     */
    toMatchInlineSnapshot(snapshot?: string): R;
    /**
     * Ensure that a mock function has returned (as opposed to thrown) at least once.
     */
    toReturn(): R;
    /**
     * Ensure that a mock function has returned (as opposed to thrown) a specified number of times.
     */
    toReturnTimes(count: number): R;
    /**
     * Ensure that a mock function has returned a specified value at least once.
     *
     * Optionally, you can provide a type for the expected value via a generic.
     * This is particuarly useful for ensuring expected objects have the right structure.
     */
    toReturnWith<E = any>(value: E): R;
    /**
     * Use to test that objects have the same types as well as structure.
     *
     * Optionally, you can provide a type for the expected value via a generic.
     * This is particuarly useful for ensuring expected objects have the right structure.
     */
    toStrictEqual<E = any>(expected: E): R;
    /**
     * Used to test that a function throws when it is called.
     */
    toThrow(error?: string | Constructable | RegExp | Error): R;
    /**
     * If you want to test that a specific error is thrown inside a function.
     */
    toThrowError(error?: string | Constructable | RegExp | Error): R;
    /**
     * Used to test that a function throws a error matching the most recent snapshot when it is called.
     */
    toThrowErrorMatchingSnapshot(): R;
    /**
     * Used to test that a function throws a error matching the most recent snapshot when it is called.
     * Instead of writing the snapshot value to a .snap file, it will be written into the source code automatically.
     */
    toThrowErrorMatchingInlineSnapshot(snapshot?: string): R;
  }

  type RemoveFirstFromTuple<T extends any[]> = T['length'] extends 0
    ? []
    : ((...b: T) => void) extends (a: any, ...b: infer I) => void
    ? I
    : [];

  type Parameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never;

  interface AsymmetricMatcher {
    asymmetricMatch(other: unknown): boolean;
  }
  type NonAsyncMatchers<TMatchers extends ExpectExtendMap> = {
    [K in keyof TMatchers]: ReturnType<TMatchers[K]> extends Promise<CustomMatcherResult> ? never : K;
  }[keyof TMatchers];
  type CustomAsyncMatchers<TMatchers extends ExpectExtendMap> = {
    [K in NonAsyncMatchers<TMatchers>]: CustomAsymmetricMatcher<TMatchers[K]>;
  };
  type CustomAsymmetricMatcher<TMatcher extends (...args: any[]) => any> = (
    ...args: RemoveFirstFromTuple<Parameters<TMatcher>>
  ) => AsymmetricMatcher;

  // should be TMatcherReturn extends void|Promise<void> but getting dtslint error
  type CustomJestMatcher<TMatcher extends (...args: any[]) => any, TMatcherReturn> = (
    ...args: RemoveFirstFromTuple<Parameters<TMatcher>>
  ) => TMatcherReturn;

  type ExpectProperties = {
    [K in keyof Expect]: Expect[K];
  };
  // should be TMatcherReturn extends void|Promise<void> but getting dtslint error
  // Use the `void` type for return types only. Otherwise, use `undefined`. See: https://github.com/Microsoft/dtslint/blob/master/docs/void-return.md
  // have added issue https://github.com/microsoft/dtslint/issues/256 - Cannot have type union containing void ( to be used as return type only
  type ExtendedMatchers<TMatchers extends ExpectExtendMap, TMatcherReturn, TActual> = Matchers<
    TMatcherReturn,
    TActual
  > &
    { [K in keyof TMatchers]: CustomJestMatcher<TMatchers[K], TMatcherReturn> };
  type JestExtendedMatchers<TMatchers extends ExpectExtendMap, TActual> = JestMatchersShape<
    ExtendedMatchers<TMatchers, void, TActual>,
    ExtendedMatchers<TMatchers, Promise<void>, TActual>
  >;

  // when have called expect.extend
  type ExtendedExpectFunction<TMatchers extends ExpectExtendMap> = <TActual>(
    actual: TActual,
  ) => JestExtendedMatchers<TMatchers, TActual>;

  type ExtendedExpect<TMatchers extends ExpectExtendMap> = ExpectProperties &
    AndNot<CustomAsyncMatchers<TMatchers>> &
    ExtendedExpectFunction<TMatchers>;
  /**
   * Construct a type with the properties of T except for those in type K.
   */
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  type NonPromiseMatchers<T extends JestMatchersShape> = Omit<T, 'resolves' | 'rejects' | 'not'>;
  type PromiseMatchers<T extends JestMatchersShape> = Omit<T['resolves'], 'not'>;

  interface Constructable {
    new (...args: any[]): any;
  }

  interface Mock<T = any, Y extends any[] = any> extends Function, MockInstance<T, Y> {
    new (...args: Y): T;
    (...args: Y): T;
  }

  type SpyInstance = MockInstance<T, Y>;

  /**
   * Wrap a function with mock definitions
   *
   * @example
   *
   *  import { myFunction } from "./library";
   *  jest.mock("./library");
   *
   *  const mockMyFunction = myFunction as jest.MockedFunction<typeof myFunction>;
   *  expect(mockMyFunction.mock.calls[0][0]).toBe(42);
   */
  type MockedFunction<T extends (...args: any[]) => any> = MockInstance<ReturnType<T>, ArgsType<T>> & T;

  /**
   * Wrap a class with mock definitions
   *
   * @example
   *
   *  import { MyClass } from "./libary";
   *  jest.mock("./library");
   *
   *  const mockedMyClass = MyClass as jest.MockedClass<MyClass>;
   *
   *  expect(mockedMyClass.mock.calls[0][0]).toBe(42); // Constructor calls
   *  expect(mockedMyClass.prototype.myMethod.mock.calls[0][0]).toBe(42); // Method calls
   */

  type MockedClass<T extends Constructable> = MockInstance<
    InstanceType<T>,
    T extends new (...args: infer P) => any ? P : never
  > & {
    prototype: T extends { prototype: any } ? Mocked<T['prototype']> : never;
  } & T;

  /**
   * Wrap an object or a module with mock definitions
   *
   * @example
   *
   *  jest.mock("../api");
   *  import * as api from "../api";
   *
   *  const mockApi = api as jest.Mocked<typeof api>;
   *  api.MyApi.prototype.myApiMethod.mockImplementation(() => "test");
   */
  type Mocked<T> = {
    [P in keyof T]: T[P] extends (...args: any[]) => any
      ? MockInstance<ReturnType<T[P]>, ArgsType<T[P]>>
      : T[P] extends Constructable
      ? MockedClass<T[P]>
      : T[P];
  } &
    T;

  interface MockInstance<T, Y extends any[]> {
    /** Returns the mock name string set by calling `mockFn.mockName(value)`. */
    getMockName(): string;
    /** Provides access to the mock's metadata */
    mock: MockContext<T, Y>;
    /**
     * Resets all information stored in the mockFn.mock.calls and mockFn.mock.instances arrays.
     *
     * Often this is useful when you want to clean up a mock's usage data between two assertions.
     *
     * Beware that `mockClear` will replace `mockFn.mock`, not just `mockFn.mock.calls` and `mockFn.mock.instances`.
     * You should therefore avoid assigning mockFn.mock to other variables, temporary or not, to make sure you
     * don't access stale data.
     */
    mockClear(): void;
    /**
     * Resets all information stored in the mock, including any initial implementation and mock name given.
     *
     * This is useful when you want to completely restore a mock back to its initial state.
     *
     * Beware that `mockReset` will replace `mockFn.mock`, not just `mockFn.mock.calls` and `mockFn.mock.instances`.
     * You should therefore avoid assigning mockFn.mock to other variables, temporary or not, to make sure you
     * don't access stale data.
     */
    mockReset(): void;
    /**
     * Does everything that `mockFn.mockReset()` does, and also restores the original (non-mocked) implementation.
     *
     * This is useful when you want to mock functions in certain test cases and restore the original implementation in others.
     *
     * Beware that `mockFn.mockRestore` only works when mock was created with `jest.spyOn`. Thus you have to take care of restoration
     * yourself when manually assigning `jest.fn()`.
     *
     * The [`restoreMocks`](https://jestjs.io/docs/en/configuration.html#restoremocks-boolean) configuration option is available
     * to restore mocks automatically between tests.
     */
    mockRestore(): void;
    /**
     * Accepts a function that should be used as the implementation of the mock. The mock itself will still record
     * all calls that go into and instances that come from itself – the only difference is that the implementation
     * will also be executed when the mock is called.
     *
     * Note: `jest.fn(implementation)` is a shorthand for `jest.fn().mockImplementation(implementation)`.
     */
    mockImplementation(fn?: (...args: Y) => T): this;
    /**
     * Accepts a function that will be used as an implementation of the mock for one call to the mocked function.
     * Can be chained so that multiple function calls produce different results.
     *
     * @example
     *
     * const myMockFn = jest
     *   .fn()
     *    .mockImplementationOnce(cb => cb(null, true))
     *    .mockImplementationOnce(cb => cb(null, false));
     *
     * myMockFn((err, val) => console.log(val)); // true
     *
     * myMockFn((err, val) => console.log(val)); // false
     */
    mockImplementationOnce(fn: (...args: Y) => T): this;
    /** Sets the name of the mock`. */
    mockName(name: string): this;
    /**
     * Just a simple sugar function for:
     *
     * @example
     *
     *   jest.fn(function() {
     *     return this;
     *   });
     */
    mockReturnThis(): this;
    /**
     * Accepts a value that will be returned whenever the mock function is called.
     *
     * @example
     *
     * const mock = jest.fn();
     * mock.mockReturnValue(42);
     * mock(); // 42
     * mock.mockReturnValue(43);
     * mock(); // 43
     */
    mockReturnValue(value: T): this;
    /**
     * Accepts a value that will be returned for one call to the mock function. Can be chained so that
     * successive calls to the mock function return different values. When there are no more
     * `mockReturnValueOnce` values to use, calls will return a value specified by `mockReturnValue`.
     *
     * @example
     *
     * const myMockFn = jest.fn()
     *   .mockReturnValue('default')
     *   .mockReturnValueOnce('first call')
     *   .mockReturnValueOnce('second call');
     *
     * // 'first call', 'second call', 'default', 'default'
     * console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
     *
     */
    mockReturnValueOnce(value: T): this;
    /**
     * Simple sugar function for: `jest.fn().mockImplementation(() => Promise.resolve(value));`
     */
    mockResolvedValue(value: ResolvedValue<T>): this;
    /**
     * Simple sugar function for: `jest.fn().mockImplementationOnce(() => Promise.resolve(value));`
     *
     * @example
     *
     * test('async test', async () => {
     *  const asyncMock = jest
     *    .fn()
     *    .mockResolvedValue('default')
     *    .mockResolvedValueOnce('first call')
     *    .mockResolvedValueOnce('second call');
     *
     *  await asyncMock(); // first call
     *  await asyncMock(); // second call
     *  await asyncMock(); // default
     *  await asyncMock(); // default
     * });
     *
     */
    mockResolvedValueOnce(value: ResolvedValue<T>): this;
    /**
     * Simple sugar function for: `jest.fn().mockImplementation(() => Promise.reject(value));`
     *
     * @example
     *
     * test('async test', async () => {
     *   const asyncMock = jest.fn().mockRejectedValue(new Error('Async error'));
     *
     *   await asyncMock(); // throws "Async error"
     * });
     */
    mockRejectedValue(value: RejectedValue<T>): this;

    /**
     * Simple sugar function for: `jest.fn().mockImplementationOnce(() => Promise.reject(value));`
     *
     * @example
     *
     * test('async test', async () => {
     *  const asyncMock = jest
     *    .fn()
     *    .mockResolvedValueOnce('first call')
     *    .mockRejectedValueOnce(new Error('Async error'));
     *
     *  await asyncMock(); // first call
     *  await asyncMock(); // throws "Async error"
     * });
     *
     */
    mockRejectedValueOnce(value: RejectedValue<T>): this;
  }

  /**
   * Represents the result of a single call to a mock function with a return value.
   */
  interface MockResultReturn<T> {
    type: 'return';
    value: T;
  }
  /**
   * Represents the result of a single incomplete call to a mock function.
   */
  interface MockResultIncomplete {
    type: 'incomplete';
    value: undefined;
  }
  /**
   * Represents the result of a single call to a mock function with a thrown error.
   */
  interface MockResultThrow {
    type: 'throw';
    value: any;
  }

  type MockResult<T> = MockResultReturn<T> | MockResultThrow | MockResultIncomplete;

  interface MockContext<T, Y extends any[]> {
    calls: Y[];
    instances: T[];
    invocationCallOrder: number[];
    /**
     * List of results of calls to the mock function.
     */
    results: Array<MockResult<T>>;
  }
}

// Jest ships with a copy of Jasmine. They monkey-patch its APIs and divergence/deprecation are expected.
// Relevant parts of Jasmine's API are below so they can be changed and removed over time.
// This file can't reference jasmine.d.ts since the globals aren't compatible.

declare function spyOn<T>(object: T, method: keyof T): jasmine.Spy;
/**
 * If you call the function pending anywhere in the spec body,
 * no matter the expectations, the spec will be marked pending.
 */
declare function pending(reason?: string): void;
/**
 * Fails a test when called within one.
 */
declare function fail(error?: any): never;
declare namespace jasmine {
  let DEFAULT_TIMEOUT_INTERVAL: number;
  function clock(): Clock;
  function any(aclass: any): Any;
  function anything(): Any;
  function arrayContaining(sample: any[]): ArrayContaining;
  function objectContaining(sample: any): ObjectContaining;
  function createSpy(name?: string, originalFn?: (...args: any[]) => any): Spy;
  function createSpyObj(baseName: string, methodNames: any[]): any;
  function createSpyObj<T>(baseName: string, methodNames: any[]): T;
  function pp(value: any): string;
  function addCustomEqualityTester(equalityTester: CustomEqualityTester): void;
  function addMatchers(matchers: CustomMatcherFactories): void;
  function stringMatching(value: string | RegExp): Any;

  interface Clock {
    install(): void;
    uninstall(): void;
    /**
     * Calls to any registered callback are triggered when the clock isticked forward
     * via the jasmine.clock().tick function, which takes a number of milliseconds.
     */
    tick(ms: number): void;
    mockDate(date?: Date): void;
  }

  interface Any {
    new (expectedClass: any): any;
    jasmineMatches(other: any): boolean;
    jasmineToString(): string;
  }

  interface ArrayContaining {
    new (sample: any[]): any;
    asymmetricMatch(other: any): boolean;
    jasmineToString(): string;
  }

  interface ObjectContaining {
    new (sample: any): any;
    jasmineMatches(other: any, mismatchKeys: any[], mismatchValues: any[]): boolean;
    jasmineToString(): string;
  }

  interface Spy {
    (...params: any[]): any;
    identity: string;
    and: SpyAnd;
    calls: Calls;
    mostRecentCall: { args: any[] };
    argsForCall: any[];
    wasCalled: boolean;
  }

  interface SpyAnd {
    /**
     * By chaining the spy with and.callThrough, the spy will still track all
     * calls to it but in addition it will delegate to the actual implementation.
     */
    callThrough(): Spy;
    /**
     * By chaining the spy with and.returnValue, all calls to the function
     * will return a specific value.
     */
    returnValue(val: any): Spy;
    /**
     * By chaining the spy with and.returnValues, all calls to the function
     * will return specific values in order until it reaches the end of the return values list.
     */
    returnValues(...values: any[]): Spy;
    /**
     * By chaining the spy with and.callFake, all calls to the spy
     * will delegate to the supplied function.
     */
    callFake(fn: (...args: any[]) => any): Spy;
    /**
     * By chaining the spy with and.throwError, all calls to the spy
     * will throw the specified value.
     */
    throwError(msg: string): Spy;
    /**
     * When a calling strategy is used for a spy, the original stubbing
     * behavior can be returned at any time with and.stub.
     */
    stub(): Spy;
  }

  interface Calls {
    /**
     * By chaining the spy with calls.any(),
     * will return false if the spy has not been called at all,
     * and then true once at least one call happens.
     */
    any(): boolean;
    /**
     * By chaining the spy with calls.count(),
     * will return the number of times the spy was called
     */
    count(): number;
    /**
     * By chaining the spy with calls.argsFor(),
     * will return the arguments passed to call number index
     */
    argsFor(index: number): any[];
    /**
     * By chaining the spy with calls.allArgs(),
     * will return the arguments to all calls
     */
    allArgs(): any[];
    /**
     * By chaining the spy with calls.all(), will return the
     * context (the this) and arguments passed all calls
     */
    all(): CallInfo[];
    /**
     * By chaining the spy with calls.mostRecent(), will return the
     * context (the this) and arguments for the most recent call
     */
    mostRecent(): CallInfo;
    /**
     * By chaining the spy with calls.first(), will return the
     * context (the this) and arguments for the first call
     */
    first(): CallInfo;
    /**
     * By chaining the spy with calls.reset(), will clears all tracking for a spy
     */
    reset(): void;
  }

  interface CallInfo {
    /**
     * The context (the this) for the call
     */
    object: any;
    /**
     * All arguments passed to the call
     */
    args: any[];
    /**
     * The return value of the call
     */
    returnValue: any;
  }

  interface CustomMatcherFactories {
    [index: string]: CustomMatcherFactory;
  }

  type CustomMatcherFactory = (util: MatchersUtil, customEqualityTesters: CustomEqualityTester[]) => CustomMatcher;

  interface MatchersUtil {
    equals(a: any, b: any, customTesters?: CustomEqualityTester[]): boolean;
    contains<T>(haystack: ArrayLike<T> | string, needle: any, customTesters?: CustomEqualityTester[]): boolean;
    buildFailureMessage(matcherName: string, isNot: boolean, actual: any, ...expected: any[]): string;
  }

  type CustomEqualityTester = (first: any, second: any) => boolean;

  interface CustomMatcher {
    compare<T>(actual: T, expected: T, ...args: any[]): CustomMatcherResult;
    compare(actual: any, ...expected: any[]): CustomMatcherResult;
  }

  interface CustomMatcherResult {
    pass: boolean;
    message: string | (() => string);
  }

  interface ArrayLike<T> {
    length: number;
    [n: number]: T;
  }
}

declare namespace jest {
  // types for implementing custom interfaces, from https://github.com/facebook/jest/tree/dd6c5c4/types

  // https://facebook.github.io/jest/docs/en/configuration.html#transform-object-string-string
  // const transformer: Transformer;

  // https://facebook.github.io/jest/docs/en/configuration.html#reporters-array-modulename-modulename-options
  // const reporter: Reporter;

  // https://facebook.github.io/jest/docs/en/configuration.html#testrunner-string
  // const testRunner: TestFramework;

  // https://facebook.github.io/jest/docs/en/configuration.html#testresultsprocessor-string
  // const testResultsProcessor: TestResultsProcessor;

  // leave above declarations for referencing type-dependencies
  // .vscode/settings.json: "typescript.referencesCodeLens.enabled": true

  // custom

  // flow's Maybe type https://flow.org/en/docs/types/primitives/#toc-maybe-types
  type Maybe<T> = void | null | undefined | T; // tslint:disable-line:void-return

  type TestResultsProcessor = (testResult: AggregatedResult) => AggregatedResult;

  type HasteResolver = any; // import HasteResolver from 'jest-resolve';
  type ModuleMocker = any; // import { ModuleMocker } from 'jest-mock';
  type ModuleMap = any; // import {ModuleMap} from 'jest-haste-map';
  type HasteFS = any; // import {FS as HasteFS} from 'jest-haste-map';
  type Runtime = any; // import Runtime from 'jest-runtime';
  type Script = any; // import {Script} from 'vm';

  // Config

  type Path = string;
  type Glob = string;

  interface HasteConfig {
    defaultPlatform?: Maybe<string>;
    hasteImplModulePath?: string;
    platforms?: string[];
    providesModuleNodeModules: string[];
  }

  type ReporterConfig = [string, object];

  type ConfigGlobals = object;

  type SnapshotUpdateState = 'all' | 'new' | 'none';

  interface DefaultOptions {
    automock: boolean;
    bail: boolean;
    browser: boolean;
    cache: boolean;
    cacheDirectory: Path;
    changedFilesWithAncestor: boolean;
    clearMocks: boolean;
    collectCoverage: boolean;
    collectCoverageFrom: Maybe<string[]>;
    coverageDirectory: Maybe<string>;
    coveragePathIgnorePatterns: string[];
    coverageReporters: string[];
    coverageThreshold: Maybe<{ global: { [key: string]: number } }>;
    errorOnDeprecated: boolean;
    expand: boolean;
    filter: Maybe<Path>;
    forceCoverageMatch: Glob[];
    globals: ConfigGlobals;
    globalSetup: Maybe<string>;
    globalTeardown: Maybe<string>;
    haste: HasteConfig;
    detectLeaks: boolean;
    detectOpenHandles: boolean;
    moduleDirectories: string[];
    moduleFileExtensions: string[];
    moduleNameMapper: { [key: string]: string };
    modulePathIgnorePatterns: string[];
    noStackTrace: boolean;
    notify: boolean;
    notifyMode: string;
    preset: Maybe<string>;
    projects: Maybe<Array<string | ProjectConfig>>;
    resetMocks: boolean;
    resetModules: boolean;
    resolver: Maybe<Path>;
    restoreMocks: boolean;
    rootDir: Maybe<Path>;
    roots: Maybe<Path[]>;
    runner: string;
    runTestsByPath: boolean;
    setupFiles: Path[];
    setupTestFrameworkScriptFile: Maybe<Path>;
    skipFilter: boolean;
    snapshotSerializers: Path[];
    testEnvironment: string;
    testEnvironmentOptions: object;
    testFailureExitCode: string | number;
    testLocationInResults: boolean;
    testMatch: Glob[];
    testPathIgnorePatterns: string[];
    testRegex: string;
    testResultsProcessor: Maybe<string>;
    testRunner: Maybe<string>;
    testURL: string;
    timers: 'real' | 'fake';
    transform: Maybe<{ [key: string]: string }>;
    transformIgnorePatterns: Glob[];
    watchPathIgnorePatterns: string[];
    useStderr: boolean;
    verbose: Maybe<boolean>;
    watch: boolean;
    watchman: boolean;
  }

  interface InitialOptions {
    automock?: boolean;
    bail?: boolean;
    browser?: boolean;
    cache?: boolean;
    cacheDirectory?: Path;
    clearMocks?: boolean;
    changedFilesWithAncestor?: boolean;
    changedSince?: string;
    collectCoverage?: boolean;
    collectCoverageFrom?: Glob[];
    collectCoverageOnlyFrom?: { [key: string]: boolean };
    coverageDirectory?: string;
    coveragePathIgnorePatterns?: string[];
    coverageReporters?: string[];
    coverageThreshold?: { global: { [key: string]: number } };
    detectLeaks?: boolean;
    detectOpenHandles?: boolean;
    displayName?: string;
    expand?: boolean;
    filter?: Path;
    findRelatedTests?: boolean;
    forceCoverageMatch?: Glob[];
    forceExit?: boolean;
    json?: boolean;
    globals?: ConfigGlobals;
    globalSetup?: Maybe<string>;
    globalTeardown?: Maybe<string>;
    haste?: HasteConfig;
    reporters?: Array<ReporterConfig | string>;
    logHeapUsage?: boolean;
    lastCommit?: boolean;
    listTests?: boolean;
    mapCoverage?: boolean;
    moduleDirectories?: string[];
    moduleFileExtensions?: string[];
    moduleLoader?: Path;
    moduleNameMapper?: { [key: string]: string };
    modulePathIgnorePatterns?: string[];
    modulePaths?: string[];
    name?: string;
    noStackTrace?: boolean;
    notify?: boolean;
    notifyMode?: string;
    onlyChanged?: boolean;
    outputFile?: Path;
    passWithNoTests?: boolean;
    preprocessorIgnorePatterns?: Glob[];
    preset?: Maybe<string>;
    projects?: Glob[];
    replname?: Maybe<string>;
    resetMocks?: boolean;
    resetModules?: boolean;
    resolver?: Maybe<Path>;
    restoreMocks?: boolean;
    rootDir?: Path;
    roots?: Path[];
    runner?: string;
    runTestsByPath?: boolean;
    scriptPreprocessor?: string;
    setupFiles?: Path[];
    setupFilesAfterEnv?: Path[];
    setupTestFrameworkScriptFile?: Path;
    silent?: boolean;
    skipFilter?: boolean;
    skipNodeResolution?: boolean;
    snapshotSerializers?: Path[];
    errorOnDeprecated?: boolean;
    testEnvironment?: string;
    testEnvironmentOptions?: object;
    testFailureExitCode?: string | number;
    testLocationInResults?: boolean;
    testMatch?: Glob[];
    testNamePattern?: string;
    testPathDirs?: Path[];
    testPathIgnorePatterns?: string[];
    testRegex?: string;
    testResultsProcessor?: Maybe<string>;
    testRunner?: string;
    testURL?: string;
    timers?: 'real' | 'fake';
    transform?: { [key: string]: string };
    transformIgnorePatterns?: Glob[];
    watchPathIgnorePatterns?: string[];
    unmockedModulePathPatterns?: string[];
    updateSnapshot?: boolean;
    useStderr?: boolean;
    verbose?: Maybe<boolean>;
    watch?: boolean;
    watchAll?: boolean;
    watchman?: boolean;
    watchPlugins?: string[];
  }

  interface GlobalConfig {
    bail: boolean;
    collectCoverage: boolean;
    collectCoverageFrom: Glob[];
    collectCoverageOnlyFrom: Maybe<{ [key: string]: boolean }>;
    coverageDirectory: string;
    coverageReporters: string[];
    coverageThreshold: { global: { [key: string]: number } };
    expand: boolean;
    forceExit: boolean;
    logHeapUsage: boolean;
    mapCoverage: boolean;
    noStackTrace: boolean;
    notify: boolean;
    projects: Glob[];
    replname: Maybe<string>;
    reporters: ReporterConfig[];
    rootDir: Path;
    silent: boolean;
    testNamePattern: string;
    testPathPattern: string;
    testResultsProcessor: Maybe<string>;
    updateSnapshot: SnapshotUpdateState;
    useStderr: boolean;
    verbose: Maybe<boolean>;
    watch: boolean;
    watchman: boolean;
  }

  interface ProjectConfig {
    automock: boolean;
    browser: boolean;
    cache: boolean;
    cacheDirectory: Path;
    clearMocks: boolean;
    coveragePathIgnorePatterns: string[];
    cwd: Path;
    detectLeaks: boolean;
    displayName: Maybe<string>;
    forceCoverageMatch: Glob[];
    globals: ConfigGlobals;
    haste: HasteConfig;
    moduleDirectories: string[];
    moduleFileExtensions: string[];
    moduleLoader: Path;
    moduleNameMapper: Array<[string, string]>;
    modulePathIgnorePatterns: string[];
    modulePaths: string[];
    name: string;
    resetMocks: boolean;
    resetModules: boolean;
    resolver: Maybe<Path>;
    rootDir: Path;
    roots: Path[];
    runner: string;
    setupFiles: Path[];
    setupTestFrameworkScriptFile: Path;
    skipNodeResolution: boolean;
    snapshotSerializers: Path[];
    testEnvironment: string;
    testEnvironmentOptions: object;
    testLocationInResults: boolean;
    testMatch: Glob[];
    testPathIgnorePatterns: string[];
    testRegex: string;
    testRunner: string;
    testURL: string;
    timers: 'real' | 'fake';
    transform: Array<[string, Path]>;
    transformIgnorePatterns: Glob[];
    unmockedModulePathPatterns: Maybe<string[]>;
    watchPathIgnorePatterns: string[];
  }

  // Console

  type LogMessage = string;
  interface LogEntry {
    message: LogMessage;
    origin: string;
    type: LogType;
  }
  type LogType = 'log' | 'info' | 'warn' | 'error';
  type ConsoleBuffer = LogEntry[];

  // Context

  interface Context {
    config: ProjectConfig;
    hasteFS: HasteFS;
    moduleMap: ModuleMap;
    resolver: HasteResolver;
  }

  // Environment

  interface FakeTimers {
    clearAllTimers(): void;
    getTimerCount(): number;
    runAllImmediates(): void;
    runAllTicks(): void;
    runAllTimers(): void;
    runTimersToTime(msToRun: number): void;
    advanceTimersByTime(msToRun: number): void;
    advanceTimersToNextTimer(steps?: number): void;
    runOnlyPendingTimers(): void;
    runWithRealTimers(callback: any): void;
    useFakeTimers(): void;
    useRealTimers(): void;
  }

  interface $JestEnvironment {
    global: Global;
    fakeTimers: FakeTimers;
    testFilePath: string;
    moduleMocker: ModuleMocker;

    dispose(): void;
    runScript(script: Script): any;
  }

  type Environment = $JestEnvironment;

  // Global

  type Global = object;

  // Reporter

  interface ReporterOnStartOptions {
    estimatedTime: number;
    showStatus: boolean;
  }

  // TestResult

  interface RawFileCoverage {
    path: string;
    s: { [statementId: number]: number };
    b: { [branchId: number]: number };
    f: { [functionId: number]: number };
    l: { [lineId: number]: number };
    fnMap: { [functionId: number]: any };
    statementMap: { [statementId: number]: any };
    branchMap: { [branchId: number]: any };
    inputSourceMap?: object;
  }

  interface RawCoverage {
    [filePath: string]: RawFileCoverage;
  }

  interface FileCoverageTotal {
    total: number;
    covered: number;
    skipped: number;
    pct?: number;
  }

  interface CoverageSummary {
    lines: FileCoverageTotal;
    statements: FileCoverageTotal;
    branches: FileCoverageTotal;
    functions: FileCoverageTotal;
  }

  interface FileCoverage {
    getLineCoverage(): object;
    getUncoveredLines(): number[];
    getBranchCoverageByLine(): object;
    toJSON(): object;
    merge(other: object): void;
    computeSimpleTotals(property: string): FileCoverageTotal;
    computeBranchTotals(): FileCoverageTotal;
    resetHits(): void;
    toSummary(): CoverageSummary;
  }

  interface CoverageMap {
    merge(data: object): void;
    getCoverageSummary(): FileCoverage;
    data: RawCoverage;
    addFileCoverage(fileCoverage: RawFileCoverage): void;
    files(): string[];
    fileCoverageFor(file: string): FileCoverage;
  }

  interface SerializableError {
    code?: any;
    message: string;
    stack: Maybe<string>;
    type?: string;
  }

  type Status = 'passed' | 'failed' | 'skipped' | 'pending';

  type Bytes = number;
  type Milliseconds = number;

  interface AssertionResult {
    ancestorTitles: string[];
    duration?: Maybe<Milliseconds>;
    failureMessages: string[];
    fullName: string;
    numPassingAsserts: number;
    status: Status;
    title: string;
  }

  interface AggregatedResult {
    coverageMap?: Maybe<CoverageMap>;
    numFailedTests: number;
    numFailedTestSuites: number;
    numPassedTests: number;
    numPassedTestSuites: number;
    numPendingTests: number;
    numPendingTestSuites: number;
    numRuntimeErrorTestSuites: number;
    numTodoTests: number;
    numTotalTests: number;
    numTotalTestSuites: number;
    snapshot: SnapshotSummary;
    startTime: number;
    success: boolean;
    testResults: TestResult[];
    wasInterrupted: boolean;
  }

  interface TestResult {
    console: Maybe<ConsoleBuffer>;
    coverage?: RawCoverage;
    memoryUsage?: Bytes;
    failureMessage: Maybe<string>;
    numFailingTests: number;
    numPassingTests: number;
    numPendingTests: number;
    perfStats: {
      end: Milliseconds;
      start: Milliseconds;
    };
    skipped: boolean;
    snapshot: {
      added: number;
      fileDeleted: boolean;
      matched: number;
      unchecked: number;
      unmatched: number;
      updated: number;
    };
    sourceMaps: { [sourcePath: string]: string };
    testExecError?: SerializableError;
    testFilePath: string;
    testResults: AssertionResult[];
  }

  interface SnapshotSummary {
    added: number;
    didUpdate: boolean;
    failure: boolean;
    filesAdded: number;
    filesRemoved: number;
    filesUnmatched: number;
    filesUpdated: number;
    matched: number;
    total: number;
    unchecked: number;
    unmatched: number;
    updated: number;
  }

  // TestRunner

  interface Test {
    context: Context;
    duration?: number;
    path: Path;
  }

  // tslint:disable-next-line:no-empty-interface
  interface Set<T> {} // To allow non-ES6 users the Set below
  interface Reporter {
    onTestResult?(test: Test, testResult: TestResult, aggregatedResult: AggregatedResult): void;
    onRunStart?(results: AggregatedResult, options: ReporterOnStartOptions): void;
    onTestStart?(test: Test): void;
    onRunComplete?(contexts: Set<Context>, results: AggregatedResult): Maybe<Promise<void>>;
    getLastError?(): Maybe<Error>;
  }

  type TestFramework = (
    globalConfig: GlobalConfig,
    config: ProjectConfig,
    environment: Environment,
    runtime: Runtime,
    testPath: string,
  ) => Promise<TestResult>;

  // Transform

  interface TransformedSource {
    code: string;
    map: Maybe<object | string>;
  }

  interface TransformOptions {
    instrument: boolean;
  }

  interface Transformer {
    canInstrument?: boolean;
    createTransformer?(options: any): Transformer;

    getCacheKey?(fileData: string, filePath: Path, configStr: string, options: TransformOptions): string;

    process(
      sourceText: string,
      sourcePath: Path,
      config: ProjectConfig,
      options?: TransformOptions,
    ): string | TransformedSource;
  }
}
