import React from "react";
import Link from "next/link";
import { NeoIcon } from "../NeoIcon/NeoIcon";

export interface NeoSocialMediaListProps {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  xing?: string;
  youtube?: string;
  instagram?: string;
  wechat?: string;
  isRed?: boolean;
}

export const NeoSocialMediaList: React.FC<NeoSocialMediaListProps> = ({
  facebook,
  twitter,
  linkedin,
  xing,
  youtube,
  instagram,
  wechat,
}) => {
  let href = "";

  return (
    <ul className="neo-socialmedia-list NeoSocialMediaList socialMediaList">
      {facebook && (
        <li>
          <Link href={`${facebook}${href}`} target="_blank">
            <NeoIcon icon={"facebook"} className={"and-another-class"} />
          </Link>
        </li>
      )}
      {twitter && (
        <li>
          <Link href={`${twitter}${href}`} target="_blank">
            <NeoIcon icon={"twitter"} />
          </Link>
        </li>
      )}
      {linkedin && (
        <li>
          <Link href={`${linkedin}${href}`} target="_blank">
            <NeoIcon icon={"linkedin"} />
          </Link>
        </li>
      )}
      {xing && (
        <li>
          <Link href={`${xing}${href}`} target="_blank">
            <NeoIcon icon={"xing"} />
          </Link>
        </li>
      )}
      {youtube && (
        <li>
          <Link href={youtube} target="_blank">
            <NeoIcon icon={"youtube"} width={90} />
          </Link>
        </li>
      )}
      {instagram && (
        <li>
          <Link href={instagram} target="_blank">
            <NeoIcon icon={"instagram"} />
          </Link>
        </li>
      )}
      {wechat && (
        <li>
          <Link href={wechat} target="_blank">
            <NeoIcon icon={"wechat"} />
          </Link>
        </li>
      )}
    </ul>
  );
};
