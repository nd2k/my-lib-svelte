export const getPropertyValue = (window:Window, property: string) => {
    let value = window.getComputedStyle(document.documentElement).getPropertyValue(property);
    return value;
}