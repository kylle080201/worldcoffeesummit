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
    logo('Neumann Gruppe', 'Neumann Gruppe_Logo_left-1.jpg', {
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
    logo('ECOM', 'ECOM.jpg'),
    logo('Yara International', 'Yara International.png'),
    logo('Rainforest Alliance', 'Rainforest-Alliance-logo.png'),
  ],
];

/** Static grid order for the partners page WHO ATTENDS section (same logos as homepage). */
function toPartnersGridLogo(item: WhoAttendsLogo): WhoAttendsLogo {
  const overrides: Record<string, Pick<WhoAttendsLogo, 'maxHeight' | 'maxWidth'>> = {
    Starbucks: { maxHeight: 48, maxWidth: 48 },
    ICE: { maxHeight: 48, maxWidth: 48 },
    LDC: { maxHeight: 48, maxWidth: 72 },
    'European Commission': { maxHeight: 52, maxWidth: 72 },
    'AXA Climate': { maxHeight: 44, maxWidth: 88 },
    'Neumann Gruppe': { maxHeight: 48, maxWidth: 96 },
    'The World Bank': { maxHeight: 52, maxWidth: 104 },
    FAO: { maxHeight: 68, maxWidth: 136 },
    IFC: { maxHeight: 68, maxWidth: 136 },
    'Barry Callebaut': { maxHeight: 52, maxWidth: 124 },
  };

  return {
    name: item.name,
    logo: item.logo,
    maxHeight: 56,
    maxWidth: 112,
    ...overrides[item.name],
  };
}

export const partnersPageWhoAttendsRows: WhoAttendsLogo[][] = whoAttendsLogoRows.map(
  (row) => row.map(toPartnersGridLogo),
);

export const whoAttendsLogos: WhoAttendsLogo[] = whoAttendsLogoRows.flat();
