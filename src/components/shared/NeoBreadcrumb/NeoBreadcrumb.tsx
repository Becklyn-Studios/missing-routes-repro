import React from "react";
import "./NeoBreadcrumb.scss";
import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import Link from "next/link";

export interface NeoBreadcrumbProps {
    items: NeoBreadcrumbItem[];
}

export interface NeoBreadcrumbItem {
    url: string;
    title: string;
    isPage?: boolean;
}

const createItem = (
    item: NeoBreadcrumbItem,
    index: number,
    first = false,
    last = false
): React.JSX.Element => {
    const isPage = item.isPage ?? true;

    return (
        <div key={index}>
            {!first && <NeoIcon icon="chevronRight"></NeoIcon>}
            {last || !isPage ? (
                <span className={"neo-breadcrumb-title"}>{item.title}</span>
            ) : (
                <Link className={"neo-breadcrumb-link"} href={item.url}>
                    {item.title}
                </Link>
            )}
        </div>
    );
};

export const NeoBreadcrumb: React.FC<NeoBreadcrumbProps> = ({ items = [] }) => {
    if (items.length === 0) {
        return null;
    }

    return (
        <div className={"neo-breadcrumb"}>
            {items.map((item, index) =>
                createItem(item, index, index === 0, index === items.length - 1)
            )}
        </div>
    );
};
