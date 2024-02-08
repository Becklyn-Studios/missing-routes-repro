"use client";

import React from "react";
import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import { NeoInput, NeoInputProps } from "@components/shared/NeoInput/NeoInput";
import { NeoParagraph } from "@components/shared/NeoParagraph/NeoParagraph";
import { useSearchParams } from "next/navigation";
import { useSetParams } from "@lib/hook/useSetParams";
import { ContentfulRichText } from "@type/contentful/ContentfulRichText";
import { Rte, isRte } from "@lib/rte";
import { first } from "@lib/util";
import "./NeoSearch.scss";

export interface NeoSearchProps extends NeoInputProps {
    searchParam: string;
    name: string;
    focussed?: boolean;
    message?: string | ContentfulRichText;
    action?: ((formData: FormData) => void) | undefined;
}

export const NeoSearch: React.FC<NeoSearchProps> = ({
    type = "search",
    searchParam,
    focussed = true,
    message,
    children,
    action,
    ...props
}) => {
    const searchParams = useSearchParams();
    const defaultValue = first(searchParams.get(searchParam));
    const update = useSetParams();

    const onChangeSearch = (formData: FormData) => {
        update(searchParam, formData.get(searchParam));
    };

    return (
        <form className="neo-search" action={action ?? onChangeSearch}>
            <div className="neo-search__inner">
                <NeoInput type={type} defaultValue={defaultValue} autoFocus={focussed} {...props} />
                <div className="neo-search__submit">
                    <button type="submit">
                        <NeoIcon icon={"search"} />
                    </button>
                </div>
            </div>
            {message && (
                <NeoParagraph> {isRte(message) ? <Rte content={message} /> : message}</NeoParagraph>
            )}
            {children}
        </form>
    );
};
