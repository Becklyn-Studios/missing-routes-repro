import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

export const isObject = (
  value: unknown,
): value is { [key: string | number | symbol]: unknown } => {
  return typeof value === "object" && !Array.isArray(value);
};

export const isDefined = <T>(value: any): value is NonNullable<T> => {
  return value !== undefined && value !== null;
};

export function assertIsDefined<T>(value: T): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw Error(`Expected value to be defined, but received ${value}`);
  }
}

export const objectKeys = <Obj extends object>(obj: Obj): (keyof Obj)[] => {
  return Object.keys(obj) as (keyof Obj)[];
};

export const getNumericCssVariable = (name: string): number | undefined => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(
    name,
  );
  return parseInt(value.replace(/\D/g, ""));
};

export const first = <T = any>(value?: T | T[] | null) =>
  !!value ? (Array.isArray(value) ? value.at(0) : value) : undefined;

export const ensureArray = <T = any>(value?: T | T[] | null): Array<T> =>
  !!value ? (Array.isArray(value) ? value : [value]) : [];
