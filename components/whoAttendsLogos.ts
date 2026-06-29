export interface WhoAttendsLogo {
  name: string;
  logo: string;
  /** Override when the asset renders smaller than other logos at the default size. */
  maxHeight?: number;
  maxWidth?: number;
  /** Extra visual scale for assets with excess whitespace. */
  scale?: number;
  marginX?: number;
  marginY?: number;
  /** Narrower marquee slot for logos with excess transparent padding. */
  slotWidth?: number;
}

const LOGO_BASE = '/images/who-attends-logos';

function logo(
  name: string,
  file: string,
  size?: Pick<WhoAttendsLogo, 'maxHeight' | 'maxWidth' | 'scale' | 'marginX' | 'marginY'>,
): WhoAttendsLogo {
  return { name, logo: `${LOGO_BASE}/${file}`, ...size };
}

/** Row order for the homepage WHO ATTENDS marquee (left → right, top → bottom). */
export const whoAttendsLogoRows: WhoAttendsLogo[][] = [
  [
    logo('ofi', 'ofi.png', { maxHeight: 160, maxWidth: 400 }),
    logo('Touton Group', 'Touton Group.png', { maxHeight: 160, maxWidth: 400 }),
    logo('Barry Callebaut', 'Barry Callebaut.png'),
    logo('Ferrero', 'ferrero-brandlogo.net.png', { maxHeight: 160, maxWidth: 400 }),
    logo('Starbucks', 'Starbucks.png', { maxHeight: 85, maxWidth: 85 }),
    logo('HSBC', 'Hsbc_logo_PNG2.png'),
    logo('ALDI SÜD', 'ALDI SUD.png'),
    logo('Tchibo', 'Tchibo.png'),
    logo('Volcafe', 'Volcafe.png'),
  ],
  [
    logo('The World Bank', 'The World Bank.png', {
      maxHeight: 168,
      maxWidth: 450,
      scale: 1.3,
      marginX: 32,
    }),
    logo('Lavazza Group', 'LAVAZZA-GROUP.png', { maxHeight: 100, maxWidth: 250 }),
    logo('Mars', 'Mars Wordmark RGB Blue.png'),
    logo('Neumann Gruppe', 'Neumann Gruppe_Logo_left-1.png', {
      maxHeight: 200,
      maxWidth: 1000,
      scale: 1.5,
      marginX: 32,
    }),
    logo('ICE', 'ICE.png', { maxHeight: 90, maxWidth: 90 }),
    logo('Planet Labs', '512px-Planet_Labs_logo.png', { maxHeight: 140, maxWidth: 340 }),
    logo('European Commission', 'EU.png', { maxHeight: 168, maxWidth: 400 }),
    logo('JDE Peet\'s', 'JDE Peet_s.png'),
    logo('Bain & Company', 'bainstackedlogo_dig_red_1280x389px (1).png'),
  ],
  [
    logo('FAO', 'FAO.png', {
      maxHeight: 180,
      maxWidth: 550,
      scale: 1.4,
      marginX: 48,
    }),
    logo('European Space Agency', 'ESA_logo_2020_Deep.png', { maxHeight: 140, maxWidth: 340 }),
    logo('Gold Standard', 'Gold Standard.png', { maxHeight: 140, maxWidth: 340 }),
    logo('AXA Climate', 'AXA_Climate_Blue_Horizontal_RVB.png', { maxHeight: 65, maxWidth: 220 }),
    logo('LDC', 'LDC.png', { maxHeight: 72, maxWidth: 130 }),
    logo('IFC', 'IFC.png', {
      maxHeight: 168,
      maxWidth: 600,
      scale: 1.4,
      marginX: 32,
    }),
    logo('ECOM', 'ECOM.png'),
    logo('Yara International', 'Yara International.png'),
    logo('Rainforest Alliance', 'Rainforest-Alliance-logo.png'),
  ],
];

/** Static 3×7 grid for the partners page WHO ATTENDS section. */
export const partnersPageWhoAttendsRows: WhoAttendsLogo[][] = [
  [
    logo('Tchibo', 'Tchibo.png', { maxHeight: 72, maxWidth: 140 }),
    logo('Touton Group', 'Touton Group.png', { maxHeight: 72, maxWidth: 130 }),
    logo('Ferrero', 'ferrero-brandlogo.net.png', { maxHeight: 72, maxWidth: 140 }),
    logo('Starbucks', 'Starbucks.png', { maxHeight: 64, maxWidth: 64 }),
    logo('Barry Callebaut', 'Barry Callebaut.png', { maxHeight: 72, maxWidth: 160 }),
    logo('Mars', 'Mars Wordmark RGB Blue.png', { maxHeight: 72, maxWidth: 120 }),
    logo('Lavazza Group', 'LAVAZZA-GROUP.png', { maxHeight: 72, maxWidth: 150 }),
  ],
  [
    logo('Volcafe', 'Volcafe.png', { maxHeight: 72, maxWidth: 150 }),
    logo('Neumann Gruppe', 'Neumann Gruppe_Logo_left-1.png', { maxHeight: 68, maxWidth: 130 }),
    logo('ofi', 'ofi.png', { maxHeight: 72, maxWidth: 130 }),
    logo('LDC', 'LDC.png', { maxHeight: 68, maxWidth: 90 }),
    logo('ECOM', 'ECOM.png', { maxHeight: 72, maxWidth: 130 }),
    logo('HSBC', 'Hsbc_logo_PNG2.png', { maxHeight: 72, maxWidth: 140 }),
    logo('UCC', 'UCCE Logo Colour.png', { maxHeight: 72, maxWidth: 100 }),
  ],
  [
    logo('FAO', 'FAO.png', { maxHeight: 80, maxWidth: 160 }),
    logo('The World Bank', 'The World Bank.png', { maxHeight: 72, maxWidth: 150 }),
    logo('European Commission', 'EU.png', { maxHeight: 72, maxWidth: 90 }),
    logo('IFC', 'IFC.png', { maxHeight: 80, maxWidth: 160 }),
    logo('JDE Peet\'s', 'JDE Peet_s.png', { maxHeight: 72, maxWidth: 100 }),
    logo('Yara International', 'Yara International.png', { maxHeight: 72, maxWidth: 130 }),
    logo('AXA Climate', 'AXA_Climate_Blue_Horizontal_RVB.png', { maxHeight: 68, maxWidth: 110 }),
  ],
];

export const whoAttendsLogos: WhoAttendsLogo[] = whoAttendsLogoRows.flat();

const PARTNERS_2025_BASE = '/images/2025-partners';

function partner2025Logo(
  name: string,
  file: string,
  size?: Pick<
    WhoAttendsLogo,
    'maxHeight' | 'maxWidth' | 'scale' | 'marginX' | 'marginY' | 'slotWidth'
  >,
): WhoAttendsLogo {
  return { name, logo: `${PARTNERS_2025_BASE}/${file}`, ...size };
}

/** 2025 partners marquee — order follows the numeric prefix on each filename. */
export const partners2025Logos: WhoAttendsLogo[] = [
  partner2025Logo('Okala', '1okala_VBL_LogoV03_GreenForest.png', {
    maxHeight: 76,
    maxWidth: 155,
  }),
  partner2025Logo('Picterra', '2Picterra_Primary_Logo_Dark (1) (1).png', {
    maxHeight: 90,
    maxWidth: 200,
  }),
  partner2025Logo('Chloris Geospatial', '3 Chloris Geospatial_Logo_Square_RGB_Midnight_v1.png', {
    maxHeight: 80,
    maxWidth: 110,
    slotWidth: 108,
    marginX: -4,
  }),
  partner2025Logo('Planet', '4Planet_Labs_logo.svg.png', {
    maxHeight: 90,
    maxWidth: 160,
  }),
  partner2025Logo('Satelligence', '5Satelligence_Logo_RGB_FC (5).png', {
    maxHeight: 90,
    maxWidth: 200,
  }),
  partner2025Logo('Tanzania', '6Tanzania.png', {
    maxHeight: 80,
    maxWidth: 80,
    slotWidth: 96,
    marginX: 4,
  }),
  partner2025Logo('FoodChain ID', '7Foodchain Id.png', {
    maxHeight: 90,
    maxWidth: 220,
  }),
  partner2025Logo('Ubees', '8Ubees-logo-2022-scaled.png', {
    maxHeight: 90,
    maxWidth: 180,
  }),
];
