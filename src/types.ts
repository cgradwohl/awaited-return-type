const foo = () => undefined;
export type Message = Awaited<ReturnType<typeof foo>>;
