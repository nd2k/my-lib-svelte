export const getPropertyValue = (window:Window, property: string) => {
    let value = window.getComputedStyle(document.documentElement).getPropertyValue(property);
    return value;
}

export const generateDarkerShade = (r: number, g: number, b: number, nbOfShade: number, variantName: string): void => {
    const max = Math.max(Math.max(r, Math.max(g,b)), 1);
    const step = 255 / (max * 10);
    let color: string;
    
    for (let i = 1; i < nbOfShade; i++) {
        color = `${(r * step * i).toFixed()}, ${(g * step * i).toFixed()}, ${(b * step * i).toFixed()}`;
        document.documentElement.style.setProperty(`${variantName}-${i}00`, color);
    }
}