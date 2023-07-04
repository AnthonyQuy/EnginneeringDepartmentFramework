declare module "figlet" {
  export function textSync(text: string): void;
  export function textSync(
    text: string,
    options: Record<string, unknown>
  ): void;
}
