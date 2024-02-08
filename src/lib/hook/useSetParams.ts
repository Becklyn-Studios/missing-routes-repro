import { NavigationOptions } from "@type/common";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useSetParams = (reset?: boolean) => {
    const params = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    return (query: string, value?: any, options?: NavigationOptions) => {
        const { scroll = false } = options ?? {};
        const p = new URLSearchParams(reset ? {} : params);
        if (!value) {
            p.delete(query);
        } else {
            p.set(query, value);
        }

        router.push(`${pathname}?${p.toString()}`, { scroll });
    };
};

export const useSetMultipleParams = (reset?: boolean) => {
    const params = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    return (queue: { query: string; value?: any }[], options?: NavigationOptions) => {
        const { scroll = false } = options ?? {};
        const p = new URLSearchParams(reset ? {} : params);

        queue.forEach(({ query, value }) => {
            if (!value) {
                p.delete(query);
            } else {
                p.set(query, value);
            }
        });

        router.push(`${pathname}?${p.toString()}`, { scroll });
    };
};
