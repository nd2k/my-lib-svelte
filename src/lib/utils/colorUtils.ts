export const createTheme = (): void => {
    let allCssVariables: {[key: string]: string} = {};
    allCssVariables = getAllCssVariables();
    let allColorVariables: [string, string][] = [];
    allColorVariables = Object.entries(allCssVariables).filter(([key]) => key.includes('color'));
    allColorVariables.forEach(color => {
        let rgb = color[1]?.match(/\d+/g)?.map(Number);
        if (rgb !== undefined) {
            generateShade(rgb[0], rgb[1], rgb[2], 10, color[0])
        }
    });
    // console.log(document.documentElement.style.getPropertyValue(document.documentElement.style[10]));
    let CSSStyleDeclaration: CSSStyleDeclaration = document.documentElement.style;
    let colorVariables = Object.entries(CSSStyleDeclaration).filter(([key, value]) => value.includes('color'));
    colorVariables.forEach(color => {
        let colorValue = CSSStyleDeclaration.getPropertyValue(color[1]);
        let styleSheetElement = document.createElement('style');
        document.getElementsByTagName('head')[0].appendChild(styleSheetElement);
        let rule: string = `background-color:rgb(${colorValue}); color:white;`;
        styleSheetElement.sheet?.insertRule(`.${color[1]} {${rule}}`, 0);
    });
}

const getAllCssVariables = (): {[key: string]: string} => {
    // could pass in an array of specific stylesheets for optimization
    let styleSheets: StyleSheetList = document.styleSheets;
    const getAllCSSVariableNames = (styleSheets: StyleSheetList): string[] => {
        let cssVars: string[] = [];
        // loop each stylesheet
        for(let i = 0; i < styleSheets.length; i++){
        // loop stylesheet's cssRules
            try { // try/catch used because 'hasOwnProperty' doesn't work
                for ( let j = 0; j < styleSheets[i].cssRules.length; j++) {
                    try {
                        // loop stylesheet's cssRules' style (property names)
                        let CSSStyleRule = styleSheets[i].cssRules[j] as CSSStyleRule;
                        for (let k = 0; k < CSSStyleRule.style.length; k++) {
                            let name = CSSStyleRule.style[k];
                            // test name for css variable signiture and uniqueness
                            if (name.startsWith('--') && cssVars.indexOf(name) == -1) {
                                cssVars.push(name);
                            }
                        }
                    } catch (error) {
                      
                    }
                }
            } catch (error) {
              
            }
        }
        return cssVars;
    }
    
    const getElementCSSVariables = (allCSSVars: string[], element = document.body) => {
        let elStyles = window.getComputedStyle(element);
        let cssVars: {[key: string]: string} = {};
        for(let i = 0; i < allCSSVars.length; i++){
            let key = allCSSVars[i];
            let value = elStyles.getPropertyValue(key)
            if (value) {
                cssVars[key] = value;
            }
        }
        return cssVars;
    }
 
 let cssVars = getAllCSSVariableNames(styleSheets);
 return getElementCSSVariables(cssVars, document.documentElement);
}

const generateShade = (r: number, g: number, b: number, nbOfShade: number, variantName: string): void => {
    const max = Math.max(Math.max(r, Math.max(g,b)), 1);
    const step = 255 / (max * nbOfShade);
    let color: string;
    for (let i = 1; i < nbOfShade; i++) {
        color = `${(r * step * ((nbOfShade + 2 ) - i)).toFixed()}, ${(g * step * ((nbOfShade + 2 )  - i)).toFixed()}, ${(b * step * ((nbOfShade + 2 )  - i)).toFixed()}`;
        document.documentElement.style.setProperty(`${variantName}-${i}00`, color);
    }
}

export const getPropertyValue = (window:Window, property: string) => {
    let value = window.getComputedStyle(document.documentElement).getPropertyValue(property);
    return value;
}