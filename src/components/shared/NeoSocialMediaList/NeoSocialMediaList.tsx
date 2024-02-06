import React from "react";
import Link from "next/link";

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
            Facebook
          </Link>
        </li>
      )}
      {twitter && (
        <li>
          <Link href={`${twitter}${href}`} target="_blank">
            Twitter
          </Link>
        </li>
      )}
      {linkedin && (
        <li>
          <Link href={`${linkedin}${href}`} target="_blank">
            LinkedIn
          </Link>
        </li>
      )}
      {xing && (
        <li>
          <Link href={`${xing}${href}`} target="_blank">
            Xing
          </Link>
        </li>
      )}
      {youtube && (
        <li>
          <Link href={youtube} target="_blank">
            YouTube
          </Link>
        </li>
      )}
      {instagram && (
        <li>
          <Link href={instagram} target="_blank">
            Instagram
          </Link>
        </li>
      )}
      {wechat && (
        <li>
          <Link href={wechat} target="_blank">
            WeChat
          </Link>
        </li>
      )}
    </ul>
  );
};
