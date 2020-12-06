
const breakpoint = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

const devicesMin = {
    mobileS: `(min-width: ${breakpoint.mobileS})`,
    mobileM: `(min-width: ${breakpoint.mobileM})`,
    mobileL: `(min-width: ${breakpoint.mobileL})`,
    tablet: `(min-width: ${breakpoint.tablet})`,
    laptop: `(min-width: ${breakpoint.laptop})`,
    laptopL: `(min-width: ${breakpoint.laptopL})`,
    desktop: `(min-width: ${breakpoint.desktop})`,
    desktopL: `(min-width: ${breakpoint.desktop})`
};

const devicesMax = {
    mobileS: `(max-width: ${breakpoint.mobileS})`,
    mobileM: `(max-width: ${breakpoint.mobileM})`,
    mobileL: `(max-width: ${breakpoint.mobileL})`,
    tablet: `(max-width: ${breakpoint.tablet})`,
    laptop: `(max-width: ${breakpoint.laptop})`,
    laptopL: `(max-width: ${breakpoint.laptopL})`,
    desktop: `(max-width: ${breakpoint.desktop})`,
    desktopL: `(max-width: ${breakpoint.desktop})`
};

export {devicesMin, devicesMax};