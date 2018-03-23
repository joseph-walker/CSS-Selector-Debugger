const offset: number = 42;

interface ColorIndex {
    h: number
}

interface ColorIndexAlpha extends ColorIndex {
    a: number
}

function isColorIndexAlpha(index: ColorIndex): index is ColorIndexAlpha {
    return (<ColorIndexAlpha>index).a !== undefined;
}

export function generateColorIndex(index: number): ColorIndex {
    return { h: index * offset };
}

export function generateColorIndexAlpha(index: number, alpha: number): ColorIndexAlpha {
    return { a: alpha, ...generateColorIndex(index) };
}

export function colorIndexToString(index: ColorIndex | ColorIndexAlpha): string {
    if (isColorIndexAlpha(index)) {
        return `hsla(${index.h}, 100%, 75%, ${index.a})`;
    }
    else {
        return `hsl(${index.h}, 100%, 75%)`;
    }
}