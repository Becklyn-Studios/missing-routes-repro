"use client";

import { NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import { NeoLink } from "@components/shared/NeoLink/NeoLink";
import axios from "axios";
import React, { PropsWithChildren } from "react";
import "./NeoDownloadLink.scss";

export interface NeoDownloadLinkProps {
    fileType?: string;
    fileSize?: number;
    href: string;
    fileName: string;
}

const knownFileTypes: Record<string, string> = {
    "application/pdf": "pdf",
    "application/zip": "zip",
    "image/png": "png",
    "image/gif": "gif",
    "image/jpeg": "jpeg",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "doc",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": "ppt",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xls",
};

const getTextForFileType = (fileType: string) => knownFileTypes[fileType] || "unknown";

const formatFileSize = (fileSize: number) => Math.round(fileSize * 100) / 100;

const convertToRightMetric = (fileSize: number) =>
    fileSize > 1000000
        ? `${formatFileSize(fileSize / 1000000)}MB`
        : `${formatFileSize(fileSize / 1000)}KB`;

export const NeoDownloadLink: React.FC<PropsWithChildren<NeoDownloadLinkProps>> = ({
    fileType,
    fileSize,
    href,
    fileName,
    children,
}) => {
    return (
        <div className={"neo-download-link"}>
            <NeoIcon icon="download" />
            <div>
                <NeoLink
                    hideMarker
                    noUppercase
                    onClick={() => {
                        axios({
                            url: href,
                            method: "GET",
                            responseType: "blob",
                        }).then(response => {
                            const url = window.URL.createObjectURL(new Blob([response.data]));
                            const link = document.createElement("a");
                            link.href = url;
                            link.setAttribute("download", fileName);
                            document.body.appendChild(link);
                            link.click();
                        });
                    }}
                    target="_blank">
                    {children}
                </NeoLink>
                {fileType && ` | ${getTextForFileType(fileType)}`}
                {fileSize && ` | ${convertToRightMetric(fileSize)}`}
            </div>
        </div>
    );
};
