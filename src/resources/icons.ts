import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import { 	FaDiscord,
	FaGithub,
	FaLinkedin,
	FaXTwitter,
	FaInstagram,
	FaFacebook,
	FaAddressCard,
	FaX } from "react-icons/fa6";
  import {
    SiJavascript,
    SiNextdotjs,
    SiFigma,
    SiSupabase,
    SiMysql,
    SiReact,
    SiTypescript,
  } from "react-icons/si";
import { FaPinterest, FaWhatsapp, FaReddit, FaTelegram, } from "react-icons/fa6";
import { Aws } from '@lobehub/icons';

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  facebook: FaFacebook,
  addressCard: FaAddressCard,
  x: FaX,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  cv: HiOutlineDocument, // Using document icon for CV/resume
  aws: Aws,
  react: SiReact,
  typescript: SiTypescript,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
